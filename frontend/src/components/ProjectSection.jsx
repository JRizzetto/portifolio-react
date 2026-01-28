import { ArrowRight, ExternalLink, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: "blogApp",
    image: "/projects/capa-Blog-App-Full-Stack.png",
    tags: ["React", "Node.js", "Express", "MySQL", "JWT", "Axios", "Sass"],
    demoUrl:
      "https://www.linkedin.com/posts/jefferson-rizzetto_react-nodejs-javascript-activity-7417969621951148032-uBGN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-0z_QB32_lL5osxuoguiexZvYzQEMWvcQ",
    githubUrl:
      "https://github.com/JRizzetto/full-stack-projects/tree/main/blog-app",
    linkedin:
      "https://www.linkedin.com/posts/jefferson-rizzetto_react-nodejs-javascript-activity-7417969621951148032-uBGN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-0z_QB32_lL5osxuoguiexZvYzQEMWvcQ",
  },
  {
    id: "bookShop",
    image: "/projects/Book-Shop-img.png",
    tags: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MySQL",
      "REST API",
      "Deploy",
    ],
    demoUrl: "https://full-stack-projects-two-xi.vercel.app/",
    githubUrl:
      "https://github.com/JRizzetto/full-stack-projects/tree/main/book-shop",
    linkedin:
      "https://www.linkedin.com/posts/jefferson-rizzetto_book-shop-full-stack-activity-7411375529636917249-guBn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-0z_QB32_lL5osxuoguiexZvYzQEMWvcQ",
  },
  {
    id: "postSystem",
    image: "/projects/Sistema-Postagens-img.png",
    tags: [
      "React",
      "Node.js",
      "Express",
      "JWT",
      "Sequelize",
      "MySQL",
      "Vercel",
      "Render",
    ],
    demoUrl: "https://full-stack-post-list.vercel.app/login",
    githubUrl:
      "https://github.com/JRizzetto/full-stack-projects/tree/main/post-list",
    linkedin:
      "https://www.linkedin.com/posts/jefferson-rizzetto_meu-primeiro-projeto-full-stack-em-produ%C3%A7%C3%A3o-activity-7407026814860087296-sSgm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-0z_QB32_lL5osxuoguiexZvYzQEMWvcQ",
  },
  {
    id: "movieList",
    image: "/projects/Movie-List-img.png",
    tags: ["React", "Vite", "API REST", "React Router", "Context API", "CSS"],
    demoUrl: "https://movie-list-react-peach.vercel.app/",
    githubUrl: "https://github.com/JRizzetto/Movie-List-React",
    linkedin:
      "https://www.linkedin.com/posts/jefferson-rizzetto_reactjs-vitejs-apiintegration-activity-7338538306500005889-AAWV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-0z_QB32_lL5osxuoguiexZvYzQEMWvcQ",
  },
];

export const ProjectSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects.section.title")}{" "}
          <span className="text-primary">{t("projects.section.titleTwo")}</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.section.description")}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project) => {
            const title = t(`projects.items.${project.id}.title`);
            const description = t(`projects.items.${project.id}.description`);

            return (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/40 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">{title}</h3>

                  <p className="text-muted-foreground text-sm mb-4 text-justify">
                    {description}
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${title} demo`}
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${title} source code`}
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        aria-label={`${title} LinkedIn`}
                      >
                        <Linkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JRizzetto"
          >
            {t("projects.button")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
