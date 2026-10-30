# HASIZ Digital Engineering Studio — Search Console & Analytics Setup Guide

This guide provides step-by-step instructions for establishing Google Search Console ownership, submitting the XML sitemap, configuring Google Analytics 4 (GA4), and verifying production indexation for **HASIZ — Digital Engineering Studio**.

---

## 1. Domain Ownership Verification

To ensure full access to search performance data and indexation controls, verify your root domain in Google Search Console:

### Method A: DNS TXT Record (Recommended for Apex + Subdomains)
1. Open [Google Search Console](https://search.google.com/search-console).
2. Select **Add Property** and choose the **Domain** property type.
3. Enter your domain: `hasiz.com`.
4. Copy the unique TXT record provided by Google (e.g., `google-site-verification=XXXXX...`).
5. In your DNS provider (Cloudflare, Namecheap, GoDaddy, or Route 53):
   - **Type:** `TXT`
   - **Name:** `@` (or leave blank depending on provider)
   - **Value:** Paste the verification token.
   - **TTL:** `Auto` or `300 seconds`.
6. Return to Google Search Console and click **Verify**.

### Method B: HTML Meta Tag Verification
If you prefer meta tag verification:
1. Choose the **URL prefix** property type: `https://hasiz.com`.
2. Select **HTML tag** as the verification method.
3. Copy the token inside `content="..."`.
4. Add the token to your environment variables or `.env.local`:
   ```bash
   NEXT_PUBLIC_GSC_VERIFICATION=your-token-here
   ```
5. Deploy to production and click **Verify**.

---

## 2. Sitemap Submission

HASIZ features a dynamically generated, programmatic sitemap conforming strictly to sitemaps.org standards:
- **Production URL:** `https://hasiz.com/sitemap.xml`
- **Robots.txt Location:** `https://hasiz.com/robots.txt`

### Submission Steps:
1. In Google Search Console, navigate to **Indexing** &rarr; **Sitemaps** from the left-hand navigation.
2. Under "Add a new sitemap", input:
   ```text
   sitemap.xml
   ```
3. Click **Submit**.
4. Status will change to **Success**. Googlebot will queue and crawl all 43 statically pre-rendered URLs (core pages, service verticals, case studies, and insight articles).

---

## 3. Google Analytics 4 (GA4) Configuration

HASIZ includes a zero-latency, conditional GA4 script loader configured in `src/app/layout.tsx`.

### Setup:
1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com).
2. Set up a Web Data Stream with your production URL `https://hasiz.com`.
3. Copy your **Measurement ID** (format: `G-XXXXXXXXXX`).
4. Set the environment variable in your production hosting platform (Vercel / Netlify / AWS):
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
5. When `NEXT_PUBLIC_GA_ID` is present, the script initializes asynchronously without blocking page rendering or degrading Core Web Vitals. If the variable is absent, no third-party scripts are injected.

---

## 4. Contact Form Webhook Integration

The contact form at `/contact` and on each service page dispatches structured JSON payloads to `/api/contact`.

### Wiring to Slack / Discord / CRM:
Set the `CONTACT_WEBHOOK_URL` environment variable:
```env
CONTACT_WEBHOOK_URL=https://hooks.slack.com/services/...
```
When submitted, submissions are automatically formatted and forwarded with full client context:
- Full Name
- Business Email
- Company Name
- Service Line
- Budget Tier
- Target Timeline
- Project Scope

---

## 5. Pre-Launch Verification Checklist

- [x] All 16 core pages rendered with unique `<title>` and `<meta name="description">`
- [x] Canonical URLs configured with absolute paths
- [x] JSON-LD schemas validated (Organization, WebSite, Service, BreadcrumbList, CreativeWork, BlogPosting, FAQPage)
- [x] OpenGraph and Twitter cards previewing correctly with 1200x630 `/images/brand/og-image.png`
- [x] Next-gen WebP images loading with explicit width/height and responsive `sizes`
- [x] Robots.txt disallowing `/api/` and pointing to `https://hasiz.com/sitemap.xml`

