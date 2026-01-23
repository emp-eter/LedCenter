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

const Advantages = ({ id }) => (
  <section id={id} className="bg-slate-950 border-t border-slate-900/80">
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-center">
      <div className="space-y-7">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Megbízható minőség, teljes körű szolgáltatás
        </h2>

        <div className="grid sm:grid-cols-2 gap-5">
          {serviceHighlights.map(service => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4"
            >
              <p className="text-xs font-semibold text-sky-300 mb-1">{service.title}</p>
              <ul className="space-y-1.5 text-sm text-slate-200/90 list-disc list-inside">
                {service.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-6 rounded-3xl bg-sky-500/20 blur-3xl" aria-hidden />
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 shadow-2xl">
          <img
            src="images/polusled2.jpg"
            alt="LED kijelző installáció"
            className="w-full h-full max-h-[360px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Advantages
