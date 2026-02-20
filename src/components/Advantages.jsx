import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 22 },
  },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const serviceHighlights = [
  {
    title: 'Minőség & Tanúsítványok',
    items: ['TÜV, SÜD minősítés', 'Energiahatékony LED technológia'],
  },
  {
    title: 'Szervíz & Garancia',
    items: ['Saját szervíz kapacitás', 'Garancia a telepített rendszerekre', 'Preventív karbantartási lehetőségek'],
  },
  {
    title: 'Üzemeltetés & Karbantartás',
    items: ['Rendszeres karbantartás', 'Gyors hibaelhárítás'],
  },
  {
    title: 'Tartalom & Kreatív',
    items: ['Tartalommal való megtöltés', 'Vizualizációs tanácsadás'],
  },
]

const base = import.meta.env.BASE_URL || '/'

const Advantages = ({ id }) => (
  <section id={id} className="relative bg-slate-950 border-t border-slate-900/80 scroll-mt-24 md:scroll-mt-28 dot-grid">
    <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" aria-hidden />
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-center">
      <div className="space-y-7">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold tracking-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          Megbízható minőség, teljes körű szolgáltatás
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 gap-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {serviceHighlights.map(service => (
            <motion.div
              key={service.title}
              variants={fadeUp}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 transition-colors duration-200 hover:border-slate-600 hover:bg-slate-800/80"
            >
              <p className="text-xs font-semibold text-sky-300 mb-1">{service.title}</p>
              <ul className="space-y-1.5 text-sm text-slate-200/90 list-disc list-inside">
                {service.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="relative"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 280, damping: 22 }}
      >
        <div className="absolute -inset-6 rounded-3xl bg-sky-500/20 blur-3xl" aria-hidden />
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl">
          <img
            src={`${base}images/polusled2.jpg`}
            alt="LED kijelző installáció"
            className="w-full h-full max-h-[360px] object-cover"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  </section>
)

export default Advantages
