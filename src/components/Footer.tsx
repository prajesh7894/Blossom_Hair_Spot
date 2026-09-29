import React from 'react';
import { Instagram, MessageCircle, Phone, ArrowUp, MapPin } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#252225] text-[#FAF7F4] pt-14 pb-24 md:pb-12 border-t border-[#3B1F28] relative overflow-hidden">
      {/* Subtle brand glow in the background */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#C98F9D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#FAF7F4]/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="flex flex-col mb-3">
              <span className="font-serif text-2xl tracking-[0.16em] uppercase text-[#FAF7F4] font-semibold">
                BLOSSOM HAIR SPOT
              </span>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C98F9D] font-medium mt-1">
                <span>For Ladies</span>
                <span className="opacity-40">•</span>
                <span className="flex items-center gap-1 text-[#E8DDD7]">
                  <MapPin className="w-3 h-3 text-[#C98F9D]" />
                  Bhavnagar, Gujarat
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#E8DDD7]/75 font-light leading-relaxed max-w-sm mb-5">
              Boutique ladies hair and beauty salon in Bhavnagar. Hair cut at ₹199, Hair spa at ₹499, Facials at ₹499, and D-ten at ₹99 in a peaceful dusty rose interior.
            </p>

            <div className="flex items-center gap-2.5">
              <a
                href={SALON_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#FAF7F4]/5 hover:bg-[#C98F9D] text-[#FAF7F4] hover:text-[#252225] border border-[#FAF7F4]/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#FAF7F4]/5 hover:bg-[#C98F9D] text-[#FAF7F4] hover:text-[#252225] border border-[#FAF7F4]/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`tel:${SALON_INFO.whatsappRaw}`}
                className="p-2.5 bg-[#FAF7F4]/5 hover:bg-[#C98F9D] text-[#FAF7F4] hover:text-[#252225] border border-[#FAF7F4]/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Call Salon"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C98F9D] mb-3 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-[0.14em] text-[#E8DDD7]/80 font-light">
              <li>
                <a href="#home" className="hover:text-[#FAF7F4] transition-colors py-1 inline-block">Home</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#FAF7F4] transition-colors py-1 inline-block">Special Offers</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#FAF7F4] transition-colors py-1 inline-block">About Our Space</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#FAF7F4] transition-colors py-1 inline-block">All Services & Rates</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#FAF7F4] transition-colors py-1 inline-block">Salon Photos</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FAF7F4] transition-colors py-1 inline-block">Contact & Timings</a>
              </li>
            </ul>
          </div>

          {/* Timings & Address */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C98F9D] mb-3 font-semibold">
              Opening Hours
            </h4>
            <div className="space-y-1.5 text-xs text-[#E8DDD7]/80 font-light mb-4">
              <div className="flex justify-between border-b border-[#FAF7F4]/10 pb-1">
                <span>All Days (Mon – Sun)</span>
                <span className="text-[#FAF7F4] font-medium">9:00 AM – 9:00 PM</span>
              </div>
              <div className="text-[11px] text-[#C98F9D] pt-0.5">
                Open all 7 days a week for ladies
              </div>
            </div>

            <div className="p-3 bg-[#FAF7F4]/5 border border-[#FAF7F4]/10 text-xs text-[#E8DDD7]/80">
              <span className="text-[#C98F9D] font-medium block mb-0.5">Location:</span>
              Beside Iscon Temple, Sidsar Road, Jawahar Nagar, Bhavnagar, Gujarat. Strictly exclusive for ladies.
              <a
                href={SALON_INFO.address.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[#C98F9D] hover:text-white flex items-center gap-1 font-semibold uppercase tracking-wider text-[10px]"
              >
                <span>Open in Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E8DDD7]/60 font-light text-center sm:text-left">
          <div>
            <span>© {new Date().getFullYear()} Blossom Hair Spot – For Ladies (Bhavnagar).</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Beside Iscon Temple, Bhavnagar</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#C98F9D] hover:text-[#FAF7F4] transition-colors uppercase tracking-widest text-[11px] min-h-[44px] px-2"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
