import {
  ProjectItem,
  ServiceItem,
  PrincipleItem,
  ProcessStep,
  DesignConcept,
  TeamMember,
  TestimonialItem,
} from "../types";

export const DESIGN_CONCEPTS: DesignConcept[] = [
  {
    id: "warm-light",
    name: "Warm Scandinavian Light (Primary)",
    theme: "Warm Off-White & Electric Blue",
    description:
      "Editorial European studio layout featuring #F7F7F5 canvas, high-contrast Swiss typography, and clean asymmetric composition.",
    imagePath: "/src/assets/images/dx_studio_warm_light_1786885429119.jpg",
    aspect: "16:9",
    dominantColor: "#F7F7F5",
  },
  {
    id: "dark-obsidian",
    name: "Obsidian Minimalist Dark",
    theme: "Deep Charcoal & Silver Monogram",
    description:
      "Sophisticated matte black editorial aesthetic with subtle hairline grid structure and crisp light typography.",
    imagePath: "/src/assets/images/dx_studio_dark_theme_1786885454348.jpg",
    aspect: "16:9",
    dominantColor: "#121214",
  },
  {
    id: "sand-stone",
    name: "Sand & Stone Minimalist",
    theme: "Warm Taupe, Stone & Indigo",
    description:
      "Tactile editorial aesthetic inspired by architectural publications and tactile print design.",
    imagePath: "/src/assets/images/dx_studio_sand_theme_1786885466862.jpg",
    aspect: "16:9",
    dominantColor: "#ECE9E2",
  },
  {
    id: "case-studies-view",
    name: "Selected Works Showcase",
    theme: "Curated Editorial Portfolio",
    description:
      "Detailed showcase layout highlighting client case studies across sustainable lifestyle, fintech, and digital media.",
    imagePath: "/src/assets/images/dx_case_studies_1786885482164.jpg",
    aspect: "16:9",
    dominantColor: "#FAFAFA",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "himaly",
    number: "01",
    title: "Himaly",
    client: "Himaly",
    category: "Travel Discovery / Digital Experience",
    portfolioCategory: "Travel & Trek",
    year: "2025",
    tagline: "Discover the Himalayas.",
    description:
      "A modern travel discovery platform designed to showcase Himalayan destinations, trails, culture, and experiences through an immersive visual interface.",
    metrics: [
      "Immersive Visual Interface",
      "Curated Destination Guides",
      "Trails & Culture Showcase",
    ],
    deliverables: [
      "Travel Discovery Platform",
      "Immersive Visual Design",
      "Destination & Trails Catalog",
      "Responsive Experience",
    ],
    image: "/image/himalycover.png",
    aspect: "wide",
    colorAccent: "#1E3A8A",
stats: { label: "Destinations", value: "120+" },
    link: "https://himaly.vercel.app",
  },
  {
    id: "zentrix",
    number: "02",
    title: "Zentrix",
    client: "Zentrix Sports",
    category: "E-Commerce / Sports Retail",
    portfolioCategory: "Ecommerce",
    year: "2025",
    tagline: "Power Your Game.",
    description:
      "A dynamic sports-focused e-commerce website built around an energetic visual identity, showcasing sports products with a bold, performance-driven experience.",
    metrics: [
      "Bold Energetic Identity",
      "Fast Product Browsing",
      "Large Sports Catalog",
    ],
    deliverables: [
      "E-Commerce Storefront",
      "Energetic Brand Identity",
      "Product Catalog System",
      "Performance-Driven UX",
    ],
    image: "/image/zentrix.png",
    aspect: "tall",
    colorAccent: "#0D9488",
stats: { label: "Catalog Items", value: "1000+" },
    link: "https://zentrixsports.vercel.app",
  },
  {
    id: "choice-international-export",
    number: "03",
    title: "Choice International Export",
    client: "Choice International Export",
    category: "Corporate Website / Web Development",
    portfolioCategory: "Branding",
    year: "2026",
    tagline:
      "Global shipping, transportation, and export services on a professional corporate platform.",
    description:
      "A corporate website for an international export and logistics business, presenting its global shipping, transportation, and export services in a professional layout.",
    metrics: [
      "Professional Corporate Layout",
      "Global Services Showcase",
      "Clear Service Architecture",
    ],
    deliverables: [
      "Corporate Website",
      "Service Presentation",
      "Global Logistics Content",
      "Professional Design System",
    ],
    image: "/image/choice.png",
    aspect: "wide",
    colorAccent: "#0F766E",
    stats: { label: "Markets Reached", value: "30+" },
    link: "https://choiceinternationalexport.com.np",
  },
  {
    id: "luxecart",
    number: "04",
    title: "LuxeCart",
    client: "LuxeCart",
    category: "E-Commerce / Fashion & Accessories",
    portfolioCategory: "Ecommerce",
    year: "2026",
    tagline: "Elevate Your Style.",
    description:
      "A premium luxury e-commerce concept focused on fashion and accessories, combining editorial-style visuals with an elegant, high-end shopping experience.",
    metrics: [
      "Editorial-Style Visuals",
      "Elegant High-End UX",
      "Fashion & Accessory Catalog",
    ],
    deliverables: [
      "Luxury E-Commerce Concept",
      "Editorial Visual Design",
      "Fashion Catalog System",
      "Premium Shopping Experience",
    ],
    image: "/image/luxecart.png",
    aspect: "tall",
    colorAccent: "#7C3AED",
    stats: { label: "Catalog Items", value: "500+" },
    link: "https://luxecart-eta.vercel.app",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "BRAND",
    category: "Identity & Strategy",
    summary:
      "We build cohesive, memorable brand foundations that resonate across physical and digital touchpoints.",
    subItems: [
      "Identity & Visual Systems",
      "Art Direction",
      "Brand Strategy & Positioning",
      "Typography & Voice",
      "Design Guidelines",
    ],
    deliverables: [
      "Brand Playbook",
      "Logo & Iconography Systems",
      "Typography Specs",
      "Motion Identity",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "EXPERIENCE",
    category: "UI/UX & Product Design",
    summary:
      "We craft intuitive, human-centered digital interfaces designed to eliminate friction and elevate user delight.",
    subItems: [
      "UI/UX Product Design",
      "Web & Mobile Design",
      "Design Systems & Tokens",
      "Interactive Prototyping",
      "User Research & Testing",
    ],
    deliverables: [
      "Figma System Libraries",
      "Interactive Prototypes",
      "User Journey Maps",
      "Usability Audits",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "BUILD",
    category: "Engineering & Development",
    summary:
      "We engineer robust, lightning-fast digital solutions using modern web standards and reliable infrastructure.",
    subItems: [
      "Modern Web Development",
      "Headless E-Commerce",
      "Custom Web Applications",
      "Creative WebGL & Motion",
      "API Integrations",
    ],
    deliverables: [
      "Production-Grade Codebase",
      "Fast-Loading Performance",
      "Scalable Cloud Hosting",
      "Complete Documentation",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "GROW",
    category: "SEO & Performance Strategy",
    summary:
      "We combine technical search optimization with data-backed conversion design to drive continuous organic reach.",
    subItems: [
      "Technical & Structural SEO",
      "Conversion Rate Optimization",
      "Performance Auditing",
      "Content Architecture",
      "Analytics & Tracking",
    ],
    deliverables: [
      "SEO Roadmaps",
      "Core Web Vitals Optimization",
      "Funnel Tracking",
      "Growth Reports",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    number: "05",
    title: "SYSTEMS",
    category: "Creative Technology & Platforms",
    summary:
      "We architect bespoke digital platforms, interactive micro-systems, and custom web applications that scale with zero compromise.",
    subItems: [
      "Custom Application Architecture",
      "Headless CMS Integration",
      "Creative WebGL & Interactive Systems",
      "Microservices & API Engines",
      "High-Throughput Data Synchronization",
    ],
    deliverables: [
      "Custom Web Applications",
      "API & Integration Pipelines",
      "Operational Tools",
      "System Architecture Specs",
    ],
    previewImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
  },
];

export const PRINCIPLES: PrincipleItem[] = [
  {
    number: "01",
    title: "THINK FIRST",
    statement: "Every project starts with understanding the problem.",
    details:
      "We reject decorative vanity. Before writing a line of code or drawing a wireframe, we dissect the business mechanics, user motivations, and commercial imperatives.",
  },
  {
    number: "02",
    title: "DESIGN WITH INTENT",
    statement: "Every interaction has a reason.",
    details:
      "Craft is intentionality. From the optical weight of a typography hierarchy to the tension in an entering transition, nothing exists without functional purpose.",
  },
  {
    number: "03",
    title: "BUILD TO LAST",
    statement:
      "Technology should support the experience, not distract from it.",
    details:
      "We build durable, clean, performant digital infrastructure that scales seamlessly without technical debt or unnecessary complexity.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    duration: "Week 1–2",
    tagline: "Uncovering the fundamental challenge",
    description:
      "We audit your current digital touchpoints, conduct stakeholder interviews, analyze competitive landscapes, and formulate the project brief.",
    outputs: [
      "Discovery Synthesis Document",
      "Technical Constraints Audit",
      "Strategic Roadmap",
    ],
  },
  {
    number: "02",
    title: "Define",
    duration: "Week 2–3",
    tagline: "Architecting the foundation",
    description:
      "We establish information architecture, user journeys, content hierarchies, and brand positioning benchmarks.",
    outputs: [
      "Information Architecture",
      "Low-Fidelity Wireframes",
      "Visual Direction Artboards",
    ],
  },
  {
    number: "03",
    title: "Design",
    duration: "Week 4–6",
    tagline: "Translating strategy into visual mastery",
    description:
      "We design complete responsive interfaces, design systems, bespoke micro-interactions, and high-fidelity prototypes.",
    outputs: [
      "Production UI/UX System",
      "Interactive Motion Prototypes",
      "Asset Production Library",
    ],
  },
  {
    number: "04",
    title: "Develop",
    duration: "Week 6–10",
    tagline: "Crafting clean, accessible code",
    description:
      "We build with modern frameworks, rigorous unit testing, seamless API integrations, and 100/100 Core Web Vitals targets.",
    outputs: [
      "Production Application Codebase",
      "API & CMS Integrations",
      "Performance & Accessibility Verification",
    ],
  },
  {
    number: "05",
    title: "Grow",
    duration: "Ongoing",
    tagline: "Continuous evolution and measurement",
    description:
      "We monitor user engagement, optimize conversion funnels, refine search positioning, and deploy iterative enhancements.",
    outputs: [
      "Live Analytics Setup",
      "SEO Monitoring Dashboard",
      "Iterative Feature Sprints",
    ],
  },
];

export const CLIENT_SECTORS = [
  {
    name: "Startups & Ventures",
    count: "14+ Projects",
    description:
      "Seed to Series B digital products and scale-up brand identity",
  },
  {
    name: "E-Commerce Brands",
    count: "22+ Stores",
    description:
      "High-conversion headless storefronts and luxury direct-to-consumer",
  },
  {
    name: "Architecture & Design",
    count: "18+ Monographers",
    description:
      "Spatial digital presentations, studios, and architectural firms",
  },
  {
    name: "Financial Technology",
    count: "11+ Platforms",
    description:
      "Enterprise trading consoles, liquidity tools, and crypto protocols",
  },
  {
    name: "Education & Culture",
    count: "15+ Institutions",
    description:
      "Regional storytelling archives, university labs, and cultural hubs",
  },
  {
    name: "Hospitality & Travel",
    count: "19+ Destinations",
    description:
      "Bespoke booking engines, boutique hotel identities, and resort platforms",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "roshan-shrestha",
    number: "01",
    name: "Roshan Shrestha",
    role: "Founder & Frontend Lead",
    department: "leadership",
    location: "Kathmandu, Nepal",
    bio: "Leading the studio while shaping frontend experiences, technical direction, and the systems that bring thoughtful digital products to life.",
    quote:
      "Good digital work makes complexity feel considered, clear, and human.",
    portrait: "/Team Picture/Roshan.jpeg",
    portraitPosition: "center 18%",
    experience: "Studio Founder",
    specialties: [
      "Technical Direction",
      "Frontend Development",
      "React / TypeScript",
      "Product Strategy",
    ],
    ledProjects: ["Himaly"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "aachal-shrestha",
    number: "02",
    name: "Aachal Shrestha",
    role: "Backend Lead",
    department: "engineering",
    location: "Kathmandu, Nepal",
    bio: "Building reliable server-side systems, APIs, and data foundations that keep digital products fast, secure, and dependable.",
    quote:
      "Strong products are built on infrastructure users never have to think about.",
    portrait:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    portraitPosition: "center 20%",
    experience: "Backend Engineering",
    specialties: [
      "API Development",
      "Databases",
      "Server Architecture",
      "Security",
    ],
    ledProjects: ["Zentrix"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "shrishma-poudel",
    number: "03",
    name: "Shrishma Poudel",
    role: "UI/UX Designer",
    department: "design",
    location: "Kathmandu, Nepal",
    bio: "Designing clear, intuitive interfaces and user journeys that make every interaction feel purposeful and easy to navigate.",
    quote: "The best interfaces quietly guide people toward what matters.",
    portrait: "/Team Picture/Shrishma.png",
    portraitPosition: "center 20%",
    experience: "UI/UX Design",
    specialties: [
      "User Research",
      "Wireframing",
      "Visual Design",
      "Prototyping",
    ],
    ledProjects: ["Zentrix", "Himaly"],
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "injal-thapa",
    number: "04",
    name: "Injal Thapa",
    role: "Backend Developer",
    department: "engineering",
    location: "Kathmandu, Nepal",
    bio: "Developing the backend logic and integrations that turn product requirements into stable, scalable digital services.",
    quote:
      "A dependable backend gives every other part of the product room to shine.",
    portrait: "/Team Picture/injal.png",
    portraitPosition: "center 20%",
    experience: "Backend Engineering",
    specialties: [
      "Node.js",
      "API Integrations",
      "Data Modeling",
      "Performance",
    ],
    ledProjects: ["Zentrix"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "bikash-kattel",
    number: "05",
    name: "Bikash Kattel",
    role: "Frontend Developer",
    department: "engineering",
    location: "Kathmandu, Nepal",
    bio: "Turning design systems into responsive, accessible interfaces with a focus on performance, polish, and maintainable code.",
    quote:
      "The interface is where technical precision becomes a human experience.",
    portrait: "/Team Picture/Bikash.jpg",
    portraitPosition: "center 20%",
    experience: "Frontend Engineering",
    specialties: ["React", "TypeScript", "Responsive UI", "Accessibility"],
    ledProjects: ["Himaly"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "aadarsha-paudel",
    number: "06",
    name: "Aadarsha Paudel",
    role: "Social Media Manager",
    department: "management",
    location: "Kathmandu, Nepal",
    bio: "Building the studio voice across social channels through thoughtful content, consistent storytelling, and community engagement.",
    quote: "Every post is an invitation to start a meaningful conversation.",
    portrait:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    portraitPosition: "center 20%",
    experience: "Social Media Manager",
    specialties: [
      "Content Planning",
      "Social Strategy",
      "Community Growth",
      "Brand Voice",
    ],
    ledProjects: ["Himaly"],
    socials: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: "bijay-babu-bhatta",
    number: "07",
    name: "Bijay Babu Bhatta",
    role: "Operations Manager",
    department: "management",
    location: "Kathmandu, Nepal",
    bio: "Coordinating timelines, resources, and communication across teams to keep every project on track from kickoff to delivery.",
    quote: "Clear coordination gives great work the space to arrive on time.",
    portrait: "/Team Picture/Bijay.png",
    portraitPosition: "center 15%",
    experience: "Operations Management",
    specialties: [
      "Project Planning",
      "Team Coordination",
      "Client Communication",
    ],
    ledProjects: [],
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "anisha-bhandari",
    number: "08",
    name: "Anisha Bhandari",
    role: "SEO Specialist",
    department: "strategy",
    location: "Kathmandu, Nepal",
    bio: "Driving organic growth through keyword research, on-page optimization, and content strategy that gets the studio's work found and ranked.",
    quote: "The best content earns attention by being genuinely useful.",
    portrait: "/Team Picture/Anisha.png",
    portraitPosition: "center 25%",
    experience: "SEO",
    specialties: ["Keyword Research", "On-Page SEO", "Content Strategy"],
    ledProjects: [],
    socials: {
      linkedin: "https://linkedin.com",
    },
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-himaly",
    number: "01",
    quote:
      "DX Studio turned our love for the Himalayas into a truly immersive discovery platform. Travelers now explore trails, culture, and destinations exactly the way we imagined.",
    author: "Tenzin Norbu",
    role: "Founder & CEO",
    company: "Himaly",
    location: "Kathmandu, Nepal",
    project: "Travel Discovery Platform",
    impactMetric: "Immersive Explorer Experience",
  },
  {
    id: "t-zentrix",
    number: "02",
    quote:
      "DX Studio delivered a sports storefront that feels fast, looks sharp, and makes buying jerseys effortless. Our customers keep coming back for the browsing experience alone.",
    author: "Clara Van Der Meer",
    role: "Head of Product Engineering",
    company: "Zentrix Sports",
    location: "Kathmandu, Nepal",
    project: "E-Commerce Storefront",
    impactMetric: "Fast Growing Catalog",
  },
];
