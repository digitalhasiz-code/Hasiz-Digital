import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import PhilosophySection from "@/components/PhilosophySection";
import TechStackGrid from "@/components/TechStackGrid";
import { ArrowRight, CheckCircle2, Shield, Code, Cpu, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About HASIZ — Digital Engineering Studio",
  description: "Learn about HASIZ: our digital engineering studio background, senior technical capabilities, engineering standards, and international client focus.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About HASIZ — Digital Engineering Studio",
    description: "We are an international digital engineering studio focused on high-performance web development, e-commerce systems, and custom software architecture.",
    url: "https://hasiz.com/about",
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630 }],
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
              Studio Background &amp; Mission
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-tight">
              We Engineer Digital Experiences.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
              HASIZ is a digital engineering studio focused on building high-performance websites, e-commerce storefronts, custom software, and intelligent digital solutions for ambitious modern businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Origin & Core Philosophy */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-blue block">
                Engineering-First Mindset
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-navy-900">
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

              <div className="pt-4 grid grid-cols-2 gap-4 text-sm font-semibold text-navy-900">
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

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-surface-border shadow-elevated bg-slate-900">
                <Image
                  src="/images/services/hasiz-web-development-portfolio.webp"
                  alt="HASIZ digital engineering studio portfolio showcase of international projects"
                  width={1200}
                  height={750}
                  className="w-full h-auto object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="font-mono text-xs text-brand-sky mb-1">HASIZ DIGITAL STUDIO</div>
                  <div className="font-heading text-lg font-bold">Engineered for International Scalability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience & Capabilities */}
      <section className="py-20 lg:py-24 bg-surface border-t border-surface-border">
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
            Let&apos;s discuss your technical specifications, architecture roadmap, and delivery timelines.
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

