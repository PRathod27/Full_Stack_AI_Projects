import BackgroundGradient from "@/components/landing/background-gradient";
import CtaSection from "@/components/landing/cta-section";
import FeaturesSection from "@/components/landing/features-section";
import HeroSection from "@/components/landing/hero-section";
import HowItWorks from "@/components/landing/how-it-works-section";
import PricingSection from "@/components/landing/pricing-section";
import Footer from "@/components/layout/footer";
import { PricingTable } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <BackgroundGradient />
      <div className="relative z-10">
        <HeroSection />
        <FeaturesSection />
        <HowItWorks />
        <PricingSection />
        <CtaSection />
        <Footer />
      </div>
    </div>
  );
}
