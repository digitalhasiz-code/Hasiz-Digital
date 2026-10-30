import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "@/data/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Clock, Calendar, User, BookOpen } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = blogArticles.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | HASIZ Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.hasiz.com/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author.name],
      url: `https://www.hasiz.com/insights/${article.slug}`,
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 750,
          alt: article.altText,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage],
    },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const article = blogArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  // Related articles
  const otherArticles = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  // JSON-LD Schema
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": `https://hasiz.com${article.featuredImage}`,
    "datePublished": article.publishedDate,
    "dateModified": article.updatedDate,
    "author": {
      "@type": "Organization",
      "name": article.author.name,
      "url": "https://hasiz.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "HASIZ Digital Engineering Studio",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hasiz.com/images/brand/logo-dark.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://hasiz.com/insights/${article.slug}`
    }
  };

  const faqJsonLd = article.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <div className="pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Insights", href: "/insights" },
            { label: article.category }
          ]}
        />

        <header className="space-y-6 pt-4 pb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-brand-blue border border-blue-200/60">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Published {article.publishedDate}
              </span>
            </div>
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            {article.excerpt}
          </p>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-bold font-mono">
                H
              </div>
              <div>
                <span className="font-semibold text-navy-900 block">{article.author.name}</span>
                <span className="text-[11px] text-slate-400">{article.author.role}</span>
              </div>
            </div>
            <span className="font-mono text-slate-400">Updated: {article.updatedDate}</span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-surface-border shadow-card bg-slate-900">
          <Image
            src={article.featuredImage}
            alt={article.altText}
            width={1200}
            height={750}
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, 900px"
            className="w-full h-auto object-cover object-top"
          />
        </div>

        {/* Key Takeaways Callout */}
        <div className="mb-12 p-6 sm:p-8 bg-blue-50/60 border border-blue-100 rounded-2xl">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-blue mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Key Architectural Takeaways</span>
          </div>
          <div className="space-y-3">
            {article.keyTakeaways.map((takeaway) => (
              <div key={takeaway} className="flex items-start gap-3 text-sm text-navy-900 font-medium leading-relaxed">
                <Check className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate max-w-none space-y-12 text-slate-700 leading-relaxed">
          {article.content.map((sec) => (
            <section key={sec.heading} className="space-y-4">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
                {sec.heading}
              </h2>

              {sec.paragraphs.map((p, i) => (
                <p key={i} className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}

              {sec.subsections && sec.subsections.map((sub) => (
                <div key={sub.title} className="p-6 bg-surface rounded-xl border border-surface-border space-y-3 my-6">
                  <h3 className="font-heading text-lg font-bold text-navy-900">
                    {sub.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {sub.text}
                  </p>
                  {sub.bulletPoints && (
                    <ul className="space-y-1.5 pl-4 list-disc text-xs text-slate-600 font-medium">
                      {sub.bulletPoints.map((bp, bidx) => (
                        <li key={bidx}>{bp}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          ))}
        </div>

        {/* Related Service Contextual Box */}
        <div className="mt-16 p-8 bg-navy-900 text-white rounded-2xl border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-brand-sky uppercase tracking-wider block">
              Engineering Partnership
            </span>
            <h3 className="font-heading text-xl font-bold">
              Looking to implement this architecture for your business?
            </h3>
            <p className="text-sm text-slate-300 max-w-md">
              Speak with HASIZ lead engineers to review your stack and receive tailored recommendations.
            </p>
          </div>
          <Link
            href={`/services/${article.relatedServiceSlug}`}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-navy-900 bg-white hover:bg-slate-100 transition-colors shadow-sm"
          >
            <span>Explore Service Details</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* FAQs if present */}
        {article.faqs.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="font-heading text-2xl font-bold text-navy-900 mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {article.faqs.map((faq) => (
                <div key={faq.question} className="p-6 bg-surface rounded-xl border border-surface-border space-y-2">
                  <h4 className="font-heading text-base font-bold text-navy-900">
                    {faq.question}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* More Articles */}
      <section className="mt-20 pt-16 bg-surface border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
              More Insights from HASIZ
            </h2>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-blue-700 transition-colors"
            >
              <span>View All Publications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherArticles.map((art) => (
              <article
                key={art.slug}
                className="group bg-white rounded-2xl border border-surface-border overflow-hidden hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <Link href={`/insights/${art.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={art.featuredImage}
                      alt={art.altText}
                      width={600}
                      height={375}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="p-6">
                    <span className="text-[11px] font-mono text-slate-400 block mb-2">{art.category}</span>
                    <h3 className="font-heading text-base font-bold text-navy-900 group-hover:text-brand-blue transition-colors mb-2 leading-snug">
                      <Link href={`/insights/${art.slug}`}>
                        {art.title}
                      </Link>
                    </h3>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/insights/${art.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-brand-blue transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

