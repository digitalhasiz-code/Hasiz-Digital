import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Code2, Cpu, Globe2, ShieldCheck, Zap } from "lucide-react";
import { projects } from "@/data/projects";
import { servicesData } from "@/data/services";
import { blogArticles } from "@/data/blog";
import CaseStudyCard from "@/components/CaseStudyCard";
import ServiceCard from "@/components/ServiceCard";
import ProcessTimeline from "@/components/ProcessTimeline";
import TechStackGrid from "@/components/TechStackGrid";
import PhilosophySection from "@/components/PhilosophySection";

export default function HomePage() {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);
  const serviceList = Object.values(servicesData);
  const featuredArticles = blogArticles.slice(0, 3);

  return (
    <div className="relative">
      {/* SECTION 02 — HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-surface overflow-hidden">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-brand-blue text-xs font-mono font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                <span>DIGITAL ENGINEERING STUDIO</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-[1.08]">
                We Engineer Digital Experiences That Move Businesses Forward.
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
                From high-performance websites and scalable e-commerce platforms to intelligent software solutions, HASIZ helps ambitious businesses turn complex ideas into powerful digital experiences.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-base font-semibold text-white bg-brand-blue hover:bg-blue-700 shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/25 transition-all duration-200 group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/work"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-navy-900 bg-white hover:bg-slate-50 border border-surface-border shadow-subtle hover:border-slate-300 transition-all duration-200"
                >
                  <span>Explore Our Work</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Verified Capabilities Checklist */}
              <div className="pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Sub-Second Load Times</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Technical SEO Built-In</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>100% Code Ownership</span>
                </div>
              </div>
            </div>

            {/* Right Interactive Development Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Visual Engineering Mockup Window */}
                <div className="rounded-2xl border border-navy-800 bg-navy-900 text-white p-5 shadow-elevated relative overflow-hidden">
                  <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-brand-sky" />
                      studio-architecture.tsx
                    </span>
                    <span className="text-[10px] font-mono text-brand-sky bg-navy-800 border border-navy-700 px-2 py-0.5 rounded">
                      STABLE
                    </span>
                  </div>

                  {/* Code snippet & UI Preview */}
                  <div className="py-4 space-y-3 font-mono text-xs text-slate-300">
                    <div className="text-slate-500">// HASIZ Core Engineering Engine</div>
                    <div className="flex gap-2">
                      <span className="text-brand-sky font-semibold">const</span>
                      <span className="text-white">digitalStudio</span>
                      <span className="text-slate-400">=</span>
                      <span className="text-brand-sky">new</span>
                      <span className="text-white">HasizEngine</span>();
                    </div>
                    <div className="pl-4 space-y-1.5 text-slate-400 border-l border-navy-700">
                      <div><span className="text-brand-sky">.optimizeCoreWebVitals</span>({`{ lcp: "< 1.0s", cls: 0 }`})</div>
                      <div><span className="text-brand-sky">.deployArchitecture</span>(<span className="text-slate-300">&apos;Edge-First&apos;</span>)</div>
                      <div><span className="text-brand-sky">.integrateAI</span>({`{ mode: "Workflow-Leverage" }`})</div>
                    </div>
                  </div>

                  {/* Embedded live project preview card */}
                  <div className="mt-2 rounded-xl bg-navy-950 border border-navy-800 p-3 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                      <span>DEPLOYED SHOWCASE</span>
                      <span className="text-brand-sky">Blomma Flower Studio</span>
                    </div>
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-navy-800">
                      <Image
                        src="/images/portfolio/blomma-flower-studio.webp"
                        alt="Blomma Flower Studio bespoke e-commerce store interface"
                        width={600}
                        height={338}
                        priority
                        fetchPriority="high"
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-top w-full h-full"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 font-mono">
                      <span>LIGHTHOUSE SPEED: 98/100</span>
                      <span className="text-brand-sky font-semibold">+34% CONVERSION</span>
                    </div>
                  </div>
                </div>

                {/* Floating telemetry badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-3.5 border border-surface-border shadow-card hidden sm:flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-navy-900">Sub-Second Delivery</div>
                    <div className="text-[11px] text-slate-500 font-mono">Average TTFB &lt; 140ms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — TRUST / EXPERTISE */}
      <section className="py-14 bg-white border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue block mb-1">
                Engineering Discipline
              </span>
              <h2 className="font-heading text-xl font-bold text-navy-900">
                Technology Built Around Your Business.
              </h2>
            </div>
            <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-navy-900 font-semibold text-sm">
                  <Globe2 className="w-4 h-4 text-brand-blue" />
                  <span>International Reach</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Engineering web platforms for commercial clients in the US, UK, Europe, and global startup ecosystems.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-navy-900 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-brand-blue" />
                  <span>Security by Design</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Enterprise-grade Content Security Policies, hardened CMS setups, and secure cloud API gateways.
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-navy-900 font-semibold text-sm">
                  <Cpu className="w-4 h-4 text-brand-blue" />
                  <span>Full-Stack Mastery</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Deep technical expertise across Next.js, WordPress, Shopify, relational PostgreSQL, and AI workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — SERVICES */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60 mb-4">
                Core Capabilities
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
                Engineering Solutions for Modern Businesses.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-blue-700 transition-colors"
            >
              <span>View All 6 Service Specializations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — FEATURED WORK */}
      <section className="py-20 lg:py-28 bg-white border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60 mb-4">
                Selected Portfolio
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
                Digital Experiences. Real Projects.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-blue-700 transition-colors"
            >
              <span>Browse All Studio Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {featuredProjects.map((project, idx) => (
              <CaseStudyCard key={project.slug} project={project} priority={idx === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 06 — WHY HASIZ */}
      <section className="py-20 lg:py-28 bg-surface border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60 mb-4">
              The Studio Advantage
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 mb-6">
              More Than Development. A Better Digital Foundation.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We replace fragile shortcuts and offshore agency hand-offs with senior software engineering rigor. Here is how our approach protects your business investment:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-7 rounded-xl border border-surface-border shadow-subtle space-y-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">Custom-Built Solutions</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No copy-paste templates. Every line of code and UI component is tailored to your business model, customer journey, and operational requirements.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-surface-border shadow-subtle space-y-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">Performance-First Architecture</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zero bloated scripts or unoptimized assets. We engineer sub-second page loads that keep mobile bounce rates minimal and Google Core Web Vitals pristine.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-surface-border shadow-subtle space-y-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">Responsive Experiences</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pixel-perfect usability across smartphones, tablets, high-DPI displays, and ultra-wide desktop monitors with rigorous cross-browser testing.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-surface-border shadow-subtle space-y-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">SEO-Conscious Development</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Semantic HTML5 outlines, automated dynamic sitemaps, programmatic OpenGraph tags, and comprehensive JSON-LD schemas baked into every route.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-surface-border shadow-subtle space-y-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-mono font-bold text-sm">
                05
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">Scalable Technology</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Built on modern stacks like Next.js, TypeScript, and edge cloud runtimes that scale effortlessly from day-one traffic to millions of monthly hits.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-surface-border shadow-subtle space-y-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center font-mono font-bold text-sm">
                06
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">Direct Engineer Communication</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No intermediate account managers playing telephone. You collaborate directly with senior engineers who understand your code and architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 07 — OUR PROCESS */}
      <ProcessTimeline />

      {/* SECTION 08 — TECHNOLOGY STACK */}
      <TechStackGrid />

      {/* SECTION 09 — DEVELOPMENT PHILOSOPHY */}
      <PhilosophySection />

      {/* SECTION 10 — INSIGHTS */}
      <section className="py-20 lg:py-28 bg-white border-t border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60 mb-4">
                Engineering Journal
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900">
                Thoughts on Technology, Design &amp; Digital Growth.
              </h2>
            </div>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-blue-700 transition-colors"
            >
              <span>Explore All Insights</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <article
                key={article.slug}
                className="group bg-surface rounded-2xl border border-surface-border overflow-hidden hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <Link href={`/insights/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={article.featuredImage}
                      alt={article.altText}
                      width={600}
                      height={375}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top w-full h-full transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/90 backdrop-blur-md text-navy-900">
                        {article.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-3">
                      <span>{article.readingTime}</span>
                      <span>•</span>
                      <span>{article.publishedDate}</span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-navy-900 group-hover:text-brand-blue transition-colors mb-3 leading-snug">
                      <Link href={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-navy-900 group-hover:text-brand-blue transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FINAL CTA */}
      <section className="py-20 lg:py-28 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-grid-pattern opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-brand-blue/20 text-brand-sky border border-brand-blue/30">
            Let&apos;s Build Together
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Have an Idea? Let&apos;s Engineer It.
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us what you&apos;re building. We&apos;ll help turn your vision into a powerful, high-performance digital solution.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-brand-blue hover:bg-blue-600 shadow-lg shadow-brand-blue/30 transition-all duration-200 group"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-navy-800 hover:bg-navy-700 border border-slate-700 transition-all duration-200"
            >
              <span>View Case Studies</span>
              <ArrowUpRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

