import React from 'react';
import { Sparkles, Heart, ShieldCheck, Tag } from 'lucide-react';
import { BLOSSOM_BENEFITS } from '../data/salonData';

export const ExperienceSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <ShieldCheck className="w-5 h-5 text-[#C98F9D]" />;
      case 1:
        return <Tag className="w-5 h-5 text-[#C98F9D]" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-[#C98F9D]" />;
      default:
        return <Heart className="w-5 h-5 text-[#C98F9D]" />;
    }
  };

  return (
    <section id="experience" className="py-16 sm:py-24 bg-[#FAF7F4] relative border-b border-[#E8DDD7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C98F9D]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#542F3B] font-semibold">
              The Blossom Experience
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252225] font-light leading-tight mb-3">
            Why Bhavnagar Ladies Trust Us
          </h2>

          <p className="text-xs sm:text-sm text-[#252225]/80 font-light leading-relaxed">
            We focus on four simple things: your comfort, honest prices, hygiene, and patient styling.
          </p>
        </div>

        {/* Four Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {BLOSSOM_BENEFITS.map((benefit, idx) => (
            <div
              key={benefit.number}
              className="p-5 sm:p-6 bg-[#FAF7F4] border border-[#E8DDD7] flex flex-col justify-between transition-all duration-300 hover:border-[#C98F9D] hover:shadow-md group"
            >
              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-5 pb-2.5 border-b border-[#E8DDD7]/70">
                  <span className="font-serif text-xl text-[#C98F9D] font-bold">
                    {benefit.number}
                  </span>
                  <div className="p-2 bg-[#FAF7F4] border border-[#E8DDD7] group-hover:border-[#C98F9D] transition-colors">
                    {getIcon(idx)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl text-[#252225] font-semibold mb-1 group-hover:text-[#542F3B] transition-colors">
                  {benefit.title}
                </h3>

                {/* Subtitle */}
                <span className="text-xs text-[#542F3B] font-medium block mb-2">
                  {benefit.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#252225]/75 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-3 border-t border-[#E8DDD7]/60 flex items-center justify-between text-[10px] text-[#252225]/50 uppercase tracking-wider">
                <span>Bhavnagar</span>
                <span className="text-[#C98F9D]">✦</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
