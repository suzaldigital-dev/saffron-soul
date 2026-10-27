import React, { useState } from 'react';
import { Sparkles, X, ArrowRight, Utensils } from 'lucide-react';
import { menuItems, MenuItem } from '../data/menuItems';

interface FoodGuideModalProps {
  onNavigate: (route: string) => void;
}

interface Message {
  sender: 'guide' | 'user';
  text: string;
  recommendations?: MenuItem[];
  routeLink?: string;
  routeLabel?: string;
}

export default function FoodGuideModal({ onNavigate }: FoodGuideModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'guide',
      text: "Namaste! I am your Saffron Food Guide. I can help recommend vegetarian specialities, suggest desserts, or help you navigate our 9 regional cuisines."
    }
  ]);

  const handleSuggestion = (prompt: string) => {
    const newMessages: Message[] = [...messages, { sender: 'user', text: prompt }];

    let response: Message = {
      sender: 'guide',
      text: "Explore our diverse regional culinary offerings on the menu page!"
    };

    const lower = prompt.toLowerCase();

    if (lower.includes('punjabi')) {
      const dishes = menuItems.filter(m => m.category === 'Punjabi').slice(0, 3);
      response = {
        sender: 'guide',
        text: "For authentic Punjabi richness, our guests love our 24-hour slow-cooked Dal Makhani, Paneer Butter Masala, and Amritsari Chole Kulche.",
        recommendations: dishes,
        routeLink: '/menu?category=Punjabi',
        routeLabel: 'View All Punjabi Delicacies'
      };
    } else if (lower.includes('favourite') || lower.includes('special')) {
      const dishes = menuItems.filter(m => m.isChefSpecial).slice(0, 3);
      response = {
        sender: 'guide',
        text: "Here are 3 of our chef-selected pure-vegetarian masterworks, prepared with heirloom ground spices and slow embers:",
        recommendations: dishes,
        routeLink: '/menu',
        routeLabel: 'Explore Complete Menu'
      };
    } else if (lower.includes('dessert') || lower.includes('sweet')) {
      const dishes = menuItems.filter(m => m.category === 'Desserts & Beverages').slice(0, 3);
      response = {
        sender: 'guide',
        text: "Nothing celebrates an Indian meal better than sweet nectars. Here are our top sweet recommendations:",
        recommendations: dishes,
        routeLink: '/menu?category=' + encodeURIComponent('Desserts & Beverages'),
        routeLabel: 'View Desserts & Beverages'
      };
    } else if (lower.includes('explore')) {
      response = {
        sender: 'guide',
        text: "Saffron & Soul presents 9 distinct culinary territories: Punjabi, Rajasthani, South Indian, Indo-Chinese, Fast Food, Gujarati, Mughlai, Street Food, and Desserts. All 100% pure vegetarian.",
        routeLink: '/menu',
        routeLabel: 'Open Interactive Menu'
      };
    }

    setMessages([...newMessages, response]);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Saffron Food Guide"
        className="fixed bottom-6 right-6 z-40 bg-[#6E252C] hover:bg-[#8A323A] text-[#C7A66A] p-4 rounded-full shadow-2xl border-2 border-[#C7A66A] flex items-center justify-center transform hover:scale-105 transition-all duration-300"
      >
        <Sparkles className="w-6 h-6 animate-pulse" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[92vw] sm:w-96 max-h-[540px] bg-[#2B1718] border-2 border-[#C7A66A]/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          <div className="bg-[#1C0F10] p-4 border-b border-[#C7A66A]/20 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#6E252C] border border-[#C7A66A]/40 flex items-center justify-center text-[#C7A66A]">
                <Utensils className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-base text-[#F5EBDD] font-medium leading-none">
                  Saffron Food Guide
                </h4>
                <p className="text-[10px] text-[#C7A66A] uppercase tracking-wider mt-1">
                  Rule-based Culinary Assistant
                </p>
              </div>
            </div>

            <button 
              onClick={() => setIsOpen(false)}
              className="text-[#F5EBDD]/60 hover:text-[#C7A66A] p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs leading-relaxed">
            {messages.map((m, idx) => (
              <div 
                key={idx}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={`p-3 rounded-xl max-w-[85%] ${
                    m.sender === 'user'
                      ? 'bg-[#6E252C] text-[#F5EBDD] border border-[#C7A66A]/30 rounded-tr-none'
                      : 'bg-[#1C0F10] text-[#F5EBDD]/90 border border-white/5 rounded-tl-none'
                  }`}
                >
                  <p>{m.text}</p>

                  {m.recommendations && (
                    <div className="mt-3 space-y-2 pt-2 border-t border-white/10">
                      {m.recommendations.map(dish => (
                        <div key={dish.id} className="flex items-center gap-2 bg-[#2B1718] p-1.5 rounded border border-[#C7A66A]/20">
                          <img src={dish.image} alt={dish.name} className="w-8 h-8 rounded object-cover" />
                          <div className="flex-1 min-w-0">
                            <p className="font-serif text-[11px] text-[#F5EBDD] truncate">{dish.name}</p>
                            <p className="text-[10px] text-[#C7A66A]">₹{dish.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {m.routeLink && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onNavigate(m.routeLink!);
                      }}
                      className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#C7A66A] hover:underline"
                    >
                      <span>{m.routeLabel}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-[#1C0F10] border-t border-white/10">
            <p className="text-[10px] uppercase tracking-wider text-[#C7A66A] font-semibold mb-2">
              Suggested Questions
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Recommend a Punjabi dish',
                'Show vegetarian favourites',
                'Suggest desserts',
                'Help me explore the menu'
              ].map(chip => (
                <button
                  key={chip}
                  onClick={() => handleSuggestion(chip)}
                  className="bg-[#2B1718] hover:bg-[#6E252C] text-[#F5EBDD] border border-[#C7A66A]/30 px-2.5 py-1 rounded text-[11px] transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}
    </>
  );
}
