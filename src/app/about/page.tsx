import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import PhilosophySection from "@/components/PhilosophySection";
import TechStackGrid from "@/components/TechStackGrid";
import { ArrowRight, CheckCircle2, Shield, Code, Cpu, Target, Award, Terminal, Check, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "About HASIZ — Digital Engineering Studio & Leadership",
  description: "Learn about HASIZ: our digital engineering studio background, founder Hasnain Ahmed Siddiqui, senior technical capabilities, engineering standards, and international client focus.",
  alternates: {
    canonical: "https://www.hasiz.com/about",
  },
  openGraph: {
    title: "About HASIZ — Digital Engineering Studio",
    description: "We are an international digital engineering studio focused on high-performance web development, e-commerce systems, and custom software architecture.",
    url: "https://www.hasiz.com/about",
    images: [{ url: "/images/about/hasnain-founder-principal-engineer.webp", width: 1024, height: 1024, alt: "Hasnain Ahmed Siddiqui — Founder & Principal Engineer, HASIZ" }],
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Hero Header */}
      <section className="bg-surface py-16 lg:py-24 border-b border-surface-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: "About HASIZ" }]} />

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60">
              Studio Background &amp; Leadership
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-tight">
              We Engineer Digital Experiences.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
              HASIZ is a digital engineering studio focused on building high-performance websites, e-commerce storefronts, custom software, and intelligent digital solutions for ambitious modern businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Origin & Core Philosophy with Professional Founder Portrait */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue block">
                Engineering-First Mindset
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 leading-snug">
                Built to Replace Fragile Templates With Software Engineering Rigor.
              </h2>
              <p>
                The digital agency landscape is filled with extreme compromises: on one end, high-overhead creative agencies delivering visually ornate websites that load at an agonizingly slow pace; on the other end, commodity freelance operations deploying bloated pre-made templates that break during regular security updates.
              </p>
              <p>
                HASIZ was established to bridge this divide. We combine the typographic taste and aesthetic refinement of an award-winning design studio with the architectural discipline and performance standards of a senior software engineering firm.
              </p>
              <p>
                Whether partnering with funded US startups, European luxury retailers, or fast-growing UK enterprises, our commitment remains singular: deliver dependable, clean, and blazingly fast digital software that drives tangible commercial value.
              </p>

              <div className="pt-4 grid grid-cols-1 min-[420px]:grid-cols-2 gap-4 text-sm font-semibold text-navy-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <span>No Agency Bloat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <span>Senior Engineers Only</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <span>Sub-Second Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-blue flex-shrink-0" />
                  <span>100% Code Ownership</span>
                </div>
              </div>
            </div>

            {/* Right Professional Founder Image Composition */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-surface-border shadow-elevated bg-navy-900 group max-w-lg mx-auto lg:max-w-none">
                <Image
                  src="/images/about/hasnain-founder-principal-engineer.webp"
                  alt="Hasnain Ahmed Siddiqui — Founder & Principal Engineer, HASIZ Digital Engineering Studio"
                  width={1024}
                  height={1024}
                  priority
                  className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent opacity-95" />

                {/* Overlaid Leadership Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-navy-900 text-xs font-mono font-semibold shadow-sm border border-slate-200">
                    <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
                    <span>STUDIO PRINCIPAL</span>
                  </span>
                </div>

                {/* Overlaid Bottom Details */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <div className="font-mono text-xs text-brand-sky flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>FOUNDER &amp; PRINCIPAL ARCHITECT</span>
                  </div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight">
                    Hasnain Ahmed Siddiqui
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                    Leading digital engineering, full-stack architecture, and technical scoping across all international client projects at HASIZ.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Statement & Engineering Pledge */}
      <section className="py-16 bg-navy-950 text-white border-y border-navy-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 text-center md:text-left">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-brand-blue mx-auto md:mx-0 shadow-lg shadow-brand-blue/20">
                <Image
                  src="/images/about/hasnain-founder-principal-engineer.webp"
                  alt="Hasnain Ahmed Siddiqui"
                  fill
                  sizes="112px"
                  className="object-cover object-top"
                />
              </div>
              <div className="mt-3">
                <div className="font-heading font-bold text-sm text-white">Hasnain A. Siddiqui</div>
                <div className="text-xs text-brand-sky font-mono">Founder, HASIZ</div>
              </div>
            </div>

            <div className="md:col-span-9 space-y-3 border-t md:border-t-0 md:border-l border-navy-800 pt-6 md:pt-0 md:pl-8">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-sky block">
                The Engineering Pledge
              </span>
              <blockquote className="text-lg sm:text-xl font-heading text-slate-100 leading-relaxed italic">
                &ldquo;We do not build disposable websites or hide behind layers of non-technical account managers. When you partner with HASIZ, you work directly with engineers who care about clean code, sub-second latency, and your bottom-line commercial goals.&rdquo;
              </blockquote>
              <div className="text-xs text-slate-400 font-mono pt-1">
                Direct Engineer-to-Client Architecture • 100% Code Ownership • No Outsourced Subcontractors
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Capabilities */}
      <section className="py-20 lg:py-24 bg-surface border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue block mb-2">
              Who We Serve
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900 mb-4">
              Engineered for Ambitious Teams Worldwide.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We collaborate with leadership teams across the United States, United Kingdom, Europe, and global commercial hubs that value craftsmanship and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-7 rounded-xl border border-surface-border shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">Fast-Growing Startups</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Transforming product concepts and MVPs into scalable web applications, landing high-profile investment, and acquiring early adopters.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-surface-border shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">Digital Agencies</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Acting as a dedicated technical execution partner for creative shops that need senior full-stack development without payroll overhead.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-surface-border shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">E-Commerce Brands</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bespoke Shopify and WooCommerce stores engineered to maximize checkout conversion rates, average order values, and mobile performance.
              </p>
            </div>

            <div className="bg-white p-7 rounded-xl border border-surface-border shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy-900">Modern Enterprises</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Replacing sluggish legacy software and messy spreadsheets with custom internal dashboards, client portals, and AI automation pipelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Philosophy Section */}
      <PhilosophySection />

      {/* Tech Stack Grid */}
      <TechStackGrid />

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold">
            Looking for a Trusted Digital Engineering Partner?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
            Let&apos;s discuss your technical specifications, architecture roadmap, and delivery timelines directly with our engineering leadership.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-brand-blue hover:bg-blue-600 shadow-md transition-all group"
            >
              <span>Schedule a Technical Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
