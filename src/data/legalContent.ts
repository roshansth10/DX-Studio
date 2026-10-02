// Legal page content — exact text from specification.
// All [square bracket] placeholders are intentionally preserved.

export interface LegalSection {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalPage {
  slug: string;
  eyebrow: string;
  title: string;
  lastUpdated: string;
  description: string;
  contactIntro: string;
  sections: LegalSection[];
}

// ─── PRIVACY POLICY ──────────────────────────────────────────────────────────

export const PRIVACY: LegalPage = {
  slug: "privacy",
  eyebrow: "LEGAL // PRIVACY",
  title: "Privacy Policy",
  lastUpdated: "September 25, 2026",
  description:
    "This policy explains how DX Studio collects, uses, and protects information you share with us.",
  contactIntro:
    "Questions about this policy? Reach us directly.",
  sections: [
    {
      id: "who-we-are",
      title: "Who We Are",
      paragraphs: [
        "DX Studio is a creative technology studio based in Kathmandu, Nepal. We design and build digital products, brand identities, and web experiences for ambitious businesses.",
        "Our contact email is roshan.devworks@gmail.com.",
      ],
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      paragraphs: [
        "We collect information you provide directly to us, including:",
      ],
      items: [
        "Name and email address when you submit the project brief form",
        "Project details, budget range, and service preferences you share in that form",
        "Messages sent to us by email",
        "Analytics data collected automatically when you visit this website [Vercel Analytics / Google Analytics, delete if not used]",
      ],
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      paragraphs: [
        "We use the information we collect to:",
      ],
      items: [
        "Respond to your project inquiry",
        "Understand your needs so we can propose appropriate solutions",
        "Improve the website and our services",
        "Communicate with you about your project or our studio",
      ],
    },
    {
      id: "email-and-communications",
      title: "Email and Communications",
      paragraphs: [
        "We do not send marketing emails. If you contact us, we reply only to your inquiry. Our email is hosted by [Gmail / Zoho].",
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      paragraphs: [
        "We retain project brief submissions and email correspondence for [12] months after our last communication. You may request deletion at any time.",
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      paragraphs: [
        "This site uses minimal cookies. Specifically:",
      ],
      items: [
        "A theme preference cookie to remember your chosen color mode (warm-light, obsidian, or sand-stone). This is stored in your browser's localStorage and is never sent to a server.",
        "[analytics cookies, if any]",
      ],
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      paragraphs: [
        "This website is hosted on Vercel. Vercel may collect standard server logs including IP addresses. Please review Vercel's privacy policy for details.",
        "We do not sell, rent, or share your personal information with any third party for marketing purposes.",
      ],
    },
    {
      id: "your-rights",
      title: "Your Rights",
      paragraphs: [
        "You have the right to:",
      ],
      items: [
        "Request access to the personal information we hold about you",
        "Request correction of inaccurate information",
        "Request deletion of your information",
        "Withdraw consent at any time where processing is based on consent",
      ],
      // extra paragraph after items
    },
    {
      id: "your-rights-contact",
      title: "",
      paragraphs: [
        "To exercise any of these rights, email us at roshan.devworks@gmail.com. We will respond within [5] working days.",
      ],
    },
    {
      id: "security",
      title: "Security",
      paragraphs: [
        "We take reasonable steps to protect the information you share with us. However, no method of transmission over the internet is completely secure.",
      ],
    },
    {
      id: "children",
      title: "Children",
      paragraphs: [
        "This website is not directed at children under the age of [7]. We do not knowingly collect personal information from children.",
      ],
    },
    {
      id: "changes",
      title: "Changes to This Policy",
      paragraphs: [
        "We may update this policy from time to time. When we do, we will update the date at the top of this page. Continued use of the site after changes constitutes acceptance of the updated policy.",
      ],
    },
  ],
};

// ─── TERMS OF ENGAGEMENT ─────────────────────────────────────────────────────

export const TERMS: LegalPage = {
  slug: "terms",
  eyebrow: "LEGAL // TERMS",
  title: "Terms of Engagement",
  lastUpdated: "September 1, 2026",
  description:
    "These terms govern the professional relationship between DX Studio and every client we work with.",
  contactIntro:
    "Questions about your project engagement? Talk to us directly.",
  sections: [
    {
      id: "about",
      title: "About These Terms",
      paragraphs: [
        "These Terms of Engagement govern the professional relationship between DX Studio (we, us, our) and every client we work with. By engaging our services, you agree to these terms.",
        "These terms are written to be clear and fair. We intend them to protect both parties and to set honest expectations for how we work together.",
      ],
    },
    {
      id: "scope-of-work",
      title: "Scope of Work",
      paragraphs: [
        "Every engagement begins with a written project brief or proposal that defines the scope of work, deliverables, timeline, and fees. Work outside the agreed scope will be discussed and quoted separately before we proceed.",
        "We reserve the right to decline any project that conflicts with our values or capacity.",
      ],
    },
    {
      id: "fees-and-payment",
      title: "Fees and Payment",
      paragraphs: [
        "All fees are agreed in writing before work begins. We invoice in Nepali Rupees (NPR) unless otherwise agreed.",
        "Invoices are payable within [7] calendar days of the invoice date. Late payments may result in work being paused until the outstanding balance is cleared.",
        "We accept payment via bank transfer and [eSewa / Khalti, if used]. Payment details are provided on each invoice.",
      ],
    },
    {
      id: "deposit-and-milestones",
      title: "Deposit and Milestones",
      paragraphs: [
        "Most projects require a deposit before work begins. The deposit amount and milestone schedule are set out in the project proposal. Deposits are non-refundable once work has commenced.",
      ],
    },
    {
      id: "client-responsibilities",
      title: "Client Responsibilities",
      paragraphs: [
        "Timely and effective collaboration is essential. Specifically, you agree to:",
      ],
      items: [
        "Provide content, assets, and access credentials on agreed dates",
        "Review and respond to deliverables within [14] calendar days",
        "Appoint one primary point of contact for all project communication",
        "Ensure that any content you provide does not infringe third-party rights",
      ],
    },
    {
      id: "revisions",
      title: "Revisions",
      paragraphs: [
        "Each project phase includes [two] rounds of revisions. A revision is a refinement of an agreed concept, not a new direction. Requests that constitute a new direction will be scoped and quoted separately.",
      ],
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      paragraphs: [
        "Upon receipt of full payment, you own the final deliverables as agreed in the project scope. DX Studio retains the right to display the work in our portfolio and marketing materials.",
        "We retain ownership of all preliminary concepts, unused designs, and working files unless otherwise agreed in writing.",
        "Third-party assets such as stock photography, icon sets, or licensed fonts are governed by their respective licenses and may require separate purchases.",
      ],
    },
    {
      id: "confidentiality",
      title: "Confidentiality",
      paragraphs: [
        "We treat all client information as confidential and do not share project details, business information, or unpublished work with third parties without your consent.",
        "We ask the same in return regarding our methods, pricing, and internal processes.",
      ],
    },
    {
      id: "post-launch",
      title: "Post-Launch Support",
      paragraphs: [
        "After a website or product launches, we provide [30] days of complimentary bug fixes for issues directly attributable to our work. This does not cover content changes, new features, or issues arising from third-party plugins or hosting environments.",
      ],
    },
    {
      id: "limitation-of-liability",
      title: "Limitation of Liability",
      paragraphs: [
        "DX Studio's liability to you is limited to the fees paid for the specific deliverable giving rise to the claim. We are not liable for indirect, consequential, or incidental losses.",
        "We do not guarantee specific outcomes such as search ranking improvements, conversion rate increases, or revenue growth.",
      ],
    },
    {
      id: "termination",
      title: "Termination",
      paragraphs: [
        "Either party may terminate the engagement with written notice. Work completed up to the point of termination will be invoiced and is payable.",
        "If you terminate a project mid-way, the deposit is retained and any work completed beyond the deposit value will be invoiced at our standard rate.",
      ],
    },
    {
      id: "governing-law",
      title: "Governing Law",
      paragraphs: [
        "These terms are governed by the laws of Nepal. Any disputes will be resolved in good faith. If resolution is not possible, disputes will be subject to the jurisdiction of the courts of Kathmandu.",
      ],
    },
    {
      id: "updates",
      title: "Updates to These Terms",
      paragraphs: [
        "We may update these terms from time to time. The date at the top of this page reflects the latest revision. Continued engagement after an update constitutes acceptance.",
      ],
    },
  ],
};

// ─── ACCESSIBILITY ────────────────────────────────────────────────────────────

export const ACCESSIBILITY: LegalPage = {
  slug: "accessibility",
  eyebrow: "LEGAL // ACCESSIBILITY",
  title: "Accessibility",
  lastUpdated: "[October 1, 2026]",
  description:
    "Our commitment to making this website usable by everyone, regardless of ability or technology.",
  contactIntro:
    "Encountered an accessibility barrier? Let us know.",
  sections: [
    {
      id: "commitment",
      title: "Our Commitment",
      paragraphs: [
        "DX Studio is committed to making this website accessible to the widest possible audience, regardless of ability, device, or assistive technology. We believe that good design is inclusive by definition.",
        "We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA.",
      ],
    },
    {
      id: "measures-taken",
      title: "Measures We Have Taken",
      paragraphs: [
        "We have taken the following steps to improve accessibility:",
      ],
      items: [
        "Semantic HTML structure with appropriate heading levels",
        "Sufficient color contrast ratios across all three visual themes",
        "Keyboard navigation support throughout the site, including modals with focus traps and ESC-to-close",
        "ARIA labels and roles on interactive components",
        "Skip-to-content links visible on focus",
        "Responsive layout with no loss of functionality at any screen size from 320px to 1920px",
        "No content relying solely on color to convey meaning",
        "All animations respect the prefers-reduced-motion media query",
        "Images use descriptive alt text",
      ],
    },
    {
      id: "known-limitations",
      title: "Known Limitations",
      paragraphs: [
        "While we work toward full accessibility, some limitations exist:",
      ],
      items: [
        "Some older case study documents linked from project pages may not yet be fully accessible",
        "Complex animations in the hero section may not fully degrade on all screen readers",
      ],
    },
    {
      id: "assistive-technology",
      title: "Assistive Technology Support",
      paragraphs: [
        "This site is designed to work with:",
      ],
      items: [
        "Screen readers including NVDA, JAWS, and VoiceOver",
        "Keyboard-only navigation",
        "Browser zoom up to 200% without loss of content or functionality",
        "High-contrast browser modes",
      ],
    },
    {
      id: "feedback",
      title: "Feedback and Contact",
      paragraphs: [
        "If you encounter an accessibility barrier on this site, we want to know about it. Please contact us at roshan.devworks@gmail.com with:",
      ],
      items: [
        "A description of the barrier you encountered",
        "The URL of the page where it occurred",
        "Your browser and assistive technology, if applicable",
      ],
    },
    {
      id: "feedback-response",
      title: "",
      paragraphs: [
        "We aim to respond within [5] working days and to resolve barriers as quickly as possible.",
      ],
    },
    {
      id: "continuous-improvement",
      title: "Continuous Improvement",
      paragraphs: [
        "Accessibility is not a one-time audit. We incorporate accessibility review into our ongoing development process and conduct periodic checks when significant updates are made to the site.",
      ],
    },
  ],
};
