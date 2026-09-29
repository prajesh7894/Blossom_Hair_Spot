import React from 'react';
import { Instagram, MessageCircle, Phone, ArrowUpRight, ShieldCheck, Sparkles, Heart, BellRing, CheckCircle2 } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#FAF7F4] relative border-t border-[#E8DDD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C98F9D]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#542F3B] font-bold">
              Stay Connected
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252225] font-light leading-tight mb-2">
            Join Our <span className="italic text-[#542F3B]">Community</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#252225]/75 font-light leading-relaxed">
            Connect with Bhavnagar's favorite ladies beauty salon. Get first access to seasonal discount offers, hair care tips, and instant slot bookings.
          </p>
        </div>

        {/* 3 Interactive Direct Connection Cards (No stock images, 100% clean & mobile responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
          
          {/* Card 1: Instagram */}
          <div className="bg-[#FAF7F4] border border-[#E8DDD7] p-6 flex flex-col justify-between hover:border-[#542F3B] transition-all duration-300 shadow-xs hover:shadow-md group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-[#542F3B]/10 text-[#542F3B] text-[10px] uppercase tracking-wider font-bold">
                  Instagram
                </span>
              </div>

              <h3 className="font-serif text-xl text-[#252225] font-semibold mb-1 group-hover:text-[#542F3B] transition-colors">
                {SALON_INFO.instagramHandle}
              </h3>
              <p className="text-xs text-[#252225]/70 font-light leading-relaxed mb-6">
                Watch real haircut transformations, bridal updos, hair Botox results, and customer reviews from our Bhavnagar salon.
              </p>
            </div>

            <a
              href={SALON_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 bg-[#FAF7F4] hover:bg-[#542F3B] text-[#542F3B] hover:text-white border border-[#542F3B]/30 hover:border-[#542F3B] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Follow On Instagram</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2: WhatsApp VIP Club & Booking */}
          <div className="bg-[#FAF7F4] border-2 border-[#542F3B]/20 p-6 flex flex-col justify-between relative hover:border-[#542F3B] transition-all duration-300 shadow-sm hover:shadow-md group">
            {/* Recommended Badge */}
            <div className="absolute -top-3 right-6 px-3 py-0.5 bg-[#542F3B] text-white text-[9px] uppercase tracking-widest font-bold shadow-xs">
              Fastest Response
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#25D366] text-white flex items-center justify-center shadow-xs">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] uppercase tracking-wider font-bold">
                  Active Now
                </span>
              </div>

              <h3 className="font-serif text-xl text-[#252225] font-semibold mb-1 group-hover:text-[#542F3B] transition-colors">
                WhatsApp Booking Chat
              </h3>
              <p className="text-xs text-[#252225]/70 font-light leading-relaxed mb-6">
                Send a quick message to reserve your preferred timing, ask about offers, or customize your bridal package with zero waiting.
              </p>
            </div>

            <a
              href={createWhatsAppBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 bg-[#542F3B] hover:bg-[#3B1F28] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat & Book on WhatsApp</span>
            </a>
          </div>

          {/* Card 3: Direct Phone Consultation */}
          <div className="bg-[#FAF7F4] border border-[#E8DDD7] p-6 flex flex-col justify-between hover:border-[#542F3B] transition-all duration-300 shadow-xs hover:shadow-md group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#542F3B] text-[#FAF7F4] flex items-center justify-center shadow-xs">
                  <Phone className="w-6 h-6 text-[#C98F9D]" />
                </div>
                <span className="px-2.5 py-1 bg-[#542F3B]/10 text-[#542F3B] text-[10px] uppercase tracking-wider font-bold">
                  Direct Call
                </span>
              </div>

              <h3 className="font-serif text-xl text-[#252225] font-semibold mb-1 group-hover:text-[#542F3B] transition-colors">
                {SALON_INFO.phoneDisplay}
              </h3>
              <p className="text-xs text-[#252225]/70 font-light leading-relaxed mb-6">
                Prefer speaking directly? Call our salon team during opening hours for consultation, directions, or instant appointment bookings.
              </p>
            </div>

            <a
              href={`tel:${SALON_INFO.whatsappRaw}`}
              className="w-full h-11 bg-[#FAF7F4] hover:bg-[#542F3B] text-[#542F3B] hover:text-white border border-[#542F3B]/30 hover:border-[#542F3B] text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#C98F9D]" />
              <span>Call: {SALON_INFO.phoneDisplay}</span>
            </a>
          </div>

        </div>

        {/* 4 Community Highlights (100% Mobile Responsive Grid) */}
        <div className="p-5 sm:p-6 bg-[#E8DDD7]/30 border border-[#E8DDD7]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#542F3B] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-[#252225]">
                  Pure Ladies Only
                </div>
                <div className="text-[11px] text-[#252225]/70 font-light">
                  100% female staff & complete privacy
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#542F3B] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-[#252225]">
                  Offers From ₹99
                </div>
                <div className="text-[11px] text-[#252225]/70 font-light">
                  Hair Cut ₹199 • Hair Spa ₹499 • D-Ten ₹99
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#542F3B] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-[#252225]">
                  Premium Products
                </div>
                <div className="text-[11px] text-[#252225]/70 font-light">
                  L'Oréal & dermatological hair care
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <BellRing className="w-4 h-4 text-[#542F3B] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs uppercase tracking-wider font-bold text-[#252225]">
                  Bhavnagar Landmark
                </div>
                <div className="text-[11px] text-[#252225]/70 font-light">
                  Beside Iscon Temple, Jawahar Nagar
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
