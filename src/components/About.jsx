import nokiPic from '../assets/nokiPic2.JPG'

function About() {
  return (
    <section className="section" id="about">
      <div className="section-head reveal">
        <span className="eyebrow">Get to know me</span>
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="grid grid-cols-[0.8fr_1.2fr] items-center gap-[54px] max-[960px]:grid-cols-1 max-[960px]:gap-9">
        <div className="reveal flex justify-center max-[960px]:mx-auto max-[960px]:max-w-[340px]">
          <div className="aspect-[3/4] w-[min(320px,100%)] rounded-card-lg bg-brand p-2 shadow-soft">
            <img
              src={nokiPic}
              alt="Enoch Mendoza"
              className="h-full w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <div
          className="reveal max-[960px]:text-center [&_strong]:text-ink"
          style={{ '--reveal-delay': '120ms' }}
        >
          <p className="mb-[18px] text-[17px] leading-[1.75] text-ink-soft">
            Hi, I'm <strong>Enoch Mendoza!</strong> I'm a MERN Stack Developer
            with a passion for turning ideas into real, working web
            applications. I love building projects with MongoDB, Express.js,
            React, and Node.js — from designing clean APIs to crafting
            interfaces that just feel right to use.
          </p>
          <p className="mb-[18px] text-[17px] leading-[1.75] text-ink-soft">
            When I'm not coding, I'm exploring new tools, sharpening my skills,
            and looking for ways to grow as a developer. I'm currently open to
            remote opportunities where I can learn, contribute, and build things
            that matter.
          </p>
          <p className="mb-[18px] text-[17px] font-semibold leading-[1.75] text-purple-deep">
            Let's connect! ✨
          </p>

          <div className="my-[26px] flex flex-wrap gap-[14px] max-[420px]:flex-col">
            <div className="card min-w-[120px] flex-1 rounded-card p-[18px] text-center">
              <span className="block font-display text-[22px] font-extrabold text-purple">
                MERN
              </span>
              <span className="text-[13px] text-ink-soft">Stack Focused</span>
            </div>
            <div className="card min-w-[120px] flex-1 rounded-card p-[18px] text-center">
              <span className="block font-display text-[22px] font-extrabold text-purple">
                Full
              </span>
              <span className="text-[13px] text-ink-soft">Stack Builder</span>
            </div>
            <div className="card min-w-[120px] flex-1 rounded-card p-[18px] text-center">
              <span className="block font-display text-[22px] font-extrabold text-purple">
                Remote
              </span>
              <span className="text-[13px] text-ink-soft">Ready</span>
            </div>
          </div>

          <a href="#contact" className="btn btn-primary mt-1.5">
            Work With Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
