import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { type FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Indoor Air Quality Services in Orlando, FL | Total Service",
  description:
    "Improve indoor air quality in your Orlando home with UV air purifiers, whole-home filtration, and humidity control. Breathe cleaner, healthier air. Call (407) 617-3510.",
  openGraph: {
    title: "Indoor Air Quality Services in Orlando, FL | Total Service",
    description:
      "UV purifiers, HEPA filtration, and humidity control for Orlando and Central Florida homes. Reduce allergens, mold, and airborne contaminants. Call (407) 617-3510.",
    url: "https://totalserviceacandheat.com/services/indoor-air-quality",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Indoor Air Quality",
      description:
        "Comprehensive indoor air quality solutions for homes and businesses in Orlando and Central Florida. UV germicidal lights, whole-home air purifiers, HEPA filtration, and humidity control.",
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
          name: "Why is indoor air quality a concern in Florida?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Florida homes are tightly sealed to hold the cold air in, which traps indoor pollutants — dust, mold spores, pet dander, VOCs, and pollen. Studies show indoor air can be 2–5 times more polluted than outdoor air. High humidity accelerates mold growth in ductwork and air handlers, making IAQ solutions especially valuable in Central Florida.",
          },
        },
        {
          "@type": "Question",
          name: "What does a UV air purifier do?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "UV germicidal lights are installed directly in your air handler and use ultraviolet light to neutralize bacteria, viruses, mold spores, and other biological contaminants before they circulate through your home. They're highly effective and require minimal maintenance — just an annual bulb replacement.",
          },
        },
      ],
    },
  ],
};

const included: string[] = [
  "Indoor air quality assessment — testing humidity, particle count, and VOCs",
  "UV germicidal light installation in the air handler",
  "Whole-home electronic air purifier installation and configuration",
  "HEPA or media filter upgrade for superior particle filtration",
  "Whole-home dehumidifier installation for humidity control",
  "Ventilator installation — fresh air exchange for tight homes",
  "Coil UV system for continuous mold prevention on the evaporator",
  "Written air quality report with before-and-after measurements",
];

const signs: string[] = [
  "Family members suffer from allergies, asthma, or respiratory issues",
  "Musty odors persist even after cleaning your home",
  "Visible mold growth near registers, vents, or the air handler",
  "Humidity levels above 60% inside the home even with AC running",
  "Excessive dust accumulates on surfaces within days of cleaning",
  "You or family members experience headaches or fatigue indoors",
];

const processSteps = [
  {
    number: "01",
    iconName: "search",
    title: "Air Quality Assessment",
    description:
      "We measure indoor humidity levels, test particle count, inspect ductwork and air handler for mold, and evaluate your current filtration system to identify the specific air quality challenges in your home.",
  },
  {
    number: "02",
    iconName: "settings",
    title: "Custom Solution Installation",
    description:
      "Based on what we find, we recommend and install the right combination of solutions — UV lights, air purifiers, dehumidifiers, upgraded filtration, or ventilation systems — all integrated seamlessly with your existing HVAC equipment.",
  },
  {
    number: "03",
    iconName: "check-circle",
    title: "Verify & Educate",
    description:
      "After installation we retest air quality, verify performance, walk you through system operation and maintenance schedules, and provide a written report so you can see the measurable improvement in your home's air.",
  },
];

const faqs: FAQItem[] = [
  {
    question: "Why is indoor air quality a particular concern in Florida?",
    answer:
      "Florida homes are sealed tightly against the heat, which traps indoor pollutants rather than allowing them to dissipate. Florida's high humidity — often 70–90% outdoors — drives moisture into homes and creates ideal conditions for mold growth in ductwork, air handlers, and building materials. The EPA estimates indoor air can be 2–5 times more polluted than outdoor air, and in Florida's climate that's an especially significant concern.",
  },
  {
    question: "What does a UV germicidal light system do?",
    answer:
      "UV germicidal lights are installed directly inside your air handler and use ultraviolet-C light to neutralize bacteria, viruses, mold spores, and other biological contaminants as air passes over the coil. They're particularly effective at preventing mold growth on the evaporator coil — one of the most common sources of musty odors in Florida homes. Annual bulb replacement keeps them operating at peak effectiveness.",
  },
  {
    question: "What's the difference between an air purifier and a better filter?",
    answer:
      "A media or HEPA filter captures particles by trapping them in a dense filter medium — it's highly effective against dust, pollen, and pet dander but doesn't address gases, VOCs, or biological contaminants. An air purifier (such as a bipolar ionization or PCO system) actively neutralizes a broader range of pollutants including bacteria, viruses, odors, and chemical compounds. Many homes benefit from both an upgraded filter and an active purification system.",
  },
  {
    question: "My AC runs constantly — why is my humidity still high?",
    answer:
      "An oversized AC system cools quickly but runs in short cycles, which doesn't allow enough time to dehumidify the air effectively. This is common in newer, high-efficiency systems installed in older Florida homes. A whole-home dehumidifier works independently of the cooling cycle to maintain indoor humidity at 45–55% — the ideal range for comfort and mold prevention.",
  },
  {
    question: "Will an air purifier help with pet allergies?",
    answer:
      "Yes — whole-home air purifiers combined with HEPA or media filter upgrades are highly effective at reducing pet dander, hair, and the proteins that trigger allergic reactions. Consistent filtration at the air handler level captures these allergens before they settle on surfaces or are re-breathed. Many pet owners report significant relief within weeks of installation.",
  },
  {
    question: "How much do indoor air quality improvements cost?",
    answer:
      "UV germicidal lights typically run $300–$600 installed. Whole-home electronic air purifiers range from $500–$1,200 installed depending on the system. Whole-home dehumidifiers run $1,200–$2,000 installed. Media filter upgrades are $150–$300. We'll recommend only what your home's specific air quality issues require — no upselling solutions you don't need.",
  },
];

export default function IndoorAirQualityPage() {
  return (
    <ServicePageTemplate
      title="Indoor Air Quality"
      headline="Breathe Cleaner Air in Your Orlando Home"
      subheadline="Florida's sealed, climate-controlled homes can trap dust, mold, allergens, and humidity. Our indoor air quality solutions — UV purifiers, HEPA filtration, and dehumidifiers — create a healthier home environment for your family."
      iconName="leaf"
      included={included}
      signs={signs}
      process={processSteps}
      faqs={faqs}
      jsonLd={jsonLd}
      relatedServices={[
        { name: "Duct Cleaning", href: "/services/duct-cleaning" },
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
