import React, { useState } from 'react';
import { 
  Calendar, Clock, User, CheckCircle2, AlertCircle, ArrowRight, ChevronDown, Cake, HeartHandshake, Briefcase, UtensilsCrossed
} from 'lucide-react';

interface ReservationsPageProps {
  onNavigate: (route: string) => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  specialRequests: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  date?: string;
  time?: string;
  guests?: string;
}

export default function ReservationsPage({ onNavigate }: ReservationsPageProps) {
  const todayDateString = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  const initialFormState: FormState = {
    fullName: '',
    email: '',
    phone: '',
    date: todayDateString,
    time: '7:30 PM',
    guests: '2',
    occasion: 'Regular Dining',
    specialRequests: ''
  };

  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<{
    reference: string;
    data: FormState;
  } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide an email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const phoneClean = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact mobile number.';
    } else if (!phoneRegex.test(phoneClean) && phoneClean.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (!formData.date) {
      newErrors.date = 'Please pick a reservation date.';
    } else if (formData.date < todayDateString) {
      newErrors.date = 'Reservation date cannot be in the past.';
    }

    if (!formData.time) {
      newErrors.time = 'Please select a preferred seating time.';
    }

    const guestNum = parseInt(formData.guests, 10);
    if (!guestNum || guestNum < 1 || guestNum > 12) {
      newErrors.guests = 'Please select between 1 and 12 guests.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const demoRef = `DEMO-SR-${Math.floor(10000 + Math.random() * 90000)}`;
      setConfirmedBooking({
        reference: demoRef,
        data: { ...formData }
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setConfirmedBooking(null);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-[#2B1718] text-[#F5EBDD] font-sans">
      
      {/* 2. HERO SECTION */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=85"
            alt="Warm glowing dining table setting at Saffron and Soul"
            className="w-full h-full object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C0F10]/95 via-[#2B1718]/85 to-[#1C0F10]/90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1718] via-transparent to-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-28 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C7A66A]/40 bg-[#1C0F10]/60 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C7A66A] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C7A66A] uppercase">
              YOUR EXPERIENCE BEGINS HERE
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#F5EBDD] leading-[1.15] mb-6">
            A Table for Your Next <br />
            <span className="italic font-light text-[#C7A66A]">Beautiful Moment.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#F5EBDD]/85 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Whether it's a family dinner, a special celebration, or simply a love for good food, we'd love to help you plan your visit.
          </p>

          <a 
            href="#reservation-form-section"
            className="inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C7A66A]/80 hover:text-[#C7A66A] transition-colors pt-2 group"
          >
            <span>Reserve A Table</span>
            <ChevronDown className="w-4 h-4 text-[#C7A66A] animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 3. RESERVATION FORM & AMBIENCE SECTION */}
      <section id="reservation-form-section" className="py-20 sm:py-28 bg-[#1C0F10] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {confirmedBooking ? (
            <div className="max-w-2xl mx-auto bg-[#2B1718] border-2 border-[#C7A66A] rounded-xl p-8 sm:p-12 shadow-2xl animate-in zoom-in-95 duration-300 text-center relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-[#6E252C] border border-[#C7A66A] flex items-center justify-center text-[#C7A66A] mx-auto mb-6">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">
                DEMO RESERVATION CONFIRMATION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5EBDD] mt-2 mb-2">
                Table Reserved (Demo)
              </h2>
              <p className="text-xs text-[#C7A66A] font-mono tracking-widest uppercase mb-6">
                Reference ID: <span className="font-bold underline">{confirmedBooking.reference}</span>
              </p>

              <div className="bg-[#1C0F10]/80 border border-[#C7A66A]/20 rounded-lg p-6 text-left space-y-3 mb-6 text-sm">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Guest Name:</span>
                  <span className="font-medium text-[#F5EBDD]">{confirmedBooking.data.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Date:</span>
                  <span className="font-medium text-[#F5EBDD]">{confirmedBooking.data.date}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Time Slot:</span>
                  <span className="font-medium text-[#F5EBDD]">{confirmedBooking.data.time}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Party Size:</span>
                  <span className="font-medium text-[#F5EBDD]">{confirmedBooking.data.guests} Guests</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/60">Occasion:</span>
                  <span className="font-medium text-[#F5EBDD]">{confirmedBooking.data.occasion}</span>
                </div>
                {confirmedBooking.data.specialRequests && (
                  <div className="pt-1">
                    <span className="text-white/60 block text-xs">Special Requests:</span>
                    <span className="italic text-xs text-[#F5EBDD]/90 mt-0.5 block">
                      "{confirmedBooking.data.specialRequests}"
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 rounded bg-[#6E252C]/40 border border-[#C7A66A]/40 text-xs text-[#F5EBDD]/90 leading-relaxed mb-8 flex items-start gap-3 text-left">
                <AlertCircle className="w-5 h-5 text-[#C7A66A] shrink-0 mt-0.5" />
                <p>
                  <strong>Notice:</strong> This is a demo reservation. Your table has not been booked with a real restaurant. No data has been saved to a server or external database.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded border border-[#C7A66A] text-[#C7A66A] hover:bg-[#C7A66A] hover:text-[#1C0F10] text-xs uppercase tracking-widest font-semibold transition-all"
                >
                  Make Another Reservation
                </button>
                <button
                  onClick={() => onNavigate('/menu')}
                  className="w-full sm:w-auto px-6 py-3 rounded bg-[#6E252C] hover:bg-[#8A323A] text-[#F5EBDD] text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4 text-[#C7A66A]" />
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-7 bg-[#F5EBDD] text-[#2B1718] p-8 sm:p-12 rounded-xl shadow-2xl border-2 border-[#C7A66A]/40">
                <div className="mb-8">
                  <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#6E252C]">
                    TABLE RESERVATION
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#2B1718] mt-1">
                    Book Your Dining Experience
                  </h2>
                  <p className="text-xs sm:text-sm text-[#2B1718]/70 mt-2 font-normal">
                    Please provide your details below. Required fields are marked with *.
                  </p>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="border-b border-[#2B1718]/15 pb-2">
                    <h3 className="font-serif text-lg font-medium text-[#6E252C] flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>1. Guest Contact Information</span>
                    </h3>
                  </div>

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
                      placeholder="e.g. Aarav Sharma"
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
                        placeholder="aarav@example.com"
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
                        Mobile Number *
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

                  <div className="border-b border-[#2B1718]/15 pb-2 pt-4">
                    <h3 className="font-serif text-lg font-medium text-[#6E252C] flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>2. Reservation Details</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-xs uppercase tracking-wider font-semibold text-[#2B1718] mb-1.5">
                        Date *
                      </label>
                      <input
                        id="date"
                        type="date"
                        min={todayDateString}
                        value={formData.date}
                        onChange={(e) => {
                          setFormData({ ...formData, date: e.target.value });
                          if (errors.date) setErrors({ ...errors, date: undefined });
                        }}
                        className={`w-full bg-white border rounded px-4 py-3 text-sm text-[#2B1718] focus:outline-none focus:ring-1 ${
                          errors.date ? 'border-red-600 focus:ring-red-600' : 'border-[#C7A66A]/50 focus:border-[#6E252C] focus:ring-[#6E252C]'
                        }`}
                      />
                      {errors.date && (
                        <p className="text-xs text-red-600 mt-1 font-medium">{errors.date}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="guests" className="block text-xs uppercase tracking-wider font-semibold text-[#2B1718] mb-1.5">
                        Number of Guests *
                      </label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-white border border-[#C7A66A]/50 rounded px-4 py-3 text-sm text-[#2B1718] focus:outline-none focus:border-[#6E252C]"
                      >
                        {[...Array(12)].map((_, i) => (
                          <option key={i + 1} value={String(i + 1)}>
                            {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#2B1718] mb-2">
                      Preferred Time Slot *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {timeSlots.map(slot => {
                        const isSelected = formData.time === slot;
                        return (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => {
                              setFormData({ ...formData, time: slot });
                              if (errors.time) setErrors({ ...errors, time: undefined });
                            }}
                            className={`py-2 px-2 text-xs rounded font-medium border text-center transition-all ${
                              isSelected
                                ? 'bg-[#6E252C] text-[#F5EBDD] border-[#6E252C] shadow'
                                : 'bg-white text-[#2B1718] border-[#C7A66A]/40 hover:border-[#6E252C]'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                    {errors.time && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.time}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="occasion" className="block text-xs uppercase tracking-wider font-semibold text-[#2B1718] mb-1.5">
                      Occasion (Optional)
                    </label>
                    <select
                      id="occasion"
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full bg-white border border-[#C7A66A]/50 rounded px-4 py-3 text-sm text-[#2B1718] focus:outline-none focus:border-[#6E252C]"
                    >
                      <option value="Regular Dining">Regular Dining</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Family Gathering">Family Gathering</option>
                      <option value="Business Meal">Business Meal</option>
                      <option value="Other">Other Celebration</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="specialRequests" className="block text-xs uppercase tracking-wider font-semibold text-[#2B1718] mb-1.5">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      id="specialRequests"
                      rows={3}
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      placeholder="Dietary preferences (e.g. Jain preparation, low spice), seating requests, or celebration notes."
                      className="w-full bg-white border border-[#C7A66A]/50 rounded px-4 py-3 text-sm text-[#2B1718] focus:outline-none focus:border-[#6E252C]"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#6E252C] hover:bg-[#8A323A] disabled:bg-[#6E252C]/60 text-[#F5EBDD] font-semibold text-xs sm:text-sm uppercase tracking-widest py-4 rounded transition-all shadow-xl flex items-center justify-center gap-2 border border-[#C7A66A]/40"
                    >
                      {isSubmitting ? (
                        <span>Processing Demo Booking...</span>
                      ) : (
                        <>
                          <span>Confirm Demo Reservation</span>
                          <ArrowRight className="w-4 h-4 text-[#C7A66A]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#2B1718] border border-[#C7A66A]/30 rounded-xl overflow-hidden shadow-2xl">
                  <div className="relative h-64 sm:h-72 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                      alt="Warm restaurant dining table"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2B1718] via-transparent to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-[#6E252C]/90 text-[#C7A66A] text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded border border-[#C7A66A]/30">
                      Pure Vegetarian Sanctuary
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium">
                      Atithi Devo Bhava
                    </h3>
                    <p className="text-xs sm:text-sm text-[#F5EBDD]/75 font-light leading-relaxed">
                      "The guest is divine." From your first step into our foyer to the final fragrant sweet finish, our team ensures every seat feels celebrated and unhurried.
                    </p>

                    <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-[#F5EBDD]/80">
                      <div className="flex items-start gap-3">
                        <Clock className="w-4 h-4 text-[#C7A66A] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-[#F5EBDD]">Sample Service Hours (Demo):</p>
                          <p>Lunch: 12:00 PM – 03:30 PM</p>
                          <p>Dinner: 07:00 PM – 11:30 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 4. A SPECIAL OCCASION SECTION */}
      <section className="py-24 sm:py-32 bg-[#2B1718] border-t border-[#C7A66A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#C7A66A]">
              CELEBRATE TOGETHER
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#F5EBDD] mt-3 mb-4">
              Making Room for the Moments That Matter.
            </h2>
            <div className="w-16 h-0.5 bg-[#C7A66A] mx-auto mb-4"></div>
            <p className="text-sm text-[#F5EBDD]/75 font-light leading-relaxed">
              Every celebration is elevated with honest hospitality and regional delicacies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1C0F10] p-8 rounded-lg border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-300 transform hover:-translate-y-1 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-[#6E252C]/40 border border-[#C7A66A]/40 flex items-center justify-center text-[#C7A66A] mb-6 group-hover:scale-110 transition-transform">
                <Cake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mb-3 group-hover:text-[#C7A66A] transition-colors">
                Birthdays &amp; Anniversaries
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EBDD]/75 font-light leading-relaxed">
                Add warmth to your personal milestones with bespoke course arrangements, warm candlelit setups, and celebratory saffron confections.
              </p>
            </div>

            <div className="bg-[#1C0F10] p-8 rounded-lg border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-300 transform hover:-translate-y-1 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-[#6E252C]/40 border border-[#C7A66A]/40 flex items-center justify-center text-[#C7A66A] mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mb-3 group-hover:text-[#C7A66A] transition-colors">
                Family Gatherings
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EBDD]/75 font-light leading-relaxed">
                Large round tables designed for multi-generational comfort — from gentle Jain-friendly options for elders to street-food chaats for children.
              </p>
            </div>

            <div className="bg-[#1C0F10] p-8 rounded-lg border border-[#C7A66A]/20 hover:border-[#C7A66A] transition-all duration-300 transform hover:-translate-y-1 shadow-xl group">
              <div className="w-12 h-12 rounded-full bg-[#6E252C]/40 border border-[#C7A66A]/40 flex items-center justify-center text-[#C7A66A] mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-[#F5EBDD] font-medium mb-3 group-hover:text-[#C7A66A] transition-colors">
                Business &amp; Group Dining
              </h3>
              <p className="text-xs sm:text-sm text-[#F5EBDD]/75 font-light leading-relaxed">
                Quiet acoustic alcoves and coordinated table service suited for executive luncheons and thoughtful conversations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="relative py-28 sm:py-36 bg-[#6E252C] text-[#F5EBDD] overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-full border border-[#C7A66A]/50 bg-[#2B1718]/60 flex items-center justify-center mx-auto mb-6 text-[#C7A66A]">
            <UtensilsCrossed className="w-5 h-5" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
            Good Food Is Better When Shared.
          </h2>

          <p className="text-base sm:text-lg text-[#F5EBDD]/90 max-w-xl mx-auto font-light leading-relaxed mb-10">
            Discover something delicious for your next visit. Pure vegetarian dishes crafted from heirloom regional recipes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              onClick={() => onNavigate('/menu')}
              className="w-full sm:w-auto bg-[#C7A66A] hover:bg-[#DBC08C] text-[#1C0F10] text-xs sm:text-sm tracking-widest uppercase font-bold px-9 py-4 rounded transition-all shadow-2xl flex items-center justify-center gap-2"
            >
              <span>Explore Our Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('/gallery')}
              className="w-full sm:w-auto bg-transparent hover:bg-black/20 text-[#F5EBDD] border border-white/40 text-xs sm:text-sm tracking-widest uppercase font-semibold px-9 py-4 rounded transition-all"
            >
              View Gallery
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
