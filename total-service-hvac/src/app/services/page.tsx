import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "HVAC Services in Orlando, FL | Total Service Air Conditioning & Heating",
  description:
    "Total Service Air Conditioning & Heating offers expert AC repair, installation, maintenance, heating, duct cleaning & more in Orlando and Central Florida. Call (407) 617-3510.",
  openGraph: {
    title: "HVAC Services in Orlando, FL | Total Service Air Conditioning & Heating",
    description:
      "Expert AC repair, installation, maintenance, heating, duct cleaning & indoor air quality services across Central Florida. Licensed, insured, same-day service.",
    url: "https://totalserviceacandheat.com/services",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Total Service Air Conditioning and Heating LLC",
  url: "https://totalserviceacandheat.com",
  telephone: "+1-407-617-3510",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2809 Pine Ave",
    addressLocality: "Apopka",
    addressRegion: "FL",
    postalCode: "32703",
    addressCountry: "US",
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
  areaServed: [
    "Orlando",
    "Winter Garden",
    "Apopka",
    "Windermere",
    "Maitland",
    "Altamonte Springs",
    "Ocoee",
    "Clermont",
    "Kissimmee",
  ],
  priceRange: "$$",
};

const services = [
  {
    iconName: "wrench",
    title: "AC Repair",
    description:
      "Fast, reliable air conditioner repair for Central Florida homes and businesses. Our NATE-certified technicians diagnose and fix any AC problem — same day, guaranteed.",
    href: "/services/ac-repair",
    included: [
      "Same-day emergency AC repair",
      "All makes and models serviced",
      "Refrigerant leak detection & recharge",
      "Compressor and motor diagnosis",
      "Thermostat troubleshooting",
    ],
  },
  {
    iconName: "wind",
    title: "AC Installation",
    description:
      "Invest in long-lasting comfort with a professionally sized and installed system. We carry Trane, Carrier, and other top brands built for Florida's demanding climate.",
    href: "/services/ac-installation",
    included: [
      "Free in-home load calculation",
      "Trane & Carrier systems available",
      "Full system removal and haul-away",
      "Manufacturer warranty included",
      "Financing options available",
    ],
  },
  {
    iconName: "settings",
    title: "AC Maintenance",
    description:
      "Preventive tune-ups keep your system running at peak efficiency, reduce energy bills, and catch small issues before they become expensive breakdowns.",
    href: "/services/ac-maintenance",
    included: [
      "Complete 21-point inspection",
      "Coil cleaning and drain flush",
      "Filter replacement",
      "Refrigerant level check",
      "Electrical connections tightened",
    ],
  },
  {
    iconName: "flame",
    title: "Heating Services",
    description:
      "Central Florida winters can get cool — keep your heat pump or furnace running efficiently. We repair, install, and maintain all heating systems in the greater Orlando area.",
    href: "/services/heating",
    included: [
      "Heat pump repair & installation",
      "Electric furnace service",
      "Emergency heating repair",
      "Thermostat upgrades",
      "Annual heating tune-ups",
    ],
  },
  {
    iconName: "trash2",
    title: "Duct Cleaning",
    description:
      "Florida's humidity means your ducts can harbor mold, dust, and allergens. Professional duct cleaning improves air quality, efficiency, and HVAC lifespan.",
    href: "/services/duct-cleaning",
    included: [
      "Full ductwork inspection",
      "High-powered vacuum extraction",
      "Mold and mildew treatment",
      "Duct sealing and repair",
      "Before & after air quality test",
    ],
  },
  {
    iconName: "leaf",
    title: "Indoor Air Quality",
    description:
      "Orlando homes are sealed tight against the heat — that means indoor air can be 2–5x more polluted than outside. We install air purifiers, UV lights, and whole-home filtration.",
    href: "/services/indoor-air-quality",
    included: [
      "UV germicidal light installation",
      "Whole-home air purifiers",
      "HEPA filtration upgrades",
      "Humidity control solutions",
      "Air quality testing & assessment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <section
        className="relative flex items-center py-24 min-h-[50vh]"
        style={{ background: "var(--color-primary)" }}
        aria-labelledby="services-hero-heading"
      >
        {/* Dot grid texture */}
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
          style={{
            background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        {/* Diagonal bottom divider */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{
            background: "var(--color-surface)",
            clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
          }}
          aria-hidden="true"
        />

        <div className="container-custom relative z-10">
          <p
            className="section-label mb-4"
            style={{ color: "var(--color-accent)" }}
          >
            Our Services
          </p>
          <h1
            id="services-hero-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-3xl"
          >
            Complete HVAC Services Across Central Florida
          </h1>
          <p
            className="text-xl max-w-2xl mb-8"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            From emergency AC repair to full system replacement, Total Service is your
            one-call solution for every heating and cooling need in Orlando and surrounding areas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-estimate"
              className="btn-accent px-8 py-4 rounded-xl font-bold text-lg"
            >
              Get a Free Estimate →
            </Link>
            <a
              href="tel:+14076173510"
              className="btn-outline-white flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg"
              aria-label="Call Total Service AC & Heating at (407) 617-3510"
            >
              <Phone size={18} aria-hidden="true" />
              (407) 617-3510
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface)" }}
        aria-labelledby="services-grid-heading"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-label">What We Do</p>
            <h2
              id="services-grid-heading"
              className="font-display text-3xl md:text-4xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Every HVAC Service Your Home Needs
            </h2>
            <p
              className="mt-3 text-lg max-w-2xl mx-auto"
              style={{ color: "var(--color-text-muted)" }}
            >
              Licensed, insured, and NATE-certified — we handle everything from a
              quick tune-up to a full system install. Same-day appointments available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.href}
                iconName={service.iconName}
                title={service.title}
                description={service.description}
                href={service.href}
                variant="detailed"
                included={service.included}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <CTABanner
        headline="Not Sure What You Need? We'll Figure It Out Together."
        subtext="Call our team or request a free on-site estimate. No obligation, no pressure."
        buttonText="Schedule Free Estimate"
        buttonHref="/free-estimate"
        phoneNumber="(407) 617-3510"
        variant="dark"
      />

      {/* Why choose us strip */}
      <section className="py-16" style={{ background: "white" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "🏆",
                title: "NATE-Certified Technicians",
                body: "Every technician on our team holds NATE certification — the gold standard in HVAC expertise.",
              },
              {
                icon: "⚡",
                title: "Same-Day & Emergency Service",
                body: "AC down in a Florida summer? We move fast. Same-day slots available every day of the week.",
              },
              {
                icon: "💰",
                title: "Upfront Flat-Rate Pricing",
                body: "You approve the price before we touch a thing. No hidden fees, no surprise invoices.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <span className="text-4xl" aria-hidden="true">{item.icon}</span>
                <h3
                  className="font-display text-xl font-bold"
                  style={{ color: "var(--color-primary)" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "var(--color-text-muted)" }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas quick links */}
      <section
        className="py-12"
        style={{ background: "var(--color-surface)" }}
        aria-labelledby="services-areas-heading"
      >
        <div className="container-custom">
          <div className="flex flex-wrap items-center gap-3">
            <p
              id="services-areas-heading"
              className="font-semibold shrink-0"
              style={{ color: "var(--color-primary)" }}
            >
              Serving:
            </p>
            {[
              { name: "Orlando", href: "/service-areas/orlando" },
              { name: "Winter Garden", href: "/service-areas/winter-garden" },
              { name: "Apopka", href: "/service-areas/apopka" },
              { name: "Windermere", href: "/service-areas/windermere" },
              { name: "Maitland", href: "/service-areas/maitland" },
              { name: "Altamonte Springs", href: "/service-areas" },
              { name: "Ocoee", href: "/service-areas" },
              { name: "Clermont", href: "/service-areas" },
            ].map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{
                  background: "white",
                  color: "var(--color-primary)",
                  border: "1.5px solid var(--color-border)",
                }}
              >
                {area.name} <ArrowRight size={12} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section
        className="py-20"
        style={{ background: "var(--color-primary)" }}
        aria-labelledby="services-lead-heading"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <p
                className="section-label mb-2"
                style={{ color: "var(--color-accent)" }}
              >
                Free Quote
              </p>
              <h2
                id="services-lead-heading"
                className="font-display text-4xl font-bold text-white mb-4"
              >
                Get Your Free HVAC Estimate Today
              </h2>
              <p
                className="text-lg mb-6"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Tell us about your HVAC need and we&apos;ll reach out within 1 hour
                during business hours. Same-day appointments available.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "No-obligation quote — 100% free",
                  "Same-day appointments available",
                  "Licensed & insured technicians",
                  "100% satisfaction guaranteed",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3"
                    style={{ color: "rgba(255,255,255,0.85)" }}
                  >
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-xs font-bold"
                      style={{ background: "var(--color-accent)", color: "white" }}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
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

            {/* Right — form */}
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
