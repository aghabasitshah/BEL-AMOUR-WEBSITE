export function Privacy() {
  return (
    <section className="py-24 bg-cream" id="privacy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-espresso mb-4">PRIVACY POLICY</h2>
          <p className="font-sans text-gold tracking-widest uppercase text-sm font-bold">Effective Date: April 2026</p>
        </div>
        
        <div className="font-sans text-taupe leading-relaxed bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gold/10">
          <p className="text-lg text-espresso font-medium text-center mb-10">At BEL’AMOUR Spa &amp; Salon, your privacy is important to us. This policy outlines how we handle your information:</p>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-espresso font-bold mb-2 uppercase tracking-wider text-sm">Information Collection</h4>
              <p className="text-sm">We collect basic details such as your name, phone number (WhatsApp), and service preferences when you book an appointment.</p>
            </div>

            <div>
              <h4 className="text-espresso font-bold mb-2 uppercase tracking-wider text-sm">Usage</h4>
              <p className="text-sm">Your data is used solely to manage your bookings, provide personalized beauty services, and send you appointment reminders or special offers.</p>
            </div>

            <div>
              <h4 className="text-espresso font-bold mb-2 uppercase tracking-wider text-sm">Data Protection</h4>
              <p className="text-sm">We do not sell or share your personal information with third parties. All client records are kept confidential and secure within our management system.</p>
            </div>

            <div>
              <h4 className="text-espresso font-bold mb-2 uppercase tracking-wider text-sm">Consent</h4>
              <p className="text-sm">By booking with us, you agree to our collection of information for the purpose of fulfilling your requested services.</p>
            </div>
          </div>

          <div className="pt-8 mt-10 border-t border-gold/20 text-center">
            <p className="text-sm text-espresso">For any questions regarding your data, please contact us at:</p>
            <p className="text-gold font-bold mt-2 text-lg">0333-0717123 <span className="text-taupe mx-2">|</span> +92 336 6068128</p>
          </div>
        </div>
      </div>
    </section>
  );
}
