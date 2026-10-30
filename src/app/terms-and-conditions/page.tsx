import { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions | HASIZ Digital Engineering Studio",
  description: "Terms and conditions governing the use of the HASIZ digital engineering studio website and professional service engagements.",
  alternates: {
    canonical: "https://www.hasiz.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | HASIZ Digital Engineering Studio",
    description: "Terms and conditions governing the use of the HASIZ digital engineering studio website and professional service engagements.",
    url: "https://www.hasiz.com/terms-and-conditions",
  },
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20">
      <section className="bg-surface py-16 border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy-900 mb-4">
            Terms &amp; Conditions
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
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using this website (hasiz.com), you acknowledge that you have read, understood, and agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, you should immediately discontinue use of this site.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              2. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise explicitly indicated, the HASIZ wordmark, brand system, website design, graphics, typography selections, code architecture, and editorial articles are the proprietary intellectual property of HASIZ.
            </p>
            <p>
              Client logos, project trademarks, and brand names featured in case studies remain the sole property of their respective trademark holders and are displayed solely to illustrate genuine professional engineering contributions.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              3. Professional Engineering Engagements
            </h2>
            <p>
              Information presented on this website does not constitute a formal, binding contract for development services. All client engagements are governed by separate, mutually executed Master Services Agreements (MSA) and Statements of Work (SOW), which define:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Detailed technical deliverables and milestone schedules.</li>
              <li>Fixed-price or time-and-materials billing schedules.</li>
              <li>100% intellectual property assignment and repository transfer upon final invoice settlement.</li>
              <li>Warranty periods, testing acceptance criteria, and post-launch maintenance terms.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              4. Code Ownership Guarantee
            </h2>
            <p>
              A core tenet of HASIZ is zero vendor lock-in. For all custom web applications, bespoke Shopify themes, and custom WordPress implementations developed under contract, full intellectual property and source code ownership are transferred to the client upon final project sign-off and payment.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              5. Disclaimer of Warranties
            </h2>
            <p>
              This website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind, either express or implied. While we strive to maintain accurate, up-to-date technical documentation and continuous uptime, we do not guarantee uninterrupted access or error-free site operation.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              In no event shall HASIZ or its engineers be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to, or use of, this informational website.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These Terms &amp; Conditions are governed by and construed in accordance with the laws of modern international commercial arbitration standards. Specific contractual disputes arising from client service agreements shall be resolved as stipulated in each respective Master Services Agreement.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 mb-3">
              8. Contact
            </h2>
            <p>
              For legal inquiries regarding these terms, please contact <a href="mailto:contact@hasiz.com" className="text-brand-blue font-semibold">contact@hasiz.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

