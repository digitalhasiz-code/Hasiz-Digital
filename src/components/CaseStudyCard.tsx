import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  project: Project;
  priority?: boolean;
}

export default function CaseStudyCard({ project, priority = false }: CaseStudyCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-surface-border overflow-hidden shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col h-full">
      {/* Screenshot / Image container */}
      <Link 
        href={`/work/${project.slug}`} 
        className="block relative aspect-[16/10] overflow-hidden bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={project.featuredImage}
          alt={project.altText}
          width={1200}
          height={750}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/10 transition-colors duration-300 pointer-events-none" />
        
        {/* Category Badge on top of image */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-navy-900 shadow-sm border border-white/40">
            {project.category}
          </span>
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

