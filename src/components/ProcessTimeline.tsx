import { Search, Compass, Terminal, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    phase: "Discover",
    icon: Search,
    title: "Technical & Commercial Discovery",
    description: "We audit your existing systems, user personas, technical bottlenecks, and competitive positioning to define non-negotiable success criteria."
  },
  {
    number: "02",
    phase: "Strategize",
    icon: Compass,
    title: "Architecture & Systems Design",
    description: "We design data models, API contracts, component hierarchies, and interactive Figma prototypes, locking in scope before development begins."
  },
  {
    number: "03",
    phase: "Engineer",
    icon: Terminal,
    title: "Disciplined Agile Development",
    description: "We write clean, typed code with automated tests, weekly staging preview environments, continuous integration, and rigorous Core Web Vitals profiling."
  },
  {
    number: "04",
    phase: "Launch & Evolve",
    icon: Rocket,
    title: "Global Deployment & Long-Term Support",
    description: "Zero-downtime DNS cutover, SEO redirect validation, Search Console verification, and proactive engineering maintenance as your traffic grows."
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-blue-50 text-brand-blue border border-blue-200/60 mb-4">
            Methodology
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-navy-900 mb-6">
            Our Engineering Process
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Predictable outcomes require disciplined engineering. Our 4-stage delivery framework eliminates project ambiguity and ensures on-time, budget-conscious launches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number} 
                className="relative bg-surface rounded-xl p-7 border border-surface-border hover:border-brand-blue/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-navy-900">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-blue-100/60 text-brand-blue flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-brand-blue font-semibold block mb-1">
                    Phase {step.number} — {step.phase}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-navy-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

