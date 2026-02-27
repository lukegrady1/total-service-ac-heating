import type { Metadata } from "next";
import TrustBar from "@/components/TrustBar";
import ReviewsSection from "@/components/ReviewsSection";
import HeroSection from "@/components/HeroSection";
import HomeServicesGrid from "@/components/HomeServicesGrid";
import HomeWhyUs from "@/components/HomeWhyUs";
import HomeProcess from "@/components/HomeProcess";
import HomeServiceAreas from "@/components/HomeServiceAreas";
import HomeBlogPreview from "@/components/HomeBlogPreview";
import HomeLeadSection from "@/components/HomeLeadSection";
import HomeEmergencyBanner from "@/components/HomeEmergencyBanner";

export const metadata: Metadata = {
  title: "HVAC Services in Orlando, FL | Total Service Air Conditioning & Heating",
  description:
    "Expert AC repair, installation & maintenance in Orlando and Central Florida. Licensed, insured, same-day service available. Call (407) 617-3510 for a free estimate.",
  openGraph: {
    title: "Total Service Air Conditioning & Heating — Orlando's Trusted HVAC Experts",
    description:
      "Fast, reliable AC repair, installation & maintenance across Central Florida. Same-day service available.",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeEmergencyBanner />
      <TrustBar />
      <HomeServicesGrid />
      <HomeWhyUs />
      <HomeProcess />
      <HomeServiceAreas />
      <ReviewsSection />
      <HomeLeadSection />
      <HomeBlogPreview />
    </>
  );
}
