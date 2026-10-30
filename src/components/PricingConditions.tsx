import { CheckCircle2, AlertCircle, Shield, Globe, Layers, Sparkles } from "lucide-react";
import { pricingConditions } from "@/data/pricing";

interface PricingConditionsProps {
  className?: string;
}

export default function PricingConditions({ className = "" }: PricingConditionsProps) {
  return (
    <section className={`rounded-3xl bg-surface border border-surface-border p-6 sm:p-8 lg:p-10 shadow-subtle ${className}`}>
      <div className="max-w-3xl mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60">
          <Shield className="w-3.5 h-3.5" />
          <span>Scope Transparency &amp; Standards</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-heading text-navy-900 tracking-tight">
          Pricing Conditions &amp; Project Inclusions
        </h3>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          We believe in complete transparency. Every project we engineer adheres to strict commercial standards with zero hidden fees or unpleasant surprises.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {/* Left Column: What's Included */}
        <div className="rounded-2xl bg-white p-6 sm:p-7 border border-emerald-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
          
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-emerald-50 text-emerald-700">
                <CheckCircle2 className="w-5 h-5" />
              </span>
              <div>
                <h4 className="font-heading font-bold text-navy-900 text-lg">
                  Included in Every Website Project
                </h4>
                <p className="text-xs text-emerald-700 font-mono font-medium">
                  Standard Built-in Quality Baseline
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
              100% Guaranteed
            </span>
          </div>

          <ul className="space-y-4">
            {pricingConditions.included.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
                <div className="space-y-0.5">
                  <h5 className="text-sm font-semibold text-navy-900">
                    {item.title}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Fair Scope & Separate Charges */}
        <div className="rounded-2xl bg-white p-6 sm:p-7 border border-blue-100 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-navy-900" />

          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-blue-50 text-brand-blue">
                <AlertCircle className="w-5 h-5" />
              </span>
              <div>
                <h4 className="font-heading font-bold text-navy-900 text-lg">
                  Fair Scope &amp; Third-Party Services
                </h4>
                <p className="text-xs text-brand-blue font-mono font-medium">
                  Quoted Separately / Client Managed
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-brand-blue border border-blue-200/60">
              Direct Billing
            </span>
          </div>

          <ul className="space-y-4">
            {pricingConditions.separate.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                </span>
                <div className="space-y-0.5">
                  <h5 className="text-sm font-semibold text-navy-900">
                    {item.title}
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>Need us to manage hosting?</span>
            <span className="text-brand-blue font-semibold">Available from $100 / Rs. 8,000/mo</span>
          </div>
        </div>
      </div>
    </section>
  );
}
