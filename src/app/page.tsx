import { HomeHero } from "@/components/marketing/home-hero";
import { HomeStats } from "@/components/marketing/home-stats";
import { HomeFeatures } from "@/components/marketing/home-features";
import { HomeCurriculumPreview } from "@/components/marketing/home-curriculum-preview";
import { HomeCbtShowcase } from "@/components/marketing/home-cbt-showcase";
import { HomeTestimonials } from "@/components/marketing/home-testimonials";
import { HomePricingPreview } from "@/components/marketing/home-pricing-preview";
import { HomeCta } from "@/components/marketing/home-cta";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStats />
      <HomeFeatures />
      <HomeCurriculumPreview />
      <HomeCbtShowcase />
      <HomeTestimonials />
      <HomePricingPreview />
      <HomeCta />
    </>
  );
}
