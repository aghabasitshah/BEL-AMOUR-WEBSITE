import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past 100vh
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-xl border-t border-gold/30 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="hidden md:block">
                <p className="font-display text-xl font-bold text-espresso uppercase tracking-wider">READY FOR YOUR TRANSFORMATION?</p>
                <p className="font-sans text-sm text-taupe">Book your appointment at BEL'AMOUR</p>
              </div>
              
              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
                <a 
                  href="https://wa.me/923366068128?text=Hi!%20I%20would%20like%20to%20ask%20about%20your%20services." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#25D366] text-white font-sans font-bold text-sm tracking-wider hover:bg-[#20bd5a] transition-colors duration-300 flex items-center justify-center"
                >
                  WHATSAPP
                </a>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-3 rounded-full bg-espresso text-cream font-sans font-bold text-sm tracking-wider hover:bg-chocolate transition-colors duration-300"
                >
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
