import React, { useState, useEffect } from 'react';
import { Search, Plus, ShoppingBag, Sparkles, X, MessageCircle } from 'lucide-react';
import { menuItems, MenuItem } from '../data/menuItems';
import { CartItem } from '../components/CartDrawer';
import { contactConfig } from '../config/contactConfig';

interface MenuPageProps {
  onNavigate: (route: string) => void;
  onAddToCart: (item: MenuItem) => void;
  cart: CartItem[];
  onOpenCart: () => void;
}

const CATEGORIES = [
  'All Dishes',
  'Punjabi',
  'Rajasthani',
  'South Indian',
  'Chinese & Indo-Chinese',
  'Fast Food',
  'Gujarati',
  'Mughlai & North Indian',
  'Street Food & Chaat',
  'Desserts & Beverages'
] as const;

export default function MenuPage({ onNavigate, onAddToCart, cart, onOpenCart }: MenuPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(() => {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get('category');
    if (cat && CATEGORIES.includes(cat as any)) {
      return cat;
    }
    return 'All Dishes';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [priceSort, setPriceSort] = useState<'default' | 'asc' | 'desc'>('default');

  useEffect(() => {
    const handleLocationChange = () => {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category');
      if (cat && CATEGORIES.includes(cat as any)) {
        setSelectedCategory(cat);
      }
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  let filtered = menuItems.filter((dish) => {
    const matchesCategory =
      selectedCategory === 'All Dishes' || dish.category === selectedCategory;
    const matchesSearch =
      dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (priceSort === 'asc') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (priceSort === 'desc') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  const getItemQuantity = (id: string) => {
    const entry = cart.find((c) => c.item.id === id);
    return entry ? entry.quantity : 0;
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All Dishes') {
      window.history.pushState({}, '', '/menu');
    } else {
      window.history.pushState({}, '', `/menu?category=${encodeURIComponent(category)}`);
    }
  };

  const clearFilters = () => {
    setSelectedCategory('All Dishes');
    setSearchQuery('');
    setPriceSort('default');
    window.history.pushState({}, '', '/menu');
  };

  const getWhatsAppDishUrl = (dish: MenuItem) => {
    const message = `Hello Saffron & Soul! Mere ko ye pasand hai: ${dish.name} (₹${dish.price}) [${dish.category}]. Kripya iski availability aur details batayein.`;
    return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-[#2B1718] text-[#F5EBDD] font-sans">
      
      {/* 2. MENU PAGE HEADER */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=2000&q=85"
            alt="Warm Indian Vegetarian Spread"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C0F10]/95 via-[#2B1718]/85 to-[#1C0F10]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1718] via-transparent to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A66A]/40 bg-[#1C0F10]/60 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C7A66A] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C7A66A] uppercase">
              A JOURNEY THROUGH INDIA
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5EBDD] leading-[1.15] mb-4">
            Our Menu
          </h1>

          <p className="text-base sm:text-lg text-[#F5EBDD]/85 max-w-2xl mx-auto font-light leading-relaxed">
            From India's regional favourites to modern comfort food. Har dish ke niche WhatsApp button se direct inquiry karein!
          </p>
        </div>
      </section>

      {/* 3. CATEGORY TABS & CONTROLS */}
      <section className="bg-[#1C0F10] border-y border-[#C7A66A]/20 sticky top-20 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#6E252C] text-[#F5EBDD] border border-[#C7A66A] shadow-md'
                      : 'bg-[#2B1718]/60 text-[#F5EBDD]/70 hover:text-[#C7A66A] border border-white/5 hover:border-[#C7A66A]/30'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-4 border-t border-white/5">
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-[#C7A66A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes or ingredients..."
                className="w-full bg-[#2B1718] border border-[#C7A66A]/30 rounded-lg pl-9 pr-8 py-2 text-xs text-[#F5EBDD] placeholder-[#F5EBDD]/40 focus:outline-none focus:border-[#C7A66A]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="flex items-center justify-between w-full sm:w-auto gap-4 text-xs">
              <span className="text-[#F5EBDD]/60 uppercase tracking-wider text-[11px]">
                Showing: <strong className="text-[#C7A66A]">{filtered.length}</strong> creations
              </span>

              <div className="flex items-center gap-2">
                <span className="text-[#F5EBDD]/50 uppercase text-[10px]">Sort:</span>
                <select
                  value={priceSort}
                  onChange={(e) => setPriceSort(e.target.value as any)}
                  className="bg-[#2B1718] border border-[#C7A66A]/30 text-[#F5EBDD] text-xs rounded px-2.5 py-1.5 focus:outline-none focus:border-[#C7A66A]"
                >
                  <option value="default">Recommended</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>

                {(selectedCategory !== 'All Dishes' || searchQuery || priceSort !== 'default') && (
                  <button
                    onClick={clearFilters}
                    className="text-[11px] uppercase tracking-wider text-[#C7A66A] hover:underline ml-2"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. DISH CARDS GRID */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filtered.length === 0 ? (
          <div className="text-center py-24 bg-[#1C0F10] rounded-xl border border-[#C7A66A]/20 p-8">
            <Sparkles className="w-10 h-10 text-[#C7A66A] mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-[#F5EBDD]">No Dishes Found</h3>
            <p className="text-xs sm:text-sm text-[#F5EBDD]/60 mt-2 max-w-md mx-auto">
              We couldn't find any dish matching your current filter. Try clearing your search or explore other regional categories.
            </p>
            <button
              onClick={clearFilters}
              className="mt-6 px-6 py-3 rounded bg-[#C7A66A] text-[#1C0F10] text-xs uppercase tracking-widest font-semibold hover:bg-[#DBC08C] transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((dish) => {
              const qty = getItemQuantity(dish.id);

              return (
                <div
                  key={dish.id}
                  className="bg-[#1C0F10] rounded-xl overflow-hidden border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F10] via-transparent to-black/30"></div>

                      <div className="absolute top-3 left-3 bg-[#1C0F10]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#C7A66A]/30 flex items-center gap-1.5 text-[10px] uppercase font-bold text-emerald-400">
                        <span className="w-3 h-3 border border-emerald-400 p-0.5 inline-flex items-center justify-center rounded-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        </span>
                        <span>Pure Veg</span>
                      </div>

                      <div className="absolute top-3 right-3 bg-[#1C0F10]/90 backdrop-blur-md px-3 py-1 rounded text-xs font-serif font-bold text-[#C7A66A] border border-[#C7A66A]/30">
                        ₹{dish.price}
                      </div>

                      {dish.isChefSpecial && (
                        <div className="absolute bottom-3 left-3 bg-[#6E252C]/90 text-[#C7A66A] text-[10px] uppercase font-bold px-2.5 py-0.5 rounded border border-[#C7A66A]/30">
                          Chef's Special
                        </div>
                      )}
                      {dish.isPopular && !dish.isChefSpecial && (
                        <div className="absolute bottom-3 left-3 bg-[#C7A66A] text-[#1C0F10] text-[10px] uppercase font-bold px-2.5 py-0.5 rounded">
                          Popular Favourite
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <span className="text-[10px] uppercase tracking-widest text-[#C7A66A] font-semibold">
                        {dish.category}
                      </span>
                      <h3 className="font-serif text-xl font-medium text-[#F5EBDD] mt-1 mb-2 group-hover:text-[#C7A66A] transition-colors">
                        {dish.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#F5EBDD]/70 font-light leading-relaxed">
                        {dish.description}
                      </p>
                    </div>
                  </div>

                  {/* Actions: Add to Cart + WhatsApp Direct Message Button */}
                  <div className="p-6 pt-0 space-y-3">
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      {qty === 0 ? (
                        <button
                          onClick={() => onAddToCart(dish)}
                          className="bg-[#6E252C] hover:bg-[#8A323A] text-[#F5EBDD] border border-[#C7A66A]/40 text-xs uppercase tracking-widest font-semibold px-4 py-2 rounded transition-all flex items-center gap-1.5 shadow"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Plate</span>
                        </button>
                      ) : (
                        <button
                          onClick={onOpenCart}
                          className="bg-[#C7A66A] text-[#1C0F10] text-xs uppercase tracking-widest font-bold px-4 py-2 rounded transition-all flex items-center gap-1.5 shadow"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>In Cart ({qty})</span>
                        </button>
                      )}

                      <span className="text-xs font-serif text-[#C7A66A] font-bold">
                        ₹{dish.price}
                      </span>
                    </div>

                    {/* WhatsApp Button: "Ye Mujhe Pasand Hai" */}
                    <a
                      href={getWhatsAppDishUrl(dish)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-md transform hover:-translate-y-0.5 border border-emerald-500/40"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-200" />
                      <span>WhatsApp par ye pasand hai</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </section>

    </div>
  );
}
