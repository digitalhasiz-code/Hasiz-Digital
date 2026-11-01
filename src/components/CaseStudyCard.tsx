import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, Lock, MoveVertical } from "lucide-react";

interface CaseStudyCardProps {
  project: Project;
  priority?: boolean;
}

export default function CaseStudyCard({ project, priority = false }: CaseStudyCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-surface-border overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col h-full">
      {/* Interactive Website Preview with Smooth Hover Scroll */}
      <Link 
        href={`/work/${project.slug}`} 
        className="block relative overflow-hidden bg-slate-950 focus:outline-none focus:ring-2 focus:ring-brand-blue group/screen"
        tabIndex={-1}
        aria-hidden="true"
      >
        {/* Browser Mockup Top Chrome */}
        <div className="h-7 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-3.5 select-none relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500/80" />
            <span className="w-2 h-2 rounded-full bg-amber-400/80" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-slate-400 max-w-[190px] sm:max-w-[220px] truncate border border-slate-700/50">
            <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
            <span className="truncate">{project.slug}.com</span>
          </div>

          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold hidden sm:inline-block">
            {project.category}
          </span>
        </div>

        {/* Viewport Frame with Smooth Slow Scroll */}
        <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-900">
          <Image
            src={project.featuredImage}
            alt={project.altText}
            width={1200}
            height={750}
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-auto min-h-[420px] sm:min-h-[480px] object-cover object-top will-change-transform transition-transform duration-[1400ms] ease-out group-hover/screen:duration-[6500ms] group-hover/screen:ease-in-out group-hover/screen:-translate-y-[calc(100%-15rem)] sm:group-hover/screen:-translate-y-[calc(100%-18rem)]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

          {/* Hover to scroll indicator badge */}
          <div className="absolute bottom-3 right-3 z-10 pointer-events-none transition-all duration-300 group-hover/screen:opacity-0 group-hover/screen:translate-y-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-navy-950/85 backdrop-blur-md text-slate-200 border border-white/15 shadow-md">
              <MoveVertical className="w-2.5 h-2.5 text-brand-sky animate-bounce" />
              <span>Hover to preview page</span>
            </span>
          </div>
        </div>
      </Link>

      {/* Body content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-mono">
            <span>{project.industry}</span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-heading text-xl font-bold text-navy-900 mb-3 group-hover:text-brand-blue transition-colors">
            <Link href={`/work/${project.slug}`} className="focus:outline-none focus-visible:underline">
              {project.title}
            </Link>
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
            {project.overview}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200/60"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded text-[11px] font-mono text-slate-400">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* View Case Study Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <Link
            href={`/work/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-brand-blue transition-colors"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          {project.metrics && project.metrics[0] && (
            <span className="text-xs font-mono font-semibold text-brand-blue bg-blue-50 px-2.5 py-1 rounded-md">
              {project.metrics[0].label}: {project.metrics[0].value}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

