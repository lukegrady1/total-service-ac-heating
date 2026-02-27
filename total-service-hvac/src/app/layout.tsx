import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import FloatingChat from "@/components/FloatingChat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://totalserviceacandheat.com"),
  title: {
    template: "%s | Total Service Air Conditioning & Heating",
    default: "HVAC Services in Orlando, FL | Total Service Air Conditioning & Heating",
  },
  description:
    "Expert AC repair, installation & maintenance in Orlando and Central Florida. Licensed, insured, same-day service. Call (407) 617-3510.",
  keywords: [
    "HVAC Orlando",
    "AC repair Orlando",
    "air conditioning Orlando",
    "AC installation Central Florida",
    "Total Service Air Conditioning",
    "HVAC Apopka",
    "AC repair Winter Garden",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://totalserviceacandheat.com",
    siteName: "Total Service Air Conditioning and Heating LLC",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Total Service AC & Heating Orlando" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.4827535,
    longitude: -81.3427941,
  },
  openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
  areaServed: [
    "Orlando",
    "Winter Garden",
    "Apopka",
    "Windermere",
    "Maitland",
    "Altamonte Springs",
    "Ocoee",
    "Clermont",
    "Kissimmee",
  ],
  priceRange: "$$",
  sameAs: [
    "https://www.google.com/maps/place/Total+Service+Air+Conditioning+and+Heating+LLC",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        {/* Google Tag Manager — replace GTM-XXXXXXX with real ID */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){...})('GTM-XXXXXXX');` }} /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
        <FloatingChat />
      </body>
    </html>
  );
}
