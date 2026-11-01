export type CurrencyCode = "USD" | "PKR" | "GBP" | "EUR" | "AED" | "SAR" | "CAD" | "AUD" | "INR";

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  flag: string;
  prefix: string;
  format: (amount: number, isMonthly?: boolean) => string;
}

export const supportedCurrencies: Record<CurrencyCode, CurrencyConfig> = {
  USD: {
    code: "USD",
    symbol: "$",
    name: "Global / USA",
    flag: "🇺🇸",
    prefix: "$",
    format: (amt, isMonthly) => `$${amt.toLocaleString("en-US")}${isMonthly ? "/mo" : ""}`
  },
  PKR: {
    code: "PKR",
    symbol: "Rs.",
    name: "Pakistan",
    flag: "🇵🇰",
    prefix: "Rs. ",
    format: (amt, isMonthly) => `Rs. ${amt.toLocaleString("en-PK")}${isMonthly ? "/mo" : ""}`
  },
  GBP: {
    code: "GBP",
    symbol: "£",
    name: "United Kingdom",
    flag: "🇬🇧",
    prefix: "£",
    format: (amt, isMonthly) => `£${amt.toLocaleString("en-GB")}${isMonthly ? "/mo" : ""}`
  },
  EUR: {
    code: "EUR",
    symbol: "€",
    name: "Europe",
    flag: "🇪🇺",
    prefix: "€",
    format: (amt, isMonthly) => `€${amt.toLocaleString("de-DE")}${isMonthly ? "/mo" : ""}`
  },
  AED: {
    code: "AED",
    symbol: "AED",
    name: "UAE",
    flag: "🇦🇪",
    prefix: "AED ",
    format: (amt, isMonthly) => `AED ${amt.toLocaleString("en-AE")}${isMonthly ? "/mo" : ""}`
  },
  SAR: {
    code: "SAR",
    symbol: "SAR",
    name: "Saudi Arabia",
    flag: "🇸🇦",
    prefix: "SAR ",
    format: (amt, isMonthly) => `SAR ${amt.toLocaleString("en-SA")}${isMonthly ? "/mo" : ""}`
  },
  CAD: {
    code: "CAD",
    symbol: "C$",
    name: "Canada",
    flag: "🇨🇦",
    prefix: "C$",
    format: (amt, isMonthly) => `C$${amt.toLocaleString("en-CA")}${isMonthly ? "/mo" : ""}`
  },
  AUD: {
    code: "AUD",
    symbol: "A$",
    name: "Australia",
    flag: "🇦🇺",
    prefix: "A$",
    format: (amt, isMonthly) => `A$${amt.toLocaleString("en-AU")}${isMonthly ? "/mo" : ""}`
  },
  INR: {
    code: "INR",
    symbol: "₹",
    name: "India",
    flag: "🇮🇳",
    prefix: "₹",
    format: (amt, isMonthly) => `₹${amt.toLocaleString("en-IN")}${isMonthly ? "/mo" : ""}`
  }
};

export interface MasterServicePrice {
  id: string;
  name: string;
  category: "Development" | "E-Commerce" | "Optimization & SEO" | "Maintenance";
  description: string;
  isMonthly?: boolean;
  isSpecialLandingPage?: boolean;
  prices: Record<CurrencyCode, number>;
}

