import { SalonOffer, GalleryItem, Benefit, BookingFormData } from '../types';

export const SALON_INFO = {
  name: 'Blossom Hair Spot',
  tagline: 'For Ladies',
  slogan: 'Pamper Yourself • Look Beautiful • Feel Confident',
  subheading: 'Beauty, styled your way.',
  microTagline: 'Hair • Beauty • Care',
  locationBadge: 'Bhavnagar, Gujarat',
  instagramHandle: '@blossom_hair_spot',
  instagramUrl: 'https://instagram.com/blossom_hair_spot',
  phoneDisplay: '+91 88494 40158',
  whatsappRaw: '918849440158',
  address: {
    landmark: 'Beside Iscon Temple',
    area: 'Jawahar Nagar',
    road: 'Sidsar Road',
    city: 'Bhavnagar',
    state: 'Gujarat',
    pincode: '364002',
    country: 'India',
    privacyNote: '100% Only For Ladies • Complete Privacy',
    googleMapsUrl: 'https://www.google.com/maps/place/BLOSSOM+HAIR+SPOT/@21.7327373,72.1449612,19z/data=!4m6!3m5!1s0x395f5b0022f022f7:0x5658eaa2dd64b2e!8m2!3d21.7327373!4d72.1449612',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=BLOSSOM+HAIR+SPOT&destination_place_id=ChIJ9yLwIgBbXzkRLrJk3aLqWFY',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d368.70545570001565!2d72.14496125225624!3d21.73273731290117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f5b0022f022f7%3A0x5658eaa2dd64b2e!2sBLOSSOM%20HAIR%20SPOT!5e1!3m2!1sen!2sin!4v1790653356004!5m2!1sen!2sin',
  },
  openingHours: [
    { days: 'All Days (Monday – Sunday)', hours: '9:00 AM – 9:00 PM' },
  ],
  notice: 'Exclusively for ladies. Friendly and experienced lady staff.',
};

export const COLOR_PALETTE = {
  dustyRose: '#C98F9D',
  deepPlum: '#542F3B',
  warmIvory: '#FAF7F4',
  softBeige: '#E8DDD7',
  charcoal: '#252225',
  mutedGold: '#B99A6B',
};

// Official salon imagery representations
export const SALON_IMAGES = {
  interior: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=85',
  exterior: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1600&q=85',
  washLounge: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85',
  stylingChair: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1400&q=85',
  tools: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85',
  bridal: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1400&q=85',
};

