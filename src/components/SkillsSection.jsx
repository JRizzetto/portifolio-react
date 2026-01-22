import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "React Router", category: "frontend" },
  { name: "Axios / Fetch API", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "RESTful APIs", category: "backend" },
  { name: "JWT (autenticação)", category: "backend" },

  // banco de dados
  { name: "MySQL", category: "database" },
  { name: "MongoDB", category: "database" },

  // Tools
  { name: "Git/GitHub", category: "tools" },
  { name: "Vite", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Insomnia", category: "tools" },
  { name: "Figma (leitura de layout)", category: "tools" },
  { name: "Deploy (Vercel, Render, Railway)", category: "tools" },

  // Estudando atualmente
  { name: "TypeScript", category: "estudando" },
  { name: "Next.js", category: "estudando" },
  { name: "Supabase", category: "estudando" },
  { name: "n8n", category: "estudando" },
];

const categories = ["all", "frontend", "backend", "tools", "database"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory,
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secundary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Minhas <span className="text-primary">Habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
