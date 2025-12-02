import './App.css'

const sections = {
  bemutatkozas: 'bemutatkozas',
  termekek: 'termekek',
  elonyok: 'elonyok',
  kapcsolat: 'kapcsolat',
}

const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="text-sm md:text-base font-medium text-slate-100/80 hover:text-white transition-colors"
  >
    {label}
  </a>
)

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      {/* Top bar / cover navigation */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/70">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/30">
              <span className="text-xs font-extrabold tracking-tight leading-none">
                LED
                <br />
                WALL
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-bold tracking-tight">
                LED-Fal Center
              </span>
              <span className="text-[11px] md:text-xs text-slate-400">
                Minőségi LED megoldások a LED Centertől.
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-5">
            <NavLink href={`#${sections.bemutatkozas}`} label="Bemutatkozás" />
            <NavLink href={`#${sections.termekek}`} label="Termékek" />
            <NavLink href={`#${sections.elonyok}`} label="Megoldásaink" />
            <NavLink href={`#${sections.kapcsolat}`} label="Kapcsolat" />
          </nav>
        </div>
      </header>

      {/* Hero / cover section */}
      <main className="pb-16">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* subtle pattern */}
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
                  Beltéri és kültéri LED kijelzők, rendezvény- és sportmegoldások, TV/mozi és
                  konferencia rendszerek, valamint professzionális világítástechnika – egy kézből,
                  teljes körű támogatással.
                </p>
              </div>

              <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2.5 md:gap-3 text-[11px] md:text-xs">
                <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1">
                  Beltérre
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1">
                  Kültérre
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1">
                  Rendezvényre
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1">
                  TV / Mozi
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1">
                  Konferencia
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-900/80 border border-slate-700/80 px-3 py-1">
                  Világítástechnika
                </span>
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
                <div className="relative">
                  
                </div>
              </div>
              <img
                    src="./public/images/ledfal.png"
                    alt="LED fal installáció"
                    className="bg-transparent object-cover"
                    loading="lazy"
                  />
            </div>
            
          </div>
        </section>

        {/* Bemutatkozás */}
        <section
          id={sections.bemutatkozas}
          className="bg-slate-950 border-t border-slate-900/80"
        >
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 md:gap-12 items-center">
            <div className="space-y-5 md:space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">Bemutatkozás</h2>
              <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                Csapatunk közel 15 éve foglalkozik vetítéstechnikával, informatikával és
                rendezvényekkel. Már korábban is aktív használói voltunk a LED-es megoldásoknak,
                legyen szó fixen telepített felületekről vagy rendezvények látványelemeiről.
              </p>
              <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                A LED Center célja, hogy segítsük partnereinket az üzenetük eljuttatásában a
                fogyasztók felé – színházi, mozi, sportfelületek, illetve ruházati és egyéb
                kereskedelmi egységek esetén is. A legújabb technológiáknak köszönhetően szinte
                bármilyen felületre telepíthetünk LED kijelzőt: sík vagy ívelt falra, oszlopra,
                sőt akár átlátszó kirakatra is.
              </p>
              <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                A sokrétű felhasználás és technikai megoldások miatt úgy véljük, a LED a jövő, hiszen
                ennek a fényforrásnak van a legnagyobb fényereje, így világos, szabadtéri területeken
                is kiválóan alkalmazható. A színek élénksége tovább növeli a vizuális hatást,
                látványosabbá téve a megjelenést a print anyagokhoz, TV-hez vagy vetített képekhez
                képest.
              </p>
              <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                Az első lépés minden esetben a partner céljainak megismerése, amit helyszíni
                felmérés követ. Ezt követően közösen találjuk meg a legjobb technikai és méretbeli
                megoldást. A telepítés után támogatást nyújtunk a tartalommal való megtöltésben,
                valamint a folyamatos karbantartásban is.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-sky-500/15 blur-3xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl">
                <img
                  src="https://imgcdn.unilumin.com/upload2023/led-video-wall.jpg"
                  alt="LED video fal"
                  className="w-full h-full max-h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Termékek / második oldal tartalom */}
        <section
          id={sections.termekek}
          className="bg-slate-950 border-t border-slate-900/80"
        >
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
            <div className="max-w-3xl mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
                Széles termékválaszték minden igényre
              </h2>
              <p className="text-sm md:text-base text-slate-200/90">
                Széles választékban kínálunk LED kijelzőket, amelyek kivételes képet és kiváló
                termékminőséget biztosítanak, hogy vállalkozása új szintre emelhesse termékeit vagy
                szolgáltatásait.
              </p>
            </div>

            <div className="grid gap-8 md:gap-10">
              {/* Beltéri */}
              <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-7 md:gap-10 items-center">
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold">Beltéri LED kijelzők</h3>
                  <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                    Ma már beltéren is fontos, hogy kitűnjünk a reklámzajból, és a mi üzenetünk
                    legyen a legfeltűnőbb, ezért ott is célszerű látványos felületeket elhelyezni.
                    Ebben vagyunk partnerek – bármilyen üzletről is legyen szó. A reklám
                    felhasználáson túl konferenciák, vezérlőegységek és más munkaállomások
                    részeként is tökéletes választás.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-sky-500/20 blur-3xl" aria-hidden />
                  <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 flex items-center justify-center">
                    <img
                      src="https://imgcdn.unilumin.com/media/upload/products/Umate%20LM/Umate-LM_F.png"
                      alt="Beltéri LED kijelző"
                      className="max-h-56 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Kültéri */}
              <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-7 md:gap-10 items-center">
                <div className="relative order-2 md:order-1">
                  <div className="absolute -inset-4 rounded-3xl bg-emerald-500/15 blur-3xl" aria-hidden />
                  <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 flex items-center justify-center">
                    <img
                      src="https://imgcdn.unilumin.com/media/upload/products/Umate%20SF/new/Umate-SF_f600.png"
                      alt="Kültéri LED kijelző"
                      className="max-h-56 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-3 order-1 md:order-2">
                  <h3 className="text-xl md:text-2xl font-semibold">Kültéri LED kijelzők</h3>
                  <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                    A közlekedési termináloktól a hirdetőtáblákon át a bevásárlóközpontokig kültéri
                    kereskedelmi LED kijelzőink mindig elég erőteljesek és látványosak ahhoz, hogy
                    tökéletesen bemutassák az összes testreszabott tartalmat, és minden márka
                    üzenetét jól láthatóvá tegyék.
                  </p>
                </div>
              </div>

              {/* Rendezvény */}
              <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-7 md:gap-10 items-center">
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Rendezvényre (rental vagy saját használatra)
                  </h3>
                  <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                    A kiállításoktól a koncerteken át az élő közvetítésekig több LED-megoldást is
                    kínálunk, amelyek gyors telepítést, stabil teljesítményt és kreatív
                    megjelenítést biztosítanak a lenyűgöző show-műsorok létrehozásához.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-fuchsia-500/20 blur-3xl" aria-hidden />
                  <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 flex items-center justify-center">
                    <img
                      src="https://imgcdn.unilumin.com/media/upload/products/ugm2/600x600.png"
                      alt="Rendezvény LED panel"
                      className="max-h-56 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Sport */}
              <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-7 md:gap-10 items-center">
                <div className="relative order-2 md:order-1">
                  <div className="absolute -inset-4 rounded-3xl bg-amber-500/20 blur-3xl" aria-hidden />
                  <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 flex items-center justify-center">
                    <img
                      src="https://imgcdn.unilumin.com/media/upload/products/UsportX/UsportX_F.png"
                      alt="Sport LED kijelző"
                      className="max-h-56 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="space-y-3 order-1 md:order-2">
                  <h3 className="text-xl md:text-2xl font-semibold">Sport</h3>
                  <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                    A világbajnokságoktól a klubversenyekig a LED Center Sport részlege fejlett LED
                    megoldásokat kínál mindenféle sportlétesítmény számára, izgalmas vizuális
                    elemeket hozva a sportrajongóknak. Lehetővé teszi élőkép, eredmények és egyéb
                    üzenetek közvetítését.
                  </p>
                </div>
              </div>

              {/* Világítástechnika */}
              <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-7 md:gap-10 items-center">
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-semibold">Világítástechnika</h3>
                  <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                    A professzionális világítás területén a LED Center elkötelezett amellett, hogy
                    minden lépését kreativitással, kiváló minőségű és vizuálisan kényelmes
                    megoldásokkal világítsa meg – legyen szó ipari vagy kültéri helyszínekről.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl bg-indigo-500/20 blur-3xl" aria-hidden />
                  <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 flex items-center justify-center">
                    <img
                      src="https://imgcdn.unilumin.com/media/upload/products/lighting-new/Marlin(1).png"
                      alt="LED világítástechnika"
                      className="max-h-56 w-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Harmadik oldal tartalom – minősítések, szolgáltatások */}
        <section
          id={sections.elonyok}
          className="bg-slate-950 border-t border-slate-900/80"
        >
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-center">
            <div className="space-y-7">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Megbízható minőség, teljes körű szolgáltatás
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs font-semibold text-sky-300 mb-1">Minőség & Tanúsítványok</p>
                  <ul className="space-y-1.5 text-sm text-slate-200/90 list-disc list-inside">
                    <li>TÜV, SÜD minősítés</li>
                    <li>Energiahatékony LED technológia</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs font-semibold text-sky-300 mb-1">Szervíz & Garancia</p>
                  <ul className="space-y-1.5 text-sm text-slate-200/90 list-disc list-inside">
                    <li>Saját szervíz kapacitás</li>
                    <li>Garancia a telepített rendszerekre</li>
                    <li>Preventív karbantartási lehetőségek</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs font-semibold text-sky-300 mb-1">Üzemeltetés & Karbantartás</p>
                  <ul className="space-y-1.5 text-sm text-slate-200/90 list-disc list-inside">
                    <li>Rendszeres karbantartás</li>
                    <li>Gyors hibaelhárítás</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                  <p className="text-xs font-semibold text-sky-300 mb-1">Tartalom & Kreatív</p>
                  <ul className="space-y-1.5 text-sm text-slate-200/90 list-disc list-inside">
                    <li>Tartalommal való megtöltés</li>
                    <li>Vizualizációs tanácsadás</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl bg-sky-500/20 blur-3xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl">
                <img
                  src="https://fr.unilumin.com/upload2023/9-comcast294852.jpg"
                  alt="LED kijelző installáció"
                  className="w-full h-full max-h-[360px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Kapcsolat / negyedik oldal */}
        <section
          id={sections.kapcsolat}
          className="bg-slate-950 border-t border-slate-900/80"
        >
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">Lépjen kapcsolatba velünk</h2>
              <p className="text-sm md:text-base text-slate-200/90 max-w-xl">
                Amennyiben felkeltettük érdeklődését, keressen minket bizalommal az alábbi
                elérhetőségek egyikén! Segítünk a megfelelő LED megoldás kiválasztásában az első
                ötlettől a megvalósításig.
              </p>

              <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mt-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 md:p-5">
                  <p className="text-xs font-semibold text-sky-300 mb-2">Elérhetőségek</p>
                  <div className="space-y-1.5 text-sm md:text-base">
                    <p>
                      E-mail:{' '}
                      <a href="mailto:info@ledcenter.hu" className="text-sky-300 hover:underline">
                        info@ledcenter.hu
                      </a>
                    </p>
                    <p>
                      Web:{' '}
                      <a
                        href="https://www.ledcenter.hu"
                        className="text-sky-300 hover:underline"
                        target="_blank"
                        rel="noreferrer"
                      >
                        www.ledcenter.hu
                      </a>
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 md:p-5 space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-sky-300 mb-1">Sales</p>
                    <p className="text-sm md:text-base">
                      Tel.:{' '}
                      <a href="tel:+36202806363" className="text-sky-300 hover:underline">
                        +36 20 280 6363
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-sky-300 mb-1">Szervíz, műszaki megoldások</p>
                    <p className="text-sm md:text-base">
                      Tel.:{' '}
                      <a href="tel:+36306666666" className="text-sky-300 hover:underline">
                        +36 30 666 6666
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 md:p-5">
                <p className="text-sm md:text-base font-medium mb-1">Üdvözlettel:</p>
                <p className="text-sm md:text-base">Cinema Center Kft. csapata</p>
              </div>

              <p className="text-[10px] md:text-[11px] text-slate-500 text-center md:text-left mt-6">
                A kiajánlóban található képek az általunk forgalmazott termékek gyártójának saját fotói.
              </p>
            </div>

            <div className="relative mt-2 lg:mt-0">
              <div className="absolute -inset-6 rounded-3xl bg-sky-500/25 blur-3xl" aria-hidden />
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl">
                <img
                  src="https://imgcdn.unilumin.com/upload2023/outdoor-led-display-development-trends.jpg"
                  alt="LED kijelzők kültéri alkalmazása"
                  className="w-full h-full max-h-[380px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900/80 bg-slate-950/95">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[10px] md:text-xs text-slate-500">
            © {new Date().getFullYear()} LED-Fal Center · Cinema Center Kft.
          </p>
          <p className="text-[10px] md:text-xs text-slate-600">
            Beltéri & kültéri LED kijelzők · Rendezvény & sportmegoldások · Világítástechnika
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
