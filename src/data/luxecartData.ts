export interface Product {
  id: string;
  slug: string;
  name: string;
  priceNpr: number;
  formattedPrice: string;
  category: string;
  categorySlug: string;
  rating: number;
  reviewCount: number;
  description: string;
  details: string[];
  shippingReturns: string;
  colors: string[];
  image: string;
  isFeatured?: boolean;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface Article {
  slug: string;
  title: string;
  categoryTag: string;
  teaser: string;
  content?: string[];
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
}

export interface MembershipTier {
  id: string;
  name: string;
  priceFormatted: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export const STORE_INFO = {
  name: "LuxeCart",
  address: "Durbar Marg, Kathmandu, Nepal",
  phone: "+977 1-4250000",
  email: "concierge@luxecart.com",
  pressEmail: "press@luxecart.com",
  hours: "Mon–Fri, 9am–6pm NPT",
  freeShippingThresholdNpr: 10000,
  formattedFreeShippingThreshold: "Rs. 10,000",
};

export const CATEGORIES: Category[] = [
  {
    slug: "womens-fashion",
    name: "Women's Fashion",
    description: "Elegant evening wear, sophisticated staples, and timeless pieces built for the modern wardrobe.",
    image: "/products/silk-slip-dress.jpg",
    itemCount: 3,
  },
  {
    slug: "leather-goods",
    name: "Leather Goods",
    description: "Handcrafted wallets, bags, and accessories made from the finest full-grain leather by master artisans.",
    image: "/image/luxecart.png",
    itemCount: 4,
  },
  {
    slug: "timepieces",
    name: "Timepieces",
    description: "Bespoke watches combining precision engineering with timeless design and heirloom-quality craftsmanship.",
    image: "/products/meridian-chronograph.jpg",
    itemCount: 2,
  },
  {
    slug: "beauty-fragrance",
    name: "Beauty & Fragrance",
    description: "Curated selection of premium skincare, cosmetics, and exclusive perfumes from luxury houses.",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80",
    itemCount: 2,
  },
  {
    slug: "jewelry",
    name: "Jewelry",
    description: "Bespoke fine jewelry, precious gems, and hand-finished precious metals crafted for special moments.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
    itemCount: 1,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "maison-noir-handbag",
    name: "Maison Noir Handbag",
    priceNpr: 58000,
    formattedPrice: "Rs. 58,000",
    category: "Leather Goods",
    categorySlug: "leather-goods",
    rating: 4.9,
    reviewCount: 48,
    description: "Structured in full-grain calfskin with brushed gold hardware, the Maison Noir Handbag balances everyday practicality with a silhouette that doesn't date. Interior compartments keep essentials organized without adding bulk.",
    details: [
      "Full-grain Italian calfskin leather",
      "Brushed hardware & custom closure lock",
      "Interior zippered pocket and dual slip compartments",
      "Dimensions: 28cm width x 20cm height x 10cm depth",
      "Handcrafted by master artisans",
    ],
    shippingReturns: `Complimentary express shipping across Nepal on orders over ${STORE_INFO.formattedFreeShippingThreshold}. International express courier available. Returns accepted within 30 days.`,
    colors: ["Noir Black", "Burgundy", "Cognac"],
    image: "/products/maison-noir-handbag.jpg",
    isFeatured: true,
  },
  {
    id: "2",
    slug: "aurum-jewelry-set",
    name: "Aurum Jewelry Set",
    priceNpr: 125000,
    formattedPrice: "Rs. 125,000",
    category: "Jewelry",
    categorySlug: "jewelry",
    rating: 5.0,
    reviewCount: 32,
    description: "Hand-crafted 18k gold vermeil set featuring a sculptural pendant necklace and matching drop earrings with natural citrine stones. Engineered with fluid articulation for natural movement.",
    details: [
      "18k Gold Vermeil over 925 Sterling Silver",
      "Sustainably mined natural Citrine gemstones",
      "Hypoallergenic post-and-clasp closures",
      "Necklace length: 45cm with 5cm extension",
      "Includes signed authenticity certificate and luxury box",
    ],
    shippingReturns: "Includes insured white-glove delivery in Nepal. Extended 45-day return window for fine jewelry.",
    colors: ["18k Gold", "Rose Gold", "White Gold"],
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
    isFeatured: true,
  },
  {
    id: "3",
    slug: "tortoise-collection",
    name: "Tortoise Collection",
    priceNpr: 32000,
    formattedPrice: "Rs. 32,000",
    category: "Leather Goods",
    categorySlug: "leather-goods",
    rating: 4.8,
    reviewCount: 26,
    description: "A clutch and sunglass holder pairing in hand-finished Havana acetate and pebbled calf leather. Understated elegance designed to transition seamlessly from noon to night.",
    details: [
      "Hand-polished Italian Mazzucchelli acetate",
      "Pebbled full-grain calfskin leather trim",
      "Custom engraved magnetic clasp",
      "Includes protective micro-fiber sleeve and hard case",
    ],
    shippingReturns: `Complimentary shipping on orders over ${STORE_INFO.formattedFreeShippingThreshold}. 30-day returns.`,
    colors: ["Amber Havana", "Classic Tortoise", "Dark Espresso"],
    image: "/products/tortoise-collection.jpg",
    isFeatured: true,
  },
  {
    id: "4",
    slug: "silk-heritage-scarf",
    name: "Silk Heritage Scarf",
    priceNpr: 24000,
    formattedPrice: "Rs. 24,000",
    category: "Women's Fashion",
    categorySlug: "womens-fashion",
    rating: 4.9,
    reviewCount: 54,
    description: "Pure Mulberry silk twill hand-rolled by master artisans, featuring an architectural geometric pattern inspired by European archive prints.",
    details: [
      "100% Pure Mulberry Silk Twill",
      "Hand-rolled edges with tonal stitching",
      "90cm x 90cm square silhouette",
      "Dry clean only",
    ],
    shippingReturns: "Delivered in signature LuxeCart presentation box. 30-day return policy.",
    colors: ["Midnight & Gold", "Emerald & Bronze", "Ivory & Navy"],
    image: "/products/silk-heritage-scarf.png",
    isFeatured: true,
  },
  {
    id: "5",
    slug: "cashmere-wrap-coat",
    name: "Cashmere Wrap Coat",
    priceNpr: 42000,
    formattedPrice: "Rs. 42,000",
    category: "Women's Fashion",
    categorySlug: "womens-fashion",
    rating: 4.9,
    reviewCount: 19,
    description: "A tailored silhouette in featherweight cashmere, built for cold-weather elegance.",
    details: [
      "100% Grade-A Mongolian Cashmere",
      "Detachable self-tie belt with buckle detail",
      "Deep welt side pockets",
      "Unlined for a fluid drape",
    ],
    shippingReturns: "Express delivery within 2-3 business days. 30-day hassle-free returns.",
    colors: ["Charcoal Grey", "Camel", "Obsidian Black"],
    image: "/products/cashmere-wrap-coat.jpg",
  },
  {
    id: "6",
    slug: "silk-slip-dress",
    name: "Silk Slip Dress",
    priceNpr: 21000,
    formattedPrice: "Rs. 21,000",
    category: "Women's Fashion",
    categorySlug: "womens-fashion",
    rating: 4.8,
    reviewCount: 22,
    description: "Bias-cut silk that moves with you, from daytime layering to evening wear.",
    details: [
      "100% Heavyweight Silk Satin",
      "Bias-cut construction for natural contour",
      "Adjustable delicate shoulder straps",
      "Ankle-length column silhouette",
    ],
    shippingReturns: "Standard delivery 2-4 business days. Returns accepted within 30 days.",
    colors: ["Deep Burgundy", "Champagne Gold", "Midnight Noir"],
    image: "/products/silk-slip-dress.jpg",
  },
  {
    id: "7",
    slug: "florence-crossbody-bag",
    name: "Florence Crossbody Bag",
    priceNpr: 34000,
    formattedPrice: "Rs. 34,000",
    category: "Leather Goods",
    categorySlug: "leather-goods",
    rating: 5.0,
    reviewCount: 17,
    description: "Full-grain Italian leather in a compact, everyday silhouette.",
    details: [
      "Full-grain Tuscan leather",
      "Suede microfiber lining with key clip",
      "Adjustable leather strap",
      "Rear exterior quick-access pocket",
    ],
    shippingReturns: "Express delivery included. 30-day money-back guarantee.",
    colors: ["Espresso Brown", "Nero Black", "Warm Taupe"],
    image: "/products/florence-crossbody-bag.jpg",
  },
  {
    id: "8",
    slug: "heritage-card-holder",
    name: "Heritage Card Holder",
    priceNpr: 8500,
    formattedPrice: "Rs. 8,500",
    category: "Leather Goods",
    categorySlug: "leather-goods",
    rating: 4.7,
    reviewCount: 41,
    description: "Slim, hand-stitched, and built to age beautifully.",
    details: [
      "Vegetable-tanned bridle leather",
      "Waxed linen thread hand-stitching",
      "4 card slots + central cash compartment",
      "Integrated RFID protection layer",
    ],
    shippingReturns: "Ships next business day. 30-day return policy.",
    colors: ["Vintage Cognac", "Matte Black", "Forest Green"],
    image: "/products/heritage-card-holder.jpg",
  },
  {
    id: "9",
    slug: "meridian-chronograph",
    name: "Meridian Chronograph",
    priceNpr: 89000,
    formattedPrice: "Rs. 89,000",
    category: "Timepieces",
    categorySlug: "timepieces",
    rating: 4.9,
    reviewCount: 38,
    description: "Swiss movement housed in a brushed steel case, for those who notice details.",
    details: [
      "Swiss Automatic Movement with 42-hour power reserve",
      "316L Stainless Steel Case (41mm)",
      "Sapphire crystal glass",
      "Italian leather strap",
    ],
    shippingReturns: "Includes insured express shipping & 5-year warranty. 30-day returns.",
    colors: ["Brushed Steel / Black", "Rose Gold / Ivory", "Gunmetal / Slate"],
    image: "/products/meridian-chronograph.jpg",
  },
  {
    id: "10",
    slug: "aurea-dress-watch",
    name: "Aurea Dress Watch",
    priceNpr: 65000,
    formattedPrice: "Rs. 65,000",
    category: "Timepieces",
    categorySlug: "timepieces",
    rating: 4.8,
    reviewCount: 29,
    description: "A minimalist face paired with a hand-finished leather strap.",
    details: [
      "Ultra-thin 6.5mm case profile",
      "Sapphire crystal glass",
      "Swiss Quartz precision movement",
      "Hand-stitched leather strap",
    ],
    shippingReturns: "Includes insured courier shipping & 3-year warranty.",
    colors: ["Polished Gold / White", "Silver / Matte Black", "Rose Gold / Sunray Silver"],
    image: "/products/aurea-dress-watch.jpg",
  },
  {
    id: "11",
    slug: "noir-oud-eau-de-parfum",
    name: "Noir Oud Eau de Parfum",
    priceNpr: 18000,
    formattedPrice: "Rs. 18,000",
    category: "Beauty & Fragrance",
    categorySlug: "beauty-fragrance",
    rating: 4.9,
    reviewCount: 31,
    description: "A warm, smoky signature scent built around rare oud and amber.",
    details: [
      "100ml / 3.4 fl. oz. Eau de Parfum spray",
      "Top Notes: Bergamot, Cardamom",
      "Heart Notes: Bulgarian Rose, Saffron",
      "Base Notes: Cambodian Oud, Amber, Vanilla",
    ],
    shippingReturns: "Complimentary sample with every order. 30-day return policy on unopened items.",
    colors: ["100ml Bottle"],
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "12",
    slug: "velvet-rose-candle",
    name: "Velvet Rose Candle",
    priceNpr: 6500,
    formattedPrice: "Rs. 6,500",
    category: "Beauty & Fragrance",
    categorySlug: "beauty-fragrance",
    rating: 4.9,
    reviewCount: 45,
    description: "Hand-poured soy wax with notes of rose, vanilla, and sandalwood.",
    details: [
      "300g / 10.5 oz natural soy & coconut wax blend",
      "100% organic cotton wick",
      "Approximately 65-hour burn time",
      "Reusable dark glass vessel",
    ],
    shippingReturns: `Complimentary shipping on orders over ${STORE_INFO.formattedFreeShippingThreshold}. 30-day return policy.`,
    colors: ["Dark Amber Vessel"],
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1000&q=80",
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "artisan-leather-craftsmanship",
    title: "The Art of Hand-Stitched Leather",
    categoryTag: "Craftsmanship",
    teaser: "Inside the Tuscan workshops where master artisans preserve centuries-old leather crafting traditions.",
    date: "Feb 12, 2026",
    readTime: "5 min read",
    image: "/image/journal-handstitched.jpg",
    author: "Anushka Shrestha",
    content: [
      "True luxury begins with the material. In the small workshops dotting the hills of Tuscany, leatherwork is not a modern assembly process — it is a discipline passed through generations.",
      "The full-grain calfskin used in our leather goods is vegetable-tanned using natural mimosa and chestnut extracts over forty days. This slow process preserves the natural strength of the hide while allowing it to develop a rich, individual patina over decades.",
      "Every stitch is pulled by hand using two needles on a single waxed thread — a saddlery technique that ensures even if one loop wears down, the rest of the seam remains completely secure.",
    ],
  },
  {
    slug: "capsule-wardrobe-guide",
    title: "Building a Timeless Capsule Wardrobe",
    categoryTag: "Style Guide",
    teaser: "Essential principles for curating a versatile wardrobe that transcends seasonal trends.",
    date: "Jan 28, 2026",
    readTime: "7 min read",
    image: "/products/cashmere-wrap-coat.jpg",
    author: "Elena Rostova",
    content: [
      "Chasing seasonal trends leads to cluttered closets and disposable fashion. A true capsule wardrobe is an investment in quiet quality — selecting a few impeccable pieces that harmonize effortlessly.",
      "Focus first on foundational silhouettes: a perfectly proportioned cashmere coat, a bias-cut silk dress, and a structured leather tote. When each piece possesses inherent craftsmanship, getting dressed becomes an intuitive daily luxury.",
    ],
  },
  {
    slug: "how-to-spot-genuine-craftsmanship",
    title: "How to Spot Genuine Craftsmanship",
    categoryTag: "Buying Guide",
    teaser: "The details that separate a well-made piece from a well-marketed one — and how to tell the difference before you buy.",
    date: "Mar 15, 2026",
    readTime: "6 min read",
    image: "/products/heritage-card-holder.jpg",
    author: "Julian Thorne",
    content: [
      "Marketing copy can claim luxury, but true quality reveals itself upon closer inspection. The first marker is edge finishing: master leatherworkers apply multiple thin coats of edge paint, burnishing between coats until smooth.",
      "Examine hardware weight and attachment. Cheap hardware feels hollow and uses superficial plating. Authentic luxury pieces utilize solid brass or stainless steel with hand-brushed or PVD-coated finishes.",
      "Finally, observe how fabric cuts align across seams. High-end garments align patterns precisely and use French seams or clean bias binding inside.",
    ],
  },
  {
    slug: "caring-for-leather-seasonal-guide",
    title: "Caring for Leather: A Seasonal Guide",
    categoryTag: "Care & Maintenance",
    teaser: "Simple habits that keep leather goods looking new for years, from conditioning routines to storage mistakes to avoid.",
    date: "Mar 02, 2026",
    readTime: "4 min read",
    image: "/products/florence-crossbody-bag.jpg",
    author: "Marcella Rossi",
    content: [
      "Full-grain leather is living material that requires routine nourishment to retain its suppleness. Clean your leather goods once a month with a soft, slightly damp cotton cloth.",
      "Apply a thin layer of natural beeswax or lanolin-based conditioner twice a year. Avoid silicone sprays which block leather pores and prevent natural breathing.",
      "Always store bags stuffed with acid-free tissue paper inside breathable cotton dustbags — never sealed in plastic bags which trap moisture.",
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "I was hesitant about ordering luxury pieces online in Nepal, but the Maison Noir handbag exceeded what I've found in European boutiques. LuxeCart has earned a lifetime patron.",
    author: "Prashant Shrestha",
    role: "Platinum Member • Kathmandu",
    rating: 5,
  },
  {
    id: "2",
    quote: "The pure Mulberry silk scarf arrived within 24 hours in exquisite presentation packaging. Finally, genuine international-standard luxury shopping in Nepal.",
    author: "Aayusha Rana",
    role: "Verified Client • Lalitpur",
    rating: 5,
  },
  {
    id: "3",
    quote: "The attention to detail in packaging alone makes unboxing feel like a private celebration. Truly immaculate craftsmanship and prompt global delivery.",
    author: "Marcus Vance",
    role: "Gold Member • Singapore",
    rating: 5,
  },
  {
    id: "4",
    quote: "The bespoke timepiece selection is unmatched. Verified authenticity, secured express transit to Pokhara, and concierge support that responds within minutes.",
    author: "Rohan Shakya",
    role: "Gold Member • Pokhara",
    rating: 5,
  },
  {
    id: "5",
    quote: "LuxeCart represents what luxury shopping should be: calm, meticulously curated, and completely transparent about material provenance.",
    author: "Elena Rostova",
    role: "Verified Client • London",
    rating: 5,
  },
  {
    id: "6",
    quote: "The Durbar Marg flagship experience carried seamlessly into the digital boutique. Their concierge service in Kathmandu is absolute top tier.",
    author: "Dr. Shristi Gurung",
    role: "Verified Client • Baluwatar",
    rating: 5,
  },
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "silver",
    name: "Silver Tier",
    priceFormatted: "Rs. 15,000",
    period: "/ year",
    description: "Essential privileges for discerning shoppers exploring curated luxury.",
    features: [
      "Early access to seasonal private sales",
      "Standard member pricing on core items",
      "Extended 30-day return window",
      "Quarterly Luxe Journal print edition",
      "Complimentary standard shipping across Nepal",
    ],
    ctaText: "Join Silver",
  },
  {
    id: "gold",
    name: "Gold Tier",
    priceFormatted: "Rs. 35,000",
    period: "/ year",
    description: "Elevated access and dedicated personal concierge support.",
    features: [
      "48-hour early access to new collection releases",
      "Dedicated named account concierge contact",
      "15% sitewide member discount on all purchases",
      "Extended 60-day effortless returns",
      "Complimentary luxury gift packaging on all orders",
      "Priority order dispatch (1-2 business days)",
    ],
    popular: true,
    ctaText: "Join Gold Tier",
  },
  {
    id: "platinum",
    name: "Platinum Tier",
    priceFormatted: "Rs. 75,000",
    period: "/ year",
    description: "Uncompromised VIP access, private commissions, and 24/7 concierge.",
    features: [
      "Instant VIP access to private releases & bespoke commissions",
      "24/7 private concierge & styling advice",
      "20% sitewide member discount",
      "Unlimited 90-day effortless returns",
      "Complimentary express worldwide shipping",
      "Annual bespoke luxury leather gift",
      "Invitations to exclusive private artisan dinners",
    ],
    ctaText: "Join Platinum VIP",
  },
];

export const FAQS = [
  {
    question: "Can I upgrade my membership later?",
    answer: "Yes, you can upgrade at any time and we'll prorate the difference.",
  },
  {
    question: "Is membership auto-renewing?",
    answer: "Yes, annually, and you can cancel anytime from your account.",
  },
  {
    question: "Do benefits apply to sale items?",
    answer: "Most benefits apply sitewide, with a few exclusions noted at checkout.",
  },
  {
    question: "How long does shipping take across Nepal?",
    answer: "Inside Kathmandu valley, orders deliver within 24 hours. Outside Kathmandu, delivery takes 2-3 business days via priority express courier.",
  },
  {
    question: "Where is the physical flagship store located?",
    answer: "Our flagship store is located at Durbar Marg, Kathmandu, Nepal. We welcome visitors Mon–Fri, 9am–6pm.",
  },
];
