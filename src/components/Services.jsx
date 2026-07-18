import { LuPalette, LuPlug, LuDatabase, LuPuzzle, LuWrench } from 'react-icons/lu'

const services = [
  {
    Icon: LuPalette,
    title: 'Front-End Development',
    description:
      'Building responsive, user-friendly interfaces with React.js, HTML5, and CSS3.',
  },
  {
    Icon: LuPlug,
    title: 'Back-End Development',
    description: 'Designing RESTful APIs with Node.js and Express.js.',
  },
  {
    Icon: LuDatabase,
    title: 'Database Design',
    description: 'Structuring and managing data using MongoDB.',
  },
  {
    Icon: LuPuzzle,
    title: 'Full-Stack Web Applications',
    description:
      'Connecting front-end and back-end into complete, working products.',
  },
  {
    Icon: LuWrench,
    title: 'Bug Fixing & Code Improvements',
    description:
      'Reviewing and refining existing codebases for performance and clarity.',
  },
]

function Services() {
  return (
    <section className="section" id="services">
      <div className="section-head reveal">
        <span className="eyebrow">What I offer</span>
        <h2 className="section-title">Services</h2>
        <p className="section-lead">
          How I can help bring your web project to life — from first pixel to
          deployed product.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-2 max-[720px]:grid-cols-1">
        {services.map((s, i) => (
          <article
            className="card rounded-card-lg px-7 py-8 transition hover:-translate-y-1.5 hover:shadow-hover reveal"
            key={s.title}
            style={{ '--reveal-delay': `${i * 100}ms` }}
          >
            <span className="mb-5 grid h-[60px] w-[60px] place-items-center rounded-[18px] bg-brand text-white shadow-soft">
              <s.Icon size={28} strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="mb-3 text-[19px] font-bold text-ink">{s.title}</h3>
            <p className="text-[15px] leading-[1.65] text-ink-soft">
              {s.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
