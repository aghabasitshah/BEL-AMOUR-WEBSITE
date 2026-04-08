import { useState, useEffect, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Check, MapPin, Phone, Clock, Mail } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    service: '',
    date: '',
    message: ''
  });

  useEffect(() => {
    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent;
      setFormData(prev => ({ ...prev, service: customEvent.detail }));
    };
    window.addEventListener('selectService', handleServiceSelect);
    return () => window.removeEventListener('selectService', handleServiceSelect);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const phoneNumber = "923330717123";
    const text = `*New Appointment Request*\n\n*Name:* ${formData.name}\n*WhatsApp:* ${formData.whatsapp}\n*Service:* ${formData.service}\n*Preferred Date:* ${formData.date}\n*Message:* ${formData.message || 'N/A'}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
    setFormData({ name: '', whatsapp: '', service: '', date: '', message: '' });
  };

  return (
    <section className="py-24 bg-[#3A3024]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="text-cream">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">VISIT US</h2>
            <p className="font-sans text-cream/80 text-lg mb-12">
              Experience the epitome of luxury at our Airport Road location.<br/>
              Book your appointment today.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mr-6 shrink-0">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg tracking-wider mb-1">LOCATION</h4>
                  <p className="text-cream/70">Airport road, Quetta Near TCS Office</p>
                  <p className="text-gold/80 text-sm mt-1">A Project by RJ Group</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mr-6 shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg tracking-wider mb-1">WHATSAPP / CALL</h4>
                  <p className="text-cream/70">+92 333 0717123</p>
                  <p className="text-cream/70">+92 336 6068128</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mr-6 shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg tracking-wider mb-1">EMAIL</h4>
                  <p className="text-cream/70">belamourspasaloon@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center mr-6 shrink-0">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-lg tracking-wider mb-1">HOURS</h4>
                  <p className="text-cream/70">Mon-Sat: 10AM - 8PM</p>
                  <p className="text-cream/70 mt-1">Sunday: By Appointment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-cream p-10 md:p-12 rounded-[2rem]">
            <h3 className="font-display text-3xl font-bold text-espresso mb-2">BOOK YOUR EXPERIENCE</h3>
            <p className="font-sans text-taupe mb-8">Reserve your appointment for a transformative beauty session.</p>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block font-sans text-xs font-bold tracking-widest text-espresso uppercase mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-chocolate/20 py-2 text-espresso font-sans placeholder:text-taupe/60 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block font-sans text-xs font-bold tracking-widest text-espresso uppercase mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value }))}
                    pattern="^(\+92|0|92)[0-9]{10}$"
                    placeholder="03XX XXXXXXX"
                    className="w-full bg-transparent border-b border-chocolate/20 py-2 text-espresso font-sans placeholder:text-taupe/60 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-xs font-bold tracking-widest text-espresso uppercase mb-2">Service</label>
                <select
                  id="service-select"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  className="w-full bg-transparent border-b border-chocolate/20 py-2 text-espresso font-sans focus:outline-none focus:border-gold transition-colors appearance-none"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Haircut">Haircut & Styling</option>
                  <option value="Mehndi">Bridal & Occasion Mehndi</option>
                  <option value="Makeup">Bridal & Party Makeup</option>
                  <option value="Microblading">Microblading</option>
                  <option value="Spa">Spa Treatments</option>
                  <option value="BTS">Behind The Scenes Glam</option>
                  <option value="Custom">Custom Request</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-xs font-bold tracking-widest text-espresso uppercase mb-2">Preferred Date</label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                  className="w-full bg-transparent border-b border-chocolate/20 py-2 text-espresso font-sans focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div>
                <label className="block font-sans text-xs font-bold tracking-widest text-espresso uppercase mb-2">Message</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your desired look..."
                  className="w-full bg-transparent border-b border-chocolate/20 py-2 text-espresso font-sans placeholder:text-taupe/60 focus:outline-none focus:border-gold transition-colors resize-none"
                ></textarea>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 rounded-full font-sans font-bold tracking-widest uppercase text-sm transition-all duration-300 flex items-center justify-center ${
                  isSuccess 
                    ? "bg-green-500 text-white" 
                    : "bg-espresso text-cream hover:bg-chocolate"
                }`}
              >
                {isSuccess ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    We'll WhatsApp you shortly
                  </>
                ) : isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Request Appointment"
                )}
              </motion.button>
              
              <p className="text-center font-sans text-xs text-taupe uppercase tracking-widest mt-4">
                We typically respond within 2 hours via WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
