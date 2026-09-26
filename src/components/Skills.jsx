import htmlIcon from '../assets/html5.svg'
import cssIcon from '../assets/css.svg'
import jsIcon from '../assets/javascript.svg'
import tsIcon from '../assets/typescript.svg'
import reactIcon from '../assets/react.svg'
import nextIcon from '../assets/next-js.svg'
import tailwindIcon from '../assets/tailwind-css.svg'
import nodeIcon from '../assets/node-js.svg'
import expressIcon from '../assets/express.svg'
import mongoIcon from '../assets/mongodb.svg'
import postgresIcon from '../assets/postgresql.svg'
import supabaseIcon from '../assets/supabase.svg'
import gitIcon from '../assets/git.svg'
import githubIcon from '../assets/github.svg'
import postmanIcon from '../assets/postman.svg'
import vercelIcon from '../assets/vercel.svg'
import renderIcon from '../assets/render.svg'

// `mono` marks the all-black glyphs that get inverted in dark mode;
// the rest keep their brand colors in both themes.
const skills = [
  { name: 'HTML5', icon: htmlIcon, color: '#ff5a36' },
  { name: 'CSS3', icon: cssIcon, color: '#663399' },
  { name: 'JavaScript', icon: jsIcon, color: '#f7df1e' },
  { name: 'TypeScript', icon: tsIcon, color: '#3178c6' },
  { name: 'React', icon: reactIcon, color: '#61dafb' },
  { name: 'Next.js', icon: nextIcon, color: '#828282' },
  { name: 'Tailwind', icon: tailwindIcon, color: '#06b6d4' },
  { name: 'Node.js', icon: nodeIcon, color: '#5fa04e' },
  { name: 'Express', icon: expressIcon, color: '#828282', mono: true },
  { name: 'MongoDB', icon: mongoIcon, color: '#47a248' },
  { name: 'PostgreSQL', icon: postgresIcon, color: '#336791' },
  { name: 'Supabase', icon: supabaseIcon, color: '#3ecf8e' },
  { name: 'Git', icon: gitIcon, color: '#f03c2e' },
  { name: 'GitHub', icon: githubIcon, color: '#6e5494', mono: true },
  { name: 'Postman', icon: postmanIcon, color: '#ff6c37' },
  { name: 'Vercel', icon: vercelIcon, color: '#000000', mono: true },
  { name: 'Render', icon: renderIcon, color: '#5c6bff', mono: true },
]

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-head reveal">
        <span className="eyebrow">My toolbox</span>
        <h2 className="section-title">Skills &amp; Tech Stack</h2>
        <p className="section-lead">
          The tools I reach for to design, build, and ship full-stack web
          applications.
        </p>
      </div>

      <div className="grid grid-cols-6 gap-[18px] max-[960px]:grid-cols-4 max-[720px]:grid-cols-3 max-[420px]:grid-cols-2">
        {skills.map((s, i) => (
          <div
            className="card flex flex-col items-center gap-3 rounded-card px-3 py-6 transition hover:-translate-y-1.5 hover:border-purple hover:shadow-hover reveal"
            key={s.name}
            style={{ '--reveal-delay': `${i * 60}ms` }}
          >
            <span
              className="skill-icon grid h-[52px] w-[52px] place-items-center rounded-2xl"
              style={{ '--skill-color': s.color }}
            >
              <img
                src={s.icon}
                alt={s.name}
                className={`h-[30px] w-[30px] object-contain${
                  s.mono ? ' dark:brightness-[1.9] dark:invert' : ''
                }`}
              />
            </span>
            <span className="text-sm font-semibold text-ink">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
