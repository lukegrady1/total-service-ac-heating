import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { type FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "AC Repair in Orlando, FL | Total Service Air Conditioning",
  description:
    "Fast, affordable AC repair in Orlando and Central Florida. Licensed technicians, same-day service. Call (407) 617-3510.",
  openGraph: {
    title: "AC Repair in Orlando, FL | Total Service Air Conditioning",
    description:
      "NATE-certified AC repair technicians serving Orlando and Central Florida. Same-day service, upfront pricing. Call (407) 617-3510.",
    url: "https://totalserviceacandheat.com/services/ac-repair",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AC Repair",
      description:
        "Professional air conditioner repair services for residential and commercial properties in Orlando and Central Florida. Same-day service available.",
      provider: {
        "@type": "LocalBusiness",
        name: "Total Service Air Conditioning and Heating LLC",
        telephone: "407-617-3510",
        address: {
          "@type": "PostalAddress",
          streetAddress: "2809 Pine Ave",
          addressLocality: "Apopka",
          addressRegion: "FL",
          postalCode: "32703",
          addressCountry: "US",
        },
        url: "https://totalserviceacandheat.com",
      },
      areaServed: [
        "Orlando",
        "Winter Garden",
        "Apopka",
        "Windermere",
        "Maitland",
        "Altamonte Springs",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AC Repair Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Emergency AC Repair" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refrigerant Recharge" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compressor Repair" } },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How quickly can you respond to an AC repair call in Orlando?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer same-day service for most AC repairs in the Orlando area. For emergencies, we aim to arrive within 2–4 hours. Call us at (407) 617-3510 to confirm same-day availability.",
          },
        },
        {
          "@type": "Question",
          name: "How much does AC repair cost in Orlando?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AC repair costs in Orlando typically range from $150 to $600 depending on the issue. We provide a flat-rate quote before any work begins so there are no surprises.",
          },
        },
        {
          "@type": "Question",
          name: "Should I repair or replace my AC unit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "If your system is over 10–12 years old and the repair cost exceeds 50% of a new system's price, replacement is usually the smarter investment. Our technicians will give you an honest recommendation.",
          },
        },
      ],
    },
  ],
};

const included: string[] = [
  "Complete diagnostic inspection of your entire HVAC system",
  "Refrigerant leak detection, repair, and recharge",
  "Compressor, capacitor, and contactor testing and replacement",
  "Evaporator and condenser coil cleaning and inspection",
  "Drain line flush to prevent water damage and mold growth",
  "Thermostat calibration and wiring verification",
  "Blower motor and fan blade inspection",
  "Electrical safety check — breakers, disconnect, and wiring",
];

const signs: string[] = [
  "Your AC is blowing warm or room-temperature air despite running",
  "The system cycles on and off frequently (short cycling)",
  "Unusual noises — banging, grinding, screeching, or rattling",
  "Water or refrigerant leaking around the indoor unit",
  "Ice forming on the refrigerant lines or evaporator coil",
  "Your energy bills have spiked without a change in usage habits",
];

const processSteps = [
  {
    number: "01",
    iconName: "search",
    title: "Accurate Diagnosis",
    description:
      "Our NATE-certified technician performs a thorough diagnostic inspection — not a guess. We identify the root cause, not just the symptom, using professional-grade equipment.",
  },
  {
    number: "02",
    iconName: "wrench",
    title: "Upfront Repair Quote",
    description:
      "Before touching anything, we present you with a clear, flat-rate repair quote. You approve the price — then we get to work. No hidden charges, ever.",
  },
  {
    number: "03",
    iconName: "check-circle",
    title: "Test, Verify & Guarantee",
    description:
      "After every repair we run a full system performance test — checking airflow, temperatures, and pressures — to ensure everything is working as it should before we leave.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "How quickly can you respond to an AC repair call in Orlando?",
    answer:
      "We offer same-day service for most AC repairs across the greater Orlando area. For true emergencies, we prioritize your call and aim to arrive within 2–4 hours. Call us directly at (407) 617-3510 to check same-day availability for your neighborhood.",
  },
  {
    question: "How much does AC repair typically cost in Central Florida?",
    answer:
      "Most AC repairs in Orlando range from $150 to $600 depending on the component needing service. Common repairs like a capacitor replacement run $150–$250, while compressor work can be $400–$1,200. We always provide a flat-rate written quote before starting so there are zero surprises.",
  },
  {
    question: "Should I repair my AC or replace the entire system?",
    answer:
      "A good rule of thumb: if your system is over 10–12 years old and the repair cost exceeds 50% of a replacement system's price, a new unit is usually the smarter investment. Florida's intense heat cycle means older systems work harder and fail more often. Our technicians give honest recommendations — we'll never push you toward a replacement you don't need.",
  },
  {
    question: "My AC is blowing warm air — what could be wrong?",
    answer:
      "Warm air from your AC usually points to one of a few issues: low refrigerant (often from a leak), a failed compressor, a dirty evaporator coil restricting airflow, or a thermostat malfunction. A quick diagnostic visit will pinpoint the exact cause — this is one of the most common calls we handle in the Orlando area.",
  },
  {
    question: "Do you service all AC brands and models?",
    answer:
      "Yes — our technicians are trained and equipped to service all major HVAC brands including Trane, Carrier, Lennox, Rheem, Goodman, American Standard, York, and more. Whether your system is 2 years old or 15 years old, we can diagnose and repair it.",
  },
  {
    question: "Is it worth getting a maintenance plan to avoid future repairs?",
    answer:
      "Absolutely. Annual AC maintenance in Florida's climate can catch small issues — dirty coils, low refrigerant, failing capacitors — before they become costly breakdowns. Regular maintenance also keeps your manufacturer warranty valid and can reduce energy bills by 15–20%. Ask us about our maintenance agreement when we visit.",
  },
];

export default function ACRepairPage() {
  return (
    <ServicePageTemplate
      title="AC Repair"
      headline="Fast AC Repair in Orlando — Same-Day Service Available"
      subheadline="When your AC breaks down in Florida's heat, every minute counts. Our NATE-certified technicians arrive fast and fix it right the first time — backed by our 100% satisfaction guarantee."
      iconName="wrench"
      included={included}
      signs={signs}
      process={processSteps}
      faqs={faqs}
      jsonLd={jsonLd}
      relatedServices={[
        { name: "AC Maintenance", href: "/services/ac-maintenance" },
        { name: "AC Installation", href: "/services/ac-installation" },
        { name: "Indoor Air Quality", href: "/services/indoor-air-quality" },
      ]}
      relatedAreas={[
        { name: "Orlando", href: "/service-areas/orlando" },
        { name: "Winter Garden", href: "/service-areas/winter-garden" },
        { name: "Apopka", href: "/service-areas/apopka" },
        { name: "Windermere", href: "/service-areas/windermere" },
        { name: "Maitland", href: "/service-areas/maitland" },
      ]}
    />
  );
}
