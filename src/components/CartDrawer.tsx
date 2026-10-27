import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../data/menuItems';

export interface CartItem {
  item: MenuItem;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onNavigate: (route: string) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onNavigate
}: CartDrawerProps) {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, entry) => sum + entry.item.price * entry.quantity, 0);
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-[#2B1718] border-l border-[#C7A66A]/30 h-full flex flex-col justify-between shadow-2xl p-6 sm:p-8 animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center justify-between pb-5 border-b border-[#C7A66A]/20">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#C7A66A]" />
              <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium">Your Table Selection</h3>
            </div>
            <button 
              onClick={onClose}
              className="p-1 rounded text-[#F5EBDD]/70 hover:text-[#C7A66A] transition-colors"
              aria-label="Close cart"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-[11px] text-[#C7A66A] uppercase tracking-widest mt-2">
            Pure Vegetarian • Demonstration Cart
          </p>
        </div>

        <div className="flex-1 overflow-y-auto my-6 space-y-4 pr-1">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#F5EBDD]/60 space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#C7A66A]/40 stroke-1" />
              <p className="font-serif text-lg text-[#F5EBDD]">Your plate is empty</p>
              <p className="text-xs font-light">Explore our regional curations to add handcrafted dishes.</p>
              <button
                onClick={() => {
                  onClose();
                  onNavigate('/menu');
                }}
                className="mt-2 text-xs uppercase tracking-widest font-semibold text-[#C7A66A] hover:underline"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            cart.map(({ item, quantity }) => (
              <div 
                key={item.id}
                className="bg-[#1C0F10] border border-[#C7A66A]/20 rounded-lg p-3.5 flex items-center gap-3.5"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 rounded object-cover border border-[#C7A66A]/20 shrink-0" 
                />

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 border border-emerald-400 p-0.5 inline-flex items-center justify-center rounded-xs shrink-0">
                      <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                    </span>
                    <h4 className="font-serif text-sm text-[#F5EBDD] truncate">{item.name}</h4>
                  </div>
                  <p className="text-xs font-bold text-[#C7A66A] mt-0.5">₹{item.price}</p>

                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-[#C7A66A]/40 rounded bg-[#2B1718] px-2 py-0.5">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="text-xs text-[#F5EBDD] hover:text-[#C7A66A] p-0.5"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="mx-2.5 text-xs font-semibold text-[#F5EBDD]">{quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="text-xs text-[#F5EBDD] hover:text-[#C7A66A] p-0.5"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="text-red-400/70 hover:text-red-400 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <span className="font-serif text-sm font-semibold text-[#F5EBDD]">
                    ₹{item.price * quantity}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="pt-4 border-t border-[#C7A66A]/20 space-y-3">
            <div className="space-y-1.5 text-xs text-[#F5EBDD]/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Taxes (5% GST)</span>
                <span>₹{gst}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#F5EBDD] pt-2 border-t border-white/5">
                <span>Total Amount</span>
                <span className="text-[#C7A66A] font-serif text-base">₹{total}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onClose();
                  onNavigate('/reservations');
                }}
                className="w-full bg-[#C7A66A] hover:bg-[#DBC08C] text-[#1C0F10] text-xs uppercase tracking-widest font-bold py-3.5 rounded transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Reserve Table for this Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={onClearCart}
                className="w-full py-2 text-[11px] uppercase tracking-wider text-[#F5EBDD]/50 hover:text-red-400 transition-colors text-center"
              >
                Clear Selection
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
