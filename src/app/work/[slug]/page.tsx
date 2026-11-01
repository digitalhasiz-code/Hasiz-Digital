import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import CaseStudyCard from "@/components/CaseStudyCard";
import { ArrowLeft, ArrowRight, CheckCircle2, Cpu, ExternalLink, Lock, Sparkles } from "lucide-react";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Case Study Not Found" };

  return {
    title: `${project.title} — Case Study | HASIZ Digital Studio`,
    description: `${project.overview.slice(0, 155)}...`,
    alternates: {
      canonical: `https://www.hasiz.com/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | HASIZ Case Study`,
      description: project.overview,
      url: `https://www.hasiz.com/work/${project.slug}`,
      images: [
        {
          url: project.featuredImage,
          width: 1200,
          height: 750,
          alt: project.altText,
        },
      ],
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  // Related projects
  const otherProjects = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  // Schema
  const caseStudyJsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": `${project.title} Case Study`,
    "headline": project.title,
    "description": project.overview,
    "image": `https://www.hasiz.com${project.featuredImage}`,
    "creator": {
      "@type": "Organization",
      "name": "HASIZ Digital Engineering Studio",
      "url": "https://www.hasiz.com"
    },
    "genre": project.category,
    "about": project.industry,
    "dateCreated": project.year
  };

  return (
    <div className="pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />

      {/* Case Study Hero */}
      <section className="bg-surface py-16 lg:py-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Our Work", href: "/work" },
              { label: project.title }
            ]}
          />

          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-50 text-brand-blue border border-blue-200/60">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-500">
                {project.industry} • {project.year}
              </span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Metrics Banner */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200/70">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-white p-5 rounded-xl border border-surface-border shadow-subtle">
                <div className="text-xs text-slate-500 font-mono mb-1">{m.label}</div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-brand-blue font-mono">{m.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Showcase Image */}
      <section className="py-12 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-surface-border shadow-elevated bg-slate-900 group">
            {/* Browser Mockup Chrome Header */}
            <div className="h-9 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-4 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-800/80 text-xs font-mono text-slate-300 border border-slate-700/50">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>https://{project.slug}.com</span>
              </div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                {project.category}
              </span>
            </div>

            <div className="relative overflow-hidden bg-slate-950">
              <Image
                src={project.featuredImage}
                alt={project.altText}
                width={1200}
                height={750}
                priority
                fetchPriority="high"
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Detailed Narrative */}
      <section className="py-20 bg-white border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* The Challenge */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-slate-100 text-navy-900 border border-slate-200">
              The Architectural Bottleneck
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
              The Client Challenge
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* The Solution */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-blue-50 text-brand-blue border border-blue-200/60">
              The Engineering Strategy
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
              Our Technical Solution
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-6 pt-4 border-t border-slate-100">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
              Architecture &amp; Engineering Decisions
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.architecture.map((arch) => (
                <div key={arch} className="p-5 rounded-xl bg-surface border border-surface-border flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700 leading-relaxed">{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="font-heading text-xl font-bold text-navy-900">
              Technologies Deployed
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-navy-900 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-surface border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
              Explore More Case Studies
            </h2>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-blue-700 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((p) => (
              <CaseStudyCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue block">
              Start Your Project
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900">
              Need Similar Results for Your Business?
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Tell us about your digital goals and technical parameters. We will evaluate your brief and respond with architectural guidance.
            </p>
          </div>

          <ContactForm defaultService={project.category} />
        </div>
      </section>
    </div>
  );
}

