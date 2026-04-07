import { motion } from "framer-motion";
import { Scissors, Paintbrush, Sparkles, Eye, Heart, Camera } from "lucide-react";

const services = [
  {
    title: "HAIRCUT",
    description: "Precision cuts & styling",
    icon: Scissors,
    bg: "bg-white",
    text: "text-espresso",
    iconColor: "text-espresso",
    descColor: "text-taupe",
    value: "Haircut"
  },
  {
    title: "MEHNDI",
    description: "Bridal & occasion art",
    icon: Paintbrush,
    bg: "bg-espresso",
    text: "text-cream",
    iconColor: "text-gold",
    descColor: "text-cream/70",
    value: "Mehndi"
  },
  {
    title: "MAKEUP",
    description: "Bridal & party glamour",
    icon: Sparkles,
    bg: "bg-white",
    text: "text-espresso",
    iconColor: "text-espresso",
    descColor: "text-taupe",
    value: "Makeup"
  },
  {
    title: "MICROBLADING",
    description: "Perfect brows daily",
    icon: Eye,
    bg: "bg-gold",
    text: "text-espresso",
    iconColor: "text-espresso",
    descColor: "text-espresso/70",
    value: "Microblading"
  },
  {
    title: "SPA TREATMENTS",
    description: "Rejuvenation & relaxation",
    icon: Heart,
    bg: "bg-white",
    text: "text-espresso",
    iconColor: "text-espresso",
    descColor: "text-taupe",
    value: "Spa"
  },
  {
    title: "BTS",
    description: "Behind the scenes glam",
    icon: Camera,
    bg: "bg-espresso",
    text: "text-cream",
    iconColor: "text-gold",
    descColor: "text-cream/70",
    value: "BTS"
  }
];

export function Services() {
  return (
    <section className="py-24 bg-cream" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-espresso mb-6">OUR SERVICES</h2>
            <p className="font-sans text-taupe text-lg">
              Experience luxury treatments designed to enhance your natural beauty and elevate your confidence.
            </p>
          </div>
          <button className="px-8 py-3 rounded-full border-2 border-espresso text-espresso font-sans font-bold text-sm tracking-wider hover:bg-espresso hover:text-cream transition-colors whitespace-nowrap">
            VIEW ALL SERVICES
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative p-10 rounded-[2rem] ${service.bg} shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[240px]`}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('selectService', { detail: service.value }));
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div>
                <div className={`w-12 h-12 rounded-full border ${service.bg === 'bg-espresso' ? 'border-gold/30' : 'border-espresso/10'} flex items-center justify-center mb-6`}>
                  <service.icon className={`w-5 h-5 ${service.iconColor}`} />
                </div>
                <h3 className={`font-display text-2xl font-bold ${service.text} mb-2 tracking-wide`}>{service.title}</h3>
                <p className={`font-sans ${service.descColor}`}>{service.description}</p>
              </div>
              
              <div className="mt-8 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className={`font-sans text-xs font-bold uppercase tracking-widest flex items-center ${service.bg === 'bg-espresso' ? 'text-gold' : 'text-espresso'}`}>
                  Book Now
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
