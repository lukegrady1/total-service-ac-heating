import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, AlertTriangle } from "lucide-react";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us | Total Service AC & Heating Orlando | (407) 617-3510",
  description:
    "Contact Total Service Air Conditioning & Heating in Orlando, FL. Call (407) 617-3510, email, or fill out our form for same-day HVAC service.",
};

const hours = [
  { day: "Monday", time: "8:00 AM – 6:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
  { day: "Thursday", time: "8:00 AM – 6:00 PM" },
  { day: "Friday", time: "8:00 AM – 6:00 PM" },
  { day: "Saturday", time: "9:00 AM – 4:00 PM" },
  { day: "Sunday", time: "Emergency Service Only" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Emergency Banner ───────────────────────────────────── */}
      <div
        className="relative py-4 px-4 text-center"
        style={{ background: "var(--color-accent)" }}
        role="banner"
        aria-label="Emergency service availability"
      >
        <div className="container-custom flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="flex items-center gap-2 text-white font-bold text-lg">
            <span className="relative flex h-3 w-3" aria-hidden="true">
              <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
            </span>
            <AlertTriangle size={20} className="shrink-0" aria-hidden="true" />
            AC Emergency? Call Now —
          </span>
          <a
            href="tel:+14076173510"
            className="text-white font-bold text-xl underline underline-offset-2 hover:no-underline"
            aria-label="Call Total Service AC &amp; Heating at 407-617-3510"
          >
            (407) 617-3510
          </a>
        </div>
      </div>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        className="hero-gradient relative flex items-center overflow-hidden"
        style={{ minHeight: "40vh" }}
        aria-labelledby="contact-hero-heading"
      >
        <div className="container-custom relative z-10 py-20 text-center">
          <p className="section-label justify-center mb-4">Get In Touch</p>
          <h1
            id="contact-hero-heading"
            className="font-display text-5xl md:text-6xl font-bold text-white mb-5"
          >
            We&apos;re Ready to Help —{" "}
            <span style={{ color: "var(--color-accent)" }}>Reach Out Today</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Whether it&apos;s an emergency repair or a scheduled tune-up, our team
            serves all of Central Florida with fast, professional HVAC service.
          </p>
        </div>
      </section>

      {/* ── 3-Column Contact Cards ─────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface)" }}
        aria-labelledby="contact-methods-heading"
      >
        <div className="container-custom">
          <h2 id="contact-methods-heading" className="sr-only">
            Contact Methods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Phone Card */}
            <div
              className="service-card p-8 rounded-2xl border text-center"
              style={{ background: "white", borderColor: "var(--color-border)" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(232, 98, 26, 0.1)" }}
              >
                <Phone size={32} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
              </div>
              <h3
                className="font-display text-xl font-bold mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                Call or Text
              </h3>
              <a
                href="tel:+14076173510"
                className="block text-3xl font-bold mb-4 transition-colors hover:opacity-80"
                style={{ color: "var(--color-accent)" }}
                aria-label="Call Total Service at 407-617-3510"
              >
                (407) 617-3510
              </a>
              <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
                Mon–Fri: 8:00 AM – 6:00 PM
                <br />
                Saturday: 9:00 AM – 4:00 PM
                <br />
                <strong style={{ color: "var(--color-accent)" }}>
                  Available for Emergencies 24/7
                </strong>
              </p>
              <a
                href="tel:+14076173510"
                className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm"
                aria-label="Call us now"
              >
                <Phone size={16} aria-hidden="true" />
                Call Now
              </a>
            </div>

            {/* Email Card */}
            <div
              className="service-card p-8 rounded-2xl border text-center"
              style={{ background: "white", borderColor: "var(--color-border)" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(232, 98, 26, 0.1)" }}
              >
                <Mail size={32} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
              </div>
              <h3
                className="font-display text-xl font-bold mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                Send an Email
              </h3>
              <a
                href="mailto:info@totalserviceacandheat.com"
                className="block text-lg font-semibold mb-4 break-all transition-colors hover:opacity-80"
                style={{ color: "var(--color-accent)" }}
              >
                info@totalserviceacandheat.com
              </a>
              <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
                We respond to all emails within 2 business hours during normal operating
                hours. For urgent issues, please call.
              </p>
              <a
                href="mailto:info@totalserviceacandheat.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:opacity-80"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
              >
                <Mail size={16} aria-hidden="true" />
                Send Email
              </a>
            </div>

            {/* Address Card */}
            <div
              className="service-card p-8 rounded-2xl border text-center"
              style={{ background: "white", borderColor: "var(--color-border)" }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{ background: "rgba(232, 98, 26, 0.1)" }}
              >
                <MapPin size={32} style={{ color: "var(--color-accent)" }} aria-hidden="true" />
              </div>
              <h3
                className="font-display text-xl font-bold mb-2"
                style={{ color: "var(--color-primary)" }}
              >
                Our Location
              </h3>
              <address className="not-italic mb-4" style={{ color: "var(--color-text-muted)" }}>
                <p className="text-base font-semibold" style={{ color: "var(--color-text)" }}>
                  2809 Pine Ave
                  <br />
                  Apopka, FL 32703
                </p>
              </address>
              <p className="text-sm mb-4" style={{ color: "var(--color-text-muted)" }}>
                <strong>Service Area:</strong> Greater Orlando &amp; Central Florida
                <br />
                Including Orange, Osceola, Seminole &amp; Lake counties
              </p>
              <a
                href="https://maps.google.com/?q=2809+Pine+Ave+Apopka+FL+32703"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm border-2 transition-all hover:opacity-80"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                }}
                aria-label="Get directions to 2809 Pine Ave, Apopka FL (opens in new tab)"
              >
                <MapPin size={16} aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lead Form ──────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "white" }}
        aria-labelledby="contact-form-heading"
      >
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="section-label justify-center">Request Service</p>
              <h2
                id="contact-form-heading"
                className="font-display text-4xl font-bold mb-4"
                style={{ color: "var(--color-primary)" }}
              >
                Send Us a Message
              </h2>
              <p className="text-lg" style={{ color: "var(--color-text-muted)" }}>
                Fill out the form below and we&apos;ll get back to you within 1 hour
                during business hours. For immediate assistance, call{" "}
                <a
                  href="tel:+14076173510"
                  className="font-bold"
                  style={{ color: "var(--color-accent)" }}
                >
                  (407) 617-3510
                </a>
                .
              </p>
            </div>
            <div
              className="p-8 rounded-2xl border"
              style={{ borderColor: "var(--color-border)" }}
            >
              <LeadForm dark={false} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Maps Placeholder ────────────────────────────── */}
      <section
        className="pb-0"
        style={{ background: "white" }}
        aria-label="Map of service area"
      >
        <div
          className="w-full flex items-center justify-center"
          style={{
            height: "400px",
            background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%)",
          }}
        >
          {/* TODO: Embed Google Maps iframe here */}
          {/* Example: <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="400" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Total Service AC & Heating location"></iframe> */}
          <div className="text-center text-white/60 px-4">
            <MapPin size={48} className="mx-auto mb-4 opacity-40" aria-hidden="true" />
            <p className="text-lg font-semibold text-white/70">
              Interactive Map Loading...
            </p>
            <p className="text-sm mt-2">
              2809 Pine Ave, Apopka, FL 32703 — Serving all of Central Florida
            </p>
          </div>
        </div>
      </section>

      {/* ── Hours Table ────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface)" }}
        aria-labelledby="hours-heading"
      >
        <div className="container-custom">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-10">
              <p className="section-label justify-center">When We&apos;re Available</p>
              <h2
                id="hours-heading"
                className="font-display text-4xl font-bold"
                style={{ color: "var(--color-primary)" }}
              >
                Business Hours
              </h2>
            </div>

            <div
              className="rounded-2xl border overflow-hidden"
              style={{ borderColor: "var(--color-border)", background: "white" }}
            >
              <div
                className="px-6 py-4 flex items-center gap-2"
                style={{ background: "var(--color-primary)" }}
              >
                <Clock size={18} className="text-white" aria-hidden="true" />
                <span className="text-white font-semibold">Operating Hours</span>
              </div>
              <table className="w-full" aria-label="Business hours by day">
                <tbody>
                  {hours.map((row, i) => (
                    <tr
                      key={row.day}
                      className="border-b last:border-0"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <td
                        className="px-6 py-4 font-semibold text-sm"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {row.day}
                      </td>
                      <td
                        className="px-6 py-4 text-sm text-right"
                        style={{
                          color:
                            row.time.includes("Emergency")
                              ? "var(--color-accent)"
                              : "var(--color-text-muted)",
                          fontWeight: row.time.includes("Emergency") ? 600 : 400,
                        }}
                      >
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div
                className="px-6 py-4 text-sm font-medium"
                style={{
                  background: "rgba(232, 98, 26, 0.06)",
                  color: "var(--color-accent)",
                  borderTop: "1px solid var(--color-border)",
                }}
              >
                Emergency HVAC service available 24/7 — call{" "}
                <a
                  href="tel:+14076173510"
                  className="font-bold underline underline-offset-2"
                  aria-label="Call for emergency HVAC service at 407-617-3510"
                >
                  (407) 617-3510
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
