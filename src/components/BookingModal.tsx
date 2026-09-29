import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Scissors, MessageCircle, Tag } from 'lucide-react';
import { OFFICIAL_OFFERS, createWhatsAppBookingUrl, SALON_INFO } from '../data/salonData';
import { BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    service: preselectedService || 'Hair Cut (₹199/-)',
    preferredDate: '',
    preferredTime: '11:00 AM',
    notes: '',
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateString = tomorrow.toISOString().split('T')[0];
    setFormData((prev) => ({
      ...prev,
      preferredDate: prev.preferredDate || dateString,
    }));
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = createWhatsAppBookingUrl(formData);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleDirectWhatsApp = () => {
    const url = createWhatsAppBookingUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const timeSlots = [
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '07:30 PM',
    '08:30 PM',
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 bg-[#252225]/85 backdrop-blur-sm flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FAF7F4] border border-[#E8DDD7] shadow-2xl p-5 sm:p-7 my-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#252225]/60 hover:text-[#542F3B] hover:bg-[#E8DDD7]/50 transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 pr-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-5 h-[1px] bg-[#C98F9D]" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#542F3B] font-bold">
              Bhavnagar Ladies Salon
            </span>
          </div>

          <h3 id="booking-modal-title" className="font-serif text-2xl sm:text-3xl text-[#252225] font-light leading-snug">
            Book Appointment <br />
            <span className="italic text-[#542F3B]">Via WhatsApp</span>
          </h3>

          <p className="text-xs text-[#252225]/75 font-light leading-relaxed mt-1">
            Enter your details below to open WhatsApp with a pre-filled booking message for our Bhavnagar branch.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Full Name */}
          <div>
            <label className="block text-xs uppercase tracking-[0.14em] text-[#252225]/80 font-semibold mb-1">
              Your Name *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                placeholder="e.g., Aanya Patel"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E8DDD7] focus:border-[#542F3B] focus:outline-none text-sm text-[#252225] placeholder:text-[#252225]/35 transition-colors min-h-[46px]"
              />
              <User className="absolute right-3.5 top-3 w-4 h-4 text-[#C98F9D] pointer-events-none" />
            </div>
          </div>

          {/* Service Selection with real prices */}
          <div>
            <label className="block text-xs uppercase tracking-[0.14em] text-[#252225]/80 font-semibold mb-1">
              Select Service or Offer *
            </label>
            <div className="relative">
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E8DDD7] focus:border-[#542F3B] focus:outline-none text-xs sm:text-sm text-[#252225] transition-colors appearance-none cursor-pointer min-h-[46px]"
              >
                <optgroup label="Hair Care Offers">
                  {OFFICIAL_OFFERS.filter((s) => s.category === 'hair').map((s) => (
                    <option key={s.id} value={`${s.name} (${s.priceDisplay})`}>
                      {s.name} — {s.priceDisplay}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Skin Care Offers">
                  {OFFICIAL_OFFERS.filter((s) => s.category === 'skin').map((s) => (
                    <option key={s.id} value={`${s.name} (${s.priceDisplay})`}>
                      {s.name} — {s.priceDisplay}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Bridal & Draping">
                  {OFFICIAL_OFFERS.filter((s) => s.category === 'bridal').map((s) => (
                    <option key={s.id} value={`${s.name} (${s.priceDisplay})`}>
                      {s.name} — {s.priceDisplay}
                    </option>
                  ))}
                </optgroup>
                <option value="Custom Hair & Beauty Consultation">
                  Custom Hair & Beauty Consultation
                </option>
              </select>
              <Scissors className="absolute right-3.5 top-3 w-4 h-4 text-[#C98F9D] pointer-events-none" />
            </div>
          </div>

          {/* Date & Time Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Preferred Date */}
            <div>
              <label className="block text-xs uppercase tracking-[0.14em] text-[#252225]/80 font-semibold mb-1">
                Preferred Date *
              </label>
              <input
                type="date"
                required
                value={formData.preferredDate}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-white border border-[#E8DDD7] focus:border-[#542F3B] focus:outline-none text-sm text-[#252225] transition-colors min-h-[46px]"
              />
            </div>

            {/* Preferred Time Slot */}
            <div>
              <label className="block text-xs uppercase tracking-[0.14em] text-[#252225]/80 font-semibold mb-1">
                Preferred Time *
              </label>
              <div className="relative">
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white border border-[#E8DDD7] focus:border-[#542F3B] focus:outline-none text-sm text-[#252225] transition-colors appearance-none cursor-pointer min-h-[46px]"
                >
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                <Clock className="absolute right-3.5 top-3 w-4 h-4 text-[#C98F9D] pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Optional Notes */}
          <div>
            <label className="block text-xs uppercase tracking-[0.14em] text-[#252225]/80 font-semibold mb-1">
              Notes (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g., haircut style, hair length, bundle inquiry"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-white border border-[#E8DDD7] focus:border-[#542F3B] focus:outline-none text-xs sm:text-sm text-[#252225] placeholder:text-[#252225]/35 transition-colors min-h-[46px]"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full py-3.5 bg-[#542F3B] hover:bg-[#3B1F28] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Send Request on WhatsApp</span>
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="w-full py-2 text-center text-xs uppercase tracking-[0.14em] text-[#542F3B] hover:text-[#C98F9D] transition-colors min-h-[44px] flex items-center justify-center"
            >
              Or open blank WhatsApp chat directly →
            </button>
          </div>

          <div className="text-[11px] text-[#252225]/60 text-center font-light pt-1 border-t border-[#E8DDD7]">
            🔒 Beside Iscon Temple, Jawahar Nagar, Bhavnagar • 100% ladies only
          </div>
        </form>
      </div>
    </div>
  );
};
