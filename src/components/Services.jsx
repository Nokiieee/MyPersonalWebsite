const services = [
  {
    icon: '🎨',
    title: 'Front-End Development',
    description:
      'Building responsive, user-friendly interfaces with React.js, HTML5, and CSS3.',
  },
  {
    icon: '🔌',
    title: 'Back-End Development',
    description: 'Designing RESTful APIs with Node.js and Express.js.',
  },
  {
    icon: '🗄️',
    title: 'Database Design',
    description: 'Structuring and managing data using MongoDB.',
  },
  {
    icon: '🧩',
    title: 'Full-Stack Web Applications',
    description:
      'Connecting front-end and back-end into complete, working products.',
  },
  {
    icon: '🛠️',
    title: 'Bug Fixing & Code Improvements',
    description:
      'Reviewing and refining existing codebases for performance and clarity.',
  },
]

function Services() {
  return (
    <section className="section services" id="services">
      <div className="section__head reveal">
        <span className="section__eyebrow">What I offer</span>
        <h2 className="section__title">Services</h2>
        <p className="section__lead">
          How I can help bring your web project to life — from first pixel to
          deployed product.
        </p>
      </div>

      <div className="services__grid">
        {services.map((s, i) => (
          <article
            className="service-card reveal"
            key={s.title}
            style={{ '--reveal-delay': `${i * 100}ms` }}
          >
            <span className="service-card__icon">{s.icon}</span>
            <h3 className="service-card__title">{s.title}</h3>
            <p className="service-card__desc">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
