import Hero from './components/Hero'
import ServicesPlanets from './components/ServicesPlanets'
import Showcase from './components/Showcase'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#001F3F] text-white antialiased">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#001F3F]/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(46,204,113,0.8)]" />
            <span className="text-sm font-semibold tracking-wide">Universa Agency</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/70 sm:flex">
            <a href="#services" className="hover:text-white">Servicios</a>
            <a href="#portfolio" className="hover:text-white">Portafolio</a>
            <a href="#contact" className="hover:text-white">Contacto</a>
          </nav>
          <a href="#contact" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-[#001F3F] hover:bg-emerald-400">Agendar</a>
        </div>
      </header>

      <main>
        <Hero />
        <ServicesPlanets />
        <div id="portfolio">
          <Showcase />
        </div>
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#001F3F] py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Universa Agency — Estrategia, tecnología y arte.
      </footer>
    </div>
  )
}

export default App
