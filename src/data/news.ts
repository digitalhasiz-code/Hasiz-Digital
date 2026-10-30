export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "Trading & Markets" | "Geopolitics & Defense" | "Tech & AI Economy" | "Global Supply Chains";
  publishedAt: string;
  timeAgo: string;
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  strategicEngineeringImpact: string;
  marketIndicators?: {
    label: string;
    value: string;
    change: string;
    positive?: boolean;
  }[];
  source: {
    name: "Reuters" | "Bloomberg" | "Financial Times" | "Associated Press" | "BBC News" | "CNBC" | "Wall Street Journal" | "Al Jazeera";
    url: string;
    authorOrBureau?: string;
    publishedTimestamp: string;
  };
  featuredImage: string;
  tags: string[];
  isUrgentOrBreaking?: boolean;
}

export const marketTickers = [
  { symbol: "S&P 500", price: "5,864.67", change: "+0.42%", positive: true },
  { symbol: "NASDAQ", price: "18,518.61", change: "+0.63%", positive: true },
  { symbol: "BRENT CRUDE", price: "$74.29/bbl", change: "+1.85%", positive: true },
  { symbol: "GOLD (OZ)", price: "$2,748.20", change: "+0.78%", positive: true },
  { symbol: "US 10Y YIELD", price: "4.24%", change: "+0.03%", positive: false },
  { symbol: "USD / EUR", price: "1.0824", change: "-0.15%", positive: false },
  { symbol: "SEMICONDUCTOR SOX", price: "5,215.10", change: "+1.12%", positive: true }
];

