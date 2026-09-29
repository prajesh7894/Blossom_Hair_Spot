export type ServiceCategory = 'hair' | 'skin' | 'bridal';

export interface SalonOffer {
  id: string;
  category: ServiceCategory;
  name: string;
  price: number;
  priceDisplay: string;
  subtitle: string;
  description: string;
  includes: string[];
  duration?: string;
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'exterior' | 'offers' | 'styling';
  imageUrl: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  caption: string;
  highlight?: string;
}

export interface Benefit {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  selectedOffers?: string[];
  totalPrice?: number;
}
