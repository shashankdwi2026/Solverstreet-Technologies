import { AboutSection } from "@/features/marketing/about-section";
import { ContactSection } from "@/features/marketing/contact-section";
import { HeroSection } from "@/features/marketing/hero-section";
import { IndustriesSection } from "@/features/marketing/industries-section";
import { PortfolioSection } from "@/features/marketing/portfolio-section";
import { PricingPreview } from "@/features/marketing/pricing-preview";
import { ServicesSection } from "@/features/marketing/services-section";
import { TestimonialsSection } from "@/features/marketing/testimonials-section";
import { WhyChooseUs } from "@/features/marketing/why-choose-us";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <IndustriesSection />
      <PortfolioSection />
      <WhyChooseUs />
      <PricingPreview />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
