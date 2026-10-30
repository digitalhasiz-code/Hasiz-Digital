"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceDetail } from "@/data/services";
import { projects } from "@/data/projects";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import CaseStudyCard from "@/components/CaseStudyCard";
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles } from "lucide-react";

interface ServicePageProps {
  service: ServiceDetail;
}

export default function ServicePageTemplate({ service }: ServicePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Find relevant portfolio projects
  const relevantProjects = projects.filter((p) =>
    service.relatedProjects.includes(p.slug)
  );

  // Construct JSON-LD Service schema
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "HASIZ Digital Engineering Studio",
      "url": "https://hasiz.com"
    },
    "serviceType": service.shortTitle,
    "areaServed": ["United States", "United Kingdom", "Europe", "Worldwide"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.shortTitle} Capabilities`,
      "itemListElement": service.capabilities.map((c) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": c.title,
          "description": c.description
        }
      }))
    }
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };

  return (
    <div className="pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <section className="bg-surface py-16 lg:py-24 border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.shortTitle }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.tagline}</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-tight">
                {service.h1}
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                {service.heroSummary}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-brand-blue hover:bg-blue-700 shadow-md transition-all group"
                >
                  <span>Request Technical Proposal</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl text-sm font-semibold text-navy-900 bg-white hover:bg-slate-50 border border-surface-border shadow-subtle transition-all"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-surface-border shadow-elevated bg-slate-900">
                <Image
                  src={service.heroImage}
                  alt={service.altText}
                  width={1200}
                  height={750}
                  priority
                  fetchPriority="high"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Problems Addressed */}
      <section className="py-20 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue block mb-2">
              Strategic Value
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Critical Business Challenges We Solve
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We don&apos;t just write code; we eliminate the root causes of digital friction that hold back modern commercial enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.businessProblems.map((prob, idx) => (
              <div
                key={prob.title}
                className="bg-surface rounded-xl p-8 border border-surface-border space-y-3"
              >
                <div className="text-xs font-mono text-brand-blue font-semibold">
                  0{idx + 1} — CHALLENGE REMEDIATED
                </div>
                <h3 className="font-heading text-xl font-bold text-navy-900">
                  {prob.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {prob.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Capabilities */}
      <section id="capabilities" className="py-20 lg:py-28 bg-surface border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue block mb-2">
              Deliverables &amp; Scope
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Comprehensive Engineering Capabilities
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Every deliverable is crafted to exacting industry specifications, passing strict accessibility, security, and performance audits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap) => (
              <div
                key={cap.title}
                className="bg-white rounded-2xl p-8 border border-surface-border shadow-subtle space-y-5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-xl font-bold text-navy-900 mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2.5">
                    Verified Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cap.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-navy-900 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-20 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue block mb-2">
              Execution Roadmap
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Our Development Approach
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Transparent, milestone-based execution with zero surprises. You stay informed from initial discovery to production cutover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.approach.map((step) => (
              <div key={step.step} className="bg-surface rounded-xl p-7 border border-surface-border space-y-3">
                <span className="font-mono text-xl font-bold text-brand-blue">
                  {step.step}
                </span>
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Project Examples */}
      {relevantProjects.length > 0 && (
        <section className="py-20 lg:py-28 bg-surface border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue block mb-2">
                  Proven Execution
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900">
                  Relevant Case Studies
                </h2>
              </div>
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-blue-700 transition-colors"
              >
                <span>View Full Studio Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relevantProjects.slice(0, 2).map((project) => (
                <CaseStudyCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technology Stack Pill Section */}
      <section className="py-16 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Supported Technologies
              </span>
              <h3 className="font-heading text-xl font-bold text-navy-900">
                Core Stack for {service.shortTitle}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-surface border border-surface-border text-navy-900 shadow-subtle"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 lg:py-28 bg-surface border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue block">
              Direct Answers
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Real questions from modern business leaders regarding our {service.shortTitle.toLowerCase()} process and pricing.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-xl border border-surface-border overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base font-bold text-navy-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? "transform rotate-180 text-brand-blue" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Inquiry Section */}
      <section id="inquiry" className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue block">
              Start Your Inquiry
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900">
              Discuss Your {service.shortTitle} Project
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Tell us about your timeline, existing tech stack, and goals. We&apos;ll evaluate your specifications and reply with architectural insights within 24 business hours.
            </p>
          </div>

          <ContactForm defaultService={service.title} />
        </div>
      </section>
    </div>
  );
}

