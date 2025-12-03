import HeroBanner from "../components/HeroBanner";
import HomeProductsPreview from "../components/HomeProductsPreview";
import ServiceIntro from "../components/ServiceIntro";
import AboutPreview from "../components/AboutPreview";
import VisionMission from "../components/VisionMission";
import LocationSection from "@/components/LocationSection";
import WhyChooseUs from "../components/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ServiceIntro />
      <AboutPreview />
      <HomeProductsPreview />
      <VisionMission />
      <LocationSection />
      <WhyChooseUs />
    </>
  );
}
