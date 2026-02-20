import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NavLink = ({ href, label, active }) => (
  <a
    href={href}
    className={`relative text-sm nav:text-base font-medium transition-colors pb-1 ${
      active ? 'text-white' : 'text-slate-100/80 hover:text-white'
    }`}
  >
    {label}
    {active && (
      <motion.span
        layoutId="nav-underline"
        className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-sky-400"
      />
    )}
  </a>
)

const base = import.meta.env.BASE_URL || '/'

const drawerLinks = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
}

const drawerLink = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
}

const NavBar = ({ sections }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const close = () => setMobileOpen(false)

  useEffect(() => {
    const ids = Object.values(sections)
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-10% 0px -60% 0px' }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [sections])

  return (
    <>
      <header className="sticky top-0 z-30 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/70">
        <div className="w-full px-4 py-3 flex items-start nav:items-center justify-between gap-4">
          <div className="flex flex-col nav:flex-row items-start nav:items-center gap-2 nav:gap-3">
            <img
              src={`${base}images/cc-logo_fekvo.png`}
              alt="CinemaCenter"
              className="h-10 nav:h-12 w-auto object-contain"
              loading="lazy"
            />
            <div className="flex flex-col leading-tight text-left">
              <span className="text-lg nav:text-xl font-bold tracking-tight">
                LED-Fal Center
              </span>
              <span className="text-[11px] nav:text-xs text-slate-400">
                Minőségi LED megoldások a LED-fal Centertől.
              </span>
            </div>
          </div>

          <nav className="hidden nav:flex items-center gap-5">
            <NavLink href={`#${sections.bemutatkozas}`} label="Bemutatkozás" active={activeSection === sections.bemutatkozas} />
            <NavLink href={`#${sections.termekek}`} label="Termékek" active={activeSection === sections.termekek} />
            <NavLink href={`#${sections.elonyok}`} label="Megoldásaink" active={activeSection === sections.elonyok} />
            <NavLink href={`#${sections.kapcsolat}`} label="Kapcsolat" active={activeSection === sections.kapcsolat} />
          </nav>

          <div className="nav:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(prev => !prev)}
              className="p-2 rounded-lg border border-slate-700 bg-slate-900/70 flex flex-col justify-center gap-1"
              aria-label="Mobil menü"
              aria-expanded={mobileOpen}
            >
              <span className={`w-5 h-0.5 bg-white rounded transition-transform duration-200 ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`w-5 h-0.5 bg-white rounded transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-5 h-0.5 bg-white rounded transition-transform duration-200 ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm nav:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={close}
              aria-hidden
            />
            <motion.aside
              className="fixed top-0 right-0 z-50 h-full w-72 bg-slate-950 border-l border-slate-800/70 flex flex-col nav:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/70">
                <span className="text-sm font-semibold text-slate-300">Menü</span>
                <button
                  type="button"
                  onClick={close}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
                  aria-label="Menü bezárása"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <motion.nav
                className="flex flex-col px-4 py-5 gap-1"
                variants={drawerLinks}
                initial="hidden"
                animate="visible"
              >
                {[
                  { href: `#${sections.bemutatkozas}`, label: 'Bemutatkozás', id: sections.bemutatkozas },
                  { href: `#${sections.termekek}`, label: 'Termékek', id: sections.termekek },
                  { href: `#${sections.elonyok}`, label: 'Megoldásaink', id: sections.elonyok },
                  { href: `#${sections.kapcsolat}`, label: 'Kapcsolat', id: sections.kapcsolat },
                ].map(({ href, label, id }) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={close}
                    variants={drawerLink}
                    className={`py-3 px-3 rounded-xl text-base font-medium transition-colors ${
                      activeSection === id
                        ? 'text-white bg-slate-800/60 border border-slate-700/60'
                        : 'text-slate-100/90 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {label}
                  </motion.a>
                ))}
              </motion.nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar
