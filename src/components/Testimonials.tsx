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
  },
  {
    quote: "The spa treatment was incredibly relaxing. The ambiance and service are unmatched in the city.",
    author: "Ayesha T.",
    service: "Spa Treatment"
  },
  {
    quote: "I booked them for my sister's wedding. The entire team was so accommodating and the results were flawless.",
    author: "Hira N.",
    service: "Bridal & Party Makeup"
  }
];

export function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const [radius, setRadius] = useState(400);
  const [cardWidth, setCardWidth] = useState(360);
  const [cardHeight, setCardHeight] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setRadius(280);
        setCardWidth(260);
        setCardHeight(320);
      } else if (window.innerWidth < 1024) {
        setRadius(360);
        setCardWidth(300);
        setCardHeight(360);
      } else {
        setRadius(480);
        setCardWidth(360);
        setCardHeight(400);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
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

      {/* 3D Carousel (Responsive) */}
      <div className="flex justify-center items-center h-[400px] md:h-[500px] perspective-[1000px] md:perspective-[1200px]">
        <motion.div
          className="relative preserve-3d"
          style={{ width: cardWidth, height: cardHeight }}
          animate={controls}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {testimonials.map((t, i) => {
            const angle = (i / testimonials.length) * 360;
            return (
              <div
                key={i}
                className="absolute top-0 left-0 w-full h-full bg-white border border-gold/20 rounded-2xl md:rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(26,20,16,0.15)] p-6 md:p-8 flex flex-col justify-between"
                style={{
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: "hidden",
                }}
              >
                <div>
                  <Quote className="w-6 h-6 md:w-8 h-8 text-gold mb-4 md:mb-6" />
                  <p className="font-sans text-espresso text-sm md:text-lg leading-relaxed relative z-10">
                    "{t.quote}"
                  </p>
                </div>
                <div>
                  <p className="font-display font-bold text-espresso text-lg md:text-xl mb-1 uppercase tracking-wider">{t.author}</p>
                  <span className="inline-block text-taupe text-[10px] md:text-xs font-medium uppercase tracking-widest mb-3 md:mb-4">
                    {t.service}
                  </span>
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
