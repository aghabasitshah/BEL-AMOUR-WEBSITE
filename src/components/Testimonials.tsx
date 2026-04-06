import { motion, useAnimation } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "The bridal mehndi was absolutely exquisite. BEL'AMOUR made my wedding day perfect.",
    author: "Sarah K.",
    service: "Bridal Mehndi"
  },
  {
    quote: "Finally found a salon in Quetta that understands modern cuts with traditional elegance.",
    author: "Amina R.",
    service: "Haircut"
  },
  {
    quote: "My makeup lasted all night through the reception. Professional and luxurious.",
    author: "Fatima Z.",
    service: "Makeup"
  },
  {
    quote: "The microblading changed my life. So natural, so perfect.",
    author: "Zara M.",
    service: "Microblading"
  }
];

export function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  
  useEffect(() => {
    if (!isHovered) {
      controls.start({
        rotateY: [0, -360],
        transition: {
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }
      });
    } else {
      controls.stop();
    }
  }, [isHovered, controls]);

  return (
    <section className="py-24 bg-cream overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-espresso mb-4">CLIENT STORIES</h2>
        <p className="font-sans text-taupe tracking-[0.2em] uppercase text-sm font-medium">EXPERIENCES OF ELEGANCE</p>
      </div>

      {/* Desktop 3D Carousel */}
      <div className="hidden md:flex justify-center items-center h-[500px] perspective-[1200px]">
        <motion.div
          className="relative w-[360px] h-[400px] preserve-3d"
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((t, i) => {
            const angle = (i / testimonials.length) * 360;
            return (
              <div
                key={i}
                className="absolute top-0 left-0 w-full h-full bg-white border border-gold/20 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(26,20,16,0.15)] p-8 flex flex-col justify-between"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(400px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <div>
                  <Quote className="w-8 h-8 text-gold mb-6" />
                  <p className="font-sans text-espresso text-lg leading-relaxed relative z-10">
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <p className="font-display font-bold text-espresso text-xl mb-1 uppercase tracking-wider text-sm">{t.author}</p>
                  <span className="inline-block text-taupe text-xs font-medium uppercase tracking-widest mb-4">
                    {t.service}
                  </span>
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Mobile 2D Slider */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 pb-12 gap-6">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex-none w-[85vw] max-w-[360px] snap-center bg-white border border-gold/20 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(26,20,16,0.15)] p-8 flex flex-col justify-between min-h-[320px]"
          >
            <div>
              <Quote className="w-8 h-8 text-gold mb-6" />
              <p className="font-sans text-espresso text-lg leading-relaxed">
                "{t.quote}"
              </p>
            </div>
            <div className="mt-8">
              <p className="font-display font-bold text-espresso text-xl mb-1 uppercase tracking-wider text-sm">{t.author}</p>
              <span className="inline-block text-taupe text-xs font-medium uppercase tracking-widest mb-4">
                {t.service}
              </span>
              <div className="flex text-gold">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
