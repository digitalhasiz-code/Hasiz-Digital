export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "WordPress Development" | "Shopify Development" | "Custom Web Development" | "AI Integration & Automation" | "Web Application Development" | "UI/UX Design";
  industry: string;
  year: string;
  overview: string;
  challenge: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  featuredImage: string;
  altText: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "blomma-flower-studio",
    title: "Blomma Flower Studio",
    client: "Blomma Floral Atelier",
    category: "Shopify Development",
    industry: "Artisanal E-Commerce & Luxury Retail",
    year: "2024",
    overview: "A bespoke, conversion-optimized floral e-commerce storefront featuring real-time delivery calendar selection, custom bouquet customization flows, and friction-free mobile checkout.",
    challenge: "The studio struggled with generic Shopify theme bloat, sluggish mobile loading speeds (>5s on 4G), and complex manual fulfillment workflows for time-sensitive floral deliveries.",
    solution: "Engineered a custom lightweight Liquid theme with modular section architecture, headless image optimization via WebP/AVIF, custom checkout integration for postal delivery slots, and automated fulfillment routing.",
    architecture: [
      "Custom Shopify Liquid Theme Engine (Zero heavy third-party app bloat)",
      "Dynamic Local Delivery Slot & Postal Code validator API",
      "Tailwind CSS utility build with minimal runtime JS payload (<45KB)",
      "Automated inventory synchronization and customer SMS notifications"
    ],
    technologies: ["Shopify Liquid", "JavaScript", "Tailwind CSS", "Shopify Storefront API", "Klaviyo API"],
    metrics: [
      { label: "Mobile Speed Score", value: "98/100" },
      { label: "Checkout Conversion Lift", value: "+34%" },
      { label: "Average Order Value", value: "+22%" },
      { label: "Initial Page Load", value: "0.85s" }
    ],
    featuredImage: "/images/portfolio/blomma-flower-studio.webp",
    altText: "Blomma Hand-Tied Flower Studio bespoke e-commerce store interface",
    featured: true
  },
  {
    slug: "pulseguard-healthtech",
    title: "PulseGuard Telemetry Platform",
    client: "PulseGuard Medical Systems",
    category: "Web Application Development",
    industry: "HealthTech & Medical IoT",
    year: "2024",
    overview: "A secure, HIPAA-compliant patient telemetry web application providing medical practitioners with real-time biometric anomaly detection and remote clinical monitoring.",
    challenge: "Handling concurrent biometric data streams across thousands of connected medical wearables without UI stutter or data lag, while adhering strictly to healthcare compliance standards.",
    solution: "Designed and developed a responsive single-page web application featuring WebSocket bi-directional streaming, state tree partitioning for high-frequency updates, and role-based access control.",
    architecture: [
      "High-concurrency WebSocket telemetry gateway",
      "Optimized virtualized chart rendering using Canvas for 60fps graphs",
      "End-to-end encrypted biometric payloads with strict audit trails",
      "Automated alerting engine with configurable clinical thresholds"
    ],
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "Tailwind CSS", "PostgreSQL"],
    metrics: [
      { label: "Latency for Live Signals", value: "<120ms" },
      { label: "Telemetry Throughput", value: "50k pts/sec" },
      { label: "Interface Responsiveness", value: "60 FPS" },
      { label: "Clinical Audit Compliance", value: "100%" }
    ],
    featuredImage: "/images/portfolio/pulseguard-healthtech.webp",
    altText: "PulseGuard HealthTech medical device telemetry and patient monitoring dashboard",
    featured: true
  },
  {
    slug: "inclusive-hydroponics",
    title: "Inclusive Hydroponics System",
    client: "Inclusive Hydroponics AgTech",
    category: "Custom Web Development",
    industry: "AgTech & Sustainable Farming",
    year: "2024",
    overview: "A modern commercial web platform and grower knowledge base connecting vertical farming operators with automated nutrient management guides and commercial hardware.",
    challenge: "Complex product specifications and high-resolution technical diagrams were causing high bounce rates on mobile devices and confusing non-technical agricultural buyers.",
    solution: "Built a custom, responsive web architecture featuring interactive system configurators, modular spec comparison tables, and localized technical documentation.",
    architecture: [
      "Modular Component System with zero runtime CSS-in-JS overhead",
      "Interactive crop yield and nutrient ROI calculator",
      "Progressive asset loading with responsive SVG system schematics",
      "Automated technical lead routing into client CRM"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Time on Site", value: "+140%" },
      { label: "Mobile Inquiries", value: "+48%" },
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Bounce Rate Reduction", value: "-28%" }
    ],
    featuredImage: "/images/portfolio/inclusive-hydroponics.webp",
    altText: "Inclusive Hydroponics sustainable vertical agriculture web platform",
    featured: true
  },
  {
    slug: "melcasa-australia",
    title: "Melcasa Australia",
    client: "Melcasa Living Pty",
    category: "Shopify Development",
    industry: "Architectural Furniture & Interior Design",
    year: "2024",
    overview: "A minimalist luxury e-commerce experience showcasing bespoke architectural furniture, engineered for tactile visual storytelling and seamless trade-account purchasing.",
    challenge: "High-ticket designer items require extensive visual material (finishes, fabric swatches, dimensional diagrams) without sacrificing page load speed or mobile responsiveness.",
    solution: "Engineered a custom Shopify 2.0 theme with asynchronous 3D/AR preview integration, dynamic swatch selectors, and a dedicated B2B trade portal with automated tier pricing.",
    architecture: [
      "Custom Shopify OS 2.0 architecture with bespoke modular JSON templates",
      "Dynamic material swatch and 360-degree rotation engine",
      "B2B customer segmentation with tiered price scheduling",
      "Automated logistics freight calculator based on volumetric dimensions"
    ],
    technologies: ["Shopify Liquid", "JavaScript (ESNext)", "Tailwind CSS", "Shopify B2B APIs"],
    metrics: [
      { label: "Average Session Duration", value: "4m 12s" },
      { label: "B2B Trade Registrations", value: "+62%" },
      { label: "Mobile Bounce Rate", value: "24.1%" },
      { label: "Core Web Vitals Pass Rate", value: "100%" }
    ],
    featuredImage: "/images/portfolio/melcasa-australia.webp",
    altText: "Melcasa Australia high-end architectural furniture and interior design storefront",
    featured: true
  },
  {
    slug: "wholesaler-b2b-portal",
    title: "Wholesaler B2B Distribution Portal",
    client: "Wholesaler Pro Network",
    category: "Web Application Development",
    industry: "Wholesale & Supply Chain",
    year: "2024",
    overview: "An enterprise B2B ordering and inventory portal supporting thousands of wholesale accounts, quick bulk order CSV uploads, and dynamic volume discounting.",
    challenge: "Wholesale clients placed orders via phone and spreadsheet emails, leading to costly order entry errors, delayed dispatch, and poor stock visibility.",
    solution: "Constructed an authenticated enterprise web portal with instant catalog search across 12,000+ SKUs, one-click re-ordering, credit limit enforcement, and ERP synchronization.",
    architecture: [
      "Optimized indexed catalog search with sub-50ms query latency",
      "Asynchronous bulk CSV order parsing and line-item validation",
      "Real-time ERP inventory sync webhook workers",
      "Role-based multi-user buyer organizations with approval thresholds"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    metrics: [
      { label: "Manual Order Entry Time", value: "-85%" },
      { label: "Digital Order Adoption", value: "76%" },
      { label: "Order Accuracy Rate", value: "99.8%" },
      { label: "Catalog Query Time", value: "42ms" }
    ],
    featuredImage: "/images/portfolio/wholesaler-b2b-portal.webp",
    altText: "Wholesaler B2B digital catalog and commercial supply chain ordering platform",
    featured: true
  },
  {
    slug: "atrt-hygiene-solutions",
    title: "Atrt Hygiene Commercial Store",
    client: "Atrt Hygiene Supplies",
    category: "WordPress Development",
    industry: "Commercial Sanitization & Healthcare Supplies",
    year: "2023",
    overview: "A high-performance WordPress WooCommerce portal serving medical facilities, hospitality businesses, and corporate facilities with automated subscription deliveries.",
    challenge: "The existing WordPress installation was bogged down by 42 conflicting plugins, recurring database lockups during traffic peaks, and an unresponsive mobile checkout.",
    solution: "Re-engineered the platform with a custom lightweight theme, pruned unnecessary plugins by 75%, implemented server-level Redis object caching, and rebuilt WooCommerce checkout.",
    architecture: [
      "Custom bespoke WordPress theme built without heavy page builder bloat",
      "Redis object caching and transient optimization",
      "Stripe Elements frictionless one-step checkout",
      "Automated subscription recurring billing and tax calculations"
    ],
    technologies: ["WordPress", "WooCommerce", "PHP 8.2", "MySQL", "Tailwind CSS", "Redis"],
    metrics: [
      { label: "Database Query Time", value: "-68%" },
      { label: "Page Load Reduction", value: "3.8s → 0.9s" },
      { label: "Monthly Recurring Revenue", value: "+41%" },
      { label: "Mobile Cart Abandonment", value: "-27%" }
    ],
    featuredImage: "/images/portfolio/atrt-hygiene-solutions.webp",
    altText: "Atrt Hygiene commercial sanitization and supplies WordPress WooCommerce portal",
    featured: true
  },
  {
    slug: "red-rhinoz-capital",
    title: "Red Rhinoz Capital Underwriting Engine",
    client: "Red Rhinoz Funding",
    category: "AI Integration & Automation",
    industry: "FinTech & Commercial Lending",
    year: "2024",
    overview: "An automated commercial lending qualification platform featuring AI-assisted document parsing, risk scoring heuristics, and instant preliminary term sheet generation.",
    challenge: "Underwriting analysts spent 14 hours manually reviewing bank statements, tax returns, and business filings for each applicant, causing high drop-off rates.",
    solution: "Integrated an intelligent document pipeline that automatically ingests PDF bank statements, extracts cash flow metrics, runs fraud checks, and scores creditworthiness.",
    architecture: [
      "Document ingestion pipeline using Optical Character Recognition and LLM reasoning",
      "Automated cash-flow variance and revenue anomaly analysis",
      "Rule-based underwriting engine with customizable risk bounds",
      "Encrypted cloud document vault with zero-retention data policies"
    ],
    technologies: ["Python", "FastAPI", "React", "TypeScript", "AI Document APIs", "PostgreSQL"],
    metrics: [
      { label: "Underwriting Turnaround", value: "14h → 15m" },
      { label: "Application Completion Rate", value: "+54%" },
      { label: "Document Verification Accuracy", value: "98.9%" },
      { label: "Monthly Originations", value: "+38%" }
    ],
    featuredImage: "/images/portfolio/red-rhinoz-capital.webp",
    altText: "Red Rhinoz Capital fintech business funding application and underwriting engine",
    featured: false
  },
  {
    slug: "dluxe-destinations",
    title: "Deluxe Destinations Luxury Booking",
    client: "Deluxe Destinations Global",
    category: "Custom Web Development",
    industry: "Luxury Hospitality & Private Travel",
    year: "2023",
    overview: "A cinematic, editorial web experience for ultra-high-net-worth travellers booking curated private villas, yacht charters, and bespoke destination itineraries.",
    challenge: "The client needed a digital presentation that matched the refinement of a seven-star concierge service, with micro-animations and zero performance degradation.",
    solution: "Engineered an editorial digital experience combining fluid cursor-driven interactions, high-definition responsive image loading, and a private client enquiry portal.",
    architecture: [
      "Custom Next.js App Router static/dynamic hybrid rendering",
      "Responsive image art direction with WebP/AVIF automated fallbacks",
      "Curated itinerary builder with PDF generation service",
      "End-to-end encrypted concierge inquiry messaging"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
    metrics: [
      { label: "Inquiry Value Average", value: "$45,000" },
      { label: "Bounce Rate", value: "19.2%" },
      { label: "Lighthouse Performance", value: "97/100" },
      { label: "Organic Search Traffic", value: "+85%" }
    ],
    featuredImage: "/images/portfolio/dluxe-destinations.webp",
    altText: "Deluxe Destinations bespoke luxury villa booking and concierge platform",
    featured: false
  },
  {
    slug: "mary-shavelle-couture",
    title: "Mary Shavelle Atelier Portfolio",
    client: "Mary Shavelle Maison",
    category: "UI/UX Design",
    industry: "Haute Couture & High Fashion",
    year: "2024",
    overview: "An avant-garde editorial design system and runway archive showcasing bespoke couture collections with typographic precision and immersive micro-interactions.",
    challenge: "Balancing radical high-fashion minimalism with commercial accessibility, ensuring every garment's texture and silhouette is honored across all screen densities.",
    solution: "Crafted a bespoke design system built on rigid typographic grids, restrained monochrome contrast with subtle metallic accents, and tactile page transitions.",
    architecture: [
      "Rigid typographic grid system based on golden ratio proportions",
      "Hardware-accelerated layout transitions with CSS transforms",
      "Dynamic collection lookbook with full-screen zoom and fabric detail modes",
      "Accessible dark/light aesthetic matching editorial fashion publications"
    ],
    technologies: ["Figma", "UI/UX Architecture", "React", "Tailwind CSS", "Next.js"],
    metrics: [
      { label: "Editorial Engagement Time", value: "5m 28s" },
      { label: "Press Coverage Inquiries", value: "+110%" },
      { label: "Mobile Usability Score", value: "100/100" },
      { label: "Design System Reusability", value: "95%" }
    ],
    featuredImage: "/images/portfolio/mary-shavelle-couture.webp",
    altText: "Mary Shavelle luxury fashion editorial portfolio and atelier design system",
    featured: false
  },
  {
    slug: "hello-pineapple-studio",
    title: "Hello Pineapple Creative Agency",
    client: "Hello Pineapple Ltd",
    category: "Custom Web Development",
    industry: "Digital Media & Brand Strategy",
    year: "2024",
    overview: "A vibrant, dynamic studio portfolio engineered for a multidisciplinary creative branding agency, featuring interactive project filters and fluid case study transitions.",
    challenge: "The agency needed to stand out in a crowded market without resorting to heavy WebGL canvas libraries that cause laptop fans to spin and drain mobile batteries.",
    solution: "Built a CSS-transform-driven interactive portfolio that provides silky 60fps animations with a featherlight bundle size of under 65KB.",
    architecture: [
      "Zero-dependency CSS transform and hardware-accelerated transitions",
      "Instant client-side tag filtering with URL state synchronization",
      "Responsive video loops with progressive stream buffering",
      "Modular CMS integration for effortless weekly case study updates"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    metrics: [
      { label: "Page Weight", value: "62 KB" },
      { label: "Interaction to Next Paint", value: "32ms" },
      { label: "Client Inbound Leads", value: "+75%" },
      { label: "Global CDN Latency", value: "<40ms" }
    ],
    featuredImage: "/images/portfolio/hello-pineapple-studio.webp",
    altText: "Hello Pineapple interactive creative agency portfolio and client showcase",
    featured: false
  },
  {
    slug: "poke-freeze-app",
    title: "Poke Freeze Interactive Bowl Builder",
    client: "Poke Freeze Brand",
    category: "Web Application Development",
    industry: "Fast Casual Food & Beverage",
    year: "2024",
    overview: "A delightful interactive custom meal builder and online pickup order web app for a growing chain of healthy fast-casual poke and frozen treat restaurants.",
    challenge: "Customers found multi-step customization confusing on third-party delivery apps, which charged 30% commission and provided zero customer data ownership.",
    solution: "Engineered a proprietary direct-order web application with step-by-step visual ingredient selection, dietary allergen badges, and real-time kitchen printer dispatch.",
    architecture: [
      "Visual drag-and-click ingredient builder with live calorie calculation",
      "Stripe and Apple Pay / Google Pay one-touch checkout",
      "Direct integration with cloud thermal kitchen order printers",
      "Customer loyalty stamp card system integrated into browser storage"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Stripe API"],
    metrics: [
      { label: "Direct Orders Reclaimed", value: "42%" },
      { label: "Third-party Fee Savings", value: "$4.8k/mo" },
      { label: "Average Build Time", value: "48s" },
      { label: "Customer Re-order Rate", value: "58%" }
    ],
    featuredImage: "/images/portfolio/poke-freeze-app.webp",
    altText: "Poke Freeze interactive custom bowl builder and quick-service ordering app",
    featured: false
  },
  {
    slug: "wilfred-frazer-consulting",
    title: "Wilfred Frazer Executive Advisory",
    client: "Wilfred Frazer Partners",
    category: "WordPress Development",
    industry: "Management Consulting & Executive Coaching",
    year: "2024",
    overview: "A clean, authority-building web platform for a top-tier corporate governance and board advisory firm, designed for executive readability and confidential client inquiries.",
    challenge: "The firm required a restrained, highly credible corporate presence that loaded instantaneously on executive mobile devices in corporate firewalls.",
    solution: "Developed an elegant, hardened WordPress solution with zero external tracking scripts, custom editorial typography, and an encrypted appointment scheduler.",
    architecture: [
      "Hardened WordPress core with enterprise security headers and strict CSP",
      "Custom editorial layout engine with Space Grotesk and serif accents",
      "Encrypted calendar scheduling integration with Google Workspace",
      "Sub-second page delivery across North American and European corporate networks"
    ],
    technologies: ["WordPress", "PHP 8.2", "Tailwind CSS", "Cloudflare Enterprise", "MySQL"],
    metrics: [
      { label: "Executive Inquiry Rate", value: "+88%" },
      { label: "Page Load Time", value: "0.68s" },
      { label: "Security Audit Score", value: "A+" },
      { label: "Bounce Rate", value: "16.5%" }
    ],
    featuredImage: "/images/portfolio/wilfred-frazer-consulting.webp",
    altText: "Wilfred Frazer executive leadership and strategic consulting website",
    featured: false
  }
];

