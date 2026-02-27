import type { Metadata } from "next";
import AreaPageTemplate from "@/components/AreaPageTemplate";
import type { FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "AC Repair & HVAC Services in Orlando, FL | Total Service Air Conditioning",
  description:
    "Expert AC repair, installation, and maintenance in Orlando, FL. Total Service Air Conditioning & Heating — licensed, local, same-day service. Call (407) 617-3510.",
};

const faqs: FAQItem[] = [
  {
    question: "Do you offer emergency AC repair in Orlando on nights and weekends?",
    answer:
      "Yes. We provide emergency HVAC service throughout Orlando 7 days a week. Florida heat doesn't follow business hours, and neither do we. Call (407) 617-3510 at any time and our on-call team will respond promptly — typically within 1–2 hours for urgent situations.",
  },
  {
    question: "How fast can you get to my Orlando home for same-day AC service?",
    answer:
      "Most Orlando service calls are scheduled within 2–4 hours of your call, depending on time of day and current demand. During peak summer months, we prioritize households with elderly residents, young children, or medical conditions. We'll always give you an accurate arrival window upfront.",
  },
  {
    question: "What are the most common AC problems you see in Orlando homes?",
    answer:
      "The most frequent issues we repair in Orlando are refrigerant leaks (accelerated by Florida's humidity), clogged condensate drain lines (a result of constant cooling cycling), failing capacitors, dirty evaporator and condenser coils, and thermostat malfunctions. Florida's year-round heat means AC systems work harder and wear faster than in northern states.",
  },
  {
    question: "How much does AC repair typically cost in Orlando?",
    answer:
      "AC repair costs in Orlando vary based on the issue. Minor repairs such as capacitor replacement typically run $150–$350. Refrigerant recharges range from $200–$600 depending on refrigerant type. Major repairs like compressor replacement can run $800–$1,800. We always provide a written quote before any work begins — no surprises.",
  },
  {
    question: "What areas of Orlando do you specifically cover?",
    answer:
      "We serve all of Greater Orlando including Downtown, Dr. Phillips, Lake Nona, Baldwin Park, Winter Park, Thornton Park, Millenia, MetroWest, College Park, Curry Ford West, Conway, Pine Hills, and surrounding communities. If you're unsure whether we reach your address, call us at (407) 617-3510.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://totalserviceacandheat.com/service-areas/orlando",
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
    name: "Orlando",
    addressRegion: "FL",
  },
  priceRange: "$$",
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
};

export default function OrlandoPage() {
  return (
    <AreaPageTemplate
      cityName="Orlando"
      state="FL"
      heroTitle="HVAC Services in Orlando, FL — Fast & Reliable"
      introParagraph="Orlando is one of Central Florida's most diverse cities — from the high-rise condominiums of Downtown Orlando to the luxury estates of Dr. Phillips and the master-planned communities of Lake Nona. Whether you live near the UCF area, Baldwin Park, or the lakefront neighborhoods of Thornton Park, one thing every Orlando home has in common is the relentless Florida humidity. Year-round heat and moisture place extraordinary demands on HVAC systems, making professional maintenance and prompt repairs essential. Total Service Air Conditioning & Heating has been keeping Orlando homes comfortable for over 15 years — our technicians know the nuances of cooling large Florida homes and managing the indoor humidity challenges unique to the Orlando climate."
      neighborhoods={[
        "Downtown Orlando",
        "Dr. Phillips",
        "Lake Nona",
        "Baldwin Park",
        "Winter Park",
        "Thornton Park",
        "Millenia",
        "MetroWest",
      ]}
      faqs={faqs}
      jsonLd={jsonLd}
      metaTitle="AC Repair & HVAC Services in Orlando, FL | Total Service Air Conditioning"
      metaDescription="Expert AC repair, installation, and maintenance in Orlando, FL. Total Service Air Conditioning & Heating — licensed, local, same-day service. Call (407) 617-3510."
    />
  );
}
