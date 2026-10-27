import React from 'react';
import { 
  Sparkles, 
  HeartHandshake, 
  Users, 
  ArrowRight, 
  ChevronDown, 
  UtensilsCrossed,
  Flame
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (route: string) => void;
  onOpenReservationModal: () => void;
}

export default function AboutPage({ onNavigate, onOpenReservationModal }: AboutPageProps) {
  const regionalJourneys = [
    {
      region: 'Punjab',
      flavor: 'Generous, comforting flavours',
      desc: 'Clay-tandoor flatbreads, slow-simmered whole urad lentils, and hand-churned white butter.',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
      accent: 'Tandoor & Makkhan'
    },
    {
      region: 'Rajasthan',
      flavor: 'Rich heritage & royal-inspired recipes',
      desc: 'Slow-baked baatis dipped in aromatic ghee, hand-crushed churma, and fiery desert chillies.',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
      accent: 'Marwari Heritage'
    },
    {
      region: 'South India',
      flavor: 'Vibrant spices & comforting classics',
      desc: 'Fermented stone-ground crepes, fragrant curry leaves, roasted cumin, and cold-pressed coconut oils.',
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
      accent: 'Coastal & Temple Traditions'
    },
    {
      region: 'Gujarat',
      flavor: 'Balanced flavours & regional favourites',
      desc: 'Steamed dhokla tempered with mustard seeds, heirloom vegetable undhiyu, and soothing spiced kadhi.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
      accent: 'Sweet, Savoury & Spiced'
    },
    {
      region: 'Indo-Chinese',
      flavor: 'Familiar favourites with a desi twist',
      desc: 'Wok-charred noodles, fiery red chillies, garlic undertones, and silken street-side comfort.',
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
      accent: 'Tangra Wok Heritage'
    },
    {
      region: 'Indian Street Food',
      flavor: 'Playful, tangy, crowd-pleasing bites',
      desc: 'Crisp puris with chilled mint water, crushed papdi, tamarind chutneys, and spiced roasted potatoes.',
      image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80',
      accent: 'Bazaar Flavours'
    }
  ];

  return (
    <div className="min-h-screen bg-[#2B1718] text-[#F5EBDD] font-sans">
      
      {/* 2. HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
            alt="Warm Indian fine dining atmosphere"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C0F10]/95 via-[#2B1718]/85 to-[#1C0F10]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1718] via-transparent to-black/40"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A66A]/40 bg-[#1C0F10]/60 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C7A66A] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium tracking-[0.25em] text-[#C7A66A] uppercase">
              OUR STORY
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5EBDD] leading-[1.15] mb-6">
            Rooted in Tradition. <br />
            <span className="italic font-light text-[#C7A66A]">Made for Every Soul.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#F5EBDD]/85 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Every dish tells a story. Every flavour brings us closer.
          </p>

          <a 
            href="#beginning" 
            className="inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C7A66A]/80 hover:text-[#C7A66A] transition-colors pt-2 group"
          >
            <span>Discover Our Journey</span>
            <ChevronDown className="w-4 h-4 text-[#C7A66A] animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 3. OUR BEGINNING */}
      <section id="beginning" className="bg-[#F5EBDD] text-[#2B1718] py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-[#C7A66A]/30">
                <img
                  src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1200&q=80"
                  alt="Aromatic Indian spices and thoughtful kitchen preparation"
                  className="w-full h-[460px] sm:h-[540px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#6E252C] rounded-lg -z-0 hidden sm:block"></div>
              
              <div className="absolute bottom-6 right-6 z-20 bg-[#2B1718]/95 text-[#F5EBDD] p-5 rounded-lg shadow-xl border border-[#C7A66A]/40 backdrop-blur-sm max-w-[220px]">
                <p className="text-[11px] uppercase tracking-widest text-[#C7A66A] font-semibold mb-1">
                  Pure Vegetarian
                </p>
                <p className="text-xs font-serif leading-relaxed italic text-white/90">
                  Where authentic recipes meet the joy of sharing meals together.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#6E252C]"></span>
                <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#6E252C]">
                  Our Beginning
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#2B1718] leading-[1.2]">
                A Story Born <br />
                <span className="italic font-normal text-[#6E252C]">Around the Table.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#2B1718]/85 leading-relaxed font-normal">
                Saffron &amp; Soul was imagined as a welcoming gathering place where India’s extraordinary culinary diversity could sit comfortably together under one roof. Across cities and countrysides, the greatest memories in Indian homes have always unfolded around the dining table — over steaming pots of slow-simmered lentils, sizzling tandoor rotis, and shared sweet endings.
              </p>

              <p className="text-base sm:text-lg text-[#2B1718]/85 leading-relaxed font-normal">
                Rather than limiting our tables to a single province, we wanted to celebrate the rich contrasts of our cuisine: the hearty richness of North Indian comfort dishes, the time-honoured heritage recipes of Rajasthan, the delicate fermentations and vibrant spice of South Indian breakfast classics, balanced Gujarati flavours, and the lively tang of evening street-food chaat.
              </p>

              <p className="text-base sm:text-lg text-[#2B1718]/85 leading-relaxed font-normal">
                Every recipe is an invitation to explore regional identity through uncompromised vegetarian cooking — prepared fresh, seasoned with patience, and served with unconditional warmth.
              </p>

              <div className="pt-4 flex items-center gap-6">
                <button
                  onClick={() => onNavigate('/menu')}
                  className="bg-[#2B1718] hover:bg-[#6E252C] text-[#F5EBDD] text-xs sm:text-sm tracking-widest uppercase font-semibold px-7 py-3.5 rounded transition-all shadow-md flex items-center gap-3"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4 text-[#C7A66A]" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. OUR PHILOSOPHY */}
      <section className="py-24 sm:py-32 bg-[#2B1718] border-t border-b border-[#C7A66A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">
              Guiding Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EBDD] mt-3 mb-6">
              Our Philosophy
            </h2>
            <div className="w-16 h-0.5 bg-[#C7A66A] mx-auto mb-6"></div>
            <p className="text-sm sm:text-base text-[#F5EBDD]/75 leading-relaxed font-light">
              Simple values that shape every pot, griddle, and plate in our kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1C0F10] p-8 rounded-lg border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl group">
              <div className="w-14 h-14 rounded-full bg-[#6E252C]/40 border border-[#C7A66A]/40 flex items-center justify-center text-[#C7A66A] mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mb-4 group-hover:text-[#C7A66A] transition-colors">
                Honest Ingredients
              </h3>
              <p className="text-sm text-[#F5EBDD]/75 leading-relaxed font-light">
                Fresh ingredients, thoughtful preparation, and flavours that speak for themselves. We believe real food needs no shortcuts.
              </p>
            </div>

            <div className="bg-[#1C0F10] p-8 rounded-lg border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl group">
              <div className="w-14 h-14 rounded-full bg-[#6E252C]/40 border border-[#C7A66A]/40 flex items-center justify-center text-[#C7A66A] mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mb-4 group-hover:text-[#C7A66A] transition-colors">
                Tradition with Heart
              </h3>
              <p className="text-sm text-[#F5EBDD]/75 leading-relaxed font-light">
                Celebrating regional recipes while welcoming the tastes of today's generation. Timeless comfort presented with modern elegance.
              </p>
            </div>

            <div className="bg-[#1C0F10] p-8 rounded-lg border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl group">
              <div className="w-14 h-14 rounded-full bg-[#6E252C]/40 border border-[#C7A66A]/40 flex items-center justify-center text-[#C7A66A] mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mb-4 group-hover:text-[#C7A66A] transition-colors">
                A Place for Everyone
              </h3>
              <p className="text-sm text-[#F5EBDD]/75 leading-relaxed font-light">
                From family lunches to friendly gatherings, there's always room at our table. Food meant to be shared in good company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. A JOURNEY ACROSS INDIA */}
      <section className="py-24 sm:py-32 bg-[#1C0F10] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">
              Regional Tapestry
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EBDD] mt-3 mb-6">
              A Journey Across India
            </h2>
            <div className="w-16 h-0.5 bg-[#C7A66A] mx-auto mb-6"></div>
            <p className="text-sm sm:text-base text-[#F5EBDD]/75 leading-relaxed font-light">
              India is not a single flavour; it is an orchestra of regional aromas and cooking customs. Here are the core traditions brought together on our tables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionalJourneys.map((item) => (
              <div
                key={item.region}
                className="bg-[#2B1718] rounded-lg overflow-hidden border border-[#C7A66A]/20 hover:border-[#C7A66A]/70 transition-all duration-300 flex flex-col group shadow-lg"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.region}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1718] via-transparent to-black/30"></div>
                  <span className="absolute top-4 left-4 bg-[#6E252C]/90 text-[#C7A66A] text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded border border-[#C7A66A]/30">
                    {item.accent}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-[#F5EBDD] group-hover:text-[#C7A66A] transition-colors mb-1">
                      {item.region}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#C7A66A] mb-3">
                      {item.flavor}
                    </p>
                    <p className="text-xs sm:text-sm text-[#F5EBDD]/75 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-white/5">
                    <button
                      onClick={() => onNavigate(`/menu?category=${encodeURIComponent(item.region)}`)}
                      className="text-xs uppercase tracking-wider font-semibold text-[#F5EBDD] group-hover:text-[#C7A66A] flex items-center justify-between w-full transition-colors"
                    >
                      <span>Explore {item.region} Dishes</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE ART OF OUR KITCHEN */}
      <section className="py-24 sm:py-32 bg-[#2B1718]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">
              Craft &amp; Atmosphere
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EBDD] mt-3 mb-6">
              Crafted with Care. Served with Soul.
            </h2>
            <div className="w-16 h-0.5 bg-[#C7A66A] mx-auto mb-6"></div>
            <p className="text-sm sm:text-base text-[#F5EBDD]/75 leading-relaxed font-light">
              From hand-pounded spices and copper degchis to slow tandoor embers and delicate garnishes, our culinary craft is a labour of love.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 relative group rounded-lg overflow-hidden border border-[#C7A66A]/20 min-h-[360px] md:min-h-[460px]">
              <img
                src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=80"
                alt="Slow simmered Indian culinary creations"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F10] via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-widest text-[#C7A66A] font-semibold">Slow Cooking</span>
                <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mt-1">Patience in Every Simmer</h3>
                <p className="text-xs text-[#F5EBDD]/75 mt-1 font-light max-w-md">
                  Allowing whole spices, cream, and slow heat to coax out honest aromatics.
                </p>
              </div>
            </div>

            <div className="md:col-span-5 relative group rounded-lg overflow-hidden border border-[#C7A66A]/20 min-h-[220px]">
              <img
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
                alt="Awadhi fragrant dum biryani"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F10] via-black/20 to-transparent"></div>
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] uppercase tracking-widest text-[#C7A66A] font-semibold">Aroma &amp; Dum</span>
                <h4 className="font-serif text-lg text-[#F5EBDD]">Basmati Infused with Saffron</h4>
              </div>
            </div>

            <div className="md:col-span-4 relative group rounded-lg overflow-hidden border border-[#C7A66A]/20 min-h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80"
                alt="Silken paneer and rich gravies"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F10] via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-[#C7A66A] font-semibold">Fresh Dairy</span>
                <h4 className="font-serif text-base text-[#F5EBDD]">Creamy Paneer &amp; Masalas</h4>
              </div>
            </div>

            <div className="md:col-span-4 relative group rounded-lg overflow-hidden border border-[#C7A66A]/20 min-h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80"
                alt="Tangy street-food chutneys and crispy chaat"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F10] via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-[#C7A66A] font-semibold">Street Energy</span>
                <h4 className="font-serif text-base text-[#F5EBDD]">Chaat &amp; Crispy Puris</h4>
              </div>
            </div>

            <div className="md:col-span-4 relative group rounded-lg overflow-hidden border border-[#C7A66A]/20 min-h-[260px]">
              <img
                src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80"
                alt="Golden saffron sweets and delicate garnishes"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F10] via-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase tracking-widest text-[#C7A66A] font-semibold">Sweet Finishes</span>
                <h4 className="font-serif text-base text-[#F5EBDD]">Saffron &amp; Pistachio Delights</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR PROMISE */}
      <section className="py-24 sm:py-32 bg-[#6E252C] text-[#F5EBDD] relative overflow-hidden border-t border-b border-[#C7A66A]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#C7A66A]">
            The Saffron &amp; Soul Pledge
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight mt-3 mb-6">
            Good Food. Genuine Moments.
          </h2>
          <div className="w-16 h-0.5 bg-[#C7A66A] mx-auto mb-8"></div>

          <p className="text-base sm:text-lg text-[#F5EBDD]/90 max-w-2xl mx-auto font-light leading-relaxed mb-16">
            We are dedicated to the pure joy of vegetarian dining. Every visit is designed to feel heartfelt, satisfying, and unhurried.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="bg-[#2B1718]/40 border border-[#C7A66A]/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-[#C7A66A] text-[#1C0F10] flex items-center justify-center font-bold mb-4">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#F5EBDD] mb-2">
                A Diverse Vegetarian Menu
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EBDD]/80 leading-relaxed font-light">
                Carefully prepared selections spanning North, South, East, and Western regional kitchens with zero meat or eggs.
              </p>
            </div>

            <div className="bg-[#2B1718]/40 border border-[#C7A66A]/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-[#C7A66A] text-[#1C0F10] flex items-center justify-center font-bold mb-4">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#F5EBDD] mb-2">
                Regional Indian Inspirations
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EBDD]/80 leading-relaxed font-light">
                Recipes grounded in traditional spice blending, slow simmering, and authentic cooking vessels.
              </p>
            </div>

            <div className="bg-[#2B1718]/40 border border-[#C7A66A]/30 rounded-lg p-6 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-[#C7A66A] text-[#1C0F10] flex items-center justify-center font-bold mb-4">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#F5EBDD] mb-2">
                A Welcoming Dining Experience
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EBDD]/80 leading-relaxed font-light">
                Attentive, humble hospitality where each diner is received with genuine respect and warmth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLOSING CALL TO ACTION */}
      <section className="relative py-28 sm:py-36 bg-[#1C0F10] text-[#F5EBDD] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=80" 
            alt="Ambience Pattern"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-full border border-[#C7A66A]/50 bg-[#2B1718]/60 flex items-center justify-center mx-auto mb-6 text-[#C7A66A]">
            <UtensilsCrossed className="w-5 h-5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Your Table Is Waiting.
          </h2>

          <p className="text-base sm:text-lg text-[#F5EBDD]/85 max-w-xl mx-auto font-light leading-relaxed mb-10">
            Join us for an unhurried meal, warm conversations, and the comfort of authentic regional flavours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => onNavigate('/menu')}
              className="w-full sm:w-auto bg-[#6E252C] hover:bg-[#8A323A] text-[#F5EBDD] border border-[#C7A66A]/40 text-xs sm:text-sm tracking-widest uppercase font-semibold px-9 py-4 rounded transition-all shadow-xl flex items-center justify-center gap-3"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4 text-[#C7A66A]" />
            </button>

            <button
              onClick={onOpenReservationModal}
              className="w-full sm:w-auto bg-[#C7A66A] hover:bg-[#DBC08C] text-[#1C0F10] text-xs sm:text-sm tracking-widest uppercase font-bold px-9 py-4 rounded transition-all shadow-xl"
            >
              Plan Your Visit
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
