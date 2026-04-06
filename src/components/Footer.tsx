import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2C2419] text-cream">
      {/* Map Bar */}
      <div className="w-full border-b border-gold/10 py-6 text-center">
        <p className="font-sans text-sm tracking-[0.2em] text-cream/60 uppercase">
          GOOGLE MAPS INTEGRATION — AIRPORT ROAD, QUETTA
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo */}
          <div>
            <div className="flex flex-col mb-6">
              <span className="font-display font-black text-2xl text-cream leading-none">BEL'AMOUR</span>
              <span className="font-sans text-[10px] text-gold tracking-widest uppercase mt-1">Spa & Salon</span>
            </div>
            <p className="font-sans text-cream/60 text-sm leading-relaxed pr-4">
              Quetta's premier destination for luxury beauty treatments, bridal services, and rejuvenating spa experiences.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-sans font-bold tracking-wider mb-6 text-cream">SERVICES</h4>
            <ul className="space-y-3 text-cream/60 text-sm">
              <li>Haircut & Styling</li>
              <li>Bridal Mehndi</li>
              <li>Makeup Artistry</li>
              <li>Microblading</li>
              <li>Spa Treatments</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold tracking-wider mb-6 text-cream">CONTACT</h4>
            <ul className="space-y-3 text-cream/60 text-sm">
              <li>Airport Road, Quetta</li>
              <li>WhatsApp: 0333 0717123</li>
              <li>@belamour_salonandspa</li>
              <li>A Project by RJ Group</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-sans font-bold tracking-wider mb-6 text-cream">HOURS</h4>
            <ul className="space-y-3 text-cream/60 text-sm">
              <li>Mon-Sat: 10AM - 8PM</li>
              <li>Sunday: By Appointment</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-sans text-sm text-cream/40">
            &copy; {new Date().getFullYear()} BEL'AMOUR Spa & Salon. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://www.instagram.com/belamour_salonandspa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-sm text-cream/60 hover:text-gold transition-colors flex items-center"
            >
              Instagram
            </a>
            <a 
              href="https://www.threads.com/@belamour_salonandspa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-sm text-cream/60 hover:text-gold transition-colors flex items-center"
            >
              Threads
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
