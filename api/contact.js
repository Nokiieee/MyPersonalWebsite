// Serverless function (Vercel): receives the portfolio contact form and emails
// the message to me via Resend. Runs only on the deployed site — `npm run dev`
// is Vite-only, so use `vercel dev` to exercise this locally.

const TO = process.env.CONTACT_TO_EMAIL || "denenoch.mendoza@gmail.com";
const FROM = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

const LIMITS = { name: 100, email: 254, message: 5000 };

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

// Per-IP counters. This lives in the warm instance's memory, so it resets on a
// cold start and isn't shared across concurrent instances — it throttles the
// obvious floods, not a determined distributed attacker. Swap for Upstash Redis
// if that ever matters.
const hits = new Map();

function clientIp(req) {
  const fwd = req.headers["x-forwarded-for"];
  if (typeof fwd === "string" && fwd) return fwd.split(",")[0].trim();
  return req.headers["x-real-ip"] || "unknown";
}

// Returns seconds to wait, or 0 when the request is allowed through.
function rateLimit(ip) {
  const now = Date.now();

  // Opportunistic prune so the map can't grow without bound.
  if (hits.size > 500) {
    for (const [key, entry] of hits) {
      if (entry.resetAt <= now) hits.delete(key);
    }
  }

  const entry = hits.get(ip);
  if (!entry || entry.resetAt <= now) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return 0;
  }

  entry.count += 1;
  if (entry.count > MAX_PER_WINDOW) {
    return Math.ceil((entry.resetAt - now) / 1000);
  }
  return 0;
}

// Deliberately loose — real validation is Resend bouncing it. This only catches
// obvious junk before we spend an API call on it.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const retryAfter = rateLimit(clientIp(req));
  if (retryAfter) {
    res.setHeader("Retry-After", String(retryAfter));
    return res.status(429).json({
      error: `Too many messages. Please try again in ${Math.ceil(retryAfter / 60)} minute(s).`,
    });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Email is not configured." });
  }

  const body = typeof req.body === "string" ? safeParse(req.body) : req.body;
  if (!body) return res.status(400).json({ error: "Invalid request body." });

  // Honeypot: the form ships a hidden "website" field that humans never see.
  // Anything that fills it is a bot — report success so it doesn't retry or
  // learn what tripped the filter.
  if (String(body.website ?? "").trim()) {
    console.warn("Honeypot triggered", clientIp(req));
    return res.status(200).json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  if (
    name.length > LIMITS.name ||
    email.length > LIMITS.email ||
    message.length > LIMITS.message
  ) {
    return res.status(400).json({ error: "One of the fields is too long." });
  }
  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ error: "That email address looks invalid." });
  }

  try {
    const resend = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Portfolio Contact <${FROM}>`,
        to: [TO],
        // So hitting reply in Gmail goes to the visitor, not to Resend.
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        html: `
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
        `,
      }),
    });

    if (!resend.ok) {
      const detail = await resend.text();
      console.error("Resend error", resend.status, detail);
      return res.status(502).json({ error: "Could not send the message." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact handler failed", err);
    return res.status(500).json({ error: "Something went wrong." });
  }
}

function safeParse(str) {
  try {
    return JSON.parse(str);
  } catch {
    return null;
  }
}
