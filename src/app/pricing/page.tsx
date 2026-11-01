import { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import PricingPackages from "@/components/PricingPackages";
import MasterPricingTable from "@/components/MasterPricingTable";
import PricingConditions from "@/components/PricingConditions";
import { pricingFaqs } from "@/data/pricing";
import { ArrowRight, CheckCircle2, HelpCircle, Shield, Sparkles, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Pricing & Packages | Transparent Global Rates | HASIZ",
  description: "Explore HASIZ transparent engineering packages: Starter (Rs. 35k / $350), Professional (Rs. 80k / $900), Premium (Rs. 150k+ / $1,500+), and Enterprise solutions. Multi-currency support across Pakistan, USA, UK, UAE, and Europe.",
  alternates: {
    canonical: "https://www.hasiz.com/pricing",
  },
  openGraph: {
    title: "Engineering Pricing & Packages | HASIZ Digital Studio",
    description: "Predictable, value-driven pricing packages for web engineering, e-commerce, and software solutions. Calibrated for local affordability in Pakistan and international standards.",
    url: "https://www.hasiz.com/pricing",
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630 }],
  },
};

export default function PricingPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Section */}
      <section className="bg-surface py-16 lg:py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Pricing" }]} />

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pocket-Friendly Investment Architecture</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-tight">
              Flexible Scoping. Tailored to Your Budget.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Whether you need a rapid conversion landing page or a full business platform, our engineering roadmaps are tailored to your comfortable budget with milestone-based delivery and 100% code ownership.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Pocket-Friendly Startup &amp; Business Rates
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                100% Online Remote Studio
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                Zero Agency Markup Overhead
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* 4 Packages Grid */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 tracking-tight">
                Engineering Package Tiers
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Four clear tiers tailored to your company&apos;s current stage and architectural needs.
              </p>
            </div>

            <PricingPackages />
          </div>

          {/* Transparent Multi-Country Rate Card Table */}
          <div id="rate-card" className="pt-6">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60">
                <Tag className="w-3.5 h-3.5" />
                <span>Transparent Multi-Currency Rate Card</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 tracking-tight">
                Complete Service Rates by Region
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Explore transparent rates for all 13 services across Pakistan, Global/USA, UK, Europe, UAE, and Saudi Arabia.
              </p>
            </div>

            <MasterPricingTable />
          </div>

          {/* Pricing Conditions & Project Inclusions */}
          <PricingConditions />

          {/* Pricing FAQ Section */}
          <div className="pt-10 border-t border-slate-100">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900">
                  Got Questions About Pricing?
                </h2>
                <p className="text-slate-600 text-sm">
                  Clear answers to help you make an informed investment decision.
                </p>
              </div>

              <div className="space-y-4">
                {pricingFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-surface border border-surface-border space-y-2 transition-colors hover:border-slate-300"
                  >
                    <h3 className="font-heading font-bold text-base text-navy-900">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Call to Action Card */}
          <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-navy-950 p-8 sm:p-12 text-white text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-brand-blue/20 text-brand-sky border border-brand-blue/30">
                Ready to Start?
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                Let&apos;s Build Your High-Performance Digital Presence.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Send us your project scope today. We will analyze your requirements and provide a detailed milestone estimate within 24 hours.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-semibold text-sm transition-all shadow-md hover:shadow-brand-blue/30"
                >
                  <span>Request Project Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm transition-all border border-white/15"
                >
                  <span>Explore All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

