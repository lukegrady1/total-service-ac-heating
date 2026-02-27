import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    slug: "how-often-should-you-service-your-ac-in-florida",
    title: "How Often Should You Service Your AC in Florida?",
    excerpt:
      "Florida's heat and humidity put extra strain on AC systems. Learn the ideal maintenance schedule to keep your system running efficiently year-round.",
    date: "February 15, 2026",
    category: "Maintenance",
    readTime: "5 min read",
  },
  {
    slug: "signs-your-ac-needs-replacement-orlando",
    title: "7 Signs Your AC Needs Replacement (Orlando Homeowner's Guide)",
    excerpt:
      "Is your AC struggling to keep up? These seven warning signs mean it might be time for a new system — and what to do about it.",
    date: "February 8, 2026",
    category: "Buying Guides",
    readTime: "7 min read",
  },
  {
    slug: "best-ac-temperature-settings-florida-summer",
    title: "Best AC Temperature Settings for Florida Summer",
    excerpt:
      "Find the sweet spot between comfort and energy savings. Orlando HVAC experts weigh in on optimal thermostat settings for Central Florida summers.",
    date: "January 28, 2026",
    category: "Energy Savings",
    readTime: "4 min read",
  },
];

const categoryColors: Record<string, string> = {
  Maintenance: "#0A2540",
  "Buying Guides": "#E8621A",
  "Energy Savings": "#1A3F6F",
  "AC Tips": "#E8621A",
};

export default function HomeBlogPreview() {
  return (
    <section
      className="py-20"
      style={{ background: "var(--color-surface)" }}
      aria-labelledby="blog-preview-heading"
    >
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="section-label">
              <span aria-hidden="true">💡</span>&nbsp; HVAC Tips
            </p>
            <h2
              id="blog-preview-heading"
              className="font-display text-4xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              HVAC Tips for Florida Homeowners
            </h2>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 font-semibold text-sm transition-colors"
            style={{ color: "var(--color-accent)" }}
          >
            Read All Tips <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="service-card rounded-2xl overflow-hidden flex flex-col"
              style={{ background: "white", border: "1px solid var(--color-border)" }}
            >
              {/* Category bar */}
              <div
                className="h-1.5"
                style={{ background: categoryColors[post.category] || "var(--color-accent)" }}
                aria-hidden="true"
              />
              <div className="p-6 flex flex-col flex-1">
                <span
                  className="label-text mb-3 inline-block"
                  style={{ color: categoryColors[post.category] || "var(--color-accent)" }}
                >
                  {post.category}
                </span>
                <h3
                  className="font-display text-xl font-bold mb-3 leading-tight"
                  style={{ color: "var(--color-primary)" }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline"
                    style={{ color: "inherit" }}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--color-text-muted)" }}>
                  {post.excerpt}
                </p>
                <div
                  className="flex items-center justify-between text-xs pt-4 border-t"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
                >
                  <span className="flex items-center gap-1.5">
                    <Calendar size={11} aria-hidden="true" />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
