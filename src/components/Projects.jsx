const projects = [
  {
    emoji: '💰',
    title: 'Personal Finance Tracker',
    description:
      'A full-stack MERN app to track income and expenses, manage transactions, and see where your money goes.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    url: 'https://personal-finance-tracker-practice-ten.vercel.app/',
  },
  {
    emoji: '🍔',
    title: "McDonald's Landing Page",
    description:
      "A responsive McDonald's landing page built with React — a clean recreation of the brand's modern web experience.",
    tags: ['React', 'CSS3'],
    url: 'https://mc-donald-s-five.vercel.app/',
  },
  {
    emoji: '🧠',
    title: 'Quiz Reviewer',
    description:
      'A study tool for building custom flashcard sets and reviewing them with term/definition pairs and progress tracking.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    url: 'https://quiz-reviewer-cjcz.vercel.app/',
  },
]

function Projects() {
  return (
    <section className="section projects" id="projects">
      <div className="section__head reveal">
        <span className="section__eyebrow">Recent work</span>
        <h2 className="section__title">Featured Projects</h2>
        <p className="section__lead">
          A few things I've built while sharpening my craft as a developer.
        </p>
      </div>

      <div className="projects__grid">
        {projects.map((p, i) => (
          <article
            className="project-card reveal"
            key={p.title}
            style={{ '--reveal-delay': `${i * 100}ms` }}
          >
            <div className="project-card__thumb">
              <span className="project-card__emoji">{p.emoji}</span>
            </div>
            <div className="project-card__body">
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-card__links">
                <a
                  href={p.url}
                  className="btn btn--primary btn--sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project ↗
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
