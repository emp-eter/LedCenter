import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Products from './components/Products'
import Advantages from './components/Advantages'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react'

const sections = {
  bemutatkozas: 'bemutatkozas',
  termekek: 'termekek',
  elonyok: 'elonyok',
  kapcsolat: 'kapcsolat',
}

function App() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('.glow-target'))
    if (!targets.length) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const el = entry.target
          if (entry.isIntersecting) {
            el.classList.add('glow-active')
          } else {
            el.classList.remove('glow-active')
          }
        })
      },
      { threshold: 0.35 }
    )

    targets.forEach(t => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans">
      <NavBar sections={sections} />

      <main className="pb-16">
        <Hero sections={sections} />
        <Intro id={sections.bemutatkozas} />
        <Products id={sections.termekek} />
        <Advantages id={sections.elonyok} />
        <Contact id={sections.kapcsolat} />
      </main>

      <Footer />
    </div>
  )
}

export default App
