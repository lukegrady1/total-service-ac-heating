"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard, { Review } from "./ReviewCard";

export const reviews: Review[] = [
  {
    name: "Maria G.",
    date: "Jan 2024",
    location: "Orlando, FL",
    service: "AC Repair",
    text: "My AC went out on the hottest day of the year. Total Service sent a tech within two hours, diagnosed the problem, and had my system running by evening. Absolutely incredible service. Will never call anyone else.",
  },
  {
    name: "James T.",
    date: "Mar 2024",
    location: "Winter Garden, FL",
    service: "AC Installation",
    text: "We replaced our 18-year-old unit and the Total Service team made the entire process painless. They arrived on time, installed the new Carrier system cleanly, explained everything, and the price was exactly what they quoted.",
  },
  {
    name: "Sandra L.",
    date: "Feb 2024",
    location: "Apopka, FL",
    service: "AC Maintenance",
    text: "Been using Total Service for our annual tune-up for 3 years now. They're always punctual, thorough, and honest — they've never tried to upsell me on things I don't need. Highly recommend to any Central Florida homeowner.",
  },
  {
    name: "Carlos M.",
    date: "Dec 2023",
    location: "Maitland, FL",
    service: "Indoor Air Quality",
    text: "After my daughter's allergy symptoms worsened, Total Service came out and recommended an air purification system. The difference in air quality has been remarkable. Worth every penny and their team was incredibly knowledgeable.",
  },
  {
    name: "Patricia W.",
    date: "Nov 2023",
    location: "Windermere, FL",
    service: "Duct Cleaning",
    text: "Our ducts hadn't been cleaned in years and the difference after Total Service's duct cleaning was immediate — less dust, better airflow, and our system runs more efficiently. Professional, thorough, and very reasonably priced.",
  },
  {
    name: "Robert K.",
    date: "Oct 2023",
    location: "Altamonte Springs, FL",
    service: "Heating Repair",
    text: "Rare Florida cold snap and our heat pump stopped working. Total Service came out same-day, found a faulty capacitor, and had us warm again in under an hour. Honest pricing and excellent communication throughout.",
  },
];

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const onScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  return (
    <section className="py-20" style={{ background: "var(--color-surface)" }}>
      <div className="container-custom">
        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <div>
            <p className="section-label">
              <span style={{ color: "var(--color-accent)" }}>★</span> Verified Reviews
            </p>
            <h2
              className="font-display text-4xl font-bold"
              style={{ color: "var(--color-primary)" }}
            >
              What Central Florida Homeowners Say
            </h2>
          </div>
          {/* Desktop nav arrows */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-30"
              style={{ borderColor: "var(--color-border)", color: "var(--color-primary)" }}
              aria-label="Previous reviews"
            >
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-30"
              style={{ borderColor: "var(--color-border)", color: "var(--color-primary)" }}
              aria-label="Next reviews"
            >
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Desktop: horizontal scroll */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="hidden md:flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              className="shrink-0 w-80 snap-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden flex flex-col gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
