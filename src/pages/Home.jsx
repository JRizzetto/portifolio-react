import ThemeToggle from "../components/ThemeToggle";
import { StartBackground } from "../components/StartBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen ">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StartBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Home;
