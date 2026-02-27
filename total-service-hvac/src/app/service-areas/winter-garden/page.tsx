import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import type { FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "HVAC Services in Winter Garden, FL | Total Service Air Conditioning",
  description:
    "Expert AC repair, installation, and maintenance in Winter Garden, FL. Serving Horizon West, Historic Downtown, Hamlin, and surrounding communities. Call (407) 617-3510.",
};

const faqs: FAQItem[] = [
  {
    question: "Do you service the newer homes in Horizon West and Hamlin?",
    answer:
      "Absolutely. Horizon West and Hamlin are among our most active service areas. New construction homes often have builder-grade HVAC systems that benefit greatly from professional maintenance in the first few years. We service all makes and models, including the systems most commonly installed in Winter Garden's newer communities.",
  },
  {
    question: "How does the new construction boom in Winter Garden affect HVAC needs?",
    answer:
      "Winter Garden is one of Florida's fastest-growing cities, and new construction presents unique HVAC considerations. Builder-grade equipment is often sized for minimum code compliance rather than optimal comfort. We frequently help Horizon West and Hamlin homeowners upgrade to more efficient systems, add zoning, or address comfort issues caused by original installation decisions.",
  },
  {
    question: "Can you help with HVAC in the older historic homes near Plant Street?",
    answer:
      "Yes — older homes near Historic Downtown Winter Garden on Plant Street present different challenges: older ductwork, limited attic space, and aging systems that may use discontinued refrigerants. Our technicians are experienced in retrofitting modern, efficient HVAC equipment into older Florida homes while respecting the original architecture.",
  },
  {
    question: "What's the best HVAC maintenance schedule for Winter Garden homes?",
    answer:
      "We recommend two professional tune-ups per year for Winter Garden homes: one in March or April before the intense summer heat arrives, and one in October after the cooling season winds down. Florida's mild winters mean heating systems still need attention, and catching efficiency problems before summer saves significantly on energy bills.",
  },
  {
    question: "How quickly can you respond to an emergency AC call in Winter Garden?",
    answer:
      "Because our team is based in nearby Apopka, we can typically reach Winter Garden within 30–60 minutes for emergency calls. We prioritize same-day service for all Winter Garden customers and aim to have urgent repairs completed the same day you contact us.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://totalserviceacandheat.com/service-areas/winter-garden",
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
    name: "Winter Garden",
    addressRegion: "FL",
  },
  priceRange: "$$",
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
};

export default function WinterGardenPage() {
  return (
    <AreaPageTemplate
      cityName="Winter Garden"
      state="FL"
      heroTitle="HVAC Services in Winter Garden, FL — Call Today"
      introParagraph="Winter Garden has transformed over the past decade into one of Central Florida's most desirable communities. From the charming brick streets and restored storefronts of Historic Downtown and Plant Street to the expansive master-planned neighborhoods of Horizon West, Hamlin, and Stoneybrook West, Winter Garden offers a diverse mix of homes — each with its own HVAC demands. The city's rapid growth means many residents live in newer construction where builder-grade systems are common, while others near Historic Downtown maintain older homes that require careful retrofitting. Total Service Air Conditioning & Heating understands both sides of Winter Garden — and every type of HVAC system found within it. Florida summers don't discriminate between old and new construction, and neither do we: we bring the same professional expertise to every home we serve."
      neighborhoods={[
        "Historic Downtown",
        "Horizon West",
        "Hamlin",
        "Stoneybrook West",
        "Winter Garden Village area",
        "Oakland",
        "Tildenville",
      ]}
      faqs={faqs}
      jsonLd={jsonLd}
      metaTitle="HVAC Services in Winter Garden, FL | Total Service Air Conditioning"
      metaDescription="Expert AC repair, installation, and maintenance in Winter Garden, FL. Serving Horizon West, Historic Downtown, Hamlin, and surrounding communities. Call (407) 617-3510."
    />
  );
}
