import React from 'react';
import { Calendar, MessageCircle, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

interface AppointmentCtaProps {
  onOpenBooking: () => void;
}

export const AppointmentCta: React.FC<AppointmentCtaProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#542F3B] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-80 h-80 bg-[#C98F9D]/18 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-80 h-80 bg-[#252225]/50 rounded-full blur-3xl pointer-events-none" />

      {/* Thin decorative frame */}
      <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-[#FAF7F4]/15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-white/10 text-xs uppercase tracking-[0.2em] text-[#C98F9D] font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C98F9D]" />
          <span>Only For Ladies • Bhavnagar, Gujarat</span>
        </div>

        {/* Required Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-wide text-[#FAF7F4] leading-[1.12] mb-3 sm:mb-4">
          Ready For Your <br />
          <span className="italic font-normal text-[#C98F9D]">Next Look?</span>
        </h2>

        <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#E8DDD7]/90 font-light leading-relaxed mb-6 sm:mb-8">
          Book your appointment at Blossom Hair Spot in Bhavnagar. Hair cut at ₹199, Hair spa at ₹499, Facials at ₹499, and D-ten at ₹99. We are ready to pamper you!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#C98F9D] hover:bg-[#DFC0C8] text-[#252225] text-xs uppercase tracking-[0.18em] font-bold transition-all duration-300 shadow-md hover:-translate-y-0.5 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Calendar className="w-4 h-4 text-[#542F3B]" />
            <span>Book Appointment</span>
          </button>

          <a
            href={createWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-[#FAF7F4]/30 hover:border-white text-xs uppercase tracking-[0.16em] font-light transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Direct WhatsApp Booking</span>
          </a>
        </div>

        {/* Quick Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#E8DDD7]/85 font-light">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C98F9D]" />
            <span>Fast WhatsApp slot confirmation</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C98F9D]" />
            <span>100% Only for ladies</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C98F9D]" />
            <span>Beside Iscon Temple, Bhavnagar</span>
          </span>
        </div>

      </div>
    </section>
  );
};
