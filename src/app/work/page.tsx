"use client";

import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import CaseStudyCard from "@/components/CaseStudyCard";
import { projects } from "@/data/projects";
import { ArrowRight, Layers } from "lucide-react";
import Link from "next/link";

const categories = [
  "All Projects",
  "WordPress Development",
  "Shopify Development",
  "Custom Web Development",
  "Web Application Development",
  "AI Integration & Automation",
  "UI/UX Design"
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="pt-28 pb-20">
      {/* Portfolio Hero */}
      <section className="bg-surface py-16 lg:py-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Our Work" }]} />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60">
              <Layers className="w-3.5 h-3.5" />
              <span>Studio Engineering Retrospectives</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-tight">
              Digital Experiences. Real Projects.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              A curated catalog of production websites, e-commerce storefronts, and web applications engineered for international businesses.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="pt-10 flex flex-wrap gap-2">
            {categories.map((cat) => {
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

      {/* Projects Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <CaseStudyCard key={project.slug} project={project} priority={idx < 3} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-slate-500">
              No projects found in this category.
            </div>
          )}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Build Your Next Digital Product?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Contact HASIZ to discuss your architecture, specifications, and project scope.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-brand-blue hover:bg-blue-600 shadow-md transition-all group"
            >
              <span>Start Your Project Inquiry</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

