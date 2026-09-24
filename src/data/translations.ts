import { Language } from "../types";

export interface TranslationDictionary {
  nav: {
    work: string;
    services: string;
    philosophy: string;
    process: string;
    team: string;
    sectors: string;
    letsTalk: string;
    designConcepts: string;
    themesCount: string;
    palette: string;
  };
  hero: {
    eyebrow: string;
    established: string;
    headlinePre: string;
    headlineHighlight: string;
    headlinePost: string;
    subtitle: string;
    exploreWork: string;
    startProject: string;
    locationLabel: string;
    locationVal: string;
    focusLabel: string;
    focusVal: string;
    methodologyLabel: string;
    methodologyVal: string;
    scrollPrompt: string;
    featuredCase: string;
    liveTag: string;
    rescrablePrompt: string;
  };
  intro: {
    eyebrow: string;
    standard: string;
    quotePre: string;
    quoteHighlight: string;
    p1: string;
    p2: string;
    p3: string;
    directImpactLabel: string;
    directImpactHeadline: string;
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewCaseStudies: string;
  };
  work: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    featuredDeliverables: string;
  };
  principles: {
    eyebrow: string;
    statement: string;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    keyDeliverables: string;
    stage: string;
    prev: string;
    next: string;
  };
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    directAccessTitle: string;
    directAccessDesc: string;
    partnerInquiry: string;
    viewProfile: string;
  };
  trust: {
    eyebrow: string;
    title: string;
    subtitle: string;
    prev: string;
    next: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    button: string;
    submitted: string;
    timezone: string;
  };
  footer: {
    tagline: string;
    rights: string;
    navigation: string;
    services: string;
    connect: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      work: "Work",
      services: "Services",
      philosophy: "Philosophy",
      process: "Process",
      team: "Team",
      sectors: "Sectors",
      letsTalk: "Let's Talk",
      designConcepts: "Art Direction",
      themesCount: "4 Themes",
      palette: "Studio Palettes",
    },
    hero: {
      eyebrow: "DIGITAL CREATIVE STUDIO",
      established: "EST. 2026",
      headlinePre: "We design ",
      headlineHighlight: "digital",
      headlinePost: " experiences that move businesses forward.",
      subtitle:
        "Strategy, identity, design, and technology for ambitious brands ready to grow. Human-designed, mathematically sound, and engineered for high commercial impact.",
      exploreWork: "Explore our work",
      startProject: "Start a project",
      locationLabel: "Location",
      locationVal: "Kathmandu, Nepal",
      focusLabel: "Core Focus",
      focusVal: "Design & Engineering",
      methodologyLabel: "Methodology",
      methodologyVal: "Intentional & Agile",
      scrollPrompt: "Scroll to Explore",
      featuredCase: "Featured Case Study",
      liveTag: "LIVE",
      rescrablePrompt: "Click to re-scramble",
    },
    intro: {
      eyebrow: "01 // Philosophy",
      standard: "The DX Standard",
      quotePre: "“Good digital work isn’t decoration. ",
      quoteHighlight: "It’s how people experience your business.”",
      p1: "In a digital landscape crowded with automated templates and homogenized interfaces, true distinction comes from craft. We treat every pixel, micro-interaction, and database query as a reflection of your brand’s standards.",
      p2: "We do not build generic landing pages that disappear into the noise. We build bespoke, enduring digital infrastructure designed to convert visitors into loyal advocates.",
      p3: "From early-stage visionaries to enterprise leaders across Europe, Scandinavia, and Asia, our cross-disciplinary team unites rigorous engineering with tactile art direction.",
      directImpactLabel: "Direct Impact",
      directImpactHeadline: "Zero Fluff. 100% Commercial Execution.",
    },
    services: {
      eyebrow: "02 // Capabilities",
      title: "What we do.",
      subtitle:
        "We partner with ambitious founders and enterprises to craft enduring brand identities, frictionless product interfaces, and scalable web architectures.",
      viewCaseStudies: "View Case Studies",
    },
    work: {
      eyebrow: "03 // Selected Work",
      title: "Engineered for distinction.",
      subtitle:
        "A curated selection of recent client engagements spanning luxury commerce, fintech systems, and editorial monographs.",
      viewCaseStudy: "View Case Study",
      featuredDeliverables: "Core Deliverables",
    },
    principles: {
      eyebrow: "04 // Core Principles",
      statement: "We believe clarity beats novelty every single time.",
    },
    process: {
      eyebrow: "05 // Engagement Model",
      title: "From idea to impact.",
      subtitle:
        "A transparent, sprint-based workflow designed to eliminate guesswork, accelerate execution, and protect creative integrity.",
      keyDeliverables: "Key Deliverables & Artifacts:",
      stage: "STAGE",
      prev: "← Previous Stage",
      next: "Next Stage →",
    },
    team: {
      eyebrow: "06 // The Collective",
      title: "Senior practitioners. Zero intermediaries.",
      subtitle:
        "Direct access to partners, principal designers, and senior engineers. We operate as a focused atelier where every contributor has deep domain mastery.",
      directAccessTitle: "Direct Access Promise",
      directAccessDesc:
        "At DX Studio, you collaborate directly with the authors of your design and codebase. No junior account managers or dilution of craft.",
      partnerInquiry: "Direct Partner Inquiry",
      viewProfile: "View Senior Profile",
    },
    trust: {
      eyebrow: "07 // Trust & Reach",
      title: "Built for founders who demand precision.",
      subtitle:
        "Our partners share how direct practitioner collaboration delivered measurable commercial results across global markets.",
      prev: "Previous Review",
      next: "Next Review",
    },
    finalCta: {
      eyebrow: "08 // Initiation",
      title: "Have something worth building?",
      subtitle:
        "Tell us what you’re working on. We’ll figure out the rest. We review every project brief within 24 hours.",
      button: "Start a project",
      submitted:
        "Thank you. Our studio partner will reach out within 24 hours.",
      timezone: "Kathmandu, Nepal • UTC+5:45",
    },
    footer: {
      tagline:
        "Designing and engineering digital experiences that define ambitious brands worldwide.",
      rights:
        "DX Studio. All rights reserved. Handcrafted with zero templates.",
      navigation: "Navigation",
      services: "Disciplines",
      connect: "Connect",
    },
  },
};
