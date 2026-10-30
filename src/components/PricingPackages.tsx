"use client";

import Link from "next/link";
import { useCurrency } from "@/context/CurrencyContext";
import { packageTiers, supportedCurrencies } from "@/data/pricing";
import { Check, ArrowRight, Zap, Star, ShieldCheck, Sparkles, Clock, Compass } from "lucide-react";

interface PricingPackagesProps {
  className?: string;
}

export default function PricingPackages({ className = "" }: PricingPackagesProps) {
  const { currency } = useCurrency();
  const currentConfig = supportedCurrencies[currency] || supportedCurrencies.USD;

  return (
    <div className={`space-y-12 ${className}`}>
      {/* Special Offer Banner for Single Landing Page */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-navy-900 via-navy-950 to-blue-950 p-6 sm:p-7 border border-blue-900/60 shadow-lg text-white">
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-brand-blue/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-500/20 text-brand-sky border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Special Campaign Launch Offer</span>
            </div>
            <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-white">
              Only Need a Single High-Converting Landing Page?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Engineered specifically for Google Ads, Facebook ads, and product rollouts. Ultra-fast sub-second loading with conversion-focused copywriting layout.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-5 py-3 border border-white/15">
              <div className="text-[11px] font-mono uppercase text-slate-300">Direct Special Price</div>
              <div className="font-heading text-2xl font-bold text-white flex items-baseline gap-2">
                <span>Rs. 15,000</span>
                <span className="text-sm font-normal text-slate-400">/ $190 USD</span>
              </div>
            </div>

            <Link
              href="/contact?service=landing-page"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-blue hover:bg-blue-600 text-white text-sm font-semibold transition-all shadow-md hover:shadow-brand-blue/30 whitespace-nowrap"
            >
              <span>Claim Landing Page Offer</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* 4 Packages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
        {packageTiers.map((tier) => {
          const isEnterprise = tier.id === "enterprise";
          const priceValue = tier.prices[currency];
          
          let displayPrice = "";
          if (isEnterprise || priceValue === null) {
            displayPrice = "Custom quote";
          } else {
            const formatted = currentConfig.format(priceValue);
            displayPrice = tier.isStartingFrom ? `${formatted}+` : formatted;
          }

          return (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? "bg-white border-2 border-brand-blue shadow-xl shadow-blue-500/10 ring-4 ring-blue-50"
                  : "bg-white border border-surface-border shadow-subtle hover:border-slate-300 hover:shadow-md"
              }`}
            >
              {/* Highlight Badge */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-brand-blue text-white text-xs font-mono font-semibold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{tier.badge}</span>
                </div>
              )}

              <div>
                {/* Header Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-xl text-navy-900">
                      {tier.name}
                    </h3>
                    {!tier.popular && tier.badge && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500 min-h-[36px] leading-relaxed">
                    {tier.tagline}
                  </p>
                </div>

                {/* Pricing Block */}
                <div className="py-4 border-y border-slate-100 space-y-1.5 mb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-heading text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
                      {displayPrice}
                    </span>
                    {!isEnterprise && (
                      <span className="text-xs font-mono text-slate-400">/ project</span>
                    )}
                  </div>

                  {/* Dual Benchmark Badge (Pakistan vs International) */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                      PK: {tier.pakistanDisplay}
                    </span>
                    <span>·</span>
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                      Global: {tier.internationalDisplay}
                    </span>
                  </div>
                </div>

                {/* Delivery Time & Ideal For */}
                <div className="space-y-2 mb-6 text-xs text-slate-600 bg-surface p-3 rounded-xl border border-surface-border">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
                    <span className="font-medium text-navy-900">Turnaround:</span>
                    <span>{tier.turnaround}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Compass className="w-3.5 h-3.5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>{tier.idealFor}</span>
                  </div>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    What&apos;s Included
                  </div>
                  <ul className="space-y-2.5">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-snug">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100">
                <Link
                  href={`/contact?package=${tier.id}&currency=${currency}`}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider font-mono transition-all duration-200 ${
                    tier.popular
                      ? "bg-brand-blue hover:bg-blue-600 text-white shadow-md shadow-brand-blue/20"
                      : "bg-navy-900 hover:bg-navy-800 text-white"
                  }`}
                >
                  <span>{isEnterprise ? "Discuss Enterprise Scope" : `Choose ${tier.name}`}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
