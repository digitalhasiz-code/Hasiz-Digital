import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | HASIZ Digital Engineering Studio",
  description: "Read the HASIZ Privacy Policy detailing our data collection, inquiry processing, security standards, and client confidentiality practices.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="bg-surface py-16 border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-slate-500">
            Last Updated: October 2024 • Version 1.2
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none text-slate-700 space-y-8 leading-relaxed">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              1. Overview &amp; Commitment to Privacy
            </h2>
            <p>
              HASIZ (&quot;HASIZ&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates as a digital engineering studio providing web development, e-commerce engineering, software architecture, and AI integration services to international businesses. We take your privacy and commercial confidentiality seriously. This Privacy Policy outlines our practices regarding the collection, storage, and processing of information collected through our website (hasiz.com) and client communications.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              2. Information We Collect
            </h2>
            <p>
              We collect information strictly necessary to communicate with prospective clients and evaluate project specifications:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Contact &amp; Identity Data:</strong> Full name, business email address, company name, and current website URL submitted via our project inquiry forms.</li>
              <li><strong>Project Scoping Details:</strong> Estimated budget ranges, target timelines, technical requirements, and project descriptions provided voluntarily by you.</li>
              <li><strong>Technical Log Data:</strong> Basic server access logs including IP addresses, browser types, referring pages, and timestamps utilized for security audit logging and DDoS protection.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              3. How We Use Your Information
            </h2>
            <p>
              We do not sell, rent, or trade your personal or project data with any third-party advertisers or data brokers. Collected data is used exclusively to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Evaluate project requirements and prepare customized architectural proposals.</li>
              <li>Respond directly to questions, schedule technical discovery calls, and manage active client relationships.</li>
              <li>Enforce security controls, prevent spam, and maintain the integrity of our digital infrastructure.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              4. Client Confidentiality &amp; NDA Protection
            </h2>
            <p>
              We recognize that technical architectures, business concepts, and API credentials shared during scoping conversations are proprietary. All information submitted to HASIZ is treated with strict confidentiality. We routinely execute mutual Non-Disclosure Agreements (NDAs) prior to detailed code audits or proprietary software reviews.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              5. Data Storage, Security &amp; Retention
            </h2>
            <p>
              Our infrastructure employs TLS 1.3 encryption for all data in transit, strict Content Security Policies (CSP), and restricted-access storage. Project inquiry records are retained only as long as necessary to serve legitimate business scoping purposes or comply with legal audit obligations.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              6. Your Rights Under International Regulations (GDPR &amp; CCPA)
            </h2>
            <p>
              Depending on your location (including the European Union, United Kingdom, and California), you possess specific rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The right to request access to the personal data we hold about you.</li>
              <li>The right to request correction or complete erasure of your data from our systems.</li>
              <li>The right to object to or restrict processing of your personal information.</li>
            </ul>
            <p className="mt-2 text-sm">
              To exercise any of these rights, please contact our data privacy officer at <a href="mailto:contact@hasiz.com" className="text-brand-blue font-semibold">contact@hasiz.com</a>.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              7. Contacting Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or our operational security practices, please email <a href="mailto:contact@hasiz.com" className="text-brand-blue font-semibold">contact@hasiz.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

