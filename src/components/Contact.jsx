import { useState } from 'react'

const EMAIL = 'aje.mendozaa@gmail.com'

const fieldClass =
  'resize-y rounded-[14px] border border-line bg-white/80 px-4 py-[13px] font-body text-[15px] text-ink transition focus:border-purple focus:shadow-[0_0_0_3px_rgba(123,47,247,0.15)] focus:outline-none dark:bg-white/5 dark:placeholder:text-ink-soft'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet — open the user's mail client with the message pre-filled.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`,
    )
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

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
            <span>✉️</span>
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
              <svg width="22" height="22" aria-hidden="true">
                <use href="/icons.svg#github-icon" />
              </svg>
            </a>
          </div>
        </div>

        <form
          className="card reveal flex flex-col gap-[18px] rounded-card-lg p-[34px] max-[720px]:p-7"
          style={{ '--reveal-delay': '120ms' }}
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
          <button type="submit" className="btn btn-primary mt-1.5 self-start">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
