export interface GalleryItem {
  id: string;
  title: string;
  category: 
    | 'Signature Dishes'
    | 'Punjabi'
    | 'Rajasthani'
    | 'South Indian'
    | 'Chinese & Indo-Chinese'
    | 'Street Food & Chaat'
    | 'Desserts & Beverages'
    | 'Our Ambience';
  image: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
  alt: string;
  subtitle?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Paneer Lababdar',
    category: 'Signature Dishes',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    alt: 'Royal Paneer Lababdar served in a traditional copper bowl',
    subtitle: 'Creamy tomato gravy with fresh melon seeds & saffron'
  },
  {
    id: 'gal-2',
    title: 'The Grand Dining Sanctuary',
    category: 'Our Ambience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
    alt: 'Warm brass and velvet dining tables in the grand hall',
    subtitle: 'Warm brass, velvet booths, and candlelit evening setting'
  },
  {
    id: 'gal-3',
    title: 'Heritage Dal Baati Churma',
    category: 'Rajasthani',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    alt: 'Traditional Rajasthani Dal Baati Churma with pure desi ghee',
    subtitle: 'Panchmel dal served alongside golden-baked wheat baatis'
  },
  {
    id: 'gal-4',
    title: 'Slow-Simmered Dal Makhani',
    category: 'Punjabi',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square',
    alt: 'Authentic 24-hour slow cooked Dal Makhani with churned butter',
    subtitle: 'Simmered overnight on charcoal embers with fresh cream'
  },
  {
    id: 'gal-5',
    title: 'Mysore Silk Masala Dosa',
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1200&q=80',
    aspect: 'wide',
    alt: 'Golden crispy South Indian Mysore Masala Dosa with chutneys',
    subtitle: 'Stone-ground crepe smeared with spiced red garlic chutney'
  },
  {
    id: 'gal-6',
    title: 'Truffle-Infused Hakka Noodles',
    category: 'Chinese & Indo-Chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    alt: 'Wok tossed Indo Chinese Hakka noodles with fresh garden vegetables',
    subtitle: 'Charred scallions, julienne carrots, and wild truffle oil'
  },
  {
    id: 'gal-7',
    title: 'Purani Dilli Golgappe & Chaat',
    category: 'Street Food & Chaat',
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape',
    alt: 'Crispy golgappe with spiced mint and tamarind water',
    subtitle: 'Puffed puris filled with spiced potatoes and cooled mint waters'
  },
  {
    id: 'gal-8',
    title: 'Zafrani Rasmalai with Pistachio',
    category: 'Desserts & Beverages',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    alt: 'Spongy cottage cheese patties steeped in saffron milk',
    subtitle: 'Steeped in 24-karat saffron milk with crushed green pistachios'
  },
  {
    id: 'gal-9',
    title: 'Intimate Candlelit Tables',
    category: 'Our Ambience',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square',
    alt: 'Intimate dining corner with warm lighting and fine glassware',
    subtitle: 'Designed for quiet conversations and heartfelt celebrations'
  },
  {
    id: 'gal-10',
    title: 'Kashmiri Zafrani Dum Biryani',
    category: 'Signature Dishes',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
    alt: 'Purdah-sealed vegetable dum biryani with saffron basmati rice',
    subtitle: 'Sealed dough dum cooking with root vegetables and rose water'
  },
  {
    id: 'gal-11',
    title: 'Amritsari Chole & Fluffy Bhature',
    category: 'Punjabi',
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    alt: 'Dark spiced Amritsari chole with aerated balloon bhaturas',
    subtitle: 'Dark kabuli chickpeas spiced with anardana & ajwain bhature'
  },
  {
    id: 'gal-12',
    title: 'Traditional Gatte Ki Sabzi',
    category: 'Rajasthani',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square',
    alt: 'Gram flour dumplings simmered in spiced curd curry',
    subtitle: 'Gram flour cylinders bathed in a fragrant mustard-fenugreek yogurt sauce'
  },
  {
    id: 'gal-13',
    title: 'Steamed Idli Platter & Gunpowder Podi',
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    alt: 'Feather-light steamed rice cakes with sambar and chutneys',
    subtitle: 'Served with roasted dal podi, coconut chutney, and drumstick sambar'
  },
  {
    id: 'gal-14',
    title: 'Crispy Honey Chilli Lotus Stem',
    category: 'Chinese & Indo-Chinese',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape',
    alt: 'Crispy fried lotus stems coated in tangy honey chilli sauce',
    subtitle: 'Wok-glazed lotus chips tossed with toasted sesame seeds and fresh scallions'
  },
  {
    id: 'gal-15',
    title: 'Special Dahi Bhalla Papdi',
    category: 'Street Food & Chaat',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    alt: 'Soft lentil dumplings soaked in sweetened whipped curd and chutneys',
    subtitle: 'Cold whipped dahi, crushed papdi, roasted cumin, and sweet sonth'
  },
  {
    id: 'gal-16',
    title: 'Royal Kesari Matka Kulfi',
    category: 'Desserts & Beverages',
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square',
    alt: 'Slow-reduced milk ice cream served in an earthen clay pot',
    subtitle: 'Dense rabri ice cream infused with cardamom and Kashmiri almonds'
  },
  {
    id: 'gal-17',
    title: 'The Brass Kitchen Hearth',
    category: 'Our Ambience',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    alt: 'Chefs working over charcoal and copper cookware',
    subtitle: 'Where heirloom spice preparations meet modern culinary precision'
  },
  {
    id: 'gal-18',
    title: 'Makki Di Roti & Fresh Sarson Saag',
    category: 'Punjabi',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80',
    aspect: 'wide',
    alt: 'Winter delicacy of mustard greens with corn flatbreads',
    subtitle: 'Hand-mashed mustard leaves served with raw jaggery and white butter'
  },
  {
    id: 'gal-19',
    title: 'Royal Ker Sangri of the Thar',
    category: 'Rajasthani',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80',
    aspect: 'landscape',
    alt: 'Wild desert capers and dried beans tossed in dry spice blend',
    subtitle: 'Wild desert beans braised with dried mango slivers and red chillies'
  },
  {
    id: 'gal-20',
    title: 'Ghee Podi Roast Dosa',
    category: 'South Indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    alt: 'Crispy crepe coated with spicy aromatic lentil podi and pure ghee',
    subtitle: 'Roasted with clarified bilona butter and South Indian gunpowder spice'
  },
  {
    id: 'gal-21',
    title: 'Fiery Chilli Paneer Gravy',
    category: 'Chinese & Indo-Chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1000&q=80',
    aspect: 'square',
    alt: 'Crispy fried paneer cubes tossed in garlic soy and green chilli sauce',
    subtitle: 'Golden-seared cottage cheese cubes in garlic-forward Tangra sauce'
  },
  {
    id: 'gal-22',
    title: 'Mumbai Style Butter Pav Bhaji',
    category: 'Street Food & Chaat',
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=1200&q=80',
    aspect: 'landscape',
    alt: 'Spiced mashed vegetable curry with warm buttered bread buns',
    subtitle: 'Rich tomato-potato mash finished with butter slab, onions, and lemon'
  },
  {
    id: 'gal-23',
    title: 'Warm Gulab Jamun with Kesar Rabri',
    category: 'Desserts & Beverages',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=80',
    aspect: 'portrait',
    alt: 'Hot khoya dumplings soaked in rose syrup served over chilled condensed milk',
    subtitle: 'Warm milk dumplings over a velvety bed of cold reduced saffron cream'
  },
  {
    id: 'gal-24',
    title: 'The Courtyard Mezannine',
    category: 'Our Ambience',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
    aspect: 'wide',
    alt: 'Bespoke high ceilings and architectural archways in dining room',
    subtitle: 'Archways inspired by Indian heritage architecture with warm backlights'
  }
];

export const guestFavourites = [
  {
    title: 'Paneer Lababdar',
    origin: 'Punjabi Signature',
    desc: 'Velvety cottage cheese bathed in rich roasted tomatoes, cardamom, and churned makkhan.',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    tag: 'Rich & Creamy'
  },
  {
    title: 'Shahi Dal Baati Churma',
    origin: 'Rajasthani Classic',
    desc: 'Golden oven-baked baatis drowned in desi ghee, five-lentil panchmel dal, and almond churma.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    tag: 'Royal Heritage'
  },
  {
    title: 'Tangra Chilli Paneer',
    origin: 'Indo-Chinese Favourite',
    desc: 'Wok-crisped cottage cheese tossed with bell peppers, green chillies, and dark garlic soy.',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    tag: 'Wok Mastered'
  }
];

export const worldOfSoulTiles = [
  {
    title: 'Tandoor Aromatics',
    category: 'Kitchen Art',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Evening Candlelight',
    category: 'Atmosphere',
    image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Crisp Griddle Dosas',
    category: 'Coastal Comfort',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Royal Thali Pairings',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Street Tang & Crunch',
    category: 'Bazaar Flavours',
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Saffron Sweets',
    category: 'Confections',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=600&q=80'
  }
];
