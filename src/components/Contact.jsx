import { motion } from 'framer-motion'

const base = import.meta.env.BASE_URL || '/'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 280, damping: 22 },
  },
}

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const Contact = ({ id }) => (
  <section id={id} className="relative bg-slate-950 border-t border-slate-900/80 scroll-mt-24 md:scroll-mt-28 dot-grid">
    <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" aria-hidden />
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-start rounded-3xl">
      <motion.div
        className="space-y-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">Lépjen kapcsolatba velünk</h2>
        <p className="text-sm md:text-base text-slate-200/90">
          Amennyiben felkeltettük érdeklődését, keressen minket bizalommal az alábbi elérhetőségek
          egyikén! Segítünk a megfelelő LED megoldás kiválasztásában az első ötlettől a megvalósításig.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mt-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 md:p-5">
            <p className="text-xs font-semibold text-sky-300 mb-3">Elérhetőségek</p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <EmailIcon />
                <a href="mailto:info@ledfalcenter.hu" className="text-sm md:text-base text-sky-300 hover:underline">
                  info@ledfalcenter.hu
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <GlobeIcon />
                <a href="https://www.ledfalcenter.hu" className="text-sm md:text-base text-sky-300 hover:underline" target="_blank" rel="noreferrer">
                  www.ledfalcenter.hu
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 md:p-5 space-y-4">
            <div>
              <p className="text-xs font-semibold text-sky-300 mb-2">Értékesítés</p>
              <div className="flex items-center gap-2.5">
                <PhoneIcon />
                <a href="tel:+36202806363" className="text-sm md:text-base text-sky-300 hover:underline">
                  +36 20 280 6363
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-sky-300 mb-2">Szervíz, műszaki megoldások</p>
              <div className="flex items-center gap-2.5">
                <PhoneIcon />
                <a href="tel:+36306368189" className="text-sm md:text-base text-sky-300 hover:underline">
                  +36 30 636 81 89
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[10px] md:text-[11px] text-slate-500 text-center md:text-left mt-6">
          A kiajánlóban található képek az általunk forgalmazott termékek gyártójának saját fotói.
        </p>
      </motion.div>

      <motion.div
        className="relative mt-2 lg:mt-0 rounded-3xl overflow-hidden border border-transparent min-h-[320px] md:min-h-[380px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 280, damping: 22 }}
        data-image="contact"
      >
        <img
          src={`${base}images/kapcsolat.webp`}
          alt="Kapcsolat"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
)

export default Contact
