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

const Intro = ({ id }) => (
  <section id={id} className="relative bg-slate-950 border-t border-slate-900/80 scroll-mt-24 md:scroll-mt-28 dot-grid">
    <div className="pointer-events-none absolute -top-24 -right-32 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" aria-hidden />
    <div className="max-w-5xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 md:gap-12 items-center">
      <motion.div
        className="space-y-5 md:space-y-6"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">Bemutatkozás</h2>
        <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
          Csapatunk közel 15 éve foglalkozik vetítéstechnikával, informatikával és rendezvényekkel.
          Már korábban is aktív használói voltunk a LED-es megoldásoknak, legyen szó fixen telepített
          felületekről vagy rendezvények látványelemeiről.
        </p>
        <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
          A LED-fal Center célja, hogy segítsük partnereinket az üzenetük eljuttatásában a fogyasztók felé
          - színházi, mozi, sportfelületek, illetve ruházati és egyéb kereskedelmi egységek esetén is.
          A legújabb technológiáknak köszönhetően szinte bármilyen felületre telepíthetünk LED
          kijelzőt: sík vagy ívelt falra, oszlopra, sőt akár átlátszó kirakatra is.
        </p>
        <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
          A sokrétű felhasználás és technikai megoldások miatt úgy véljük, a LED a jövő, hiszen ennek
          a fényforrásnak van a legnagyobb fénye, így világos, szabadtéri területeken is kiválóan
          alkalmazható. A színek élénksége tovább növeli a vizuális hatást, látványosabbá téve a
          megjelenést a print anyagokhoz, TV-hez vagy vetített képekhez képest.
        </p>
        <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
          Az első lépés minden esetben a partner céljainak megismerése, amit helyszíni felmérés követ.
          Ezt követően közösen találjuk meg a legjobb technikai és méretbeli megoldást. A telepítés után
          támogatást nyújtunk a tartalommal való megtöltésben, valamint a folyamatos karbantartásban is.
        </p>
      </motion.div>

      <motion.div
        className="relative rounded-3xl overflow-hidden border border-transparent min-h-[360px] md:min-h-[420px]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        transition={{ delay: 0.15, type: 'spring', stiffness: 280, damping: 22 }}
        data-image="intro"
      >
        <img
          src={`${base}images/bemutatkozas.webp`}
          alt="Bemutatkozás"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </div>
  </section>
)

export default Intro
