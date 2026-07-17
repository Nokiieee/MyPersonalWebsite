import { useState, useEffect } from 'react'
import useTheme from '../hooks/useTheme'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
]

const linkClass =
  'block rounded-full px-4 py-2 text-[15px] font-medium text-ink transition hover:bg-[rgba(184,139,255,0.16)] hover:text-purple-deep dark:hover:bg-[rgba(169,130,255,0.16)] max-[960px]:w-full max-[960px]:px-4 max-[960px]:py-3 max-[960px]:text-[17px]'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <nav
      className={`sticky top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? 'bg-white/70 shadow-[0_6px_24px_-14px_rgba(123,47,247,0.4)] backdrop-blur-[14px] dark:bg-[rgba(24,18,38,0.72)] dark:shadow-[0_6px_24px_-14px_rgba(0,0,0,0.6)]'
          : ''
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-display text-2xl font-extrabold text-ink"
          onClick={close}
        >
          Enoch<span className="ml-0.5 text-purple">✦</span>
        </a>

        <div className="flex items-center gap-2.5">
          <ul
            className={`m-0 flex list-none items-center gap-1 p-0 max-[960px]:fixed max-[960px]:right-0 max-[960px]:top-0 max-[960px]:h-dvh max-[960px]:w-[min(78vw,320px)] max-[960px]:flex-col max-[960px]:items-start max-[960px]:justify-start max-[960px]:gap-1.5 max-[960px]:px-[26px] max-[960px]:pb-10 max-[960px]:pt-24 max-[960px]:shadow-[-12px_0_40px_-12px_rgba(123,47,247,0.35)] max-[960px]:backdrop-blur-[16px] max-[960px]:transition-transform max-[960px]:duration-300 dark:max-[960px]:bg-[rgba(24,18,38,0.96)] max-[960px]:bg-white/95 ${
              open
                ? 'max-[960px]:visible max-[960px]:translate-x-0'
                : 'max-[960px]:pointer-events-none max-[960px]:invisible max-[960px]:translate-x-full'
            }`}
          >
            {links.map((l) => (
              <li key={l.href} className="max-[960px]:w-full">
                <a href={l.href} className={linkClass} onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="max-[960px]:w-full">
              <a
                href="#contact"
                className="ml-2 block rounded-full bg-purple px-4 py-2 text-[15px] font-semibold text-white shadow-soft transition hover:-translate-y-px hover:bg-purple-deep max-[960px]:ml-0 max-[960px]:mt-2.5 max-[960px]:w-full max-[960px]:py-3 max-[960px]:text-center"
                onClick={close}
              >
                Hire Me
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-2.5">
            <button
              className="grid h-[42px] w-[42px] shrink-0 cursor-pointer place-items-center rounded-xl border border-line bg-card text-lg leading-none text-ink transition hover:-translate-y-0.5 hover:border-purple"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            <button
              className="z-[60] hidden h-[22px] w-[30px] cursor-pointer flex-col justify-between border-none bg-transparent p-0 max-[960px]:flex"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={`block h-[3px] w-full rounded-[3px] bg-ink transition ${
                  open ? 'translate-y-[9.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[3px] w-full rounded-[3px] bg-ink transition ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[3px] w-full rounded-[3px] bg-ink transition ${
                  open ? '-translate-y-[9.5px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
