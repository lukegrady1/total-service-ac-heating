import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { type FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Heating Services in Orlando, FL | Total Service Air Conditioning & Heating",
  description:
    "Heating repair, installation, and maintenance for Orlando and Central Florida homes. Heat pumps, furnaces, and emergency heating service. Call (407) 617-3510.",
  openGraph: {
    title: "Heating Services in Orlando, FL | Total Service Air Conditioning & Heating",
    description:
      "Keep warm through Florida's cool season with professional heating repair and installation. Same-day service available in Orlando and Central Florida. Call (407) 617-3510.",
    url: "https://totalserviceacandheat.com/services/heating",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Heating Services",
      description:
        "Professional heating repair, installation, and maintenance for residential and commercial properties in Orlando and Central Florida. Heat pumps, electric furnaces, and emergency heating service.",
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
          name: "What type of heating system is best for a Florida home?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Heat pumps are the most popular and efficient choice for Florida homes because they provide both cooling and heating in one system. They're ideal for Florida's mild winters and work efficiently in temperatures above 35°F, which covers the vast majority of Central Florida winter days.",
          },
        },
        {
          "@type": "Question",
          name: "Do I really need a heating system in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — Central Florida temperatures regularly drop into the 40s and occasionally the 30s during December through February. Most Florida homes use heat pumps that already have heating built in, but ensuring your heating function is working before the cold arrives is important for family comfort and safety.",
          },
        },
      ],
    },
  ],
};

const included: string[] = [
  "Heat pump heating mode diagnosis and repair",
  "Electric furnace and heat strip inspection and service",
  "Emergency heating repair — same-day response available",
  "Heat pump installation and full system replacement",
  "Reversing valve testing and replacement",
  "Thermostat heating mode configuration and calibration",
  "Heating performance test — verifying temperature rise",
  "Annual heating tune-up as part of twice-yearly HVAC maintenance",
];

const signs: string[] = [
  "Your system blows cool air when set to heat mode",
  "The heat pump runs constantly but the house stays cold",
  "You hear unusual noises — clicking, buzzing, or grinding — when heating",
  "Your heating bills are noticeably higher than previous years",
  "The system doesn't respond when you raise the thermostat setting",
  "Your heat pump is icing over during cold weather operation",
];

const processSteps = [
  {
    number: "01",
    iconName: "search",
    title: "Heating System Diagnosis",
    description:
      "We test both the heating and cooling modes of your system, check reversing valve function, inspect heat strips, measure temperature rise, and identify the exact cause of any heating failure.",
  },
  {
    number: "02",
    iconName: "settings",
    title: "Repair or Replace",
    description:
      "Whether it's a reversing valve swap, heat strip replacement, refrigerant charge, or a full heat pump installation, we present a clear upfront quote and complete the work efficiently — often the same day.",
  },
  {
    number: "03",
    iconName: "check-circle",
    title: "Full System Test & Verify",
    description:
      "After every heating repair or installation, we run the system through a complete heating cycle, verify temperature rise, check airflow across all registers, and confirm your thermostat is programmed correctly.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "What type of heating system is best for a Florida home?",
    answer:
      "Heat pumps are the overwhelmingly popular and most efficient choice for Florida homes. A heat pump provides both cooling and heating in one system — it simply reverses the refrigeration cycle to move warm air indoors during cool weather. They're highly efficient for Florida's mild winters and can be paired with auxiliary heat strips for the rare very cold nights.",
  },
  {
    question: "Do I really need a heating system in Central Florida?",
    answer:
      "Absolutely. While Florida winters are mild compared to northern states, Central Florida regularly sees nighttime lows in the 40s and occasionally dips into the 30s from December through February. A functioning heating system keeps your family comfortable and protects pipes from freezing during cold snaps. Most Florida homes use heat pumps that include heating as a built-in function.",
  },
  {
    question: "Why is my heat pump blowing cold air when set to heat?",
    answer:
      "This is a common issue in Florida. Possible causes include: a failed reversing valve (the component that switches between heating and cooling mode), low refrigerant charge, a faulty thermostat, or a heat strip failure. Heat pumps also go through a brief defrost cycle that temporarily blows cool air — this is normal. A diagnostic visit will pinpoint the specific cause.",
  },
  {
    question: "How often should I have my heating system serviced in Florida?",
    answer:
      "We recommend a heating check as part of your fall maintenance visit (October–November), before Florida's cool season begins. This ensures your heating function is working properly before you need it. It's included in our twice-yearly maintenance agreement at no extra charge.",
  },
  {
    question: "At what temperature does a heat pump stop being efficient in Florida?",
    answer:
      "Heat pumps become less efficient below about 35–40°F, which is where auxiliary electric heat strips take over. In Central Florida, temperatures this low are rare and brief, so heat pumps remain the most cost-effective heating solution for our climate. Newer cold-climate heat pumps can operate efficiently even lower, down to 0°F.",
  },
  {
    question: "How much does heating repair cost in Orlando?",
    answer:
      "Heating repairs in Orlando typically range from $150–$800 depending on the issue. A thermostat replacement runs $150–$300, a reversing valve replacement runs $400–$700 including labor, and heat strip replacement runs $250–$500. We always provide a flat-rate written quote before starting any work.",
  },
];

export default function HeatingPage() {
  return (
    <ServicePageTemplate
      title="Heating Services"
      headline="Heating Repair & Installation in Central Florida"
      subheadline="Don't let Florida's cool season catch you off guard. Our licensed HVAC technicians repair, install, and maintain heat pumps and electric heating systems across Orlando and the greater Central Florida area."
      iconName="flame"
      included={included}
      signs={signs}
      process={processSteps}
      faqs={faqs}
      jsonLd={jsonLd}
      relatedServices={[
        { name: "AC Repair", href: "/services/ac-repair" },
        { name: "AC Maintenance", href: "/services/ac-maintenance" },
        { name: "AC Installation", href: "/services/ac-installation" },
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
