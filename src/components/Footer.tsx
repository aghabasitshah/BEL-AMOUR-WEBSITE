import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2C2419] text-cream">
      {/* Map Bar */}
      <div className="w-full border-b border-gold/10 py-6 text-center">
        <p className="font-sans text-sm tracking-[0.2em] text-cream/60 uppercase">
          GOOGLE MAPS INTEGRATION — AIRPORT ROAD, QUETTA NEAR TCS OFFICE
        </p>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative w-20 h-20 flex items-center justify-center text-cream font-display">
                <span className="absolute text-[64px] font-normal leading-none" style={{ left: '4px', top: '0px', zIndex: 10 }}>B</span>
                <span className="absolute text-[64px] font-normal leading-none" style={{ left: '30px', top: '24px', zIndex: 20 }}>A</span>
              </div>
            </div>
            <p className="font-sans text-cream/60 text-sm leading-relaxed pr-4 mt-2">
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

          {/* Company */}
          <div>
            <h4 className="font-sans font-bold tracking-wider mb-6 text-cream">COMPANY</h4>
            <ul className="space-y-3 text-cream/60 text-sm">
              <li><a href="#about" className="hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="hover:text-gold transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-bold tracking-wider mb-6 text-cream">CONTACT</h4>
            <ul className="space-y-3 text-cream/60 text-sm">
              <li>Airport road, Quetta Near TCS Office</li>
              <li>WhatsApp / Call: +92 333 0717123</li>
              <li>+92 336 6068128</li>
              <li>belamourspasaloon@gmail.com</li>
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
