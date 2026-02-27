"use client";

import Link from "next/link";
import {
  Phone, ArrowRight, CheckCircle, Wrench, Wind, Settings, Flame,
  Trash2, Leaf,
} from "lucide-react";
import LeadForm from "./LeadForm";
import FAQAccordion, { type FAQItem } from "./FAQAccordion";
import ReviewsSection from "./ReviewsSection";
import CTABanner from "./CTABanner";
import { type Step } from "./ProcessSteps";
import ProcessSteps from "./ProcessSteps";

const heroIconMap: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; "aria-hidden"?: "true" }>> = {
  wrench: Wrench,
  wind: Wind,
  settings: Settings,
  flame: Flame,
  trash2: Trash2,
  leaf: Leaf,
};

interface ServicePageTemplateProps {
  title: string;
  headline: string;
  subheadline: string;
  iconName: string;
  included: string[];
  signs: string[];
  process: Step[];
  faqs: FAQItem[];
  jsonLd: object;
  relatedServices: { name: string; href: string }[];
  relatedAreas: { name: string; href: string }[];
}

export default function ServicePageTemplate({
  title,
  headline,
  subheadline,
  iconName,
  included,
  signs,
  process,
  faqs,
  jsonLd,
  relatedServices,
  relatedAreas,
}: ServicePageTemplateProps) {
  const Icon = heroIconMap[iconName] || Wrench;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative flex items-center py-24 min-h-[40vh]"
        style={{ background: "var(--color-primary)" }}
        aria-labelledby="service-hero-heading"
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-custom relative z-10">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
            style={{ background: "rgba(232,98,26,0.2)" }}
          >
            <Icon size={26} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
          </div>
          <p className="section-label" style={{ color: "var(--color-accent)" }}>
            {title}
          </p>
          <h1
            id="service-hero-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl"
          >
            {headline}
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            {subheadline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/free-estimate" className="btn-accent px-8 py-4 rounded-xl font-bold text-lg">
              Get Free Estimate →
            </Link>
            <a
              href="tel:+14076173510"
              className="btn-outline-white flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg"
              aria-label="Call Total Service AC & Heating"
            >
              <Phone size={18} aria-hidden="true" />
              (407) 617-3510
            </a>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="section-label">
                <span aria-hidden="true">✓</span>&nbsp; What&apos;s Included
              </p>
              <h2 className="font-display text-3xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
                Comprehensive {title} Service
              </h2>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                    <span style={{ color: "var(--color-text)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="section-label">
                <span aria-hidden="true">⚠️</span>&nbsp; Warning Signs
              </p>
              <h2 className="font-display text-3xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
                Do You Need {title}?
              </h2>
              <ul className="space-y-3">
                {signs.map((sign) => (
                  <li
                    key={sign}
                    className="flex items-start gap-3 px-4 py-3 rounded-xl"
                    style={{ background: "rgba(232,98,26,0.07)", borderLeft: "3px solid var(--color-accent)" }}
                  >
                    <span style={{ color: "var(--color-text)" }}>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16" style={{ background: "var(--color-surface-dark)" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-label" style={{ color: "var(--color-accent)" }}>Our Process</p>
            <h2 className="font-display text-3xl font-bold text-white">How We Do It</h2>
          </div>
          <ProcessSteps steps={process} dark />
        </div>
      </section>

      {/* Pricing transparency */}
      <CTABanner
        headline="Honest, Upfront Pricing — Always"
        subtext="We quote before we work. No surprises, no hidden fees. Get your free estimate today."
        buttonText="Get Free Estimate"
        buttonHref="/free-estimate"
        phoneNumber="(407) 617-3510"
        variant="primary"
      />

      {/* FAQ */}
      <section className="py-16" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="section-label">
              <span aria-hidden="true">❓</span>&nbsp; FAQ
            </p>
            <h2 className="font-display text-3xl font-bold" style={{ color: "var(--color-primary)" }}>
              Common Questions About {title}
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* Related areas */}
      <section className="py-12" style={{ background: "var(--color-primary-light)" }}>
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-4">
            <p className="font-semibold text-white shrink-0">We serve:</p>
            {relatedAreas.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />

      {/* Related services */}
      <section className="py-12" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom">
          <h2 className="font-display text-2xl font-bold mb-6" style={{ color: "var(--color-primary)" }}>
            Related Services
          </h2>
          <div className="flex flex-wrap gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all"
                style={{
                  background: "white",
                  color: "var(--color-primary)",
                  border: "1.5px solid var(--color-border)",
                  boxShadow: "0 2px 8px rgba(10,37,64,0.06)",
                }}
              >
                {s.name} <ArrowRight size={14} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section
        className="py-20"
        style={{ background: "var(--color-primary)" }}
        aria-labelledby="service-lead-heading"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label" style={{ color: "var(--color-accent)" }}>Free Quote</p>
              <h2 id="service-lead-heading" className="font-display text-4xl font-bold text-white mb-4">
                Ready to Schedule?
              </h2>
              <p className="text-lg mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>
                Fill out the form and we&apos;ll reach out within 1 hour.
              </p>
              <a
                href="tel:+14076173510"
                className="flex items-center gap-2 text-lg font-bold"
                style={{ color: "var(--color-accent)" }}
                aria-label="Call Total Service AC & Heating"
              >
                <Phone size={20} aria-hidden="true" />
                (407) 617-3510
              </a>
            </div>
            <div
              className="rounded-2xl p-8"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <LeadForm dark />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
