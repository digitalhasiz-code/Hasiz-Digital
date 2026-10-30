import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import { Mail, Clock, Globe, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Start a Project | Contact HASIZ Digital Engineering Studio",
  description: "Initiate a project inquiry with HASIZ. Share your technical requirements, desired timelines, and business goals to receive an architectural review and scoping proposal.",
  alternates: {
    canonical: "https://www.hasiz.com/contact",
  },
  openGraph: {
    title: "Start a Project | Contact HASIZ",
    description: "Get in touch with HASIZ digital engineering studio to discuss high-performance web development, Shopify, web apps, or AI integrations.",
    url: "https://www.hasiz.com/contact",
    images: [{ url: "/images/brand/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20">
      {/* Contact Hero */}
      <section className="bg-surface py-16 lg:py-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact / Start a Project" }]} />

          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60">
              Project Onboarding
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-900 leading-tight">
              Start Your Project With HASIZ.
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Tell us what you are building. Every inquiry is reviewed directly by our lead engineers to evaluate technical feasibility and provide honest scoping feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Studio Details */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Form Column */}
            <div className="lg:col-span-7">
              <h2 className="font-heading text-2xl font-bold text-navy-900 mb-6">
                Project Specification Brief
              </h2>
              <ContactForm formName="Main Contact / Start a Project Page Form" />
            </div>

            {/* Right Information & Expectations Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Studio Direct Channels */}
              <div className="bg-surface p-7 rounded-2xl border border-surface-border space-y-6">
                <h3 className="font-heading text-lg font-bold text-navy-900">
                  Direct Inquiries
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-xs text-slate-400 font-mono">Email Address</span>
                      <a href="mailto:digitalhasiz@gmail.com" className="font-semibold text-navy-900 hover:text-brand-blue transition-colors">
                        digitalhasiz@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-xs text-slate-400 font-mono">Studio Operations</span>
                      <span className="font-medium text-slate-700">100% Online &amp; Remote Globally</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="block text-xs text-slate-400 font-mono">Guaranteed Response SLA</span>
                      <span className="font-medium text-slate-700">Within 24 business hours</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next */}
              <div className="bg-navy-900 text-white p-7 rounded-2xl border border-navy-800 space-y-5">
                <div className="text-xs font-mono text-brand-sky font-semibold tracking-wider uppercase">
                  Our Next Steps
                </div>
                <h3 className="font-heading text-xl font-bold">
                  What Happens After You Submit?
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-navy-800 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold text-brand-sky flex-shrink-0">
                      1
                    </div>
                    <p className="leading-relaxed">
                      <strong className="text-white block font-medium">Technical Review:</strong>
                      Lead software engineers review your specifications, stack requirements, and timeline.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-navy-800 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold text-brand-sky flex-shrink-0">
                      2
                    </div>
                    <p className="leading-relaxed">
                      <strong className="text-white block font-medium">Scoping Call or Written Insights:</strong>
                      We schedule a 30-minute discovery consultation or provide a detailed written technical brief.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-navy-800 border border-slate-700 flex items-center justify-center font-mono text-xs font-bold text-brand-sky flex-shrink-0">
                      3
                    </div>
                    <p className="leading-relaxed">
                      <strong className="text-white block font-medium">Proposal &amp; Milestone Schedule:</strong>
                      You receive a transparent, fixed-price proposal detailing deliverables, architecture, and weekly milestones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy Guarantee */}
              <div className="p-6 rounded-xl border border-surface-border bg-white flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <p className="text-xs text-content-body leading-relaxed">
                  <strong className="text-navy-900">Non-Disclosure Standard:</strong> All proprietary concepts, API details, and commercial strategies shared with HASIZ are kept strictly confidential under mutual NDA guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

