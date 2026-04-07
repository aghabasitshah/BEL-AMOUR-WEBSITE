import { motion } from "framer-motion";
import { Sparkles, Gift, Clock } from "lucide-react";

const deals = [
  {
    title: "BRIDAL PACKAGE",
    description: "Complete bridal transformation including makeup, hair styling, and premium mehndi art.",
    price: "Rs. 60,000",
    originalPrice: "Rs. 75,000",
    icon: Sparkles,
    color: "bg-espresso text-cream"
  },
  {
    title: "WEEKEND SPA ESCAPE",
    description: "Rejuvenate with our luxury facial and full body massage combo.",
    price: "Rs. 15,000",
    originalPrice: "Rs. 20,000",
    icon: Clock,
    color: "bg-white text-espresso border border-gold/20"
  },
  {
    title: "GLAMOUR BUNDLE",
    description: "Party makeup and signature haircut for your next big event.",
    price: "Rs. 12,000",
    originalPrice: "Rs. 15,000",
    icon: Gift,
    color: "bg-gold text-espresso"
  }
];

export function Deals() {
  return (
    <section className="py-24 bg-[#3A2A1E]" id="deals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-cream mb-4">EXCLUSIVE DEALS</h2>
          <p className="font-sans text-gold tracking-[0.2em] uppercase text-sm font-medium">LIMITED TIME OFFERS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deals.map((deal, idx) => {
            const Icon = deal.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`p-8 rounded-[2rem] shadow-2xl relative overflow-hidden group ${deal.color}`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-display font-bold text-2xl tracking-wider mb-3">{deal.title}</h3>
                <p className="font-sans text-sm opacity-80 mb-8 leading-relaxed min-h-[60px]">
                  {deal.description}
                </p>
                
                <div className="flex items-end gap-4 mb-8">
                  <span className="font-display font-bold text-3xl">{deal.price}</span>
                  <span className="font-sans text-sm line-through opacity-50 mb-1">{deal.originalPrice}</span>
                </div>
                
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 rounded-full border border-current font-sans font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-espresso transition-colors duration-300"
                >
                  Claim Offer
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
