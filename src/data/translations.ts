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
  fr: {
    nav: {
      work: "Projets",
      services: "Services",
      philosophy: "Philosophie",
      process: "Méthode",
      team: "Équipe",
      sectors: "Secteurs",
      letsTalk: "Contact",
      designConcepts: "Direction Artistique",
      themesCount: "4 Thèmes",
      palette: "Nuanciers Studio",
    },
    hero: {
      eyebrow: "STUDIO DE CRÉATION NUMÉRIQUE",
      established: "FONDÉ EN 2026",
      headlinePre: "Nous concevons des ",
      headlineHighlight: "expériences",
      headlinePost: " numériques qui font avancer les entreprises.",
      subtitle:
        "Stratégie, identité, design et technologie pour marques d’envergure. Conception humaine, rigueur mathématique et impact commercial mesurable.",
      exploreWork: "Découvrir nos projets",
      startProject: "Lancer un projet",
      locationLabel: "Localisation",
      locationVal: "Katmandou, Népal",
      focusLabel: "Discipline Clé",
      focusVal: "Design & Ingénierie",
      methodologyLabel: "Méthodologie",
      methodologyVal: "Intentionnelle & Agile",
      scrollPrompt: "Défiler pour Explorer",
      featuredCase: "Étude de Cas Sélectionnée",
      liveTag: "EN LIGNE",
      rescrablePrompt: "Cliquer pour rejouer l’effet",
    },
    intro: {
      eyebrow: "01 // Philosophie",
      standard: "Le Standard DX",
      quotePre: "« Le travail numérique d’excellence n’est pas un décor. ",
      quoteHighlight: "C’est la façon dont on vit votre entreprise. »",
      p1: "Dans un écosystème saturé de gabarits automatisés et d’interfaces interchangeables, la véritable distinction naît de l’artisanat. Nous traitons chaque pixel, micro-interaction et structure de données comme le reflet intransigeant de vos exigences.",
      p2: "Nous refusons les pages génériques vouées à l’oubli. Nous bâtissons des infrastructures numériques pérennes et sur-mesure, conçues pour convertir des visiteurs en ambassadeurs fidèles.",
      p3: "Des créateurs émergents aux fleurons établis en Europe, en Scandinavie et en Asie, notre équipe pluridisciplinaire marie l’ingénierie de pointe à une direction artistique tactile.",
      directImpactLabel: "Impact Direct",
      directImpactHeadline: "Zéro Superflu. 100% d’Exécution Commerciale.",
    },
    services: {
      eyebrow: "02 // Disciplines & Capacités",
      title: "Ce que nous faisons.",
      subtitle:
        "Nous nous associons à des fondateurs et dirigeants visionnaires pour bâtir des identités de marque mémorables, des interfaces fluides et des plateformes pérennes.",
      viewCaseStudies: "Voir les Études de Cas",
    },
    work: {
      eyebrow: "03 // Projets Sélectionnés",
      title: "Conçu pour l’excellence.",
      subtitle:
        "Une sélection rigoureuse de réalisations récentes alliant commerce haut de gamme, systèmes financiers et monographies éditoriales.",
      viewCaseStudy: "Consulter l’Étude",
      featuredDeliverables: "Livrables Principaux",
    },
    principles: {
      eyebrow: "04 // Principes Fondateurs",
      statement:
        "Nous croyons que la clarté surpasse l’éphémère à chaque fois.",
    },
    process: {
      eyebrow: "05 // Modèle de Collaboration",
      title: "De l’idée à l’impact.",
      subtitle:
        "Un flux de travail transparent par sprints, conçu pour éliminer l’incertitude, accélérer la mise en œuvre et préserver l’intégrité créative.",
      keyDeliverables: "Livrables & Artefacts Clés :",
      stage: "PHASE",
      prev: "← Phase Précédente",
      next: "Phase Suivante →",
    },
    team: {
      eyebrow: "06 // Le Collectif",
      title: "Praticiens seniors. Zéro intermédiaire.",
      subtitle:
        "Un accès direct aux associés, directeurs artistiques et ingénieurs principaux. Nous fonctionnons comme un atelier d’orfèvre où chaque membre possède une expertise de premier rang.",
      directAccessTitle: "Promesse d’Accès Direct",
      directAccessDesc:
        "Chez DX Studio, vous dialoguez directement avec les auteurs de votre design et de votre code source. Aucun gestionnaire junior de compte, aucune dilution de l’artisanat.",
      partnerInquiry: "Échanger avec un Associé",
      viewProfile: "Voir le Profil Senior",
    },
    trust: {
      eyebrow: "07 // Confiance & Rayonnement",
      title: "Bâti pour les marques qui exigent la plus haute précision.",
      subtitle:
        "Nos partenaires témoignent de la manière dont une collaboration directe entre praticiens a produit des résultats commerciaux quantifiables à l’international.",
      prev: "Avis Précédent",
      next: "Avis Suivant",
    },
    finalCta: {
      eyebrow: "08 // Prise de Contact",
      title: "Un projet d’envergure à concrétiser ?",
      subtitle:
        "Présentez-nous votre vision. Nous nous chargeons de l’architecture. Nous étudions chaque dossier sous 24 heures.",
      button: "Lancer un projet",
      submitted:
        "Merci. Un associé de notre studio vous répondra sous 24 heures.",
      timezone: "Katmandou • Londres • UTC+5:45",
    },
    footer: {
      tagline:
        "Conception et ingénierie d’expériences numériques de référence pour marques d’exception.",
      rights:
        "DX Studio. Tous droits réservés. Réalisé artisanalement sans gabarit.",
      navigation: "Navigation",
      services: "Disciplines",
      connect: "Contact",
    },
  },
};
