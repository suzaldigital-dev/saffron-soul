import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, ChevronLeft, ChevronRight, ChevronDown, ArrowRight, Maximize2, UtensilsCrossed
} from 'lucide-react';
import { 
  galleryItems, 
  guestFavourites, 
  worldOfSoulTiles, 
  GalleryItem 
} from '../data/galleryItems';

interface GalleryPageProps {
  onNavigate: (route: string) => void;
  onOpenReservationModal: () => void;
}

const CATEGORIES = [
  'All Moments',
  'Signature Dishes',
  'Punjabi',
  'Rajasthani',
  'South Indian',
  'Chinese & Indo-Chinese',
  'Street Food & Chaat',
  'Desserts & Beverages',
  'Our Ambience'
] as const;

export default function GalleryPage({ onNavigate, onOpenReservationModal }: GalleryPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Moments');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [imageErrorMap, setImageErrorMap] = useState<Record<string, boolean>>({});

  const filteredItems = selectedCategory === 'All Moments'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleImageError = (id: string) => {
    setImageErrorMap(prev => ({ ...prev, [id]: true }));
  };

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const showPrevImage = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(prev => 
      prev === null ? null : (prev === 0 ? filteredItems.length - 1 : prev - 1)
    );
  }, [activeLightboxIndex, filteredItems.length]);

  const showNextImage = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(prev => 
      prev === null ? null : (prev === filteredItems.length - 1 ? 0 : prev + 1)
    );
  }, [activeLightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'ArrowRight') showNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, closeLightbox, showPrevImage, showNextImage]);

  return (
    <div className="min-h-screen bg-[#2B1718] text-[#F5EBDD] font-sans">
      
      {/* 2. GALLERY HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
            alt="Warm atmospheric restaurant dining hall"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C0F10]/95 via-[#2B1718]/85 to-[#1C0F10]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1718] via-transparent to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A66A]/40 bg-[#1C0F10]/60 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C7A66A] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C7A66A] uppercase">
              A VISUAL FEAST
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5EBDD] leading-[1.15] mb-6">
            Every Plate Has <br />
            <span className="italic font-light text-[#C7A66A]">a Story.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#F5EBDD]/85 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Explore the colours, flavours, and little moments that make Saffron &amp; Soul special.
          </p>

          <a 
            href="#gallery-grid"
            className="inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C7A66A]/80 hover:text-[#C7A66A] transition-colors pt-2 group"
          >
            <span>View Gallery</span>
            <ChevronDown className="w-4 h-4 text-[#C7A66A] animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 3. CATEGORY FILTERS */}
      <section id="gallery-grid" className="py-6 bg-[#1C0F10] sticky top-20 z-30 border-y border-[#C7A66A]/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map(category => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setActiveLightboxIndex(null);
                  }}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#6E252C] text-[#F5EBDD] border border-[#C7A66A] shadow-lg shadow-[#6E252C]/30'
                      : 'bg-[#2B1718]/60 text-[#F5EBDD]/70 hover:text-[#C7A66A] border border-white/5 hover:border-[#C7A66A]/30'
                  }`}
                >
                  {category}
                  {category === 'All Moments' && (
                    <span className="ml-2 text-[10px] text-[#C7A66A] opacity-80">
                      ({galleryItems.length})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ASYMMETRIC EDITORIAL GALLERY GRID */}
      <section className="py-16 sm:py-24 bg-[#2B1718]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#C7A66A]/15 text-xs text-[#F5EBDD]/60 tracking-wider uppercase">
            <span>Showing: <strong className="text-[#C7A66A]">{selectedCategory}</strong></span>
            <span>{filteredItems.length} Photographs</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
            {filteredItems.map((item, index) => {
              const isPortrait = item.aspect === 'portrait';
              const isWide = item.aspect === 'wide';

              return (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className={`group relative rounded-lg overflow-hidden cursor-pointer border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-500 bg-[#1C0F10] shadow-xl ${
                    isPortrait ? 'sm:row-span-2' : ''
                  } ${
                    isWide ? 'sm:col-span-2' : ''
                  }`}
                >
                  <img
                    src={
                      imageErrorMap[item.id]
                        ? 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80'
                        : item.image
                    }
                    alt={item.alt}
                    onError={() => handleImageError(item.id)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F10] via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-8 h-8 rounded-full bg-[#1C0F10]/80 border border-[#C7A66A]/40 flex items-center justify-center text-[#C7A66A]">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#C7A66A] bg-[#6E252C]/80 px-2 py-0.5 rounded border border-[#C7A66A]/30 backdrop-blur-sm">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl text-[#F5EBDD] font-medium mt-2 leading-tight">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-xs text-[#F5EBDD]/75 font-light mt-1 line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. LIGHTBOX MODAL */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Image Preview Lightbox"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center"
          >
            <div className="w-full flex items-center justify-between text-[#F5EBDD] mb-3 px-2">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest text-[#C7A66A] font-semibold">
                  Photo {activeLightboxIndex + 1} of {filteredItems.length}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs text-white/70 uppercase tracking-wider">
                  {filteredItems[activeLightboxIndex].category}
                </span>
              </div>

              <button
                onClick={closeLightbox}
                className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-[#C7A66A] transition-colors focus:outline-none"
                aria-label="Close image lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-lg border border-[#C7A66A]/30 bg-[#1C0F10]">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].alt}
                className="w-full h-auto max-h-[70vh] object-contain select-none"
              />

              <button
                onClick={showPrevImage}
                className="absolute left-3 p-3 rounded-full bg-black/60 text-[#F5EBDD] hover:text-[#C7A66A] hover:bg-black/90 transition-all border border-white/10 focus:outline-none"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={showNextImage}
                className="absolute right-3 p-3 rounded-full bg-black/60 text-[#F5EBDD] hover:text-[#C7A66A] hover:bg-black/90 transition-all border border-white/10 focus:outline-none"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="w-full text-center mt-4 px-4">
              <h4 className="font-serif text-xl sm:text-2xl text-[#F5EBDD]">
                {filteredItems[activeLightboxIndex].title}
              </h4>
              {filteredItems[activeLightboxIndex].subtitle && (
                <p className="text-xs sm:text-sm text-[#F5EBDD]/70 font-light mt-1 max-w-xl mx-auto">
                  {filteredItems[activeLightboxIndex].subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 6. GUEST FAVOURITES */}
      <section className="py-24 sm:py-32 bg-[#1C0F10] border-t border-[#C7A66A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">
              Culinary Signatures
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EBDD] mt-3 mb-4">
              A Few Guest Favourites
            </h2>
            <div className="w-16 h-0.5 bg-[#C7A66A] mx-auto mb-4"></div>
            <p className="text-xs text-[#F5EBDD]/50 italic">
              *Demonstration highlights representing beloved regional recipes across our dining room.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guestFavourites.map((fav) => (
              <div 
                key={fav.title}
                className="bg-[#2B1718] rounded-lg overflow-hidden border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={fav.image} 
                      alt={fav.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#6E252C]/90 text-[#C7A66A] text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded border border-[#C7A66A]/30">
                      {fav.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-widest text-[#C7A66A] font-semibold">
                      {fav.origin}
                    </span>
                    <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mt-1 mb-2">
                      {fav.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F5EBDD]/70 font-light leading-relaxed">
                      {fav.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate('/menu')}
                    className="w-full py-2.5 px-4 rounded border border-[#C7A66A]/40 group-hover:border-[#C7A66A] group-hover:bg-[#C7A66A] text-[#C7A66A] group-hover:text-[#1C0F10] text-xs uppercase tracking-widest font-semibold flex items-center justify-between transition-all"
                  >
                    <span>View On Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="relative py-28 sm:py-36 bg-[#6E252C] text-[#F5EBDD] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-full border border-[#C7A66A]/50 bg-[#2B1718]/60 flex items-center justify-center mx-auto mb-6 text-[#C7A66A]">
            <UtensilsCrossed className="w-5 h-5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Come Hungry. Leave with a Story.
          </h2>

          <p className="text-base sm:text-lg text-[#F5EBDD]/85 max-w-xl mx-auto font-light leading-relaxed mb-10">
            Immerse yourself in authentic pure-vegetarian recipes from across India, prepared with care and served in an atmosphere of royal warmth.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => onNavigate('/menu')}
              className="w-full sm:w-auto bg-[#C7A66A] hover:bg-[#DBC08C] text-[#1C0F10] text-xs sm:text-sm tracking-widest uppercase font-bold px-9 py-4 rounded transition-all shadow-xl"
            >
              <span>Explore Our Menu</span>
            </button>

            <button
              onClick={onOpenReservationModal}
              className="w-full sm:w-auto bg-transparent hover:bg-black/20 text-[#F5EBDD] border border-white/40 text-xs sm:text-sm tracking-widest uppercase font-semibold px-9 py-4 rounded transition-all"
            >
              Plan Your Visit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
