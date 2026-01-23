import { useState } from 'react'

const NavLink = ({ href, label }) => (
  <a
    href={href}
    className="text-sm md:text-base font-medium text-slate-100/80 hover:text-white transition-colors"
  >
    {label}
  </a>
)

const NavBar = ({ sections }) => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
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
              Minőségi LED megoldások a LED-fal Centertől.
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-5">
          <NavLink href={`#${sections.bemutatkozas}`} label="Bemutatkozás" />
          <NavLink href={`#${sections.termekek}`} label="Termékek" />
          <NavLink href={`#${sections.elonyok}`} label="Megoldásaink" />
          <NavLink href={`#${sections.kapcsolat}`} label="Kapcsolat" />
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen(prev => !prev)}
            className="p-2 rounded-lg border border-slate-700 bg-slate-900/70 flex flex-col justify-center gap-1"
            aria-label="Mobil menü"
            aria-expanded={mobileOpen}
          >
            <span
              className={`w-5 h-0.5 bg-white rounded transition-transform duration-200 ${
                mobileOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white rounded transition-opacity duration-200 ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white rounded transition-transform duration-200 ${
                mobileOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800/70 bg-slate-950/95">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            <a
              href={`#${sections.bemutatkozas}`}
              onClick={() => setMobileOpen(false)}
              className="py-1.5 text-slate-100/90 hover:text-white"
            >
              Bemutatkozás
            </a>
            <a
              href={`#${sections.termekek}`}
              onClick={() => setMobileOpen(false)}
              className="py-1.5 text-slate-100/90 hover:text-white"
            >
              Termékek
            </a>
            <a
              href={`#${sections.elonyok}`}
              onClick={() => setMobileOpen(false)}
              className="py-1.5 text-slate-100/90 hover:text-white"
            >
              Megoldásaink
            </a>
            <a
              href={`#${sections.kapcsolat}`}
              onClick={() => setMobileOpen(false)}
              className="py-1.5 text-slate-100/90 hover:text-white"
            >
              Kapcsolat
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default NavBar
