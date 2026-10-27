import React from 'react';
import { Clock, MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import { contactConfig } from '../config/contactConfig';

interface FooterProps {
  onNavigate: (route: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Menu', href: '/menu' },
    { name: 'Our Story', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const regionalCuisines = [
    'Punjabi',
    'Rajasthani',
    'South Indian',
    'Chinese & Indo-Chinese',
    'Fast Food',
    'Gujarati',
    'Mughlai & North Indian',
    'Street Food & Chaat',
    'Desserts & Beverages'
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
  };

  return (
    <footer className="bg-[#1C0F10] text-[#F5EBDD] pt-20 pb-12 border-t border-[#C7A66A]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Wordmark & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block group"
            >
              <span className="font-display text-2xl font-bold tracking-widest text-[#F5EBDD] group-hover:text-[#C7A66A] transition-colors">
                SAFFRON <span className="text-[#C7A66A] font-serif italic">&amp;</span> SOUL
              </span>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#C7A66A] font-medium -mt-1">
                Pure Vegetarian • Multi-Cuisine
              </p>
            </a>

            <p className="text-xs sm:text-sm text-[#F5EBDD]/70 font-light leading-relaxed max-w-sm pt-2">
              An authentic homage to the culinary marvels of India. Curated regional delicacies, seasonal herbs, and royal hospitality prepared in dedicated pure-vegetarian sanctums.
            </p>

            <div className="flex items-center gap-3 pt-3">
              <a 
                href={contactConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded bg-[#2B1718] border border-[#C7A66A]/30 flex items-center justify-center text-[#C7A66A] hover:bg-[#C7A66A] hover:text-[#1C0F10] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={contactConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="w-9 h-9 rounded bg-[#2B1718] border border-[#C7A66A]/30 flex items-center justify-center text-[#C7A66A] hover:bg-[#C7A66A] hover:text-[#1C0F10] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={contactConfig.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
                className="w-9 h-9 rounded bg-[#2B1718] border border-[#C7A66A]/30 flex items-center justify-center text-[#C7A66A] hover:bg-[#C7A66A] hover:text-[#1C0F10] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7A66A] mb-5">Quick Links</h4>
            <ul className="space-y-3 text-xs tracking-wider uppercase">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="text-[#F5EBDD]/75 hover:text-[#C7A66A] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Regional Menus */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7A66A] mb-5">Regional Menus</h4>
            <ul className="space-y-2.5 text-xs text-[#F5EBDD]/75">
              {regionalCuisines.slice(0, 6).map((c) => (
                <li key={c}>
                  <button
                    onClick={(e) => handleLinkClick(e, `/menu?category=${encodeURIComponent(c)}`)}
                    className="hover:text-[#C7A66A] transition-colors text-left"
                  >
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Visit & Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C7A66A] mb-5">Visit &amp; Hours</h4>
            <div className="space-y-3 text-xs text-[#F5EBDD]/75 font-light">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C7A66A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#F5EBDD]">Service Hours:</p>
                  <p>Lunch: {contactConfig.hours.lunch}</p>
                  <p>Dinner: {contactConfig.hours.dinner}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2 border-t border-white/5">
                <MapPin className="w-4 h-4 text-[#C7A66A] shrink-0 mt-0.5" />
                <p>{contactConfig.address}</p>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C7A66A] shrink-0" />
                <a 
                  href={`tel:${contactConfig.phone.replace(/[^0-9+]/g, '')}`} 
                  className="hover:text-[#C7A66A] transition-colors"
                >
                  {contactConfig.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F5EBDD]/50 gap-4">
          <p>© {new Date().getFullYear()} Saffron &amp; Soul. All rights reserved. Jawahar Chowk, Fatehabad.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-3 h-3 border border-emerald-400 p-0.5 inline-flex items-center justify-center rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </span>
              100% Pure Vegetarian
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
