import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OfficialOffersSection } from './components/OfficialOffersSection';
import { OfficialSalonTour } from './components/OfficialSalonTour';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { BrandSplitSection } from './components/BrandSplitSection';
import { GallerySection } from './components/GallerySection';
import { ExperienceSection } from './components/ExperienceSection';
import { InstagramSection } from './components/InstagramSection';
import { AppointmentCta } from './components/AppointmentCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setBookingService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setBookingService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F4] text-[#252225] selection:bg-[#C98F9D] selection:text-white font-sans">
      {/* Sticky Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main>
        {/* Full-screen cinematic hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Official Offers Section (Rate Card with exact prices: ₹99, ₹199, ₹499, etc.) */}
        <OfficialOffersSection onOpenBooking={handleOpenBooking} />

        {/* Real Salon Space & Tour (Official Facade & Interior with Arched Backlit Mirrors) */}
        <OfficialSalonTour />

        {/* Introduction: A Space Made For Your Glow */}
        <IntroSection />

        {/* Full Services & Rates Menu */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Split-screen brand statement: Your Beauty. Your Moment. */}
        <BrandSplitSection onOpenBooking={() => handleOpenBooking()} />

        {/* Masonry gallery with lightbox */}
        <GallerySection onOpenBooking={handleOpenBooking} />

        {/* The Blossom Experience: 4 Simple Benefits */}
        <ExperienceSection />

        {/* Instagram Grid: 6-image layout linking to @blossom_hair_spot */}
        <InstagramSection />

        {/* Large Appointment CTA: Ready For Your Next Look? */}
        <AppointmentCta onOpenBooking={() => handleOpenBooking()} />

        {/* Contact section: Beside Iscon Temple, Bhavnagar, Hours, Google Maps */}
        <ContactSection />
      </main>

      {/* Minimal elegant footer */}
      <Footer />

      {/* Interactive WhatsApp Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={bookingService}
      />

      {/* Persistent Mobile Bottom Booking Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
