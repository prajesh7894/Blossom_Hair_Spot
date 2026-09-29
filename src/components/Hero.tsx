import React from 'react';
import { ArrowDown, Calendar, MessageCircle, MapPin, Sparkles, ShieldCheck, Tag } from 'lucide-react';
import { SALON_INFO, SALON_IMAGES, createWhatsAppBookingUrl } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const handleScrollToOffers = (e: React.MouseEvent) => {
    e.preventDefault();
    const offersSection = document.querySelector('#offers');
    if (offersSection) {
      offersSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToIntro = () => {
    const introSection = document.querySelector('#about');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Salon Interior Image with Warm Ambient Glow Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={SALON_IMAGES.interior}
          alt="Blossom Hair Spot salon interior in Bhavnagar with dusty rose chairs and arched mirror lighting"
          className="w-full h-full object-cover object-center scale-100 sm:scale-105 transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Layered cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#252225] via-[#3B1F28]/70 to-[#252225]/50" />
        <div className="absolute inset-0 bg-[#C98F9D]/15 mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(37,34,37,0.8)_100%)]" />
      </div>

      {/* Decorative hairline frame (visible on tablet and desktop) */}
      <div className="hidden sm:block absolute inset-4 sm:inset-6 md:inset-8 pointer-events-none border border-[#FAF7F4]/20 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-center pt-20 sm:pt-24 pb-20 sm:pb-24 flex flex-col items-center">
        
        {/* Ladies Exclusive Sub-badge */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 px-3 py-1.5 bg-[#542F3B]/80 backdrop-blur-sm border border-[#C98F9D]/40 text-white text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C98F9D] shrink-0" />
          <span>Only For Ladies • Bhavnagar</span>
        </div>

        {/* Primary Headline with dynamic scaling for all screens down to 320px */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl tracking-[0.10em] sm:tracking-[0.14em] uppercase font-light text-[#FAF7F4] leading-[1.12] sm:leading-[1.08] mb-3 sm:mb-4">
          BLOSSOM HAIR SPOT
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-lg sm:text-3xl md:text-4xl text-[#E8DDD7] font-normal tracking-wide mb-2 sm:mb-3">
          “Beauty, styled your way.”
        </p>

        {/* Official Slogan */}
        <p className="text-[10px] sm:text-sm uppercase tracking-[0.20em] sm:tracking-[0.28em] text-[#C98F9D] font-medium mb-3">
          Pamper Yourself • Look Beautiful • Feel Confident
        </p>

        {/* Easy English explanation */}
        <p className="text-xs sm:text-sm text-[#E8DDD7]/90 font-light tracking-wide mb-6 sm:mb-8 max-w-lg leading-relaxed">
          Boutique ladies salon beside Iscon Temple, Jawahar Nagar, Bhavnagar. Hair cut at ₹199, Hair spa at ₹499, Facials at ₹499 & D-ten at ₹99.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md">
          <a
            href="#offers"
            onClick={handleScrollToOffers}
            className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 bg-[#C98F9D] hover:bg-[#DFC0C8] active:scale-[0.98] text-[#252225] text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-bold transition-all duration-200 shadow-[0_8px_25px_rgba(201,143,157,0.35)] flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Tag className="w-4 h-4 text-[#542F3B] shrink-0" />
            <span>View Offers (From ₹99)</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white border border-[#FAF7F4]/40 hover:border-white text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-medium transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Calendar className="w-4 h-4 text-[#C98F9D] shrink-0" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Highlights Bar */}
        <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-[#FAF7F4]/15 grid grid-cols-3 gap-1.5 sm:gap-6 w-full max-w-lg text-center">
          <div>
            <span className="block font-serif text-sm sm:text-lg text-[#FAF7F4] font-medium">Bhavnagar</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#E8DDD7]/70">Near Iscon Temple</span>
          </div>
          <div className="border-x border-[#FAF7F4]/15 px-1 sm:px-2">
            <span className="block font-serif text-sm sm:text-lg text-[#FAF7F4] font-medium">100% Private</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#E8DDD7]/70">Only For Ladies</span>
          </div>
          <div>
            <span className="block font-serif text-sm sm:text-lg text-[#FAF7F4] font-medium">Real Offers</span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-[#E8DDD7]/70">From ₹99</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={handleScrollToIntro}
        aria-label="Scroll down"
        className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 text-[#FAF7F4]/70 hover:text-white transition-colors flex flex-col items-center gap-1 focus:outline-none"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-light">Scroll</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C98F9D]" />
      </button>
    </section>
  );
};
