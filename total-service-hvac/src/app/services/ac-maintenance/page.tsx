import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { type FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "AC Maintenance & Tune-Up in Orlando, FL | Total Service",
  description:
    "Professional AC maintenance and tune-up services in Orlando and Central Florida. Extend the life of your system, lower energy bills, and prevent breakdowns. Call (407) 617-3510.",
  openGraph: {
    title: "AC Maintenance & Tune-Up in Orlando, FL | Total Service",
    description:
      "Keep your AC running at peak efficiency with professional maintenance in Orlando and Central Florida. 21-point inspection, coil cleaning, and more. Call (407) 617-3510.",
    url: "https://totalserviceacandheat.com/services/ac-maintenance",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AC Maintenance",
      description:
        "Comprehensive air conditioner maintenance and tune-up services for residential and commercial properties in Orlando and Central Florida.",
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
          name: "How often should I get AC maintenance in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In Florida, we recommend AC maintenance twice a year — once in early spring before the heavy cooling season begins, and once in the fall. Florida's heat runs systems harder and longer than most of the country, making twice-yearly tune-ups a smart investment.",
          },
        },
        {
          "@type": "Question",
          name: "What does an AC tune-up include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Our 21-point AC tune-up includes coil cleaning, drain line flush, refrigerant level check, electrical connection tightening, thermostat calibration, filter replacement, blower motor inspection, and a complete system performance test.",
          },
        },
      ],
    },
  ],
};

const included: string[] = [
  "21-point comprehensive system inspection and performance test",
  "Evaporator and condenser coil cleaning for maximum efficiency",
  "Condensate drain line flush to prevent water damage and mold",
  "Refrigerant level check and leak screening",
  "Air filter inspection and replacement",
  "Electrical connection tightening and capacitor testing",
  "Thermostat calibration and smart thermostat programming review",
  "Blower motor, fan blades, and belt inspection",
];

const signs: string[] = [
  "Your system hasn't been serviced in over 12 months",
  "Energy bills are creeping up without explanation",
  "The AC takes longer than usual to reach your set temperature",
  "You notice musty or stale odors when the system runs",
  "Condensate water pooling or dripping near the indoor unit",
  "The system is noisier than it used to be during operation",
];

const processSteps = [
  {
    number: "01",
    iconName: "search",
    title: "Full System Inspection",
    description:
      "We start with a complete 21-point inspection — checking electrical components, refrigerant pressures, coil condition, drain line, and overall system performance to identify anything that needs attention.",
  },
  {
    number: "02",
    iconName: "clipboard-list",
    title: "Clean, Tune & Optimize",
    description:
      "We clean the coils, flush the drain line, tighten all electrical connections, calibrate your thermostat, and replace the air filter. Every step is designed to maximize efficiency and prevent Florida's most common AC failures.",
  },
  {
    number: "03",
    iconName: "check-circle",
    title: "Performance Report & Recommendations",
    description:
      "After every maintenance visit we provide a written report of what we found, what we did, and any items to watch going forward. No pressure — just honest information so you can make the best decision for your home.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "How often should I get AC maintenance in Florida?",
    answer:
      "In Florida we recommend twice-yearly maintenance — once in early spring (March–April) before peak cooling season hits, and once in the fall (October–November). Florida's extreme heat runs AC systems harder and longer than almost anywhere in the country, meaning components wear faster and annual maintenance simply isn't enough here.",
  },
  {
    question: "What does a professional AC tune-up include?",
    answer:
      "Our maintenance visit includes a 21-point inspection covering: coil cleaning, condensate drain flush, refrigerant level check, electrical connection tightening and capacitor testing, thermostat calibration, filter replacement, blower motor inspection, and a full system performance test with temperature differential measurement. You'll receive a written report of everything we find.",
  },
  {
    question: "How much can I save on my electric bill with regular maintenance?",
    answer:
      "A well-maintained AC system runs 15–25% more efficiently than a neglected one. For the average Orlando home spending $180–$220/month on electric bills in summer, that's a potential savings of $25–$55 per month — or $300–$660 per year. The cost of an annual tune-up pays for itself quickly.",
  },
  {
    question: "Does maintenance keep my warranty valid?",
    answer:
      "Yes — most HVAC manufacturers require proof of annual professional maintenance to honor warranty claims. Skipping maintenance can void your warranty, leaving you on the hook for expensive repairs. We document every service visit so your records are always complete.",
  },
  {
    question: "Can maintenance prevent emergency AC breakdowns?",
    answer:
      "Absolutely. The vast majority of emergency AC failures — compressor burnout, capacitor failure, frozen coils, clogged drains — are preventable with routine maintenance. We find and fix the small issues before they become the emergency call on the hottest day of the summer.",
  },
  {
    question: "Do you offer maintenance plans or service agreements?",
    answer:
      "Yes, we offer annual maintenance agreements that cover two tune-up visits per year, priority scheduling, and discounts on any repairs needed. Ask about our maintenance plan options when you schedule your first visit — it's the most cost-effective way to protect your investment.",
  },
];

export default function ACMaintenancePage() {
  return (
    <ServicePageTemplate
      title="AC Maintenance"
      headline="AC Maintenance That Keeps Orlando Families Cool"
      subheadline="Florida's heat is relentless — your AC shouldn't be. Regular professional maintenance prevents costly breakdowns, reduces energy bills, and extends your system's life by years."
      iconName="settings"
      included={included}
      signs={signs}
      process={processSteps}
      faqs={faqs}
      jsonLd={jsonLd}
      relatedServices={[
        { name: "AC Repair", href: "/services/ac-repair" },
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