export const newsArticles: NewsArticle[] = [
  {
    id: "news-01",
    slug: "global-markets-rally-ai-semiconductor-capex-surge",
    title: "Global Markets Rally as Mega-Cap Tech Expands Multi-Billion Dollar AI Infrastructure Capex",
    subtitle: "Enterprise demand for compute power and specialized cloud data centers accelerates record capital deployment across international equity markets.",
    category: "Trading & Markets",
    publishedAt: "October 2026",
    timeAgo: "2 hours ago",
    readTime: "5 min read",
    summary: "Major equity indexes across New York, London, and Tokyo advanced today as multinational technology leaders signaled sustained expansions in sovereign AI clusters, high-bandwidth memory (HBM) silicon, and high-efficiency hyperscale data centers.",
    keyTakeaways: [
      "Enterprise hyperscalers committed over $180B in annualized capital expenditure targeted toward AI compute clusters and custom silicon.",
      "Semiconductor capital equipment manufacturers in the US, Netherlands, and Japan reported record order backlogs stretching through 2027.",
      "Investors are pivoting toward energy-efficient infrastructure and specialized cooling engineering companies as power constraints throttle traditional data center expansion."
    ],
    strategicEngineeringImpact: "For modern businesses, hyperscaler capex growth translates into vastly faster inference APIs, lowered per-token processing costs, and the commercial imperative to architect software applications with edge AI capabilities and low-latency API integration.",
    marketIndicators: [
      { label: "NASDAQ Composite", value: "18,518.61", change: "+0.63%", positive: true },
      { label: "SOX Semiconductor Index", value: "5,215.10", change: "+1.12%", positive: true },
      { label: "NVIDIA (NVDA)", value: "$141.50", change: "+2.18%", positive: true }
    ],
    source: {
      name: "Reuters",
      url: "https://www.reuters.com/technology/",
      authorOrBureau: "Global Financial Markets Bureau",
      publishedTimestamp: "2026-10-30T09:15:00Z"
    },
    featuredImage: "/images/services/ai-workflow-automation.webp",
    tags: ["Trading", "Tech Stocks", "Semiconductors", "AI Infrastructure", "Wall Street"],
    isUrgentOrBreaking: true
  },
  {
    id: "news-02",
    slug: "red-sea-shipping-rerouting-global-supply-chains-inflation-impact",
    title: "Red Sea Shipping Disruption Enters Critical Phase: Maritime Rerouting Drives E-Commerce Freight Surcharges",
    subtitle: "Container ships navigating around the Cape of Good Hope add 14 days to Asia-Europe trade lanes, reshaping inventory buffers and digital fulfillment operations.",
    category: "Global Supply Chains",
    publishedAt: "October 2026",
    timeAgo: "4 hours ago",
    readTime: "6 min read",
    summary: "Persistent maritime security threats around the Bab el-Mandeb strait have forced more than 80% of Asia-Europe container transit around the southern tip of Africa. Global freight indices indicate spot container rates remain elevated by 160% year-on-year, pushing brands to rethink real-time logistics architectures.",
    keyTakeaways: [
      "Transit transit times between East Asian manufacturing hubs and North European ports have lengthened by 10 to 14 days.",
      "Maritime insurance premiums for Red Sea transits remain at prohibitive emergency levels of 0.7% to 1.0% of vessel value.",
      "Omnichannel e-commerce retailers are expanding regional micro-fulfillment warehouses and integrating predictive inventory replenishment software."
    ],
    strategicEngineeringImpact: "E-commerce stores and Shopify enterprise brands must modernize ERP integrations, implement real-time shipping carrier API telemetry, and set dynamic delivery estimation engines to protect checkout conversion rates during extended transit cycles.",
    marketIndicators: [
      { label: "Drewry World Container Index", value: "$3,216 / 40ft", change: "+3.4%", positive: false },
      { label: "Brent Crude Oil", value: "$74.29 / bbl", change: "+1.85%", positive: true },
      { label: "Maersk (MAERSKb.CO)", value: "11,240 DKK", change: "+1.4%", positive: true }
    ],
    source: {
      name: "Financial Times",
      url: "https://www.ft.com/global-economy",
      authorOrBureau: "International Logistics & Trade Desk",
      publishedTimestamp: "2026-10-30T07:45:00Z"
    },
    featuredImage: "/images/portfolio/wholesaler-b2b-portal.webp",
    tags: ["Supply Chain", "Maritime Logistics", "E-Commerce", "Inflation", "Red Sea"],
    isUrgentOrBreaking: false
  },
  {
    id: "news-03",
    slug: "eastern-europe-conflict-energy-infrastructure-telecom-cyber-defense",
    title: "Eastern Europe Conflict: Critical Energy Grids and Satellite Telecommunications Bolster Cyber Defense Protocols",
    subtitle: "Government agencies and enterprise utilities deploy autonomous failover mesh systems to counter coordinated electronic warfare and physical grid attacks.",
    category: "Geopolitics & Defense",
    publishedAt: "October 2026",
    timeAgo: "6 hours ago",
    readTime: "7 min read",
    summary: "As missile and long-range drone barrages target power generation hubs across Eastern Ukraine, telecommunication providers have enacted multi-redundant satellite uplink arrays and decentralized microgrids to maintain banking and civil administrative digital connectivity.",
    keyTakeaways: [
      "Over 45,000 dual-band satellite terminals currently support civilian internet routing and emergency logistics across contested oblasts.",
      "Distributed zero-trust cybersecurity architectures prevented major disruptions to national interbank payment systems during recent coordinated DDoS waves.",
      "Western defense pact allies announced accelerated transfers of automated kinetic interceptors and hardened electronic countermeasure gear."
    ],
    strategicEngineeringImpact: "Highlights the necessity of multi-cloud sovereign redundancy, off-grid database backups, immutable audit logs, and edge-deployable static web architectures that remain operational when national telecommunication backbones experience severe degradation.",
    marketIndicators: [
      { label: "European Natural Gas (TTF)", value: "€41.80 / MWh", change: "+2.1%", positive: false },
      { label: "Defense ETF (ITA)", value: "$148.90", change: "+0.85%", positive: true },
      { label: "Gold Spot", value: "$2,748.20 / oz", change: "+0.78%", positive: true }
    ],
    source: {
      name: "Associated Press",
      url: "https://apnews.com/hub/russia-ukraine",
      authorOrBureau: "Eastern Europe Security Bureau",
      publishedTimestamp: "2026-10-30T05:30:00Z"
    },
    featuredImage: "/images/services/custom-web-development-architecture.webp",
    tags: ["Geopolitics", "Ukraine Conflict", "Cyber Defense", "Energy Security", "Infrastructure"],
    isUrgentOrBreaking: true
  },
  {
    id: "news-04",
    slug: "middle-east-tensions-oil-markets-strait-of-hormuz-monitoring",
    title: "Middle East Escalation Watch: Crude Markets React to Strait of Hormuz Maritime Defense Posture",
    subtitle: "International navies increase surveillance over vital oil transit bottleneck as diplomatic summits seek to prevent broader regional commercial disruption.",
    category: "Geopolitics & Defense",
    publishedAt: "October 2026",
    timeAgo: "8 hours ago",
    readTime: "5 min read",
    summary: "Crude oil benchmarks ticked higher across Singapore and London exchanges following heightened security advisories in the Persian Gulf and Strait of Hormuz, through which roughly 21% of global petroleum consumption transits daily.",
    keyTakeaways: [
      "Brent crude traded above $74 per barrel as risk premia widened across energy futures.",
      "Major tanker operators report expanded satellite AIS spoofing incidents in regional waters, mandating inertial navigation backups.",
      "International energy agencies affirmed adequate strategic petroleum reserve buffers to counteract transient physical loading delays."
    ],
    strategicEngineeringImpact: "Energy price volatility impacts enterprise cloud data center operational expenditures. Organizations must optimize serverless compute efficiency and eliminate idle cloud resource consumption to preserve operating margins.",
    marketIndicators: [
      { label: "Brent Crude", value: "$74.29", change: "+1.85%", positive: true },
      { label: "WTI Crude", value: "$70.40", change: "+1.92%", positive: true },
      { label: "OPEC Basket", value: "$73.90", change: "+1.65%", positive: true }
    ],
    source: {
      name: "Bloomberg",
      url: "https://www.bloomberg.com/energy",
      authorOrBureau: "Middle East Energy & Commodities Desk",
      publishedTimestamp: "2026-10-30T04:00:00Z"
    },
    featuredImage: "/images/services/hasiz-web-development-portfolio.webp",
    tags: ["Middle East", "Oil & Gas", "Strait of Hormuz", "Commodities", "Defense"],
    isUrgentOrBreaking: false
  },
  {
    id: "news-05",
    slug: "undersea-fiber-optic-cables-security-baltic-red-sea-data-infrastructure",
    title: "Undersea Fiber-Optic Cable Security Heightened Across Baltic and Mediterranean Basins",
    subtitle: "Telecommunications consortia implement real-time acoustic seismic monitoring after physical cable cuts underscore vulnerabilities in global internet plumbing.",
    category: "Tech & AI Economy",
    publishedAt: "October 2026",
    timeAgo: "11 hours ago",
    readTime: "6 min read",
    summary: "Subsea telecommunication operators connecting Europe, Africa, and the Arabian Peninsula have initiated round-the-clock surface escort protocols and automated BGP route deflection to safeguard intercontinental fiber arteries carrying over 95% of transatlantic and trans-Eurasian digital financial data.",
    keyTakeaways: [
      "Over 550 active subsea cable systems worldwide handle an estimated $10 trillion in daily financial transactions.",
      "Recent localized cable severing events triggered automated route rerouting via trans-Pacific terrestrial and alternative African coastal links.",
      "NATO and European Union task forces launched joint subsea maritime protection patrols under critical infrastructure defense charters."
    ],
    strategicEngineeringImpact: "Reinforces why modern web applications built by HASIZ utilize globally distributed Edge networks (Cloudflare / Fastly / AWS CloudFront) and Anycast DNS routing so users experience zero downtime even if an individual undersea cable route suffers physical severance.",
    marketIndicators: [
      { label: "Equinix (EQIX)", value: "$885.20", change: "+0.95%", positive: true },
      { label: "Digital Realty (DLR)", value: "$162.40", change: "+1.05%", positive: true },
      { label: "Cloudflare (NET)", value: "$89.50", change: "+2.30%", positive: true }
    ],
    source: {
      name: "Wall Street Journal",
      url: "https://www.wsj.com/tech",
      authorOrBureau: "Telecommunications & Global Tech Bureau",
      publishedTimestamp: "2026-10-30T01:15:00Z"
    },
    featuredImage: "/images/services/custom-web-application-dashboard.webp",
    tags: ["Undersea Cables", "Internet Backbone", "Cybersecurity", "Cloud Infrastructure", "Networking"],
    isUrgentOrBreaking: false
  },
  {
    id: "news-06",
    slug: "taiwan-strait-semiconductor-fabrication-resilience-chips-act",
    title: "Taiwan Strait Semiconductor Security: Global Foundries Accelerate Domestic Fab Rollouts",
    subtitle: "TSMC, Intel, and European microchip consortiums ramp up cleanroom equipment installations in Arizona, Dresden, and Kumamoto to insulate global hardware supply.",
    category: "Tech & AI Economy",
    publishedAt: "October 2026",
    timeAgo: "14 hours ago",
    readTime: "7 min read",
    summary: "Geopolitical risk mitigation is transforming the geography of semiconductor manufacturing. Foundries across North America, Europe, and Japan are executing commercial production validation runs for 3nm and 2nm node classes to protect downstream automotive, smartphone, and artificial intelligence hardware pipelines.",
    keyTakeaways: [
      "Over $220B in public and private capital subsidies have been committed across the US CHIPS Act and European Chips Act initiatives.",
      "Taiwanese fabrication hubs continue to lead global sub-3nm volume output while establishing overseas secondary redundant facilities.",
      "Automotive OEMs and enterprise server manufacturers have mandated diversified multi-country silicon source commitments for all 2027 product roadmaps."
    ],
    strategicEngineeringImpact: "Guarantees continuity in high-performance computing hardware availability for enterprise software development studios, preventing silicon supply shocks that previously paralyzed server procurement.",
    marketIndicators: [
      { label: "TSMC (TSM)", value: "$198.40", change: "+1.75%", positive: true },
      { label: "ASML Holding (ASML)", value: "$682.00", change: "+2.10%", positive: true },
      { label: "Intel (INTC)", value: "$22.80", change: "+0.60%", positive: true }
    ],
    source: {
      name: "CNBC",
      url: "https://www.cnbc.com/technology/",
      authorOrBureau: "Silicon & Hardware Industry Desk",
      publishedTimestamp: "2026-10-29T22:30:00Z"
    },
    featuredImage: "/images/services/shopify-store-design.webp",
    tags: ["Semiconductors", "Taiwan", "Hardware", "CHIPS Act", "Supply Chain"],
    isUrgentOrBreaking: false
  },
  {
    id: "news-07",
    slug: "central-banks-monetary-policy-global-venture-capital-tech-dealmaking",
    title: "Central Banks Signal Measured Easing Cycle: Tech Venture Funding and Enterprise Software Contracts Rebound",
    subtitle: "Federal Reserve and European Central Bank interest rate trajectories restore liquidity to private capital markets and corporate digital transformation budgets.",
    category: "Trading & Markets",
    publishedAt: "October 2026",
    timeAgo: "18 hours ago",
    readTime: "5 min read",
    summary: "As core inflation metrics moderate across OECD economies, central bank easing cycles have unlocked long-delayed enterprise software upgrades. CIO surveys indicate renewed budget allocations toward custom web platform modernization, ERP migration, and automated customer experience engineering.",
    keyTakeaways: [
      "Global private equity and venture capital deployable 'dry powder' remains at a record $2.49 trillion.",
      "Enterprise IT spend projections revised upward to 7.8% annualized growth, led by cloud software and cybersecurity integrations.",
      "Lower benchmark borrowing costs are catalyzing mid-market mergers, requiring immediate digital consolidation and platform unification."
    ],
    strategicEngineeringImpact: "Creates an ideal window for high-growth startups and established brands to commission bespoke web applications and high-conversion e-commerce storefronts that outpace legacy competitors.",
    marketIndicators: [
      { label: "US 10-Year Treasury", value: "4.24%", change: "+0.03%", positive: false },
      { label: "EUR / USD", value: "1.0824", change: "-0.15%", positive: false },
      { label: "Gold (USD / oz)", value: "$2,748.20", change: "+0.78%", positive: true }
    ],
    source: {
      name: "Bloomberg",
      url: "https://www.bloomberg.com/markets",
      authorOrBureau: "Global Economics & Monetary Desk",
      publishedTimestamp: "2026-10-29T18:00:00Z"
    },
    featuredImage: "/images/services/custom-wordpress-development.webp",
    tags: ["Federal Reserve", "Interest Rates", "Venture Capital", "Enterprise Software", "Markets"],
    isUrgentOrBreaking: false
  },
  {
    id: "news-08",
    slug: "middle-east-diplomacy-reconstruction-frameworks-digital-infrastructure",
    title: "Regional Security Summits Address Post-Conflict Maritime and Digital Infrastructure Corridors",
    subtitle: "International delegations outline sovereign digital trade agreements and port security standards to stabilize Red Sea and Gulf shipping arteries.",
    category: "Geopolitics & Defense",
    publishedAt: "October 2026",
    timeAgo: "1 day ago",
    readTime: "6 min read",
    summary: "Multilateral security envoys convened in Geneva and Riyadh to negotiate fortified maritime transit protocols and establish neutral civilian digital monitoring corridors across contested commercial waterways in the Red Sea and Levant.",
    keyTakeaways: [
      "Framework proposes unified automated vessel tracking systems with sovereign cryptographic tamper verification.",
      "Insurance underwriters offered provisional 15% rate rebates for cargo vessels adhering to standardized international escort convoys.",
      "Regional telecommunication carriers pledged shared emergency redundancy bandwidth during cross-border transit disruptions."
    ],
    strategicEngineeringImpact: "Demonstrates the rising importance of cryptographic verification, blockchain-backed bill of lading protocols, and tamper-resistant digital audit trails in international logistics platforms.",
    marketIndicators: [
      { label: "Dubai Financial Market", value: "4,480.12", change: "+0.55%", positive: true },
      { label: "Saudi Tadawul (TASI)", value: "12,045.30", change: "+0.40%", positive: true },
      { label: "Baltic Dry Index", value: "1,520", change: "-1.2%", positive: false }
    ],
    source: {
      name: "BBC News",
      url: "https://www.bbc.com/news/world/middle_east",
      authorOrBureau: "Diplomatic & Middle East Affairs Bureau",
      publishedTimestamp: "2026-10-29T12:00:00Z"
    },
    featuredImage: "/images/portfolio/dluxe-destinations.webp",
    tags: ["Diplomacy", "Maritime Security", "Trade Corridors", "Middle East", "Logistics"],
    isUrgentOrBreaking: false
  }
];