// EXACT OFFICIAL SALON OFFERS FROM THE BLOSSOM HAIR SPOT RATE CARD
export const OFFICIAL_OFFERS: SalonOffer[] = [
  // HAIR CARE OFFERS
  {
    id: 'hair-cut',
    category: 'hair',
    name: 'Hair Cut',
    price: 199,
    priceDisplay: '₹199/-',
    subtitle: 'Layer cut, step cut, feather cut, or classic straight trim',
    description:
      'Professional hair cut suited to your face shape and hair texture, finished with light blowdry setting.',
    includes: ['Face consultation', 'Precision shear cut', 'Blowdry finish'],
    duration: '30 mins',
    popular: true,
  },
  {
    id: 'hair-spa',
    category: 'hair',
    name: 'Hair Spa',
    price: 499,
    priceDisplay: '₹499/-',
    subtitle: 'Deep conditioning and relaxing scalp massage',
    description:
      'Nourishing cream bath massage to repair dry, frizzy hair, followed by steam and cold rinse for silky softness.',
    includes: ['Scalp cream massage', 'Steam treatment', 'Smooth hair rinse & serum'],
    duration: '45 mins',
    popular: true,
  },
  {
    id: 'global-colour',
    category: 'hair',
    name: 'Global Colour',
    price: 999,
    priceDisplay: '₹999/-',
    subtitle: 'Full hair colouring or 100% grey coverage',
    description:
      'Even, rich hair color with gentle ammonia-free shine formula tailored to your desired shade.',
    includes: ['Color selection', 'Even root-to-tip application', 'Color-lock wash'],
    duration: '90 mins',
  },
  {
    id: 'protin',
    category: 'hair',
    name: 'Protein Treatment',
    price: 1999,
    priceDisplay: '₹1999/-',
    subtitle: 'Intensive hair repair for damaged and brittle strands',
    description:
      'Deep protein infusion treatment that strengthens weak hair, stops breakage, and restores natural thickness.',
    includes: ['Protein bond mask', 'Infrared/steam penetration', 'Shine seal'],
    duration: '60 mins',
  },
  {
    id: 'botox',
    category: 'hair',
    name: 'Hair Botox',
    price: 2499,
    priceDisplay: '₹2499/-',
    subtitle: 'Anti-aging hair therapy for frizz-free glass shine',
    description:
      'Fills in broken hair fibers with essential nutrients, leaving your hair silky, shiny, and frizz-free for months.',
    includes: ['Clarifying wash', 'Botox formula infusion', 'Thermal flat-iron sealing'],
    duration: '2 hours',
    popular: true,
  },
  {
    id: 'nutri-plastia',
    category: 'hair',
    name: 'Nutri Plastia',
    price: 2999,
    priceDisplay: '₹2999/-',
    subtitle: 'Deep cellular smoothening and permanent straight look',
    description:
      'Premium hair reconstruction therapy that delivers smooth, straight, glossy hair without harsh chemicals.',
    includes: ['Hair diagnostics', 'Nutri-plastia deep coating', 'Precision straightening seal'],
    duration: '2.5 hours',
  },

  // SKIN CARE OFFERS
  {
    id: 'd-ten',
    category: 'skin',
    name: 'D-Ten (Tan Removal)',
    price: 99,
    priceDisplay: '₹99/-',
    subtitle: 'Quick face tan removal and instant brightness',
    description:
      'Gentle D-Tan pack that clears sun tanning, dead skin, and dullness, giving your face a fresh clean glow.',
    includes: ['Face cleansing', 'D-Tan fruit pack', 'Soothing rose water mist'],
    duration: '20 mins',
    popular: true,
  },
  {
    id: 'clean-up',
    category: 'skin',
    name: 'Clean Up',
    price: 199,
    priceDisplay: '₹199/-',
    subtitle: 'Pore cleansing, blackhead removal, and herbal pack',
    description:
      'Deep steam, gentle scrub, and extraction to clear dirt, excess oil, and pimple-causing impurities.',
    includes: ['Steam & scrub', 'Blackhead clearing', 'Soothing herbal face pack'],
    duration: '35 mins',
  },
  {
    id: 'waxing',
    category: 'skin',
    name: 'Waxing (H, L, U)',
    price: 299,
    priceDisplay: '₹299/-',
    subtitle: 'Hands, Full Legs, and Underarms waxing package',
    description:
      'Gentle, hygienic waxing for smooth, hair-free skin without irritation. Done with sanitized strips.',
    includes: ['Full Hands waxing', 'Full Legs waxing', 'Underarms waxing', 'Post-wax soothing gel'],
    duration: '40 mins',
    popular: true,
  },
  {
    id: 'menicure',
    category: 'skin',
    name: 'Manicure',
    price: 399,
    priceDisplay: '₹399/-',
    subtitle: 'Hand care, cuticle softening, scrub, and nail shaping',
    description:
      'Warm water soak, dead skin exfoliation, relaxing hand massage, and neat nail shaping with polish.',
    includes: ['Herbal hand soak', 'Dead skin scrub', 'Hand massage & nail paint'],
    duration: '35 mins',
  },
  {
    id: 'facial',
    category: 'skin',
    name: 'Facial',
    price: 499,
    priceDisplay: '₹499/-',
    subtitle: 'Complete skin rejuvenation, face massage, and glow mask',
    description:
      'Multi-step glowing facial with deep cleansing, steam, 15-minute relaxing face & neck massage, and radiance mask.',
    includes: ['Deep cleansing & scrub', 'Relaxing face massage', 'Brightening glow pack'],
    duration: '50 mins',
    popular: true,
  },
  {
    id: 'pedicure',
    category: 'skin',
    name: 'Pedicure',
    price: 499,
    priceDisplay: '₹499/-',
    subtitle: 'Foot spa, cracked heel scrub, and acupressure massage',
    description:
      'Pampering foot bath with essential oils, heel buffing, relaxing foot massage to relieve tiredness, and nail polish.',
    includes: ['Warm foot soak', 'Heel filing & scrub', 'Calf & foot massage', 'Nail shaping'],
    duration: '45 mins',
  },

  // BRIDAL & OCCASIONS
  {
    id: 'saree-draping',
    category: 'bridal',
    name: 'Saree & Dupatta Draping',
    price: 299,
    priceDisplay: '₹299/-',
    subtitle: 'Neat pleating for Gujarati Seedha Pallu, Ulta Pallu, or Lehenga',
    description:
      'Expert draping with secure pinning so your saree and heavy bridal dupatta stay in place comfortably.',
    includes: ['Crisp pleat setting', 'Secure shoulder & waist pinning', 'Comfort check'],
    duration: '25 mins',
  },
  {
    id: 'bridal-makeover',
    category: 'bridal',
    name: 'Bridal Hair & Makeup Package',
    price: 4999,
    priceDisplay: 'From ₹4999/-',
    subtitle: 'Complete bridal look with hair bun, flowers, and HD makeup',
    description:
      'Long-lasting bridal makeover for your wedding day or reception with jewelry setting and floral hair styling.',
    includes: ['HD Bridal Makeup', 'Floral hair bun / curls', 'Jewelry & Dupatta setting'],
    duration: '2.5 hours',
  },
];

