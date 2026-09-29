import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MessageCircle, MapPin, ChevronRight } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Clean scroll spy to detect active section
  useEffect(() => {
    const sectionIds = ['home', 'offers', 'services', 'gallery', 'about', 'contact'];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 140;
      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Clean, single-word labels that NEVER wrap to 2 lines
  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'offers', label: 'Offers', href: '#offers', badge: '₹99+' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'gallery', label: 'Gallery', href: '#gallery' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#FAF7F4]/98 backdrop-blur-md shadow-sm border-b border-[#E8DDD7]'
          : 'bg-gradient-to-b from-[#252225]/85 via-[#252225]/40 to-transparent'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Fixed height flex container for perfect vertical alignment */}
        <div className="h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* 1. Left Brand Column */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col focus:outline-none shrink-0"
          >
            <div className="flex items-center gap-2">
              <span
                className={`font-serif text-lg sm:text-2xl tracking-[0.14em] uppercase font-bold transition-colors ${
                  isScrolled || mobileMenuOpen ? 'text-[#252225]' : 'text-[#FAF7F4]'
                }`}
              >
                BLOSSOM HAIR SPOT
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 bg-[#252225] text-white text-[9px] uppercase tracking-widest font-bold">
                FOR LADIES
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-[10px] tracking-[0.18em] uppercase font-medium mt-0.5">
              <span className="sm:hidden text-[#C98F9D] font-bold">For Ladies</span>
              <span className="sm:hidden opacity-30">•</span>
              <span className={`flex items-center gap-0.5 ${isScrolled || mobileMenuOpen ? 'text-[#542F3B]' : 'text-[#E8DDD7]'}`}>
                <MapPin className="w-2.5 h-2.5 text-[#C98F9D]" />
                Bhavnagar
              </span>
              <span className="hidden md:inline opacity-30">•</span>
              <span className={`hidden md:inline ${isScrolled || mobileMenuOpen ? 'text-[#252225]/60' : 'text-[#FAF7F4]/80'}`}>
                Beside Iscon Temple
              </span>
            </div>
          </a>

          {/* 2. Center Navigation Links (Clean, One-Line, Perfect Diameters & Padding) */}
          <div className="hidden lg:flex items-center justify-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative h-10 px-3.5 flex items-center justify-center whitespace-nowrap text-xs uppercase tracking-[0.18em] font-medium transition-colors ${
                    isActive
                      ? isScrolled
                        ? 'text-[#542F3B] font-bold'
                        : 'text-[#C98F9D] font-bold'
                      : isScrolled
                      ? 'text-[#252225]/75 hover:text-[#542F3B]'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>

                  {/* Clean micro-badge for offers */}
                  {link.badge && (
                    <span
                      className={`ml-1.5 px-1.5 py-0.5 text-[9px] font-bold tracking-wider uppercase leading-none ${
                        isScrolled
                          ? 'bg-[#542F3B] text-white'
                          : 'bg-[#C98F9D] text-[#252225]'
                      }`}
                    >
                      {link.badge}
                    </span>
                  )}

                  {/* Sleek, minimal active indicator dot or bar */}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#C98F9D] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* 3. Right Action Column (Clean & Perfectly Aligned) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Direct Phone Call */}
            <a
              href={`tel:${SALON_INFO.whatsappRaw}`}
              className={`h-10 px-3.5 flex items-center gap-2 text-xs tracking-wider font-semibold border transition-all ${
                isScrolled
                  ? 'border-[#E8DDD7] text-[#542F3B] hover:border-[#542F3B] hover:bg-[#FAF7F4]'
                  : 'border-white/20 text-[#FAF7F4] hover:border-white hover:bg-white/10'
              }`}
              title="Call Blossom Hair Spot"
            >
              <Phone className="w-3.5 h-3.5 text-[#C98F9D]" />
              <span className="whitespace-nowrap">{SALON_INFO.phoneDisplay}</span>
            </a>

            {/* Book Appointment CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="h-10 px-5 bg-[#542F3B] hover:bg-[#3B1F28] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 whitespace-nowrap active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C98F9D]" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* 4. Mobile Quick Action Bar & Hamburger Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick Call */}
            <a
              href={`tel:${SALON_INFO.whatsappRaw}`}
              className={`h-9 w-9 flex items-center justify-center border transition-colors ${
                isScrolled || mobileMenuOpen
                  ? 'border-[#E8DDD7] text-[#542F3B] bg-white'
                  : 'border-white/25 text-white bg-white/10'
              }`}
              aria-label="Call +91 88494 40158"
            >
              <Phone className="w-3.5 h-3.5 text-[#C98F9D]" />
            </a>

            {/* Quick Book */}
            <button
              onClick={() => onOpenBooking()}
              className="h-9 px-3 bg-[#542F3B] text-white text-[11px] uppercase tracking-wider font-semibold shadow-xs flex items-center gap-1.5"
            >
              <Calendar className="w-3 h-3 text-[#C98F9D]" />
              <span>Book</span>
            </button>

            {/* Clean Animated Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`h-9 w-9 flex flex-col items-center justify-center gap-1 transition-colors focus:outline-none ${
                isScrolled || mobileMenuOpen ? 'text-[#252225]' : 'text-white'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              <span
                className={`w-5 h-0.5 bg-current transition-all duration-200 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current transition-all duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`w-5 h-0.5 bg-current transition-all duration-200 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-Down Menu (Clean, Linear & Perfectly Aligned) */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 bg-[#FAF7F4] z-40 flex flex-col justify-between p-5 overflow-y-auto transition-all duration-300 ease-in-out border-t border-[#E8DDD7] ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        {/* Navigation items */}
        <div className="flex flex-col space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`h-12 px-4 flex items-center justify-between text-base font-serif tracking-wide transition-colors ${
                  isActive
                    ? 'bg-[#542F3B]/10 text-[#542F3B] font-bold'
                    : 'text-[#252225] hover:bg-[#E8DDD7]/40'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 bg-[#C98F9D] text-[#252225] text-[9px] font-bold tracking-wider uppercase">
                      {link.badge}
                    </span>
                  )}
                </div>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#542F3B]' : 'text-[#252225]/30'}`} />
              </a>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 border-t border-[#E8DDD7] flex flex-col gap-2.5">
          <a
            href={`tel:${SALON_INFO.whatsappRaw}`}
            className="h-12 bg-white border border-[#542F3B] text-[#542F3B] text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-center gap-2 shadow-xs"
          >
            <Phone className="w-4 h-4 text-[#C98F9D]" />
            <span>Call: {SALON_INFO.phoneDisplay}</span>
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="h-12 bg-[#542F3B] text-white text-xs uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 shadow-md"
          >
            <Calendar className="w-4 h-4 text-[#C98F9D]" />
            <span>Book Appointment (WhatsApp)</span>
          </button>

          <a
            href={createWhatsAppBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] text-xs uppercase tracking-[0.14em] font-semibold flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>

          <div className="text-[11px] text-center text-[#252225]/70 pt-1 font-light">
            Beside Iscon Temple, Jawahar Nagar, Bhavnagar • 100% Ladies Only
          </div>
        </div>
      </div>
    </nav>
  );
};
