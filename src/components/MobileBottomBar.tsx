import React from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { createWhatsAppBookingUrl, SALON_INFO } from '../data/salonData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Quick Mobile Salon Booking Bar"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom, 0.625rem))' }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF7F4]/98 backdrop-blur-md border-t border-[#E8DDD7] px-3 pt-2.5 shadow-[0_-4px_20px_rgba(84,47,59,0.12)] flex items-center gap-2 touch-manipulation"
    >
      {/* Quick Direct Call */}
      <a
        href={`tel:${SALON_INFO.whatsappRaw}`}
        className="p-2.5 bg-[#FAF7F4] border border-[#542F3B]/25 text-[#542F3B] hover:text-[#C98F9D] active:scale-95 transition-all shrink-0 min-h-[46px] min-w-[46px] flex items-center justify-center shadow-xs"
        aria-label="Call Blossom Hair Spot Bhavnagar"
      >
        <Phone className="w-4 h-4 text-[#542F3B] shrink-0" />
      </a>

      {/* Direct WhatsApp Quick Chat */}
      <a
        href={createWhatsAppBookingUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2.5 bg-[#25D366]/15 border border-[#25D366]/40 text-[#128C7E] hover:bg-[#25D366]/25 active:scale-95 transition-all shrink-0 min-h-[46px] min-w-[46px] flex items-center justify-center shadow-xs"
        aria-label="WhatsApp Blossom Hair Spot Bhavnagar"
      >
        <MessageCircle className="w-4 h-4 text-[#128C7E] shrink-0" />
      </a>

      {/* Book Appointment CTA Button */}
      <button
        onClick={onOpenBooking}
        className="flex-1 py-3 px-3 bg-[#542F3B] hover:bg-[#3B1F28] active:scale-[0.98] text-white text-[11px] uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 shadow-sm min-h-[46px] transition-all"
      >
        <Calendar className="w-3.5 h-3.5 text-[#C98F9D] shrink-0" />
        <span>Book Appointment</span>
      </button>
    </aside>
  );
};
