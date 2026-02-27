import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Total Service Air Conditioning & Heating | Orlando HVAC Company",
  description:
    "Family-owned HVAC company serving Orlando and Central Florida with integrity and expertise. Licensed, NATE-certified technicians. Call (407) 617-3510.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
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
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
  areaServed: [
    "Orlando",
    "Winter Garden",
    "Apopka",
    "Windermere",
    "Maitland",
    "Altamonte Springs",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <AboutPageClient />
    </>
  );
}
