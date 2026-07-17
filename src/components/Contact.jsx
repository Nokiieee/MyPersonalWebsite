import { useState } from 'react'

const EMAIL = 'aje.mendozaa@gmail.com'

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
    <section className="section contact" id="contact">
      <div className="section__head reveal">
        <span className="section__eyebrow">Say hello</span>
        <h2 className="section__title">Let's Connect</h2>
        <p className="section__lead">
          Open to remote opportunities and freelance work. Have an idea or a
          role in mind? Drop me a message.
        </p>
      </div>

      <div className="contact__grid">
        <div className="contact__info reveal">
          <h3 className="contact__info-title">Get in touch ✨</h3>
          <p className="contact__info-text">
            I'm currently open to remote opportunities where I can learn,
            contribute, and build things that matter.
          </p>

          <a href={`mailto:${EMAIL}`} className="contact__email">
            <span className="contact__email-icon">✉️</span>
            {EMAIL}
          </a>

          <div className="contact__socials">
            <a
              href="https://github.com/Nokiieee/"
              className="contact__social"
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
          className="contact__form reveal"
          style={{ '--reveal-delay': '120ms' }}
          onSubmit={handleSubmit}
        >
          <label className="contact__field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>
          <label className="contact__field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </label>
          <label className="contact__field">
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project or role..."
              rows={5}
              required
            />
          </label>
          <button type="submit" className="btn btn--primary contact__submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
