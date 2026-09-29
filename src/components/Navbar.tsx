import React, { useState, useEffect } from 'react';
import { Phone, Calendar, MessageCircle, MapPin, ChevronRight, X, Sparkles, Clock, ShieldCheck } from 'lucide-react';
import { SALON_INFO, createWhatsAppBookingUrl } from '../data/salonData';

interface NavbarProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for navbar background transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when full menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

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

  // Full rich navigation links for both laptop and mobile drawer
  const navLinks = [
    {
      id: 'home',
      num: '01',
      label: 'Home',
      desc: 'Bhavnagar Luxury Ladies Sanctuary',
      href: '#home',
    },
    {
      id: 'offers',
      num: '02',
      label: 'Special Offers',
      desc: 'Hair Cut ₹199 • Hair Spa ₹499 • D-Ten ₹99',
      badge: 'Hot Deals',
      href: '#offers',
    },
    {
      id: 'services',
      num: '03',
      label: 'Services & Rate Card',
      desc: 'Hair, Skin, Botox, Draping & Bridal Packages',
      href: '#services',
    },
    {
      id: 'gallery',
      num: '04',
      label: 'Salon Gallery',
      desc: 'Interior, Hair Styling & Beauty Transformations',
      href: '#gallery',
    },
    {
      id: 'about',
      num: '05',
      label: 'About Blossom',
      desc: '100% Ladies Only Haven & Expert Lady Stylists',
      href: '#about',
    },
    {
      id: 'contact',
      num: '06',
      label: 'Contact & Location',
      desc: 'Beside Iscon Temple, Bhavnagar (9 AM – 9 PM)',
      href: '#contact',
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ─── FIXED TOP NAVBAR (CLEAN, ZERO OVERWRITE ON LAPTOP & MOBILE) ─── */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || menuOpen
            ? 'bg-[#FAF7F4]/98 backdrop-blur-md shadow-sm border-b border-[#E8DDD7]'
            : 'bg-gradient-to-b from-[#252225]/90 via-[#252225]/50 to-transparent'
        }`}
        aria-label="Main Navigation Bar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    isScrolled || menuOpen ? 'text-[#252225]' : 'text-[#FAF7F4]'
                  }`}
                >
                  BLOSSOM HAIR SPOT
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 bg-[#542F3B] text-white text-[9px] uppercase tracking-widest font-semibold rounded-xs">
                  FOR LADIES
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] tracking-[0.16em] uppercase font-medium mt-0.5">
                <span className="sm:hidden text-[#C98F9D] font-bold">For Ladies</span>
                <span className="sm:hidden opacity-30">•</span>
                <span className={`flex items-center gap-0.5 ${isScrolled || menuOpen ? 'text-[#542F3B]' : 'text-[#E8DDD7]'}`}>
                  <MapPin className="w-2.5 h-2.5 text-[#C98F9D]" />
                  Bhavnagar
                </span>
                <span className="hidden md:inline opacity-30">•</span>
                <span className={`hidden md:inline ${isScrolled || menuOpen ? 'text-[#252225]/60' : 'text-[#FAF7F4]/80'}`}>
                  Beside Iscon Temple
                </span>
              </div>
            </a>

            {/* 2. Right Actions Column (Phone + Book + Three Lines Button) */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              
              {/* Direct Phone Call Button (Laptops / Tablets) */}
              <a
                href={`tel:${SALON_INFO.whatsappRaw}`}
                className={`hidden md:flex h-10 px-3.5 items-center gap-2 text-xs tracking-wider font-semibold border transition-all ${
                  isScrolled || menuOpen
                    ? 'border-[#E8DDD7] text-[#542F3B] hover:border-[#542F3B] hover:bg-white'
                    : 'border-white/20 text-[#FAF7F4] hover:border-white hover:bg-white/10'
                }`}
                title="Call Blossom Hair Spot"
              >
                <Phone className="w-3.5 h-3.5 text-[#C98F9D] shrink-0" />
                <span className="whitespace-nowrap">{SALON_INFO.phoneDisplay}</span>
              </a>

              {/* Book Appointment CTA Button */}
              <button
                onClick={() => onOpenBooking()}
                className="h-9 sm:h-10 px-3.5 sm:px-4 bg-[#542F3B] hover:bg-[#3B1F28] text-white text-xs uppercase tracking-[0.14em] sm:tracking-[0.16em] font-semibold transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2 whitespace-nowrap active:scale-[0.98]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#C98F9D]" />
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Book</span>
              </button>

              {/* 3. The Three Lines (☰ MENU) Button for Both Laptop and Mobile */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`h-9 sm:h-10 px-3 sm:px-3.5 flex items-center gap-2 border transition-all duration-200 focus:outline-none ${
                  isScrolled || menuOpen
                    ? 'border-[#542F3B] bg-[#542F3B] text-white hover:bg-[#3B1F28]'
                    : 'border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white'
                }`}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? 'Close Menu' : 'Open Full Menu'}
              >
                {/* Clean Animated Three Lines Icon */}
                <div className="w-4 h-3.5 flex flex-col justify-between items-center">
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-200 ${
                      menuOpen ? 'rotate-45 translate-y-1.5' : ''
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-200 ${
                      menuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  />
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-200 ${
                      menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                    }`}
                  />
                </div>
                <span className="text-[11px] sm:text-xs uppercase tracking-[0.18em] font-bold">
                  {menuOpen ? 'Close' : 'Menu'}
                </span>
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* ─── FULL LUXURY MENU DRAWER (OPENS WHEN THREE LINES ARE CLICKED) ─── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#252225]/75 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-[480px] lg:w-[540px] bg-[#FAF7F4] z-50 shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out border-l border-[#E8DDD7] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Full Navigation Drawer"
      >
        {/* Drawer Header */}
        <div className="p-6 sm:p-8 border-b border-[#E8DDD7] flex items-center justify-between shrink-0 bg-white/70">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl sm:text-2xl tracking-[0.14em] uppercase font-bold text-[#252225]">
                BLOSSOM HAIR SPOT
              </span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#C98F9D] font-bold mt-0.5 flex items-center gap-1.5">
              <span>Boutique Ladies Sanctuary</span>
              <span>•</span>
              <span>Bhavnagar</span>
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 sm:p-2.5 text-[#252225]/70 hover:text-[#542F3B] hover:bg-[#E8DDD7]/40 rounded-full transition-colors flex items-center gap-1 text-xs uppercase tracking-wider font-semibold"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
            <span className="hidden sm:inline">Close</span>
          </button>
        </div>

        {/* Navigation Items List */}
        <div className="p-6 sm:p-8 flex-1 space-y-2 overflow-y-auto">
          <div className="text-[10px] uppercase tracking-[0.22em] text-[#542F3B] font-bold mb-3 flex items-center gap-2">
            <span className="w-4 h-[1px] bg-[#542F3B]" />
            <span>Navigation Directory</span>
          </div>

          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`group p-3.5 sm:p-4 rounded-xs border transition-all duration-200 flex items-center justify-between ${
                  isActive
                    ? 'border-[#542F3B] bg-[#542F3B]/5 shadow-xs'
                    : 'border-[#E8DDD7]/70 hover:border-[#542F3B] hover:bg-white'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <span className="font-mono text-xs font-semibold text-[#C98F9D] mt-0.5">
                    {link.num}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-serif text-lg sm:text-xl font-semibold text-[#252225] group-hover:text-[#542F3B] transition-colors">
                        {link.label}
                      </span>
                      {link.badge && (
                        <span className="px-2 py-0.5 bg-[#C98F9D] text-[#252225] text-[9px] uppercase tracking-wider font-bold rounded-xs flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#252225]/65 font-light mt-0.5">
                      {link.desc}
                    </p>
                  </div>
                </div>

                <ChevronRight className="w-5 h-5 text-[#C98F9D] group-hover:text-[#542F3B] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
              </a>
            );
          })}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-6 sm:p-8 bg-white border-t border-[#E8DDD7] shrink-0 space-y-3">
          {/* Quick Direct Call Card */}
          <div className="p-3.5 bg-[#FAF7F4] border border-[#E8DDD7] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#542F3B]/10 flex items-center justify-center text-[#542F3B]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#C98F9D] font-bold">Call For Appointments</div>
                <div className="text-sm font-bold text-[#252225]">{SALON_INFO.phoneDisplay}</div>
              </div>
            </div>
            <a
              href={`tel:${SALON_INFO.whatsappRaw}`}
              className="px-3 py-1.5 bg-[#542F3B] hover:bg-[#3B1F28] text-white text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Call
            </a>
          </div>

          {/* Book on WhatsApp CTA */}
          <button
            onClick={() => {
              setMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs uppercase tracking-[0.16em] font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-white" />
            <span>Book Appointment on WhatsApp</span>
          </button>

          {/* Timings & Privacy Highlights */}
          <div className="pt-2 text-center space-y-1 text-xs text-[#252225]/75 font-light">
            <div className="flex items-center justify-center gap-2 text-[11px] font-medium text-[#542F3B]">
              <Clock className="w-3.5 h-3.5 text-[#C98F9D]" />
              <span>9:00 AM – 9:00 PM (Open All 7 Days)</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-[11px] text-[#252225]/60">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C98F9D]" />
              <span>Beside Iscon Temple, Jawahar Nagar • 100% Ladies Only</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
