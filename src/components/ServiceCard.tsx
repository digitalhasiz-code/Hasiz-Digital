"use client";

import Link from "next/link";
import { ServiceDetail } from "@/data/services";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

interface ServiceCardProps {
  service: ServiceDetail;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const numberStr = String(index + 1).padStart(2, "0");

  return (
    <div className="group bg-white rounded-2xl border border-surface-border p-7 sm:p-8 shadow-subtle hover:shadow-card hover:border-brand-blue/30 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
      {/* Top index and category */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-xs font-semibold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md">
            {numberStr} — Engineering
          </span>
          <span className="text-xs text-slate-400 font-mono">
            {service.techStack.slice(0, 2).join(" • ")}
          </span>
        </div>

        <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy-900 mb-2 group-hover:text-brand-blue transition-colors">
          <Link href={`/services/${service.slug}`} className="focus:outline-none focus-visible:underline">
            {service.shortTitle}
          </Link>
        </h3>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
          {service.tagline}
        </p>

        {/* Pocket-Friendly Budget Badge */}
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50/80 border border-blue-200/70 text-navy-900">
          <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
          <span className="text-xs font-semibold tracking-wide text-brand-blue font-sans">
            Pocket-Friendly • Tailored to Your Budget
          </span>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
          {service.heroSummary}
        </p>

        {/* Key deliverables checklist */}
        <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
          {service.capabilities.slice(0, 3).map((cap) => (
            <div key={cap.title} className="flex items-start gap-2 text-xs text-slate-600">
              <Check className="w-3.5 h-3.5 text-brand-blue mt-0.5 flex-shrink-0" />
              <span className="line-clamp-1">{cap.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer link */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-brand-blue transition-colors"
        >
          <span>Explore Service Scope</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
        <div className="flex gap-1">
          {service.techStack.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-50 text-slate-600 rounded border border-slate-200/50">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
