export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  id: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  heroSummary: string;
  heroImage: string;
  altText: string;
  businessProblems: {
    title: string;
    description: string;
  }[];
  capabilities: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  approach: {
    step: string;
    title: string;
    summary: string;
  }[];
  techStack: string[];
  relatedProjects: string[];
  faqs: ServiceFAQ[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "wordpress-development": {
    slug: "wordpress-development",
    id: "wordpress",
    title: "WordPress Development Services",
    shortTitle: "WordPress",
    seoTitle: "Custom WordPress Development Services | HASIZ Digital Studio",
    metaDescription: "Bespoke, high-performance WordPress & WooCommerce development. Clean code, Elementor mastery, custom theme engineering, and sub-second load times.",
    h1: "High-Performance WordPress & WooCommerce Engineering",
    tagline: "Custom Architecture Without Plugin Bloat",
    heroSummary: "We build bespoke WordPress platforms engineered for international brands, content powerhouses, and high-volume WooCommerce stores. Zero off-the-shelf theme bloat, rigorous security standards, and uncompromising Core Web Vitals.",
    heroImage: "/images/services/custom-wordpress-development.webp",
    altText: "Custom WordPress development architecture and theme engineering at HASIZ",
    businessProblems: [
      {
        title: "Sluggish Page Speed & Heavy Plugin Overhead",
        description: "Pre-made commercial themes often load 40+ plugins, conflicting scripts, and unused CSS that destroy your Google Core Web Vitals and drive away mobile buyers."
      },
      {
        title: "Fragile Updates & Breaking Layouts",
        description: "Haphazardly assembled sites break whenever a WordPress core or plugin update occurs, creating costly downtime and security vulnerabilities."
      },
      {
        title: "Inflexible Content Editing Experiences",
        description: "Marketing teams often feel locked out of their own websites, needing developer intervention for trivial layout adjustments or copy updates."
      },
      {
        title: "Vulnerable Security Architecture",
        description: "Unmaintained plugins and poorly configured permissions make WordPress a prime target for automated brute force exploits and malware."
      }
    ],
    capabilities: [
      {
        title: "Bespoke Theme Development",
        description: "Engineered from scratch to match your exact brand guidelines and design system with clean PHP, semantic HTML5, and utility CSS.",
        deliverables: ["Custom WordPress Theme", "Custom Post Types & Taxonomies", "Responsive Breakpoint Testing", "Clean Codebase Repo"]
      },
      {
        title: "Elementor & Block Theme Mastery",
        description: "Bespoke custom widgets and lightweight Elementor templates that empower your marketing team while maintaining strict CSS and JS boundaries.",
        deliverables: ["Custom Elementor Widgets", "Global Design Tokens", "Dynamic Content Bindings", "Editor Permission Lockdown"]
      },
      {
        title: "High-Converting WooCommerce Solutions",
        description: "Optimized product discovery, instant faceted filters, custom checkout flows, and automated tax, shipping, and payment gateway integrations.",
        deliverables: ["Custom Checkout Funnel", "Stripe & PayPal Integration", "Inventory & Order Sync", "Subscription Billing Support"]
      },
      {
        title: "Performance & Database Optimization",
        description: "Server-level Redis caching, query profiling, asset minification, and database cleanup that achieve sub-second LCP scores.",
        deliverables: ["Redis Object Cache", "Database Index Optimization", "Automated Image Conversion", "Lighthouse 95+ Audit"]
      }
    ],
    approach: [
      {
        step: "01",
        title: "Requirements & Architecture Audit",
        summary: "We analyze your existing database, plugin stack, content structure, and technical requirements before writing a line of code."
      },
      {
        step: "02",
        title: "Clean Semantic Development",
        summary: "We code custom themes adhering strictly to WordPress Coding Standards (WPCS), utilizing modern PHP 8.2+ and lightweight asset bundling."
      },
      {
        step: "03",
        title: "Performance Hardening & Caching",
        summary: "We configure persistent object caching, clean query transients, and implement strict Content Security Policies (CSP)."
      },
      {
        step: "04",
        title: "Client Training & Handoff",
        summary: "We provide structured video documentation and editorial guidelines so your in-house team can publish with complete independence."
      }
    ],
    techStack: ["WordPress", "PHP 8.2+", "WooCommerce", "Elementor Pro", "MySQL", "Redis", "Tailwind CSS", "WP-CLI"],
    relatedProjects: ["atrt-hygiene-solutions", "wilfred-frazer-consulting", "dr-detoxifier", "fishing-4x4-outdoors"],
    faqs: [
      {
        question: "Do you use pre-made WordPress themes or code custom themes?",
        answer: "We engineer bespoke WordPress themes built specifically for your business requirements. This ensures clean code, zero unused stylesheet bloat, instantaneous loading speeds, and total design precision. When clients prefer Elementor for editor flexibility, we build custom Elementor widgets rather than relying on bloated third-party theme packs."
      },
      {
        question: "Can you optimize our existing slow WordPress site without rebuilding?",
        answer: "Yes. We offer WordPress Speed Optimization audits where we analyze SQL query bottlenecks, prune redundant plugins, configure server-level Redis object caching, optimize image delivery via WebP, and streamline script execution. In most cases, we reduce page load times by 50% to 70%."
      },
      {
        question: "How do you ensure our WordPress website stays secure?",
        answer: "We enforce strict security protocols: two-factor authentication (2FA), non-standard database prefixes, strict file permissions, disabled XML-RPC, custom wp-login endpoints, Cloudflare Enterprise Web Application Firewall (WAF) integration, and automated daily off-site backups."
      },
      {
        question: "Will our marketing team be able to edit pages without coding knowledge?",
        answer: "Absolutely. We build modular, intuitive editing controls—either through custom Gutenberg blocks or tailored Elementor templates. Content editors can easily update text, swap images, create landing pages, and publish blog articles without risking layout disruption."
      },
      {
        question: "How do you handle WooCommerce scalability for high transaction volumes?",
        answer: "We decouple resource-intensive tasks using background cron workers, implement Redis for session and cart caching, optimize database indexing for order tables, and utilize high-performance cloud hosting (such as Cloudways or dedicated VPS) with automatic horizontal scaling."
      }
    ]
  },
  "shopify-development": {
    slug: "shopify-development",
    id: "shopify",
    title: "Shopify Store Development Services",
    shortTitle: "Shopify",
    seoTitle: "Custom Shopify Development & Store Optimization | HASIZ",
    metaDescription: "Custom Shopify 2.0 theme development, headless commerce, conversion optimization, and bespoke integrations for modern e-commerce brands.",
    h1: "Conversion-Focused Shopify Storefront Engineering",
    tagline: "Scalable E-Commerce Built For High Average Order Values",
    heroSummary: "We build custom Shopify storefronts engineered to maximize checkout conversion rates, average order value, and brand prestige. From bespoke Online Store 2.0 Liquid themes to custom apps and ERP integrations, we turn traffic into loyal customers.",
    heroImage: "/images/services/shopify-store-design.webp",
    altText: "High-converting Shopify storefront and headless e-commerce engineering",
    businessProblems: [
      {
        title: "Template Uniformity & Low Perceived Value",
        description: "Generic themes make your brand look identical to thousands of drop-shippers, eroding consumer trust and limiting your ability to charge premium prices."
      },
      {
        title: "High App Monthly Costs & App Conflict Lag",
        description: "Stacking 20+ Shopify apps for basic features introduces recurring monthly software costs and injects conflicting JavaScript that destroys mobile speeds."
      },
      {
        title: "High Mobile Cart Abandonment",
        description: "Friction-filled product option selectors, clumsy cart drawers, and lack of localized payment options lead to lost revenue during the final step."
      },
      {
        title: "Complex B2B & Wholesale Requirements",
        description: "Brands expanding into wholesale struggle to offer tiered pricing, net payment terms, and bulk re-order portals within standard Shopify themes."
      }
    ],
    capabilities: [
      {
        title: "Custom Shopify 2.0 Theme Engineering",
        description: "Bespoke Liquid themes utilizing Online Store 2.0 JSON architecture, giving merchants drag-and-drop section flexibility across every page.",
        deliverables: ["Bespoke Liquid Theme", "Custom Drag-and-Drop Sections", "Micro-Interactions", "Mobile-First UX Testing"]
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description: "Sticky ATC bars, dynamic bundles, countdown-free urgency cues, tiered quantity discounts, and intelligent upsell slide-out carts.",
        deliverables: ["Slide-out AJAX Cart", "Dynamic Bundle Selectors", "One-Click Checkout Upsells", "Faceted Collection Filters"]
      },
      {
        title: "Shopify B2B & Wholesale Portals",
        description: "Custom wholesale experiences including tiered volume pricing, customer tax exemption validation, and rapid CSV bulk ordering.",
        deliverables: ["B2B Trade Registration", "Tiered Pricing Schedules", "Net Terms Support", "Wholesale Quick Order Sheet"]
      },
      {
        title: "Custom Integrations & App Engineering",
        description: "Direct API connections to your ERP, custom logistics couriers, CRM systems (Klaviyo, Gorgias), and specialized external databases.",
        deliverables: ["Shopify Storefront API", "Warehouse/ERP Sync", "Custom Webhook Handlers", "Custom Private App Build"]
      }
    ],
    approach: [
      {
        step: "01",
        title: "E-Commerce Strategy & User Journey",
        summary: "We analyze your catalog, customer personas, checkout drop-off data, and competitors to architect a seamless path to purchase."
      },
      {
        step: "02",
        title: "Bespoke Theme Architecture",
        summary: "We write clean, semantic Liquid templates without relying on heavy external libraries, keeping first-input delay under 50ms."
      },
      {
        step: "03",
        title: "App Consolidation",
        summary: "We native-code functionalities like size charts, swatch selectors, and slide-out carts directly into theme code, eliminating costly app subscriptions."
      },
      {
        step: "04",
        title: "Checkout & Conversion QA",
        summary: "Rigorous testing across iOS, Android, and desktop browsers with end-to-end sandbox payments, tax rules, and currency conversion."
      }
    ],
    techStack: ["Shopify Liquid", "Online Store 2.0", "Shopify Storefront API", "Tailwind CSS", "JavaScript (ESNext)", "GraphQL", "Klaviyo API"],
    relatedProjects: ["blomma-flower-studio", "melcasa-australia", "red-rhinoz-beauty", "the-candy-coach"],
    faqs: [
      {
        question: "Why should we invest in a custom Shopify theme over an app store theme?",
        answer: "Off-the-shelf themes are built to be everything to everyone, loaded with thousands of lines of unused JavaScript and CSS that you cannot remove. A bespoke theme developed by HASIZ is tailored precisely to your brand and customer flow. It loads twice as fast, contains zero bloat, native-codes features that would otherwise require 10 paid apps, and typically increases mobile conversion rates by 25% to 40%."
      },
      {
        question: "Can you migrate our store from WooCommerce or Magento to Shopify?",
        answer: "Yes. We handle end-to-end e-commerce migrations, preserving customer accounts, product variations, order histories, and critical SEO URL redirects (301 mappings) so your organic Google search rankings remain intact."
      },
      {
        question: "Do you build custom Shopify apps for unique business logic?",
        answer: "Yes. When standard Shopify settings do not support your operational requirements (such as complex localized shipping calculations, custom engraving previews, or ERP inventory sync), we build private Shopify apps running on secure Node.js or serverless backends."
      },
      {
        question: "How do you handle multi-currency and international markets?",
        answer: "We configure Shopify Markets to offer localized currencies, automatic geo-IP redirection, market-specific pricing, and localized checkout language support."
      },
      {
        question: "Will our team be able to customize page layouts after launch?",
        answer: "Yes. Because we build with Shopify Online Store 2.0 architecture, every section we design is available as a reusable, customizable block within Shopify's native theme customizer."
      }
    ]
  },
  "custom-web-development": {
    slug: "custom-web-development",
    id: "custom-web",
    title: "Custom Web Development Services",
    shortTitle: "Custom Web",
    seoTitle: "Custom Web Development Services | Modern Full-Stack Engineering | HASIZ",
    metaDescription: "Scalable, high-performance custom websites engineered with Next.js, React, and TypeScript. Modern web architecture built for speed, SEO, and conversion.",
    h1: "High-Performance Custom Web Engineering",
    tagline: "Purpose-Built Digital Architecture for Modern Enterprises",
    heroSummary: "When off-the-shelf CMS solutions fail to meet your architectural or branding ambitions, HASIZ engineers custom web platforms from first principles. Built with Next.js, React, and modern TypeScript for unrivaled speed, security, and global scalability.",
    heroImage: "/images/services/custom-web-development-architecture.webp",
    altText: "Scalable custom web development and responsive modern frontend systems",
    businessProblems: [
      {
        title: "Technical Debt & Slow Monolithic Architecture",
        description: "Legacy codebases and rigid platforms make new feature deployments agonizingly slow and fragile, holding back business agility."
      },
      {
        title: "Poor Core Web Vitals Harming Organic Rankings",
        description: "Bloated site templates fail Google's Largest Contentful Paint (LCP) and Interaction to Next Paint (INP) benchmarks, silently degrading search traffic."
      },
      {
        title: "Security & Scaling Vulnerabilities",
        description: "Monolithic sites hosted on shared servers collapse under unexpected viral traffic spikes and present broad attack surfaces."
      },
      {
        title: "Disconnected Business Systems",
        description: "Siloed CRMs, databases, and third-party APIs create manual data entry bottlenecks and inconsistent customer data."
      }
    ],
    capabilities: [
      {
        title: "Next.js & React Architecture",
        description: "Modern Server-Side Rendered (SSR) and Static Site Generation (SSG) architectures delivering sub-second global responses via edge CDNs.",
        deliverables: ["Next.js App Router Codebase", "TypeScript Type Safety", "Component Library", "Edge Deployment Config"]
      },
      {
        title: "API Design & Microservice Integration",
        description: "Robust REST and GraphQL endpoints designed for seamless communication between your frontend, internal databases, and external SaaS tools.",
        deliverables: ["API Documentation", "Webhook Endpoints", "Third-party Integrations", "Authentication Middleware"]
      },
      {
        title: "Technical SEO & Schema Engineering",
        description: "Programmatic OpenGraph generation, semantic HTML5, automated dynamic sitemaps, and deep JSON-LD structured data.",
        deliverables: ["JSON-LD Schema Hierarchy", "Dynamic Sitemap Engine", "Canonical URL Handling", "Core Web Vitals Pass Guarantee"]
      },
      {
        title: "Headless CMS Implementations",
        description: "Decoupled backends (Sanity, Strapi, Contentful, or Supabase) giving your editorial team a slick content dashboard while the frontend stays blazing fast.",
        deliverables: ["Headless CMS Configuration", "Live Preview Workflows", "Content Schema Modeling", "Role-Based Permissions"]
      }
    ],
    approach: [
      {
        step: "01",
        title: "Technical Discovery & Schema Design",
        summary: "We model data structures, define API contracts, and select the optimal rendering strategy (static, server, or streaming) for each route."
      },
      {
        step: "02",
        title: "Component-Driven Development",
        summary: "We build isolated, reusable UI components backed by strict TypeScript types, ensuring regression-free scalability."
      },
      {
        step: "03",
        title: "Global Edge Optimization",
        summary: "We deploy on modern edge infrastructure with automated asset compression, Brotli encoding, and CDN stale-while-revalidate caching."
      },
      {
        step: "04",
        title: "Rigorous CI/CD & Automated Testing",
        summary: "End-to-end linting, type validation, and automated deployment pipelines guarantee every git push is battle-tested."
      }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "PostgreSQL", "Vercel", "GitHub Actions"],
    relatedProjects: ["inclusive-hydroponics", "dluxe-destinations", "hello-pineapple-studio", "one-for-edits"],
    faqs: [
      {
        question: "When should a business choose custom web development over WordPress or Shopify?",
        answer: "Custom development is the right choice when your digital product requires unique business logic, complex data relationships, proprietary calculators, high-frequency user interactions, or extreme performance standards that pre-built CMS systems cannot accommodate. It provides total freedom from platform licensing restrictions and zero plugin maintenance headaches."
      },
      {
        question: "How does a custom Next.js website benefit our technical SEO?",
        answer: "Next.js pre-renders HTML on the server before sending it to the client, meaning search engine crawlers (Googlebot, Bingbot) receive fully formed, indexable HTML immediately. Combined with automatic image optimization, dynamic JSON-LD structured data, and zero layout shift (CLS < 0.05), custom Next.js sites consistently rank in the 95th percentile of Google Core Web Vitals."
      },
      {
        question: "How do content editors update content on a custom website?",
        answer: "We connect your custom frontend to modern Headless CMS platforms (such as Supabase, Sanity, or Strapi). Content creators get an intuitive, visual editing experience with live previews, while the frontend remains decoupled, secure, and lightning fast."
      },
      {
        question: "What hosting infrastructure do you recommend for custom web projects?",
        answer: "We typically deploy custom applications on Vercel or AWS, coupled with Cloudflare CDN. This provides instant global edge delivery, automatic SSL, DDoS protection, serverless API execution, and zero-downtime atomic deployments."
      },
      {
        question: "Do we own the full source code after project completion?",
        answer: "Yes, 100%. Upon final project sign-off, full intellectual property and ownership of the GitHub repository, deployment accounts, and technical documentation are transferred entirely to your company."
      }
    ]
  },
  "ai-integration": {
    slug: "ai-integration",
    id: "ai-integration",
    title: "AI Integration & Workflow Automation",
    shortTitle: "AI Integration",
    seoTitle: "AI Integration & Business Workflow Automation Services | HASIZ",
    metaDescription: "Practical AI integration services. Connect modern LLMs, autonomous workflow automation, intelligent document processing, and custom AI assistants.",
    h1: "Practical AI Engineering & Workflow Automation",
    tagline: "Move Beyond Chatbots to Genuine Operational Leverage",
    heroSummary: "We help forward-thinking companies integrate practical artificial intelligence into their daily workflows, web products, and operational pipelines. From automated document analysis to proprietary AI assistants and automated customer triage.",
    heroImage: "/images/services/ai-workflow-automation.webp",
    altText: "Intelligent AI integration, workflow automation, and automated decision engines",
    businessProblems: [
      {
        title: "High Manual Operational Overhead",
        description: "Knowledge workers wasting hundreds of hours copying data between systems, reading routine PDF documents, and manually triaging customer requests."
      },
      {
        title: "Generic Hallucinatory AI Tools",
        description: "Off-the-shelf consumer AI tools produce hallucinated responses, leak sensitive corporate data, and fail to integrate with internal company databases."
      },
      {
        title: "Slow Customer Response Times",
        description: "International clients waiting hours for basic quotes, onboarding confirmations, or tier-one technical answers during off-hours."
      },
      {
        title: "Unstructured Data Locked in Silos",
        description: "Invaluable business intelligence trapped in scanned invoices, audio recordings, customer emails, and legacy database tables."
      }
    ],
    capabilities: [
      {
        title: "Custom LLM & API Integration",
        description: "Integrating Gemini, OpenAI, Claude, and open-source models directly into your web applications, internal tools, and SaaS dashboards.",
        deliverables: ["Custom AI API Service", "Context Grounding Pipelines", "Streaming Response UI", "Token Optimization Layer"]
      },
      {
        title: "Automated Document Processing",
        description: "Extracting structured data from PDFs, invoices, contracts, and medical records with deterministic validation and human-in-the-loop review.",
        deliverables: ["Document Ingestion Engine", "Schema Validation Rules", "Audit Logging System", "Exception Review Dashboard"]
      },
      {
        title: "Intelligent Workflow Automation",
        description: "Automating multi-step operational chains across CRM, accounting, email, and project management tools without brittle webhook breakages.",
        deliverables: ["Workflow Pipeline Architecture", "Event-Driven Webhooks", "Error Handling & Retries", "Monitoring Dashboards"]
      },
      {
        title: "Retrieval-Augmented Generation (RAG)",
        description: "Building proprietary knowledge assistants grounded strictly in your company's private documentation, product catalogs, and policies.",
        deliverables: ["Vector Database Setup", "Semantic Chunking Pipeline", "Zero-Hallucination Guardrails", "Role-Based Access Queries"]
      }
    ],
    approach: [
      {
        step: "01",
        title: "Feasibility & ROI Assessment",
        summary: "We identify specific business bottlenecks where AI delivers immediate, quantifiable hours saved or revenue generated, avoiding AI for AI's sake."
      },
      {
        step: "02",
        title: "Data Security & Privacy Architecture",
        summary: "We establish zero-data-retention agreements, enterprise API proxies, and strict encryption protocols so your private data is never used for training."
      },
      {
        step: "03",
        title: "Engineering & Guardrail Implementation",
        summary: "We write deterministic validation layers around model outputs, ensuring type-safe JSON returns and robust fallback behaviors."
      },
      {
        step: "04",
        title: "Deployment & Continuous Monitoring",
        summary: "We deploy monitoring tools to track token latency, completion costs, accuracy metrics, and prompt drift over time."
      }
    ],
    techStack: ["Python", "FastAPI", "Node.js", "TypeScript", "Gemini API", "OpenAI API", "LangChain", "Pinecone / pgvector", "PostgreSQL"],
    relatedProjects: ["red-rhinoz-capital", "pulseguard-healthtech", "wholesaler-b2b-portal"],
    faqs: [
      {
        question: "Will our company data or customer information be used to train public AI models?",
        answer: "No. We exclusively implement commercial enterprise API endpoints (Google Cloud Vertex AI / Gemini Enterprise, OpenAI API, Anthropic API) where terms of service legally guarantee that input prompts and documents are never used for model training or retained in training corpuses. We can also deploy self-hosted open-source models within your private cloud."
      },
      {
        question: "How do you prevent AI models from hallucinating false information?",
        answer: "We employ Retrieval-Augmented Generation (RAG) combined with strict prompt constraints, temperature minimization, and programmatic schema validation. Models are explicitly instructed to cite specific document chunks and respond with 'Information not available' if verified context is absent."
      },
      {
        question: "Can AI automation integrate with our existing CRM or ERP software?",
        answer: "Yes. We build event-driven middleware connecting modern AI pipelines to HubSpot, Salesforce, Zoho, QuickBooks, custom PostgreSQL databases, and legacy REST/SOAP APIs."
      },
      {
        question: "What is the typical timeline for an AI integration project?",
        answer: "A focused proof-of-concept (such as an automated PDF document parser or grounded customer support triage system) is typically engineered and deployed within 2 to 4 weeks. Enterprise workflow architectures with custom dashboards require 6 to 10 weeks."
      },
      {
        question: "How do you calculate the ongoing operational costs of AI APIs?",
        answer: "We architect prompt caching, token optimization strategies, and smart routing (using lightweight models for classification and larger models only for complex synthesis) to keep token costs predictable, usually ranging from $20 to $150 per month for moderate business volumes."
      }
    ]
  },
  "web-application-development": {
    slug: "web-application-development",
    id: "web-apps",
    title: "Web Application Development Services",
    shortTitle: "Web Applications",
    seoTitle: "Custom Web Application & SaaS Development | HASIZ Digital Studio",
    metaDescription: "Bespoke SaaS platforms, internal business portals, and secure cloud web applications. Scalable PostgreSQL backends, React frontends, and robust APIs.",
    h1: "Enterprise Web Applications & SaaS Engineering",
    tagline: "Software Built to Automate Operations and Scale Revenue",
    heroSummary: "We engineer secure, high-concurrency web applications, customer portals, and SaaS platforms that solve mission-critical business challenges. From intuitive customer-facing dashboards to complex multi-tenant backend architectures.",
    heroImage: "/images/services/custom-web-application-dashboard.webp",
    altText: "Full-stack SaaS dashboard engineering and secure cloud web application architecture",
    businessProblems: [
      {
        title: "Outgrowing Spreadsheets & Disjointed Tools",
        description: "Managing core business operations across dozens of messy Excel sheets creates catastrophic version-control errors and lacks security."
      },
      {
        title: "Costly Off-the-Shelf SaaS Subscriptions",
        description: "Paying thousands per month for inflexible software with per-seat licensing where you only use 10% of the bloated feature set."
      },
      {
        title: "Lack of Customer Self-Service",
        description: "Clients having to call or email your staff for status updates, invoices, quotes, or booking modifications instead of managing it themselves."
      },
      {
        title: "Security & Data Governance Liabilities",
        description: "Ad-hoc internal systems exposing customer data without role-based access permissions, audit logs, or regulatory compliance."
      }
    ],
    capabilities: [
      {
        title: "Bespoke SaaS Platform Engineering",
        description: "Multi-tenant cloud architectures featuring role-based access control (RBAC), subscription tier management, and real-time activity feeds.",
        deliverables: ["Full SaaS Architecture", "Stripe Billing Portal", "Multi-Tenant Schema", "Authentication & SSO"]
      },
      {
        title: "Internal Operations & ERP Portals",
        description: "Centralized operational hubs for inventory management, dispatch tracking, project milestone billing, and employee scheduling.",
        deliverables: ["Custom Workflow Dashboards", "Data Import/Export Engines", "Granular Staff Roles", "Audit Trail Logs"]
      },
      {
        title: "Real-Time Telemetry & Data Dashboards",
        description: "High-throughput data visualization using WebSocket streams, Canvas charts, and aggregated analytics reporting.",
        deliverables: ["WebSocket Server", "Virtualized Chart Canvas", "Report Export (PDF/CSV)", "Alerting Engine"]
      },
      {
        title: "Secure Database & Cloud Architecture",
        description: "Engineered on relational PostgreSQL, Supabase, or Redis with automated backups, connection pooling, and Row-Level Security (RLS).",
        deliverables: ["PostgreSQL Schema Design", "Row-Level Security Policies", "Automated Daily Backups", "Database Migration Scripts"]
      }
    ],
    approach: [
      {
        step: "01",
        title: "Domain Modeling & User Stories",
        summary: "We map out core business entities, user roles, permission matrices, and critical transaction flows before coding begins."
      },
      {
        step: "02",
        title: "Relational Schema & API Design",
        summary: "We construct normalized database tables, enforce foreign key integrity, and build type-safe REST/GraphQL endpoints."
      },
      {
        step: "03",
        title: "Responsive Frontend Engineering",
        summary: "We develop intuitive, keyboard-accessible dashboards that feel as fast and tactile as native desktop software."
      },
      {
        step: "04",
        title: "Security Hardening & Penetration Testing",
        summary: "Comprehensive vulnerability scanning, SQL injection prevention, CSRF protection, and rate limiting on sensitive endpoints."
      }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Prisma", "Tailwind CSS", "Docker", "AWS / Vercel"],
    relatedProjects: ["pulseguard-healthtech", "wholesaler-b2b-portal", "poke-freeze-app"],
    faqs: [
      {
        question: "What is the difference between a website and a web application?",
        answer: "A website is primarily designed for public content delivery, marketing, and SEO visibility. A web application is interactive software accessed via a browser that handles authenticated user state, complex business workflows, transactions, databases, and custom logic (like an online banking portal, SaaS tool, or inventory management system)."
      },
      {
        question: "How do you ensure user data security and privacy in web applications?",
        answer: "We implement defense-in-depth: encrypted connections (HTTPS/TLS 1.3), Row-Level Security (RLS) in databases, hashed passwords via Argon2/bcrypt, secure HTTP-only cookies, automated rate limiting to prevent brute force attacks, and strict role-based access control (RBAC)."
      },
      {
        question: "Can our web application scale to handle tens of thousands of active users?",
        answer: "Yes. By using stateless backend architectures, connection pooling (PgBouncer), serverless edge functions, and read-replicas in PostgreSQL, our systems effortlessly scale horizontally to handle intense concurrency without latency spikes."
      },
      {
        question: "Do you provide ongoing maintenance and feature development post-launch?",
        answer: "Yes. We offer dedicated engineering retainers that cover security patches, database performance monitoring, dependency updates, and continuous delivery of new roadmap features."
      },
      {
        question: "Can the web application integrate with existing legacy databases?",
        answer: "Yes. We frequently build secure API adapter layers that interface with legacy SQL Server, Oracle, or on-premise systems, providing modern web interfaces without requiring costly rip-and-replace migrations."
      }
    ]
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    id: "ui-ux",
    title: "UI/UX Design & Design Systems",
    shortTitle: "UI/UX Design",
    seoTitle: "UI/UX Design Services & Design Systems | HASIZ Digital Studio",
    metaDescription: "Award-winning UI/UX design, interactive prototypes, design systems, and conversion-focused user journeys for modern digital products.",
    h1: "Conversion-Focused UI/UX & Design Systems",
    tagline: "Where Aesthetic Sophistication Meets Engineering Rigor",
    heroSummary: "We design digital interfaces that are not only visually captivating but engineered for intuitive user journeys and high commercial conversion. We translate complex product requirements into clear, elegant, and accessible design systems.",
    heroImage: "/images/services/ui-ux-design-system.webp",
    altText: "Human-centered UI/UX design systems, interactive prototypes, and typography hierarchy",
    businessProblems: [
      {
        title: "Confusing User Journeys & High Drop-Off",
        description: "Cluttered layouts, ambiguous calls to action, and poorly structured information architecture cause visitors to abandon your site within seconds."
      },
      {
        title: "Inconsistent Brand Presentation Across Devices",
        description: "Fragmented styling, mismatched button styles, and erratic typography between mobile and desktop erode brand authority and consumer trust."
      },
      {
        title: "Developer Handoff Friction & Inaccurate Builds",
        description: "Designers creating impractical mockups that ignore CSS grid rules, responsive breakpoints, and accessibility standards, leading to broken implementations."
      },
      {
        title: "Lack of Scalable Design Foundations",
        description: "Every new page requires ad-hoc design decisions from scratch because there is no standardized library of reusable UI components."
      }
    ],
    capabilities: [
      {
        title: "Comprehensive Design Systems",
        description: "Building production-ready tokenized design libraries in Figma matching Tailwind CSS classes, spacing units, and typography scales.",
        deliverables: ["Figma Component Library", "Color & Typography Tokens", "Micro-Interaction Specs", "Dark & Light Mode Themes"]
      },
      {
        title: "User Experience (UX) Architecture",
        description: "Wireframing, customer empathy mapping, user flow diagrams, and information architecture that remove purchase friction.",
        deliverables: ["User Journey Maps", "Interactive Wireframes", "Information Architecture Trees", "Usability Audit Report"]
      },
      {
        title: "High-Fidelity Interactive Prototypes",
        description: "Clickable prototypes simulating real user interactions, modal transitions, and dynamic state changes for investor pitches or user testing.",
        deliverables: ["Clickable Figma Prototype", "Responsive Viewport Specs", "Motion & Transition Curves", "Accessibility Contrast Specs"]
      },
      {
        title: "Conversion Rate Optimization Audits",
        description: "Heuristic evaluation of existing user journeys to identify friction points, cognitive overload, and CTA weaknesses.",
        deliverables: ["Heuristic Evaluation", "Friction Heatmap Findings", "A/B Testing Recommendations", "Redesign Action Plan"]
      }
    ],
    approach: [
      {
        step: "01",
        title: "User Research & Mental Models",
        summary: "We study your target demographic, their emotional drivers, and existing mental models to design interfaces that feel immediately familiar."
      },
      {
        step: "02",
        title: "Low-Fidelity Architecture & Wireframing",
        summary: "We establish content hierarchy, layout balance, and interaction paths before introducing visual ornamentation."
      },
      {
        step: "03",
        title: "High-Fidelity Visual Design & Polish",
        summary: "We apply precise typography, sophisticated color palettes, subtle depth cues, and micro-animations that elevate perceived brand value."
      },
      {
        step: "04",
        title: "Developer-Ready Component Handoff",
        summary: "Because we are software engineers, our designs are handed off with exact CSS properties, responsive flexbox rules, and asset exports."
      }
    ],
    techStack: ["Figma", "Design Tokens", "Tailwind CSS Architecture", "WCAG 2.2 AA Standards", "Whimsical", "Lottie / SVG"],
    relatedProjects: ["mary-shavelle-couture", "afterdark-hospitality", "blomma-flower-studio", "melcasa-australia"],
    faqs: [
      {
        question: "How does HASIZ approach UI/UX differently from traditional design agencies?",
        answer: "Most design agencies design in a vacuum without understanding how code actually renders in a browser, producing designs that are either impossible to build or terribly slow to load. Because HASIZ is a digital engineering studio, every UI component we design is rooted in real-world CSS layout models, performance budgets, responsive constraints, and WCAG accessibility standards."
      },
      {
        question: "Do you provide clickable prototypes before development starts?",
        answer: "Yes. We create interactive Figma prototypes that allow you and your stakeholders to click through user journeys, test mobile navigation flows, and experience animations before any code is written, ensuring complete alignment."
      },
      {
        question: "What deliverables are included in a design system project?",
        answer: "You receive a complete, tokenized Figma design system containing typography scales, color palettes, spacing tokens, form states (active, hover, focus, error), button variants, modal sheets, responsive grid layouts, and exported SVG assets."
      },
      {
        question: "How do you ensure design accessibility (WCAG AA compliance)?",
        answer: "We verify color contrast ratios (minimum 4.5:1 for body text), design explicit keyboard focus rings, specify clear touch target bounds (minimum 48x48px on mobile), and design semantic heading structures so screen readers navigate effortlessly."
      },
      {
        question: "Can you redesign our existing application without breaking current user habits?",
        answer: "Yes. We conduct evolutionary redesigns that solve usability pain points, modernize visual aesthetics, and streamline workflows while preserving established mental models so existing power users feel immediately comfortable."
      }
    ]
  },
  "website-redesign": {
    slug: "website-redesign",
    id: "redesign",
    title: "Website Redesign & Modernization Services",
    shortTitle: "Website Redesign",
    seoTitle: "Website Redesign & Modernization Services | HASIZ Digital Studio",
    metaDescription: "Transform your outdated website into a modern, mobile-first, high-converting digital platform. Zero lost SEO rankings, sub-second speed, and elevated brand credibility.",
    h1: "Bespoke Website Redesign & Modernization",
    tagline: "Transform Outdated Interfaces Into High-Converting Digital Assets",
    heroSummary: "We revamp sluggish, dated, and low-converting websites into sleek, modern digital engines. We preserve your existing SEO equity while completely overhauling visual aesthetics, mobile responsiveness, and Core Web Vitals performance.",
    heroImage: "/images/services/hasiz-web-development-portfolio.webp",
    altText: "Modern website redesign and conversion optimization at HASIZ",
    businessProblems: [
      {
        title: "Outdated Visuals Hurting Credibility",
        description: "A website that looks like it was built five years ago instantly loses high-ticket clients to modern competitors."
      },
      {
        title: "Broken Mobile Layouts & High Bounce Rates",
        description: "Mobile visitors abandon clunky layouts, illegible fonts, and misaligned buttons within three seconds."
      },
      {
        title: "Fear of Losing Current Google SEO Rankings",
        description: "Most redesign agencies change URL structures recklessly, destroying years of accumulated organic search rankings and backlinks."
      },
      {
        title: "Sluggish Loading Speeds Failing Core Web Vitals",
        description: "Accumulated plugin bloat, outdated themes, and unoptimized assets make pages painfully slow to load on mobile connections."
      }
    ],
    capabilities: [
      {
        title: "Visual Modernization & UX Elevation",
        description: "Complete modern redesign using custom Next.js/Tailwind or streamlined WordPress with contemporary typography and whitespace.",
        deliverables: ["Modern Responsive UI", "Component Restyling", "Micro-Interactions", "High-Resolution Asset Optimization"]
      },
      {
        title: "SEO Equity & 301 Redirect Safeguarding",
        description: "Comprehensive URL mapping, meta hierarchy preservation, and canonical auditing to ensure organic traffic never drops.",
        deliverables: ["301 Redirect Architecture", "Meta Tag Preservation", "Canonical Verification", "Search Console Health Check"]
      },
      {
        title: "Mobile-First Conversion Funnel Overhaul",
        description: "Streamlined calls to action, friction-free forms, click-to-call mobile CTAs, and clear value proposition positioning.",
        deliverables: ["Mobile-Optimized Wireframes", "Sticky Navigation Bar", "High-Converting Contact Triggers", "Form Usability Testing"]
      },
      {
        title: "Speed Overhaul & Core Web Vitals Tuning",
        description: "Tree-shaking legacy code, stripping useless plugins, and implementing next-gen WebP images for sub-second speeds.",
        deliverables: ["Lighthouse 90+ Score", "Sub-Second LCP", "Zero Layout Shifts (CLS 0.0)", "CDN Edge Caching Setup"]
      }
    ],
    approach: [
      {
        step: "01",
        title: "Legacy Audit & SEO Preservation Map",
        summary: "We inventory all existing URLs, top-ranking organic keywords, and usability pain points to establish a risk-free migration baseline."
      },
      {
        step: "02",
        title: "Modern UI/UX Architectural Prototype",
        summary: "We design a contemporary, high-converting desktop and mobile interface tailored to your target audience."
      },
      {
        step: "03",
        title: "Clean-Code Engineering & Content Migration",
        summary: "We build the platform on clean modern code, migrate all text and media seamlessly, and verify all interactive forms."
      },
      {
        step: "04",
        title: "Zero-Downtime Launch & Post-Cutover Audit",
        summary: "We execute a flawless DNS transition with 301 redirects in place, followed by Google Search Console indexing verification."
      }
    ],
    techStack: ["Next.js", "Tailwind CSS", "WordPress / Elementor", "Shopify Liquid", "Core Web Vitals", "Google Search Console"],
    relatedProjects: ["melcasa-australia", "afterdark-hospitality", "blomma-flower-studio"],
    faqs: [
      {
        question: "Will redesigning our website hurt our current Google rankings?",
        answer: "No. When executed correctly, a redesign actually boosts your Google rankings. We perform strict URL mapping with permanent 301 redirects, preserve existing meta titles and heading hierarchy, and drastically improve Core Web Vitals speed scores, which Google rewards with higher ranking authority."
      },
      {
        question: "Can we keep all our existing blog posts, pages, and products?",
        answer: "Yes, 100%. We migrate all of your existing content, articles, portfolio items, and media assets into the new modernized architecture without loss of data."
      },
      {
        question: "How long does a website redesign take from kickoff to launch?",
        answer: "A standard corporate or service website redesign typically takes 2 to 3 weeks. E-commerce store redesigns take 3 to 4 weeks depending on catalog volume."
      },
      {
        question: "Will our website remain live during the redesign process?",
        answer: "Yes. Your current website remains 100% operational and open for business. We build the new redesign on a private staging environment. Once approved, the final cutover takes less than 15 minutes with zero downtime."
      }
    ]
  },
  "website-maintenance": {
    slug: "website-maintenance",
    id: "maintenance",
    title: "Website Management & Maintenance Retainers",
    shortTitle: "Website Management",
    seoTitle: "Website Management & Maintenance Retainers | HASIZ Digital Studio",
    metaDescription: "Proactive monthly website management, 24/7 uptime monitoring, security patching, cloud backups, and content updates for WordPress, Shopify, and Next.js sites.",
    h1: "Proactive Website Management & Maintenance",
    tagline: "Zero Downtime, Flawless Security, and Continuous Performance Optimization",
    heroSummary: "Keep your digital platform secure, lightning-fast, and continuously updated without pulling your internal team away from core business operations. We provide 24/7 uptime monitoring, security audits, automated cloud backups, and fast turnaround for content updates.",
    heroImage: "/images/services/custom-web-development-architecture.webp",
    altText: "Proactive website maintenance, uptime monitoring, and security management",
    businessProblems: [
      {
        title: "Plugin & CMS Updates Breaking Pages",
        description: "Automatic background updates or neglected plugins frequently crash layouts, forms, and payment gateways without you noticing."
      },
      {
        title: "Malware Injections & Vulnerability Exploits",
        description: "Outdated software attracts automated bot exploits, malware injections, spam redirects, and Google blacklisting."
      },
      {
        title: "No Reliable Offsite Backups During Disasters",
        description: "When hosting servers fail or accidental edits delete critical content, most companies discover their backups are corrupted or months old."
      },
      {
        title: "Lack of Immediate Support When Bugs Occur",
        description: "Waiting days for freelance support or dealing with unresponsive agencies leads to lost sales and frustrated clients."
      }
    ],
    capabilities: [
      {
        title: "24/7 Uptime & Health Monitoring",
        description: "Continuous 60-second ping monitoring across global locations with instant alerting and automated recovery triage.",
        deliverables: ["Global Uptime Monitoring", "SSL Expiry Tracking", "DNS Health Checks", "Monthly SLA Performance Reports"]
      },
      {
        title: "Daily Automated Cloud Backups",
        description: "Redundant, encrypted offsite daily backups with 1-click snapshot restore in under 15 minutes.",
        deliverables: ["Offsite Cloud Backups", "Database Snapshots", "One-Click Disaster Recovery", "30-Day Backup Retention"]
      },
      {
        title: "Core, Theme & Plugin Security Patching",
        description: "Safe staged updates tested on private development environments prior to pushing to live production.",
        deliverables: ["Staging-Tested Updates", "WAF Rules Hardening", "Malware Scanning & Cleanup", "Vulnerability Remediation"]
      },
      {
        title: "Dedicated Engineering Support & Content Updates",
        description: "Fast turnaround for adding new text, updating banners, publishing products, modifying forms, and tweaking layouts.",
        deliverables: ["Dedicated Support Channel", "Content & Copy Tweaks", "Banner & Graphic Swaps", "Form & CTA Diagnostics"]
      }
    ],
    approach: [
      {
        step: "01",
        title: "Initial Security & Health Audit",
        summary: "We inspect your CMS, hosting stack, DNS, plugins, and server logs to eliminate existing malware, broken scripts, and security gaps."
      },
      {
        step: "02",
        title: "Automated Offsite Backup & Monitor Setup",
        summary: "We configure automated encrypted backups to independent cloud storage and establish 24/7 ping monitoring."
      },
      {
        step: "03",
        title: "Scheduled Staged Patching Cycles",
        summary: "Updates are applied systematically on staging first, verified across viewports, and deployed to live production during low-traffic windows."
      },
      {
        step: "04",
        title: "Continuous Ticket Resolution & Optimization",
        summary: "Your team submits content changes or support requests via direct email, completed with guaranteed turnaround times."
      }
    ],
    techStack: ["Uptime Monitoring", "Cloudflare WAF", "AWS S3 Encrypted Backups", "WordPress Security", "Shopify Apps", "GitHub CI/CD"],
    relatedProjects: ["melcasa-australia", "aurora-nordic-retreat", "mary-shavelle-couture"],
    faqs: [
      {
        question: "What happens if our website goes down in the middle of the night?",
        answer: "Our automated monitoring checks your website every 60 seconds from multiple global servers. If an outage is detected, our on-call engineers are alerted instantly to diagnose server connectivity, database locks, or code errors and restore service."
      },
      {
        question: "Are content and text updates included in the monthly retainer?",
        answer: "Yes! Every maintenance tier includes dedicated engineering support hours each month for updating copy, swapping banners, posting announcements, or adjusting styling."
      },
      {
        question: "How do you test updates before applying them to our live site?",
        answer: "We clone your website to an isolated staging environment, perform all core, theme, and plugin updates, test checkout flows and contact forms, and only deploy to production once 100% verified."
      },
      {
        question: "Can we cancel or change our maintenance plan at any time?",
        answer: "Yes. Our maintenance retainers are month-to-month with no long-term lock-in. You can upgrade, downgrade, or cancel anytime with 14 days notice."
      }
    ]
  },
  "product-upload-catalog-management": {
    slug: "product-upload-catalog-management",
    id: "catalog",
    title: "E-Commerce Product Upload & Catalog Management Services",
    shortTitle: "Product Upload & Catalog",
    seoTitle: "E-Commerce Product Upload & Catalog Management Services | HASIZ",
    metaDescription: "Accurate, SEO-optimized product uploading and catalog management for Shopify, WooCommerce, and custom e-commerce stores. Image formatting, variations, inventory, and meta tags.",
    h1: "E-Commerce Product Upload & Catalog Management",
    tagline: "Fast, Flawless Product Listings Optimized for Search & Sales",
    heroSummary: "Free your team from tedious data entry. We accurately upload, format, and organize your product catalogs across Shopify, WooCommerce, and custom web stores with crisp image optimization, precise variant matrices, and conversion-optimized descriptions.",
    heroImage: "/images/services/shopify-store-design.webp",
    altText: "E-commerce product catalog management, bulk upload, and variant configuration",
    businessProblems: [
      {
        title: "Slow Manual Entry Delaying Product Launches",
        description: "Entering hundreds of products manually consumes dozens of team hours, pushing back marketing launches and hurting cash flow."
      },
      {
        title: "Inconsistent Formatting & Mismatched Variants",
        description: "Mismatched size/color variants, missing SKU codes, and broken inventory syncs frustrate customers and cause costly returns."
      },
      {
        title: "Oversized Images Slowing Down the Store",
        description: "Raw supplier photos uploaded at 10MB each destroy your mobile site speed, causing customer drop-off before checkout."
      },
      {
        title: "Missing SEO Titles, Alt-Tags & Google Merchant Sync",
        description: "Products uploaded without keyword-optimized titles, meta descriptions, and Google Merchant categories fail to rank on organic Google Shopping."
      }
    ],
    capabilities: [
      {
        title: "Bulk & Single Product Uploading",
        description: "Importing hundreds of SKUs accurately via structured CSV/Excel templates or manual precision entry directly in CMS.",
        deliverables: ["Formatted CSV/Excel Catalog", "Bulk Import Execution", "Custom Field Mapping", "Pricing & Sale Rules Setup"]
      },
      {
        title: "Variant Matrix & Inventory Architecture",
        description: "Configuring multi-attribute variations (size, color, material, bundle packs) with individual SKU and stock synchronization.",
        deliverables: ["Variant Combinations Matrix", "SKU & Barcode Mapping", "Inventory Tracking Thresholds", "Weight & Shipping Tier Rules"]
      },
      {
        title: "Product Image Cropping & WebP Compression",
        description: "Standardizing image aspect ratios (1:1 square or 4:5 fashion), removing unwanted borders, and compressing to lightweight WebP.",
        deliverables: ["WebP Image Compression", "Square/Vertical Aspect Ratio Consistency", "Alt-Text SEO Tagging", "Zoom & Thumbnail Alignment"]
      },
      {
        title: "Category, Collection & Navigation Structuring",
        description: "Organizing products into intuitive automated smart collections, navigation menus, and faceted search filters.",
        deliverables: ["Smart Collection Tagging", "Faceted Filter Navigation", "Breadcrumb Setup", "Cross-Sell / Upsell Tagging"]
      }
    ],
    approach: [
      {
        step: "01",
        title: "Catalog Data & Asset Collection",
        summary: "You send us your product sheets (Excel, Google Sheets, or supplier PDFs) along with raw product imagery via Google Drive or Dropbox."
      },
      {
        step: "02",
        title: "Image Batch Processing & Standardization",
        summary: "We crop, clean backgrounds if needed, compress images to WebP format, and generate descriptive SEO alt tags for each photo."
      },
      {
        step: "03",
        title: "Accurate Upload & Variant Configuration",
        summary: "We upload all products, set pricing, assign SKUs, configure size/color dropdowns, and map products to the correct collections."
      },
      {
        step: "04",
        title: "Quality Control & Cart Flow Verification",
        summary: "We test product page displays on mobile and desktop, verify variant price shifts, and test cart addition before handing over."
      }
    ],
    techStack: ["Shopify Admin / Matrixify", "WooCommerce CSV Importer", "Adobe Photoshop / WebP", "Google Merchant Center", "SEO Meta Tags"],
    relatedProjects: ["mary-shavelle-couture", "blomma-flower-studio", "afterdark-hospitality"],
    faqs: [
      {
        question: "Which platforms do you support for product uploading?",
        answer: "We support Shopify, WooCommerce, Magento, BigCommerce, Etsy, Amazon, and custom Next.js/headless e-commerce databases."
      },
      {
        question: "Can you optimize our product images before uploading them?",
        answer: "Yes! Every single product photo is cropped to consistent proportions, compressed to fast-loading WebP format, and labeled with descriptive SEO alt tags for Google Image search."
      },
      {
        question: "What information do you need from us to start uploading products?",
        answer: "Simply provide your raw data in an Excel/Google Sheet (product title, price, description, SKU, and variant details) along with a link to your product images. If your data is unorganized, our team can help clean and structure it."
      },
      {
        question: "How fast can you upload a batch of 100 to 500 products?",
        answer: "Standard catalog batches of 100 to 200 products are typically processed, verified, and published within 2 to 4 business days. Larger catalogs of 500+ SKUs are scheduled in fast-turnaround sprints."
      }
    ]
  }
};

