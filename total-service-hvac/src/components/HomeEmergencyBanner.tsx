"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function HomeEmergencyBanner() {
  return (
    <section
      className="py-8 px-4 text-center relative overflow-hidden"
      style={{ background: "var(--color-accent)" }}
      aria-label="Emergency AC service"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Pulsing phone icon */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute w-12 h-12 rounded-full pulse-ring"
            style={{ background: "rgba(255,255,255,0.3)" }}
            aria-hidden="true"
          />
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center relative z-10"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            <Phone size={20} color="white" aria-hidden="true" />
          </div>
        </div>
        <p className="font-display text-2xl md:text-3xl font-bold text-white">
          AC Broken? We&apos;re Available Now —{" "}
          <a
            href="tel:+14076173510"
            className="underline hover:no-underline"
            aria-label="Call for emergency AC service"
          >
            (407) 617-3510
          </a>
        </p>
      </div>
    </section>
  );
}
