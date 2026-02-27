"use client";

import Link from "next/link";
import { Phone, MapPin, Clock, Wind, Shield, Star, Award, Users } from "lucide-react";

const services = [
  { name: "AC Repair", href: "/services/ac-repair" },
  { name: "AC Installation", href: "/services/ac-installation" },
  { name: "AC Maintenance", href: "/services/ac-maintenance" },
  { name: "Heating Services", href: "/services/heating" },
  { name: "Duct Cleaning", href: "/services/duct-cleaning" },
  { name: "Indoor Air Quality", href: "/services/indoor-air-quality" },
];

const areas = [
  { name: "Orlando", href: "/service-areas/orlando" },
  { name: "Winter Garden", href: "/service-areas/winter-garden" },
  { name: "Apopka", href: "/service-areas/apopka" },
  { name: "Windermere", href: "/service-areas/windermere" },
  { name: "Maitland", href: "/service-areas/maitland" },
  { name: "All Service Areas", href: "/service-areas" },
];

const trustBadges = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "NATE Certified" },
  { icon: Star, label: "5-Star Rated" },
  { icon: Users, label: "Local & Family Owned" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-surface-dark)", color: "rgba(255,255,255,0.85)" }}>
      {/* Emergency CTA Strip */}
      <div
        className="py-6 text-center"
        style={{ background: "var(--color-accent)" }}
      >
        <p className="font-display text-xl md:text-2xl font-bold text-white mb-1">
          AC Emergency? We&apos;re Ready 24/7
        </p>
        <a
          href="tel:+14076173510"
          className="font-display text-3xl md:text-4xl font-bold text-white hover:text-white/90 transition-colors"
          aria-label="Call for emergency AC service"
        >
          (407) 617-3510
        </a>
      </div>

      {/* Trust Badges */}
      <div
        className="py-5 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)" }}
      >
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={18} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
                <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "var(--color-accent)" }}
              >
                <Wind size={20} color="white" aria-hidden="true" />
              </div>
              <div className="leading-tight">
                <span className="font-display font-bold text-lg block text-white">Total Service</span>
                <span className="font-body text-xs block" style={{ color: "rgba(255,255,255,0.6)" }}>
                  Air & Heat
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
              Central Florida&apos;s trusted HVAC experts. Serving Orlando and surrounding communities with honest,
              expert service since day one.
            </p>
            <div className="flex items-start gap-2 text-sm mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
              <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} aria-hidden="true" />
              <span>2809 Pine Ave, Apopka, FL 32703</span>
            </div>
            <a
              href="tel:+14076173510"
              className="flex items-center gap-2 text-sm font-semibold text-white"
            >
              <Phone size={15} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
              (407) 617-3510
            </a>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="font-body font-bold text-white mb-5 text-base" style={{ color: "white" }}>Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h3 className="font-body font-bold text-white mb-5 text-base" style={{ color: "white" }}>Service Areas</h3>
            <ul className="space-y-2.5">
              {areas.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.65)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-accent-light)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                  >
                    {a.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div>
            <h3 className="font-body font-bold text-white mb-5 text-base" style={{ color: "white" }}>Hours & Contact</h3>
            <div className="flex items-start gap-2 mb-4">
              <Clock size={15} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} aria-hidden="true" />
              <div className="text-sm space-y-1" style={{ color: "rgba(255,255,255,0.65)" }}>
                <p>Monday – Friday: 8am – 6pm</p>
                <p>Saturday: 9am – 4pm</p>
                <p className="font-semibold" style={{ color: "var(--color-accent-light)" }}>
                  Emergency service available
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <Link
                href="/free-estimate"
                className="btn-accent block text-center py-2.5 px-4 rounded-lg text-sm"
              >
                Get Free Estimate
              </Link>
              <Link
                href="/contact"
                className="block text-center py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="py-5 border-t"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
          <p>© {new Date().getFullYear()} Total Service Air Conditioning and Heating LLC. All rights reserved.</p>
          <p>License #: CAC-XXXXXX {/* TODO: Add real CAC license number */}</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
