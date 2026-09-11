export type ThemeMode =
  | "warm-light"
  | "obsidian"
  | "sand-stone"
  | "electric-cobalt";
export type Language = "en" | "fr";

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  portfolioCategory?:
    | "Ecommerce"
    | "Travel & Trek"
    | "Creative Websites"
    | "Branding"
    | "Other";
  year: string;
  tagline: string;
  description: string;
  metrics: string[];
  deliverables: string[];
  image: string;
  aspect: "wide" | "tall" | "square";
  colorAccent?: string;
  stats?: { label: string; value: string };
}

export interface ServiceItem {
  number: string;
  title: string;
  category: string;
  summary: string;
  subItems: string[];
  deliverables: string[];
  previewImage: string;
}

export interface PrincipleItem {
  number: string;
  title: string;
  statement: string;
  details: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  duration: string;
  tagline: string;
  description: string;
  outputs: string[];
}

export interface DesignConcept {
  id: string;
  name: string;
  theme: string;
  description: string;
  imagePath: string;
  aspect: string;
  dominantColor: string;
}

export interface TeamMember {
  id: string;
  number: string;
  name: string;
  role: string;
  department:
    | "leadership"
    | "design"
    | "engineering"
    | "strategy"
    | "management";
  location: string;
  bio: string;
  quote: string;
  portrait: string;
  experience: string;
  specialties: string[];
  ledProjects: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    portfolio?: string;
  };
}

export interface TestimonialItem {
  id: string;
  number: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  project: string;
  impactMetric: string;
}
