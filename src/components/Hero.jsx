import nokiPic from '../assets/nokiPic.jpg'

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero__content">
        <span className="hero__eyebrow">✨ MERN Stack Developer</span>
        <h1 className="hero__title">
          Hi, I'm <span className="hero__name">Enoch Mendoza</span>
          <span className="hero__dot">.</span>
        </h1>
        <p className="hero__subtitle">
          I turn ideas into real, working web applications — from clean APIs to
          interfaces that just feel right to use.
        </p>
        <div className="hero__buttons">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn--ghost">
            Let's Connect
          </a>
        </div>
        <div className="hero__stack">
          <span>React</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
        </div>
      </div>

      <div className="hero__figure">
        <div className="hero__glow" aria-hidden="true" />
        <div className="hero__photo-frame">
          <img src={nokiPic} alt="Enoch Mendoza" className="hero__photo" />
        </div>
        <div className="hero__badge hero__badge--top">&lt;/&gt; Full-Stack</div>
        <div className="hero__badge hero__badge--bottom">🚀 Open to work</div>
      </div>
    </header>
  )
}

export default Hero
