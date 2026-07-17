function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-10 border-t border-line bg-white/55 backdrop-blur-[10px] dark:bg-[rgba(24,18,38,0.55)]">
      <div className="mx-auto flex max-w-[1180px] flex-col items-center gap-3.5 px-6 py-11 text-center">
        <a
          href="#home"
          className="font-display text-[22px] font-extrabold text-ink"
        >
          Enoch<span className="ml-0.5 text-purple">✦</span>
        </a>
        <p className="text-[15px] text-ink-soft">
          MERN Stack Developer · Building things that matter.
        </p>
        <nav className="flex flex-wrap justify-center gap-x-[22px] gap-y-2">
          <a
            href="#about"
            className="text-sm font-medium text-ink transition hover:text-purple"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-ink transition hover:text-purple"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-ink transition hover:text-purple"
          >
            Projects
          </a>
          <a
            href="#services"
            className="text-sm font-medium text-ink transition hover:text-purple"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-ink transition hover:text-purple"
          >
            Contact
          </a>
        </nav>
        <p className="mt-1.5 text-[13.5px] text-ink-soft">
          © {year} Enoch Mendoza. Made with 💜 &amp; React.
        </p>
      </div>
    </footer>
  )
}

export default Footer
