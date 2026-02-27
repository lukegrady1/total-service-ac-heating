import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { type FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "AC Installation in Orlando, FL | Total Service Air Conditioning & Heating",
  description:
    "Expert AC installation for Orlando homes and businesses. Energy-efficient Trane & Carrier systems, free estimates, professional installation. Call (407) 617-3510.",
  openGraph: {
    title: "AC Installation in Orlando, FL | Total Service Air Conditioning & Heating",
    description:
      "Professional AC installation in Orlando and Central Florida. Free in-home assessments, Trane & Carrier systems, manufacturer warranty. Call (407) 617-3510.",
    url: "https://totalserviceacandheat.com/services/ac-installation",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AC Installation",
      description:
        "Professional air conditioner installation for residential and commercial properties in Orlando and Central Florida. Free in-home assessments and top-brand systems.",
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
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does a new AC installation take in Orlando?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most residential AC installations in Orlando are completed in 4–8 hours in a single day. Larger systems or complex installations may take two days. We work efficiently to minimize disruption to your home.",
          },
        },
        {
          "@type": "Question",
          name: "What size AC unit do I need for my Florida home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sizing depends on your home's square footage, insulation, ceiling height, window placement, and sun exposure. We perform a free Manual J load calculation to recommend the exact right size — an oversized or undersized unit will cost you more in the long run.",
          },
        },
        {
          "@type": "Question",
          name: "How much does a new AC system cost in Orlando?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A new AC system installation in Orlando typically ranges from $3,500 to $8,500 depending on system size, brand, SEER rating, and installation complexity. We offer financing options and free estimates.",
          },
        },
      ],
    },
  ],
};

const included: string[] = [
  "Free in-home Manual J load calculation for precise system sizing",
  "Removal and responsible disposal of your old HVAC system",
  "Installation of new air handler, condenser, and all components",
  "New refrigerant line set and electrical disconnect installation",
  "Programmable or smart thermostat included and configured",
  "Full system startup, testing, and performance verification",
  "Manufacturer warranty registration completed on your behalf",
  "Financing options available — as low as $99/month",
];

const signs: string[] = [
  "Your AC system is 12+ years old and requires frequent repairs",
  "Repair costs are exceeding 50% of the cost of a new system",
  "Your energy bills have climbed steadily despite normal usage",
  "The system struggles to maintain comfortable temperatures in summer",
  "Rooms are unevenly cooled — some hot, some comfortable",
  "You have an R-22 (Freon) system that can no longer be serviced",
];

const processSteps = [
  {
    number: "01",
    iconName: "clipboard-list",
    title: "Free In-Home Assessment",
    description:
      "Our comfort specialist visits your home to measure every room, assess insulation, review ductwork, and calculate the exact capacity your system needs. This Manual J load calculation is free and takes about an hour.",
  },
  {
    number: "02",
    iconName: "settings",
    title: "Expert Installation",
    description:
      "Our certified installation team arrives on time, protects your home during the process, removes and disposes of the old system, and installs your new equipment to manufacturer specifications — usually complete in one day.",
  },
  {
    number: "03",
    iconName: "check-circle",
    title: "System Walkthrough & Warranty",
    description:
      "We run a complete startup test, verify performance across every zone, configure your thermostat, register your manufacturer warranty, and walk you through everything before we leave. You get peace of mind from day one.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "How long does a new AC installation take in Orlando?",
    answer:
      "Most single-system residential AC installations are completed in a single day — typically 4–8 hours. Larger homes with multiple zones, complex ductwork, or attic installations may require two days. We'll give you a clear timeline during your free estimate appointment.",
  },
  {
    question: "What size AC unit do I need for my Florida home?",
    answer:
      "There's no universal answer — proper sizing requires a Manual J load calculation that accounts for your home's square footage, ceiling height, insulation quality, window orientation, and solar exposure. Florida's intense sun means many homes need more cooling capacity than similar-sized homes in cooler climates. We do this calculation free of charge before recommending any system.",
  },
  {
    question: "How much does a new AC system cost in Orlando?",
    answer:
      "A complete new AC installation in Orlando typically ranges from $3,500 to $8,500 for a standard residential system. Premium high-efficiency systems (18+ SEER2) run higher. We offer multiple options at different price points and can explain the energy savings payback for each tier. Financing is available with approved credit.",
  },
  {
    question: "What brands do you install?",
    answer:
      "We primarily install Trane and Carrier systems — two of the most reliable brands built for Florida's demanding climate. We can also install Lennox, Rheem, and American Standard systems depending on your needs and budget. All systems we install carry full manufacturer warranties.",
  },
  {
    question: "Do I need to replace my ductwork when getting a new AC?",
    answer:
      "Not necessarily. We inspect your existing ductwork as part of every installation assessment. If the ducts are in good condition and properly sized for the new system, we can use them. If they're leaky, undersized, or deteriorated — common in Florida homes over 15 years old — we'll recommend duct repairs or replacement to protect your new equipment investment.",
  },
  {
    question: "What SEER rating should I choose for an Orlando home?",
    answer:
      "Florida's year-round cooling demands make higher SEER ratings a smart investment. The minimum SEER2 for Florida is 15.2 for new installations. We recommend 16–18 SEER2 for the best balance of upfront cost and long-term energy savings — a higher-efficiency system can reduce your electric bill by $300–$700 per year in Central Florida.",
  },
];

export default function ACInstallationPage() {
  return (
    <ServicePageTemplate
      title="AC Installation"
      headline="Expert AC Installation for Orlando Homes & Businesses"
      subheadline="Invest in comfort that lasts. We install energy-efficient Trane and Carrier systems precisely sized for Florida's demanding climate — with free estimates and transparent flat-rate pricing."
      iconName="wind"
      included={included}
      signs={signs}
      process={processSteps}
      faqs={faqs}
      jsonLd={jsonLd}
      relatedServices={[
        { name: "AC Repair", href: "/services/ac-repair" },
        { name: "AC Maintenance", href: "/services/ac-maintenance" },
        { name: "Duct Cleaning", href: "/services/duct-cleaning" },
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
