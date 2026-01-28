import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const navItems = [
  { key: "nav.home", href: "#hero" },
  { key: "nav.about", href: "#about" },
  { key: "nav.skills", href: "#skills" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isPT = i18n.language === "pt-BR";

  const handleLanguageToggle = () => {
    const next = i18n.language === "pt-BR" ? "en" : "pt-BR";
    i18n.changeLanguage(next);
    localStorage.setItem("language", next);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 bg-background",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4 items-center justify-center">
          <a className="text-xl font-bold text-primary flex items-center">
            <span className="relative z-10">
              <span className="text-glow text-foreground">Jefferson</span>{" "}
              Rizzetto
            </span>
          </a>
          <button
            type="button"
            onClick={handleLanguageToggle}
            className="relative flex w-36 items-center rounded-full border border-gray-300 bg-white p-1 transition-colors"
            aria-label="Toggle language"
          >
            {/* Sliding background */}
            <span
              className={`absolute left-1 top-1 h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full bg-[#7969C9] transition-transform duration-300 ${
                isPT ? "translate-x-0" : "translate-x-full"
              }`}
            />

            {/* Labels */}
            <span
              className={`relative z-10 w-1/2 text-center text-sm font-medium transition-colors ${
                isPT ? "text-white" : "text-gray-700"
              }`}
            >
              PT-BR
            </span>

            <span
              className={`relative z-10 w-1/2 text-center text-sm font-medium transition-colors ${
                !isPT ? "text-white" : "text-gray-700"
              }`}
            >
              EN-US
            </span>
          </button>
        </div>
        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {t(item.key)}
            </a>
          ))}
        </div>
        {/* mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none",
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
