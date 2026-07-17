import nokiPic from '../assets/nokiPic.jpg'

const pill =
  'rounded-full border border-line px-[15px] py-[7px] text-[13px] font-semibold text-purple-deep dark:bg-white/5'

function Hero() {
  return (
    <header
      className="mx-auto grid max-w-[1180px] scroll-mt-20 grid-cols-[1.05fr_0.95fr] items-center gap-10 px-6 pb-[90px] pt-[70px] min-h-[calc(100vh-72px)] max-[960px]:min-h-0 max-[960px]:grid-cols-1 max-[960px]:gap-12 max-[960px]:pt-12 max-[960px]:text-center max-[420px]:pt-8"
      id="home"
    >
      <div>
        <span className="mb-[22px] inline-block rounded-full border border-line bg-white/70 px-[18px] py-2 text-sm font-semibold text-purple-deep dark:bg-white/5">
          ✨ MERN Stack Developer
        </span>
        <h1 className="text-[clamp(38px,6vw,66px)] font-extrabold leading-[1.05] text-ink">
          Hi, I'm <span className="inline-block text-purple">Enoch Mendoza</span>
          <span className="text-pink">.</span>
        </h1>
        <p className="mt-[22px] max-w-[500px] text-lg leading-[1.7] text-ink-soft max-[960px]:mx-auto">
          I turn ideas into real, working web applications — from clean APIs to
          interfaces that just feel right to use.
        </p>
        <div className="mt-8 flex flex-wrap gap-[14px] max-[960px]:justify-center">
          <a href="#projects" className="btn btn-primary max-[420px]:flex-1">
            View Projects
          </a>
          <a href="#contact" className="btn btn-ghost max-[420px]:flex-1">
            Let's Connect
          </a>
        </div>
        <div className="mt-[34px] flex flex-wrap gap-2.5 max-[960px]:justify-center">
          <span className={`${pill} bg-white/65`}>React</span>
          <span className={`${pill} bg-white/65`}>Node.js</span>
          <span className={`${pill} bg-white/65`}>Express</span>
          <span className={`${pill} bg-white/65`}>MongoDB</span>
        </div>
      </div>

      <div className="relative flex items-center justify-center max-[960px]:order-first">
        <div
          className="absolute z-0 aspect-square w-[78%] rounded-full bg-brand opacity-45 blur-[60px]"
          aria-hidden="true"
        />
        <div className="relative z-[1] aspect-[4/5] w-[min(360px,78%)] animate-bob rounded-[34px] border border-line bg-[linear-gradient(150deg,rgba(255,255,255,0.9),rgba(255,255,255,0.4))] p-2.5 shadow-soft backdrop-blur-[6px]">
          <img
            src={nokiPic}
            alt="Enoch Mendoza"
            className="h-full w-full rounded-[26px] object-cover"
          />
        </div>
        <div className="absolute left-[2%] top-[6%] z-[2] animate-bob rounded-2xl border border-line bg-white/90 px-4 py-2.5 text-sm font-semibold text-purple-deep shadow-soft [animation-delay:-2s] dark:bg-[rgba(38,30,56,0.92)]">
          &lt;/&gt; Full-Stack
        </div>
        <div className="absolute bottom-[8%] right-0 z-[2] animate-bob rounded-2xl border border-line bg-white/90 px-4 py-2.5 text-sm font-semibold text-ink shadow-soft [animation-delay:-4s] dark:bg-[rgba(38,30,56,0.92)]">
          🚀 Open to work
        </div>
      </div>
    </header>
  )
}

export default Hero
