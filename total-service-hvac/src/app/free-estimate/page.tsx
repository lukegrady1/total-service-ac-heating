"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Phone,
  CheckCircle,
  Loader2,
  Lock,
  Star,
  Shield,
  Zap,
  Clock,
  ThumbsUp,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

// ─── Zod Schemas per step ─────────────────────────────────────────
const step1Schema = z.object({
  serviceType: z.string().min(1, "Please select a service type"),
  propertyType: z.string().min(1, "Please select a property type"),
});

const step2Schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .regex(/^[\d\s\-().+]+$/, "Invalid phone number format"),
  email: z.string().email("Please enter a valid email address"),
  zip: z.string().min(5, "Please enter your ZIP code").max(10),
});

const step3Schema = z.object({
  description: z.string().optional(),
  contactTime: z.string().min(1, "Please select a preferred contact time"),
});

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema);
type FullFormData = z.infer<typeof fullSchema>;

// ─── Static data ──────────────────────────────────────────────────
const serviceOptions = [
  "AC Repair",
  "AC Installation",
  "AC Maintenance",
  "Heating Services",
  "Duct Cleaning",
  "Other / Not Sure",
];

const propertyOptions = ["Residential", "Commercial"];
const contactTimeOptions = ["Morning (8 AM – 12 PM)", "Afternoon (12 PM – 4 PM)", "Evening (4 PM – 6 PM)"];

const trustBullets = [
  { icon: CheckCircle, text: "No-obligation, 100% free quote" },
  { icon: Zap, text: "Same-day appointments available" },
  { icon: Shield, text: "Licensed & insured technicians" },
  { icon: Clock, text: "We call back within 1 hour" },
  { icon: ThumbsUp, text: "100% satisfaction guaranteed" },
  { icon: Star, text: "4.9 ⭐ average on Google Reviews" },
];

const featuredReview = {
  name: "Maria G.",
  location: "Orlando, FL",
  text: "My AC went out on the hottest day of the year. Total Service sent a tech within two hours, diagnosed the problem, and had my system running by evening. Absolutely incredible service. Will never call anyone else.",
};

// ─── Step slide variants ──────────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35 },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    transition: { duration: 0.25 },
  }),
};

// ─── Shared input / label helpers ────────────────────────────────
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="form-error">{message}</p>;
}

