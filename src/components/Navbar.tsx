import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
  onOpenReservation: () => void;
  onOpenCart: () => void;
  cartCount: number;
}

export default function Navbar({
  currentRoute,
  onNavigate,
  onOpenReservation,
  onOpenCart,
  cartCount
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Menu', href: '/menu' },
    { name: 'Our Story', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(href);
  };

  return (
    <>
      {/* Announcement Bar */}
      <aside aria-label="Announcement" className="bg-[#6E252C] text-[#F5EBDD] text-xs sm:text-sm font-medium tracking-widest uppercase py-2 px-4 text-center border-b border-[#C7A66A]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-[#C7A66A] animate-pulse"></span>
          <span>An Indian Culinary Experience</span>
          <span className="text-[#C7A66A]">•</span>
          <span className="flex items-center gap-1.5 font-semibold text-[#C7A66A]">
            <span className="w-3.5 h-3.5 border border-emerald-400 p-0.5 inline-flex items-center justify-center rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            </span>
            Pure Vegetarian
          </span>
          <span className="text-[#C7A66A] hidden md:inline">•</span>
          <span className="hidden md:inline text-white/80">Reservations Open</span>
        </div>
      </aside>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#2B1718]/95 backdrop-blur-md border-b border-[#C7A66A]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          
          {/* Logo / Wordmark */}
          <a 
            href="/" 
            onClick={(e) => handleLinkClick(e, '/')}
            className="group flex flex-col items-start focus:outline-none focus:ring-1 focus:ring-[#C7A66A] rounded px-1"
          >
            <span className="font-display text-xl sm:text-2xl lg:text-3xl font-bold tracking-widest text-[#F5EBDD] group-hover:text-[#C7A66A] transition-colors">
              SAFFRON <span className="text-[#C7A66A] font-serif italic">&amp;</span> SOUL
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#C7A66A]/80 font-medium -mt-1">
              Pure Vegetarian • Multi-Cuisine
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`text-xs uppercase tracking-widest font-semibold transition-all py-1 relative ${
                    isActive
                      ? 'text-[#C7A66A] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#C7A66A]'
                      : 'text-[#F5EBDD]/85 hover:text-[#C7A66A]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Actions: Cart + Reserve CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Cart Button with Count Badge */}
            <button
              onClick={onOpenCart}
              aria-label={`Shopping Cart with ${cartCount} items`}
              className="relative p-2.5 rounded-full bg-[#1C0F10] border border-[#C7A66A]/30 hover:border-[#C7A66A] text-[#F5EBDD] hover:text-[#C7A66A] transition-all"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#6E252C] border border-[#C7A66A] text-[#F5EBDD] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Reserve a Table CTA */}
            <button
              onClick={onOpenReservation}
              className="hidden sm:inline-flex bg-[#C7A66A] hover:bg-[#DBC08C] text-[#1C0F10] text-xs uppercase tracking-widest font-bold px-5 py-2.5 rounded transition-all shadow-md transform hover:-translate-y-0.5 border border-[#C7A66A]"
            >
              Reserve a Table
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-[#F5EBDD] p-2 hover:text-[#C7A66A] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>

          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1C0F10] border-b border-[#C7A66A]/30 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-3 duration-200">
            {navLinks.map((item) => {
              const isActive = currentRoute === item.href;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`block text-base tracking-wider uppercase font-serif py-2 border-b border-white/5 transition-colors ${
                    isActive ? 'text-[#C7A66A] font-semibold' : 'text-[#F5EBDD] hover:text-[#C7A66A]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full bg-[#C7A66A] text-[#1C0F10] text-xs tracking-widest uppercase font-bold py-3.5 rounded text-center shadow-md"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
