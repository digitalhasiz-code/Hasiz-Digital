"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react";
import { blogArticles, officialBlogCategories } from "@/data/blog";

export default function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");

  const filteredArticles = selectedCategory === "All Articles"
    ? blogArticles
    : blogArticles.filter((a) => a.category === selectedCategory);

  const featuredArticle = filteredArticles[0] || blogArticles[0];
  const gridArticles = filteredArticles.slice(1);

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-mono font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>ENGINEERING BLOG &amp; GUIDES</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 leading-tight">
            Practical Engineering &amp; Digital Strategy.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            In-depth guides, e-commerce ROI benchmarks, and technical architecture retrospectives written by our senior software engineers and designers.
          </p>
        </div>

        {/* 7 Category Tabs */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-2">
            {officialBlogCategories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-blue ${
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

        {/* Featured Article Hero Card */}
        {featuredArticle && (
          <div className="rounded-2xl border border-surface-border bg-white overflow-hidden shadow-subtle hover:shadow-card transition-all duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium">
                    {featuredArticle.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredArticle.readingTime}
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-900 hover:text-brand-blue transition-colors leading-tight">
                  <Link href={`/blog/${featuredArticle.slug}`}>
                    {featuredArticle.title}
                  </Link>
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                  <div className="text-xs text-slate-500 font-mono">
                    By <strong className="text-navy-900">{featuredArticle.author.name}</strong> • {featuredArticle.publishedDate}
                  </div>
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-blue-800 transition-colors group"
                  >
                    <span>Read Full Guide</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src={featuredArticle.featuredImage}
                  alt={featuredArticle.altText}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* All Blog Articles Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-surface-border">
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-navy-900">
              {selectedCategory === "All Articles" ? "All Published Guides & Articles" : selectedCategory}
            </h2>
            <span className="text-xs font-mono text-slate-500">
              {filteredArticles.length} {filteredArticles.length === 1 ? "Article" : "Articles"}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {gridArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-xl border border-surface-border overflow-hidden shadow-subtle hover:shadow-card hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <Image
                      src={article.featuredImage}
                      alt={article.altText}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-semibold text-navy-900 border border-slate-200 shadow-sm">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                      <span>{article.readingTime}</span>
                      <span>{article.publishedDate}</span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-navy-900 leading-snug line-clamp-2 hover:text-brand-blue transition-colors">
                      <Link href={`/blog/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono truncate max-w-[160px]">
                    {article.author.name}
                  </span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 font-semibold text-brand-blue hover:text-blue-800 transition-colors"
                  >
                    <span>Read Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

