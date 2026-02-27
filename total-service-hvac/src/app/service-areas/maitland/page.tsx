import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import type { FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "HVAC Services in Maitland, FL | Total Service Air Conditioning",
  description:
    "Expert AC repair, installation, and maintenance in Maitland, FL. Serving Lake Lily, Lake Sybelia, Dommerich Hills, and surrounding Maitland communities. Call (407) 617-3510.",
};

const faqs: FAQItem[] = [
  {
    question: "Do older Maitland homes present any unique HVAC challenges?",
    answer:
      "Yes — Maitland has many established homes built in the 1960s through 1990s, and these properties often have aging ductwork, undersized returns, or equipment that hasn't kept pace with modern efficiency standards. We're experienced in assessing older homes and recommending the most cost-effective path forward — whether that's repairing existing systems, replacing ductwork, or upgrading to a modern high-efficiency system.",
  },
  {
    question: "How does Maitland's proximity to I-4 and urban Orlando affect AC needs?",
    answer:
      "Maitland's urban density and proximity to I-4 means homes can have higher outdoor ambient temperatures due to urban heat island effects, slightly elevated outdoor air pollution, and more particulates that can clog filters faster. We recommend more frequent filter changes and annual maintenance for Maitland homes to account for these factors.",
  },
  {
    question: "Is seasonal AC maintenance really necessary for Maitland homeowners?",
    answer:
      "In Florida — and Maitland specifically — seasonal maintenance is essential. Unlike northern states where HVAC systems get a rest in mild seasons, Central Florida's near year-round cooling and intermittent heating demands mean your equipment runs significantly more hours per year. Without regular maintenance, systems in Maitland typically fail 40–50% sooner than well-maintained equipment.",
  },
  {
    question: "What does an AC tune-up include and how much does it cost in Maitland?",
    answer:
      "Our standard AC maintenance visit includes inspecting and cleaning the evaporator and condenser coils, checking refrigerant levels, testing electrical components, lubricating moving parts, clearing the condensate drain, inspecting ductwork connections, and verifying thermostat calibration. Tune-up pricing starts at $89 for single systems. We'll quote exactly before we begin.",
  },
  {
    question: "Do you service commercial properties in the Maitland Center business district?",
    answer:
      "Yes. The Maitland Center office park and surrounding commercial properties along US-17-92 are within our service area. We handle light commercial HVAC including rooftop units, split systems, and multi-zone commercial installations. Call us to discuss your commercial property's needs.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://totalserviceacandheat.com/service-areas/maitland",
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
    name: "Maitland",
    addressRegion: "FL",
  },
  priceRange: "$$",
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
};

export default function MaitlandPage() {
  return (
    <AreaPageTemplate
      cityName="Maitland"
      state="FL"
      heroTitle="HVAC Services in Maitland, FL — Expert AC Repair & Installation"
      introParagraph="Maitland is one of Central Florida's most established communities — a blend of mid-century charm and modern convenience tucked between Winter Park and Altamonte Springs along the I-4 corridor. The neighborhood is anchored by the serene beauty of Lake Lily Park and Lake Sybelia, with established residential enclaves like Dommerich Hills and the Horatio area offering a mix of original and updated homes. This blend of property ages presents varied HVAC demands: older homes often need ductwork assessment, equipment upgrades, or refrigerant conversions, while newer properties benefit from high-efficiency equipment and smart controls. Maitland's proximity to I-4 and urban Orlando also means year-round traffic and activity that makes dependable, efficient air conditioning a daily necessity. Total Service Air Conditioning & Heating brings licensed expertise, honest pricing, and same-day availability to every Maitland home and business we serve."
      neighborhoods={[
        "Lake Lily",
        "Lake Sybelia",
        "Dommerich Hills",
        "Maitland Center",
        "Eatonville area",
        "Horatio area",
      ]}
      faqs={faqs}
      jsonLd={jsonLd}
      metaTitle="HVAC Services in Maitland, FL | Total Service Air Conditioning"
      metaDescription="Expert AC repair, installation, and maintenance in Maitland, FL. Serving Lake Lily, Lake Sybelia, Dommerich Hills, and surrounding Maitland communities. Call (407) 617-3510."
    />
  );
}
