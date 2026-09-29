import React from 'react';
import { Calendar, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import { SALON_IMAGES } from '../data/salonData';

interface BrandSplitSectionProps {
  onOpenBooking: () => void;
}

export const BrandSplitSection: React.FC<BrandSplitSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-[#FAF7F4] border-y border-[#E8DDD7] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px] lg:min-h-[580px]">
        
        {/* Left Column: Real Salon Interior Photography */}
        <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[400px] lg:min-h-full overflow-hidden order-2 lg:order-1">
          <img
            src={SALON_IMAGES.interior}
            alt="Blossom Hair Spot styling chairs and arched mirrors in Bhavnagar"
            className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
            loading="lazy"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#252225]/10 to-[#FAF7F4] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F4] via-transparent to-transparent lg:hidden" />
          
          {/* Floating badge */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 bg-[#FAF7F4]/95 backdrop-blur-md p-4 border border-[#E8DDD7] max-w-xs shadow-md">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#C98F9D] block mb-0.5 font-bold">
              Blossom Hair Spot
            </span>
            <p className="font-serif italic text-sm text-[#252225] leading-snug">
              “Soft dusty rose chairs, arched glowing mirrors, and a quiet, peaceful space for ladies.”
            </p>
          </div>
        </div>

        {/* Right Column: Statement & Easy English Copy */}
        <div className="lg:col-span-5 flex flex-col justify-center px-5 sm:px-10 lg:px-12 py-10 sm:py-14 lg:py-16 order-1 lg:order-2 bg-[#FAF7F4]">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1px] bg-[#C98F9D]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#542F3B] font-semibold">
                Pamper Yourself
              </span>
            </div>

            {/* Required statement */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252225] font-light leading-[1.14] mb-4">
              Your Beauty. <br />
              <span className="italic font-normal text-[#542F3B]">Your Moment.</span>
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-[#252225]/85 font-light leading-relaxed mb-6">
              <p>
                Life can get very busy with work, family, and daily routines. Blossom Hair Spot is created as an easy, relaxing retreat in Bhavnagar where you can unwind.
              </p>
              <p>
                Whether you need a quick ₹199 haircut, a refreshing ₹99 D-ten pack, a deeply relaxing ₹499 hair spa, or bridal styling, we make sure you leave feeling fresh, beautiful, and completely satisfied.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#542F3B] font-medium pt-1">
                <ShieldCheck className="w-4 h-4 text-[#C98F9D]" />
                <span>100% Only For Ladies • Beside Iscon Temple, Jawahar Nagar</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DDD7] flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3 bg-[#542F3B] hover:bg-[#3B1F28] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Calendar className="w-4 h-4 text-[#C98F9D]" />
                <span>Book Your Visit</span>
              </button>
              
              <span className="text-xs text-[#252225]/60 font-light italic">
                Walk-ins welcomed, advance booking recommended
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