// Master Pricing Table from client's official rate card (with Landing Page reduced to Rs. 15,000 PKR / $190 USD)
export const masterPricingTable: MasterServicePrice[] = [
  {
    id: "landing-page",
    name: "Landing Page",
    category: "Development",
    isSpecialLandingPage: true,
    description: "Ultra-fast, conversion-focused single page designed to capture high-intent leads and drive direct sales.",
    prices: {
      USD: 190,
      PKR: 15000,
      GBP: 150,
      EUR: 175,
      AED: 700,
      SAR: 720,
      CAD: 260,
      AUD: 290,
      INR: 13500
    }
  },
  {
    id: "wordpress-website",
    name: "WordPress Website",
    category: "Development",
    description: "Complete bespoke WordPress business website with responsive mobile layout, clean code, and zero theme bloat.",
    prices: {
      USD: 500,
      PKR: 45000,
      GBP: 400,
      EUR: 450,
      AED: 1800,
      SAR: 1900,
      CAD: 690,
      AUD: 760,
      INR: 40000
    }
  },
  {
    id: "custom-corporate-website",
    name: "Custom Corporate Website",
    category: "Development",
    description: "Enterprise corporate brand website engineered with Next.js/Tailwind for maximum performance and brand authority.",
    prices: {
      USD: 900,
      PKR: 80000,
      GBP: 700,
      EUR: 800,
      AED: 3300,
      SAR: 3400,
      CAD: 1240,
      AUD: 1370,
      INR: 72000
    }
  },
  {
    id: "elementor-website",
    name: "Elementor Website",
    category: "Development",
    description: "Speed-optimized Elementor Pro build with customized visual components and easy client marketing controls.",
    prices: {
      USD: 350,
      PKR: 35000,
      GBP: 280,
      EUR: 320,
      AED: 1300,
      SAR: 1350,
      CAD: 480,
      AUD: 530,
      INR: 30000
    }
  },
  {
    id: "woocommerce-development",
    name: "WooCommerce Development",
    category: "E-Commerce",
    description: "Full e-commerce store with catalog, shopping cart, custom checkout, and automated payment gateway integrations.",
    prices: {
      USD: 800,
      PKR: 75000,
      GBP: 650,
      EUR: 700,
      AED: 3000,
      SAR: 3000,
      CAD: 1100,
      AUD: 1220,
      INR: 68000
    }
  },
  {
    id: "shopify-development",
    name: "Shopify Development",
    category: "E-Commerce",
    description: "Bespoke high-converting Shopify storefront with custom Liquid architecture, cart upsells, and zero app bloat.",
    prices: {
      USD: 750,
      PKR: 70000,
      GBP: 600,
      EUR: 680,
      AED: 2800,
      SAR: 2850,
      CAD: 1030,
      AUD: 1140,
      INR: 63000
    }
  },
  {
    id: "custom-web-development",
    name: "Custom Web Development",
    category: "Development",
    description: "Tailored full-stack web application or portal built with React, Next.js, TypeScript, and robust database backends.",
    prices: {
      USD: 1200,
      PKR: 100000,
      GBP: 950,
      EUR: 1100,
      AED: 4400,
      SAR: 4500,
      CAD: 1650,
      AUD: 1820,
      INR: 90000
    }
  },
  {
    id: "web-application-saas",
    name: "Web Application / SaaS",
    category: "Development",
    description: "Full production SaaS MVP or enterprise application with database, authentication, billing tiers, and dashboards.",
    prices: {
      USD: 2500,
      PKR: 250000,
      GBP: 2000,
      EUR: 2300,
      AED: 9200,
      SAR: 9400,
      CAD: 3450,
      AUD: 3800,
      INR: 225000
    }
  },
  {
    id: "ai-integration",
    name: "AI Integration",
    category: "Development",
    description: "Smart LLM workflow automation, AI customer triage, document synthesis, and custom Gemini/OpenAI agents.",
    prices: {
      USD: 500,
      PKR: 50000,
      GBP: 400,
      EUR: 450,
      AED: 1850,
      SAR: 1900,
      CAD: 690,
      AUD: 760,
      INR: 45000
    }
  },
  {
    id: "website-redesign",
    name: "Website Redesign",
    category: "Optimization & SEO",
    description: "Modern visual makeover, mobile UX optimization, and conversion-focused restructuring of your existing site.",
    prices: {
      USD: 400,
      PKR: 40000,
      GBP: 320,
      EUR: 360,
      AED: 1500,
      SAR: 1500,
      CAD: 550,
      AUD: 610,
      INR: 36000
    }
  },
  {
    id: "speed-optimization",
    name: "Speed Optimization",
    category: "Optimization & SEO",
    description: "Core Web Vitals audit, image compression, script tree-shaking, and sub-second load time guarantee.",
    prices: {
      USD: 150,
      PKR: 15000,
      GBP: 120,
      EUR: 135,
      AED: 550,
      SAR: 575,
      CAD: 210,
      AUD: 230,
      INR: 13500
    }
  },
  {
    id: "website-maintenance",
    name: "Website Maintenance",
    category: "Maintenance",
    isMonthly: true,
    description: "Monthly security patches, plugin/core updates, 24/7 uptime monitoring, daily backups, and bug fixes.",
    prices: {
      USD: 100,
      PKR: 8000,
      GBP: 80,
      EUR: 90,
      AED: 370,
      SAR: 375,
      CAD: 140,
      AUD: 150,
      INR: 7200
    }
  },
  {
    id: "seo-services",
    name: "SEO Services",
    category: "Optimization & SEO",
    isMonthly: true,
    description: "Technical SEO audits, keyword research, on-page optimization, Schema markup, and Search Console management.",
    prices: {
      USD: 300,
      PKR: 25000,
      GBP: 240,
      EUR: 275,
      AED: 1100,
      SAR: 1125,
      CAD: 410,
      AUD: 450,
      INR: 22500
    }
  }
];

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
    // Starts at Landing Page Special (Rs. 15,000 / $190) or WordPress Website (Rs. 45,000 / $500)
    startingPrice: {
      USD: 500,
      PKR: 45000,
      GBP: 400,
      EUR: 450,
      AED: 1800,
      SAR: 1900,
      CAD: 690,
      AUD: 760,
      INR: 40000
    },
    tiers: [
      {
        id: "wp-landing",
        name: "High-Converting Landing Page",
        badge: "Special Offer",
        popular: false,
        timeline: "4 – 7 Days",
        summary: "Single-page high-converting sales funnel, lead generation layout, mobile-first responsiveness, and form integrations.",
        prices: {
          USD: 190,
          PKR: 15000,
          GBP: 150,
          EUR: 175,
          AED: 700,
          SAR: 720,
          CAD: 260,
          AUD: 290,
          INR: 13500
        },
        features: [
          "Special low-cost landing page package",
          "Ultra-fast sub-second loading speed",
          "Lead capture form & WhatsApp button",
          "Conversion-focused copywriting structure",
          "SEO meta tags & social share card",
          "15 days technical warranty"
        ]
      },
      {
        id: "wp-starter",
        name: "Standard WordPress Website",
        badge: "Most Popular",
        popular: true,
        timeline: "1 – 2 Weeks",
        summary: "Bespoke clean-coded theme engineering, 100% mobile responsive, ultra-fast speed, and zero plugin bloat.",
        prices: {
          USD: 500,
          PKR: 45000,
          GBP: 400,
          EUR: 450,
          AED: 1800,
          SAR: 1900,
          CAD: 690,
          AUD: 760,
          INR: 40000
        },
        features: [
          "Complete multi-page WordPress business website",
          "Bespoke lightweight theme (Zero slow templates)",
          "Sub-second page load (<1.2s Core Web Vitals)",
          "Custom post types & flexible Gutenberg blocks",
          "Advanced SEO technical setup & schema",
          "30 days post-launch technical support"
        ]
      },
      {
        id: "wp-growth",
        name: "WooCommerce Storefront",
        timeline: "2 – 3 Weeks",
        summary: "High-converting online store with seamless checkout, inventory tracking, payment gateways, and CRM sync.",
        prices: {
          USD: 800,
          PKR: 75000,
          GBP: 650,
          EUR: 700,
          AED: 3000,
          SAR: 3000,
          CAD: 1100,
          AUD: 1220,
          INR: 68000
        },
        features: [
          "Everything in Standard WordPress Website",
          "Full WooCommerce store with optimized checkout",
          "Stripe / PayPal / Local payment gateway integrations",
          "Automated transactional emails & customer portal",
          "Speed-optimized product filters & search",
          "60 days post-launch technical warranty"
        ]
      }
    ]
  },
  "shopify-development": {
    slug: "shopify-development",
    startingPrice: {
      USD: 750,
      PKR: 70000,
      GBP: 600,
      EUR: 680,
      AED: 2800,
      SAR: 2850,
      CAD: 1030,
      AUD: 1140,
      INR: 63000
    },
    tiers: [
      {
        id: "shopify-landing",
        name: "Shopify Product Landing Page",
        badge: "Quick Launch",
        popular: false,
        timeline: "5 – 7 Days",
        summary: "High-converting single product landing page with sticky buy button, dynamic reviews, and one-click checkout.",
        prices: {
          USD: 290,
          PKR: 28000,
          GBP: 230,
          EUR: 260,
          AED: 1050,
          SAR: 1100,
          CAD: 400,
          AUD: 440,
          INR: 25000
        },
        features: [
          "Focused single-product sales page",
          "Sticky ATC (Add-To-Cart) & variant pills",
          "Fast mobile checkout with Apple Pay / Google Pay",
          "Trust badges, FAQ accordion & social proof",
          "30 days technical support"
        ]
      },
      {
        id: "shopify-starter",
        name: "Full Shopify Storefront",
        badge: "Recommended for Brands",
        popular: true,
        timeline: "2 – 3 Weeks",
        summary: "Custom Liquid storefront engineered for high conversion, minimal app dependencies, and lightning speed.",
        prices: {
          USD: 750,
          PKR: 70000,
          GBP: 600,
          EUR: 680,
          AED: 2800,
          SAR: 2850,
          CAD: 1030,
          AUD: 1140,
          INR: 63000
        },
        features: [
          "Complete bespoke Shopify store setup & theme",
          "Custom lightweight Liquid architecture",
          "Cart drawer with upsells and free shipping bar",
          "Elimination of slow monthly subscription apps",
          "Payment gateway & shipping rate setup",
          "30 days dedicated post-launch support"
        ]
      },
      {
        id: "shopify-growth",
        name: "Advanced Brand Store & Funnels",
        timeline: "3 – 5 Weeks",
        summary: "Custom product builders, subscription setups, bundling flows, and automated email marketing integrations.",
        prices: {
          USD: 1400,
          PKR: 130000,
          GBP: 1120,
          EUR: 1280,
          AED: 5200,
          SAR: 5350,
          CAD: 1920,
          AUD: 2130,
          INR: 118000
        },
        features: [
          "Everything in Full Shopify Storefront",
          "Custom bundle builder or dynamic variant selectors",
          "Subscription integration (Recharge / Seal)",
          "Klaviyo automated flows & event tracking",
          "Post-purchase one-click upsell flows",
          "60 days post-launch support & CRO review"
        ]
      }
    ]
  },
  "custom-web-development": {
    slug: "custom-web-development",
    startingPrice: {
      USD: 900,
      PKR: 80000,
      GBP: 700,
      EUR: 800,
      AED: 3300,
      SAR: 3400,
      CAD: 1240,
      AUD: 1370,
      INR: 72000
    },
    tiers: [
      {
        id: "custom-landing",
        name: "Next.js High-Conversion Landing Page",
        badge: "Ultra-Fast",
        popular: false,
        timeline: "5 – 7 Days",
        summary: "Hardened Next.js + Tailwind single-page landing with instant load times, custom animations, and lead capture.",
        prices: {
          USD: 250,
          PKR: 20000,
          GBP: 200,
          EUR: 230,
          AED: 900,
          SAR: 950,
          CAD: 340,
          AUD: 380,
          INR: 18000
        },
        features: [
          "Next.js App Router + TypeScript + Tailwind CSS",
          "100/100 Google Lighthouse Core Web Vitals",
          "Lead capture with email notification & database",
          "Enterprise edge security & WAF protection",
          "30 days technical support"
        ]
      },
      {
        id: "custom-corporate",
        name: "Custom Corporate Website",
        badge: "Corporate Choice",
        popular: true,
        timeline: "2 – 3 Weeks",
        summary: "Tailored Next.js corporate platform engineered for modern digital authority, SEO supremacy, and sub-second speed.",
        prices: {
          USD: 900,
          PKR: 80000,
          GBP: 700,
          EUR: 800,
          AED: 3300,
          SAR: 3400,
          CAD: 1240,
          AUD: 1370,
          INR: 72000
        },
        features: [
          "Complete multi-page corporate web architecture",
          "Next.js App Router + TypeScript + Tailwind CSS",
          "Dynamic CMS integration (Sanity / Supabase)",
          "Enterprise security headers & WAF edge protection",
          "Full Schema.org structured data & social cards",
          "45 days technical warranty & bug-fix guarantee"
        ]
      },
      {
        id: "custom-full",
        name: "Advanced Custom Web Development",
        timeline: "4 – 6 Weeks",
        summary: "Custom client dashboard, secure authentication, role-based permissions, and dynamic database workflows.",
        prices: {
          USD: 1200,
          PKR: 100000,
          GBP: 950,
          EUR: 1100,
          AED: 4400,
          SAR: 4500,
          CAD: 1650,
          AUD: 1820,
          INR: 90000
        },
        features: [
          "Everything in Custom Corporate Website",
          "Supabase / PostgreSQL relational schema & auth",
          "Client dashboard with role-based access control",
          "Stripe subscriptions & invoicing webhooks",
          "Automated email notifications via Resend",
          "60 days direct senior engineer support"
        ]
      }
    ]
  },
  "ai-integration": {
    slug: "ai-integration",
    startingPrice: {
      USD: 500,
      PKR: 50000,
      GBP: 400,
      EUR: 450,
      AED: 1850,
      SAR: 1900,
      CAD: 690,
      AUD: 760,
      INR: 45000
    },
    tiers: [
      {
        id: "ai-starter",
        name: "AI Lead & Customer Workflow Integration",
        badge: "Instant ROI",
        popular: true,
        timeline: "1 – 2 Weeks",
        summary: "Automate repetitive operational bottlenecks, customer lead processing, and document synthesis using modern LLMs.",
        prices: {
          USD: 500,
          PKR: 50000,
          GBP: 400,
          EUR: 450,
          AED: 1850,
          SAR: 1900,
          CAD: 690,
          AUD: 760,
          INR: 45000
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
        id: "ai-rag",
        name: "Custom RAG Knowledgebase Agent",
        timeline: "2 – 4 Weeks",
        summary: "Retrieval-Augmented Generation (RAG) assistant connected to your internal documents, databases, and customer history.",
        prices: {
          USD: 1100,
          PKR: 100000,
          GBP: 880,
          EUR: 990,
          AED: 4050,
          SAR: 4150,
          CAD: 1520,
          AUD: 1670,
          INR: 88000
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
        name: "Autonomous Multi-Agent AI System",
        timeline: "4 – 6 Weeks",
        summary: "Multi-agent autonomous system capable of multi-step reasoning, tool execution, code running, and complex tasks.",
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
          "Autonomous agentic workflow with self-correction",
          "Function calling & database query orchestration",
          "Comprehensive audit logging & safety rails",
          "Full IP ownership & source code transfer",
          "90 days senior engineer support"
        ]
      }
    ]
  },
  "web-application-development": {
    slug: "web-application-development",
    startingPrice: {
      USD: 2500,
      PKR: 250000,
      GBP: 2000,
      EUR: 2300,
      AED: 9200,
      SAR: 9400,
      CAD: 3450,
      AUD: 3800,
      INR: 225000
    },
    tiers: [
      {
        id: "webapp-mvp",
        name: "Production MVP / SaaS Launch",
        badge: "Built for Founders",
        popular: true,
        timeline: "3 – 5 Weeks",
        summary: "Turn product vision into a scalable, revenue-generating SaaS web application with auth, database, and billing.",
        prices: {
          USD: 2500,
          PKR: 250000,
          GBP: 2000,
          EUR: 2300,
          AED: 9200,
          SAR: 9400,
          CAD: 3450,
          AUD: 3800,
          INR: 225000
        },
        features: [
          "Full-stack Next.js App Router + React + TypeScript",
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
        timeline: "5 – 8 Weeks",
        summary: "Multi-tenant B2B platform with team workspaces, audit logs, webhook dispatchers, and granular permissions.",
        prices: {
          USD: 3900,
          PKR: 390000,
          GBP: 3100,
          EUR: 3550,
          AED: 14300,
          SAR: 14600,
          CAD: 5350,
          AUD: 5900,
          INR: 350000
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
        timeline: "8 – 12 Weeks",
        summary: "High-availability, compliant web application architecture designed for high security and heavy traffic.",
        prices: {
          USD: 5900,
          PKR: 590000,
          GBP: 4700,
          EUR: 5400,
          AED: 21700,
          SAR: 22200,
          CAD: 8100,
          AUD: 8950,
          INR: 530000
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
      USD: 190,
      PKR: 15000,
      GBP: 150,
      EUR: 175,
      AED: 700,
      SAR: 720,
      CAD: 260,
      AUD: 290,
      INR: 13500
    },
    tiers: [
      {
        id: "uiux-landing",
        name: "Landing Page UI/UX Prototype",
        badge: "Special Price",
        popular: true,
        timeline: "3 – 5 Days",
        summary: "High-converting, bespoke Figma landing page design engineered for optimal user flow and rapid development handoff.",
        prices: {
          USD: 190,
          PKR: 15000,
          GBP: 150,
          EUR: 175,
          AED: 700,
          SAR: 720,
          CAD: 260,
          AUD: 290,
          INR: 13500
        },
        features: [
          "Complete custom Figma file (Desktop & Mobile)",
          "Conversion-optimized user flow mapping",
          "Clickable interactive Figma prototype",
          "Developer-ready export specs & assets",
          "Unlimited revisions during active phase"
        ]
      },
      {
        id: "uiux-redesign",
        name: "Complete Website Redesign",
        timeline: "1 – 2 Weeks",
        summary: "Modern visual overhaul, mobile UX restructuring, and brand modernization for multi-page websites.",
        prices: {
          USD: 400,
          PKR: 40000,
          GBP: 320,
          EUR: 360,
          AED: 1500,
          SAR: 1500,
          CAD: 550,
          AUD: 610,
          INR: 36000
        },
        features: [
          "Multi-page responsive Figma designs",
          "Modern typography, palette, and component tokens",
          "Accessibility & contrast audits (WCAG 2.1)",
          "Asset optimization & handover documentation"
        ]
      },
      {
        id: "uiux-system",
        name: "Full Product Design System",
        timeline: "3 – 4 Weeks",
        summary: "Comprehensive multi-screen web app or e-commerce design system with design tokens, states, and accessibility audits.",
        prices: {
          USD: 900,
          PKR: 85000,
          GBP: 700,
          EUR: 800,
          AED: 3300,
          SAR: 3400,
          CAD: 1240,
          AUD: 1370,
          INR: 75000
        },
        features: [
          "Zero-dependency scalable Figma token architecture",
          "Multi-role user journey flows (Buyer, Admin, Member)",
          "Dark mode & light mode palettes",
          "Direct collaboration with your engineering team"
        ]
      }
    ]
  },
  "website-redesign": {
    slug: "website-redesign",
    startingPrice: {
      USD: 400,
      PKR: 40000,
      GBP: 320,
      EUR: 360,
      AED: 1500,
      SAR: 1500,
      CAD: 550,
      AUD: 610,
      INR: 36000
    },
    tiers: [
      {
        id: "essential-refresh",
        name: "Essential Refresh",
        timeline: "7 – 10 Days",
        summary: "Visual modernization and mobile responsiveness fix for existing 3 to 5 page websites.",
        prices: {
          USD: 400,
          PKR: 40000,
          GBP: 320,
          EUR: 360,
          AED: 1500,
          SAR: 1500,
          CAD: 550,
          AUD: 610,
          INR: 36000
        },
        features: [
          "Complete visual UI redesign & modern typography hierarchy",
          "100% Mobile & tablet layout responsiveness overhaul",
          "Contact forms & lead capture optimization",
          "Zero lost SEO rankings with strict URL preservation"
        ]
      },
      {
        id: "complete-redesign",
        name: "Complete Redesign & Speed",
        badge: "Recommended",
        popular: true,
        timeline: "2 – 3 Weeks",
        summary: "Full structural, visual, and performance overhaul for corporate and brand websites.",
        prices: {
          USD: 750,
          PKR: 75000,
          GBP: 600,
          EUR: 680,
          AED: 2800,
          SAR: 2850,
          CAD: 1030,
          AUD: 1140,
          INR: 65000
        },
        features: [
          "Up to 10 modernized pages with custom Tailwind or WordPress architecture",
          "Core Web Vitals speed optimization (Sub-second load times)",
          "301 Permanent Redirect mapping & Schema structured data",
          "Interactive micro-interactions & conversion funnel optimization"
        ]
      },
      {
        id: "enterprise-overhaul",
        name: "Full Digital Evolution",
        timeline: "3 – 4 Weeks",
        summary: "Large-scale redesign for e-commerce platforms, SaaS portals, or complex legacy sites.",
        prices: {
          USD: 1200,
          PKR: 120000,
          GBP: 950,
          EUR: 1100,
          AED: 4400,
          SAR: 4500,
          CAD: 1650,
          AUD: 1820,
          INR: 105000
        },
        features: [
          "Multi-page enterprise redesign with complete database & content migration",
          "Custom component library & design system tokens",
          "E-commerce checkout & product page conversion overhaul",
          "Dedicated staging preview & 60 days VIP post-launch support"
        ]
      }
    ]
  },
  "website-maintenance": {
    slug: "website-maintenance",
    startingPrice: {
      USD: 100,
      PKR: 8000,
      GBP: 80,
      EUR: 90,
      AED: 370,
      SAR: 375,
      CAD: 140,
      AUD: 150,
      INR: 7200
    },
    tiers: [
      {
        id: "essential-care",
        name: "Essential Care Retainer",
        timeline: "Ongoing Monthly",
        summary: "Baseline security, backups, and uptime monitoring for corporate and portfolio websites.",
        prices: {
          USD: 100,
          PKR: 8000,
          GBP: 80,
          EUR: 90,
          AED: 370,
          SAR: 375,
          CAD: 140,
          AUD: 150,
          INR: 7200
        },
        features: [
          "24/7 Global uptime monitoring (60-second ping intervals)",
          "Daily encrypted offsite cloud backups (AWS S3)",
          "Monthly core, theme & plugin security patching on staging",
          "1 hour dedicated monthly engineering support for content updates"
        ]
      },
      {
        id: "pro-active-support",
        name: "Growth Retainer",
        badge: "Most Popular",
        popular: true,
        timeline: "Ongoing Monthly",
        summary: "Comprehensive maintenance, speed auditing, and active engineering support for growing stores and businesses.",
        prices: {
          USD: 200,
          PKR: 18000,
          GBP: 160,
          EUR: 180,
          AED: 750,
          SAR: 760,
          CAD: 280,
          AUD: 300,
          INR: 15000
        },
        features: [
          "Everything in Essential Care plus high-priority SLA response",
          "3 hours dedicated monthly engineering support (banner, text & layout updates)",
          "Quarterly Core Web Vitals audit & speed re-tuning",
          "WAF firewall rule management & proactive malware scanning"
        ]
      },
      {
        id: "dedicated-retainer",
        name: "Dedicated Engineering SLA",
        timeline: "Ongoing Monthly",
        summary: "Continuous engineering support, custom feature tweaks, and priority bug fixing for high-traffic platforms.",
        prices: {
          USD: 450,
          PKR: 40000,
          GBP: 360,
          EUR: 410,
          AED: 1650,
          SAR: 1700,
          CAD: 620,
          AUD: 680,
          INR: 35000
        },
        features: [
          "Everything in Growth Retainer plus 8 hours dedicated dev hours",
          "Instant emergency hotfix response within 2 hours",
          "Database optimization & staging testing environment",
          "Direct WhatsApp / Slack engineering channel access"
        ]
      }
    ]
  },
  "product-upload-catalog-management": {
    slug: "product-upload-catalog-management",
    startingPrice: {
      USD: 150,
      PKR: 15000,
      GBP: 120,
      EUR: 135,
      AED: 550,
      SAR: 575,
      CAD: 210,
      AUD: 230,
      INR: 13500
    },
    tiers: [
      {
        id: "catalog-starter",
        name: "Batch Upload (Up to 100 SKUs)",
        timeline: "2 – 3 Days",
        summary: "Accurate uploading, variant configuration, and image formatting for up to 100 products.",
        prices: {
          USD: 150,
          PKR: 15000,
          GBP: 120,
          EUR: 135,
          AED: 550,
          SAR: 575,
          CAD: 210,
          AUD: 230,
          INR: 13500
        },
        features: [
          "Up to 100 products uploaded (Shopify, WooCommerce, or Custom)",
          "Variant matrix setup (Colors, sizes, SKUs, inventory counts)",
          "Product image cropping & WebP compression for lightning speed",
          "SEO title tags & image alt-text optimization included"
        ]
      },
      {
        id: "catalog-growth",
        name: "Large Catalog (Up to 300 SKUs)",
        badge: "Most Popular",
        popular: true,
        timeline: "3 – 5 Days",
        summary: "High-volume product entry, structured collection mapping, and Google Merchant tag optimization.",
        prices: {
          USD: 350,
          PKR: 35000,
          GBP: 280,
          EUR: 320,
          AED: 1300,
          SAR: 1350,
          CAD: 480,
          AUD: 530,
          INR: 30000
        },
        features: [
          "Up to 300 products uploaded with multi-attribute variations",
          "Smart automated collection tagging & filter menu navigation",
          "Full high-res photo editing, aspect ratio standardization & WebP conversion",
          "Cart addition & checkout flow verification for all products"
        ]
      },
      {
        id: "catalog-managed",
        name: "Ongoing Catalog Upkeep",
        timeline: "Monthly Retainer",
        summary: "Continuous product catalog management, new arrivals uploading, and inventory synchronization.",
        prices: {
          USD: 300,
          PKR: 30000,
          GBP: 240,
          EUR: 270,
          AED: 1100,
          SAR: 1150,
          CAD: 410,
          AUD: 450,
          INR: 25000
        },
        features: [
          "Up to 150 new products or updates uploaded every month",
          "Price changes, seasonal sale badge setup & inventory adjustments",
          "Priority 24-hour turnaround for new collection drops",
          "Broken link and out-of-stock product audit"
        ]
      }
    ]
  }
};

export const budgetOptionsByCurrency: Record<CurrencyCode, string[]> = {
  PKR: [
    "Rs. 15,000 – Rs. 45,000 (Landing Page / Speed)",
    "Rs. 45,000 – Rs. 100,000 (WordPress / Shopify / Redesign)",
    "Rs. 100,000 – Rs. 250,000 (Custom Web / AI Integration)",
    "Rs. 250,000 – Rs. 500,000 (Web Application / SaaS)",
    "Rs. 500,000+ (Enterprise Cloud Systems)"
  ],
  USD: [
    "$190 – $500 (Landing Page / Elementor / Speed)",
    "$500 – $1,000 (WordPress / Shopify / Redesign)",
    "$1,000 – $2,500 (Custom Web / AI Integration)",
    "$2,500 – $5,000 (Web Application / SaaS)",
    "$5,000+ (Enterprise Architecture)"
  ],
  GBP: [
    "£150 – £400 (Landing Page / Elementor)",
    "£400 – £800 (WordPress / Shopify)",
    "£800 – £2,000 (Custom Web / AI)",
    "£2,000 – £4,000 (Web App / SaaS)",
    "£4,000+ (Enterprise)"
  ],
  EUR: [
    "€175 – €450 (Landing Page / Elementor)",
    "€450 – €900 (WordPress / Shopify)",
    "€900 – €2,300 (Custom Web / AI)",
    "€2,300 – €4,500 (Web App / SaaS)",
    "€4,500+ (Enterprise)"
  ],
  AED: [
    "AED 700 – AED 2,000 (Landing Page / Elementor)",
    "AED 2,000 – AED 4,500 (WordPress / Shopify)",
    "AED 4,500 – AED 9,500 (Custom Web / AI)",
    "AED 9,500 – AED 20,000 (Web App / SaaS)",
    "AED 20,000+ (Enterprise)"
  ],
  SAR: [
    "SAR 720 – SAR 2,000 (Landing Page / Elementor)",
    "SAR 2,000 – SAR 4,600 (WordPress / Shopify)",
    "SAR 4,600 – SAR 9,500 (Custom Web / AI)",
    "SAR 9,500 – AED 20,000 (Web App / SaaS)",
    "SAR 20,000+ (Enterprise)"
  ],
  CAD: [
    "C$260 – C$700 (Landing Page / Elementor)",
    "C$700 – C$1,600 (WordPress / Shopify)",
    "C$1,600 – C$3,500 (Custom Web / AI)",
    "C$3,500 – C$7,000 (Web App / SaaS)",
    "C$7,000+ (Enterprise)"
  ],
  AUD: [
    "A$290 – A$750 (Landing Page / Elementor)",
    "A$750 – A$1,800 (WordPress / Shopify)",
    "A$1,800 – A$3,800 (Custom Web / AI)",
    "A$3,800 – A$7,500 (Web App / SaaS)",
    "A$7,500+ (Enterprise)"
  ],
  INR: [
    "₹13,500 – ₹40,000 (Landing Page / Elementor)",
    "₹40,000 – ₹90,000 (WordPress / Shopify)",
    "₹90,000 – ₹225,000 (Custom Web / AI)",
    "₹225,000 – ₹450,000 (Web App / SaaS)",
    "₹450,000+ (Enterprise)"
  ]
};

export interface PackageTier {
  id: "starter" | "professional" | "premium" | "enterprise";
  name: string;
  badge?: string;
  popular?: boolean;
  tagline: string;
  idealFor: string;
  turnaround: string;
  pakistanDisplay: string;
  internationalDisplay: string;
  isStartingFrom?: boolean;
  prices: Record<CurrencyCode, number | null>;
  features: string[];
}

export const packageTiers: PackageTier[] = [
  {
    id: "starter",
    name: "Starter",
    badge: "Fast Launch",
    tagline: "Essential digital presence engineered for startups, solo consultants & high-converting landing pages.",
    idealFor: "Startups, small local businesses & single-offer launches",
    turnaround: "5 – 7 business days",
    pakistanDisplay: "Rs. 35k",
    internationalDisplay: "$350",
    prices: {
      USD: 350,
      PKR: 35000,
      GBP: 280,
      EUR: 320,
      AED: 1300,
      SAR: 1350,
      CAD: 480,
      AUD: 530,
      INR: 30000
    },
    features: [
      "Up to 5 conversion-focused pages (or high-impact landing page)",
      "100% Mobile & tablet responsive architecture",
      "Foundational On-Page SEO (Meta tags, OpenGraph & sitemap)",
      "Lead generation contact form with WhatsApp / email routing",
      "Core Web Vitals speed optimization (Sub-second load times)",
      "SSL configuration & security headers hardening",
      "14 days post-launch warranty & bug-fixing support"
    ]
  },
  {
    id: "professional",
    name: "Professional",
    badge: "Most Popular",
    popular: true,
    tagline: "Comprehensive bespoke digital engineering designed to elevate commercial credibility and maximize conversions.",
    idealFor: "Established brands, corporate firms & growing companies",
    turnaround: "2 – 3 weeks",
    pakistanDisplay: "Rs. 80k",
    internationalDisplay: "$900",
    prices: {
      USD: 900,
      PKR: 80000,
      GBP: 700,
      EUR: 800,
      AED: 3300,
      SAR: 3400,
      CAD: 1240,
      AUD: 1370,
      INR: 72000
    },
    features: [
      "Up to 10 bespoke pages with tailored UI/UX styling",
      "Next.js / Tailwind or custom WordPress engineering (Zero theme bloat)",
      "Advanced On-Page SEO + Local Business Schema structured data",
      "Interactive UI components, micro-animations & testimonial sliders",
      "CRM, newsletter (Mailchimp/Klaviyo) & analytics integration",
      "Multi-layer security (Honeypot anti-spam + rate-limiting)",
      "Complete client dashboard walkthrough & training session",
      "30 days dedicated priority post-launch support"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    badge: "E-Commerce & Scale",
    tagline: "High-performance digital platforms, bespoke Shopify/WooCommerce stores, or custom AI-powered web solutions.",
    idealFor: "E-commerce brands, high-growth startups & custom platforms",
    turnaround: "3 – 5 weeks",
    pakistanDisplay: "Rs. 150k+",
    internationalDisplay: "$1,500+",
    isStartingFrom: true,
    prices: {
      USD: 1500,
      PKR: 150000,
      GBP: 1200,
      EUR: 1380,
      AED: 5500,
      SAR: 5700,
      CAD: 2070,
      AUD: 2280,
      INR: 125000
    },
    features: [
      "Full E-Commerce storefront (Shopify / WooCommerce) or custom web app",
      "Product catalog, inventory tracking, cart upsells & checkout optimization",
      "Automated payment gateway integrations (Stripe, Paymob, JazzCash/EasyPaisa, COD)",
      "AI workflow or smart chatbot integration (Custom Gemini/OpenAI agents)",
      "Conversion Rate Optimization (CRO) & cart abandonment tracking",
      "Advanced Google Analytics 4, Meta Pixel & conversion API tracking",
      "Staging environment testing before live rollout",
      "60 days priority VIP support & performance SLA"
    ]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    badge: "Custom Architecture",
    tagline: "Tailored full-stack SaaS engineering, multi-tenant web applications, and mission-critical cloud platforms.",
    idealFor: "Funded tech startups, enterprise organizations & SaaS products",
    turnaround: "Tailored sprint roadmap",
    pakistanDisplay: "Custom quote",
    internationalDisplay: "Custom quote",
    prices: {
      USD: null,
      PKR: null,
      GBP: null,
      EUR: null,
      AED: null,
      SAR: null,
      CAD: null,
      AUD: null,
      INR: null
    },
    features: [
      "Full-stack SaaS MVP or custom software engineering",
      "Scalable relational/NoSQL database architecture & caching layer",
      "Multi-tenant authentication, role-based access control (RBAC) & subscriptions",
      "Custom internal admin dashboards & reporting suites",
      "Third-party API & webhook integrations (ERP, CRM, payment rails)",
      "Automated CI/CD deployment pipelines & high-availability cloud hosting",
      "Dedicated senior engineering lead & weekly progress reviews",
      "Long-term retainer & ongoing feature development SLA"
    ]
  }
];

export const pricingConditions = {
  included: [
    {
      title: "Basic Responsive Design Included",
      description: "Every website build is meticulously engineered and verified across mobile, tablet, laptop, and 4K desktop displays with fluid, touch-friendly layouts."
    },
    {
      title: "Basic On-Page SEO Included",
      description: "Standard on-page SEO best practices: semantic heading hierarchy (H1-H4), metadata titles/descriptions, canonical tags, OpenGraph cards, and automated XML sitemaps."
    },
    {
      title: "Core Web Vitals & Speed Optimization",
      description: "Next-gen image formatting, zero bloated plugins, tree-shaken JavaScript, and sub-second load times engineered from the ground up."
    },
    {
      title: "100% Full Code Ownership",
      description: "Upon project completion, you receive complete source code, repository access, and database credentials with absolutely zero vendor lock-in."
    }
  ],
  separate: [
    {
      title: "Domain and Hosting Charged Separately",
      description: "Domain registration and cloud server hosting (e.g. Vercel, Hostinger, AWS, Cloudflare) are billed directly to your own account or managed via our retainer."
    },
    {
      title: "Premium Themes, Plugins & 3rd-Party Subscriptions Separate",
      description: "Commercial licenses (such as paid Shopify apps, premium WordPress plugins, commercial font licenses, or external SaaS APIs) are funded directly by the client."
    },
    {
      title: "Advanced Integrations & Custom Dashboards Quoted Separately",
      description: "Complex third-party ERP/CRM integrations, custom member portals, multi-tier admin dashboards, or bespoke backend logic beyond the agreed initial scope are quoted transparently via milestone add-ons."
    }
  ]
};

export const pricingFaqs = [
  {
    question: "Do you offer a special rate if I only need a single Landing Page?",
    answer: "Yes! If you only need a single, ultra-fast conversion-focused landing page (for a product launch, lead capture campaign, or Google Ads campaign), we have a dedicated Landing Page Special priced at Rs. 15,000 PKR / $190 USD."
  },
  {
    question: "How do payments and project milestones work?",
    answer: "We typically work on a structured 50/50 milestone agreement: 50% deposit upfront to initiate architectural planning, wireframing, and development, and the remaining 50% upon final client sign-off, live deployment, and asset handover."
  },
  {
    question: "Who manages and pays for hosting and domains?",
    answer: "To ensure you always maintain 100% ownership and control over your digital assets, domain registration and hosting accounts are registered under your name. We configure and deploy everything for you free of charge. If you prefer a hands-off experience, we can host and manage your platform under our Monthly Maintenance retainer (Rs. 8,000/mo or $100/mo)."
  },
  {
    question: "Can I upgrade my package as my business grows?",
    answer: "Absolutely. All our codebases are built modularly without bloated frameworks. You can easily start with our Starter package and upgrade to Professional or full E-Commerce as your business expands."
  },
  {
    question: "What currencies do you accept?",
    answer: "We support transparent pricing and local invoicing across Pakistan (PKR via Bank Transfer/Raast/JazzCash/EasyPaisa), the United States (USD via Stripe/Wire), United Kingdom (GBP), Europe (EUR), UAE (AED), Saudi Arabia (SAR), Canada (CAD), and Australia (AUD)."
  }
];

export interface ServiceEstimateInfo {
  name: string;
  badge?: string;
  isSpecialLandingPage?: boolean;
  isStartingFrom?: boolean;
  isMonthly?: boolean;
  prices: Record<CurrencyCode, number | null>;
  scopeNotes: string;
}

export const serviceEstimates: Record<string, ServiceEstimateInfo> = {
  "Landing Page (Pocket-Friendly Special)": {
    name: "Landing Page (Special Offer)",
    badge: "⚡ Special Limited Offer",
    isSpecialLandingPage: true,
    prices: {
      USD: 190,
      PKR: 15000,
      GBP: 150,
      EUR: 175,
      AED: 700,
      SAR: 720,
      CAD: 260,
      AUD: 290,
      INR: 13500
    },
    scopeNotes: "Ultra-fast conversion landing page for ad campaigns, lead gen & product launches. Includes basic responsive design & SEO setup."
  },
  "Landing Page (Special Offer)": {
    name: "Landing Page (Special Offer)",
    badge: "⚡ Special Limited Offer",
    isSpecialLandingPage: true,
    prices: {
      USD: 190,
      PKR: 15000,
      GBP: 150,
      EUR: 175,
      AED: 700,
      SAR: 720,
      CAD: 260,
      AUD: 290,
      INR: 13500
    },
    scopeNotes: "Ultra-fast conversion landing page for ad campaigns, lead gen & product launches. Includes basic responsive design & SEO setup."
  },
  "Starter Package (Fast Launch)": {
    name: "Starter Package",
    badge: "Fast Launch",
    prices: {
      USD: 350,
      PKR: 35000,
      GBP: 280,
      EUR: 320,
      AED: 1300,
      SAR: 1350,
      CAD: 480,
      AUD: 530,
      INR: 30000
    },
    scopeNotes: "Up to 5 conversion pages, 100% mobile-friendly responsive layout, on-page SEO metadata, and contact form integration."
  },
  "Starter Package (Rs. 35k / $350)": {
    name: "Starter Package",
    badge: "Fast Launch",
    prices: {
      USD: 350,
      PKR: 35000,
      GBP: 280,
      EUR: 320,
      AED: 1300,
      SAR: 1350,
      CAD: 480,
      AUD: 530,
      INR: 30000
    },
    scopeNotes: "Up to 5 conversion pages, 100% mobile-friendly responsive layout, on-page SEO metadata, and contact form integration."
  },
  "Professional Package (Complete Business)": {
    name: "Professional Package",
    badge: "Most Popular",
    prices: {
      USD: 900,
      PKR: 80000,
      GBP: 700,
      EUR: 800,
      AED: 3300,
      SAR: 3400,
      CAD: 1240,
      AUD: 1370,
      INR: 72000
    },
    scopeNotes: "Up to 10 bespoke engineered pages, Next.js or custom WordPress, advanced SEO + schema markup, and 30-day post-launch support."
  },
  "Professional Package (Rs. 80k / $900)": {
    name: "Professional Package",
    badge: "Most Popular",
    prices: {
      USD: 900,
      PKR: 80000,
      GBP: 700,
      EUR: 800,
      AED: 3300,
      SAR: 3400,
      CAD: 1240,
      AUD: 1370,
      INR: 72000
    },
    scopeNotes: "Up to 10 bespoke engineered pages, Next.js or custom WordPress, advanced SEO + schema markup, and 30-day post-launch support."
  },
  "Premium Package (E-Commerce & Scale)": {
    name: "Premium Package",
    badge: "E-Commerce & Scale",
    isStartingFrom: true,
    prices: {
      USD: 1500,
      PKR: 150000,
      GBP: 1200,
      EUR: 1380,
      AED: 5500,
      SAR: 5700,
      CAD: 2070,
      AUD: 2280,
      INR: 125000
    },
    scopeNotes: "Full E-Commerce store (Shopify / WooCommerce) or complex web application with payments, inventory and 60-day VIP support."
  },
  "Premium Package (Rs. 150k+ / $1,500+)": {
    name: "Premium Package",
    badge: "E-Commerce & Scale",
    isStartingFrom: true,
    prices: {
      USD: 1500,
      PKR: 150000,
      GBP: 1200,
      EUR: 1380,
      AED: 5500,
      SAR: 5700,
      CAD: 2070,
      AUD: 2280,
      INR: 125000
    },
    scopeNotes: "Full E-Commerce store (Shopify / WooCommerce) or complex web application with payments, inventory and 60-day VIP support."
  },
  "Enterprise Custom Scope": {
    name: "Enterprise Architecture",
    badge: "Tailored Architecture",
    prices: {
      USD: null,
      PKR: null,
      GBP: null,
      EUR: null,
      AED: null,
      SAR: null,
      CAD: null,
      AUD: null,
      INR: null
    },
    scopeNotes: "Custom full-stack SaaS platform, multi-tenant databases, custom APIs and high-availability cloud infrastructure."
  },
  "WordPress Development": {
    name: "WordPress Development",
    prices: {
      USD: 500,
      PKR: 45000,
      GBP: 400,
      EUR: 450,
      AED: 1800,
      SAR: 1900,
      CAD: 690,
      AUD: 760,
      INR: 40000
    },
    scopeNotes: "Clean bespoke WordPress corporate site, zero theme bloat, responsive layout, and client-editable dashboard."
  },
  "Shopify Development": {
    name: "Shopify Development",
    prices: {
      USD: 750,
      PKR: 70000,
      GBP: 600,
      EUR: 680,
      AED: 2800,
      SAR: 2850,
      CAD: 1030,
      AUD: 1140,
      INR: 63000
    },
    scopeNotes: "Custom high-converting Shopify storefront, liquid code architecture, cart drawer upsells, and payment gateway setup."
  },
  "Custom Web Development": {
    name: "Custom Web Development",
    prices: {
      USD: 1200,
      PKR: 100000,
      GBP: 950,
      EUR: 1100,
      AED: 4400,
      SAR: 4500,
      CAD: 1650,
      AUD: 1820,
      INR: 90000
    },
    scopeNotes: "Next.js / TypeScript custom web application or portal built for sub-second speeds and SEO dominance."
  },
  "Web Application Development": {
    name: "Web Application / SaaS",
    prices: {
      USD: 2500,
      PKR: 250000,
      GBP: 2000,
      EUR: 2300,
      AED: 9200,
      SAR: 9400,
      CAD: 3450,
      AUD: 3800,
      INR: 225000
    },
    scopeNotes: "Full SaaS MVP build with database schema, authentication, subscription billing, and user dashboards."
  },
  "AI Integration": {
    name: "AI Integration & Automation",
    prices: {
      USD: 500,
      PKR: 50000,
      GBP: 400,
      EUR: 450,
      AED: 1850,
      SAR: 1900,
      CAD: 690,
      AUD: 760,
      INR: 45000
    },
    scopeNotes: "Gemini / OpenAI workflow automation, custom AI chat agents, document analysis, and triage bots."
  },
  "UI/UX Design": {
    name: "UI/UX & Design Systems",
    prices: {
      USD: 400,
      PKR: 40000,
      GBP: 320,
      EUR: 360,
      AED: 1500,
      SAR: 1500,
      CAD: 550,
      AUD: 610,
      INR: 36000
    },
    scopeNotes: "High-fidelity Figma wireframes, interactive component prototypes, and mobile-first design systems."
  },
  "Website Redesign": {
    name: "Website Redesign & Modernization",
    prices: {
      USD: 400,
      PKR: 40000,
      GBP: 320,
      EUR: 360,
      AED: 1500,
      SAR: 1500,
      CAD: 550,
      AUD: 610,
      INR: 36000
    },
    scopeNotes: "Modern UI redesign, responsive mobile layout fixes, and conversion restructuring for existing websites."
  },
  "Speed Optimization": {
    name: "Speed & Core Web Vitals Optimization",
    prices: {
      USD: 150,
      PKR: 15000,
      GBP: 120,
      EUR: 135,
      AED: 550,
      SAR: 575,
      CAD: 210,
      AUD: 230,
      INR: 13500
    },
    scopeNotes: "Comprehensive Core Web Vitals audit, image optimization, script tree-shaking, sub-second load guarantee."
  },
  "Website Maintenance & SEO": {
    name: "Website Maintenance & SEO Retainer",
    isMonthly: true,
    prices: {
      USD: 100,
      PKR: 8000,
      GBP: 80,
      EUR: 90,
      AED: 370,
      SAR: 375,
      CAD: 140,
      AUD: 150,
      INR: 7200
    },
    scopeNotes: "Monthly plugin/core security updates, 24/7 uptime monitoring, daily backups, and technical on-page SEO."
  },
  "Website Management & Maintenance": {
    name: "Website Management & Maintenance Retainer",
    isMonthly: true,
    badge: "Monthly Retainer",
    prices: {
      USD: 100,
      PKR: 8000,
      GBP: 80,
      EUR: 90,
      AED: 370,
      SAR: 375,
      CAD: 140,
      AUD: 150,
      INR: 7200
    },
    scopeNotes: "Proactive 24/7 uptime monitoring, daily cloud backups, CMS & plugin security patching, and dedicated monthly content update hours."
  },
  "Product Upload & Catalog Management": {
    name: "E-Commerce Product Upload & Catalog Management",
    badge: "E-Commerce Setup",
    prices: {
      USD: 150,
      PKR: 15000,
      GBP: 120,
      EUR: 135,
      AED: 550,
      SAR: 575,
      CAD: 210,
      AUD: 230,
      INR: 13500
    },
    scopeNotes: "Accurate product entry (Shopify/WooCommerce), WebP image compression, variant matrices (size/color/SKU), and SEO alt tags."
  }
};
