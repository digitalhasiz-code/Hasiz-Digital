"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { blogArticles, officialBlogCategories } from "@/data/blog";
import { ArrowUpRight, BookOpen } from "lucide-react";

export default function InsightsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("All Articles");

  const filteredArticles = selectedCategory === "All Articles"
    ? blogArticles
    : blogArticles.filter(a => a.category === selectedCategory);

  return (
    <div className="pt-28 pb-20">
      {/* Blog Hero */}
      <section className="bg-surface py-16 lg:py-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Insights" }]} />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Technical Publications &amp; Editorial</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-tight">
              Thoughts on Technology, Design &amp; Digital Growth.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Practical engineering guides, e-commerce ROI analyses, and technical architecture retrospectives written by senior software engineers.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="pt-10 flex flex-wrap gap-2">
            {officialBlogCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue ${
                    isSelected
                      ? "bg-navy-900 text-white shadow-sm"
                      : "bg-white text-slate-600 hover:text-navy-900 border border-surface-border hover:border-slate-300"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="group bg-surface rounded-2xl border border-surface-border overflow-hidden hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <Link href={`/insights/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={article.featuredImage}
                      alt={article.altText}
                      width={600}
                      height={375}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/90 backdrop-blur-md text-navy-900">
                        {article.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-3">
                      <span>{article.readingTime}</span>
                      <span>•</span>
                      <span>{article.publishedDate}</span>
                    </div>

                    <h2 className="font-heading text-xl font-bold text-navy-900 group-hover:text-brand-blue transition-colors mb-3 leading-snug">
                      <Link href={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-brand-blue transition-colors"
                  >
                    <span>Read Full Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

