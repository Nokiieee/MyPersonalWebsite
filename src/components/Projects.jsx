import { LuArrowUpRight } from 'react-icons/lu'
import financeTrackerImg from '../assets/FinanceTracker.png'
import mcdonaldsImg from '../assets/McDonalds.png'
import quizReviewerImg from '../assets/QuizReviewer.png'

const projects = [
  {
    image: financeTrackerImg,
    imgClassName: 'object-top',
    title: 'Personal Finance Tracker',
    description:
      'A full-stack MERN app to track income and expenses, manage transactions, and see where your money goes.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    url: 'https://personal-finance-tracker-practice-ten.vercel.app/',
  },
  {
    image: mcdonaldsImg,
    imgClassName: 'object-top',
    title: "McDonald's Landing Page",
    description:
      "A responsive McDonald's landing page built with React — a clean recreation of the brand's modern web experience.",
    tags: ['React', 'CSS3'],
    url: 'https://mc-donald-s-five.vercel.app/',
  },
  {
    image: quizReviewerImg,
    imgClassName: 'origin-top scale-[1.75] object-top',
    title: 'Quiz Reviewer',
    description:
      'A study tool for building custom flashcard sets and reviewing them with term/definition pairs and progress tracking.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    url: 'https://quiz-reviewer-cjcz.vercel.app/',
  },
]

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section-head reveal">
        <span className="eyebrow">Recent work</span>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-lead">
          A few things I've built while sharpening my craft as a developer.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[26px] max-[960px]:grid-cols-2 max-[720px]:grid-cols-1">
        {projects.map((p, i) => (
          <article
            className="card flex flex-col overflow-hidden rounded-card-lg shadow-soft transition hover:-translate-y-2 hover:shadow-hover reveal"
            key={p.title}
            style={{ '--reveal-delay': `${i * 100}ms` }}
          >
            <div className="relative h-[190px] overflow-hidden bg-brand">
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                loading="lazy"
                className={`h-full w-full object-cover ${p.imgClassName}`}
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="mb-2.5 text-[21px] font-bold text-ink">
                {p.title}
              </h3>
              <p className="mb-[18px] flex-1 text-[15px] leading-[1.6] text-ink-soft">
                {p.description}
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-[rgba(184,139,255,0.16)] px-3 py-[5px] text-xs font-semibold text-purple-deep"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2.5">
                <a
                  href={p.url}
                  className="btn btn-primary btn-sm inline-flex items-center gap-1.5"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project
                  <LuArrowUpRight size={16} aria-hidden="true" />
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
