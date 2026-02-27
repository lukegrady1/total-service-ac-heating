import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "HVAC Service Areas in Central Florida | Total Service Air Conditioning",
  description:
    "Total Service Air Conditioning & Heating serves Orlando, Winter Garden, Apopka, Windermere, Maitland, and all of Central Florida. Licensed HVAC experts — call (407) 617-3510.",
};

const mainAreas = [
  {
    name: "Orlando",
    href: "/service-areas/orlando",
    description:
      "Full HVAC service for Greater Orlando — from Downtown to Dr. Phillips, Lake Nona, and beyond.",
    highlight: "Largest service area",
  },
  {
    name: "Winter Garden",
    href: "/service-areas/winter-garden",
    description:
      "Serving Historic Downtown, Horizon West, Hamlin, and all of rapidly growing Winter Garden.",
    highlight: "Fast local response",
  },
  {
    name: "Apopka",
    href: "/service-areas/apopka",
    description:
      "Our home base. We're locally rooted in Apopka — same-day service for your neighbors.",
    highlight: "Company headquarters",
  },
  {
    name: "Windermere",
    href: "/service-areas/windermere",
    description:
      "Premium HVAC service for Windermere's luxury homes on the Butler Chain of Lakes.",
    highlight: "Premium systems",
  },
  {
    name: "Maitland",
    href: "/service-areas/maitland",
    description:
      "Expert AC repair, installation, and maintenance for Maitland and Lake Lily communities.",
    highlight: "Established community",
  },
];

const extendedAreas = [
  "Altamonte Springs",
  "Ocoee",
  "Clermont",
  "Kissimmee",
  "Lake Mary",
  "Longwood",
  "Casselberry",
  "Sanford",
  "Celebration",
  "Gotha",
  "Minneola",
  "Tavares",
  "Mount Dora",
  "Leesburg",
  "Eustis",
  "Groveland",
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center py-24 min-h-[50vh]"
        style={{ background: "var(--color-primary)" }}
        aria-labelledby="areas-hero-heading"
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
          className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container-custom relative z-10">
          <p className="section-label" style={{ color: "var(--color-accent)" }}>
            Service Coverage
          </p>
          <h1
            id="areas-hero-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-4xl"
          >
            HVAC Services Across Central Florida
          </h1>
          <p className="text-xl max-w-2xl mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            From Apopka to Orlando, Winter Garden to Maitland — Total Service Air Conditioning
            & Heating covers the entire Central Florida region with licensed, same-day HVAC
            service.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/free-estimate" className="btn-accent px-8 py-4 rounded-xl font-bold text-lg">
              Get a Free Estimate →
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

      {/* Main Cities Grid */}
      <section className="py-20" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="section-label">Primary Service Cities</p>
            <h2
              className="font-display text-3xl md:text-4xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              Our Main Coverage Areas
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
              We maintain dedicated teams in each of these cities for the fastest possible
              response times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group block p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "white",
                  border: "1.5px solid var(--color-border)",
                  boxShadow: "0 4px 20px rgba(10,37,64,0.06)",
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(232,98,26,0.1)" }}
                  >
                    <MapPin size={22} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(232,98,26,0.1)",
                      color: "var(--color-accent)",
                    }}
                  >
                    {area.highlight}
                  </span>
                </div>
                <h3
                  className="font-display text-2xl font-bold mb-3 group-hover:text-[var(--color-accent)] transition-colors"
                  style={{ color: "var(--color-primary)" }}
                >
                  {area.name}, FL
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--color-text-muted)" }}>
                  {area.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2"
                  style={{ color: "var(--color-accent)" }}
                >
                  View {area.name} Services <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Service Areas */}
      <section
        className="py-20"
        style={{ background: "var(--color-primary)" }}
        aria-labelledby="extended-areas-heading"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="section-label" style={{ color: "var(--color-accent)" }}>
              And Many More
            </p>
            <h2
              id="extended-areas-heading"
              className="font-display text-3xl md:text-4xl font-bold text-white"
            >
              Additional Areas We Serve
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.65)" }}>
              Our service territory spans all of greater Central Florida. If you don&apos;t see
              your city, call us — we likely serve your area.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {extendedAreas.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-sm font-medium"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                <MapPin size={12} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
              Don&apos;t see your city listed?
            </p>
            <a
              href="tel:+14076173510"
              className="btn-accent inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg"
              aria-label="Call Total Service AC & Heating to check service availability"
            >
              <Phone size={18} aria-hidden="true" />
              Call (407) 617-3510
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">Why Choose Total Service</p>
              <h2
                className="font-display text-3xl md:text-4xl font-bold mb-6"
                style={{ color: "var(--color-primary)" }}
              >
                The Central Florida HVAC Company You Can Trust
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-text-muted)" }}>
                Based in Apopka, FL, Total Service Air Conditioning & Heating has been serving
                Central Florida families and businesses for over 15 years. We&apos;re not a
                franchise — we&apos;re your neighbors, and we treat every home like our own.
              </p>
              <ul className="space-y-4">
                {[
                  "Florida CAC Licensed & Fully Insured",
                  "NATE-Certified Technicians",
                  "Same-Day & Emergency Service",
                  "Transparent, Upfront Pricing",
                  "4.9-Star Google Rating",
                  "Free Estimates on All Work",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle
                      size={18}
                      style={{ color: "var(--color-accent)" }}
                      aria-hidden="true"
                    />
                    <span style={{ color: "var(--color-text)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { stat: "15+", label: "Years Serving Central Florida" },
                { stat: "500+", label: "Systems Installed" },
                { stat: "4.9★", label: "Google Rating" },
                { stat: "24/7", label: "Emergency Service" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: "white",
                    border: "1.5px solid var(--color-border)",
                    boxShadow: "0 4px 16px rgba(10,37,64,0.06)",
                  }}
                >
                  <p
                    className="font-display text-4xl font-bold mb-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {item.stat}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--color-text-muted)" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to Schedule? We Serve Your Area"
        subtext="Same-day appointments available across Central Florida. Call now or submit a free estimate request."
        buttonText="Get a Free Estimate"
        buttonHref="/free-estimate"
        phoneNumber="(407) 617-3510"
        variant="dark"
      />

      {/* Lead Form */}
      <section
        className="py-20"
        style={{ background: "var(--color-primary)" }}
        aria-labelledby="areas-lead-heading"
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label" style={{ color: "var(--color-accent)" }}>
                Get Started
              </p>
              <h2
                id="areas-lead-heading"
                className="font-display text-4xl font-bold text-white mb-5"
              >
                Request Your Free HVAC Estimate
              </h2>
              <p className="text-lg mb-6" style={{ color: "rgba(255,255,255,0.7)" }}>
                Tell us about your HVAC needs and we&apos;ll respond within 1 hour during
                business hours. For emergencies, call us directly.
              </p>
              <a
                href="tel:+14076173510"
                className="flex items-center gap-2 text-xl font-bold"
                style={{ color: "var(--color-accent)" }}
                aria-label="Call Total Service AC & Heating"
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
