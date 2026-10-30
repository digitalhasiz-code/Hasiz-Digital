const stackCategories = [
  {
    category: "Frontend Architecture",
    description: "Modern, reactive, and accessible user interfaces built for extreme performance.",
    items: [
      { name: "Next.js", role: "SSR & Static Framework" },
      { name: "React", role: "Component Architecture" },
      { name: "TypeScript", role: "Type Safety & Reliability" },
      { name: "Tailwind CSS", role: "Utility Design Tokens" },
      { name: "HTML5 / CSS3", role: "Semantic Modern Standards" },
      { name: "JavaScript (ESNext)", role: "High-Performance Scripting" }
    ]
  },
  {
    category: "CMS & E-Commerce",
    description: "Battle-tested platforms configured for high average order values and editor independence.",
    items: [
      { name: "WordPress", role: "Custom Bespoke Themes" },
      { name: "WooCommerce", role: "E-Commerce & Subscriptions" },
      { name: "Shopify 2.0", role: "Bespoke Liquid Storefronts" },
      { name: "Elementor Pro", role: "Custom Bespoke Widgets" },
      { name: "Shopify Storefront API", role: "Headless E-Commerce" }
    ]
  },
  {
    category: "Backend & Databases",
    description: "Scalable cloud backends, relational databases, and secure API gateways.",
    items: [
      { name: "Node.js", role: "Asynchronous Server Runtimes" },
      { name: "PHP 8.2+", role: "WordPress Core & Custom Modules" },
      { name: "PostgreSQL", role: "Relational Data Modeling" },
      { name: "Supabase", role: "Cloud Postgres & Auth" },
      { name: "Redis", role: "Persistent In-Memory Cache" }
    ]
  },
  {
    category: "Design & Systems",
    description: "Human-centered design systems bridging the gap between aesthetics and engineering.",
    items: [
      { name: "Figma", role: "Component Libraries & Prototypes" },
      { name: "Design Tokens", role: "Sync with Production CSS" },
      { name: "WCAG 2.2 AA", role: "Accessibility Standards" },
      { name: "Micro-Interactions", role: "Kinetic UI Feedback" }
    ]
  },
  {
    category: "Cloud & Infrastructure",
    description: "Global edge distribution, zero-downtime atomic deployments, and automated pipelines.",
    items: [
      { name: "Vercel", role: "Edge Network & Serverless" },
      { name: "Cloudflare", role: "WAF, SSL & Edge CDN" },
      { name: "GitHub Actions", role: "Continuous Integration / CD" },
      { name: "AWS S3 / R2", role: "Global Asset Object Storage" }
    ]
  },
  {
    category: "AI & Workflow Automation",
    description: "Intelligent APIs, structured document parsing, and event-driven automation.",
    items: [
      { name: "Gemini API", role: "Multimodal LLM Reasoning" },
      { name: "OpenAI API", role: "Structured JSON Extraction" },
      { name: "RAG Pipelines", role: "Vector Grounded Knowledge" },
      { name: "Event Webhooks", role: "CRM & ERP Sync" }
    ]
  }
];

export default function TechStackGrid() {
  return (
    <section className="py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60 mb-4">
            Technical Rigor
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 mb-6">
            Technology Stack & Capabilities
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We do not chase transient software fads. We invest deeply in mature, enterprise-grade technologies that deliver stability, speed, and proven commercial longevity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stackCategories.map((cat) => (
            <div 
              key={cat.category}
              className="bg-white rounded-xl p-7 border border-surface-border shadow-subtle hover:shadow-card transition-shadow flex flex-col justify-between"
            >
              <div>
                <h3 className="font-heading text-lg font-bold text-navy-900 mb-2">
                  {cat.category}
                </h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100 last:border-none">
                      <span className="font-semibold text-navy-900 font-mono">{item.name}</span>
                      <span className="text-slate-500">{item.role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

