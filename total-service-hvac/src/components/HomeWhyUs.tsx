"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, DollarSign, Star } from "lucide-react";
import StatsCounter from "./StatsCounter";

const usps = [
  {
    icon: Wrench,
    title: "Expert Technicians",
    description: "NATE-certified with 10+ years average experience. We diagnose right the first time.",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Same-day and emergency service available. Don't suffer in the Florida heat.",
  },
  {
    icon: DollarSign,
    title: "Upfront Pricing",
    description: "No hidden fees, no surprises. Free estimates on all jobs before we start work.",
  },
  {
    icon: Star,
    title: "5-Star Service",
    description: "Hundreds of happy customers across Central Florida trust us with their comfort.",
  },
];

export default function HomeWhyUs() {
  return (
    <section
      className="py-20 relative overflow-hidden section-diagonal"
      style={{ background: "var(--color-primary)" }}
      aria-labelledby="why-us-heading"
    >
      {/* BG pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label" style={{ color: "var(--color-accent)" }}>
              <span aria-hidden="true">✓</span>&nbsp; Why Choose Us
            </p>
            <h2
              id="why-us-heading"
              className="font-display text-4xl md:text-5xl font-bold text-white mb-8"
            >
              The Total Service Difference
            </h2>

            <div className="space-y-6">
              {usps.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(232,98,26,0.2)" }}
                  >
                    <Icon size={22} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-white mb-1">{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: visual + stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Abstract AC unit visual */}
            <div
              className="rounded-3xl p-10 mb-8 relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div className="relative z-10">
                {/* Stylized AC unit illustration using CSS */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Outer unit */}
                    <div
                      className="w-48 h-32 rounded-2xl flex items-center justify-center"
                      style={{
                        background: "linear-gradient(135deg, rgba(232,98,26,0.2), rgba(26,63,111,0.4))",
                        border: "2px solid rgba(232,98,26,0.4)",
                      }}
                    >
                      {/* Vent lines */}
                      <div className="flex gap-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 rounded-full"
                            style={{
                              height: "60px",
                              background: "rgba(255,255,255,0.15)",
                              animationName: "breathe",
                              animationDuration: `${1.2 + i * 0.2}s`,
                              animationTimingFunction: "ease-in-out",
                              animationIterationCount: "infinite",
                              animationDirection: "alternate",
                            }}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                    {/* Pulsing ring */}
                    <div
                      className="absolute -inset-3 rounded-3xl pulse-ring"
                      style={{ border: "1px solid rgba(232,98,26,0.3)" }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <p className="text-center text-sm font-semibold" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Trane &amp; Carrier Certified Technicians
                </p>
              </div>
            </div>

            {/* Stats */}
            <StatsCounter dark />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
