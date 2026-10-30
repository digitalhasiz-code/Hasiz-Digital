"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  companyName: string;
  service: string;
  budget: string;
  timeline: string;
  websiteUrl: string;
  projectDescription: string;
  honeypot: string; // Anti-spam hidden field
}

const serviceOptions = [
  "WordPress Development",
  "Shopify Development",
  "Custom Web Development",
  "AI Integration",
  "Web Application Development",
  "UI/UX Design",
  "Other"
];

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000+"
];

const timelineOptions = [
  "Immediate (Next 2-4 weeks)",
  "1 – 2 Months",
  "2 – 3 Months",
  "Flexible / Planning Phase"
];

export default function ContactForm({ defaultService }: { defaultService?: string }) {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    service: defaultService || "Custom Web Development",
    budget: "$10,000 – $25,000",
    timeline: "1 – 2 Months",
    websiteUrl: "",
    projectDescription: "",
    honeypot: ""
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please provide your full name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.projectDescription.trim() || formData.projectDescription.trim().length < 15) {
      errs.projectDescription = "Please provide a brief description of what you are building (min 15 characters).";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit project inquiry. Please try again.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please contact us directly at contact@hasiz.com");
      }
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white border border-surface-border shadow-card rounded-2xl p-8 sm:p-10 text-center animate-in fade-in-50">
        <div className="w-14 h-14 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-4 border border-blue-200/60">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-navy-900 mb-2">
          Inquiry Successfully Received
        </h3>
        <p className="text-content-body max-w-md mx-auto text-sm leading-relaxed mb-6">
          Thank you for reaching out to HASIZ. Our engineering team reviews all incoming project scopes and will respond within 24 business hours with initial architectural insights and scheduling options.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              fullName: "",
              email: "",
              companyName: "",
              service: defaultService || "Custom Web Development",
              budget: "$10,000 – $25,000",
              timeline: "1 – 2 Months",
              websiteUrl: "",
              projectDescription: "",
              honeypot: ""
            });
          }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-blue-700 transition-colors"
        >
          Submit another inquiry &rarr;
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-10 rounded-2xl border border-surface-border shadow-card" noValidate>
      {/* Honeypot anti-spam trap */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_field">Do not fill this</label>
        <input
          id="hp_field"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-2">
            Full Name <span className="text-brand-blue">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={(e) => {
              setFormData({ ...formData, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
            }}
            placeholder="e.g. Alexander Vance"
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-navy-900 placeholder-slate-400 focus:outline-none transition-colors ${
              errors.fullName ? "border-navy-900 bg-slate-50 focus:border-brand-blue" : "border-surface-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
            }`}
          />
          {errors.fullName && (
            <p id="fullName-error" className="text-xs text-navy-900 font-medium mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-brand-blue" />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Business Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-2">
            Business Email <span className="text-brand-blue">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="alexander@company.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={`w-full px-4 py-3 rounded-lg border text-sm text-navy-900 placeholder-slate-400 focus:outline-none transition-colors ${
              errors.email ? "border-navy-900 bg-slate-50 focus:border-brand-blue" : "border-surface-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
            }`}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-navy-900 font-medium mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-brand-blue" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Company / Business Name */}
        <div>
          <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-2">
            Company / Business Name
          </label>
          <input
            id="companyName"
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="e.g. Vance Global Ventures"
            className="w-full px-4 py-3 rounded-lg border border-surface-border text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
          />
        </div>

        {/* Website URL (optional) */}
        <div>
          <label htmlFor="websiteUrl" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-2">
            Current Website URL <span className="text-slate-400 text-[10px] lowercase">(optional)</span>
          </label>
          <input
            id="websiteUrl"
            type="url"
            value={formData.websiteUrl}
            onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
            placeholder="https://company.com"
            className="w-full px-4 py-3 rounded-lg border border-surface-border text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
          />
        </div>
      </div>

      {/* Service Required */}
      <div>
        <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-2">
          Service Required <span className="text-brand-blue">*</span>
        </label>
        <select
          id="service"
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-surface-border text-sm text-navy-900 bg-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
        >
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Project Budget */}
        <div>
          <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-2">
            Estimated Budget Range
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-surface-border text-sm text-navy-900 bg-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
          >
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Project Timeline */}
        <div>
          <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-2">
            Target Timeline
          </label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full px-4 py-3 rounded-lg border border-surface-border text-sm text-navy-900 bg-white focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
          >
            {timelineOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <label htmlFor="projectDescription" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 mb-2">
          Project Description & Goals <span className="text-brand-blue">*</span>
        </label>
        <textarea
          id="projectDescription"
          rows={4}
          required
          value={formData.projectDescription}
          onChange={(e) => {
            setFormData({ ...formData, projectDescription: e.target.value });
            if (errors.projectDescription) setErrors({ ...errors, projectDescription: undefined });
          }}
          placeholder="Briefly describe your objectives, target audience, existing technical bottlenecks, and desired project outcomes..."
          aria-invalid={!!errors.projectDescription}
          aria-describedby={errors.projectDescription ? "desc-error" : undefined}
          className={`w-full px-4 py-3 rounded-lg border text-sm text-navy-900 placeholder-slate-400 focus:outline-none transition-colors ${
            errors.projectDescription ? "border-navy-900 bg-slate-50 focus:border-brand-blue" : "border-surface-border focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
          }`}
        />
        {errors.projectDescription && (
          <p id="desc-error" className="text-xs text-navy-900 font-medium mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 text-brand-blue" />
            {errors.projectDescription}
          </p>
        )}
      </div>

      {/* Submit Error */}
      {status === "error" && (
        <div className="p-4 rounded-lg bg-slate-100 border border-slate-300 text-navy-900 text-sm flex items-start gap-2">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-brand-blue" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg text-sm font-semibold text-white bg-brand-blue hover:bg-blue-700 disabled:opacity-70 transition-all duration-200 shadow-sm group"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting Project Brief...</span>
          </>
        ) : (
          <>
            <span>Submit Project Inquiry</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-slate-400 leading-normal">
        Strict privacy: Your technical specifications and contact details are treated with total confidentiality and never shared with third parties.
      </p>
    </form>
  );
}