// ─── Main component ───────────────────────────────────────────────
export default function FreeEstimatePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  // Accumulate data across steps
  const [stepData, setStepData] = useState<Partial<FullFormData>>({});

  // Step 1 form
  const form1 = useForm<z.infer<typeof step1Schema>>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      serviceType: stepData.serviceType ?? "",
      propertyType: stepData.propertyType ?? "",
    },
  });

  // Step 2 form
  const form2 = useForm<z.infer<typeof step2Schema>>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      name: stepData.name ?? "",
      phone: stepData.phone ?? "",
      email: stepData.email ?? "",
      zip: stepData.zip ?? "",
    },
  });

  // Step 3 form
  const form3 = useForm<z.infer<typeof step3Schema>>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      description: stepData.description ?? "",
      contactTime: stepData.contactTime ?? "",
    },
  });

  const goNext = (data: Partial<FullFormData>) => {
    setStepData((prev) => ({ ...prev, ...data }));
    setDirection(1);
    setCurrentStep((s) => s + 1);
  };

  const goBack = () => {
    setDirection(-1);
    setCurrentStep((s) => s - 1);
  };

  const handleFinalSubmit = async (data: z.infer<typeof step3Schema>) => {
    const fullData = { ...stepData, ...data };
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fullData.name,
          phone: fullData.phone,
          email: fullData.email,
          service: fullData.serviceType,
          zip: fullData.zip,
          message: `Property: ${fullData.propertyType}. Preferred contact: ${fullData.contactTime}. ${fullData.description ?? ""}`.trim(),
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setServerError("Something went wrong. Please call us at (407) 617-3510.");
    } finally {
      setSubmitting(false);
    }
  };

  const totalSteps = 3;
  const progressPct = (currentStep / totalSteps) * 100;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-surface)" }}>

      {/* ── Minimal Header ──────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 px-4 py-4"
        style={{
          background: "var(--color-primary)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
        }}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" aria-label="Total Service AC &amp; Heating — home">
            <span className="flex flex-col leading-tight">
              <span
                className="font-display text-xl font-bold text-white"
                style={{ letterSpacing: "-0.01em" }}
              >
                Total Service
              </span>
              <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                Air &amp; Heat
              </span>
            </span>
          </Link>
          <a
            href="tel:+14076173510"
            className="btn-accent flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-sm"
            aria-label="Call Total Service AC at 407-617-3510"
          >
            <Phone size={16} aria-hidden="true" />
            <span className="hidden sm:inline">(407) 617-3510</span>
            <span className="sm:hidden">Call Now</span>
          </a>
        </div>
      </header>

      {/* ── Main Content ────────────────────────────────────────── */}
      <main id="main-content" className="py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

            {/* ── Left Column: Form ───────────────────────────── */}
            <div className="lg:col-span-3">

              {/* Heading */}
              <div className="mb-8">
                <p className="section-label">Free Estimate</p>
                <h1
                  className="font-display text-4xl md:text-5xl font-bold mb-3"
                  style={{ color: "var(--color-primary)" }}
                >
                  Get Your Free HVAC Estimate in Orlando
                </h1>
                <p className="text-lg" style={{ color: "var(--color-text-muted)" }}>
                  Tell us about your HVAC needs and we&apos;ll provide a no-obligation
                  quote — usually within one hour.
                </p>
              </div>

              {/* Trust badges row */}
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Licensed & Insured",
                  "Free Quote",
                  "Same-Day Service",
                  "5-Star Rated",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(232, 98, 26, 0.08)",
                      color: "var(--color-accent)",
                      border: "1px solid rgba(232, 98, 26, 0.2)",
                    }}
                  >
                    <CheckCircle size={12} aria-hidden="true" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Progress bar */}
              {!submitted && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Step {currentStep} of {totalSteps}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {Math.round(progressPct)}% complete
                    </span>
                  </div>
                  <div
                    className="h-2 rounded-full overflow-hidden"
                    style={{ background: "var(--color-border)" }}
                    role="progressbar"
                    aria-valuenow={currentStep}
                    aria-valuemin={1}
                    aria-valuemax={totalSteps}
                    aria-label={`Step ${currentStep} of ${totalSteps}`}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: "var(--color-accent)" }}
                      animate={{ width: `${progressPct}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                  {/* Step labels */}
                  <div className="flex justify-between mt-2">
                    {["Service Type", "Your Info", "Details"].map((label, i) => (
                      <span
                        key={label}
                        className="text-xs font-medium"
                        style={{
                          color:
                            currentStep > i
                              ? "var(--color-accent)"
                              : currentStep === i + 1
                              ? "var(--color-primary)"
                              : "var(--color-text-muted)",
                        }}
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Form card */}
              <div
                className="p-8 rounded-2xl border overflow-hidden relative"
                style={{ background: "white", borderColor: "var(--color-border)" }}
              >
                {submitted ? (
                  /* ── Thank You State ─────────────────────────── */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: "rgba(34, 197, 94, 0.12)" }}
                    >
                      <CheckCircle size={56} style={{ color: "#22c55e" }} aria-hidden="true" />
                    </div>
                    <h2
                      className="font-display text-3xl font-bold mb-3"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Request Submitted!
                    </h2>
                    <p
                      className="text-lg mb-2"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      We&apos;ll call you within{" "}
                      <strong style={{ color: "var(--color-accent)" }}>1 hour</strong>{" "}
                      during business hours.
                    </p>
                    <p className="text-sm mb-8" style={{ color: "var(--color-text-muted)" }}>
                      For immediate help, call us directly:
                    </p>
                    <a
                      href="tel:+14076173510"
                      className="btn-accent inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-bold"
                      aria-label="Call Total Service at 407-617-3510"
                    >
                      <Phone size={20} aria-hidden="true" />
                      (407) 617-3510
                    </a>
                  </motion.div>
                ) : (
                  /* ── Multi-step Form ─────────────────────────── */
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentStep}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                    >
                      {/* Step 1 */}
                      {currentStep === 1 && (
                        <form
                          onSubmit={form1.handleSubmit((data) => goNext(data))}
                          noValidate
                        >
                          <h2
                            className="font-display text-2xl font-bold mb-6"
                            style={{ color: "var(--color-primary)" }}
                          >
                            What do you need help with?
                          </h2>

                          {/* Service type */}
                          <fieldset className="mb-6">
                            <legend
                              className="form-label mb-3"
                              style={{ color: "var(--color-text)" }}
                            >
                              Service Type *
                            </legend>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {serviceOptions.map((opt) => {
                                const isSelected =
                                  form1.watch("serviceType") === opt;
                                return (
                                  <label
                                    key={opt}
                                    className="relative flex items-center justify-center px-3 py-3 rounded-xl border-2 cursor-pointer text-sm font-medium text-center transition-all"
                                    style={{
                                      borderColor: isSelected
                                        ? "var(--color-accent)"
                                        : "var(--color-border)",
                                      background: isSelected
                                        ? "rgba(232, 98, 26, 0.06)"
                                        : "white",
                                      color: isSelected
                                        ? "var(--color-accent)"
                                        : "var(--color-text)",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      value={opt}
                                      className="sr-only"
                                      {...form1.register("serviceType")}
                                    />
                                    {opt}
                                  </label>
                                );
                              })}
                            </div>
                            <FieldError message={form1.formState.errors.serviceType?.message} />
                          </fieldset>

                          {/* Property type */}
                          <fieldset className="mb-8">
                            <legend
                              className="form-label mb-3"
                              style={{ color: "var(--color-text)" }}
                            >
                              Property Type *
                            </legend>
                            <div className="flex gap-4">
                              {propertyOptions.map((opt) => {
                                const isSelected =
                                  form1.watch("propertyType") === opt;
                                return (
                                  <label
                                    key={opt}
                                    className="flex-1 flex items-center justify-center px-4 py-3 rounded-xl border-2 cursor-pointer text-sm font-medium transition-all"
                                    style={{
                                      borderColor: isSelected
                                        ? "var(--color-accent)"
                                        : "var(--color-border)",
                                      background: isSelected
                                        ? "rgba(232, 98, 26, 0.06)"
                                        : "white",
                                      color: isSelected
                                        ? "var(--color-accent)"
                                        : "var(--color-text)",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      value={opt}
                                      className="sr-only"
                                      {...form1.register("propertyType")}
                                    />
                                    {opt}
                                  </label>
                                );
                              })}
                            </div>
                            <FieldError message={form1.formState.errors.propertyType?.message} />
                          </fieldset>

                          <button
                            type="submit"
                            className="btn-accent w-full py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
                          >
                            Continue <ArrowRight size={18} aria-hidden="true" />
                          </button>
                        </form>
                      )}

                      {/* Step 2 */}
                      {currentStep === 2 && (
                        <form
                          onSubmit={form2.handleSubmit((data) => goNext(data))}
                          noValidate
                        >
                          <h2
                            className="font-display text-2xl font-bold mb-6"
                            style={{ color: "var(--color-primary)" }}
                          >
                            Your contact information
                          </h2>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            <div>
                              <label
                                htmlFor="est-name"
                                className="form-label"
                              >
                                Full Name *
                              </label>
                              <input
                                id="est-name"
                                type="text"
                                autoComplete="name"
                                placeholder="John Smith"
                                className="form-input"
                                {...form2.register("name")}
                              />
                              <FieldError message={form2.formState.errors.name?.message} />
                            </div>
                            <div>
                              <label
                                htmlFor="est-phone"
                                className="form-label"
                              >
                                Phone Number *
                              </label>
                              <input
                                id="est-phone"
                                type="tel"
                                autoComplete="tel"
                                placeholder="(407) 555-0000"
                                className="form-input"
                                {...form2.register("phone")}
                              />
                              <FieldError message={form2.formState.errors.phone?.message} />
                            </div>
                            <div>
                              <label
                                htmlFor="est-email"
                                className="form-label"
                              >
                                Email Address *
                              </label>
                              <input
                                id="est-email"
                                type="email"
                                autoComplete="email"
                                placeholder="john@example.com"
                                className="form-input"
                                {...form2.register("email")}
                              />
                              <FieldError message={form2.formState.errors.email?.message} />
                            </div>
                            <div>
                              <label
                                htmlFor="est-zip"
                                className="form-label"
                              >
                                ZIP Code *
                              </label>
                              <input
                                id="est-zip"
                                type="text"
                                autoComplete="postal-code"
                                placeholder="32703"
                                className="form-input"
                                {...form2.register("zip")}
                              />
                              <FieldError message={form2.formState.errors.zip?.message} />
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={goBack}
                              className="btn-outline-white flex items-center gap-2 px-5 py-4 rounded-xl font-bold text-sm border-2"
                              style={{
                                borderColor: "var(--color-primary)",
                                color: "var(--color-primary)",
                              }}
                            >
                              <ArrowLeft size={16} aria-hidden="true" />
                              Back
                            </button>
                            <button
                              type="submit"
                              className="btn-accent flex-1 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
                            >
                              Continue <ArrowRight size={18} aria-hidden="true" />
                            </button>
                          </div>
                        </form>
                      )}

                      {/* Step 3 */}
                      {currentStep === 3 && (
                        <form
                          onSubmit={form3.handleSubmit(handleFinalSubmit)}
                          noValidate
                        >
                          <h2
                            className="font-display text-2xl font-bold mb-6"
                            style={{ color: "var(--color-primary)" }}
                          >
                            A few more details
                          </h2>

                          <div className="mb-5">
                            <label
                              htmlFor="est-description"
                              className="form-label"
                            >
                              Brief Description (optional)
                            </label>
                            <textarea
                              id="est-description"
                              rows={4}
                              placeholder="Describe the issue or anything helpful (e.g. 'AC not cooling', '15-year-old unit', 'getting a second opinion')..."
                              className="form-input resize-none"
                              {...form3.register("description")}
                            />
                          </div>

                          <fieldset className="mb-8">
                            <legend className="form-label mb-3">
                              Preferred Contact Time *
                            </legend>
                            <div className="flex flex-col sm:flex-row gap-3">
                              {contactTimeOptions.map((opt) => {
                                const isSelected =
                                  form3.watch("contactTime") === opt;
                                return (
                                  <label
                                    key={opt}
                                    className="flex-1 flex items-center justify-center px-3 py-3 rounded-xl border-2 cursor-pointer text-sm font-medium text-center transition-all"
                                    style={{
                                      borderColor: isSelected
                                        ? "var(--color-accent)"
                                        : "var(--color-border)",
                                      background: isSelected
                                        ? "rgba(232, 98, 26, 0.06)"
                                        : "white",
                                      color: isSelected
                                        ? "var(--color-accent)"
                                        : "var(--color-text)",
                                    }}
                                  >
                                    <input
                                      type="radio"
                                      value={opt}
                                      className="sr-only"
                                      {...form3.register("contactTime")}
                                    />
                                    {opt}
                                  </label>
                                );
                              })}
                            </div>
                            <FieldError message={form3.formState.errors.contactTime?.message} />
                          </fieldset>

                          {serverError && (
                            <p className="form-error text-center mb-4">{serverError}</p>
                          )}

                          <div className="flex gap-3">
                            <button
                              type="button"
                              onClick={goBack}
                              className="flex items-center gap-2 px-5 py-4 rounded-xl font-bold text-sm border-2 transition-all hover:opacity-80"
                              style={{
                                borderColor: "var(--color-primary)",
                                color: "var(--color-primary)",
                              }}
                            >
                              <ArrowLeft size={16} aria-hidden="true" />
                              Back
                            </button>
                            <button
                              type="submit"
                              disabled={submitting}
                              className="btn-accent flex-1 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                              {submitting ? (
                                <>
                                  <Loader2
                                    size={18}
                                    className="animate-spin"
                                    aria-hidden="true"
                                  />
                                  Submitting...
                                </>
                              ) : (
                                <>
                                  Get My Free Estimate{" "}
                                  <ArrowRight size={18} aria-hidden="true" />
                                </>
                              )}
                            </button>
                          </div>

                          <p
                            className="text-xs text-center mt-4 flex items-center justify-center gap-1.5"
                            style={{ color: "var(--color-text-muted)" }}
                          >
                            <Lock size={11} aria-hidden="true" />
                            We never share your information. No spam, ever.
                          </p>
                        </form>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>

            {/* ── Right Column: Social Proof ───────────────────── */}
            <aside
              className="hidden lg:block lg:col-span-2 space-y-6"
              aria-label="Customer testimonial and trust indicators"
            >
              {/* Featured Review */}
              <div
                className="p-6 rounded-2xl border"
                style={{ background: "white", borderColor: "var(--color-border)" }}
              >
                <div className="flex gap-1 mb-3" aria-label="5 out of 5 stars">
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
                <blockquote>
                  <p
                    className="text-sm leading-relaxed mb-4 italic"
                    style={{ color: "var(--color-text)" }}
                  >
                    &ldquo;{featuredReview.text}&rdquo;
                  </p>
                  <footer>
                    <p className="font-bold text-sm" style={{ color: "var(--color-primary)" }}>
                      {featuredReview.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      {featuredReview.location} — Google Review
                    </p>
                  </footer>
                </blockquote>
              </div>

              {/* Trust bullets */}
              <div
                className="p-6 rounded-2xl border"
                style={{ background: "var(--color-primary)", borderColor: "transparent" }}
              >
                <h3 className="font-display text-lg font-bold text-white mb-5">
                  Why Choose Total Service?
                </h3>
                <ul className="space-y-3">
                  {trustBullets.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-3">
                      <Icon
                        size={18}
                        className="shrink-0"
                        style={{ color: "var(--color-accent)" }}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-white/85">{text}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="mt-6 pt-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <p className="text-white/60 text-xs mb-2">Prefer to call?</p>
                  <a
                    href="tel:+14076173510"
                    className="flex items-center gap-2 text-white font-bold text-lg transition-opacity hover:opacity-80"
                    aria-label="Call Total Service at 407-617-3510"
                  >
                    <Phone size={20} aria-hidden="true" />
                    (407) 617-3510
                  </a>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>
    </div>
  );
}
