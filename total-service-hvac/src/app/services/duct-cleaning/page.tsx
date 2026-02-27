import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { type FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Duct Cleaning Services in Orlando, FL | Total Service",
  description:
    "Professional air duct cleaning for Orlando and Central Florida homes. Remove dust, mold, and allergens from your ductwork. Improve air quality and HVAC efficiency. Call (407) 617-3510.",
  openGraph: {
    title: "Duct Cleaning Services in Orlando, FL | Total Service",
    description:
      "Expert duct cleaning in Orlando removes dust, mold, and allergens. Improve indoor air quality and HVAC efficiency. Licensed and insured. Call (407) 617-3510.",
    url: "https://totalserviceacandheat.com/services/duct-cleaning",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Duct Cleaning",
      description:
        "Professional air duct cleaning services for residential and commercial properties in Orlando and Central Florida. Remove dust, mold, pet dander, and allergens from ductwork.",
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
          name: "How often should ductwork be cleaned in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The EPA recommends cleaning ducts every 3–5 years. In Florida, the combination of humidity, year-round AC use, and high pollen counts means every 3 years is often more appropriate — especially if you have pets, allergies, or have recently renovated.",
          },
        },
        {
          "@type": "Question",
          name: "Does duct cleaning improve air quality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes — professional duct cleaning removes accumulated dust, pet dander, mold spores, and allergens that are recirculated every time your system runs. Florida's sealed homes and year-round AC use mean these contaminants build up faster than in cooler climates.",
          },
        },
      ],
    },
  ],
};

const included: string[] = [
  "Complete ductwork inspection using camera and visual assessment",
  "High-powered negative pressure vacuum extraction of all debris",
  "Supply and return duct cleaning — every accessible register",
  "Mold and mildew treatment with EPA-registered antimicrobial solution",
  "Air handler cabinet cleaning — blower, coil, and drain pan",
  "Duct sealing and minor repair where needed",
  "Before-and-after documentation of duct condition",
  "Post-cleaning air quality assessment and written report",
];

const signs: string[] = [
  "Visible dust blowing from registers when the system starts",
  "Musty or stale odors throughout the home when AC runs",
  "Family members experiencing increased allergy symptoms indoors",
  "You've never had your ducts cleaned in 3+ years",
  "Recent home renovation, remodel, or new construction",
  "Pets in the home or recent rodent or pest activity near ductwork",
];

const processSteps = [
  {
    number: "01",
    iconName: "search",
    title: "Ductwork Inspection",
    description:
      "We start with a thorough inspection of your entire duct system — checking for visible contamination, mold growth, debris buildup, disconnected joints, and any damage that needs attention before cleaning begins.",
  },
  {
    number: "02",
    iconName: "trash2",
    title: "Deep Vacuum Extraction",
    description:
      "Using professional-grade negative-pressure equipment, we extract years of accumulated dust, allergens, pet dander, mold spores, and debris from every supply and return duct in your home. Every register is covered and cleaned.",
  },
  {
    number: "03",
    iconName: "check-circle",
    title: "Sanitize, Seal & Report",
    description:
      "We apply EPA-registered antimicrobial treatment to inhibit future mold growth, seal any minor leaks discovered during cleaning, and provide a written report with before-and-after documentation of your duct system's condition.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "How often should ductwork be cleaned in Florida?",
    answer:
      "The EPA recommends duct cleaning every 3–5 years for most homes. In Florida, where AC runs year-round and high humidity accelerates mold and dust accumulation, we recommend every 3 years as a baseline. Homes with pets, allergy sufferers, smokers, or recent renovations may benefit from cleaning every 2 years.",
  },
  {
    question: "Does duct cleaning actually improve indoor air quality?",
    answer:
      "Yes — and in Florida it matters more than in most places. Florida's sealed, climate-controlled homes recirculate the same air continuously. Over time, ducts accumulate dust, pet dander, mold spores, pollen, and even pest debris. Every time your system runs, those contaminants are blown through every room. Professional duct cleaning removes those accumulated pollutants at the source.",
  },
  {
    question: "How long does a professional duct cleaning take?",
    answer:
      "A typical single-family home duct cleaning takes 3–5 hours depending on the size of the home and the number of registers. Larger homes or systems with significant contamination may take 6–8 hours. We'll give you a time estimate before we begin.",
  },
  {
    question: "Is duct cleaning worth it if my AC is already running fine?",
    answer:
      "Absolutely. Your AC may cool just fine while your ducts are loaded with allergens, mold, and debris — it's an air quality issue, not just an efficiency issue. Clean ducts also reduce the amount of dust that accumulates on surfaces in your home, reduce the workload on your air filter, and help your HVAC system run more efficiently.",
  },
  {
    question: "Will duct cleaning remove mold from my ducts?",
    answer:
      "Professional duct cleaning combined with antimicrobial treatment will remove and kill existing mold in accessible ducts. However, if mold growth is extensive or related to an ongoing moisture problem — like a leaking air handler or improperly insulated ducts — the moisture source must be addressed first to prevent regrowth. We'll identify any moisture issues during our inspection.",
  },
  {
    question: "How much does duct cleaning cost in Orlando?",
    answer:
      "Duct cleaning for a typical Orlando home ranges from $300 to $700 depending on home size, number of registers, and degree of contamination. Additional services like antimicrobial treatment or minor duct sealing may add to the cost. We provide a detailed quote after inspection with no hidden charges.",
  },
];

export default function DuctCleaningPage() {
  return (
    <ServicePageTemplate
      title="Duct Cleaning"
      headline="Professional Duct Cleaning for Orlando Homes"
      subheadline="Florida's year-round AC use means your ducts can harbor years of dust, mold, and allergens. Our professional duct cleaning service removes contaminants at the source — improving air quality and HVAC efficiency."
      iconName="wind"
      included={included}
      signs={signs}
      process={processSteps}
      faqs={faqs}
      jsonLd={jsonLd}
      relatedServices={[
        { name: "Indoor Air Quality", href: "/services/indoor-air-quality" },
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
