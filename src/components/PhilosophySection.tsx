import { ShieldCheck, Cpu, Gauge, GitCommit, Layers, FileCode2 } from "lucide-react";

const tenets = [
  {
    icon: Gauge,
    title: "Performance Is Non-Negotiable",
    summary: "Sub-second loading times and passing Core Web Vitals aren't afterthoughts; they are baked into the architecture from the first line of code. Speed drives conversions and organic search dominance."
  },
  {
    icon: ShieldCheck,
    title: "Zero Artificial Bloat",
    summary: "We refuse to install 30 conflicting plugins or bloated UI frameworks to achieve basic layout requirements. We engineer lean, bespoke components that maintain security and stability."
  },
  {
    icon: FileCode2,
    title: "100% Code Ownership",
    summary: "No vendor lock-in. You receive clean, documented source code, direct repository access, and complete freedom over your digital assets from day one."
  },
  {
    icon: Cpu,
    title: "Pragmatic Technology Choices",
    summary: "We select frameworks based on your business objectives, not resume-driven development. WordPress when editorial agility matters; Shopify for commerce; Next.js for high-speed apps."
  },
  {
    icon: GitCommit,
    title: "Measurable Commercial Impact",
    summary: "Beautiful design is table stakes. We measure success in checkout conversion lifts, reduced bounce rates, faster customer onboarding, and scalable revenue growth."
  },
  {
    icon: Layers,
    title: "Transparent Collaboration",
    summary: "No agency smoke and mirrors. You speak directly with the engineers building your platform, with weekly staging previews and clear technical documentation."
  }
];

export default function PhilosophySection() {
  return (
    <section className="py-20 lg:py-24 bg-navy-900 text-white relative overflow-hidden">
      {/* Background dark grid */}
      <div className="absolute inset-0 bg-dark-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase bg-brand-blue/20 text-brand-sky border border-brand-blue/30 mb-4">
            Engineering Principles
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Our Development Philosophy
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            In an industry flooded with fragile templates and deceptive marketing promises, HASIZ stands for disciplined software engineering, architectural clarity, and genuine client partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tenets.map((t, idx) => {
            const Icon = t.icon;
            return (
              <div 
                key={t.title} 
                className="bg-navy-950/60 border border-slate-800 rounded-xl p-7 hover:border-slate-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center text-brand-sky mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-2">0{idx + 1} — PRINCIPLE</div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {t.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {t.summary}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

