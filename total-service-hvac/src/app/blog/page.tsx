import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "HVAC Blog & Tips for Florida Homeowners | Total Service Air Conditioning",
  description:
    "Expert HVAC advice for Central Florida homeowners. AC maintenance tips, energy savings, buying guides, and Florida climate insights from Total Service Air Conditioning & Heating.",
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-often-should-you-service-your-ac-in-florida",
    title: "How Often Should You Service Your AC in Florida?",
    excerpt:
      "Florida's relentless heat and humidity mean your AC works harder than almost anywhere else in the country. Discover why twice-yearly maintenance is essential — and what happens if you skip it.",
    category: "Maintenance",
    date: "February 15, 2026",
    readTime: "5 min read",
  },
  {
    slug: "signs-your-ac-needs-replacement-orlando",
    title: "7 Signs Your AC Needs Replacement (Orlando Homeowner's Guide)",
    excerpt:
      "Is your air conditioner on its last legs? Learn the seven telltale warning signs that it's time to replace rather than repair — and how to make the most cost-effective decision for your Orlando home.",
    category: "Buying Guides",
    date: "February 8, 2026",
    readTime: "7 min read",
  },
  {
    slug: "best-ac-temperature-settings-florida-summer",
    title: "Best AC Temperature Settings for Florida Summer",
    excerpt:
      "What temperature should you keep your thermostat at during a Florida summer? We break down the ideal settings for comfort, energy savings, and humidity control — plus programmable thermostat strategies.",
    category: "Energy Savings",
    date: "January 28, 2026",
    readTime: "4 min read",
  },
  {
    slug: "hvac-maintenance-checklist-central-florida",
    title: "The Ultimate HVAC Maintenance Checklist for Central Florida Homes",
    excerpt:
      "A complete, season-by-season maintenance checklist designed specifically for Central Florida's climate — from monthly filter checks to annual professional inspections and everything in between.",
    category: "Maintenance",
    date: "January 15, 2026",
    readTime: "8 min read",
  },
  {
    slug: "how-to-improve-indoor-air-quality-orlando",
    title: "How to Improve Indoor Air Quality in Your Orlando Home",
    excerpt:
      "Orlando's high humidity, pollen, and dust create unique indoor air quality challenges. Discover practical solutions — from air purifiers and UV lights to proper filtration and humidity control.",
    category: "AC Tips",
    date: "January 5, 2026",
    readTime: "6 min read",
  },
];

const categories = ["All", "AC Tips", "Maintenance", "Energy Savings", "Florida Climate", "Buying Guides"];

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Maintenance": { bg: "rgba(10,37,64,0.08)", text: "var(--color-primary)" },
  "Buying Guides": { bg: "rgba(232,98,26,0.1)", text: "var(--color-accent)" },
  "Energy Savings": { bg: "rgba(22,163,74,0.1)", text: "#16a34a" },
  "AC Tips": { bg: "rgba(37,99,235,0.1)", text: "#2563eb" },
  "Florida Climate": { bg: "rgba(234,179,8,0.1)", text: "#b45309" },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center py-24 min-h-[40vh]"
        style={{ background: "var(--color-primary)" }}
        aria-labelledby="blog-hero-heading"
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
            Expert Insights
          </p>
          <h1
            id="blog-hero-heading"
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-3xl"
          >
            HVAC Tips for Florida Homeowners
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Practical advice, maintenance guides, and expert insights for keeping your Central
            Florida home comfortable year-round.
          </p>
        </div>
      </section>

      {/* Category Filter (visual only — no JS state needed for static render) */}
      <section className="py-8 border-b" style={{ background: "white", borderColor: "var(--color-border)" }}>
        <div className="container-custom">
          <div className="flex flex-wrap gap-2" role="navigation" aria-label="Blog categories">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all"
                style={{
                  background: cat === "All" ? "var(--color-primary)" : "var(--color-surface)",
                  color: cat === "All" ? "white" : "var(--color-text-muted)",
                  border: cat === "All" ? "none" : "1.5px solid var(--color-border)",
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="py-20" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => {
              const colors = categoryColors[post.category] ?? {
                bg: "rgba(10,37,64,0.08)",
                text: "var(--color-primary)",
              };
              return (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "white",
                    border: "1.5px solid var(--color-border)",
                    boxShadow: "0 4px 20px rgba(10,37,64,0.06)",
                  }}
                >
                  {/* Featured image placeholder */}
                  <div
                    className="h-48 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 50%, rgba(232,98,26,0.4) 100%)`,
                    }}
                    aria-hidden="true"
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className="text-6xl font-display font-bold opacity-20 text-white select-none"
                        aria-hidden="true"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    {/* Category badge */}
                    <span
                      className="self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                      style={{ background: colors.bg, color: colors.text }}
                    >
                      {post.category}
                    </span>

                    <h2
                      className="font-display text-xl font-bold mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {post.title}
                    </h2>

                    <p
                      className="text-sm leading-relaxed flex-1 mb-5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div
                      className="flex items-center gap-4 text-xs mb-5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} aria-hidden="true" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2"
                      style={{ color: "var(--color-accent)" }}
                      aria-label={`Read article: ${post.title}`}
                    >
                      Read Article <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready for Professional HVAC Service?"
        subtext="Our licensed technicians are available same-day across Central Florida."
        buttonText="Get a Free Estimate"
        buttonHref="/free-estimate"
        phoneNumber="(407) 617-3510"
        variant="dark"
      />

      {/* Newsletter / bottom section */}
      <section className="py-16" style={{ background: "var(--color-surface)" }}>
        <div className="container-custom text-center">
          <p className="section-label">Stay Informed</p>
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--color-primary)" }}>
            More Questions About Your HVAC?
          </h2>
          <p className="text-lg max-w-xl mx-auto mb-8" style={{ color: "var(--color-text-muted)" }}>
            Our team is always happy to answer HVAC questions — no obligation required.
            Call us or request a free estimate and let&apos;s talk about your system.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/free-estimate" className="btn-accent px-8 py-4 rounded-xl font-bold">
              Get a Free Estimate →
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-xl font-bold border-2 transition-all"
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
