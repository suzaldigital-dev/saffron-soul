export interface MenuItem {
  id: string;
  name: string;
  category: 
    | 'Punjabi'
    | 'Rajasthani'
    | 'South Indian'
    | 'Chinese & Indo-Chinese'
    | 'Fast Food'
    | 'Gujarati'
    | 'Mughlai & North Indian'
    | 'Street Food & Chaat'
    | 'Desserts & Beverages';
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  spiceLevel?: 1 | 2 | 3; // 1: Mild, 2: Medium, 3: Hot
}

export const menuItems: MenuItem[] = [
  // 1. Punjabi (6 dishes)
  {
    id: 'pun-1',
    name: 'Paneer Butter Masala',
    category: 'Punjabi',
    description: 'Cubes of fresh malai paneer simmered in a velvety roasted tomato, cashew, and churned makkhan gravy.',
    price: 480,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'pun-2',
    name: 'Heritage Dal Makhani',
    category: 'Punjabi',
    description: 'Twenty-four-hour slow-cooked black urad lentils, slow-simmered over charcoal embers with white butter.',
    price: 440,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 1
  },
  {
    id: 'pun-3',
    name: 'Amritsari Chole Kulche',
    category: 'Punjabi',
    description: 'Dark spiced kabuli chickpeas braised with anardana, served alongside flaky herb-sprinkled tandoor kulchas.',
    price: 390,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: 'pun-4',
    name: 'Grand Chole Bhature',
    category: 'Punjabi',
    description: 'Aromatic spicy Punjabi chickpeas served with two golden puffed bhaturas, pickled shallots, and mint chutney.',
    price: 410,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: 'pun-5',
    name: 'Sarson Da Saag & Makki Di Roti',
    category: 'Punjabi',
    description: 'Winter-harvest hand-crushed mustard and bathua greens, paired with stone-ground corn flatbreads, jaggery, and white butter.',
    price: 460,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: 'pun-6',
    name: 'Punjabi Kadhi Pakora',
    category: 'Punjabi',
    description: 'Spiced curd-gram flour soup tempered with fenugreek and whole red chillies, studded with melt-in-mouth onion pakoras.',
    price: 380,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 2
  },

  // 2. Rajasthani (6 dishes)
  {
    id: 'raj-1',
    name: 'Dal Baati Churma',
    category: 'Rajasthani',
    description: 'Golden clay-baked wheat dumplings dipped in warm bilona cow ghee, served with panchmel dal and almond-cardamom churma.',
    price: 620,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: 'raj-2',
    name: 'Marwari Gatte Ki Sabzi',
    category: 'Rajasthani',
    description: 'Steamed spiced gram-flour cylinders simmered in a velvet yogurt curry scented with roasted cumin and fenugreek.',
    price: 440,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: 'raj-3',
    name: 'Royal Ker Sangri',
    category: 'Rajasthani',
    description: 'Wild dried desert beans and berries braised in cold-pressed mustard oil with dry mango slivers and Mathania chillies.',
    price: 580,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: 'raj-4',
    name: 'Jodhpuri Rajasthani Kadhi',
    category: 'Rajasthani',
    description: 'Tangy and spiced buttermilk broth tempered with hing, cloves, and whole coriander seeds, served piping hot.',
    price: 360,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 2
  },
  {
    id: 'raj-5',
    name: 'Bajre Ki Roti with Lehsun Chutney',
    category: 'Rajasthani',
    description: 'Hand-patted pearl-millet flatbread served with pure desi ghee and fiery crushed stone-ground garlic chutney.',
    price: 310,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 3
  },
  {
    id: 'raj-6',
    name: 'Shahi Rajasthani Thali',
    category: 'Rajasthani',
    description: 'The royal grand feast: Baati, Churma, Panchmel Dal, Gatte, Ker Sangri, Bajra Roti, Boondi Raita, and Gulab Jamun.',
    price: 850,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2
  },

  // 3. South Indian (6 dishes)
  {
    id: 'sou-1',
    name: 'Classic Masala Dosa',
    category: 'South Indian',
    description: 'Crisp golden fermented rice-lentil crepe stuffed with spiced mustard-seed potatoes, served with trio of fresh chutneys and sambar.',
    price: 340,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'sou-2',
    name: 'Mysore Silk Masala Dosa',
    category: 'South Indian',
    description: 'Crispy cast-iron griddle crepe coated inside with fiery red garlic chutney and tempered turmeric potatoes.',
    price: 380,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: 'sou-3',
    name: 'Steamed Idli Sambar Platter',
    category: 'South Indian',
    description: 'Four feather-light steamed rice-lentil cakes soaked in piping hot shallot drumstick sambar with coconut chutney.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'sou-4',
    name: 'Crispy Medu Vada',
    category: 'South Indian',
    description: 'Golden, crisp-on-the-outside, spongy-inside spiced urad dal fritters with fresh peppercorns and curry leaves.',
    price: 310,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'sou-5',
    name: 'Onion & Tomato Uttapam',
    category: 'South Indian',
    description: 'Thick fermented pancake topped with juicy vine tomatoes, shallots, green chillies, and fresh coriander, served with podi.',
    price: 330,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'sou-6',
    name: 'South Indian Degree Filter Coffee',
    category: 'South Indian',
    description: 'Aromatic chicory and plantation coffee brew frothed in authentic brass davara and tumbler with creamy hot milk.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },

  // 4. Chinese & Indo-Chinese (6 dishes)
  {
    id: 'chi-1',
    name: 'Veg Hakka Noodles',
    category: 'Chinese & Indo-Chinese',
    description: 'Wok-tossed hand-pulled noodles with crisp shredded cabbage, bell peppers, scallions, and dark soy.',
    price: 390,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'chi-2',
    name: 'Schezwan Fried Rice',
    category: 'Chinese & Indo-Chinese',
    description: 'Aromatic Jasmine rice wok-tossed in artisanal fiery red pepper Sichuan paste with baby corn and French beans.',
    price: 410,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 3
  },
  {
    id: 'chi-3',
    name: 'Veg Manchurian Gravy',
    category: 'Chinese & Indo-Chinese',
    description: 'Crispy minced vegetable dumplings immersed in a glossy, dark soy, ginger, and green coriander reduction.',
    price: 420,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: 'chi-4',
    name: 'Tangra Chilli Paneer',
    category: 'Chinese & Indo-Chinese',
    description: 'Crispy batter-coated cottage cheese chunks tossed with bell peppers, green chillies, garlic, and dark soy.',
    price: 460,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: 'chi-5',
    name: 'Crispy Golden Spring Rolls',
    category: 'Chinese & Indo-Chinese',
    description: 'Hand-rolled delicate pastry stuffed with glass noodles and wok-charred vegetables, served with sweet chilli dip.',
    price: 350,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'chi-6',
    name: 'Honey Chilli Potato',
    category: 'Chinese & Indo-Chinese',
    description: 'Crispy finger potato sticks tossed in sweet honey, roasted sesame seeds, and crushed Sichuan chilli sauce.',
    price: 340,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 2
  },

  // 5. Fast Food (6 dishes)
  {
    id: 'fst-1',
    name: 'Artisanal Veg Burger',
    category: 'Fast Food',
    description: 'Crispy potato-pea cutlet, aged cheddar melt, pickled gherkins, and smoked tandoori mayo in a toasted brioche bun.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'fst-2',
    name: 'Classic Margherita Pizza',
    category: 'Fast Food',
    description: 'Hand-stretched sourdough crust with San Marzano tomato reduction, buffalo mozzarella, and fresh sweet basil leaves.',
    price: 480,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'fst-3',
    name: 'Gourmet Farmhouse Pizza',
    category: 'Fast Food',
    description: 'Loaded with bell peppers, sweet corn, black olives, grilled paneer cubes, red onions, and mozzarella blend.',
    price: 540,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'fst-4',
    name: 'Bombay Grilled Club Sandwich',
    category: 'Fast Food',
    description: 'Triple-decker bread stuffed with sliced potatoes, beetroot, cucumber, Amul cheese, and vibrant mint-coriander chutney.',
    price: 310,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'fst-5',
    name: 'Peri Peri Crinkle Fries',
    category: 'Fast Food',
    description: 'Crispy golden potato crinkles tossed in our house-blend African-Goan spicy bird-eye peri peri seasoning.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 2
  },
  {
    id: 'fst-6',
    name: 'White Sauce Penne Alfredo',
    category: 'Fast Food',
    description: 'Al dente penne bathed in rich parmesan cream sauce, tossed with sautéed mushrooms, broccoli florets, and cracked black pepper.',
    price: 460,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 1
  },

  // 6. Gujarati (6 dishes)
  {
    id: 'guj-1',
    name: 'Nylon Khaman Dhokla',
    category: 'Gujarati',
    description: 'Steamed spongy gram-flour savoury cakes tempered with mustard seeds, green chillies, fresh grated coconut, and coriander.',
    price: 260,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'guj-2',
    name: 'Delicate Spiced Khandvi',
    category: 'Gujarati',
    description: 'Silken rolled gram flour sheets cooked in seasoned buttermilk, tempered with curry leaves, asafoetida, and sesame.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 1
  },
  {
    id: 'guj-3',
    name: 'Methi Thepla with Chhundo',
    category: 'Gujarati',
    description: 'Whole wheat flatbreads kneaded with fresh fenugreek leaves, yogurt, and spices, served with sweet-tangy mango pickle.',
    price: 280,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'guj-4',
    name: 'Authentic Gujarati Sweet Kadhi',
    category: 'Gujarati',
    description: 'Light yogurt soup subtly sweetened with organic jaggery, spiked with ginger, cinnamon, and cloves.',
    price: 340,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'guj-5',
    name: 'Surti Undhiyu',
    category: 'Gujarati',
    description: 'Ancestral winter casserole of seasonal root tubers, baby brinjals, muthias, and flat green beans cooked with aromatic spices.',
    price: 520,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: 'guj-6',
    name: 'Kathiyawadi Grand Thali',
    category: 'Gujarati',
    description: 'Dhokla, Undhiyu, Sev Tameta, Sweet Kadhi, Ringan No Olo, 3 Theplas, Steamed Rice, Buttermilk, and Shrikhand.',
    price: 780,
    image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },

  // 7. Mughlai & North Indian (6 dishes)
  {
    id: 'mug-1',
    name: 'Royal Paneer Lababdar',
    category: 'Mughlai & North Indian',
    description: 'Tender cottage cheese bathed in roasted melon seed, onion-tomato, and saffron butter reduction.',
    price: 520,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: 'mug-2',
    name: 'Shahi Khoya Paneer',
    category: 'Mughlai & North Indian',
    description: 'Luxurious cashew and khoya white sauce infused with green cardamom, mace, and royal saffron strands.',
    price: 540,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'mug-3',
    name: 'Mughlai Malai Kofta',
    category: 'Mughlai & North Indian',
    description: 'Handcrafted paneer-khoya dumplings filled with pistachios and raisins, resting in a golden cashew velvet sauce.',
    price: 490,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'mug-4',
    name: 'Kashmiri Zafrani Veg Dum Biryani',
    category: 'Mughlai & North Indian',
    description: 'Aged basmati rice sealed in earthen handi with baby carrots, beans, cottage cheese, fried shallots, and kewra water.',
    price: 590,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: 'mug-5',
    name: 'Tandoori Malai Paneer Tikka',
    category: 'Mughlai & North Indian',
    description: 'Thick marinated cottage cheese blocks skewered and roasted over coal embers, served with mint yoghurt dip.',
    price: 480,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'mug-6',
    name: 'Butter Roomali Roti (Set of 2)',
    category: 'Mughlai & North Indian',
    description: 'Paper-thin handkerchief bread tossed on an overturned dome kadhai, brushed with clarified desi butter.',
    price: 160,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 1
  },

  // 8. Street Food & Chaat (6 dishes)
  {
    id: 'str-1',
    name: 'Purani Dilli Golgappe (6 Pcs)',
    category: 'Street Food & Chaat',
    description: 'Crisp semolina puris with spiced potato-sprout filling, served with chilled spicy mint-coriander and sweet tamarind waters.',
    price: 190,
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: 'str-2',
    name: 'Dilli 6 Papdi Chaat',
    category: 'Street Food & Chaat',
    description: 'Crisp papdi wafers topped with boiled potatoes, chilled sweet curd, sonth chutney, green chilli dip, and pomegranate pearls.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'str-3',
    name: 'Banarasi Dahi Bhalla',
    category: 'Street Food & Chaat',
    description: 'Melt-in-mouth lentil dumplings soaked in thickened sweet yogurt, dusted with roasted cumin and Kashmiri red chilli powder.',
    price: 260,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 1
  },
  {
    id: 'str-4',
    name: 'Kurkuri Aloo Tikki Chaat',
    category: 'Street Food & Chaat',
    description: 'Shallow-fried crispy spiced potato cutlets topped with warm yellow peas ragda, tamarind chutney, and fresh ginger juliennes.',
    price: 230,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 2
  },
  {
    id: 'str-5',
    name: 'Mumbai Butter Pav Bhaji',
    category: 'Street Food & Chaat',
    description: 'Spiced mashed potato-tomato-pea medley simmered with special bhaji masala, topped with butter slab and served with two pavs.',
    price: 320,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: 'str-6',
    name: 'Crispy Samosa Chaat',
    category: 'Street Food & Chaat',
    description: 'Crushed golden potato-pea samosa layered with tangy chole gravy, sweetened curd, raw shallots, and spicy mint water.',
    price: 250,
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 2
  },

  // 9. Desserts & Beverages (6 dishes)
  {
    id: 'des-1',
    name: 'Zafrani Gulab Jamun with Rabri',
    category: 'Desserts & Beverages',
    description: 'Warm fried khoya dumplings soaked in rose-cardamom sugar nectar, served atop a cold bed of slow-reduced saffron rabri.',
    price: 260,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'des-2',
    name: 'Royal Saffron Rasmalai (2 Pcs)',
    category: 'Desserts & Beverages',
    description: 'Spongy chenna discs poached in sweet milk, soaked in rich 24-karat saffron cream and garnished with slivered pistachios.',
    price: 290,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 1
  },
  {
    id: 'des-3',
    name: 'Kesari Matka Kulfi',
    category: 'Desserts & Beverages',
    description: 'Ancestral dense frozen dessert infused with Kashmiri saffron, green cardamom, and California almonds, served in earthen pot.',
    price: 240,
    image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'des-4',
    name: 'Sizzling Saffron Brownie',
    category: 'Desserts & Beverages',
    description: 'Fudgy pure-veg dark chocolate brownie on a sizzler plate with Madagascar vanilla bean ice cream and hot chocolate drizzle.',
    price: 340,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: 'des-5',
    name: 'Alphonso Mango Lassi',
    category: 'Desserts & Beverages',
    description: 'Thick churned creamy yogurt blended with real Ratnagiri Alphonso mango pulp, topped with green pistachio nibs.',
    price: 220,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: 'des-6',
    name: 'Pomegranate & Mint Virgin Mojito',
    category: 'Desserts & Beverages',
    description: 'Cold-pressed ruby pomegranate juice muddled with garden mint leaves, lime wheels, and sparkling fizzy soda.',
    price: 210,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    isVeg: true,
    spiceLevel: 1
  }
];
