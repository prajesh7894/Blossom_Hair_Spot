import React from 'react';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink, ShieldCheck, Compass, Car } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF7F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-6 h-[1px] bg-[#C98F9D]" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#542F3B] font-bold">
              Find Our Salon
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#252225] font-light leading-tight mb-2">
            Contact & <span className="italic text-[#542F3B]">Location</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#252225]/75 font-light leading-relaxed">
            Conveniently located beside Iscon Temple in Bhavnagar with easy parking and complete privacy for ladies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Salon Details */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Block */}
            <div className="p-5 sm:p-6 bg-[#FAF7F4] border border-[#E8DDD7] shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#E8DDD7]/40 border border-[#E8DDD7] text-[#542F3B] shrink-0">
                  <MapPin className="w-5 h-5 text-[#C98F9D]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C98F9D] block mb-0.5 font-bold">
                    Salon Address
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#252225] font-semibold mb-1">
                    {SALON_INFO.name}
                  </h3>
                  <p className="text-xs text-[#542F3B] mb-2 font-medium">
                    {SALON_INFO.address.privacyNote}
                  </p>
                  <p className="text-xs sm:text-sm text-[#252225]/85 font-light leading-relaxed">
                    {SALON_INFO.address.landmark} <br />
                    {SALON_INFO.address.road}, {SALON_INFO.address.area} <br />
                    {SALON_INFO.address.city} – {SALON_INFO.address.pincode} <br />
                    {SALON_INFO.address.state}, {SALON_INFO.address.country}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#E8DDD7] flex flex-wrap gap-3 text-xs text-[#252225]/70">
                    <span className="flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-[#542F3B]" />
                      Beside ISKCON Mandir
                    </span>
                    <span className="flex items-center gap-1">
                      <Car className="w-3.5 h-3.5 text-[#542F3B]" />
                      Easy Parking Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp Block */}
            <div className="p-5 sm:p-6 bg-[#FAF7F4] border border-[#E8DDD7] shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#E8DDD7]/40 border border-[#E8DDD7] text-[#542F3B] shrink-0">
                  <Phone className="w-5 h-5 text-[#C98F9D]" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C98F9D] block mb-0.5 font-bold">
                    Phone & WhatsApp
                  </span>
                  <p className="font-serif text-xl text-[#252225] font-semibold mb-1">
                    {SALON_INFO.phoneDisplay}
                  </p>
                  <p className="text-xs text-[#252225]/70 font-light mb-3">
                    Call or message on WhatsApp to check available slots and book your appointment.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={createWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-[#542F3B] hover:bg-[#3B1F28] text-white text-[11px] uppercase tracking-[0.16em] font-medium transition-colors min-h-[44px]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>WhatsApp Us</span>
                    </a>
                    
                    <a
                      href={`tel:${SALON_INFO.whatsappRaw}`}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 border border-[#E8DDD7] hover:border-[#542F3B] text-[#542F3B] text-[11px] uppercase tracking-[0.16em] font-medium transition-colors min-h-[44px]"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C98F9D]" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Block */}
            <div className="p-5 sm:p-6 bg-[#FAF7F4] border border-[#E8DDD7] shadow-sm">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#E8DDD7]/40 border border-[#E8DDD7] text-[#542F3B] shrink-0">
                  <Clock className="w-5 h-5 text-[#C98F9D]" />
                </div>
                <div className="flex-1">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C98F9D] block mb-0.5 font-bold">
                    Salon Timings
                  </span>
                  <div className="space-y-1.5 mt-2">
                    {SALON_INFO.openingHours.map((schedule, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs sm:text-sm border-b border-[#E8DDD7]/60 pb-1 last:border-0">
                        <span className="text-[#252225] font-medium">{schedule.days}</span>
                        <span className="text-[#542F3B] font-light">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#E8DDD7] flex items-center gap-2 text-xs text-[#542F3B] font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#C98F9D]" />
                    <span>Pure Ladies Salon • Female Staff Only</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed (Original Location: Blossom Hair Spot, Beside Iscon Temple, Bhavnagar) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F4] border border-[#E8DDD7] p-2.5 shadow-md">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-[#E8DDD7]">
                <iframe
                  title="BLOSSOM HAIR SPOT Official Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368.70545570001565!2d72.14496125225624!3d21.73273731290117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5b0022f022f7%3A0x5658eaa2dd64b2e!2sBLOSSOM%20HAIR%20SPOT!5e1!3m2!1sen!2sin!4v1790653356004!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full"
                />
                
                {/* Floating Map Marker Card */}
                <div className="absolute top-3 left-3 z-10 bg-[#FAF7F4]/98 backdrop-blur-md px-3.5 py-2.5 border border-[#E8DDD7] shadow-lg max-w-xs">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C98F9D] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#542F3B]" />
                    </span>
                    <span className="font-serif text-xs font-bold text-[#252225] uppercase tracking-wider">
                      BLOSSOM HAIR SPOT
                    </span>
                    <span className="px-1 py-0.2 bg-[#252225] text-white text-[8px] font-bold uppercase tracking-wider">
                      LADIES
                    </span>
                  </div>
                  <p className="text-[11px] text-[#542F3B] font-medium mt-1">
                    Beside Iscon Temple, Jawahar Nagar, Bhavnagar
                  </p>
                  <p className="text-[10px] text-[#252225]/60 mt-0.5">
                    Rated 5.0 ★ • Exclusively for Ladies
                  </p>
                </div>
              </div>

              {/* Action Buttons Below Map */}
              <div className="p-3 sm:p-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 border-t border-[#E8DDD7] mt-2">
                <a
                  href={SALON_INFO.address.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#542F3B] hover:bg-[#3B1F28] text-white text-xs uppercase tracking-[0.14em] font-semibold transition-colors shadow-xs min-h-[44px]"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C98F9D]" />
                  <span>Get Directions on Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>

                <a
                  href={createWhatsAppBookingUrl({ notes: 'Please send live Google map location in Bhavnagar' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2.5 border border-[#542F3B]/30 hover:border-[#542F3B] text-[#542F3B] text-xs uppercase tracking-[0.14em] font-semibold transition-colors min-h-[44px]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Request Live Location on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
