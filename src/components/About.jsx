import nokiPic from '../assets/nokiPic.jpg'

function About() {
  return (
    <section className="section about" id="about">
      <div className="section__head reveal">
        <span className="section__eyebrow">Get to know me</span>
        <h2 className="section__title">About Me</h2>
      </div>

      <div className="about__grid">
        <div className="about__figure reveal">
          <div className="about__photo-frame">
            <img src={nokiPic} alt="Enoch Mendoza" className="about__photo" />
          </div>
        </div>

        <div className="about__text reveal" style={{ '--reveal-delay': '120ms' }}>
          <p>
            Hi, I'm <strong>Enoch Mendoza!</strong> I'm a MERN Stack Developer
            with a passion for turning ideas into real, working web
            applications. I love building projects with MongoDB, Express.js,
            React, and Node.js — from designing clean APIs to crafting
            interfaces that just feel right to use.
          </p>
          <p>
            When I'm not coding, I'm exploring new tools, sharpening my skills,
            and looking for ways to grow as a developer. I'm currently open to
            remote opportunities where I can learn, contribute, and build things
            that matter.
          </p>
          <p className="about__closing">Let's connect! ✨</p>

          <div className="about__facts">
            <div className="about__fact">
              <span className="about__fact-num">MERN</span>
              <span className="about__fact-label">Stack Focused</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-num">Full</span>
              <span className="about__fact-label">Stack Builder</span>
            </div>
            <div className="about__fact">
              <span className="about__fact-num">Remote</span>
              <span className="about__fact-label">Ready</span>
            </div>
          </div>

          <a href="#contact" className="btn btn--primary about__btn">
            Work With Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
