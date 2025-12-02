const ProductCard = ({ title, description, image, accent }) => (
  <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-7 md:gap-10 items-center">
    <div className="space-y-3">
      <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">{description}</p>
    </div>
    <div className="relative">
      <div className={`absolute -inset-4 rounded-3xl ${accent} blur-3xl`} aria-hidden />
      <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 flex items-center justify-center">
        <img src={image} alt={title} className="max-h-56 w-auto object-contain" loading="lazy" />
      </div>
    </div>
  </div>
)

const ProductCardAlt = ({ title, description, image, accent }) => (
  <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-7 md:gap-10 items-center">
    <div className="relative order-2 md:order-1">
      <div className={`absolute -inset-4 rounded-3xl ${accent} blur-3xl`} aria-hidden />
      <div className="relative rounded-3xl border border-slate-800 bg-slate-900/80 p-5 flex items-center justify-center">
        <img src={image} alt={title} className="max-h-56 w-auto object-contain" loading="lazy" />
      </div>
    </div>
    <div className="space-y-3 order-1 md:order-2">
      <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">{description}</p>
    </div>
  </div>
)

const Products = ({ id }) => (
  <section id={id} className="bg-slate-950 border-t border-slate-900/80">
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
        <ProductCard
          title="Beltéri LED kijelzők"
          description="Ma már beltéren is fontos, hogy kitűnjünk a reklámzajból, és a mi üzenetünk legyen a legfeltűnőbb, ezért ott is célszerű látványos felületeket elhelyezni. Ebben vagyunk partnerek – bármilyen üzletről is legyen szó. A reklám felhasználáson túl konferenciák, vezérlőegységek és más munkaállomások részeként is tökéletes választás."
          image="https://imgcdn.unilumin.com/media/upload/products/Umate%20LM/Umate-LM_F.png"
          accent="bg-sky-500/20"
        />

        <ProductCardAlt
          title="Kültéri LED kijelzők"
          description="A közlekedési termináloktól a hirdetőtáblákon át a bevásárlóközpontokig kültéri kereskedelmi LED kijelzőink mindig elég erőteljesek és látványosak ahhoz, hogy tökéletesen bemutassák az összes testreszabott tartalmat, és minden márka üzenetét jól láthatóvá tegyék."
          image="https://imgcdn.unilumin.com/media/upload/products/Umate%20SF/new/Umate-SF_f600.png"
          accent="bg-emerald-500/15"
        />

        <ProductCard
          title="Rendezvényre (rental vagy saját használatra)"
          description="A kiállításoktól a koncerteken át az élő közvetítésekig több LED-megoldást is kínálunk, amelyek gyors telepítést, stabil teljesítményt és kreatív megjelenítést biztosítanak a lenyűgöző show-műsorok létrehozásához."
          image="https://imgcdn.unilumin.com/media/upload/products/ugm2/600x600.png"
          accent="bg-fuchsia-500/20"
        />

        <ProductCardAlt
          title="Sport"
          description="A világbajnokságoktól a klubversenyekig a LED Center Sport részlege fejlett LED megoldásokat kínál mindenféle sportlétesítmény számára, izgalmas vizuális elemeket hozva a sportrajongóknak. Lehetővé teszi élőkép, eredmények és egyéb üzenetek közvetítését."
          image="https://imgcdn.unilumin.com/media/upload/products/UsportX/UsportX_F.png"
          accent="bg-amber-500/20"
        />

        <ProductCard
          title="Világítástechnika"
          description="A professzionális világítás területén a LED Center elkötelezett amellett, hogy minden lépését kreativitással, kiváló minőségű és vizuálisan kényelmes megoldásokkal világítsa meg – legyen szó ipari vagy kültéri helyszínekről."
          image="https://imgcdn.unilumin.com/media/upload/products/lighting-new/Marlin(1).png"
          accent="bg-indigo-500/20"
        />
      </div>
    </div>
  </section>
)

export default Products
