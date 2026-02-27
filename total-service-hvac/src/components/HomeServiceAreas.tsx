import Link from "next/link";
import { MapPin } from "lucide-react";

const primaryAreas = [
  { name: "Orlando", href: "/service-areas/orlando" },
  { name: "Winter Garden", href: "/service-areas/winter-garden" },
  { name: "Apopka", href: "/service-areas/apopka" },
  { name: "Windermere", href: "/service-areas/windermere" },
  { name: "Maitland", href: "/service-areas/maitland" },
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
];

export default function HomeServiceAreas() {
  return (
    <section
      className="py-20"
      style={{ background: "var(--color-surface-dark)" }}
      aria-labelledby="areas-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-label" style={{ color: "var(--color-accent)" }}>
            <MapPin size={12} className="inline" aria-hidden="true" />&nbsp; Where We Serve
          </p>
          <h2
            id="areas-heading"
            className="font-display text-4xl md:text-5xl font-bold text-white"
            style={{ color: "white" }}
          >
            Serving All of Central Florida
          </h2>
          <p className="mt-3 text-lg" style={{ color: "rgba(255,255,255,0.6)" }}>
            From Apopka to Kissimmee, we&apos;ve got you covered
          </p>
        </div>

        {/* Primary service area links */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {primaryAreas.map((area) => (
            <Link
              key={area.href}
              href={area.href}
              className="px-5 py-2.5 rounded-full font-semibold text-sm transition-all"
              style={{
                background: "rgba(232,98,26,0.15)",
                color: "var(--color-accent-light)",
                border: "1px solid rgba(232,98,26,0.3)",
              }}
            >
              {area.name}
            </Link>
          ))}
        </div>

        {/* Extended areas */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {extendedAreas.map((area) => (
            <span
              key={area}
              className="px-4 py-2 rounded-full text-sm"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.65)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {area}
            </span>
          ))}
        </div>

        <p className="text-center text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          Don&apos;t see your city?{" "}
          <a href="tel:+14076173510" className="font-semibold" style={{ color: "var(--color-accent-light)" }}>
            Call us
          </a>{" "}
          — we likely serve your area.
        </p>
      </div>
    </section>
  );
}
