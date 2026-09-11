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
    client: "Himaly Living & Goods",
    category: "Digital Experience / Web Development",
    portfolioCategory: "Ecommerce",
    year: "2025",
    tagline:
      "Sustainable alpine craftsmanship meets modern direct-to-consumer e-commerce.",
    description:
      "We built a bespoke headless commerce platform designed with architectural minimalism, tactile product interactions, and instant checkout flows for a global audience.",
    metrics: [
      "+142% Organic Conversion Rate",
      "0.6s Average Page Load",
      "Awwwards Site of the Day",
    ],
    deliverables: [
      "E-Commerce Architecture",
      "Brand Identity",
      "Custom Shopify Plus Engine",
      "Interactive 3D Lookbook",
    ],
    image:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1600&auto=format&fit=crop",
    aspect: "wide",
    colorAccent: "#1E3A8A",
    stats: { label: "Revenue Growth", value: "3.4x" },
  },
  {
    id: "zentrix",
    number: "02",
    title: "Zentrix",
    client: "Zentrix Financial Technologies",
    category: "Fintech Product / UI/UX Design System",
    portfolioCategory: "Other",
    year: "2025",
    tagline:
      "Simplifying institutional cross-border liquidity with intuitive real-time dashboards.",
    description:
      "An enterprise design system and trading console that translates millions of real-time multi-currency transaction data points into clear, latency-free actionable visualizations.",
    metrics: [
      "45k+ Daily Active Traders",
      "Zero UX Friction Drop-off",
      "SOC-2 Compliant Interface",
    ],
    deliverables: [
      "Product Strategy",
      "UI/UX Design System",
      "React / WebGL Visualizations",
      "Design Tokens",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    aspect: "tall",
    colorAccent: "#0D9488",
    stats: { label: "Daily Volume", value: "$180M+" },
  },
  {
    id: "aawaj",
    number: "03",
    title: "Aawaj",
    client: "Aawaj Audio & Media",
    category: "Product Design / Custom Web App",
    portfolioCategory: "Creative Websites",
    year: "2026",
    tagline:
      "An immersive storytelling platform for independent South Asian storytellers and sound designers.",
    description:
      "A tactile, audio-first web application with spatial sound playback, responsive waveform scrubbing, and editorial typography that honors regional narrative traditions.",
    metrics: [
      "2.1M Minutes Streamed",
      "4.9/5 User Satisfaction",
      "Featured in Design Week",
    ],
    deliverables: [
      "Custom Web Player",
      "Sound Architecture",
      "Content Management System",
      "Identity System",
    ],
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop",
    aspect: "square",
    colorAccent: "#4F46E5",
    stats: { label: "Active Listeners", value: "320K" },
  },
  {
    id: "lumina",
    number: "04",
    title: "Lumina Arch",
    client: "Lumina Architecture Studio",
    category: "Interactive Portfolio / Creative Engineering",
    portfolioCategory: "Travel & Trek",
    year: "2026",
    tagline:
      "A living digital monograph celebrating modern Scandinavian and Himalayan timber architecture.",
    description:
      "Seamless WebGL transitions, high-resolution architectural blueprints, and dynamic lighting simulation that mirrors real-world sun positions on project locations.",
    metrics: [
      "FWA of the Month",
      "8m 42s Avg Session Duration",
      "Global Inquiries +210%",
    ],
    deliverables: [
      "Creative Direction",
      "WebGL Interactive Spaces",
      "Editorial Content Strategy",
      "Digital Identity",
    ],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    aspect: "wide",
    colorAccent: "#2563EB",
    stats: { label: "Avg Session", value: "8m 42s" },
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
    portrait:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
    experience: "Studio Founder",
    specialties: [
      "Technical Direction",
      "Frontend Development",
      "React / TypeScript",
      "Product Strategy",
    ],
    ledProjects: ["Himaly", "Lumina Arch", "Aawaj"],
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
    experience: "Backend Engineering",
    specialties: [
      "API Development",
      "Databases",
      "Server Architecture",
      "Security",
    ],
    ledProjects: ["Zentrix", "Lumina Arch"],
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
    portrait:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
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
    portrait:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
    experience: "Backend Engineering",
    specialties: [
      "Node.js",
      "API Integrations",
      "Data Modeling",
      "Performance",
    ],
    ledProjects: ["Aawaj", "Lumina Arch"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "vikash-kattel",
    number: "05",
    name: "Vikash Kattel",
    role: "Frontend Developer",
    department: "engineering",
    location: "Kathmandu, Nepal",
    bio: "Turning design systems into responsive, accessible interfaces with a focus on performance, polish, and maintainable code.",
    quote:
      "The interface is where technical precision becomes a human experience.",
    portrait:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop",
    experience: "Frontend Engineering",
    specialties: ["React", "TypeScript", "Responsive UI", "Accessibility"],
    ledProjects: ["Himaly", "Aawaj"],
    socials: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "aadarsha-paudel",
    number: "06",
    name: "Aadarsha Paudel",
    role: "CMO (Chief Marketing Officer)",
    department: "management",
    location: "Kathmandu, Nepal",
    bio: "Building the studio voice across social channels through thoughtful content, consistent storytelling, and community engagement.",
    quote: "Every post is an invitation to start a meaningful conversation.",
    portrait:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
    experience: "Chief Marketing Officer",
    specialties: [
      "Content Planning",
      "Social Strategy",
      "Community Growth",
      "Brand Voice",
    ],
    ledProjects: ["Aawaj", "Himaly"],
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
    portrait:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
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
    portrait:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
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
      "DX Studio transformed our multi-market DTC presence. Their obsessive focus on typography, load speed, and headless commerce resulted in a 310% surge in international conversions within the first quarter.",
    author: "Tenzin Norbu",
    role: "Founder & CEO",
    company: "Himaly Heritage Living",
    location: "Kathmandu, Nepal",
    project: "Global E-Commerce Replatforming",
    impactMetric: "+310% Global Revenue",
  },
  {
    id: "t-zentrix",
    number: "02",
    quote:
      "Most agencies build what you ask for. DX Studio probed our core business logic first, dismantled legacy bottlenecks, and delivered an institutional trading terminal that our clients genuinely love navigating.",
    author: "Clara Van Der Meer",
    role: "Head of Product Engineering",
    company: "Zentrix Digital Assets",
    location: "Kathmandu, Nepal",
    project: "Institutional Web3 Terminal",
    impactMetric: "< 18ms Render Latency",
  },
  {
    id: "t-lumina",
    number: "03",
    quote:
      "They treat interactive screen design with the same structural reverence we apply to physical architecture. The digital monograph they crafted for Lumina has become an industry benchmark in our domain.",
    author: "Marcus Vance",
    role: "Managing Principal",
    company: "Lumina Architecture Group",
    location: "Kathmandu, Nepal",
    project: "Spatial Monograph Platform",
    impactMetric: "Awwwards Site of the Day",
  },
  {
    id: "t-aawaj",
    number: "04",
    quote:
      "Working directly with senior makers without layers of account executives made all the difference. We launched Aawaj on time, under budget, and with a tactile audio visualizer that exceeded every stakeholder expectation.",
    author: "Priya Sengupta",
    role: "VP of Digital Experience",
    company: "Aawaj Audio Technologies",
    location: "Kathmandu, Nepal",
    project: "Audio Engine & Brand Identity",
    impactMetric: "4.9★ App Store Rating",
  },
];
