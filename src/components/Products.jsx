const base = import.meta.env.BASE_URL || '/'

const productSections = [
  {
    title: 'Beltéri LED kijelzők',
    description:
      'Ma már beltéren is fontos, hogy kitűnjünk a reklámzajból, ezért célszerű látványos felületeket elhelyezni. A reklám felhasználáson túl konferenciák, vezérlőegységek és munkaállomások részeként is tökéletes választás.',
    image: `${base}images/lilostich.jpg`,
    alt: 'Beltéri LED kijelző',
    glowClass: 'bg-sky-400/35',
    shadow: '0 0 70px 25px rgba(56,189,248,0.30)',
    reverse: false,
  },
  {
    title: 'Kültéri LED kijelzők',
    description:
      'A közlekedési termináloktól a hirdetőtáblákig kültéri kereskedelmi LED kijelzőink elég erőteljesek és látványosak ahhoz, hogy minden márka üzenetét jól láthatóvá tegyék.',
    image: `${base}images/outdoor.webp`,
    alt: 'Kültéri LED kijelző',
    glowClass: 'bg-emerald-400/30',
    shadow: '0 0 70px 22px rgba(52,211,153,0.28)',
    reverse: true,
  },
  {
    title: 'Rendezvényre (rental vagy saját használatra)',
    description:
      'Kiállításoktól a koncertekig több LED-megoldást is kínálunk, amelyek gyors telepítést, stabil teljesítményt és kreatív megjelenítést biztosítanak a lenyűgöző show-khoz.',
    image: `${base}images/comicon.jpg`,
    alt: 'Rendezvény LED panel',
    glowClass: 'bg-fuchsia-400/30',
    shadow: '0 0 70px 22px rgba(232,121,249,0.30)',
    reverse: false,
  },
  {
    title: 'Sport',
    description:
      'Világbajnokságoktól a klubversenyekig fejlett LED megoldásokat kínálunk mindenféle sportlétesítmény számára, élőképpel, eredményekkel és üzenetekkel.',
    image: `${base}images/sport.png`,
    alt: 'Sport LED kijelző',
    glowClass: 'bg-amber-400/30',
    shadow: '0 0 70px 22px rgba(251,191,36,0.32)',
    reverse: true,
    contain: true,
  },
  {
    title: 'Világítástechnika',
    description:
      'A professzionális világítás területén elkötelezettek vagyunk a kreatív, magas minőségű és vizuálisan kényelmes megoldások mellett – ipari és kültéri helyszíneken egyaránt.',
    image: `${base}images/vilagitastec.png`,
    alt: 'LED világítástechnika',
    glowClass: 'bg-indigo-400/30',
    shadow: '0 0 70px 22px rgba(129,140,248,0.28)',
    reverse: false,
  },
]

const Products = ({ id }) => (
  <section id={id} className="bg-slate-950 border-t border-slate-900/80">
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
      <div className="max-w-3xl mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
          Széles termékválaszték minden igényre
        </h2>
        <p className="text-sm md:text-base text-slate-200/90">
          Széles választékban kínálunk LED kijelzőket, amelyek kivételes képet és kiváló termékminőséget biztosítanak,
          hogy vállalkozása új szintre emelhesse termékeit vagy szolgáltatásait.
        </p>
      </div>

      <div className="grid gap-8 md:gap-10">
        {productSections.map(product => {
          const gridTemplate = product.reverse
            ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]'
            : 'md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]'
          const imageOrder = product.reverse ? 'order-2 md:order-1' : ''
          const textOrder = product.reverse ? 'order-1 md:order-2' : ''
          const containerPadding = product.contain ? 'p-4' : ''
          const imageFitClass = product.contain ? 'object-contain' : 'object-cover'

          return (
            <div
              key={product.title}
              className={`grid ${gridTemplate} gap-7 md:gap-10 items-center`}
            >
              <div className={`space-y-3 ${textOrder}`}>
                <h3 className="text-xl md:text-2xl font-semibold">{product.title}</h3>
                <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                  {product.description}
                </p>
              </div>
              <div className={`relative ${imageOrder}`}>
                {product.image ? (
                  <>
                    <div
                      className={`absolute -inset-10 rounded-3xl ${product.glowClass} blur-[48px] opacity-100 pointer-events-none mix-blend-screen -z-10`}
                      aria-hidden
                    />
                    <div
                      className={`relative rounded-3xl overflow-hidden ring-1 ring-slate-800/60 bg-slate-950/50 backdrop-blur-md aspect-[4/3] ${containerPadding}`}
                      style={{ boxShadow: product.shadow }}
                    >
                      <img
                        src={product.image}
                        alt={product.alt}
                        className={`w-full h-full ${imageFitClass}`}
                        loading="lazy"
                      />
                    </div>
                  </>
                ) : (
                  <div className="relative rounded-3xl border border-dashed border-slate-800/60 bg-slate-900/30 aspect-[4/3] flex items-center justify-center text-slate-500 text-sm">
                    Kép szükséges
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

export default Products

