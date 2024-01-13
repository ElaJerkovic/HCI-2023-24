import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import CtaSection from "./_components/CtaSection";
import PromotionSection from "./_components/PromotionSection";
import FeaturedSection from "./_components/FeaturedSection";
import { seedSanityData } from "./lib/seed";

export default async function Home() {
  await seedSanityData();
  return (
    <main className="flex flex-col justify-between items-center">
      <HeroSection />
      <FeaturesSection/>
      <CtaSection/>
      <PromotionSection/>
      <FeaturedSection/>
    </main>
  );
}