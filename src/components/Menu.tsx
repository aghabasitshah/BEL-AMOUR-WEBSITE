import { motion } from "framer-motion";

const menuCategories = [
  {
    title: "HAIR STYLING",
    items: [
      { name: "Signature Haircut", price: "Rs. 5,000" },
      { name: "Bridal Hair Styling", price: "Rs. 15,000" },
      { name: "Keratin Treatment", price: "Rs. 25,000" },
      { name: "Root Touch-up", price: "Rs. 4,000" },
    ]
  },
  {
    title: "MAKEUP ARTISTRY",
    description: "By Senior Artists",
    items: [
      { name: "Party Makeup", price: "Rs. 10,000" },
      { name: "Bridal Makeup", price: "Rs. 35,000" },
      { name: "Signature Glam", price: "Rs. 20,000" },
      { name: "Engagement Makeup", price: "Rs. 25,000" },
    ]
  },
  {
    title: "SPA & WELLNESS",
    items: [
      { name: "Luxury Facial", price: "Rs. 8,000" },
      { name: "Full Body Massage", price: "Rs. 12,000" },
      { name: "Manicure & Pedicure", price: "Rs. 5,000" },
      { name: "Body Scrub", price: "Rs. 6,500" },
    ]
  }
];

export function Menu() {
  return (
    <section className="py-24 bg-cream" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-espresso mb-4">OUR MENU</h2>
          <p className="font-sans text-taupe tracking-[0.2em] uppercase text-sm font-medium">CURATED SERVICES & PRICING</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {menuCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white p-8 rounded-[2rem] border border-gold/20 shadow-[0_25px_50px_-12px_rgba(26,20,16,0.05)]"
            >
              <div className="text-center mb-8 border-b border-gold/20 pb-6">
                <h3 className="font-display font-bold text-2xl text-espresso tracking-wider">{category.title}</h3>
                {category.description && (
                  <p className="font-sans text-xs text-taupe uppercase tracking-widest mt-2">{category.description}</p>
                )}
              </div>
              
              <div className="space-y-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-baseline group">
                    <span className="font-sans font-medium text-espresso group-hover:text-gold transition-colors">{item.name}</span>
                    <div className="flex-grow border-b border-dotted border-taupe/30 mx-4 relative top-[-4px]"></div>
                    <span className="font-sans font-bold text-taupe">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
