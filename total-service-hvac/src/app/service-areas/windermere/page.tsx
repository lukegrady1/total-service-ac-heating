import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import type { FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "HVAC Services in Windermere, FL | Total Service Air Conditioning",
  description:
    "Premium HVAC service for Windermere, FL luxury homes. Expert AC repair, high-efficiency system installation, and maintenance for the Butler Chain of Lakes community. Call (407) 617-3510.",
};

const faqs: FAQItem[] = [
  {
    question: "Do you have experience servicing HVAC systems in large custom Windermere homes?",
    answer:
      "Yes — Windermere's large custom homes and estate properties are among our most complex and rewarding projects. Multi-zone systems, high-efficiency variable-speed equipment, and sophisticated controls are common in this area. Our technicians are trained on premium equipment brands including Trane, Carrier, Lennox, and Daikin, and understand the specific challenges of conditioning large-square-footage Florida homes efficiently.",
  },
  {
    question: "What HVAC options are best for large Windermere luxury homes?",
    answer:
      "For Windermere's estate-sized properties, we typically recommend multi-zone systems with variable refrigerant flow (VRF) or high-efficiency multi-stage heat pumps with zoning controls. These systems provide precise temperature control throughout large floor plans while maximizing energy efficiency. We also frequently install whole-home air purification and dehumidification for lakeside properties where humidity management is critical.",
  },
  {
    question: "How does proximity to the Butler Chain of Lakes affect HVAC systems?",
    answer:
      "Lakeside homes in Windermere face elevated humidity levels year-round, which accelerates condensate issues, promotes mold growth in ductwork, and strains dehumidification capacity. We recommend homes near the lake install whole-home dehumidifiers and UV air purification systems in addition to regular maintenance to address these specific environmental conditions.",
  },
  {
    question: "Do you offer financing for high-efficiency system installations in Windermere?",
    answer:
      "Yes. We understand that upgrading to a premium, properly sized HVAC system for a Windermere estate can represent a significant investment. We work with financing partners to offer flexible payment plans that make high-efficiency systems accessible. These systems typically pay for themselves in energy savings within 5–8 years while dramatically improving comfort. Visit our Financing page or call us for current options.",
  },
  {
    question: "Can you service Isleworth and Keene's Pointe properties?",
    answer:
      "Absolutely. We regularly service homes in Isleworth, Keene's Pointe, Lake Butler, Lake Down, Windermere Downs, and all of Windermere's gated and private communities. Our technicians are professional, uniformed, and respectful of your property — we understand the standards expected in these communities.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://totalserviceacandheat.com/service-areas/windermere",
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
    name: "Windermere",
    addressRegion: "FL",
  },
  priceRange: "$$",
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
};

export default function WindermerePage() {
  return (
    <AreaPageTemplate
      cityName="Windermere"
      state="FL"
      heroTitle="Premium HVAC Services in Windermere, FL"
      introParagraph="Windermere is one of Central Florida's most prestigious communities — a lakeside enclave of custom estates, gated neighborhoods, and luxury properties surrounding the beautiful Butler Chain of Lakes. Residents of Isleworth, Keene's Pointe, Lake Down, and Windermere Downs expect nothing short of excellence, and Total Service Air Conditioning & Heating delivers exactly that. Premium homes demand premium HVAC expertise: properly sized multi-zone systems, high-efficiency variable-speed equipment, whole-home dehumidification, and air purification that meets the specific challenges of lakeside Florida living. We're located just minutes away in Apopka — close enough for rapid response, experienced enough for the most demanding properties. Windermere homeowners trust us because we understand that in a home of this caliber, comfort and air quality aren't optional, and mediocre service is not acceptable. Neighboring communities like Dr. Phillips and Bay Hill also benefit from our premium service approach."
      neighborhoods={[
        "Butler Chain of Lakes",
        "Isleworth",
        "Lake Down",
        "Keene's Pointe",
        "Lake Butler",
        "Windermere Downs",
      ]}
      faqs={faqs}
      jsonLd={jsonLd}
      metaTitle="HVAC Services in Windermere, FL | Total Service Air Conditioning"
      metaDescription="Premium HVAC service for Windermere, FL luxury homes. Expert AC repair, high-efficiency system installation, and maintenance for the Butler Chain of Lakes community. Call (407) 617-3510."
    />
  );
}
