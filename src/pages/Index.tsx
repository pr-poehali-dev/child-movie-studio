import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TeamSection from "@/components/TeamSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cinema-black">
      <Header />
      <HeroSection />
      <TeamSection />
      <FeaturedProjects />
      <Footer />
    </div>
  );
};

export default Index;
