import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer, { CartItem } from './components/CartDrawer';
import FoodGuideModal from './components/FoodGuideModal';
import SEOHead from './components/SEOHead';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ReservationsPage from './pages/ReservationsPage';
import ContactPage from './pages/ContactPage';
import { MenuItem } from './data/menuItems';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string>(() => {
    return window.location.pathname || '/';
  });
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('saffron_soul_cart');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // safe fallback
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem('saffron_soul_cart', JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  const handleAddToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(entry => entry.item.id === item.id);
      if (existing) {
        return prev.map(entry =>
          entry.item.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev =>
      prev
        .map(entry => {
          if (entry.item.id === id) {
            const nextQty = entry.quantity + delta;
            return nextQty > 0 ? { ...entry, quantity: nextQty } : null;
          }
          return entry;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart(prev => prev.filter(entry => entry.item.id !== id));
  };

  const handleClearCart = () => setCart([]);

  const totalCartCount = cart.reduce((total, entry) => total + entry.quantity, 0);

  const navigateTo = (route: string) => {
    window.history.pushState({}, '', route);
    setCurrentRoute(route.split('?')[0]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const render404 = () => (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">404 ERROR</span>
      <h1 className="font-serif text-4xl sm:text-6xl text-[#F5EBDD] mt-2 mb-4">Table Not Found</h1>
      <p className="text-sm sm:text-base text-[#F5EBDD]/70 max-w-md mx-auto mb-8 font-light">
        The corridor you are looking for does not exist in our sanctuary. Let us guide you back to our hearth.
      </p>
      <button
        onClick={() => navigateTo('/')}
        className="bg-[#C7A66A] hover:bg-[#DBC08C] text-[#1C0F10] text-xs uppercase tracking-widest font-bold px-8 py-3.5 rounded transition-all inline-flex items-center gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#2B1718] text-[#F5EBDD] font-sans antialiased selection:bg-[#C7A66A] selection:text-[#2B1718]">
      
      {/* Dynamic SEO & Metadata */}
      <SEOHead currentRoute={currentRoute} />

      {/* Global Shared Navbar */}
      <Navbar 
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenReservation={() => navigateTo('/reservations')}
        onOpenCart={() => setCartDrawerOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Multi-Page Route Switcher */}
      <main id="main-content">
        {currentRoute === '/' ? (
          <HomePage 
            onNavigate={navigateTo}
            onOpenReservation={() => navigateTo('/reservations')}
          />
        ) : currentRoute === '/menu' ? (
          <MenuPage 
            onNavigate={navigateTo}
            onAddToCart={handleAddToCart}
            cart={cart}
            onOpenCart={() => setCartDrawerOpen(true)}
          />
        ) : currentRoute === '/about' ? (
          <AboutPage 
            onNavigate={navigateTo}
            onOpenReservationModal={() => navigateTo('/reservations')}
          />
        ) : currentRoute === '/gallery' ? (
          <GalleryPage 
            onNavigate={navigateTo}
            onOpenReservationModal={() => navigateTo('/reservations')}
          />
        ) : currentRoute === '/reservations' ? (
          <ReservationsPage 
            onNavigate={navigateTo}
          />
        ) : currentRoute === '/contact' ? (
          <ContactPage 
            onNavigate={navigateTo}
          />
        ) : (
          render404()
        )}
      </main>

      {/* Global Shared Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Persistent Client-Side Cart Drawer */}
      <CartDrawer 
        isOpen={cartDrawerOpen} 
        onClose={() => setCartDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onNavigate={navigateTo}
      />

      {/* Rule-Based Saffron Food Guide */}
      <FoodGuideModal onNavigate={navigateTo} />

    </div>
  );
}
