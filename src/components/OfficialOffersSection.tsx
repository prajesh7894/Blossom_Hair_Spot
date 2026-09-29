import React, { useState } from 'react';
import { Scissors, Sparkles, Heart, Check, Calendar, MessageCircle, Plus, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';
import { OFFICIAL_OFFERS, createWhatsAppBookingUrl } from '../data/salonData';
import { SalonOffer } from '../types';

interface OfficialOffersSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const OfficialOffersSection: React.FC<OfficialOffersSectionProps> = ({ onOpenBooking }) => {
  const [selectedOfferIds, setSelectedOfferIds] = useState<string[]>([]);

  const hairOffers = OFFICIAL_OFFERS.filter((o) => o.category === 'hair');
  const skinOffers = OFFICIAL_OFFERS.filter((o) => o.category === 'skin');

  const toggleSelectOffer = (offerId: string) => {
    setSelectedOfferIds((prev) =>
      prev.includes(offerId) ? prev.filter((id) => id !== offerId) : [...prev, offerId]
    );
  };

  const selectedOffersList = OFFICIAL_OFFERS.filter((o) => selectedOfferIds.includes(o.id));
  const totalPrice = selectedOffersList.reduce((acc, curr) => acc + curr.price, 0);

  const handleBookSelected = () => {
    if (selectedOffersList.length === 0) {
      onOpenBooking('Special Salon Offer Package');
      return;
    }
    const names = selectedOffersList.map((o) => `${o.name} (${o.priceDisplay})`).join(' + ');
    onOpenBooking(names);
  };

  const handleDirectWhatsAppSelected = () => {
    if (selectedOffersList.length === 0) {
      window.open(createWhatsAppBookingUrl({ service: 'Salon Special Offers' }), '_blank');
      return;
    }
    const names = selectedOffersList.map((o) => `${o.name} (${o.priceDisplay})`).join(' + ');
    const url = createWhatsAppBookingUrl({
      service: names,
      totalPrice: totalPrice,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="offers" className="py-16 sm:py-24 bg-[#FAF7F4] relative border-b border-[#E8DDD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header matching the official banner: Pamper Yourself • Look Beautiful • Feel Confident */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#542F3B]/10 text-[#542F3B] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <Tag className="w-3.5 h-3.5 text-[#C98F9D]" />
            <span>Official Price List • Bhavnagar</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252225] font-light leading-tight mb-3">
            Special Salon Offers
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#542F3B] mb-3">
            “Pamper Yourself • Look Beautiful • Feel Confident”
          </p>

          <p className="text-xs sm:text-sm text-[#252225]/75 font-light leading-relaxed max-w-xl mx-auto">
            Real prices from our official salon rate card. Tap any offer to select it, or tap book to reserve your appointment on WhatsApp.
          </p>
        </div>

        {/* The Two-Column Rate Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* LEFT: HAIR CARE OFFERS (Maroon / Plum Header) */}
          <div className="bg-[#FAF7F4] border-2 border-[#542F3B]/30 shadow-md p-5 sm:p-7 relative">
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8DDD7]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#542F3B] text-white flex items-center justify-center shadow">
                  <Scissors className="w-5 h-5 text-[#C98F9D]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#542F3B]">
                    Hair Care Offers
                  </h3>
                  <span className="text-[11px] text-[#252225]/60 font-light">
                    For all hair lengths & textures
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-[#542F3B] bg-[#542F3B]/10 px-2.5 py-1">
                6 Offers
              </span>
            </div>

            {/* List of Hair Offers */}
            <div className="space-y-3">
              {hairOffers.map((offer) => {
                const isSelected = selectedOfferIds.includes(offer.id);
                return (
                  <div
                    key={offer.id}
                    onClick={() => toggleSelectOffer(offer.id)}
                    className={`p-3.5 sm:p-4 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-[#542F3B] bg-[#542F3B]/5 shadow-sm'
                        : 'border-[#E8DDD7] hover:border-[#C98F9D] bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <button
                        type="button"
                        aria-label={`Select ${offer.name}`}
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-[#542F3B] border-[#542F3B] text-white'
                            : 'border-[#252225]/30 bg-transparent'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </button>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-base sm:text-lg font-semibold text-[#252225]">
                            {offer.name}
                          </h4>
                          {offer.popular && (
                            <span className="text-[9px] uppercase tracking-wider bg-[#C98F9D] text-[#252225] font-bold px-1.5 py-0.5 rounded-xs">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#252225]/70 font-light line-clamp-1">
                          {offer.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Price Ribbon */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="px-3 py-1 bg-[#542F3B] text-white font-serif text-sm sm:text-base font-bold shadow-xs">
                        {offer.priceDisplay}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking(`${offer.name} (${offer.priceDisplay})`);
                        }}
                        className="p-2 text-[#542F3B] hover:text-[#C98F9D] hover:bg-[#FAF7F4] transition-colors"
                        title="Book this offer immediately"
                      >
                        <Calendar className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: SKIN CARE OFFERS (Dark Green / Forest Header) */}
          <div className="bg-[#FAF7F4] border-2 border-emerald-900/30 shadow-md p-5 sm:p-7 relative">
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E8DDD7]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-900 text-white flex items-center justify-center shadow">
                  <Sparkles className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider text-emerald-950">
                    Skin Care Offers
                  </h3>
                  <span className="text-[11px] text-[#252225]/60 font-light">
                    Hygienic & glowing beauty care
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-emerald-900 bg-emerald-100 px-2.5 py-1">
                6 Offers
              </span>
            </div>

            {/* List of Skin Offers */}
            <div className="space-y-3">
              {skinOffers.map((offer) => {
                const isSelected = selectedOfferIds.includes(offer.id);
                return (
                  <div
                    key={offer.id}
                    onClick={() => toggleSelectOffer(offer.id)}
                    className={`p-3.5 sm:p-4 border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-emerald-800 bg-emerald-50/60 shadow-sm'
                        : 'border-[#E8DDD7] hover:border-emerald-700 bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <button
                        type="button"
                        aria-label={`Select ${offer.name}`}
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? 'bg-emerald-900 border-emerald-900 text-white'
                            : 'border-[#252225]/30 bg-transparent'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </button>

                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif text-base sm:text-lg font-semibold text-[#252225]">
                            {offer.name}
                          </h4>
                          {offer.popular && (
                            <span className="text-[9px] uppercase tracking-wider bg-emerald-200 text-emerald-950 font-bold px-1.5 py-0.5 rounded-xs">
                              Popular
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#252225]/70 font-light line-clamp-1">
                          {offer.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Price Ribbon */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div className="px-3 py-1 bg-emerald-900 text-white font-serif text-sm sm:text-base font-bold shadow-xs">
                        {offer.priceDisplay}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking(`${offer.name} (${offer.priceDisplay})`);
                        }}
                        className="p-2 text-emerald-900 hover:text-emerald-700 hover:bg-[#FAF7F4] transition-colors"
                        title="Book this offer immediately"
                      >
                        <Calendar className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Interactive Selected Offers Summary Bar */}
        <div className="mt-8 p-5 sm:p-6 bg-white border-2 border-[#542F3B] shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="p-3 bg-[#542F3B]/10 rounded-full text-[#542F3B]">
              <CheckCircle2 className="w-6 h-6 text-[#542F3B]" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-[#252225]/70 font-medium">
                {selectedOffersList.length > 0 ? (
                  <span>
                    Selected {selectedOffersList.length} Offer{selectedOffersList.length > 1 ? 's' : ''}:
                  </span>
                ) : (
                  <span>Tap any offer above to bundle multiple services</span>
                )}
              </div>
              <div className="font-serif text-xl sm:text-2xl text-[#252225] font-bold">
                {selectedOffersList.length > 0 ? (
                  <span className="text-[#542F3B]">Total: ₹{totalPrice}/-</span>
                ) : (
                  <span>Special Offers Start From Just ₹99/-</span>
                )}
              </div>
              {selectedOffersList.length > 0 && (
                <div className="text-xs text-[#252225]/75 line-clamp-1 max-w-lg mt-0.5">
                  {selectedOffersList.map((o) => o.name).join(', ')}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleBookSelected}
              className="flex-1 sm:flex-none px-6 py-3 bg-[#542F3B] hover:bg-[#3B1F28] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-colors flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Calendar className="w-4 h-4 text-[#C98F9D]" />
              <span>Book Appointment</span>
            </button>

            <button
              onClick={handleDirectWhatsAppSelected}
              className="flex-1 sm:flex-none px-5 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-colors flex items-center justify-center gap-2 min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp Slot</span>
            </button>
          </div>
        </div>

        {/* Simple Note on Saree Draping & Bridal */}
        <div className="mt-8 text-center text-xs text-[#252225]/70 font-light flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#C98F9D]" />
          <span>Also offering Saree Draping & Dupatta setting at ₹299/- and complete Bridal Hair & Makeup packages.</span>
        </div>

      </div>
    </section>
  );
};
