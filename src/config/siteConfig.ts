/**
 * Saffron & Soul - Global Site & SEO Configuration
 * Note: Replace placeholder values with verified production domain, address, and contact prior to launch.
 */

export interface SiteConfig {
  siteName: string;
  tagline: string;
  productionDomain: string; // e.g. "https://www.saffronandsoul.example.com"
  defaultOgImage: string;
  cuisineType: string[];
  dietaryRestriction: string;
}

export const siteConfig: SiteConfig = {
  siteName: "Saffron & Soul",
  tagline: "Fine Indian Vegetarian Dining",
  productionDomain: "https://saffronandsoul.example.com", // Configurable placeholder domain
  defaultOgImage: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&h=630&q=80",
  cuisineType: [
    "Indian",
    "Punjabi",
    "Rajasthani",
    "South Indian",
    "Gujarati",
    "Mughlai",
    "Street Food",
    "Indo-Chinese"
  ],
  dietaryRestriction: "VegetarianDiet"
};

export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage?: string;
  ogType?: 'website' | 'restaurant' | 'article';
}

export const pageMetadataMap: Record<string, PageMetadata> = {
  '/': {
    title: 'Saffron & Soul | Fine Indian Vegetarian Dining',
    description: 'Experience pure-vegetarian regional Indian gastronomy across 9 cuisines. Ancestral recipes, sattvic purity, and royal hospitality.',
    canonicalPath: '/',
    ogType: 'website'
  },
  '/menu': {
    title: 'Our Menu | Pure Vegetarian Regional Delicacies | Saffron & Soul',
    description: 'Explore 54+ handcrafted vegetarian dishes spanning Punjabi, Rajasthani, South Indian, Mughlai, Street Food, and artisanal sweets.',
    canonicalPath: '/menu',
    ogType: 'website'
  },
  '/about': {
    title: 'Our Story & Philosophy | Saffron & Soul',
    description: 'Discover the story of Saffron & Soul: Vedic sattvic principles, morning-ground spices, and an honest pan-Indian vegetarian table.',
    canonicalPath: '/about',
    ogType: 'website'
  },
  '/gallery': {
    title: 'Visual Gallery & Ambience | Saffron & Soul',
    description: 'Immerse in the visual poetry of our brass dining halls, cast-iron preparations, candlelit alcoves, and artistic vegetarian plating.',
    canonicalPath: '/gallery',
    ogType: 'website'
  },
  '/reservations': {
    title: 'Reserve a Table | Dining Experience | Saffron & Soul',
    description: 'Plan your next dining moment at Saffron & Soul. Easy reservations for family gatherings, celebrations, and intimate dinners.',
    canonicalPath: '/reservations',
    ogType: 'website'
  },
  '/contact': {
    title: 'Contact & Location | Saffron & Soul',
    description: 'Connect with our guest concierge for event dining, menu inquiries, and hospitality assistance.',
    canonicalPath: '/contact',
    ogType: 'website'
  }
};
