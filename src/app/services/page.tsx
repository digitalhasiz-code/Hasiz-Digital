import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceCard from "@/components/ServiceCard";
import CurrencySelector from "@/components/CurrencySelector";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechStackGrid from "@/components/TechStackGrid";
import { servicesData } from "@/data/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Services | Web Development, Shopify, AI & Apps",
  description: "Explore HASIZ digital engineering services: Custom WordPress, bespoke Shopify storefronts, Next.js web development, AI workflow automation, and SaaS applications.",
  alternates: {
    canonical: "https://www.hasiz.com/services",
  },
  openGraph: {
    title: "Engineering Services | HASIZ Digital Engineering Studio",
    description: "Explore our 6 core engineering specializations: WordPress, Shopify, Custom Web Development, AI Integration, Web Applications, and UI/UX Design Systems.",
    url: "https://www.hasiz.com/services",
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ServicesPage() {
  const serviceList = Object.values(servicesData);

  return (
    <div className="pt-28 pb-20">
      {/* Services Overview Hero */}
      <section className="bg-surface py-16 lg:py-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60">
              Studio Capabilities
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-tight">
              Engineering Solutions for Modern Businesses.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              We specialize in six core digital disciplines, each engineered to eliminate operational bottlenecks, elevate brand authority, and maximize commercial conversions.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                Zero Template Bloat
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                Sub-Second LCP Performance
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                Dedicated Post-Launch Retainers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Localized Currency Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-surface border border-surface-border mb-12 shadow-subtle">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-navy-900 uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Transparent Regional Pricing Architecture</span>
              </div>
              <p className="text-xs text-slate-500">
                All engineering rates are automatically calibrated for your market. Switch currency anytime:
              </p>
            </div>
            <CurrencySelector variant="inline" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <ProcessTimeline />

      {/* Supported Tech Stack */}
      <TechStackGrid />

      {/* CTA Box */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Need a Specialized Technical Solution?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Contact our engineering team to review your technical requirements and receive an actionable scoping proposal.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-brand-blue hover:bg-blue-600 shadow-md transition-all group"
            >
              <span>Start Your Project Brief</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

