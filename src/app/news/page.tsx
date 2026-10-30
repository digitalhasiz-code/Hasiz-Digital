import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, 
  TrendingUp, 
  ShieldAlert, 
  Globe2, 
  ExternalLink, 
  Clock, 
  Building2, 
  Activity, 
  Layers,
  Search,
  Filter
} from "lucide-react";
import { newsArticles, marketTickers, NewsArticle } from "@/data/news";

export const metadata: Metadata = {
  title: "Global Market & Conflict Intelligence | World Trading & Geopolitics News",
  description: "Live strategic intelligence tracking world trading markets, tech equities, commodity shifts, and geopolitical conflict zones with direct third-party primary news sources.",
  keywords: [
    "World Trading News",
    "Global Market Intelligence",
    "Geopolitical Conflict News",
    "Red Sea Shipping Crisis",
    "Ukraine Energy Infrastructure",
    "AI Semiconductor Capex",
    "Global Trade Corridors",
    "HASIZ Digital Engineering Studio Intelligence"
  ],
  alternates: {
    canonical: "https://www.hasiz.com/news"
  },
  openGraph: {
    title: "Global Market & Conflict Intelligence — HASIZ Studio",
    description: "Tracking world trading markets, semiconductor hardware, and geopolitical conflict zones with direct primary source citations.",
    url: "https://www.hasiz.com/news",
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630 }]
  }
};

export default function NewsIndexPage() {
  const breakingNews = newsArticles.find(n => n.isUrgentOrBreaking) || newsArticles[0];
  const otherArticles = newsArticles.filter(n => n.id !== breakingNews.id);

  return (
    <div className="pt-28 pb-24 bg-surface min-h-screen">
      {/* Real-time Ticker Bar */}
      <section className="bg-navy-950 text-slate-300 border-b border-navy-800 py-2.5 overflow-x-auto scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-w-max gap-8 text-xs font-mono">
          <div className="flex items-center gap-2 text-brand-sky font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Live Market Telemetry</span>
          </div>
          <div className="flex items-center gap-6">
            {marketTickers.map((ticker) => (
              <div key={ticker.symbol} className="flex items-center gap-2">
                <span className="text-slate-400 font-medium">{ticker.symbol}</span>
                <span className="text-white font-semibold">{ticker.price}</span>
                <span className={`text-[11px] ${ticker.positive ? "text-emerald-400" : "text-rose-400"}`}>
                  {ticker.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Header */}
      <section className="pt-12 pb-12 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-mono font-semibold">
              <Globe2 className="w-3.5 h-3.5" />
              <span>GLOBAL INTELLIGENCE DESK</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
              World Trading & Geopolitical Conflict Intelligence.
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Curated strategic updates tracking international financial markets, semiconductor supply lines, and active geopolitical conflict theaters — verified against primary third-party reporting.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-12">
        {/* Urgent Intelligence Spotlight */}
        {breakingNews && (
          <div className="rounded-2xl border border-blue-200/80 bg-gradient-to-br from-white via-blue-50/20 to-white p-6 sm:p-8 shadow-subtle hover:shadow-card transition-all duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    Spotlight Brief
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                    {breakingNews.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {breakingNews.timeAgo}
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900 hover:text-brand-blue transition-colors leading-snug">
                  <Link href={`/news/${breakingNews.slug}`}>
                    {breakingNews.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {breakingNews.subtitle}
                </p>

                {/* Key indicators */}
                {breakingNews.marketIndicators && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {breakingNews.marketIndicators.map((ind, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-white border border-surface-border">
                        <div className="text-[11px] text-slate-500 font-mono truncate">{ind.label}</div>
                        <div className="text-sm font-bold text-navy-900 flex items-center justify-between">
                          <span>{ind.value}</span>
                          <span className="text-xs text-brand-blue font-mono font-medium">{ind.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Action CTA & Primary Source verification */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/80">
                  <a
                    href={breakingNews.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-blue hover:bg-blue-700 shadow-sm transition-all group"
                  >
                    <span>Read Original on {breakingNews.source.name}</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <Link
                    href={`/news/${breakingNews.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-navy-900 bg-white hover:bg-slate-50 border border-surface-border transition-all"
                  >
                    <span>Strategic Engineering Analysis</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Right Image Container */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-surface-border shadow-subtle">
                  <Image
                    src={breakingNews.featuredImage}
                    alt={breakingNews.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-3 right-3 bg-navy-950/80 backdrop-blur-sm px-3 py-1 rounded text-white text-[11px] font-mono flex items-center gap-1.5">
                    <span>Verified: {breakingNews.source.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Intelligence Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-surface-border">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy-900 flex items-center gap-2">
              <Activity className="w-5 h-5 text-brand-blue" />
              <span>Latest Primary Intelligence Dispatches</span>
            </h2>
            <div className="text-xs text-slate-500 font-mono">
              Live updates linked directly to original global reporting agencies
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {otherArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl border border-surface-border overflow-hidden shadow-subtle hover:shadow-card hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={article.featuredImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-navy-900 border border-slate-200">
                      {article.category}
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-navy-900/90 text-white backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-mono">
                      {article.timeAgo}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 sm:p-6 space-y-3">
                    {/* Source pill */}
                    <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span className="font-semibold text-brand-blue flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5" />
                        {article.source.name}
                      </span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-navy-900 leading-snug line-clamp-2 hover:text-brand-blue transition-colors">
                      <Link href={`/news/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Indicators */}
                    {article.marketIndicators && article.marketIndicators.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                        {article.marketIndicators.slice(0, 2).map((ind, i) => (
                          <span key={i} className="px-2 py-1 rounded bg-slate-50 border border-slate-200 text-slate-700">
                            {ind.label}: <strong className="text-navy-900">{ind.value}</strong> ({ind.change})
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer CTAs */}
                <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                  <a
                    href={article.source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-semibold text-brand-blue hover:text-blue-800 transition-colors"
                  >
                    <span>Original Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-slate-600 hover:text-navy-900 transition-colors"
                  >
                    <span>Strategic Impact</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Verification Methodology Notice */}
        <section className="rounded-xl border border-surface-border bg-white p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
            <ShieldAlert className="w-4 h-4 text-brand-blue" />
            <span>PRIMARY SOURCE VERIFICATION POLICY</span>
          </div>
          <h3 className="font-heading text-lg sm:text-xl font-bold text-navy-900">
            Editorial Sourcing & Real-Time Impact Analysis
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
            HASIZ monitors global commercial trade flows, financial markets, and geopolitical stress points to evaluate how international conditions impact digital architecture, cloud server distribution, e-commerce supply chains, and enterprise IT investments. Every intelligence dispatch links out to authoritative international wire agencies, including Reuters, Bloomberg, the Financial Times, and the Associated Press.
          </p>
        </section>
      </div>
    </div>
  );
}

