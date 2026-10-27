export interface RestaurantContactConfig {
  address: string;
  isAddressConfigured: boolean;
  phone: string;
  isPhoneConfigured: boolean;
  email: string;
  isEmailConfigured: boolean;
  whatsappNumber: string; // e.g., "919876543210" or empty
  hours: {
    lunch: string;
    dinner: string;
    note: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
}

export const contactConfig: RestaurantContactConfig = {
  address: "Jawahar Chowk, Fatehabad, Haryana",
  isAddressConfigured: true,
  phone: "+91 98179-91934",
  isPhoneConfigured: true,
  email: "contact@saffronandsoul.com",
  isEmailConfigured: true,
  whatsappNumber: "919817991934",
  hours: {
    lunch: "12:00 PM – 03:30 PM",
    dinner: "07:00 PM – 11:30 PM",
    note: "All Days Open"
  },
  socialLinks: {
    instagram: "https://instagram.com/im.sam.arorax",
    facebook: "https://instagram.com/im.sam.arorax",
    twitter: "https://instagram.com/im.sam.arorax"
  }
};
