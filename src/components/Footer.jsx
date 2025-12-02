const Footer = () => (
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
)

export default Footer
