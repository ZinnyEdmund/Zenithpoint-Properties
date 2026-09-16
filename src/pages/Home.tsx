import Hero from "@/components/home/Hero";
import PropertySearch from "@/components/home/PropertySearch";
import ServiceList from "@/components/home/ServiceList";
import ProjectShowcase from "@/components/home/ProjectShowcase";
import PropertyGrid from "@/components/home/PropertyGrid";
import WhyZenith from "@/components/home/WhyZenith";
import DreamMoment from "@/components/home/DreamMoment";
import DevelopmentStory from "@/components/home/DevelopmentStory";
import WalkthroughSection from "@/components/home/WalkthroughSection";
import PeopleSection from "@/components/home/PeopleSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <PropertySearch />
      <ServiceList />
      <ProjectShowcase />
      <PropertyGrid />
      <WhyZenith />
      <DreamMoment />
      <DevelopmentStory />
      <WalkthroughSection />
      <PeopleSection />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
