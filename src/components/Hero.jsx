import { motion } from 'framer-motion'

const featureTags = ["Beltérre", "Kültérre", "Rendezvényre", "TV / Mozi", "Konferencia", "Világítástechnika"]

const statContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const statCard = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 22 },
  },
}

const heroImage = `${import.meta.env.BASE_URL}images/ledfal.png`

const Hero = ({ sections }) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden>
      <div className="absolute -inset-[40%] bg-[radial-gradient(circle_at_top,_#0ea5e9_0,_transparent_55%),radial-gradient(circle_at_bottom,_#1d4ed8_0,_transparent_55%)]" />
    </div>
    <div className="pointer-events-none absolute inset-0 dot-grid" aria-hidden />

    <div className="max-w-7xl mx-auto px-4 pt-10 md:pt-16 pb-8 md:pb-12 relative z-10 grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-10 md:gap-12 items-center">
      <div className="space-y-6 md:space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-950/60 px-3 py-1 text-[11px] font-medium text-sky-200/90 shadow-sky-500/20 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Közvetlen gyártói beszerzés · Egyedi megoldások · Szervíz kapacitás
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">Látványos LED falak</span>
            <span className="block text-sky-400">minden felhasználásra</span>
          </h1>
          <p className="text-sm md:text-base text-slate-200/80 max-w-xl">
            Beltéri és kültéri LED kijelzők, rendezvény- és sportmegoldások, TV/mozi és konferencia
            rendszerek, valamint professzionális világítástechnika – egy kézből, teljes körű támogatással.
          </p>
        </div>

        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2.5 md:gap-3 text-[11px] md:text-xs">
          {featureTags.map(item => (
            <span
              key={item}
              className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 items-center">
          <a
            href={`#${sections.termekek}`}
            className="btn-shimmer inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-sm font-semibold shadow-lg shadow-sky-500/40 transition-colors"
          >
            Főbb megoldásaink
          </a>
          <a
            href={`#${sections.kapcsolat}`}
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl border border-slate-600 bg-slate-900/70 text-xs md:text-sm text-slate-100 hover:border-sky-500/70 hover:text-sky-100 transition-colors"
          >
            Kapcsolat & ajánlatkérés
          </a>
        </div>

        <motion.div
          className="grid grid-cols-3 gap-3 max-w-md pt-2"
          variants={statContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div variants={statCard} className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2.5">
            <p className="text-xl md:text-2xl font-bold text-sky-300">15+</p>
            <p className="text-[10px] md:text-[11px] text-slate-400 leading-snug">év tapasztalat vizuáltechnikában</p>
          </motion.div>
          <motion.div variants={statCard} className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2.5">
            <p className="text-xl md:text-2xl font-bold text-sky-300">24/7</p>
            <p className="text-[10px] md:text-[11px] text-slate-400 leading-snug">szervíz és támogatás igény szerint</p>
          </motion.div>
          <motion.div variants={statCard} className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2.5">
            <p className="text-xl md:text-2xl font-bold text-sky-300">LED</p>
            <p className="text-[10px] md:text-[11px] text-slate-400 leading-snug">a jövő energiahatékony fényforrása</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative" data-image="hero">
        <div className="absolute -inset-6 rounded-3xl bg-white/10 blur-3xl" aria-hidden />
        <img
          src={heroImage}
          alt="LED fal installáció"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>

    <div className="flex justify-center pb-4 relative z-10" aria-hidden>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        className="text-slate-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </div>
  </section>
)

export default Hero
