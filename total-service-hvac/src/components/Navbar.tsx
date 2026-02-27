"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, Wind } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "AC Repair", href: "/services/ac-repair" },
  { name: "AC Installation", href: "/services/ac-installation" },
  { name: "AC Maintenance", href: "/services/ac-maintenance" },
  { name: "Heating Services", href: "/services/heating" },
  { name: "Duct Cleaning", href: "/services/duct-cleaning" },
  { name: "Indoor Air Quality", href: "/services/indoor-air-quality" },
];

const serviceAreas = [
  { name: "Orlando", href: "/service-areas/orlando" },
  { name: "Winter Garden", href: "/service-areas/winter-garden" },
  { name: "Apopka", href: "/service-areas/apopka" },
  { name: "Windermere", href: "/service-areas/windermere" },
  { name: "Maitland", href: "/service-areas/maitland" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Financing", href: "/financing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div
        className="text-center text-sm font-semibold py-2 px-4"
        style={{ background: "var(--color-accent)", color: "white" }}
      >
        🌡️ Same-Day AC Repair Available —{" "}
        <a href="tel:+14076173510" className="underline hover:no-underline font-bold">
          Call (407) 617-3510 Now
        </a>
      </div>

      {/* Main Navbar */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10, 37, 64, 0.97)"
            : "rgba(10, 37, 64, 0.95)",
          backdropFilter: "blur(12px)",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <nav className="container-custom flex items-center justify-between h-16" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "var(--color-accent)" }}
            >
              <Wind size={20} color="white" aria-hidden="true" />
            </div>
            <div className="leading-tight">
              <span
                className="font-display font-bold text-lg block"
                style={{ color: "white", lineHeight: "1.1" }}
              >
                Total Service
              </span>
              <span
                className="font-body text-xs block"
                style={{ color: "rgba(255,255,255,0.7)", lineHeight: "1.1" }}
              >
                Air & Heat
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.85)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.85)" }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 rounded-xl shadow-2xl overflow-hidden min-w-[220px]"
                    style={{ background: "var(--color-primary)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-5 py-3 text-sm transition-colors"
                        style={{ color: "rgba(255,255,255,0.85)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(232,98,26,0.15)";
                          e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                        }}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.85)" }}
                aria-expanded={areasOpen}
                aria-haspopup="true"
              >
                Service Areas <ChevronDown size={14} />
              </button>
              <AnimatePresence>
                {areasOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 rounded-xl shadow-2xl overflow-hidden min-w-[180px]"
                    style={{ background: "var(--color-primary)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {serviceAreas.map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="block px-5 py-3 text-sm transition-colors"
                        style={{ color: "rgba(255,255,255,0.85)" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(232,98,26,0.15)";
                          e.currentTarget.style.color = "white";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent";
                          e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                        }}
                      >
                        {a.name}
                      </Link>
                    ))}
                    <Link
                      href="/service-areas"
                      className="block px-5 py-3 text-sm font-semibold border-t"
                      style={{
                        color: "var(--color-accent-light)",
                        borderColor: "rgba(255,255,255,0.1)",
                      }}
                    >
                      View All Areas →
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors"
                style={{ color: "rgba(255,255,255,0.85)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+14076173510"
              className="flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "rgba(255,255,255,0.9)" }}
              aria-label="Call Total Service AC & Heating"
            >
              <Phone size={15} aria-hidden="true" />
              (407) 617-3510
            </a>
            <Link
              href="/free-estimate"
              className="btn-accent px-5 py-2 rounded-lg text-sm"
            >
              Free Estimate
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: "white" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto"
            style={{ background: "var(--color-primary)", paddingTop: "5rem" }}
          >
            <div className="container-custom py-8 flex flex-col gap-6">
              <Link href="/" onClick={() => setMobileOpen(false)} className="text-xl font-semibold text-white">
                Home
              </Link>

              <div>
                <p className="label-text mb-3" style={{ color: "var(--color-accent)" }}>Services</p>
                <div className="flex flex-col gap-3 pl-2">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="label-text mb-3" style={{ color: "var(--color-accent)" }}>Service Areas</p>
                <div className="flex flex-col gap-3 pl-2">
                  {serviceAreas.map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-medium"
                      style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                      {a.name}
                    </Link>
                  ))}
                </div>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-semibold text-white"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-3 pt-4 border-t" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                <a
                  href="tel:+14076173510"
                  className="flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-lg"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                >
                  <Phone size={20} aria-hidden="true" />
                  (407) 617-3510
                </a>
                <Link
                  href="/free-estimate"
                  onClick={() => setMobileOpen(false)}
                  className="btn-accent text-center py-4 rounded-xl font-semibold text-lg"
                >
                  Get Free Estimate
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
