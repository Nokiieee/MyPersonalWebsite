import { useState } from "react";
import {
  LuCircleAlert,
  LuCircleCheck,
  LuLoaderCircle,
  LuMail,
} from "react-icons/lu";
import githubIcon from "../assets/github.svg";

const EMAIL = "denenoch.mendoza@gmail.com";

const fieldClass =
  "resize-y rounded-[14px] border border-line bg-white/80 px-4 py-[13px] font-body text-[15px] text-ink transition focus:border-purple focus:shadow-[0_0_0_3px_rgba(123,47,247,0.15)] focus:outline-none dark:bg-white/5 dark:placeholder:text-ink-soft";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  // "idle" | "sending" | "sent" | "error"
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        // data.error means our handler answered. No error field means something
        // upstream of it did (404, HTML error page, proxy) — surface the status
        // so the cause is diagnosable instead of guesswork.
        throw new Error(
          data.error || `Could not send the message. (HTTP ${res.status})`,
        );
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong. Please email me directly.");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="section-head reveal">
        <span className="eyebrow">Say hello</span>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-lead">
          Open to remote opportunities and freelance work. Have an idea or a
          role in mind? Drop me a message.
        </p>
      </div>

      <div className="grid grid-cols-[1fr_1.15fr] items-stretch gap-10 max-[960px]:grid-cols-1">
        <div className="reveal rounded-card-lg bg-brand p-10 text-white shadow-soft max-[720px]:p-7 max-[720px]:text-center">
          <h3 className="mb-3.5 text-[26px] font-extrabold">Get in touch ✨</h3>
          <p className="mb-[30px] text-base leading-[1.7] opacity-90">
            I'm currently open to remote opportunities where I can learn,
            contribute, and build things that matter.
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2.5 break-all rounded-[14px] bg-white/[0.18] px-[18px] py-3 text-[15px] font-semibold transition hover:bg-white/30 max-[720px]:justify-center"
          >
            <LuMail size={18} aria-hidden="true" />
            {EMAIL}
          </a>

          <div className="mt-7 flex gap-3 max-[720px]:justify-center">
            <a
              href="https://github.com/Nokiieee/"
              className="grid h-[46px] w-[46px] place-items-center rounded-[14px] bg-white/90 transition hover:-translate-y-[3px] hover:bg-white"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="h-[22px] w-[22px] object-contain"
              />
            </a>
          </div>
        </div>

        <form
          className="card reveal flex flex-col gap-[18px] rounded-card-lg p-[34px] max-[720px]:p-7"
          style={{ "--reveal-delay": "120ms" }}
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-ink">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className={fieldClass}
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-ink">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={fieldClass}
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-ink">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or role..."
              rows={5}
              className={fieldClass}
              required
            />
          </label>
          {/* Honeypot — hidden from humans, irresistible to bots. Not
              type="hidden", which most bots know to skip. */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />

          <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-2.5">
            <button
              type="submit"
              className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-70"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <LuLoaderCircle
                    size={17}
                    aria-hidden="true"
                    className="animate-spin"
                  />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            <p aria-live="polite" className="text-sm font-medium">
              {status === "sent" && (
                <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                  <LuCircleCheck size={16} aria-hidden="true" />
                  Thanks! Your message is on its way.
                </span>
              )}
              {status === "error" && (
                <span className="inline-flex items-center gap-1.5 text-red-600 dark:text-red-400">
                  <LuCircleAlert size={16} aria-hidden="true" />
                  {error}
                </span>
              )}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
