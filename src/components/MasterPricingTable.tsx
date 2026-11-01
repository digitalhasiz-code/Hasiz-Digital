"use client";

import { useState } from "react";
import { useCurrency } from "@/context/CurrencyContext";
import { masterPricingTable, supportedCurrencies, CurrencyCode } from "@/data/pricing";
import CurrencySelector from "@/components/CurrencySelector";
import { Sparkles, ArrowRight, CheckCircle2, ShieldCheck, Tag } from "lucide-react";
import Link from "next/link";

export default function MasterPricingTable() {
  const { currency, setCurrency, currencyConfig } = useCurrency();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Development", "E-Commerce", "Optimization & SEO", "Maintenance"];

  const filteredServices = selectedCategory === "All"
    ? masterPricingTable
    : masterPricingTable.filter(s => s.category === selectedCategory);

  const mainColumns: { code: CurrencyCode; label: string; countryCode: string }[] = [
    { code: "USD", label: "GLOBAL / USA", countryCode: "US" },
    { code: "PKR", label: "PAKISTAN", countryCode: "PK" },
    { code: "GBP", label: "UK", countryCode: "GB" },
    { code: "EUR", label: "EUROPE", countryCode: "EU" },
    { code: "AED", label: "UAE", countryCode: "AE" },
    { code: "SAR", label: "SAUDI", countryCode: "SA" },
  ];

  return (
    <div className="w-full space-y-6">
      {/* Top Header & Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-navy-950 text-white p-5 sm:p-6 rounded-2xl border border-navy-800">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase bg-brand-blue/20 text-blue-400 border border-blue-500/30">
            <Tag className="w-3 h-3" />
            <span>Official Transparent Rate Card</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
            Comprehensive Service Rates by Country
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            Clean-code delivery, zero template bloat, and post-launch technical warranty. Rates calibrated per regional market.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto bg-navy-900 px-3 py-2 rounded-xl border border-navy-700">
          <span className="text-xs font-mono text-slate-400">Your Currency:</span>
          <CurrencySelector variant="inline" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue ${
              selectedCategory === cat
                ? "bg-navy-900 text-white shadow-sm"
                : "bg-white text-slate-600 hover:text-navy-900 border border-surface-border hover:border-slate-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl border border-surface-border bg-white shadow-subtle scrollbar-thin">
        <table className="w-full text-left border-collapse min-w-[760px]">
          <thead>
            <tr className="bg-navy-950 text-white border-b border-navy-800 text-xs font-mono uppercase tracking-wider">
              <th className="py-4 px-5 font-bold text-slate-200">Services</th>
              {mainColumns.map((col) => {
                const isActive = col.code === currency;
                return (
                  <th
                    key={col.code}
                    className={`py-4 px-4 font-bold text-center transition-colors ${
                      isActive ? "bg-[#132C5B] text-white border-x border-blue-500/30" : "text-slate-300"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-[10px] text-slate-400 font-mono font-normal uppercase">{col.countryCode}</span>
                      <span>{col.label}</span>
                    </div>
                  </th>
                );
              })}
              <th className="py-4 px-4 font-bold text-center text-slate-200">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredServices.map((item) => {
              const isLandingPage = item.id === "landing-page";
              return (
                <tr
                  key={item.id}
                  className={`transition-colors hover:bg-slate-50/80 ${
                    isLandingPage ? "bg-blue-50/40 font-semibold" : ""
                  }`}
                >
                  <td className="py-4 px-5">
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-bold text-navy-900">{item.name}</span>
                      {isLandingPage && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          Special Offer
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-sans line-clamp-1 mt-0.5">
                      {item.description}
                    </p>
                  </td>

                  {mainColumns.map((col) => {
                    const priceVal = item.prices[col.code];
                    const cfg = supportedCurrencies[col.code];
                    const formatted = cfg.format(priceVal, item.isMonthly);
                    const isActive = col.code === currency;

                    return (
                      <td
                        key={col.code}
                        className={`py-4 px-4 text-center font-mono text-xs whitespace-nowrap ${
                          isActive
                            ? "bg-blue-50/70 text-navy-950 font-bold border-x border-blue-200/60"
                            : "text-slate-700"
                        } ${isLandingPage && col.code === "PKR" ? "text-emerald-700 font-bold" : ""}`}
                      >
                        {formatted}
                      </td>
                    );
                  })}

                  <td className="py-4 px-4 text-center whitespace-nowrap">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-navy-900 hover:bg-brand-blue transition-colors shadow-sm"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono px-2 gap-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Pakistan (PKR) prices specifically calibrated for local affordability.</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
          <span>All custom projects include milestone-based delivery &amp; code ownership.</span>
        </div>
      </div>
    </div>
  );
}

