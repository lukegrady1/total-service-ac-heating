import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, CreditCard, DollarSign, TrendingUp } from "lucide-react";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "HVAC Financing Options in Orlando | Total Service Air Conditioning & Heating",
  description:
    "Flexible HVAC financing options for Orlando homeowners. New AC systems starting at affordable monthly payments. Call (407) 617-3510 to apply.",
};

const faqItems: FAQItem[] = [
  {
    question: "What credit score do I need to qualify for financing?",
    answer:
      "Our financing partners work with a range of credit profiles. While a higher credit score typically qualifies for the best rates, we have options available for customers with fair credit as well. We encourage everyone to apply — approval decisions are made on a case-by-case basis and many applicants are surprised by the options available to them. Call us at (407) 617-3510 to discuss your situation.",
  },
  {
    question: "How long does the financing approval process take?",
    answer:
      "Many of our financing applications are approved within minutes of submission. In most cases, you'll receive a decision the same day you apply. Once approved, we can typically schedule your installation or service within 24–48 hours, so you won't be left waiting long in the Florida heat.",
  },
  {
    question: "What HVAC work qualifies for financing?",
    answer:
      "Financing is available for a wide range of HVAC services, including new AC system installations, heat pump replacements, full system upgrades, and significant repairs above a minimum threshold. Routine maintenance and minor repairs may not qualify but are typically affordable enough to pay out of pocket. Contact us to confirm eligibility for your specific project.",
  },
  {
    question: "What is deferred interest and how do I avoid it?",
    answer:
      "Some 0% APR promotional financing plans use deferred interest, meaning interest accrues during the promotional period but is waived if you pay the full balance before the promotion ends. If you don't pay it off in time, you may be charged all the accrued interest retroactively. We clearly explain all terms before you sign anything, and we always recommend paying off promotional balances before the deadline to avoid any charges.",
  },
  {
    question: "How do I apply for HVAC financing through Total Service?",
    answer:
      "Applying is simple. You can click the 'Apply Online' button on this page, or call us at (407) 617-3510 and one of our team members will walk you through the process. We'll match you with the financing option that best fits your project and budget. The application typically takes less than 10 minutes to complete.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const plans = [
  {
    icon: CreditCard,
    name: "Basic",
    term: "12-Month 0% APR",
    note: "On approved credit. Subject to credit approval.",
    tagline: "Perfect for repairs & tune-ups",
    fromPrice: "$99/mo",
    highlights: [
      "No interest for 12 months",
      "Ideal for repairs up to $1,500",
      "Quick online application",
      "Fast same-day approval",
    ],
    cta: "Apply Now",
    featured: false,
  },
  {
    icon: DollarSign,
    name: "Standard",
    term: "36-Month Low APR",
    note: "Competitive fixed rate. Subject to credit approval.",
    tagline: "Great for system replacements",
    fromPrice: "$149/mo",
    highlights: [
      "Spread payments over 3 years",
      "Ideal for single-unit replacements",
      "Fixed monthly payments",
      "No prepayment penalty",
    ],
    cta: "Apply Now",
    featured: true,
  },
  {
    icon: TrendingUp,
    name: "Premium",
    term: "60-Month Extended Financing",
    note: "Extended term for larger projects. Subject to credit approval.",
    tagline: "For complete HVAC system upgrades",
    fromPrice: "$199/mo",
    highlights: [
      "Maximum flexibility over 5 years",
      "Ideal for full system installs",
      "Commercial projects welcome",
      "Combined equipment &amp; labor",
    ],
    cta: "Apply Now",
    featured: false,
  },
];

export default function FinancingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="hero-gradient relative flex items-center overflow-hidden"
        style={{ minHeight: "50vh" }}
        aria-labelledby="financing-hero-heading"
      >
        <div className="container-custom relative z-10 py-24 text-center">
          <p className="section-label justify-center mb-4">Easy Payments</p>
          <h1
            id="financing-hero-heading"
            className="font-display text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Flexible Financing Options{" "}
            <span style={{ color: "var(--color-accent)" }}>for Your HVAC System</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Don&apos;t let budget concerns leave you sweltering in the Florida heat.
            We offer payment plans that make premium HVAC service accessible for every
            Central Florida homeowner.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#apply"
              className="btn-accent px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2"
            >
              Apply Online <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="tel:+14076173510"
              className="btn-outline-white px-8 py-4 rounded-xl text-lg font-bold flex items-center gap-2"
              aria-label="Call Total Service AC &amp; Heating at 407-617-3510"
            >
              <Phone size={18} aria-hidden="true" />
              (407) 617-3510
            </a>
          </div>
        </div>
      </section>

      {/* ── Intro Section ─────────────────────────────────────── */}
      <section className="py-16" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text)" }}>
              We understand a new HVAC system is a major investment — often the
              largest home expense homeowners face in a given year. That&apos;s why
              Total Service Air Conditioning &amp; Heating works with trusted financing
              partners to offer flexible payment options that fit your budget. Whether
              you need a quick repair or a complete system overhaul, we have a plan
              designed for you. No hidden fees. No pressure. Just honest options that
              let you stay comfortable year-round.
            </p>
          </div>
        </div>
      </section>

      {/* ── Financing Plans ────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "white" }}
        aria-labelledby="plans-heading"
      >
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label justify-center">Payment Options</p>
            <h2
              id="plans-heading"
              className="font-display text-4xl md:text-5xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Choose the Plan That Works for You
            </h2>
            <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
              All plans subject to credit approval. Rates and terms are for illustration
              purposes — contact us for current offers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className="service-card rounded-2xl border overflow-hidden flex flex-col"
                  style={{
                    borderColor: plan.featured
                      ? "var(--color-accent)"
                      : "var(--color-border)",
                    background: "white",
                    boxShadow: plan.featured
                      ? "0 8px 40px rgba(232, 98, 26, 0.15)"
                      : "none",
                    position: "relative",
                  }}
                >
                  {plan.featured && (
                    <div
                      className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-bold uppercase tracking-widest text-white"
                      style={{ background: "var(--color-accent)" }}
                      aria-label="Most popular plan"
                    >
                      Most Popular
                    </div>
                  )}

                  <div className={`p-8 flex flex-col gap-5 flex-1 ${plan.featured ? "pt-12" : ""}`}>
                    {/* Icon + title */}
                    <div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: "rgba(232, 98, 26, 0.1)" }}
                      >
                        <Icon
                          size={24}
                          style={{ color: "var(--color-accent)" }}
                          aria-hidden="true"
                        />
                      </div>
                      <h3
                        className="font-display text-2xl font-bold mb-1"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {plan.name}
                      </h3>
                      <p
                        className="font-bold text-base"
                        style={{ color: "var(--color-accent)" }}
                      >
                        {plan.term}
                      </p>
                      <p
                        className="text-sm mt-1"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div
                      className="py-4 border-t border-b text-center"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <span
                        className="text-xs font-semibold uppercase tracking-widest"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Starting from
                      </span>
                      <p
                        className="font-display text-4xl font-bold mt-1"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {plan.fromPrice}
                      </p>
                      <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                        {plan.note}
                      </p>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2.5 flex-1">
                      {plan.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm"
                          style={{ color: "var(--color-text)" }}
                        >
                          <CheckCircle
                            size={16}
                            className="mt-0.5 shrink-0"
                            style={{ color: "var(--color-accent)" }}
                            aria-hidden="true"
                          />
                          <span dangerouslySetInnerHTML={{ __html: h }} />
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="#apply"
                      className={`mt-4 py-3.5 rounded-xl font-bold text-center text-sm flex items-center justify-center gap-2 transition-all ${
                        plan.featured ? "btn-accent" : "hover:opacity-80"
                      }`}
                      style={
                        !plan.featured
                          ? {
                              border: "2px solid var(--color-primary)",
                              color: "var(--color-primary)",
                            }
                          : {}
                      }
                    >
                      {plan.cta} <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface)" }}
        aria-labelledby="financing-faq-heading"
      >
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="section-label justify-center">Common Questions</p>
              <h2
                id="financing-faq-heading"
                className="font-display text-4xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                Financing FAQ
              </h2>
            </div>
            <FAQAccordion items={faqItems} dark={false} />
          </div>
        </div>
      </section>

      {/* ── Apply CTA ──────────────────────────────────────────── */}
      <section
        id="apply"
        className="py-20"
        style={{ background: "var(--color-surface-dark)" }}
        aria-labelledby="financing-cta-heading"
      >
        <div className="container-custom text-center">
          <p className="section-label justify-center mb-4">Get Started Today</p>
          <h2
            id="financing-cta-heading"
            className="font-display text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Ready to Apply?
          </h2>
          <p
            className="text-xl mb-10 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Apply online in minutes or call us and we&apos;ll walk you through the
            options over the phone. Most applicants receive a decision the same day.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#apply"
              className="btn-accent px-10 py-4 rounded-xl text-lg font-bold flex items-center gap-2"
              aria-label="Start your HVAC financing application"
            >
              Apply Online <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a
              href="tel:+14076173510"
              className="btn-outline-white px-10 py-4 rounded-xl text-lg font-bold flex items-center gap-2"
              aria-label="Call to apply at 407-617-3510"
            >
              <Phone size={18} aria-hidden="true" />
              (407) 617-3510
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              "No application fee",
              "Decision in minutes",
              "Secure application",
              "No obligation",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-sm"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <CheckCircle
                  size={14}
                  style={{ color: "var(--color-accent)" }}
                  aria-hidden="true"
                />
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            * All financing is subject to credit approval. Rates, terms, and
            availability may vary. Contact us for current promotions and full details.
            Monthly payment estimates are illustrative only.
          </p>
        </div>
      </section>
    </>
  );
}
