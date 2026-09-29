import React from 'react';
import { ShieldCheck, Heart, Sparkles, MapPin, Tag } from 'lucide-react';
import { SALON_IMAGES, SALON_INFO } from '../data/salonData';

export const IntroSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F4] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-[#C98F9D]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#C98F9D]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#542F3B] font-semibold">
                Welcome to Blossom Hair Spot
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252225] font-light leading-[1.18] mb-5">
              A Space Made <br />
              <span className="italic font-normal text-[#542F3B]">For Your Glow.</span>
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-[#252225]/85 font-light leading-relaxed">
              <p>
                Blossom Hair Spot is a dedicated ladies beauty and hair salon located beside Iscon Temple in Jawahar Nagar, Bhavnagar.
              </p>
              <p>
                We built this salon to give every woman and girl a clean, peaceful, and completely private space. Our interior is styled with soft dusty rose chairs, arched glowing vanity mirrors, and ivory walls so you feel comfortable from the moment you step in.
              </p>
              <div className="p-3.5 bg-[#E8DDD7]/40 border-l-3 border-[#542F3B] text-xs sm:text-sm text-[#542F3B] font-medium">
                100% only for ladies • Trained lady beauticians • Branded products only
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-[#E8DDD7]">
              <div className="flex sm:flex-col items-start gap-2.5 sm:gap-1">
                <div className="p-2 bg-[#E8DDD7]/50 rounded-sm text-[#542F3B]">
                  <ShieldCheck className="w-4 h-4 text-[#C98F9D]" />
                </div>
                <div>
                  <span className="font-serif text-base text-[#542F3B] block font-semibold">100% Private</span>
                  <p className="text-xs text-[#252225]/70 font-light">
                    Exclusively for ladies with complete privacy.
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-start gap-2.5 sm:gap-1">
                <div className="p-2 bg-[#E8DDD7]/50 rounded-sm text-[#542F3B]">
                  <Tag className="w-4 h-4 text-[#C98F9D]" />
                </div>
                <div>
                  <span className="font-serif text-base text-[#542F3B] block font-semibold">Real Offers</span>
                  <p className="text-xs text-[#252225]/70 font-light">
                    Hair cut ₹199, Hair spa ₹499, D-ten ₹99.
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-col items-start gap-2.5 sm:gap-1">
                <div className="p-2 bg-[#E8DDD7]/50 rounded-sm text-[#542F3B]">
                  <Heart className="w-4 h-4 text-[#C98F9D]" />
                </div>
                <div>
                  <span className="font-serif text-base text-[#542F3B] block font-semibold">Lady Staff</span>
                  <p className="text-xs text-[#252225]/70 font-light">
                    Friendly, patient, and hygienic service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Primary Image: Dusty Rose & Ivory styling station */}
              <div className="relative overflow-hidden aspect-[4/5] shadow-lg border border-[#E8DDD7]">
                <img
                  src={SALON_IMAGES.interior}
                  alt="Blossom Hair Spot styling interior in Bhavnagar"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#252225]/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C98F9D] block mb-0.5 font-semibold">
                    Bhavnagar Studio
                  </span>
                  <span className="font-serif text-lg tracking-wide">
                    Dusty rose chairs & arched glowing mirrors
                  </span>
                </div>
              </div>

              {/* Offset Accent Image: Hair wash lounge */}
              <div className="hidden sm:block absolute -bottom-5 -left-5 w-3/5 aspect-square shadow-xl border-4 border-[#FAF7F4] overflow-hidden">
                <img
                  src={SALON_IMAGES.washLounge}
                  alt="Relaxing hair wash area at Blossom Hair Spot"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Monogram Badge */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#542F3B] text-[#FAF7F4] flex flex-col items-center justify-center shadow-lg border border-[#B99A6B]/40">
                <span className="font-serif text-sm tracking-widest text-[#B99A6B] font-bold">BHS</span>
                <span className="text-[8px] uppercase tracking-wider text-[#FAF7F4]/80">Ladies</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
