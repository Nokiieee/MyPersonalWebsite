import useScrollReveal from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

const blobBase =
  'absolute rounded-full blur-[70px] opacity-[0.55] animate-float dark:opacity-30'

function App() {
  useScrollReveal()

  return (
    <div className="relative isolate min-h-screen">
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <span
          className={`${blobBase} left-[-100px] top-[-120px] h-[480px] w-[480px] bg-[#cbb2ff] dark:bg-[#6b4bd6]`}
        />
        <span
          className={`${blobBase} right-[-140px] top-[40%] h-[420px] w-[420px] bg-[#ffc2e2] [animation-delay:-5s] dark:bg-[#b0468a]`}
        />
        <span
          className={`${blobBase} bottom-[-140px] left-[30%] h-[380px] w-[380px] bg-[#b6e3ff] [animation-delay:-9s] dark:bg-[#3f6bb0]`}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
