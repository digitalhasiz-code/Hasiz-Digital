import Link from "next/link";
import { ArrowLeft, Home, Layers, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-28 pb-20 bg-surface">
      <div className="max-w-xl mx-auto px-4 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-slate-100 text-navy-900 border border-surface-border">
          HTTP 404 — Page Not Found
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 tracking-tight">
          Route Does Not Exist
        </h1>

        <p className="text-base text-slate-600 leading-relaxed max-w-md mx-auto">
          The requested page or endpoint could not be located on the HASIZ digital studio cluster. It may have been relocated or updated.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-brand-blue hover:bg-blue-700 shadow-sm transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Studio Home</span>
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-navy-900 bg-white hover:bg-slate-50 border border-surface-border shadow-subtle transition-all"
          >
            <Compass className="w-4 h-4 text-slate-400" />
            <span>View Services</span>
          </Link>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-navy-900 bg-white hover:bg-slate-50 border border-surface-border shadow-subtle transition-all"
          >
            <Layers className="w-4 h-4 text-slate-400" />
            <span>Explore Work</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

