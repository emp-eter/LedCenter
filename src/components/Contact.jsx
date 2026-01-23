const Contact = ({ id }) => (
  <section id={id} className="bg-slate-950 border-t border-slate-900/80">
    <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-10 lg:gap-12 items-start">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-1">Lépjen kapcsolatba velünk</h2>
        <p className="text-sm md:text-base text-slate-200/90 max-w-xl">
          Amennyiben felkeltettük érdeklődését, keressen minket bizalommal az alábbi elérhetőségek
          egyikén! Segítünk a megfelelő LED megoldás kiválasztásában az első ötlettől a megvalósításig.
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
              <p className="text-xs font-semibold text-sky-300 mb-1">Értékesítés</p>
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
                <a href="tel: +36306368189" className="text-sky-300 hover:underline">
                   +36 30 636 81 89
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="text-[10px] md:text-[11px] text-slate-500 text-center md:text-left mt-6">
          A kiajánlóban található képek az általunk forgalmazott termékek gyártójának saját fotói.
        </p>
      </div>

      <div className="relative mt-2 lg:mt-0 rounded-3xl border border-dashed border-slate-800 bg-slate-900/20 shadow-2xl flex items-center justify-center min-h-[280px]">
        <p className="text-slate-500 text-sm">Kép szükséges</p>
      </div>
    </div>
  </section>
)

export default Contact
