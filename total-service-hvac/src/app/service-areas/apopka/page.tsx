import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import type { FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "HVAC Services in Apopka, FL | Total Service Air Conditioning & Heating",
  description:
    "Apopka's trusted local HVAC company. Total Service Air Conditioning & Heating is based in Apopka at 2809 Pine Ave — fastest response times in Orange County. Call (407) 617-3510.",
};

const faqs: FAQItem[] = [
  {
    question: "Is Total Service actually based in Apopka?",
    answer:
      "Yes — our office is located right here in Apopka at 2809 Pine Ave, Apopka, FL 32703. We're not a franchise with a call center somewhere else. We're your neighbors, and being locally based means we can reach most Apopka addresses within 20–30 minutes for emergency service. Supporting our business supports our community.",
  },
  {
    question: "Do you service the Wekiwa Springs and Rock Springs Ridge areas?",
    answer:
      "Absolutely. We serve all of Apopka including the Wekiwa Springs area, Rock Springs Ridge, Errol Estate, Bear Lake, and the rural properties toward Plymouth and Zellwood. If your address is in or around Apopka, we're your local HVAC company.",
  },
  {
    question: "How quickly can you respond to an AC breakdown in Apopka?",
    answer:
      "Because we're based in Apopka, our response times are among the fastest in Central Florida. For emergency calls, we're typically on-site within 30–45 minutes. For scheduled same-day service, most Apopka appointments are confirmed within the same morning you call.",
  },
  {
    question: "What makes HVAC in Apopka different from other areas?",
    answer:
      "Apopka has a mix of property types — from older ranch-style homes and established neighborhoods like Errol Estate to newer subdivisions near Rock Springs Ridge and commercial properties along the US-441 corridor. Our familiarity with local home styles, common duct configurations, and the equipment brands prevalent in this area makes us uniquely efficient at diagnosing and resolving HVAC issues for Apopka homeowners.",
  },
  {
    question: "Do you offer any local discounts or community programs for Apopka residents?",
    answer:
      "As a locally owned company based in Apopka, we're invested in this community. We regularly offer seasonal promotions for AC tune-ups and system check-ups, particularly before the summer cooling season. We also provide discounts for seniors and military families. Call us or check our website for current promotions.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://totalserviceacandheat.com/service-areas/apopka",
  name: "Total Service Air Conditioning and Heating LLC",
  url: "https://totalserviceacandheat.com",
  telephone: "+1-407-617-3510",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2809 Pine Ave",
    addressLocality: "Apopka",
    addressRegion: "FL",
    postalCode: "32703",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Apopka",
    addressRegion: "FL",
  },
  priceRange: "$$",
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
};

export default function ApopkaPage() {
  return (
    <AreaPageTemplate
      cityName="Apopka"
      state="FL"
      heroTitle="HVAC Services in Apopka, FL — Your Local AC Experts"
      introParagraph="Apopka is home — literally. Total Service Air Conditioning & Heating is headquartered right here at 2809 Pine Ave in Apopka, FL. When you call us for HVAC service, you're not reaching a call center or a franchise — you're calling your neighbors. That matters. It means faster response times, genuine accountability to the community, and a team that cares about the reputation they've built locally. From the nature-rich Wekiwa Springs area and the established neighborhoods of Errol Estate to the growing Rock Springs Ridge community and the rural stretches near Bear Lake, Zellwood, and Plymouth, we've serviced homes across every corner of Apopka. Florida's intense heat and humidity makes reliable air conditioning a necessity, not a luxury — and as your local HVAC experts, we take that responsibility seriously."
      neighborhoods={[
        "Errol Estate",
        "Rock Springs Ridge",
        "Wekiwa Springs area",
        "Bear Lake",
        "Zellwood",
        "Plymouth",
      ]}
      faqs={faqs}
      jsonLd={jsonLd}
      metaTitle="HVAC Services in Apopka, FL | Total Service Air Conditioning & Heating"
      metaDescription="Apopka's trusted local HVAC company. Total Service Air Conditioning & Heating is based in Apopka at 2809 Pine Ave — fastest response times in Orange County. Call (407) 617-3510."
    />
  );
}
