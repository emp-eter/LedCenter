const featureTags = ['Beltérre', 'Kültérre', 'Rendezvényre', 'TV / Mozi', 'Konferencia', 'Világítástechnika']

const heroImage = `${import.meta.env.BASE_URL}images/ledfal.png`

const Hero = ({ sections }) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
      <div className="absolute -inset-[40%] bg-[radial-gradient(circle_at_top,_#0ea5e9_0,_transparent_55%),radial-gradient(circle_at_bottom,_#1d4ed8_0,_transparent_55%)]" />
    </div>

    <div className="max-w-6xl mx-auto px-4 pt-10 md:pt-16 pb-8 md:pb-12 relative z-10 grid md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-10 md:gap-12 items-center">
      <div className="space-y-6 md:space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-950/60 px-3 py-1 text-[11px] font-medium text-sky-200/90 shadow-sky-500/20 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Közvetlen gyártói beszerzés · Egyedi megoldások · Szervíz kapacitás
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Látványos LED falak
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
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-sm font-semibold shadow-lg shadow-sky-500/40 transition-colors"
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

        <div className="grid grid-cols-3 gap-4 max-w-md pt-2">
          <div>
            <p className="text-lg md:text-2xl font-bold">15+</p>
            <p className="text-[11px] md:text-xs text-slate-400">év tapasztalat vizuáltechnikában</p>
          </div>
          <div>
            <p className="text-lg md:text-2xl font-bold">24/7</p>
            <p className="text-[11px] md:text-xs text-slate-400">szervíz és támogatás igény szerint</p>
          </div>
          <div>
            <p className="text-lg md:text-2xl font-bold">LED</p>
            <p className="text-[11px] md:text-xs text-slate-400">a jövő energiahatékony fényforrása</p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-white/10 blur-3xl" aria-hidden />
        <div className="relative rounded-3xl bg-transparent shadow-2xl overflow-hidden">
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-transparent blur-3xl" aria-hidden />
          <div className="relative" />
        </div>
        <img
          src={heroImage}
          alt="LED fal installáció"
          className="bg-transparent object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>
)

export default Hero
