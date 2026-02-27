"use client";

import Link from "next/link";
import { Phone, Star, Shield, Home, Zap, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const trustItems = [
  { icon: Star, text: "5-Star Rated" },
  { icon: Shield, text: "Licensed & Insured" },
  { icon: Home, text: "Locally Owned" },
  { icon: Zap, text: "Same-Day Service" },
];

export default function HeroSection() {
  return (
    <section
      className="hero-gradient relative flex items-center min-h-screen"
      aria-labelledby="hero-heading"
    >
      {/* Noise grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          opacity: 0.04,
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Geometric accent shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 opacity-5"
          style={{ background: "radial-gradient(circle, #4A90D9 0%, transparent 70%)" }}
        />
        {/* Diagonal lines pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="diag" patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="30" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diag)" />
        </svg>
      </div>

      <div className="container-custom relative z-10 py-24 md:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Label */}
          <motion.div variants={item}>
            <span className="section-label text-xs mb-4 inline-flex" style={{ color: "var(--color-accent-light)" }}>
              <span aria-hidden="true">★</span>&nbsp; Orlando&apos;s #1 Rated HVAC Company
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            id="hero-heading"
            variants={item}
            className="font-display font-bold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", color: "white" }}
          >
            Orlando&apos;s Most Trusted{" "}
            <span style={{ color: "var(--color-accent)" }}>HVAC Experts</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-xl md:text-2xl leading-relaxed mb-8 max-w-2xl"
            style={{ color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-dm-sans)" }}
          >
            Fast, reliable AC repair, installation &amp; maintenance across Central Florida.{" "}
            <strong style={{ color: "white" }}>Same-day service available.</strong>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/free-estimate"
              className="btn-accent flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold"
            >
              Get a Free Estimate →
            </Link>
            <a
              href="tel:+14076173510"
              className="btn-outline-white flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold"
              aria-label="Call Total Service AC & Heating"
            >
              <Phone size={20} aria-hidden="true" />
              Call (407) 617-3510
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={item} className="flex flex-wrap gap-4">
            {trustItems.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.9)",
                }}
              >
                <Icon size={14} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator" aria-hidden="true">
        <ChevronDown size={28} color="rgba(255,255,255,0.5)" />
      </div>
    </section>
  );
}
