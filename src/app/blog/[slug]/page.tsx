import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogArticles } from "@/data/blog";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowLeft, ArrowUpRight, Check, Clock, Calendar, User, BookOpen, Share2 } from "lucide-react";

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
    title: `${article.title} | HASIZ Blog`,
    description: article.excerpt,
    alternates: {
      canonical: `https://www.hasiz.com/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author.name],
      url: `https://www.hasiz.com/blog/${article.slug}`,
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

export default function SingleBlogPage({ params }: Props) {
  const article = blogArticles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const relatedArticles = blogArticles.filter((a) => a.slug !== article.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": `https://www.hasiz.com${article.featuredImage}`,
    "datePublished": article.publishedDate,
    "dateModified": article.updatedDate,
    "author": {
      "@type": "Organization",
      "name": article.author.name,
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
      "@id": `https://www.hasiz.com/blog/${article.slug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="pt-28 pb-24 bg-surface min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: article.category, href: "/blog" },
              { label: article.title }
            ]}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-mono font-semibold">
                {article.category}
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
              <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedDate}
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 leading-[1.15]">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            <div className="pt-3 flex items-center gap-3 border-t border-slate-200/80 text-xs text-slate-600 font-mono">
              <User className="w-4 h-4 text-brand-blue" />
              <span>Written by <strong className="text-navy-900">{article.author.name}</strong> ({article.author.role})</span>
            </div>
          </header>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-surface-border shadow-elevated">
            <Image
              src={article.featuredImage}
              alt={article.altText}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Key Takeaways */}
          <div className="rounded-2xl border border-navy-800 bg-navy-900 text-white p-6 sm:p-8 space-y-4 shadow-elevated">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-sky uppercase tracking-wider">
              <Check className="w-4 h-4" />
              <span>EXECUTIVE KEY TAKEAWAYS</span>
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

          {/* Content Sections */}
          <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-10 shadow-subtle space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
            {article.content.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="font-heading text-2xl font-bold text-navy-900 pt-2">
                  {sec.heading}
                </h2>
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
                {sec.subsections && sec.subsections.map((sub, subIdx) => (
                  <div key={subIdx} className="pl-4 border-l-2 border-brand-blue my-4 space-y-2">
                    <h3 className="font-heading text-xl font-bold text-navy-900">{sub.title}</h3>
                    <p className="text-slate-600 text-base">{sub.text}</p>
                    {sub.bulletPoints && (
                      <ul className="space-y-1.5 text-sm text-slate-600 pt-1">
                        {sub.bulletPoints.map((bp, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-brand-blue font-bold">•</span>
                            <span>{bp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </section>
            ))}
          </div>

          {/* FAQs section */}
          {article.faqs && article.faqs.length > 0 && (
            <div className="bg-white rounded-2xl border border-surface-border p-6 sm:p-8 space-y-4">
              <h3 className="font-heading text-xl font-bold text-navy-900">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4 divide-y divide-slate-100">
                {article.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="pt-4 first:pt-0 space-y-1.5">
                    <h4 className="font-heading text-base font-semibold text-navy-900">
                      {faq.question}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Box */}
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-white p-8 text-center space-y-4">
            <h3 className="font-heading text-2xl font-bold text-navy-900">
              Need Engineering Support for Your Project?
            </h3>
            <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Our engineering team builds custom web platforms, e-commerce stores, and high-performance applications designed to scale.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white bg-brand-blue hover:bg-blue-700 shadow-md shadow-brand-blue/20 transition-all"
              >
                <span>Consult Our Engineers</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="pt-8 border-t border-surface-border space-y-6">
            <h3 className="font-heading text-xl font-bold text-navy-900">
              Related Engineering Articles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
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
                    <span>{rel.readingTime}</span>
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

