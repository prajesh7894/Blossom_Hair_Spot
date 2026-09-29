import React, { useState } from 'react';
import { Camera, Eye, Sparkles, Check, MapPin, Maximize2, X } from 'lucide-react';
import { SALON_IMAGES } from '../data/salonData';

export const OfficialSalonTour: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'interior' | 'exterior' | 'wash'>('interior');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const tabs = [
    {
      id: 'interior' as const,
      title: 'Styling Sanctuary',
      badge: 'Main Studio',
      description: 'Dusty rose swivel chairs, white vanities, and 3 arched mirrors glowing with warm ambient LED light.',
      image: SALON_IMAGES.interior,
    },
    {
      id: 'exterior' as const,
      title: 'Storefront Entrance',
      badge: 'Official Facade',
      description: '3D black BLOSSOM HAIR SPOT signage with FOR LADIES plaque, glass doors, and wooden flower displays.',
      image: SALON_IMAGES.exterior,
    },
    {
      id: 'wash' as const,
      title: 'Hair Spa & Wash Lounge',
      badge: 'Relaxation Area',
      description: 'Comfortable wash stations for our signature ₹499/- Hair Spa and scalp massage therapy.',
      image: SALON_IMAGES.washLounge,
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="py-16 sm:py-24 bg-[#E8DDD7]/20 border-b border-[#E8DDD7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#542F3B]/10 text-[#542F3B] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
            <Camera className="w-3.5 h-3.5 text-[#C98F9D]" />
            <span>Real Salon Photographs</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252225] font-light leading-tight mb-2">
            Our Bhavnagar Salon Space
          </h2>

          <p className="text-xs sm:text-sm text-[#252225]/75 font-light">
            Designed exclusively for ladies with dusty rose styling chairs, warm ivory walls, and arched backlit mirrors.
          </p>
        </div>

        {/* Tab Controls (Smoothly swipeable on mobile without cutting off) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-4 mb-8 overflow-x-auto pb-2 px-2 no-scrollbar touch-pan-x">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2.5 text-xs uppercase tracking-[0.16em] transition-all border whitespace-nowrap min-h-[44px] flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-[#542F3B] text-white border-[#542F3B] shadow-sm font-semibold'
                  : 'bg-white text-[#252225]/70 border-[#E8DDD7] hover:border-[#542F3B]'
              }`}
            >
              <span>{tab.title}</span>
              <span className={`text-[10px] px-1.5 py-0.5 ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-[#E8DDD7]/50 text-[#542F3B]'}`}>
                {tab.badge}
              </span>
            </button>
          ))}
        </div>

        {/* Feature Display Card */}
        <div className="bg-white border border-[#E8DDD7] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Main Visual */}
          <div className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto min-h-[320px] sm:min-h-[440px] overflow-hidden bg-[#252225] group cursor-pointer"
               onClick={() => setLightboxOpen(true)}>
            <img
              src={currentTab.image}
              alt={currentTab.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#252225]/70 via-transparent to-transparent pointer-events-none" />

            {/* Click to expand button */}
            <div className="absolute top-4 right-4 bg-white/90 text-[#252225] p-2.5 shadow-md transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Bottom caption overlay */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C98F9D] font-semibold block mb-0.5">
                {currentTab.badge}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#FAF7F4] font-medium">
                {currentTab.title}
              </h3>
            </div>
          </div>

          {/* Details & Highlights */}
          <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF7F4]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[1px] bg-[#C98F9D]" />
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#542F3B] font-bold">
                  Bhavnagar Salon Details
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#252225] font-semibold mb-3">
                {currentTab.title}
              </h3>

              <p className="text-sm text-[#252225]/80 font-light leading-relaxed mb-6">
                {currentTab.description}
              </p>

              {/* Architectural features list */}
              <div className="space-y-3 pt-4 border-t border-[#E8DDD7]">
                <div className="flex items-center gap-2.5 text-xs text-[#252225]/85">
                  <span className="w-2 h-2 rounded-full bg-[#C98F9D]" />
                  <span>Dusty rose pink salon styling chairs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#252225]/85">
                  <span className="w-2 h-2 rounded-full bg-[#C98F9D]" />
                  <span>3 Large arched backlit mirrors with warm LED light</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#252225]/85">
                  <span className="w-2 h-2 rounded-full bg-[#C98F9D]" />
                  <span>Circular pink product shelf with warm glow</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#252225]/85">
                  <span className="w-2 h-2 rounded-full bg-[#C98F9D]" />
                  <span>Clean ivory tiled glossy flooring</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#252225]/85">
                  <span className="w-2 h-2 rounded-full bg-[#C98F9D]" />
                  <span>100% private ladies interior with AC comfort</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E8DDD7] mt-6 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-[#542F3B] font-medium">
                <MapPin className="w-4 h-4 text-[#C98F9D]" />
                <span>Beside Iscon Temple, Bhavnagar</span>
              </div>

              <button
                onClick={() => setLightboxOpen(true)}
                className="text-xs uppercase tracking-wider text-[#542F3B] hover:text-[#C98F9D] font-bold underline underline-offset-4"
              >
                Full Photo
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-3 right-3 z-10 p-2 bg-white text-black hover:bg-[#542F3B] hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={currentTab.image}
              alt={currentTab.title}
              className="max-h-[85vh] w-auto mx-auto object-contain"
            />
            <div className="bg-[#FAF7F4] p-3 text-center text-xs text-[#252225] font-medium">
              Blossom Hair Spot – {currentTab.title} • Beside Iscon Temple, Jawahar Nagar, Bhavnagar
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
