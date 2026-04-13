import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ListingsSection from "@/components/ListingsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ListingsSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <StatsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
