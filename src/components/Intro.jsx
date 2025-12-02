const Intro = ({ id }) => (
  <section id={id} className="bg-slate-950 border-t border-slate-900/80">
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-10 md:gap-12 items-center">
      <div className="space-y-5 md:space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">Bemutatkozás</h2>
        <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
          Csapatunk közel 15 éve foglalkozik vetítéstechnikával, informatikával és rendezvényekkel.
          Már korábban is aktív használói voltunk a LED-es megoldásoknak, legyen szó fixen telepített
          felületekről vagy rendezvények látványelemeiről.
        </p>
        <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
          A LED Center célja, hogy segítsük partnereinket az üzenetük eljuttatásában a fogyasztók felé
          – színházi, mozi, sportfelületek, illetve ruházati és egyéb kereskedelmi egységek esetén is.
          A legújabb technológiáknak köszönhetően szinte bármilyen felületre telepíthetünk LED
          kijelzőt: sík vagy ívelt falra, oszlopra, sőt akár átlátszó kirakatra is.
        </p>
        <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
          A sokrétű felhasználás és technikai megoldások miatt úgy véljük, a LED a jövő, hiszen ennek
          a fényforrásnak van a legnagyobb fényereje, így világos, szabadtéri területeken is kiválóan
          alkalmazható. A színek élénksége tovább növeli a vizuális hatást, látványosabbá téve a
          megjelenést a print anyagokhoz, TV-hez vagy vetített képekhez képest.
        </p>
        <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
          Az első lépés minden esetben a partner céljainak megismerése, amit helyszíni felmérés követ.
          Ezt követően közösen találjuk meg a legjobb technikai és méretbeli megoldást. A telepítés után
          támogatást nyújtunk a tartalommal való megtöltésben, valamint a folyamatos karbantartásban is.
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
)

export default Intro
