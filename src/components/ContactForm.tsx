"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, ShieldCheck } from "lucide-react";
import { useCurrency } from "@/context/CurrencyContext";
import { budgetOptionsByCurrency } from "@/data/pricing";

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
  formName: string; // Specific source form name
}

const serviceOptions = [
  "Starter Package (Rs. 35k / $350)",
  "Professional Package (Rs. 80k / $900)",
  "Premium Package (Rs. 150k+ / $1,500+)",
  "Enterprise Custom Scope",
  "Landing Page (Special Offer)",
  "WordPress Development",
  "Shopify Development",
  "Custom Web Development",
  "Web Application Development",
  "AI Integration",
  "UI/UX Design",
  "Website Redesign",
  "Speed Optimization",
  "Website Maintenance & SEO",
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

interface ContactFormProps {
  defaultService?: string;
  formName?: string;
}

export default function ContactForm({ defaultService, formName }: ContactFormProps) {
  const { currency, currencyConfig } = useCurrency();
  const currentBudgetOptions = budgetOptionsByCurrency[currency] || budgetOptionsByCurrency.USD;
  const initialFormName = formName || (defaultService ? `${defaultService} Inquiry Form` : "Main Contact / Start a Project Form");
  const [formLoadTime] = useState<number>(() => Date.now());

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    companyName: "",
    service: defaultService || "Custom Web Development",
    budget: currentBudgetOptions[0] || "$1,000 – $2,500",
    timeline: "1 – 2 Months",
    websiteUrl: "",
    projectDescription: "",
    honeypot: "",
    formName: initialFormName
  });

  // Pre-select package or service if passed via URL query parameter
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const pkg = params.get("package");
      const srv = params.get("service");

      if (pkg === "starter") {
        setFormData(prev => ({ ...prev, service: "Starter Package (Rs. 35k / $350)" }));
      } else if (pkg === "professional") {
        setFormData(prev => ({ ...prev, service: "Professional Package (Rs. 80k / $900)" }));
      } else if (pkg === "premium") {
        setFormData(prev => ({ ...prev, service: "Premium Package (Rs. 150k+ / $1,500+)" }));
      } else if (pkg === "enterprise") {
        setFormData(prev => ({ ...prev, service: "Enterprise Custom Scope" }));
      } else if (srv === "landing-page") {
        setFormData(prev => ({ ...prev, service: "Landing Page (Special Offer)" }));
      }
    }
  }, []);

  // Sync budget option default when currency changes
  useEffect(() => {
    if (currentBudgetOptions.length > 0 && !currentBudgetOptions.includes(formData.budget)) {
      setFormData(prev => ({ ...prev, budget: currentBudgetOptions[0] }));
    }
  }, [currency, currentBudgetOptions]);

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
        body: JSON.stringify({
          ...formData,
          formLoadTime
        })
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
        setErrorMessage("An unexpected error occurred. Please contact us directly at digitalhasiz@gmail.com");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-blue-200 bg-white p-8 sm:p-12 shadow-elevated text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mx-auto border border-blue-100">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h3 className="font-heading text-2xl sm:text-3xl font-bold text-navy-900">
            Inquiry Submitted Successfully
          </h3>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-navy-900">{formData.fullName}</strong>. Your project brief has been sent directly to our leads at <strong className="text-navy-900">digitalhasiz@gmail.com</strong>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-surface-border text-left text-xs font-mono space-y-1.5 max-w-md mx-auto text-slate-600">
          <div className="flex justify-between">
            <span className="text-slate-400">Form Source:</span>
            <span className="font-semibold text-navy-900">{formData.formName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Target Notification:</span>
            <span className="text-brand-blue">digitalhasiz@gmail.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Selected Service:</span>
            <span className="text-navy-900">{formData.service}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Target Response:</span>
            <span className="text-emerald-600 font-semibold">Within 24 business hours</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setFormData({
              fullName: "",
              email: "",
              companyName: "",
              service: defaultService || "Custom Web Development",
              budget: currentBudgetOptions[0] || "$1,000 – $2,500",
              timeline: "1 – 2 Months",
              websiteUrl: "",
              projectDescription: "",
              honeypot: "",
              formName: initialFormName
            });
          }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-blue-800 transition-colors"
        >
          <span>Submit Another Project Brief</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 sm:p-10 rounded-2xl border border-surface-border shadow-card" noValidate>
      {/* Form Source Indicator */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
          <span>Source: <strong className="text-navy-900">{formData.formName}</strong></span>
        </div>
        <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-blue" />
          <span>Verified Dispatch to digitalhasiz@gmail.com</span>
        </div>
      </div>

      {/* Hidden Form Name for validation & anti-spam honeypot */}
      <input type="hidden" name="formName" value={formData.formName} />
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_field">Do not fill this</label>
        <input
          id="hp_field"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-sm text-red-800" role="alert">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">Unable to submit inquiry</p>
            <p className="text-xs text-red-700 leading-relaxed">{errorMessage}</p>
          </div>
        </div>
      )}

      {/* Contact Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 font-sans">
            Your Full Name <span className="text-brand-blue">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Alexander Wright"
            className={`w-full px-4 py-3 rounded-lg border text-sm text-navy-900 bg-white placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue ${
              errors.fullName ? "border-red-400 bg-red-50/20" : "border-surface-border hover:border-slate-300"
            }`}
          />
          {errors.fullName && (
            <p className="text-xs text-red-600 font-medium">{errors.fullName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 font-sans">
            Business Email <span className="text-brand-blue">*</span>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="alex@company.com"
            className={`w-full px-4 py-3 rounded-lg border text-sm text-navy-900 bg-white placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue ${
              errors.email ? "border-red-400 bg-red-50/20" : "border-surface-border hover:border-slate-300"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 font-medium">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Company Name & Current Website */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 font-sans">
            Company or Organization
          </label>
          <input
            id="companyName"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Company or Brand Name"
            className="w-full px-4 py-3 rounded-lg border border-surface-border text-sm text-navy-900 bg-white placeholder-slate-400 hover:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="websiteUrl" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 font-sans">
            Current Website URL
          </label>
          <input
            id="websiteUrl"
            type="url"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleChange}
            placeholder="https://yourwebsite.com (optional)"
            className="w-full px-4 py-3 rounded-lg border border-surface-border text-sm text-navy-900 bg-white placeholder-slate-400 hover:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
          />
        </div>
      </div>

      {/* Service, Budget, Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="space-y-2">
          <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 font-sans">
            Service Required <span className="text-brand-blue">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-surface-border text-sm text-navy-900 bg-white hover:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
          >
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 font-sans">
            Target Investment Range ({currencyConfig.code})
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-surface-border text-sm text-navy-900 bg-white hover:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
          >
            {currentBudgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 font-sans">
            Desired Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-surface-border text-sm text-navy-900 bg-white hover:border-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue"
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
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label htmlFor="projectDescription" className="block text-xs font-semibold uppercase tracking-wider text-navy-900 font-sans">
            Project Overview & Technical Scope <span className="text-brand-blue">*</span>
          </label>
          <span className="text-xs text-slate-400 font-mono">Min 15 characters</span>
        </div>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={5}
          required
          value={formData.projectDescription}
          onChange={handleChange}
          placeholder="Briefly describe your objectives, key deliverables, target launch date, and any specific technology requirements..."
          className={`w-full px-4 py-3 rounded-lg border text-sm text-navy-900 bg-white placeholder-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue ${
            errors.projectDescription ? "border-red-400 bg-red-50/20" : "border-surface-border hover:border-slate-300"
          }`}
        />
        {errors.projectDescription && (
          <p className="text-xs text-red-600 font-medium">{errors.projectDescription}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-brand-blue hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed shadow-md shadow-brand-blue/20 hover:shadow-lg hover:shadow-brand-blue/25 transition-all duration-200 group"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Transmitting Inquiry to digitalhasiz@gmail.com...</span>
            </>
          ) : (
            <>
              <span>Submit Project Inquiry</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </button>

        <p className="text-center text-xs text-slate-500 font-mono mt-3">
          Direct forward to <strong>digitalhasiz@gmail.com</strong>. Reviewed by senior engineers within 24 hours.
        </p>
      </div>
    </form>
  );
}
