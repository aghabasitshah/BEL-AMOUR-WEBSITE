import { motion } from "framer-motion";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-16 h-16 flex items-center justify-center text-espresso font-display">
              <span className="absolute text-[50px] font-normal leading-none" style={{ left: '8px', top: '4px', zIndex: 10 }}>B</span>
              <span className="absolute text-[50px] font-normal leading-none" style={{ left: '26px', top: '20px', zIndex: 20 }}>A</span>
            </div>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center space-x-1 bg-white/50 rounded-full p-1 border border-gold/20 shadow-sm">
            <a href="#services" className="px-4 py-2 rounded-full text-xs font-bold tracking-wider text-espresso hover:bg-white transition-colors">SERVICES</a>
            <a href="#menu" className="px-4 py-2 rounded-full text-xs font-bold tracking-wider text-espresso hover:bg-white transition-colors">MENU</a>
            <a href="#deals" className="px-4 py-2 rounded-full text-xs font-bold tracking-wider text-espresso hover:bg-white transition-colors">DEALS</a>
            <a href="#testimonials" className="px-4 py-2 rounded-full text-xs font-bold tracking-wider text-espresso hover:bg-white transition-colors">TESTIMONIALS</a>
            <a href="#contact" className="px-4 py-2 rounded-full text-xs font-bold tracking-wider text-espresso hover:bg-white transition-colors">CONTACT</a>
          </div>

          {/* Button */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-espresso text-cream text-[10px] md:text-xs font-bold tracking-wider hover:bg-chocolate transition-colors whitespace-nowrap"
            >
              BOOK APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
