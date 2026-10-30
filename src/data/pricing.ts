export type CurrencyCode = "USD" | "PKR" | "GBP" | "EUR" | "AED" | "SAR" | "CAD" | "AUD" | "INR";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  flag: string;
  format: (amount: number) => string;
}

export const supportedCurrencies: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: "USD",
    symbol: "$",
    name: "US Dollar (Global)",
    flag: "🇺🇸",
    format: (amt) => `$${amt.toLocaleString("en-US")}`
  },
  PKR: {
    code: "PKR",
    symbol: "₨",
    name: "Pakistani Rupee (Pakistan)",
    flag: "🇵🇰",
    format: (amt) => `₨ ${amt.toLocaleString("en-PK")}`
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    name: "British Pound (UK)",
    flag: "🇬🇧",
    format: (amt) => `£${amt.toLocaleString("en-GB")}`
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    name: "Euro (Europe)",
    flag: "🇪🇺",
    format: (amt) => `€${amt.toLocaleString("de-DE")}`
  },
  AED: {
    code: "AED",
    symbol: "AED",
    name: "UAE Dirham (UAE / Gulf)",
    flag: "🇦🇪",
    format: (amt) => `AED ${amt.toLocaleString("en-AE")}`
  },
  SAR: {
    code: "SAR",
    symbol: "SAR",
    name: "Saudi Riyal (KSA)",
    flag: "🇸🇦",
    format: (amt) => `SAR ${amt.toLocaleString("en-SA")}`
  },
  CAD: {
    code: "CAD",
    symbol: "C$",
    name: "Canadian Dollar (Canada)",
    flag: "🇨🇦",
    format: (amt) => `C$${amt.toLocaleString("en-CA")}`
  },
  AUD: {
    code: "AUD",
    symbol: "A$",
    name: "Australian Dollar (Australia)",
    flag: "🇦🇺",
    format: (amt) => `A$${amt.toLocaleString("en-AU")}`
  },
  INR: {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee (India)",
    flag: "🇮🇳",
    format: (amt) => `₹${amt.toLocaleString("en-IN")}`
  }
};

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  timeline: string;
  summary: string;
  prices: Record<CurrencyCode, number>;
  features: string[];
}

export interface ServicePricing {
  slug: string;
  startingPrice: Record<CurrencyCode, number>;
  tiers: PricingTier[];
}

