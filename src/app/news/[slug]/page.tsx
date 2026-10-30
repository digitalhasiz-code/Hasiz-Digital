import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  ExternalLink, 
  Clock, 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  Globe2, 
  Share2 
} from "lucide-react";
import { newsArticles } from "@/data/news";
import Breadcrumbs from "@/components/Breadcrumbs";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | HASIZ Global Intelligence`,
    description: article.summary,
    keywords: [...article.tags, "HASIZ Intelligence", "Global Trade News", "Market Analysis"],
    alternates: {
      canonical: `https://www.hasiz.com/news/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://www.hasiz.com/news/${article.slug}`,
      type: "article",
      publishedTime: article.source.publishedTimestamp,
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default function SingleNewsPage({ params }: PageProps) {
  const article = newsArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const relatedNews = newsArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": article.title,
    "description": article.summary,
    "image": [`https://www.hasiz.com${article.featuredImage}`],
    "datePublished": article.source.publishedTimestamp,
    "dateModified": article.source.publishedTimestamp,
    "author": {
      "@type": "Organization",
      "name": `HASIZ Global Intelligence Desk (Citing ${article.source.name})`,
      "url": "https://www.hasiz.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HASIZ Digital Engineering Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hasiz.com/images/brand/logo-dark.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.hasiz.com/news/${article.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="pt-28 pb-24 bg-surface min-h-screen">
        {/* Header Breadcrumbs */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Global Intelligence", href: "/news" },
              { label: article.category, href: "/news" },
              { label: article.title }
            ]}
          />
        </div>

        {/* Main Article Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header Metadata */}
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-mono font-semibold">
                {article.category}
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.publishedAt} ({article.timeAgo})
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {article.readTime}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 leading-[1.15]">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              {article.subtitle}
            </p>
          </header>

          {/* Primary Source Verification Box */}
          <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono font-semibold text-brand-blue uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>ORIGINAL REPORTING CITATION</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700">
                Primary journalism sourced and verified via <strong className="text-navy-900">{article.source.name}</strong> ({article.source.authorOrBureau || "International Bureau"}).
              </p>
            </div>

            <a
              href={article.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-brand-blue hover:bg-blue-700 shadow-sm transition-all flex-shrink-0 group"
            >
              <span>Read Original on {article.source.name}</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-surface-border shadow-elevated">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-navy-950/80 backdrop-blur-sm px-3 py-1.5 rounded text-white text-xs font-mono">
              Intelligence Brief: {article.source.name} Primary Wire
            </div>
          </div>

          {/* Market Indicators / Metrics (if applicable) */}
          {article.marketIndicators && article.marketIndicators.length > 0 && (
            <div className="p-6 rounded-2xl bg-white border border-surface-border shadow-subtle space-y-3">
              <h3 className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-500 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-brand-blue" />
                <span>Associated Market Telemetry</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {article.marketIndicators.map((metric, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-xs text-slate-500 font-mono">{metric.label}</div>
                    <div className="text-lg font-bold text-navy-900 mt-1 flex items-baseline justify-between">
                      <span>{metric.value}</span>
                      <span className={`text-xs font-mono font-medium ${metric.positive ? "text-emerald-600" : "text-rose-600"}`}>
                        {metric.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Intelligence Takeaways */}
          <div className="rounded-2xl border border-navy-800 bg-navy-900 text-white p-6 sm:p-8 space-y-4 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-sky uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>KEY STRATEGIC TAKEAWAYS</span>
            </div>
            <ul className="space-y-3 text-sm sm:text-base text-slate-200">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-sky mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Executive Overview Body */}
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-subtle space-y-6 text-slate-700 leading-relaxed text-base sm:text-lg">
            <h2 className="font-heading text-2xl font-bold text-navy-900">
              Executive Situation Briefing
            </h2>
            <p>
              {article.summary}
            </p>
            <p>
              As global commercial supply chains, telecommunication infrastructure, and financial systems become increasingly intertwined with international geopolitical security, enterprise decision-makers must account for external shocks across logistics timelines, cloud infrastructure availability, and sovereign compliance mandates.
            </p>

            {/* Strategic Engineering Impact Section */}
            <div className="pt-6 border-t border-slate-200/80 space-y-3">
              <div className="text-xs font-mono font-semibold text-brand-blue uppercase tracking-wider flex items-center gap-1.5">
                <Globe2 className="w-4 h-4" />
                <span>HASIZ STRATEGIC ENGINEERING RECOMMENDATION</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-navy-900">
                How Modern Digital Systems Must Adapt
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {article.strategicEngineeringImpact}
              </p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs text-slate-500 font-mono mr-2">TOPICS:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Engineering CTA */}
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-8 sm:p-10 text-center space-y-4">
            <h3 className="font-heading text-2xl font-bold text-navy-900">
              Insulate Your Digital Business Against Global Volatility
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              HASIZ builds resilient, multi-region web architectures, high-converting e-commerce systems, and automated operational software designed to perform uninterrupted through global market shifts.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-brand-blue hover:bg-blue-700 shadow-md shadow-brand-blue/20 transition-all"
              >
                <span>Discuss Your Digital Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="pt-8 border-t border-surface-border space-y-6">
            <h3 className="font-heading text-xl font-bold text-navy-900">
              Related Intelligence Dispatches
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/news/${rel.slug}`}
                  className="group bg-white p-5 rounded-xl border border-surface-border hover:border-slate-300 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono text-brand-blue font-semibold uppercase">
                      {rel.category}
                    </span>
                    <h4 className="font-heading text-sm font-bold text-navy-900 group-hover:text-brand-blue transition-colors line-clamp-2">
                      {rel.title}
                    </h4>
                  </div>
                  <div className="pt-4 flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>{rel.source.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

