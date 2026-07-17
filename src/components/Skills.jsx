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
    <section className="section skills" id="skills">
      <div className="section__head reveal">
        <span className="section__eyebrow">My toolbox</span>
        <h2 className="section__title">Skills &amp; Tech Stack</h2>
        <p className="section__lead">
          The tools I reach for to design, build, and ship full-stack web
          applications.
        </p>
      </div>

      <div className="skills__grid">
        {skills.map((s, i) => (
          <div
            className="skill-card reveal"
            key={s.name}
            style={{ '--reveal-delay': `${i * 60}ms` }}
          >
            <span
              className="skill-card__icon"
              style={{ '--skill-color': s.color }}
            >
              <img src={s.icon} alt={s.name} className="skill-card__icon-img" />
            </span>
            <span className="skill-card__name">{s.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
