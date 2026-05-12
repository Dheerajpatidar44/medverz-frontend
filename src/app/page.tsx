import TopStrip from "@/components/TopStrip";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import CourseGrid from "@/components/CourseGrid";
import StudyAbroad from "@/components/StudyAbroad";
import WhyChooseUs from "@/components/WhyChooseUs";
import TeamSection from "@/components/TeamSection";
import FAQ from "@/components/FAQ";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ExpertiseGrid />
        <CourseGrid />
        <StudyAbroad />
        <WhyChooseUs />
        <TeamSection />
        <TestimonialCarousel />
        <FAQ />
      </main>
    </div>
  );
}
