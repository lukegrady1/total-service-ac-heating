import Link from "next/link";
import { Phone, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import ReviewsSection from "@/components/ReviewsSection";
import CTABanner from "@/components/CTABanner";

const services = [
  { name: "AC Repair", href: "/services/ac-repair", description: "Fast diagnostics and repairs for any AC make or model." },
  { name: "AC Installation", href: "/services/ac-installation", description: "Expert new system sizing, installation, and commissioning." },
  { name: "AC Maintenance", href: "/services/ac-maintenance", description: "Seasonal tune-ups to keep your system running efficiently." },
  { name: "Heating Services", href: "/services/heating", description: "Heat pump and furnace service for Florida winters." },
  { name: "Duct Cleaning", href: "/services/duct-cleaning", description: "Remove contaminants and restore airflow throughout your home." },
  { name: "Indoor Air Quality", href: "/services/indoor-air-quality", description: "Purifiers, UV lights, and humidity control for healthier air." },
];

const benefits = [
  {
    title: "Local Expertise",
    description:
      "We understand the unique demands of Central Florida's climate — extreme summer heat, year-round humidity, and rapid weather changes. Our technicians are trained specifically for Florida conditions.",
  },
  {
    title: "Fast Response Times",
    description:
      "When your AC fails in Florida heat, every minute counts. We offer same-day service and emergency response to get your system back online as quickly as possible.",
  },
  {
    title: "Trusted Reputation",
    description:
      "With a 4.9-star Google rating and hundreds of 5-star reviews from Central Florida homeowners, you can trust Total Service to deliver exceptional quality every time.",
  },
];

export interface AreaPageTemplateProps {
  cityName: string;
  state: string;
  heroTitle: string;
  introParagraph: string;
  neighborhoods: string[];
  faqs: FAQItem[];
  jsonLd: object;
  metaTitle?: string;
  metaDescription?: string;
}

export default function AreaPageTemplate({
  cityName,
  state,
  heroTitle,
  introParagraph,
  neighborhoods,
  faqs,
  jsonLd,
}: AreaPageTemplateProps) {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative flex items-center py-24 min-h-[50vh]"
        style={{ background: "var(--color-primary)" }}
        aria-labelledby="area-hero-heading"
      >
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
          aria-hidden="true"
        />
        {/* Accent glow */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={16} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
            <p className="section-label" style={{ color: "var(--color-accent)" }}>
              {cityName}, {state}
            </p>
          </div>
          <h1
            id="area-hero-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-4xl"
          >
            {heroTitle}
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            Licensed, insured HVAC experts serving {cityName} and surrounding communities.
            Same-day service available — call or book online now.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/free-estimate" className="btn-accent px-8 py-4 rounded-xl font-bold text-lg">
              Get a Free Estimate →
            </Link>
            <a
              href="tel:+14076173510"
              className="btn-outline-white flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg"
              aria-label={`Call Total Service AC & Heating in ${cityName}`}
            >
              <Phone size={18} aria-hidden="true" />
              (407) 617-3510
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 mt-10">
            {["Licensed & Insured", "Same-Day Service", "5-Star Rated", "Free Estimates"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>
                <CheckCircle size={14} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + Neighborhoods */}
      <section className="py-20" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label">Serving {cityName}</p>
              <h2
                className="font-display text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "var(--color-primary)" }}
              >
                Your Local HVAC Experts in {cityName}, {state}
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-text-muted)" }}>
                {introParagraph}
              </p>
              <a
                href="tel:+14076173510"
                className="btn-accent inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold"
                aria-label={`Call Total Service AC & Heating for service in ${cityName}`}
              >
                <Phone size={16} aria-hidden="true" />
                Call (407) 617-3510
              </a>
            </div>

            <div>
              <p className="section-label">Neighborhoods We Serve</p>
              <h3
                className="font-display text-2xl font-bold mb-6"
                style={{ color: "var(--color-primary)" }}
              >
                {cityName} Communities We Cover
              </h3>
              <div className="flex flex-wrap gap-3">
                {neighborhoods.map((hood) => (
                  <span
                    key={hood}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: "white",
                      border: "1.5px solid var(--color-border)",
                      color: "var(--color-primary)",
                      boxShadow: "0 2px 8px rgba(10,37,64,0.06)",
                    }}
                  >
                    <MapPin size={12} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                    {hood}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm" style={{ color: "var(--color-text-muted)" }}>
                Don&apos;t see your exact neighborhood?{" "}
                <a href="tel:+14076173510" style={{ color: "var(--color-accent)", fontWeight: 600 }}>
                  Call us
                </a>{" "}
                — we likely serve your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-dark)" }}
        aria-labelledby="area-services-heading"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-label" style={{ color: "var(--color-accent)" }}>
              Full-Service HVAC
            </p>
            <h2
              id="area-services-heading"
              className="font-display text-3xl md:text-4xl font-bold text-white"
            >
              Services Available in {cityName}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group block p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-[var(--color-accent-light)] transition-colors">
                  {service.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {service.description}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                  style={{ color: "var(--color-accent)" }}
                >
                  Learn More <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for [city] */}
      <section className="py-20" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-label">Why Total Service</p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Why {cityName} Chooses Total Service
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl"
                style={{
                  background: "white",
                  border: "1.5px solid var(--color-border)",
                  boxShadow: "0 4px 20px rgba(10,37,64,0.06)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(232,98,26,0.1)" }}
                >
                  <span
                    className="text-2xl font-display font-bold"
                    style={{ color: "var(--color-accent)" }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                </div>
                <h3
                  className="font-display text-xl font-bold mb-3"
                  style={{ color: "var(--color-primary)" }}
                >
                  {benefit.title}
                </h3>
                <p style={{ color: "var(--color-text-muted)" }}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline={`AC Emergency in ${cityName}? We're Ready Now`}
        subtext="Same-day service available. Licensed, insured technicians dispatched fast."
        buttonText="Get a Free Estimate"
        buttonHref="/free-estimate"
        phoneNumber="(407) 617-3510"
        variant="primary"
      />

      {/* Reviews */}
      <ReviewsSection />

      {/* FAQ */}
      <section className="py-20" style={{ background: "var(--color-primary)" }}>
        <div className="container-custom max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="section-label" style={{ color: "var(--color-accent)" }}>
              Common Questions
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              FAQs for {cityName} Homeowners
            </h2>
          </div>
          <FAQAccordion items={faqs} dark />
        </div>
      </section>

      {/* Lead Form */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-dark)" }}
        aria-labelledby="area-lead-heading"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label" style={{ color: "var(--color-accent)" }}>
                Free Quote
              </p>
              <h2
                id="area-lead-heading"
                className="font-display text-4xl font-bold text-white mb-5"
              >
                Get Your Free Estimate in {cityName}
              </h2>
              <p className="text-lg mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
                Fill out the form and we&apos;ll reach out within 1 hour during business hours.
                For immediate assistance, call us now.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "No-obligation, free estimates",
                  "Same-day appointments available",
                  "100% satisfaction guaranteed",
                  "Licensed & insured technicians",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={18} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                    <span style={{ color: "rgba(255,255,255,0.8)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="tel:+14076173510"
                className="flex items-center gap-2 text-xl font-bold"
                style={{ color: "var(--color-accent)" }}
                aria-label={`Call Total Service AC & Heating in ${cityName}`}
              >
                <Phone size={22} aria-hidden="true" />
                (407) 617-3510
              </a>
            </div>
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
    </>
  );
}
