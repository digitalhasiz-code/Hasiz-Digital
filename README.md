# HASIZ — Digital Engineering Studio
> **"We Engineer Digital Experiences."**

A complete, production-ready website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and modern technical SEO architecture for **HASIZ — Digital Engineering Studio**.

---

## Key Features

- **Design System:** Bespoke corporate aesthetic using Midnight Navy (`#101828`), Primary Blue (`#2563EB`), Secondary Blue (`#3B82F6`), clean white space, Space Grotesk headings, and Inter body typography.
- **16 Complete Pages & Dynamic Templates:**
  1. **Home (`/`)**: Hero with interactive code preview, trust signals, 6 service cards, featured editorial work, why HASIZ, 4-step process, tech stack, philosophy, insights, and high-conversion final CTA.
  2. **About HASIZ (`/about`)**: Studio mission, engineering-first mindset, target audiences (startups, agencies, enterprise), capabilities, and standards.
  3. **Services Overview (`/services`)**: Comprehensive overview of all 6 service lines.
  4. **WordPress Development (`/services/wordpress-development`)**: Bespoke themes, Elementor custom widgets, high-performance WooCommerce, Redis caching, and FAQs.
  5. **Shopify Development (`/services/shopify-development`)**: Custom Online Store 2.0 themes, headless commerce, CRO, slide-out carts, and B2B portals.
  6. **Custom Web Development (`/services/custom-web-development`)**: Next.js App Router, SSR/SSG, edge deployments, microservice APIs, and Headless CMS.
  7. **AI Integration & Automation (`/services/ai-integration`)**: LLM APIs, automated document parsing, RAG knowledge systems, and event webhooks.
  8. **Web Application Development (`/services/web-application-development`)**: Enterprise SaaS, PostgreSQL architectures, real-time WebSockets, and dashboards.
  9. **UI/UX Design (`/services/ui-ux-design`)**: Design systems, tokenized Figma libraries, interactive prototypes, and WCAG AA accessibility.
  10. **Portfolio / Our Work (`/work`)**: Editorial portfolio showcase with interactive category filtering.
  11. **Individual Case Studies (`/work/[slug]`)**: 12 detailed case studies backed by genuine project screenshots from the `media/` directory.
  12. **Insights / Blog (`/insights`)**: Technical engineering journal with category filters and reading time.
  13. **Individual Blog Articles (`/insights/[slug]`)**: 10 comprehensive, original, search-intent-focused articles with key takeaways and FAQs.
  14. **Contact / Start a Project (`/contact`)**: Premium project inquiry form with client/server validation, spam honeypot, and SLA indicators.
  15. **Privacy Policy (`/privacy-policy`)**: GDPR & CCPA compliant data handling and confidentiality terms.
  16. **Terms & Conditions (`/terms-and-conditions`)**: Professional terms governing studio services and 100% code ownership.
  - **Custom 404 (`/_not-found`)**: Branded recovery page.

- **Advanced Image SEO & Performance:**
  - 25 optimized WebP images converted from raw high-res assets in `media/`, achieving 84% - 94% file size reduction.
  - LCP eager loading with `priority` and `fetchPriority="high"`.
  - Zero Cumulative Layout Shift (CLS) via explicit dimension attributes and responsive `sizes`.
  - Full asset inventory documented in `IMAGE_ASSET_INVENTORY.md`.

- **Technical SEO & Structured Data:**
  - Complete JSON-LD knowledge graphs: `Organization`, `WebSite`, `Service`, `FAQPage`, `BreadcrumbList`, `CreativeWork`, `BlogPosting`.
  - Dynamic `sitemap.xml` covering all 43 pre-rendered routes.
  - Production `robots.txt` disallowing private API routes.

---

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## Documentation Deliverables

- `IMAGE_ASSET_INVENTORY.md` — Complete inventory of all processed images, dimensions, alt text, and compression metrics.
- `SEARCH_CONSOLE_AND_ANALYTICS_GUIDE.md` — Domain verification, Google Search Console, GA4, and webhook setup.
- `DEPLOYMENT_INSTRUCTIONS.md` — Vercel, Docker, VPS, and Cloudflare configuration guide.
- `FINAL_SEO_AND_PERFORMANCE_AUDIT_REPORT.md` — Detailed Core Web Vitals, accessibility, and SEO sign-off.

