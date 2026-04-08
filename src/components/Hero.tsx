import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const luxuryEase = [0.16, 1, 0.3, 1];
  const floatEase = [0.45, 0, 0.55, 1];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-cream flex flex-col pt-20">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center flex-grow">
        {/* RJ Group Badge */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: luxuryEase }}
          className="mb-8 md:mb-12 inline-flex items-center text-taupe text-xs font-bold tracking-[0.2em] uppercase"
        >
          A Project by RJ Group
        </motion.div>

        {/* Typography Stack */}
        <div className="relative text-center flex flex-col items-center w-full">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: luxuryEase }}
            className="font-display font-black text-[clamp(6rem,18vw,280px)] text-gold leading-[0.8] drop-shadow-sm z-10"
          >
            BEL'
          </motion.h1>
          
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.4, ease: luxuryEase }}
            className="font-display font-black text-[clamp(6rem,18vw,280px)] text-espresso leading-[0.8] tracking-[-0.04em] -mt-4 md:-mt-12 z-20"
          >
            AMOUR
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: luxuryEase }}
            className="font-sans text-[clamp(1.5rem,4vw,60px)] text-gold tracking-[0.4em] mt-8 z-20"
          >
            SPA & SALON
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: luxuryEase }}
            className="mt-12 flex flex-col items-center space-y-3 text-espresso text-xs font-bold tracking-[0.2em] uppercase z-20"
          >
            <div className="flex items-center text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3"></span>
              AIRPORT ROAD, QUETTA NEAR TCS OFFICE
            </div>
          </motion.div>
        </div>

        {/* Floating Artifacts */}
        <motion.div
          animate={{ y: [-15, 15, -15] }}
          transition={{ duration: 6, ease: floatEase, repeat: Infinity }}
          className="absolute left-[-10%] sm:left-[-2%] md:left-[2%] lg:left-[5%] top-[65%] sm:top-[60%] md:top-[55%] flex flex-col items-center justify-center p-3 md:p-5 rounded-2xl md:rounded-[1.5rem] bg-espresso border border-gold/20 shadow-2xl -rotate-6 z-30 w-28 h-36 md:w-36 md:h-44"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center mb-2 md:mb-3">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <span className="font-display font-bold text-cream text-xs md:text-lg mb-1">MEHNDI</span>
          <span className="font-sans text-gold text-[7px] md:text-[10px] tracking-widest uppercase text-center">Bridal Art</span>
        </motion.div>

        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 7, delay: 1, ease: floatEase, repeat: Infinity }}
          className="absolute right-[-10%] sm:right-[-2%] md:right-[2%] lg:right-[5%] top-[30%] sm:top-[40%] md:top-[45%] flex flex-col items-center justify-center p-3 md:p-5 rounded-2xl md:rounded-[1.5rem] bg-white border border-gold/20 shadow-2xl rotate-6 z-30 w-28 h-36 md:w-36 md:h-44"
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold/10 flex items-center justify-center mb-2 md:mb-3">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <span className="font-display font-bold text-espresso text-xs md:text-lg mb-1">MAKEUP</span>
          <span className="font-sans text-taupe text-[7px] md:text-[10px] tracking-widest uppercase text-center">Bridal & Party</span>
        </motion.div>

        {/* Rotating Seal */}
        <div 
          className="absolute right-4 bottom-24 md:right-16 md:bottom-16 w-20 h-20 md:w-32 md:h-32 cursor-pointer group z-30"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="w-full h-full relative group-hover:[animation-duration:15s]"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-espresso overflow-visible">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="text-[9px] md:text-[11px] font-sans font-bold tracking-[0.2em] uppercase">
                <textPath href="#circlePath" startOffset="0%">
                  BOOK NOW • BOOK NOW • BOOK NOW •
                </textPath>
              </text>
            </svg>
          </motion.div>
          <div className="absolute inset-0 m-auto w-10 h-10 md:w-16 md:h-16 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-espresso" />
          </div>
        </div>
      </div>

      {/* Black Bar */}
      <div className="w-full bg-espresso text-cream py-4 border-t border-gold/20 z-40 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-between items-center text-[10px] sm:text-xs font-bold tracking-widest uppercase gap-y-2">
          <span>221+ HAPPY CLIENTS</span>
          <span className="text-gold hidden sm:inline">-</span>
          <span>30+ TRANSFORMATIONS</span>
          <span className="text-gold hidden md:inline">-</span>
          <span className="hidden md:inline">BY RJ GROUP</span>
          <span className="text-gold hidden lg:inline">-</span>
          <span className="hidden lg:inline">AIRPORT ROAD, QUETTA NEAR TCS OFFICE</span>
        </div>
      </div>
    </section>
  );
}
