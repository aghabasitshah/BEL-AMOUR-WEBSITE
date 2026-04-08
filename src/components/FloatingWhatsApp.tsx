import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923330717123?text=Hi!%20I%20need%20help%20or%20have%20a%20complaint%20regarding%20the%20services/website."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 md:bottom-28 md:right-8 z-[60] bg-[#25D366] text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact Support on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />
      <span className="absolute right-full mr-4 bg-white text-espresso text-xs font-bold px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md pointer-events-none">
        Support / Complaints
      </span>
    </a>
  );
}
