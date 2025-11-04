import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[#001F3F] text-white">
      {/* Spline 3D scene as background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for glow - do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(46,204,113,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,31,63,0)_0%,rgba(0,31,63,0.6)_65%,rgba(0,31,63,0.9)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="backdrop-blur-xl/0"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80 shadow-[0_0_30px_rgba(46,204,113,0.25)]">
            Universa Agency
          </span>
          <h1 className="mt-6 bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-6xl">
            We turn data into digital gravity.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-white/80 sm:text-lg">
            Marketing cuántico que conecta estrategia, creatividad y resultados medibles.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToServices}
              className="group rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(46,204,113,0.9)] group-hover:scale-110 transition" />
              Explorar servicios
            </button>
            <button
              onClick={scrollToContact}
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-[#001F3F] shadow-[0_10px_30px_rgba(46,204,113,0.35)] transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Agendar consulta
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
