import { motion } from 'framer-motion'

const portfolio = [
  {
    brand: 'Nebula Foods',
    logo: '🟩',
    metrics: '+250% en leads',
    detail: 'CPL -38%, ROAS 4.2x',
  },
  {
    brand: 'Quark Studio',
    logo: '🟦',
    metrics: '+70% en engagement',
    detail: 'Retención +22%, CTR +31%',
  },
  {
    brand: 'Orbit SaaS',
    logo: '⬛',
    metrics: '+180% en trials',
    detail: 'CAC -27%, LTV +19%',
  },
]

const testimonials = [
  {
    name: 'María P. — CMO',
    quote:
      'Transformaron nuestros datos en una máquina de adquisición. Diseño impecable y performance real.',
  },
  {
    name: 'Luis R. — Founder',
    quote:
      'Su enfoque científico nos dio claridad. El funnel ahora respira y escala sin fricción.',
  },
  {
    name: 'Andrea G. — Head of Growth',
    quote:
      'Automatizaciones que realmente conectan. Alinearon producto, marca y paid media con precisión.',
  },
]

function Showcase() {
  return (
    <section className="relative bg-[#001F3F] py-24 text-white">
      {/* About */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Sobre nosotros</h2>
            <p className="mt-4 text-white/80">
              Somos una agencia que combina análisis, storytelling y diseño de alto nivel. Nuestro método
              científico nos permite armonizar la experiencia del usuario y reducir costos de adquisición.
            </p>
            <div className="mt-6 flex gap-3 text-xs text-white/60">
              <span className="rounded-full bg-white/5 px-3 py-1 backdrop-blur">UX Research</span>
              <span className="rounded-full bg-white/5 px-3 py-1 backdrop-blur">Data & BI</span>
              <span className="rounded-full bg-white/5 px-3 py-1 backdrop-blur">Automation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(46,204,113,0.25),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#001F3F] via-transparent to-[#2ECC71]/20" />
              <div className="absolute bottom-4 left-4 text-xs text-white/70">Nuestro equipo creativo en acción</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="mx-auto mt-20 max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h3 className="text-2xl font-semibold sm:text-3xl">Case Studies</h3>
          <p className="text-sm text-white/70">Impacto medible en adquisición y retención</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {portfolio.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="text-5xl" aria-hidden>
                {p.logo}
              </div>
              <div className="mt-6">
                <div className="text-sm uppercase tracking-widest text-emerald-300/80">{p.brand}</div>
                <div className="mt-2 text-xl font-semibold">{p.metrics}</div>
                <div className="text-sm text-white/60">{p.detail}</div>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 30% 20%, rgba(46,204,113,0.18), transparent 40%)' }} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testimonials carousel */}
      <div className="mx-auto mt-20 max-w-7xl px-6">
        <h3 className="mb-6 text-2xl font-semibold sm:text-3xl">Clients Orbit</h3>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex animate-[scroll_28s_linear_infinite] gap-6 [--w:36rem] hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <figure
                key={i}
                className="relative w-[var(--w)] shrink-0 rounded-xl border border-white/10 bg-[#0b2a4f]/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
              >
                <div className="mb-3 text-white/80">“{t.quote}”</div>
                <figcaption className="text-sm text-white/60">{t.name}</figcaption>
                <div className="pointer-events-none absolute -left-8 -top-8 h-16 w-16 rounded-full border border-emerald-300/30" />
                <div className="pointer-events-none absolute -right-6 -bottom-6 h-10 w-10 rounded-full border border-emerald-300/20" />
              </figure>
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-1 * var(--w) * 3 - 4.5rem)); }
        }
        `}
      </style>
    </section>
  )
}

export default Showcase