export const servicesPricing: Record<string, ServicePricing> = {
  "wordpress-development": {
    slug: "wordpress-development",
    startingPrice: {
      USD: 1000,
      PKR: 95000,
      GBP: 790,
      EUR: 920,
      AED: 3670,
      SAR: 3750,
      CAD: 1350,
      AUD: 1500,
      INR: 85000
    },
    tiers: [
      {
        id: "wp-starter",
        name: "Core Custom WordPress",
        badge: "Most Popular For Businesses",
        popular: true,
        timeline: "2 – 3 Weeks",
        summary: "Bespoke clean-coded theme engineering, 100% mobile responsive, ultra-fast speed, and zero plugin bloat.",
        prices: {
          USD: 1000,
          PKR: 95000,
          GBP: 790,
          EUR: 920,
          AED: 3670,
          SAR: 3750,
          CAD: 1350,
          AUD: 1500,
          INR: 85000
        },
        features: [
          "Bespoke lightweight theme (Zero slow templates)",
          "Sub-second page load (<1.2s Core Web Vitals)",
          "Custom post types & flexible Gutenberg blocks",
          "Advanced SEO technical setup & schema",
          "Hardened security & anti-malware configuration",
          "30 days post-launch technical support"
        ]
      },
      {
        id: "wp-growth",
        name: "WooCommerce & E-Commerce",
        timeline: "3 – 4 Weeks",
        summary: "High-converting online store with seamless checkout, inventory tracking, payment gateways, and CRM sync.",
        prices: {
          USD: 1800,
          PKR: 175000,
          GBP: 1420,
          EUR: 1650,
          AED: 6600,
          SAR: 6750,
          CAD: 2450,
          AUD: 2700,
          INR: 150000
        },
        features: [
          "Everything in Core Custom WordPress",
          "Full WooCommerce store with optimized checkout",
          "Stripe / PayPal / Local payment gateway integrations",
          "Automated transactional emails & customer portal",
          "Speed-optimized product filters & search",
          "60 days post-launch technical warranty"
        ]
      },
      {
        id: "wp-enterprise",
        name: "Headless / Enterprise WP",
        timeline: "4 – 6 Weeks",
        summary: "Decoupled Next.js frontend with WordPress headless CMS backend for supreme speed and unlimited scalability.",
        prices: {
          USD: 2900,
          PKR: 285000,
          GBP: 2300,
          EUR: 2680,
          AED: 10650,
          SAR: 10875,
          CAD: 3950,
          AUD: 4350,
          INR: 245000
        },
        features: [
          "Next.js App Router frontend + WP GraphQL",
          "Instantaneous sub-500ms page transitions",
          "Multi-lingual & multi-region localization",
          "Enterprise staging & CI/CD deployment pipeline",
          "Dedicated principal engineer & SLA support"
        ]
      }
    ]
  },
  "shopify-development": {
    slug: "shopify-development",
    startingPrice: {
      USD: 1500,
      PKR: 145000,
      GBP: 1190,
      EUR: 1380,
      AED: 5500,
      SAR: 5600,
      CAD: 2050,
      AUD: 2280,
      INR: 125000
    },
    tiers: [
      {
        id: "shopify-starter",
        name: "Bespoke Storefront Launch",
        badge: "Recommended for Growing Brands",
        popular: true,
        timeline: "2 – 3 Weeks",
        summary: "Custom Liquid storefront engineered for high conversion, minimal app dependencies, and lightning speed.",
        prices: {
          USD: 1500,
          PKR: 145000,
          GBP: 1190,
          EUR: 1380,
          AED: 5500,
          SAR: 5600,
          CAD: 2050,
          AUD: 2280,
          INR: 125000
        },
        features: [
          "Custom lightweight Liquid theme architecture",
          "Conversion-optimized mobile product pages",
          "Cart drawer with upsells and free shipping bar",
          "Elimination of slow monthly subscription apps",
          "Payment gateway & shipping rate setup",
          "30 days dedicated post-launch support"
        ]
      },
      {
        id: "shopify-growth",
        name: "Advanced Brand Store & Funnels",
        timeline: "4 – 5 Weeks",
        summary: "Custom product builders, subscription setups, bundling flows, and automated Klaviyo email integrations.",
        prices: {
          USD: 2500,
          PKR: 245000,
          GBP: 1980,
          EUR: 2300,
          AED: 9180,
          SAR: 9375,
          CAD: 3400,
          AUD: 3800,
          INR: 210000
        },
        features: [
          "Everything in Bespoke Storefront",
          "Custom bundle builder or dynamic variant selectors",
          "Subscription integration (Recharge / Seal)",
          "Klaviyo automated flows & event tracking",
          "Post-purchase one-click upsell flows",
          "60 days post-launch support & CRO review"
        ]
      },
      {
        id: "shopify-enterprise",
        name: "Shopify Plus & Headless Store",
        timeline: "6 – 8 Weeks",
        summary: "Headless Next.js storefront via Shopify Storefront API with custom checkout extensions and ERP/WMS sync.",
        prices: {
          USD: 4200,
          PKR: 420000,
          GBP: 3350,
          EUR: 3900,
          AED: 15400,
          SAR: 15750,
          CAD: 5750,
          AUD: 6380,
          INR: 350000
        },
        features: [
          "Headless Next.js 14 frontend + Storefront API",
          "Global multi-currency & multi-market routing",
          "Shopify Plus checkout UI extensions",
          "Custom ERP / WMS fulfillment synchronization",
          "Dedicated architectural lead & SLA warranty"
        ]
      }
    ]
  },
  "custom-web-development": {
    slug: "custom-web-development",
    startingPrice: {
      USD: 2200,
      PKR: 220000,
      GBP: 1750,
      EUR: 2050,
      AED: 8000,
      SAR: 8250,
      CAD: 3000,
      AUD: 3350,
      INR: 185000
    },
    tiers: [
      {
        id: "custom-core",
        name: "Next.js High-Performance Platform",
        badge: "Modern Tech Stack",
        popular: true,
        timeline: "3 – 4 Weeks",
        summary: "Tailored Next.js + TypeScript website engineered for modern digital authority, SEO supremacy, and sub-second speed.",
        prices: {
          USD: 2200,
          PKR: 220000,
          GBP: 1750,
          EUR: 2050,
          AED: 8000,
          SAR: 8250,
          CAD: 3000,
          AUD: 3350,
          INR: 185000
        },
        features: [
          "Next.js App Router + TypeScript + Tailwind CSS",
          "100/100 Google Lighthouse Core Web Vitals",
          "Dynamic CMS integration (Sanity / Strapi / Supabase)",
          "Enterprise security headers & WAF edge protection",
          "Full Schema.org structured data & social cards",
          "45 days technical warranty & bug-fix guarantee"
        ]
      },
      {
        id: "custom-growth",
        name: "Interactive Web Portal & Database",
        timeline: "5 – 6 Weeks",
        summary: "Custom client dashboard, secure authentication, role-based permissions, and dynamic database workflows.",
        prices: {
          USD: 3600,
          PKR: 360000,
          GBP: 2850,
          EUR: 3350,
          AED: 13200,
          SAR: 13500,
          CAD: 4900,
          AUD: 5450,
          INR: 305000
        },
        features: [
          "Everything in High-Performance Platform",
          "Supabase / PostgreSQL relational schema & auth",
          "Client dashboard with role-based access control",
          "Stripe subscriptions & invoicing webhooks",
          "Automated email notifications via Resend / SendGrid",
          "60 days direct senior engineer support"
        ]
      },
      {
        id: "custom-enterprise",
        name: "Enterprise Multi-Service Architecture",
        timeline: "7 – 10 Weeks",
        summary: "High-concurrency microservices, multi-region database replication, and custom third-party API orchestration.",
        prices: {
          USD: 5500,
          PKR: 550000,
          GBP: 4350,
          EUR: 5100,
          AED: 20200,
          SAR: 20600,
          CAD: 7500,
          AUD: 8350,
          INR: 465000
        },
        features: [
          "Distributed cloud infrastructure & CI/CD pipeline",
          "High-volume data processing & caching layer (Redis)",
          "Granular API security, rate limiting & logging",
          "Comprehensive technical documentation & handover",
          "Quarterly architecture review & SLA maintenance"
        ]
      }
    ]
  },
  "ai-integration": {
    slug: "ai-integration",
    startingPrice: {
      USD: 2800,
      PKR: 280000,
      GBP: 2200,
      EUR: 2580,
      AED: 10200,
      SAR: 10500,
      CAD: 3850,
      AUD: 4250,
      INR: 235000
    },
    tiers: [
      {
        id: "ai-starter",
        name: "Intelligent Workflow Automation",
        badge: "Immediate ROI",
        popular: true,
        timeline: "2 – 3 Weeks",
        summary: "Automate repetitive operational bottlenecks, customer lead processing, and document synthesis using modern LLMs.",
        prices: {
          USD: 2800,
          PKR: 280000,
          GBP: 2200,
          EUR: 2580,
          AED: 10200,
          SAR: 10500,
          CAD: 3850,
          AUD: 4250,
          INR: 235000
        },
        features: [
          "Custom Gemini / OpenAI API integration",
          "Automated lead enrichment & routing pipeline",
          "Smart customer inquiry triage & response drafting",
          "Zero data leakage / privacy-first prompt design",
          "Automated webhook integrations with CRM & Slack",
          "30 days monitoring and prompt tuning"
        ]
      },
      {
        id: "ai-growth",
        name: "Custom RAG Knowledgebase Agent",
        timeline: "4 – 5 Weeks",
        summary: "Retrieval-Augmented Generation (RAG) assistant connected to your internal documents, databases, and customer history.",
        prices: {
          USD: 4500,
          PKR: 450000,
          GBP: 3580,
          EUR: 4180,
          AED: 16500,
          SAR: 16875,
          CAD: 6150,
          AUD: 6850,
          INR: 380000
        },
        features: [
          "Vector database setup (pgvector / Pinecone)",
          "Automated document ingestion & semantic chunking",
          "Hallucination-guarded answers with source citations",
          "Role-restricted permissions for internal staff",
          "Web widget & Slack/Teams bot interface",
          "60 days prompt tuning & vector maintenance"
        ]
      },
      {
        id: "ai-enterprise",
        name: "Autonomous Multi-Agent System",
        timeline: "6 – 8 Weeks",
        summary: "Multi-agent autonomous system capable of multi-step reasoning, tool execution, code running, and complex tasks.",
        prices: {
          USD: 7200,
          PKR: 720000,
          GBP: 5700,
          EUR: 6680,
          AED: 26400,
          SAR: 27000,
          CAD: 9850,
          AUD: 10950,
          INR: 610000
        },
        features: [
          "Autonomous agentic workflow with self-correction",
          "Function calling & database query orchestration",
          "Comprehensive audit logging & safety rails",
          "Dedicated fine-tuning or model routing pipeline",
          "Full IP ownership & source code transfer"
        ]
      }
    ]
  },
  "web-application-development": {
    slug: "web-application-development",
    startingPrice: {
      USD: 3500,
      PKR: 350000,
      GBP: 2790,
      EUR: 3250,
      AED: 12850,
      SAR: 13100,
      CAD: 4800,
      AUD: 5300,
      INR: 295000
    },
    tiers: [
      {
        id: "webapp-mvp",
        name: "Production MVP / SaaS Launch",
        badge: "Built for Founders",
        popular: true,
        timeline: "4 – 6 Weeks",
        summary: "Turn product vision into a scalable, revenue-generating SaaS web application with auth, database, and billing.",
        prices: {
          USD: 3500,
          PKR: 350000,
          GBP: 2790,
          EUR: 3250,
          AED: 12850,
          SAR: 13100,
          CAD: 4800,
          AUD: 5300,
          INR: 295000
        },
        features: [
          "Full-stack Next.js 14 App Router + React + TypeScript",
          "PostgreSQL / Supabase relational database architecture",
          "Complete Auth (Email, Google, OAuth, Session security)",
          "Stripe Billing (Monthly / Annual recurring tiers)",
          "Protected member dashboard with dynamic analytics",
          "60 days warranty & production bug fixes"
        ]
      },
      {
        id: "webapp-scale",
        name: "Scaled Enterprise Application",
        timeline: "7 – 10 Weeks",
        summary: "Multi-tenant B2B platform with team workspaces, audit logs, webhook dispatchers, and granular permissions.",
        prices: {
          USD: 5800,
          PKR: 580000,
          GBP: 4600,
          EUR: 5380,
          AED: 21300,
          SAR: 21750,
          CAD: 7950,
          AUD: 8800,
          INR: 490000
        },
        features: [
          "Everything in MVP SaaS",
          "Multi-tenant organization & team workspace support",
          "Role-Based Access Control (RBAC) with granular ACL",
          "Background worker queues & async job processing",
          "Real-time WebSocket notifications & event stream",
          "90 days post-launch support & performance tuning"
        ]
      },
      {
        id: "webapp-custom",
        name: "Mission-Critical Cloud Platform",
        timeline: "10 – 14 Weeks",
        summary: "High-availability, SOC-2 compliant web application architecture designed for high security and millions of events.",
        prices: {
          USD: 9500,
          PKR: 950000,
          GBP: 7550,
          EUR: 8820,
          AED: 34800,
          SAR: 35600,
          CAD: 13000,
          AUD: 14400,
          INR: 805000
        },
        features: [
          "Microservices / Serverless edge computing",
          "Enterprise compliance architecture & audit trails",
          "Automated disaster recovery & zero-downtime deploys",
          "Dedicated technical lead & sprint planning",
          "Comprehensive engineering documentation"
        ]
      }
    ]
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    startingPrice: {
      USD: 1100,
      PKR: 110000,
      GBP: 890,
      EUR: 1020,
      AED: 4000,
      SAR: 4120,
      CAD: 1500,
      AUD: 1670,
      INR: 95000
    },
    tiers: [
      {
        id: "uiux-starter",
        name: "Website UI/UX & Interactive Prototype",
        badge: "Essential for Conversions",
        popular: true,
        timeline: "2 – 3 Weeks",
        summary: "High-converting, bespoke Figma design engineered for optimal user flow, visual credibility, and developer handoff.",
        prices: {
          USD: 1100,
          PKR: 110000,
          GBP: 890,
          EUR: 1020,
          AED: 4000,
          SAR: 4120,
          CAD: 1500,
          AUD: 1670,
          INR: 95000
        },
        features: [
          "Complete custom Figma file (Desktop & Mobile)",
          "Competitor research & user flow mapping",
          "Clickable interactive Figma prototype",
          "Component library with responsive Auto-Layout",
          "Developer-ready export specs & assets",
          "Unlimited revisions during active design phase"
        ]
      },
      {
        id: "uiux-growth",
        name: "Full Product Design & Design System",
        timeline: "4 – 5 Weeks",
        summary: "Comprehensive multi-screen web app or e-commerce design system with design tokens, states, and accessibility audits.",
        prices: {
          USD: 2100,
          PKR: 210000,
          GBP: 1680,
          EUR: 1950,
          AED: 7700,
          SAR: 7875,
          CAD: 2880,
          AUD: 3200,
          INR: 178000
        },
        features: [
          "Everything in Website UI/UX",
          "Comprehensive Design System with typography & tokens",
          "Multi-role user journey flows (Buyer, Admin, Member)",
          "Dark mode & light mode color palettes",
          "WCAG 2.1 AA accessibility compliance audit",
          "Direct collaboration with your engineering team"
        ]
      },
      {
        id: "uiux-enterprise",
        name: "Enterprise Multi-Brand Design System",
        timeline: "6 – 8 Weeks",
        summary: "Design system tailored for enterprise teams with component documentation, token synchronization, and UI guidelines.",
        prices: {
          USD: 3600,
          PKR: 360000,
          GBP: 2850,
          EUR: 3350,
          AED: 13200,
          SAR: 13500,
          CAD: 4900,
          AUD: 5450,
          INR: 305000
        },
        features: [
          "Zero-dependency scalable Figma token architecture",
          "Storybook component synchronization guidelines",
          "Brand guidelines & typography system documentation",
          "Design system governance & training session",
          "Ongoing design advisory"
        ]
      }
    ]
  }
};

