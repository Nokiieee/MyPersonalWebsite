import htmlIcon from '../assets/html5.svg'
import cssIcon from '../assets/css.svg'
import jsIcon from '../assets/javascript.svg'
import reactIcon from '../assets/react.svg'
import nodeIcon from '../assets/nodedotjs.svg'
import expressIcon from '../assets/express.svg'
import mongoIcon from '../assets/mongodb.svg'
import tailwindIcon from '../assets/tailwindcss.svg'
import gitIcon from '../assets/git.svg'
import githubIcon from '../assets/github.svg'
import vercelIcon from '../assets/vercel.svg'
import renderIcon from '../assets/render.svg'

const skills = [
  { name: 'HTML5', icon: htmlIcon, color: '#e34f26' },
  { name: 'CSS3', icon: cssIcon, color: '#2965f1' },
  { name: 'JavaScript', icon: jsIcon, color: '#f7df1e' },
  { name: 'React', icon: reactIcon, color: '#61dafb' },
  { name: 'Node.js', icon: nodeIcon, color: '#3c873a' },
  { name: 'Express', icon: expressIcon, color: '#828282' },
  { name: 'MongoDB', icon: mongoIcon, color: '#47a248' },
  { name: 'Tailwind', icon: tailwindIcon, color: '#38bdf8' },
  { name: 'Git', icon: gitIcon, color: '#f05032' },
  { name: 'GitHub', icon: githubIcon, color: '#6e5494' },
  { name: 'Vercel', icon: vercelIcon, color: '#000000' },
  { name: 'Render', icon: renderIcon, color: '#5c6bff' },
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
                className="h-[30px] w-[30px] object-contain dark:brightness-[1.9] dark:invert"
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
