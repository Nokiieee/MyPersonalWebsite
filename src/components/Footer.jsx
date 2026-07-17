function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="#home" className="footer__logo">
          Enoch<span className="navbar__sparkle">✦</span>
        </a>
        <p className="footer__tagline">MERN Stack Developer · Building things that matter.</p>
        <nav className="footer__links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="footer__copy">© {year} Enoch Mendoza. Made with 💜 &amp; React.</p>
      </div>
    </footer>
  )
}

export default Footer