export const budgetOptionsByCurrency: Record<CurrencyCode, string[]> = {
  USD: ["$1,000 – $2,500", "$2,500 – $5,000", "$5,000 – $10,000", "$10,000 – $25,000", "$25,000+"],
  PKR: ["₨ 95,000 – ₨ 200,000", "₨ 200,000 – ₨ 400,000", "₨ 400,000 – ₨ 750,000", "₨ 750,000 – ₨ 1,500,000", "₨ 1,500,000+"],
  GBP: ["£790 – £2,000", "£2,000 – £4,000", "£4,000 – £8,000", "£8,000 – £20,000", "£20,000+"],
  EUR: ["€920 – €2,500", "€2,500 – €5,000", "€5,000 – €10,000", "€10,000 – €25,000", "€25,000+"],
  AED: ["AED 3,600 – AED 9,000", "AED 9,000 – AED 18,000", "AED 18,000 – AED 35,000", "AED 35,000 – AED 90,000", "AED 90,000+"],
  SAR: ["SAR 3,750 – SAR 9,500", "SAR 9,500 – SAR 19,000", "SAR 19,000 – SAR 38,000", "SAR 38,000 – SAR 95,000", "SAR 95,000+"],
  CAD: ["C$1,350 – C$3,500", "C$3,500 – C$7,000", "C$7,000 – C$14,000", "C$14,000 – C$35,000", "C$35,000+"],
  AUD: ["A$1,500 – A$3,800", "A$3,800 – A$7,500", "A$7,500 – A$15,000", "A$15,000 – A$38,000", "A$38,000+"],
  INR: ["₹85,000 – ₹200,000", "₹200,000 – ₹400,000", "₹400,000 – ₹800,000", "₹800,000 – ₹2,000,000", "₹2,000,000+"]
};
