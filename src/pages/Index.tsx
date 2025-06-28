import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import TeamSection from "@/components/TeamSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-cinema-black">
      <Header />
      <HeroSection />
      <HistorySection />
      <TeamSection />
      <FeaturedProjects />
      <Footer />
    </div>
  );
};

export default Index;
