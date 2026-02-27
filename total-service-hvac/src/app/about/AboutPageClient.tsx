"use client";

import { motion, type Variants } from "framer-motion";
import {
  Shield,
  Award,
  Clock,
  Users,
  CheckCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import StatsCounter from "@/components/StatsCounter";
import LeadForm from "@/components/LeadForm";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We give honest assessments and transparent pricing every time — no surprise fees, no unnecessary upsells. Your trust is the foundation of our business.",
  },
  {
    icon: Award,
    title: "Expertise",
    description:
      "Our NATE-certified technicians average 10+ years of hands-on HVAC experience in Central Florida's demanding climate, ensuring every job is done right.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description:
      "When you call us, we show up — on time, fully equipped, and ready to work. Same-day and emergency service mean we're there when you need us most.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We're not a national chain — we're your neighbors. We live, work, and raise our families right here in the Orlando area, and that shapes everything we do.",
  },
];

const team = [
  {
    initials: "MR",
    name: "Mike Rodriguez",
    role: "Owner & Lead Technician",
    bio: "Mike founded Total Service after 12 years working for larger HVAC corporations, determined to build a company where customers come first. He holds a Florida CAC license and NATE certification, and personally oversees every major installation.",
  },
  {
    initials: "SC",
    name: "Sarah Chen",
    role: "Customer Success Manager",
    bio: "Sarah is the first voice you'll hear when you call us. She coordinates scheduling, follows up on every service visit, and makes sure every customer is completely satisfied before we close out a job.",
  },
  {
    initials: "JT",
    name: "James Thompson",
    role: "Senior HVAC Technician",
    bio: "James brings 14 years of HVAC experience to every service call. Specializing in diagnostics and complex repairs, he's particularly skilled with Carrier and Trane systems and is EPA 608 certified.",
  },
  {
    initials: "CR",
    name: "Carlos Rivera",
    role: "Installation Specialist",
    bio: "Carlos leads all new system installations with meticulous attention to detail. His background in both residential and commercial HVAC means no job is too complex, from a single-family home to a multi-unit property.",
  },
];

const certifications = [
  "Florida CAC Contractor License (CAC#XXXXXXX — license on file)",
  "NATE Certification (North American Technician Excellence)",
  "EPA 608 Universal Certification",
  "Better Business Bureau Member in Good Standing",
  "Trane & Carrier Authorized Service Provider",
  "ACCA (Air Conditioning Contractors of America) Member",
];

