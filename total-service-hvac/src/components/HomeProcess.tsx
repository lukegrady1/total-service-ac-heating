import ProcessSteps from "./ProcessSteps";
import { type Step } from "./ProcessSteps";

const steps: Step[] = [
  {
    number: "01",
    iconName: "phone-call",
    title: "Call or Book Online",
    description:
      "Reach us by phone at (407) 617-3510 or fill out our free estimate form. We'll confirm your appointment quickly — same-day slots available.",
  },
  {
    number: "02",
    iconName: "search",
    title: "Expert Diagnosis",
    description:
      "Our NATE-certified technician arrives on time, performs a thorough diagnostic, and explains exactly what's needed — no upselling, no guesswork.",
  },
  {
    number: "03",
    iconName: "check-circle",
    title: "Fast, Clean Repair",
    description:
      "We complete the work efficiently, clean up after ourselves, and ensure your system is running perfectly before we leave. 100% satisfaction guaranteed.",
  },
];

export default function HomeProcess() {
  return (
    <section
      className="py-20 section-diagonal-reverse"
      style={{ background: "var(--color-surface)" }}
      aria-labelledby="process-heading"
    >
      <div className="container-custom">
        <div className="text-center mb-14">
          <p className="section-label">
            <span aria-hidden="true">🔧</span>&nbsp; How It Works
          </p>
          <h2
            id="process-heading"
            className="font-display text-4xl md:text-5xl font-bold"
            style={{ color: "var(--color-primary)" }}
          >
            Simple. Fast. Reliable.
          </h2>
          <p className="mt-3 text-lg" style={{ color: "var(--color-text-muted)" }}>
            Three steps to total comfort
          </p>
        </div>
        <ProcessSteps steps={steps} />
      </div>
    </section>
  );
}
