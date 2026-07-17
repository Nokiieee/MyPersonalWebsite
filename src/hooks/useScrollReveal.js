import { useEffect } from 'react'

// Reveals elements with the `.reveal` class as they scroll into view.
// Uses a single IntersectionObserver; each element is unobserved once shown
// (reveal-once). Respects the user's reduced-motion preference.
export default function useScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const elements = document.querySelectorAll('.reveal')

    if (reduced || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