export default function AboutPageClient() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="hero-gradient relative flex items-center overflow-hidden"
        style={{ minHeight: "50vh" }}
        aria-labelledby="about-hero-heading"
      >
        <div className="container-custom relative z-10 py-24 text-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto"
          >
            <motion.p variants={fadeUp} className="section-label justify-center mb-4">
              Our Story
            </motion.p>
            <motion.h1
              id="about-hero-heading"
              variants={fadeUp}
              className="font-display text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Locally Owned.{" "}
              <span style={{ color: "var(--color-accent)" }}>Orlando Proud.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-xl text-white/80 mb-10 leading-relaxed"
            >
              We&apos;re not a call center in another state — we&apos;re your neighbors.
              Total Service Air Conditioning &amp; Heating is a family-run business built
              on the idea that Central Florida homeowners deserve honest, expert HVAC
              service from people who actually care.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/free-estimate"
                className="btn-accent px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2"
              >
                Get a Free Estimate <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href="tel:+14076173510"
                className="btn-outline-white px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2"
                aria-label="Call Total Service AC &amp; Heating at 407-617-3510"
              >
                <Phone size={18} aria-hidden="true" />
                (407) 617-3510
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Story ──────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="section-label">
                How We Got Here
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl font-bold mb-8"
                style={{ color: "var(--color-primary)" }}
              >
                Our Story
              </motion.h2>
              <motion.div
                variants={fadeUp}
                className="space-y-5 text-lg leading-relaxed"
                style={{ color: "var(--color-text)" }}
              >
                <p>
                  Total Service Air Conditioning and Heating LLC was born out of a simple
                  frustration: too many Central Florida homeowners were being overcharged,
                  misled, and left waiting by large HVAC companies that treated service calls
                  like a transaction rather than a relationship. When our founder Mike Rodriguez
                  left the corporate HVAC world after more than a decade, he had one goal —
                  build the kind of HVAC company he&apos;d always wanted to call when his own
                  family&apos;s system broke down on a sweltering Orlando summer afternoon.
                </p>
                <p>
                  From day one, we committed to honest, upfront pricing — you&apos;ll always
                  know what a job costs before we start. We committed to showing up on time,
                  every time, and to never recommending a repair or replacement that
                  isn&apos;t genuinely necessary. That philosophy, combined with the technical
                  excellence of our NATE-certified team, is why our customers across Orlando,
                  Winter Garden, Apopka, Windermere, and Maitland keep calling us back year
                  after year — and why they send their friends and family our way too.
                </p>
                <p>
                  Today, Total Service has grown into one of Central Florida&apos;s most
                  trusted HVAC contractors, with hundreds of 5-star reviews and a team of
                  technicians who take real pride in their craft. We&apos;re deeply rooted
                  in this community — we sponsor local youth sports teams, support Orlando
                  area charities, and make it a point to hire locally. When you call Total
                  Service, you&apos;re putting money back into this community, not into the
                  pocket of a distant corporation. That matters to us, and we believe it
                  matters to you too.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Values ─────────────────────────────────────────── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="section-label justify-center">
              What We Stand For
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Our Core Values
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  variants={fadeUp}
                  className="service-card p-8 rounded-2xl border text-center"
                  style={{
                    borderColor: "var(--color-border)",
                    background: "var(--color-surface)",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: "rgba(232, 98, 26, 0.1)" }}
                  >
                    <Icon
                      size={28}
                      style={{ color: "var(--color-accent)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className="font-display text-xl font-bold mb-3"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {val.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Meet the Team ──────────────────────────────────────── */}
      <section className="py-20" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.p variants={fadeUp} className="section-label justify-center">
              The People Behind the Work
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl md:text-5xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Meet the Team
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg max-w-xl mx-auto"
              style={{ color: "var(--color-text-muted)" }}
            >
              Every technician on our team is background-checked, fully licensed, and
              dedicated to delivering five-star service on every visit.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {team.map((member) => (
              <motion.article
                key={member.name}
                variants={fadeUp}
                className="p-8 rounded-2xl border text-center"
                style={{ background: "white", borderColor: "var(--color-border)" }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5 font-display text-2xl font-bold text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-primary), var(--color-primary-light))",
                  }}
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
                <h3
                  className="font-display text-lg font-bold mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "var(--color-accent)" }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {member.bio}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Licenses & Certifications ──────────────────────────── */}
      <section className="py-20" style={{ background: "white" }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="section-label">
                Credentials
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="font-display text-4xl font-bold mb-10"
                style={{ color: "var(--color-primary)" }}
              >
                Licenses &amp; Certifications
              </motion.h2>
              <motion.ul variants={stagger} className="space-y-4">
                {certifications.map((cert) => (
                  <motion.li
                    key={cert}
                    variants={fadeUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={20}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--color-accent)" }}
                      aria-hidden="true"
                    />
                    <span className="text-base" style={{ color: "var(--color-text)" }}>
                      {cert}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Counter ──────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface)" }}
        aria-label="Company statistics"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="section-label justify-center">By the Numbers</p>
            <h2
              className="font-display text-4xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Proven Results Across Central Florida
            </h2>
          </motion.div>
          <StatsCounter dark={false} />
        </div>
      </section>

      {/* ── Lead Form ──────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-dark)" }}
        aria-labelledby="about-form-heading"
      >
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="text-center mb-10"
            >
              <motion.p variants={fadeUp} className="section-label justify-center">
                Ready to Get Started?
              </motion.p>
              <motion.h2
                id="about-form-heading"
                variants={fadeUp}
                className="font-display text-4xl font-bold text-white mb-4"
              >
                Let&apos;s Take Care of Your HVAC
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Fill out the form below or call us at{" "}
                <a
                  href="tel:+14076173510"
                  className="font-bold"
                  style={{ color: "var(--color-accent)" }}
                >
                  (407) 617-3510
                </a>{" "}
                — we respond within one hour during business hours.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-2xl"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <LeadForm dark={true} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