export const BLOSSOM_BENEFITS: Benefit[] = [
  {
    number: '01',
    title: 'Only for Ladies',
    subtitle: '100% Private & Peaceful',
    description:
      'Blossom Hair Spot is strictly for ladies with female beauticians. You can relax freely in a comfortable, private environment.',
  },
  {
    number: '02',
    title: 'Best Prices in Bhavnagar',
    subtitle: 'Real Offers From ₹99',
    description:
      'High-quality salon services at simple, honest prices with zero hidden charges. What you see is what you pay.',
  },
  {
    number: '03',
    title: 'Clean & Hygienic',
    subtitle: 'Sanitized Tools Every Time',
    description:
      'We use clean disposable items, sanitized scissors and combs, and original branded beauty products to protect your hair and skin.',
  },
  {
    number: '04',
    title: 'Friendly & Patient Care',
    subtitle: 'We Style It Your Way',
    description:
      'No rushing. Our stylists listen carefully to what you want so you leave with a smile and complete confidence.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Salon Front Entrance',
    category: 'exterior',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'landscape',
    caption: 'Clean glass entrance with 3D black Blossom Hair Spot signage and wooden flower planters.',
    highlight: 'Official Storefront',
  },
  {
    id: 'g-2',
    title: 'Dusty Rose Styling Chairs & Arched Mirrors',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    caption: 'Soft pink swivel chairs, backlit arched mirrors, and white vanities with gold handles.',
    highlight: 'Interior Sanctuary',
  },
  {
    id: 'g-3',
    title: 'Circular Product Display Shelf',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'square',
    caption: 'Custom circular pink wall shelf with warm LED glow displaying genuine hair care bottles.',
    highlight: 'Salon Details',
  },
  {
    id: 'g-4',
    title: 'Hair Spa & Wash Area',
    category: 'interior',
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'landscape',
    caption: 'Comfortable wash chairs for deep conditioning hair spa and scalp massage.',
    highlight: 'Hair Spa Lounge',
  },
  {
    id: 'g-5',
    title: 'Hair Cut & Blowdry Styling',
    category: 'styling',
    imageUrl: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    caption: 'Layer cut and blowdry styling starting at only ₹199/-.',
    highlight: 'Hair Cut ₹199',
  },
  {
    id: 'g-6',
    title: 'Bridal Hair & Dupatta Draping',
    category: 'styling',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85',
    aspectRatio: 'portrait',
    caption: 'Traditional bridal hair art, fresh floral bun, and secure dupatta setting.',
    highlight: 'Bridal Elegance',
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: 'insta-1',
    imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
    caption: 'Our dusty rose pink salon chairs and warm arched mirrors. Visit us in Bhavnagar! ✨ @blossom_hair_spot',
    likes: '342',
  },
  {
    id: 'insta-2',
    imageUrl: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=600&q=80',
    caption: 'Hair Cut offer only ₹199/- and Hair Spa at ₹499/-! Book your slot today. 🌸',
    likes: '419',
  },
  {
    id: 'insta-3',
    imageUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80',
    caption: 'Bridal and party hair styling. Beautiful floral buns and secure saree draping. 🕊️',
    likes: '512',
  },
  {
    id: 'insta-4',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    caption: 'Sanitized tools, clean environment, and gentle lady beauticians in Bhavnagar.',
    likes: '228',
  },
  {
    id: 'insta-5',
    imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80',
    caption: 'D-Ten tan removal for only ₹99/- and Glowing Facial at ₹499/-. Feel refreshed! 💆‍♀️',
    likes: '380',
  },
  {
    id: 'insta-6',
    imageUrl: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=600&q=80',
    caption: 'Beside Iscon Temple, Jawahar Nagar, Bhavnagar. 100% only for ladies! Welcome.',
    likes: '488',
  },
];

