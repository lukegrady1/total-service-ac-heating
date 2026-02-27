import { Star } from "lucide-react";

export interface Review {
  name: string;
  date: string;
  text: string;
  location: string;
  service: string;
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article
      className="rounded-2xl p-6 flex flex-col gap-3"
      style={{
        background: "white",
        border: "1px solid var(--color-border)",
        boxShadow: "0 4px 20px rgba(10,37,64,0.07)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="currentColor"
            style={{ color: "var(--color-accent)" }}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Review text */}
      <blockquote>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--color-text)" }}
        >
          &ldquo;{review.text}&rdquo;
        </p>
      </blockquote>

      {/* Reviewer info */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t" style={{ borderColor: "var(--color-border)" }}>
        <div>
          <p className="font-semibold text-sm" style={{ color: "var(--color-primary)" }}>
            {review.name}
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            {review.location} · {review.service}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs font-semibold" style={{ color: "var(--color-text-muted)" }}>
            {review.date}
          </p>
          <p className="text-xs" style={{ color: "var(--color-accent)" }}>
            Google Review
          </p>
        </div>
      </div>
    </article>
  );
}
