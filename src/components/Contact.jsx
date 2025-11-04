import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="relative bg-[#001F3F] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(46,204,113,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Let’s Build Your Universe</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/70">Conversemos tu universo digital.</p>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => {
            e.preventDefault()
            alert('Gracias por contactarnos. Te responderemos muy pronto ✨')
          }}
          className="grid grid-cols-1 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:grid-cols-2"
        >
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70">Nombre</label>
            <input
              required
              type="text"
              placeholder="Tu nombre"
              className="mt-1 w-full rounded-md border border-white/10 bg-[#0b2a4f]/60 px-3 py-2 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-emerald-400/60"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="block text-sm text-white/70">Email</label>
            <input
              required
              type="email"
              placeholder="tu@email.com"
              className="mt-1 w-full rounded-md border border-white/10 bg-[#0b2a4f]/60 px-3 py-2 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-emerald-400/60"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/70">Servicio</label>
            <select className="mt-1 w-full rounded-md border border-white/10 bg-[#0b2a4f]/60 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-400/60">
              <option className="bg-[#0b2a4f]">Branding</option>
              <option className="bg-[#0b2a4f]">Desarrollo Web</option>
              <option className="bg-[#0b2a4f]">Ads</option>
              <option className="bg-[#0b2a4f]">Automations</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/70">Mensaje</label>
            <textarea
              rows={4}
              placeholder="Cuéntanos sobre tu proyecto"
              className="mt-1 w-full rounded-md border border-white/10 bg-[#0b2a4f]/60 px-3 py-2 text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-emerald-400/60"
            />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="w-full rounded-full bg-emerald-500 py-3 font-semibold text-[#001F3F] shadow-[0_10px_30px_rgba(46,204,113,0.35)] transition hover:bg-emerald-400">
              Enviar
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
