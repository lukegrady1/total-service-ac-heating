"use client";

import { Wind, Wrench, Settings, Flame, Trash2, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Wrench,
    title: "AC Repair",
    description: "Fast, reliable repairs for all AC makes and models. Same-day service available when you need it most.",
    href: "/services/ac-repair",
  },
  {
    icon: Wind,
    title: "AC Installation",
    description: "Expert new system installation with energy-efficient Trane and Carrier equipment, sized right for your home.",
    href: "/services/ac-installation",
  },
  {
    icon: Settings,
    title: "AC Maintenance",
    description: "Regular tune-ups that extend system life, improve efficiency, and prevent costly breakdowns.",
    href: "/services/ac-maintenance",
  },
  {
    icon: Flame,
    title: "Heating Services",
    description: "Heat pump and furnace repair, installation, and maintenance to keep you comfortable during Florida's cooler months.",
    href: "/services/heating",
  },
  {
    icon: Trash2,
    title: "Duct Cleaning",
    description: "Professional duct cleaning removes dust, allergens, and contaminants for better airflow and air quality.",
    href: "/services/duct-cleaning",
  },
  {
    icon: Leaf,
    title: "Indoor Air Quality",
    description: "Air purifiers, UV systems, and humidity control solutions to protect your family's health and comfort.",
    href: "/services/indoor-air-quality",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomeServicesGrid() {
  return (
    <section
      className="py-20"
      style={{ background: "var(--color-surface)" }}
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="section-label">
            <span aria-hidden="true">⚡</span>&nbsp; What We Do
          </p>
          <h2
            id="services-heading"
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-primary)" }}
          >
            Complete HVAC Services for Central Florida
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: "var(--color-text-muted)" }}>
            Homes &amp; Businesses Across Greater Orlando
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div key={s.href} variants={cardVariant}>
              <ServiceCard {...s} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <a
            href="/services"
            className="inline-flex items-center gap-2 font-semibold text-base transition-colors"
            style={{ color: "var(--color-accent)" }}
          >
            View All Services →
          </a>
        </div>
      </div>
    </section>
  );
}
