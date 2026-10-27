import React from 'react';
import { ArrowRight, Star, ChevronRight, Calendar } from 'lucide-react';

interface HomePageProps {
  onNavigate: (route: string) => void;
  onOpenReservation: () => void;
}

export default function HomePage({ onNavigate, onOpenReservation }: HomePageProps) {
  const cuisines = [
    {
      name: 'Punjabi',
      tag: 'Hearty & Rich',
      desc: 'Clay-tandoor flatbreads, slow-cooked heirloom dals, and silky paneer finished with white makkhan.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      badge: 'Chef Signature'
    },
    {
      name: 'Rajasthani',
      tag: 'Royal Heritage',
      desc: 'Fragrant churma, slow-baked baatis dipped in desi ghee, and royal spice blends from Rajputana palaces.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      badge: 'Heritage Classic'
    },
    {
      name: 'South Indian',
      tag: 'Coastal Temples',
      desc: 'Fermented stone-ground dosas, spiced podi grains, and fragrant stews with cold-pressed coconut oils.',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
      badge: 'Stone Ground'
    },
    {
      name: 'Indo-Chinese',
      tag: 'Tangra Legacy',
      desc: 'Smoky wok-charred tossed greens, fiery Sichuan peppers, and silken gravies born in historic Kolkata.',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
      badge: 'Wok Mastered'
    },
    {
      name: 'Fast Food',
      tag: 'Modern Indian Casual',
      desc: 'Artisanal cheese pav-bhaji sliders, kathi rolls with house-churned dips, and elevated bistro bites.',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
      badge: 'Gourmet Casual'
    },
    {
      name: 'Gujarati',
      tag: 'Sweet, Savoury & Spiced',
      desc: 'Soft spongy dhoklas, fragrant heirloom undhiyu, and spiced buttermilk seasoned with fresh curry leaves.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
      badge: 'Sattvic Balance'
    },
    {
      name: 'Mughlai & North Indian',
      tag: 'Nawabi Splendour',
      desc: 'Saffron-infused botanical dum biryanis, slow-simmered shahi gravies, and fragrant kewra nuances.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
      badge: 'Slow Dum'
    },
    {
      name: 'Street Food & Chaat',
      tag: 'Street Delights',
      desc: 'Crisp hand-puffed puris, tamarind sonth reductions, cold-churned dahi, and freshly roasted cumin.',
      image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80',
      badge: 'Old Delhi Bazaar'
    },
    {
      name: 'Desserts & Beverages',
      tag: 'Sweet Nectar',
      desc: 'Gold-leaf rasmalai steeped in saffron milk, hot rabri jalebi, and chilled fragrant thandai.',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
      badge: 'Pure Saffron'
    }
  ];

  const signatureDishes = [
    {
      name: 'Royal Paneer Lababdar',
      origin: 'North India',
      price: '₹580',
      desc: 'Cottage cheese simmered in roasted tomato gravy with crushed melon seeds and saffron butter.',
      image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Heritage Dal Baati Churma',
      origin: 'Marwar, Rajasthan',
      price: '₹620',
      desc: 'Golden baked wheat globes drenched in warm A2 bilona cow ghee, accompanied by panchmel dal and almond churma.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Mysore Silk Masala Dosa',
      origin: 'Karnataka',
      price: '₹420',
      desc: 'Crisp fermented crepe layered with spiced red chutney, spiced Yukon gold potatoes, and three chutneys.',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Truffle-Infused Hakka Noodles',
      origin: 'Indo-Chinese Fusion',
      price: '₹540',
      desc: 'Hand-pulled wok noodles with scallions, crisp bamboo shoots, and a gentle infusion of wild black truffle oil.',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Old Delhi Amritsari Chole Bhature',
      origin: 'Punjab',
      price: '₹460',
      desc: 'Twenty-four-hour slow-brewed kabuli chickpeas with sun-dried pomegranate arils, paired with aerated balloon bhaturas.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Kashmiri Zafrani Dum Biryani',
      origin: 'Awadh',
      price: '₹640',
      desc: 'Aged basmati steamed inside a sealed purdah with fresh garden root vegetables, whole spices, and saffron milk.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const galleryImages = [
    {
      title: 'The Grand Dining Hall',
      subtitle: 'Warm brass & bespoke velvet',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Handcrafted Heritage Dosa',
      subtitle: 'Cast-iron griddle perfection',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Aura of Evening Service',
      subtitle: 'Intimate candlelit dining',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Mughlai Copper Degchi',
      subtitle: 'Slow steam seal aroma',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Gold Leaf Rasmalai',
      subtitle: 'Saffron cream & pistachio garnish',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'The Private Mezannine',
      subtitle: 'Royal family gatherings',
      image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const testimonials = [
    {
      quote: "Saffron & Soul proves that Indian vegetarian fine dining can be as opulent, complex, and profound as any Michelin-starred hall in the world.",
      author: "Aditi S. Rao",
      role: "Culinary Critic & Food Historian",
      city: "Mumbai"
    },
    {
      quote: "The Dal Baati Churma carried the authenticity of an ancestral haveli, while the Zafrani Biryani had the gentlest saffron aroma imaginable.",
      author: "Vikramaditya Roy",
      role: "Architect & Gastronome",
      city: "New Delhi"
    },
    {
      quote: "From the immaculate brass cutlery to the warm hospitality, our family celebration felt truly royal. An absolute gem for vegetarian gourmands.",
      author: "Dr. Meera & Rajesh Singhal",
      role: "Private Patrons",
      city: "Jaipur"
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* 3. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=2000&q=85"
            alt="Royal Indian Vegetarian Spread"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C0F10]/95 via-[#2B1718]/85 to-[#1C0F10]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1718] via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A66A]/40 bg-[#1C0F10]/60 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C7A66A] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium tracking-[0.2em] text-[#C7A66A] uppercase">
              Pure Vegetarian • Regional Gastronomy
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F5EBDD] leading-[1.1] mb-8">
            A World of Flavours. <br />
            <span className="italic font-light text-[#C7A66A]">One Soul.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#F5EBDD]/80 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Discover the richness of India's regional cuisines, thoughtfully crafted for unforgettable moments. From ancestral tandoors to royal dum degchis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-md mx-auto">
            <button
              onClick={() => onNavigate('/menu')}
              className="w-full sm:w-auto bg-[#6E252C] hover:bg-[#8A323A] text-[#F5EBDD] border border-[#C7A66A]/40 text-xs sm:text-sm tracking-widest uppercase font-semibold px-8 py-4 rounded transition-all transform hover:-translate-y-0.5 shadow-xl flex items-center justify-center gap-3"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4 text-[#C7A66A]" />
            </button>

            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto bg-transparent hover:bg-[#C7A66A] text-[#C7A66A] hover:text-[#1C0F10] border border-[#C7A66A] text-xs sm:text-sm tracking-widest uppercase font-semibold px-8 py-4 rounded transition-all transform hover:-translate-y-0.5"
            >
              Reserve a Table
            </button>
          </div>

          <div className="mt-16 pt-10 border-t border-[#C7A66A]/20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C7A66A]">9</p>
              <p className="text-xs uppercase tracking-widest text-[#F5EBDD]/70 mt-1">Regional Cuisines</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C7A66A]">100%</p>
              <p className="text-xs uppercase tracking-widest text-[#F5EBDD]/70 mt-1">Sattvic &amp; Pure Veg</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C7A66A]">45+</p>
              <p className="text-xs uppercase tracking-widest text-[#F5EBDD]/70 mt-1">Secret Masalas</p>
            </div>
            <div>
              <p className="font-serif text-2xl sm:text-3xl font-bold text-[#C7A66A]">4.9</p>
              <p className="text-xs uppercase tracking-widest text-[#F5EBDD]/70 mt-1">Patron Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESTAURANT INTRODUCTION */}
      <section className="bg-[#F5EBDD] text-[#2B1718] py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-[#C7A66A]/30">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                  alt="Saffron & Soul Interior Ambience"
                  className="w-full h-[450px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#6E252C] rounded-lg -z-0 hidden sm:block"></div>
              
              <div className="absolute top-6 left-6 z-20 bg-[#2B1718]/90 text-[#F5EBDD] p-4 rounded shadow-xl border border-[#C7A66A]/40 backdrop-blur-sm max-w-[200px]">
                <div className="flex items-center gap-1.5 text-[#C7A66A] mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C7A66A]" />
                  ))}
                </div>
                <p className="text-xs font-serif leading-tight">"A masterclass in pure vegetarian heritage."</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#6E252C]"></span>
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#6E252C]">Our Foundation</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2B1718] leading-[1.2]">
                Rooted in Tradition. <br />
                <span className="italic font-normal text-[#6E252C]">Made for Today.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#2B1718]/80 leading-relaxed font-normal">
                At Saffron &amp; Soul, we believe Indian vegetarian culinary art is boundless. Across states and centuries, our cuisines have elevated grains, lentils, fresh cow-dairy, botanical seeds, and hand-ground spice pastes to sublime heights.
              </p>

              <p className="text-base sm:text-lg text-[#2B1718]/80 leading-relaxed font-normal">
                We bring India’s vast culinary geography together under a single sanctuary. From the sun-drenched mustard fields of the Punjab and the royal marble courtyards of Rajputana, to the bustling temple town griddles of Madurai and the legendary wok fires of Tangra — each plate is prepared with devotion, authenticity, and uncompromised vegetarian purity.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => onNavigate('/about')}
                  className="bg-[#2B1718] hover:bg-[#6E252C] text-[#F5EBDD] text-xs sm:text-sm tracking-widest uppercase font-semibold px-7 py-3.5 rounded transition-all shadow-md flex items-center gap-3"
                >
                  <span>Our Story &amp; Ethos</span>
                  <ChevronRight className="w-4 h-4 text-[#C7A66A]" />
                </button>

                <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-[#2B1718]/70 font-semibold">
                  <span className="w-5 h-5 rounded-full border border-emerald-600 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                  </span>
                  No Meat • No Eggs • Clean Kitchens
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. EXPLORE OUR CUISINES */}
      <section className="py-24 sm:py-32 bg-[#2B1718] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">Pan-Indian Canvas</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EBDD] mt-3 mb-6">
              Explore Our Cuisines
            </h2>
            <div className="w-16 h-0.5 bg-[#C7A66A] mx-auto mb-6"></div>
            <p className="text-sm sm:text-base text-[#F5EBDD]/75 leading-relaxed font-light">
              Nine distinctive culinary regions, each prepared by dedicated speciality chefs. Click any cuisine to view its focused menu curation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisines.map((cuisine) => (
              <div
                key={cuisine.name}
                className="group relative bg-[#1C0F10] rounded-lg overflow-hidden border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-500 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={cuisine.image}
                      alt={cuisine.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F10] via-transparent to-black/30"></div>
                    
                    <span className="absolute top-4 left-4 bg-[#6E252C]/90 text-[#C7A66A] text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded border border-[#C7A66A]/30 backdrop-blur-sm">
                      {cuisine.badge}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="text-[11px] tracking-widest text-[#C7A66A] uppercase font-semibold mb-1">
                      {cuisine.tag}
                    </div>
                    <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium group-hover:text-[#C7A66A] transition-colors mb-3">
                      {cuisine.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F5EBDD]/70 font-light leading-relaxed mb-6">
                      {cuisine.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={() => onNavigate(`/menu?category=${encodeURIComponent(cuisine.name)}`)}
                    className="w-full py-2.5 px-4 rounded border border-[#C7A66A]/40 group-hover:border-[#C7A66A] group-hover:bg-[#C7A66A] text-[#C7A66A] group-hover:text-[#1C0F10] text-xs uppercase tracking-widest font-semibold flex items-center justify-between transition-all duration-300"
                  >
                    <span>Explore Cuisine</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('/menu')}
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-[#C7A66A] hover:text-[#F5EBDD] font-semibold border-b border-[#C7A66A] pb-1 hover:border-[#F5EBDD] transition-colors"
            >
              <span>View Unified Multi-Cuisine Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. SIGNATURE DISHES */}
      <section className="py-24 sm:py-32 bg-[#1C0F10] border-t border-b border-[#C7A66A]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">Chef's Handpicked Selection</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EBDD] mt-2">
                Signature Vegetarian Dishes
              </h2>
            </div>
            <p className="text-xs text-[#F5EBDD]/50 italic max-w-xs md:text-right">
              *Prices shown are fictional demo approximations. Pure vegetarian presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureDishes.map((dish) => (
              <div 
                key={dish.name}
                className="bg-[#2B1718] rounded-lg overflow-hidden border border-[#C7A66A]/20 hover:border-[#C7A66A]/60 transition-all duration-300 flex flex-col group shadow-lg"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#1C0F10]/80 backdrop-blur-md px-3 py-1 rounded text-xs font-serif font-bold text-[#C7A66A] border border-[#C7A66A]/30">
                    {dish.price}
                  </div>
                  <div className="absolute top-3 left-3 bg-[#1C0F10]/80 backdrop-blur-md p-1.5 rounded border border-[#C7A66A]/30 flex items-center gap-1.5 text-[10px] uppercase font-bold text-emerald-400">
                    <span className="w-3 h-3 border border-emerald-400 p-0.5 inline-flex items-center justify-center rounded-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    </span>
                    <span>Pure Veg</span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#C7A66A]">
                      {dish.origin}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-[#F5EBDD] mt-1 mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-[#F5EBDD]/70 font-light leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-white/5 flex flex-col gap-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-[#C7A66A] italic">House Speciality</span>
                      <button
                        onClick={() => onNavigate('/reservations')}
                        className="text-xs tracking-wider uppercase font-semibold text-[#F5EBDD] hover:text-[#C7A66A] flex items-center gap-1"
                      >
                        <span>Reserve Table</span>
                        <ChevronRight className="w-3 h-3 text-[#C7A66A]" />
                      </button>
                    </div>
                    <a
                      href={`https://wa.me/919817991934?text=${encodeURIComponent('Hello Saffron & Soul! Mujhe ye pasand hai: ' + dish.name + ' (' + dish.price + '). Kripya booking ya details batayein.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-700 hover:bg-emerald-600 text-white text-[11px] font-semibold py-2 px-3 rounded flex items-center justify-center gap-1.5 transition-all shadow"
                    >
                      <span>WhatsApp par ye order / pasand karein</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button
              onClick={() => onNavigate('/menu')}
              className="bg-[#6E252C] hover:bg-[#8A323A] text-[#F5EBDD] border border-[#C7A66A]/40 text-xs sm:text-sm tracking-widest uppercase font-semibold px-9 py-4 rounded transition-all shadow-xl"
            >
              View Full Menu &amp; Course Pairings
            </button>
          </div>

        </div>
      </section>

      {/* 7. OUR PHILOSOPHY */}
      <section className="py-24 sm:py-32 bg-[#F5EBDD] text-[#2B1718] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#6E252C]">Culinary Philosophy</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-medium leading-[1.2]">
                Sattva, Spice &amp; <br />
                <span className="italic text-[#6E252C] font-normal">Soulful Hospitality.</span>
              </h2>
              
              <div className="space-y-4 text-base text-[#2B1718]/80 leading-relaxed font-normal">
                <p>
                  We believe that Indian vegetarian cooking is not about absence or substitution — it is about the infinite presence of aroma, texture, and deep vitality.
                </p>
                <p>
                  Our kitchens practice the ancient Vedic principle of Sattva: clean, uplifting sustenance prepared with mindful intention. We grind our garam masalas each morning, source cold-pressed oils from traditional wood churns, and use saffron harvest directly from Pampore, Kashmir.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="border-l-2 border-[#6E252C] pl-4">
                  <h4 className="font-serif text-lg font-bold text-[#2B1718]">Stone &amp; Clay</h4>
                  <p className="text-xs text-[#2B1718]/70 mt-1">Slow charcoal tandoors, cast iron dosai kal, and brass degchis.</p>
                </div>
                <div className="border-l-2 border-[#6E252C] pl-4">
                  <h4 className="font-serif text-lg font-bold text-[#2B1718]">Atithi Devo Bhava</h4>
                  <p className="text-xs text-[#2B1718]/70 mt-1">Honouring the diner as divine with attentive, graceful service.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=700&q=80" 
                alt="Saffron Sweet Creation"
                className="rounded-lg shadow-lg object-cover h-64 sm:h-80 w-full hover:scale-105 transition-all duration-500"
              />
              <img 
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80" 
                alt="Slow Cooked Dal Heritage"
                className="rounded-lg shadow-lg object-cover h-64 sm:h-80 w-full mt-8 hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. RESTAURANT GALLERY PREVIEW */}
      <section className="py-24 sm:py-32 bg-[#2B1718]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">Atmosphere &amp; Plating</span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EBDD] mt-3 mb-6">
              Gallery Preview
            </h2>
            <div className="w-16 h-0.5 bg-[#C7A66A] mx-auto mb-6"></div>
            <p className="text-sm sm:text-base text-[#F5EBDD]/75 leading-relaxed font-light">
              Glimpses of our curated interiors, handcrafted pottery, and pure vegetarian culinary presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, index) => (
              <div 
                key={index}
                onClick={() => onNavigate('/gallery')}
                className="relative h-72 rounded-lg overflow-hidden group cursor-pointer border border-[#C7A66A]/20"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F10] via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-[10px] tracking-widest uppercase text-[#C7A66A] font-medium">{item.subtitle}</p>
                  <h4 className="font-serif text-lg text-[#F5EBDD] font-medium">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => onNavigate('/gallery')}
              className="bg-transparent hover:bg-[#C7A66A] text-[#C7A66A] hover:text-[#1C0F10] border border-[#C7A66A] text-xs sm:text-sm tracking-widest uppercase font-semibold px-8 py-3.5 rounded transition-all"
            >
              View Full Gallery &amp; Private Suites
            </button>
          </div>
        </div>
      </section>

      {/* 9. RESERVATION CALL-TO-ACTION */}
      <section className="relative py-28 sm:py-36 bg-[#6E252C] text-[#F5EBDD] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=80" 
            alt="Ambience Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="w-12 h-12 rounded-full border border-[#C7A66A]/50 bg-[#2B1718]/40 flex items-center justify-center mx-auto mb-6 text-[#C7A66A]">
            <Calendar className="w-5 h-5" />
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Your Table Awaits.
          </h2>

          <p className="text-base sm:text-lg text-[#F5EBDD]/90 max-w-xl mx-auto font-light leading-relaxed mb-10">
            Make room for good food, great company and memorable moments. Reserve for intimate dinners, family reunions, or corporate feasts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="w-full sm:w-auto bg-[#C7A66A] hover:bg-[#DBC08C] text-[#1C0F10] text-xs sm:text-sm tracking-widest uppercase font-bold px-10 py-4 rounded transition-all shadow-2xl"
            >
              Book Your Table Now
            </button>

            <button
              onClick={() => onNavigate('/reservations')}
              className="w-full sm:w-auto bg-transparent hover:bg-black/20 text-[#F5EBDD] border border-white/30 text-xs sm:text-sm tracking-widest uppercase font-semibold px-8 py-4 rounded transition-all"
            >
              View Seating &amp; Private Dining
            </button>
          </div>
        </div>
      </section>

      {/* 10. SAMPLE TESTIMONIALS */}
      <section className="py-24 sm:py-32 bg-[#1C0F10] border-b border-[#C7A66A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">Patron Impressions</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#F5EBDD] mt-2 mb-3">
              Words From Our Guests
            </h2>
            <p className="text-xs text-[#F5EBDD]/50 italic">
              *Clearly labelled fictional sample testimonials for design demonstration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#2B1718] p-8 rounded-lg border border-[#C7A66A]/20 flex flex-col justify-between relative shadow-lg"
              >
                <div className="text-3xl font-serif text-[#C7A66A] leading-none mb-4">“</div>
                <p className="text-sm sm:text-base text-[#F5EBDD]/85 font-light leading-relaxed italic mb-6">
                  {item.quote}
                </p>
                <div className="border-t border-white/10 pt-4">
                  <h4 className="font-serif text-base font-semibold text-[#F5EBDD]">{item.author}</h4>
                  <p className="text-xs text-[#C7A66A] font-medium">{item.role}</p>
                  <p className="text-[10px] text-[#F5EBDD]/50 uppercase tracking-wider">{item.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
