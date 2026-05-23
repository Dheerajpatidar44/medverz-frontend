import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import CourseGrid from "@/components/CourseGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamSection from "@/components/TeamSection";
import FAQ from "@/components/FAQ";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ExpertiseGrid />
        <CourseGrid />
        <WhyChooseUs />
        <TeamSection />
        <TestimonialCarousel />
        <FAQ />
      </main>
    </div>
  );
}
