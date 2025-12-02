const Advantages = ({ id }) => (
  <section id={id} className="bg-slate-950 border-t border-slate-900/80">
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
)

export default Advantages
