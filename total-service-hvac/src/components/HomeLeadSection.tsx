import LeadForm from "./LeadForm";
import { CheckCircle } from "lucide-react";

const bullets = [
  "No-obligation quote — 100% free",
  "Same-day appointments available",
  "Licensed & insured technicians",
  "100% satisfaction guaranteed",
  "Upfront pricing, no hidden fees",
];

export default function HomeLeadSection() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "var(--color-primary)" }}
      aria-labelledby="lead-section-heading"
    >
      {/* BG decoration */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: trust content */}
          <div>
            <p className="section-label" style={{ color: "var(--color-accent)" }}>
              <span aria-hidden="true">📋</span>&nbsp; Free Estimate
            </p>
            <h2
              id="lead-section-heading"
              className="font-display text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Get Your Free Estimate Today
            </h2>
            <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              Tell us about your HVAC needs and we&apos;ll get back to you within one hour during business hours.
              No pressure, no obligation.
            </p>
            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle size={18} className="shrink-0" style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                  <span className="text-base font-medium" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <LeadForm dark />
          </div>
        </div>
      </div>
    </section>
  );
}
