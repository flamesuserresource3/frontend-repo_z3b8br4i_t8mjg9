import { motion } from 'framer-motion'
import { Globe, Layers, Rocket, Bot } from 'lucide-react'

const services = [
  {
    key: 'branding',
    title: 'Branding Planet',
    desc: 'Identidad, ADN de marca y posicionamiento visual.',
    Icon: Layers,
    hue: 'from-emerald-400 to-white',
    ring: 'ring-emerald-400/40',
  },
  {
    key: 'web',
    title: 'Web Planet',
    desc: 'Diseño Webflow y desarrollo con enfoque UX/UI y performance.',
    Icon: Globe,
    hue: 'from-emerald-300 to-cyan-200',
    ring: 'ring-emerald-300/40',
  },
  {
    key: 'ads',
    title: 'Ads Planet',
    desc: 'Meta Ads, Google Ads y funnels de conversión optimizados.',
    Icon: Rocket,
    hue: 'from-cyan-300 to-emerald-200',
    ring: 'ring-cyan-300/40',
  },
  {
    key: 'automations',
    title: 'Automations Planet',
    desc: 'Sistemas de automatización y CRM para escalar resultados.',
    Icon: Bot,
    hue: 'from-emerald-400 to-teal-200',
    ring: 'ring-teal-300/40',
  },
]

function ServicesPlanets() {
  return (
    <section id="services" className="relative bg-[#001F3F] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(46,204,113,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Servicios</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Analítica, creatividad y ejecución convergen en un sistema cuántico enfocado en resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ key, title, desc, Icon, hue, ring }) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group relative"
            >
              <div className={`relative mx-auto h-56 w-56 overflow-hidden rounded-full bg-white/5 p-0.5 ring-1 ${ring} backdrop-blur-md shadow-[0_0_40px_rgba(46,204,113,0.15)]`}> 
                <div className={`absolute -inset-1 rounded-full bg-gradient-to-br ${hue} opacity-0 blur-xl transition duration-500 group-hover:opacity-40`} />
                <div className="relative flex h-full w-full flex-col items-center justify-center rounded-full bg-[#0b2a4f]/60 backdrop-blur-xl">
                  <Icon className="h-8 w-8 text-emerald-300 drop-shadow-[0_0_12px_rgba(46,204,113,0.7)]" />
                  <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                  <p className="mt-1 px-6 text-center text-sm text-white/70">{desc}</p>
                </div>
              </div>
              <div className="mt-4 text-center text-sm text-white/60">
                Pasa el cursor: órbitas y gravedad simulada
              </div>
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/20"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesPlanets
