import ThemeToggle from "../components/ThemeToggle";
import { StartBackground } from "../components/StartBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";

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
      </main>

      {/* Footer */}
    </div>
  );
};

export default Home;