export function formatStraightDate(dateStr?: string): string {
  if (!dateStr) return 'Next Available Date';
  // If HTML date input format YYYY-MM-DD, convert to straight DD/MM/YYYY
  const match = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (match) {
    const [, year, month, day] = match;
    return `${day}/${month}/${year}`;
  }
  return dateStr;
}

export function formatWhatsAppMessageText(data: Partial<BookingFormData> = {}): string {
  // 1. If it's specifically a location / map enquiry:
  if (data.notes && data.notes.toLowerCase().includes('location')) {
    return [
      `🌸 *BLOSSOM HAIR SPOT – FOR LADIES* 🌸`,
      `📍 _Beside Iscon Temple, Jawahar Nagar, Bhavnagar_`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `Hello Blossom Hair Spot Team! 👋✨`,
      ``,
      `I am planning to visit your salon and would love to get your exact Google Maps location & landmark directions.`,
      ``,
      `📍 *Request:* Live WhatsApp Location Pin & Directions`,
      `⏰ *Salon Hours:* 9:00 AM – 9:00 PM (Open All 7 Days)`,
      `🎀 *Branch:* Beside Iscon Temple, Sidsar Road, Bhavnagar`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Could you please share your live WhatsApp location pin? Thank you so much! 💕`,
    ].join('\n');
  }

  // 2. If it's a general salon inquiry (empty form or general chat):
  if (!data.fullName && (!data.service || data.service === 'General Inquiry' || data.service === 'Salon Appointment')) {
    return [
      `✨ *BLOSSOM HAIR SPOT – FOR LADIES* ✨`,
      `🌸 _Luxury Ladies Hair & Beauty Studio • Bhavnagar_ 🌸`,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      ``,
      `Hello Blossom Team! 👋`,
      ``,
      `I would love to book a salon appointment at your Bhavnagar branch:`,
      ``,
      `✨ *Hot Deals Today:* Hair Cut ₹199 | Hair Spa ₹499 | D-Ten ₹99`,
      `⏰ *Salon Timings:* 9:00 AM – 9:00 PM (All 7 Days)`,
      `📍 *Location:* Beside Iscon Temple, Jawahar Nagar, Bhavnagar`,
      `🔒 *Privacy:* 100% Exclusively For Ladies • Lady Staff Only`,
      ``,
      `━━━━━━━━━━━━━━━━━━━━━━━━━`,
      `Could you please share today's open slots and rate card details? Thank you! 💕`,
    ].join('\n');
  }

  // 3. Detailed Appointment Booking Request:
  const clientName = data.fullName?.trim() || 'A valued client';
  const serviceName = data.service?.trim() || 'Hair & Beauty Care';
  const priceDisplay = data.totalPrice ? ` (Est. ₹${data.totalPrice}/-)` : '';
  const dateStr = formatStraightDate(data.preferredDate);
  const timeStr = data.preferredTime ? data.preferredTime : 'Next Available Time';

  const lines = [
    `✨ *APPOINTMENT BOOKING REQUEST* ✨`,
    `🌸 *BLOSSOM HAIR SPOT – FOR LADIES* 🌸`,
    `📍 _Beside Iscon Temple, Jawahar Nagar, Bhavnagar_`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `Hello Blossom Team! 👋`,
    `I would like to book an appointment with your stylists:`,
    ``,
    `👤 *Client Name:* ${clientName}`,
    `💇‍♀️ *Service / Package:* ${serviceName}${priceDisplay}`,
    `🗓️ *Preferred Date:* ${dateStr}`,
    `⏰ *Preferred Time:* ${timeStr}`,
    `📍 *Salon Branch:* Beside Iscon Temple, Bhavnagar`,
  ];

  if (data.phone && data.phone.trim()) {
    lines.push(`📞 *Phone Number:* ${data.phone.trim()}`);
  }

  if (data.notes && data.notes.trim()) {
    lines.push(``);
    lines.push(`💬 *Special Request / Note:*`);
    lines.push(`_${data.notes.trim()}_`);
  }

  lines.push(``);
  lines.push(`━━━━━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`✨ *Salon Hours:* 9:00 AM – 9:00 PM (All 7 Days)`);
  lines.push(`🔒 *100% Only For Ladies • Complete Privacy*`);
  lines.push(``);
  lines.push(`Please confirm if this slot is available or suggest the nearest open time. Thank you so much! 💕`);

  return lines.join('\n');
}

export function createWhatsAppBookingUrl(data: Partial<BookingFormData> = {}): string {
  const message = formatWhatsAppMessageText(data);
  return `https://wa.me/${SALON_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}
