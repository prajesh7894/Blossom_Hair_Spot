import React, { useState } from 'react';
import { Maximize2, X, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, createWhatsAppBookingUrl } from '../data/salonData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'exterior' | 'styling'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'Salon Interior' },
    { id: 'exterior', label: 'Storefront Entrance' },
    { id: 'styling', label: 'Hair & Styling' },
  ] as const;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FAF7F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C98F9D]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#542F3B] font-semibold">
              Real Salon Photographs
            </span>
            <span className="w-6 h-[1px] bg-[#C98F9D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252225] font-light leading-tight mb-2">
            Gallery of <span className="italic font-normal text-[#542F3B]">Blossom Hair Spot</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#252225]/75 font-light leading-relaxed">
            Take a look at our dusty rose chairs, arched glowing mirrors, clean wash area, and client hair work in Bhavnagar.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-3 mb-8 overflow-x-auto pb-2 px-2 no-scrollbar touch-pan-x">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`text-xs uppercase tracking-[0.16em] py-2 px-3 transition-all relative whitespace-nowrap min-h-[44px] flex items-center ${
                activeFilter === f.id
                  ? 'text-[#542F3B] font-bold'
                  : 'text-[#252225]/60 hover:text-[#252225]'
              }`}
            >
              <span>{f.label}</span>
              {activeFilter === f.id && (
                <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#542F3B]" />
              )}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative bg-[#FAF7F4] border border-[#E8DDD7] overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#C98F9D] hover:shadow-md"
            >
              {/* Image Container with Zoom */}
              <div className={`overflow-hidden relative ${
                item.aspectRatio === 'portrait' ? 'aspect-[3/4]' :
                item.aspectRatio === 'square' ? 'aspect-square' : 'aspect-[4/3]'
              }`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />

                {/* Ambient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#252225]/85 via-[#3B1F28]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white" />

                {/* Subtle view icon */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="p-2 bg-[#FAF7F4]/90 text-[#252225] block shadow">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C98F9D] block mb-0.5 font-bold">
                    {item.highlight || item.category}
                  </span>
                  <h4 className="font-serif text-lg font-normal text-[#FAF7F4] mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#E8DDD7]/90 font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              {/* Caption Underneath */}
              <div className="p-3.5 flex items-center justify-between border-t border-[#E8DDD7]">
                <div>
                  <h4 className="font-serif text-sm sm:text-base text-[#252225] font-semibold group-hover:text-[#542F3B] transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#C98F9D] font-medium">
                    {item.highlight || item.category}
                  </span>
                </div>
                <span className="text-xs text-[#542F3B] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-semibold">
                  <span>View</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#252225]/90 backdrop-blur-md flex items-center justify-center p-3.5 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF7F4] border border-[#E8DDD7] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[92svh] overflow-y-auto rounded-xs"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-3 right-3 z-30 p-2 bg-[#FAF7F4]/90 text-[#252225] hover:text-[#542F3B] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shadow-xs"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="md:w-3/5 bg-[#252225] flex items-center justify-center overflow-hidden shrink-0">
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                className="w-full h-full object-cover max-h-[35vh] sm:max-h-[50vh] md:max-h-[80vh]"
              />
            </div>

            {/* Lightbox Details */}
            <div className="md:w-2/5 p-4 sm:p-6 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C98F9D] font-bold">
                    {selectedItem.highlight || selectedItem.category}
                  </span>
                  <span className="text-[#E8DDD7]">·</span>
                  <span className="text-[10px] text-[#252225]/50 uppercase tracking-wider">
                    Bhavnagar
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#252225] font-semibold mb-2">
                  {selectedItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#252225]/80 font-light leading-relaxed mb-4">
                  {selectedItem.caption}
                </p>

                <div className="p-3 bg-[#E8DDD7]/40 border border-[#E8DDD7] text-xs text-[#542F3B] leading-relaxed mb-4">
                  <span className="font-semibold block mb-0.5">Blossom Hair Spot:</span>
                  Beside Iscon Temple, Jawahar Nagar, Bhavnagar. 100% only for ladies.
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8DDD7] flex flex-col gap-2">
                <button
                  onClick={() => {
                    const itemName = selectedItem.title;
                    setSelectedItem(null);
                    onOpenBooking(`Inquiry regarding: ${itemName}`);
                  }}
                  className="w-full py-2.5 bg-[#542F3B] hover:bg-[#3B1F28] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-colors text-center min-h-[44px]"
                >
                  Book Appointment for This Look
                </button>

                <a
                  href={createWhatsAppBookingUrl({ service: `Inquiry regarding: ${selectedItem.title}` })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 border border-[#542F3B]/30 hover:border-[#542F3B] text-[#542F3B] text-xs uppercase tracking-[0.16em] font-semibold text-center flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
