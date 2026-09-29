import React, { useState } from 'react';
import { Sparkles, Calendar, MessageCircle, ArrowRight, Check, Tag } from 'lucide-react';
import { OFFICIAL_OFFERS, createWhatsAppBookingUrl } from '../data/salonData';
import { ServiceCategory } from '../types';

interface ServicesSectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | ServiceCategory>('all');

  const filteredOffers =
    activeTab === 'all'
      ? OFFICIAL_OFFERS
      : OFFICIAL_OFFERS.filter((s) => s.category === activeTab);

  const categories: { id: 'all' | ServiceCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Services', count: OFFICIAL_OFFERS.length },
    { id: 'hair', label: 'Hair Care', count: OFFICIAL_OFFERS.filter((s) => s.category === 'hair').length },
    { id: 'skin', label: 'Skin Care', count: OFFICIAL_OFFERS.filter((s) => s.category === 'skin').length },
    { id: 'bridal', label: 'Bridal & Draping', count: OFFICIAL_OFFERS.filter((s) => s.category === 'bridal').length },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#E8DDD7]/25 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-6 h-[1px] bg-[#C98F9D]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#542F3B] font-semibold">
                Complete Price Menu
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252225] font-light leading-tight">
              Our Services & Rates <br />
              <span className="italic text-[#542F3B]">Exclusively for Ladies</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-xs sm:text-sm text-[#252225]/80 font-light leading-relaxed">
              Transparent rates with no hidden costs. Book any individual service or combine multiple services on WhatsApp.
            </p>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center justify-start sm:justify-center border-b border-[#E8DDD7] mb-8 overflow-x-auto pb-1 px-2 gap-2 sm:gap-6 no-scrollbar touch-pan-x">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`pb-3 px-3 text-xs uppercase tracking-[0.16em] transition-all relative whitespace-nowrap min-h-[44px] flex items-center ${
                activeTab === cat.id
                  ? 'text-[#542F3B] font-bold'
                  : 'text-[#252225]/60 hover:text-[#252225] font-normal'
              }`}
            >
              <span>{cat.label}</span>
              <span className="ml-1 text-[10px] text-[#C98F9D]">({cat.count})</span>
              {activeTab === cat.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#542F3B]" />
              )}
            </button>
          ))}
        </div>

        {/* Editorial Cards Grid with Real Prices */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredOffers.map((service) => (
            <div
              key={service.id}
              className="bg-[#FAF7F4] border border-[#E8DDD7] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#C98F9D] hover:shadow-md group"
            >
              <div>
                {/* Category & Price badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C98F9D] font-bold">
                    {service.category === 'hair' ? 'Hair Care' : service.category === 'skin' ? 'Skin Care' : 'Bridal'}
                  </span>
                  <span className="px-2.5 py-1 bg-[#542F3B] text-white font-serif text-sm font-bold shadow-xs">
                    {service.priceDisplay}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="font-serif text-xl sm:text-2xl text-[#252225] font-semibold mb-1 group-hover:text-[#542F3B] transition-colors">
                  {service.name}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-[#542F3B] italic font-normal mb-3">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#252225]/80 font-light leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* What's Included */}
                <div className="mb-4 pt-3 border-t border-[#E8DDD7]/70">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#252225]/70 block mb-2 font-semibold">
                    Includes:
                  </span>
                  <ul className="space-y-1.5">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#252225]/80 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C98F9D] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Direct Booking Actions */}
              <div className="pt-4 border-t border-[#E8DDD7] flex items-center gap-2">
                <button
                  onClick={() => onOpenBooking(`${service.name} (${service.priceDisplay})`)}
                  className="flex-1 py-2.5 px-3 bg-[#542F3B] hover:bg-[#3B1F28] text-white text-[11px] uppercase tracking-[0.16em] font-semibold transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#C98F9D]" />
                  <span>Book for {service.priceDisplay}</span>
                </button>

                <a
                  href={createWhatsAppBookingUrl({ service: `${service.name} (${service.priceDisplay})` })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 border border-[#542F3B]/30 hover:border-[#542F3B] text-[#542F3B] hover:bg-[#542F3B] hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label={`Ask about ${service.name} on WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 group-hover:text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
