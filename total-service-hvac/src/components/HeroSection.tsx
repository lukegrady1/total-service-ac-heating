"use client";

import Link from "next/link";
import Image from "next/image";
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
      className="relative flex items-center min-h-screen"
      aria-labelledby="hero-heading"
    >
      {/* Background photo */}
      <Image
        src="/hvac_technician.png"
        alt="HVAC technician servicing an air conditioning unit"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      {/* Navy blue overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(105deg, rgba(10,37,64,0.88) 0%, rgba(10,37,64,0.75) 50%, rgba(13,27,42,0.65) 100%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Subtle orange accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, rgba(232,98,26,0.12) 0%, transparent 60%)",
          zIndex: 2,
        }}
        aria-hidden="true"
      />

      <div className="container-custom py-24 md:py-32" style={{ position: "relative", zIndex: 10 }}>
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator" style={{ zIndex: 10 }} aria-hidden="true">
        <ChevronDown size={28} color="rgba(255,255,255,0.5)" />
      </div>
    </section>
  );
}
