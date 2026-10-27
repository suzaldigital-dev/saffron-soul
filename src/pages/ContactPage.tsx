import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, MessageCircle, ChevronDown, ChevronUp, CheckCircle2, AlertCircle, ArrowRight, Send, ExternalLink
} from 'lucide-react';
import { contactConfig } from '../config/contactConfig';

interface ContactPageProps {
  onNavigate: (route: string) => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const initialFormState: FormState = {
    fullName: '',
    email: '',
    phone: '',
    subject: 'Menu Inquiry',
    message: ''
  };

  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const subjects = [
    'Menu Inquiry',
    'Reservation Question',
    'Group Dining',
    'Feedback',
    'General Inquiry',
    'Other'
  ];

  const faqs = [
    {
      question: 'Where can I find your menu?',
      answer: (
        <span>
          You can browse our complete regional collection directly on our{' '}
          <button
            onClick={() => onNavigate('/menu')}
            className="text-[#C7A66A] underline font-semibold hover:text-[#F5EBDD] transition-colors"
          >
            interactive Our Menu page
          </button>
          , featuring 50+ pure-vegetarian preparations across 9 regional cuisines.
        </span>
      )
    },
    {
      question: 'Can I reserve a table online?',
      answer: (
        <span>
          Yes, you can plan your upcoming visit through our{' '}
          <button
            onClick={() => onNavigate('/reservations')}
            className="text-[#C7A66A] underline font-semibold hover:text-[#F5EBDD] transition-colors"
          >
            Reservations page
          </button>
          . Select your date, preferred dining time, and guest count.
        </span>
      )
    },
    {
      question: 'Do you offer vegetarian food?',
      answer: (
        <span>
          Saffron &amp; Soul is proudly 100% pure vegetarian. Our entire culinary repertoire is crafted without meat, fish, or eggs, following strict vegetarian purity.
        </span>
      )
    },
    {
      question: 'Can I contact you about group dining?',
      answer: (
        <span>
          We accommodate group gatherings, family reunions, and festive banquets. Please select "Group Dining" in the inquiry form above with your prospective date and group size.
        </span>
      )
    },
    {
      question: 'How can I share feedback?',
      answer: (
        <span>
          We welcome guest impressions. You can choose "Feedback" in our contact form or speak directly with our floor manager during your dining experience.
        </span>
      )
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (formData.phone.trim()) {
      const phoneClean = formData.phone.replace(/[\s\-\+\(\)]/g, '');
      const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
      if (!phoneRegex.test(phoneClean) && phoneClean.length !== 10) {
        newErrors.phone = 'Please provide a valid 10-digit mobile number.';
      }
    }

    if (!formData.subject) {
      newErrors.subject = 'Please select a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setIsSubmitted(false);
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Saffron & Soul! I'd like to ask about your menu and dining experience."
  );
  const whatsappUrl = contactConfig.whatsappNumber
    ? `https://wa.me/${contactConfig.whatsappNumber}?text=${whatsappMessage}`
    : null;

  return (
    <div className="min-h-screen bg-[#2B1718] text-[#F5EBDD] font-sans">
      
      {/* 2. HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=85"
            alt="Warm glowing dining table at Saffron & Soul"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C0F10]/95 via-[#2B1718]/85 to-[#1C0F10]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1718] via-transparent to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A66A]/40 bg-[#1C0F10]/60 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C7A66A] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C7A66A] uppercase">
              WE'D LOVE TO HEAR FROM YOU
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5EBDD] leading-[1.15] mb-6">
            Let's Make Something <br />
            <span className="italic font-light text-[#C7A66A]">Delicious Happen.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#F5EBDD]/85 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Questions about our menu, planning a visit, or simply want to say hello? We're here to help.
          </p>

          <a 
            href="#contact-cards-section"
            className="inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C7A66A]/80 hover:text-[#C7A66A] transition-colors pt-2 group"
          >
            <span>Reach Out</span>
            <ChevronDown className="w-4 h-4 text-[#C7A66A] animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 3. CONTACT INFORMATION CARDS */}
      <section id="contact-cards-section" className="py-16 sm:py-24 bg-[#1C0F10] border-b border-[#C7A66A]/20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#2B1718] p-8 rounded-xl border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#6E252C]/40 border border-[#C7A66A]/40 flex items-center justify-center text-[#C7A66A] mb-6 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mb-2 group-hover:text-[#C7A66A] transition-colors">
                  Visit Us
                </h3>
                <p className="text-sm text-[#F5EBDD]/70 font-light leading-relaxed">
                  {contactConfig.address}
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-[#C7A66A] font-semibold">
                  Location details pending
                </span>
              </div>
            </div>

            <div className="bg-[#2B1718] p-8 rounded-xl border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#6E252C]/40 border border-[#C7A66A]/40 flex items-center justify-center text-[#C7A66A] mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mb-2 group-hover:text-[#C7A66A] transition-colors">
                  Call Us
                </h3>
                <p className="text-sm text-[#F5EBDD]/70 font-light leading-relaxed">
                  {contactConfig.phone}
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-[#C7A66A] font-semibold">
                  Telephone helpline pending
                </span>
              </div>
            </div>

            <div className="bg-[#2B1718] p-8 rounded-xl border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#6E252C]/40 border border-[#C7A66A]/40 flex items-center justify-center text-[#C7A66A] mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mb-2 group-hover:text-[#C7A66A] transition-colors">
                  Write to Us
                </h3>
                <p className="text-sm text-[#F5EBDD]/70 font-light leading-relaxed">
                  {contactConfig.email}
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-white/5">
                <span className="text-[11px] uppercase tracking-wider text-[#C7A66A] font-semibold">
                  Official inbox pending
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FORM & WHATSAPP SECTION */}
      <section className="py-20 sm:py-28 bg-[#2B1718]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-7 bg-[#F5EBDD] text-[#2B1718] p-8 sm:p-12 rounded-xl shadow-2xl border-2 border-[#C7A66A]/40">
              {isSubmitted ? (
                <div className="text-center py-10 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#6E252C] border border-[#C7A66A] flex items-center justify-center text-[#C7A66A] mx-auto mb-6">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>

                  <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#6E252C]">
                    INQUIRY RECEIVED (DEMO)
                  </span>
                  <h3 className="font-serif text-3xl font-medium text-[#2B1718] mt-2 mb-3">
                    Thank You, {formData.fullName}!
                  </h3>

                  <div className="p-4 rounded bg-[#6E252C]/10 border border-[#6E252C]/20 text-xs sm:text-sm text-[#2B1718]/85 leading-relaxed max-w-lg mx-auto mb-8 text-left">
                    <p className="font-semibold mb-1 text-[#6E252C] flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Frontend Demonstration Notice
                    </p>
                    <p>
                      Demo submission complete. This form is not connected to a live inbox, so your message has not been sent. No personal data has been logged or saved.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 rounded border border-[#6E252C] text-[#6E252C] hover:bg-[#6E252C] hover:text-[#F5EBDD] text-xs uppercase tracking-widest font-semibold transition-all"
                    >
                      Send Another Message
                    </button>
                    <button
                      onClick={() => onNavigate('/menu')}
                      className="w-full sm:w-auto px-6 py-3 rounded bg-[#6E252C] text-[#F5EBDD] hover:bg-[#8A323A] text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2"
                    >
                      <span>Explore Our Menu</span>
                      <ArrowRight className="w-4 h-4 text-[#C7A66A]" />
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#6E252C]">
                      GET IN TOUCH
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#2B1718] mt-1">
                      Send Us an Inquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-[#2B1718]/70 mt-2 font-normal">
                      Have a query about dishes, reservations, or events? Fill in the details below.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div>
                      <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-[#2B1718] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. Meera Singhania"
                        className={`w-full bg-white border rounded px-4 py-3 text-sm text-[#2B1718] focus:outline-none focus:ring-1 ${
                          errors.fullName ? 'border-red-600 focus:ring-red-600' : 'border-[#C7A66A]/50 focus:border-[#6E252C] focus:ring-[#6E252C]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-[#2B1718] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="meera@example.com"
                          className={`w-full bg-white border rounded px-4 py-3 text-sm text-[#2B1718] focus:outline-none focus:ring-1 ${
                            errors.email ? 'border-red-600 focus:ring-red-600' : 'border-[#C7A66A]/50 focus:border-[#6E252C] focus:ring-[#6E252C]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-[#2B1718] mb-1.5">
                          Mobile Number (Optional)
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          placeholder="9876543210"
                          className={`w-full bg-white border rounded px-4 py-3 text-sm text-[#2B1718] focus:outline-none focus:ring-1 ${
                            errors.phone ? 'border-red-600 focus:ring-red-600' : 'border-[#C7A66A]/50 focus:border-[#6E252C] focus:ring-[#6E252C]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-600 mt-1 font-medium">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs uppercase tracking-wider font-semibold text-[#2B1718] mb-1.5">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white border border-[#C7A66A]/50 rounded px-4 py-3 text-sm text-[#2B1718] focus:outline-none focus:border-[#6E252C]"
                      >
                        {subjects.map((sub) => (
                          <option key={sub} value={sub}>{sub}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <label htmlFor="message" className="text-xs uppercase tracking-wider font-semibold text-[#2B1718]">
                          Message *
                        </label>
                        <span className="text-[11px] text-[#2B1718]/60">
                          {formData.message.length} / 500 characters
                        </span>
                      </div>
                      <textarea
                        id="message"
                        rows={4}
                        maxLength={500}
                        value={formData.message}
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Please describe how we can assist you..."
                        className={`w-full bg-white border rounded px-4 py-3 text-sm text-[#2B1718] focus:outline-none focus:ring-1 ${
                          errors.message ? 'border-red-600 focus:ring-red-600' : 'border-[#C7A66A]/50 focus:border-[#6E252C] focus:ring-[#6E252C]'
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.message}</p>
                      )}
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#6E252C] hover:bg-[#8A323A] disabled:bg-[#6E252C]/60 text-[#F5EBDD] font-semibold text-xs sm:text-sm uppercase tracking-widest py-4 rounded transition-all shadow-xl flex items-center justify-center gap-2 border border-[#C7A66A]/40"
                      >
                        {isSubmitting ? (
                          <span>Processing Inquiry...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-[#C7A66A]" />
                            <span>Submit Demo Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#1C0F10] border border-[#C7A66A]/30 rounded-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-5">
                  <MessageCircle className="w-6 h-6" />
                </div>

                <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mb-2">
                  Prefer a Quick Conversation?
                </h3>
                <p className="text-xs sm:text-sm text-[#F5EBDD]/75 font-light leading-relaxed mb-6">
                  Use WhatsApp to ask about our menu or plan your next visit.
                </p>

                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-widest py-3.5 px-6 rounded transition-all shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="p-4 rounded bg-[#2B1718] border border-[#C7A66A]/20 text-center">
                    <p className="text-xs uppercase tracking-wider text-[#C7A66A] font-medium">
                      WhatsApp contact to be configured
                    </p>
                    <p className="text-[11px] text-white/50 mt-1">
                      Configure phone details in <code className="text-[#C7A66A]">contactConfig.ts</code> to enable instant messaging.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 sm:py-32 bg-[#1C0F10] border-t border-[#C7A66A]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">
              FREQUENTLY ASKED
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EBDD] mt-3 mb-4">
              Common Questions
            </h2>
            <div className="w-16 h-0.5 bg-[#C7A66A] mx-auto mb-4"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#2B1718] rounded-lg border border-[#C7A66A]/20 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 flex items-center justify-between text-left hover:text-[#C7A66A] transition-colors focus:outline-none"
                  >
                    <span className="font-serif text-lg sm:text-xl font-medium text-[#F5EBDD]">
                      {faq.question}
                    </span>
                    <span className="text-[#C7A66A] ml-4 shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#F5EBDD]/75 font-light leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
