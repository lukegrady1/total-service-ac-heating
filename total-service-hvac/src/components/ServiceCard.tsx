"use client";

import Link from "next/link";
import { ArrowRight, Wrench, Wind, Settings, Flame, Trash2, Leaf, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  wrench: Wrench,
  wind: Wind,
  settings: Settings,
  flame: Flame,
  trash2: Trash2,
  leaf: Leaf,
};

interface ServiceCardProps {
  icon?: LucideIcon; // legacy: for use in client components that pass icon directly
  iconName?: string; // preferred: for use from server components
  title: string;
  description: string;
  href: string;
  variant?: "compact" | "detailed";
  included?: string[];
}

export default function ServiceCard({
  icon,
  iconName,
  title,
  description,
  href,
  variant = "compact",
  included,
}: ServiceCardProps) {
  const Icon: LucideIcon = icon ?? (iconName ? (iconMap[iconName] ?? Wrench) : Wrench);

  return (
    <article
      className="service-card rounded-2xl overflow-hidden group"
      style={{
        background: "white",
        border: "1px solid var(--color-border)",
        borderLeft: "3px solid transparent",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderLeftColor = "var(--color-accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderLeftColor = "transparent";
      }}
    >
      <div className={variant === "detailed" ? "p-8" : "p-6"}>
        {/* Icon */}
        <div
          className={`${variant === "detailed" ? "w-14 h-14" : "w-12 h-12"} rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105`}
          style={{ background: "rgba(232,98,26,0.1)" }}
        >
          <Icon
            size={variant === "detailed" ? 26 : 22}
            style={{ color: "var(--color-accent)" }}
            aria-hidden="true"
          />
        </div>

        {/* Title */}
        <h3
          className={`font-display font-bold mb-2 ${variant === "detailed" ? "text-2xl" : "text-xl"}`}
          style={{ color: "var(--color-primary)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`leading-relaxed mb-4 ${variant === "detailed" ? "text-base" : "text-sm"}`}
          style={{ color: "var(--color-text-muted)" }}
        >
          {description}
        </p>

        {/* Included list (detailed variant) */}
        {variant === "detailed" && included && included.length > 0 && (
          <ul className="space-y-1.5 mb-6">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-text)" }}>
                <span style={{ color: "var(--color-accent)", marginTop: "3px" }} aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className={`flex ${variant === "detailed" ? "gap-3" : ""}`}>
          <Link
            href={href}
            className="flex items-center gap-1.5 text-sm font-semibold transition-colors"
            style={{ color: "var(--color-accent)" }}
          >
            {variant === "detailed" ? "Learn More" : "Learn More →"}
            {variant === "detailed" && <ArrowRight size={14} aria-hidden="true" />}
          </Link>
          {variant === "detailed" && (
            <Link
              href="/free-estimate"
              className="btn-accent px-4 py-2 rounded-lg text-sm"
            >
              Get a Quote
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
