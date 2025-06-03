import { ArrowRight, ExternalLink, Github, Linkedin } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Spotify Fullstack",
    description:
      "Este é um projeto inspirado no Spotify, onde é possível visualizar artistas e músicas populares, além de escutar suas faixas preferidas.",
    image: "/projects/image1.png",
    tags: [
      "React",
      "Vite",
      "JavaScript",
      "Node.js",
      "Express",
      "MongoDB Atlas",
    ],
    demoUrl: "https://github.com/JRizzetto/spotify-fullstack",
    githubUrl: "https://github.com/JRizzetto/spotify-fullstack",
    linkedin:
      "https://www.linkedin.com/posts/jefferson-rizzetto_desenvolvimentoweb-reactjs-nodejs-activity-7328391060525617152-h_ow?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-0z_QB32_lL5osxuoguiexZvYzQEMWvcQ",
  },

  {
    id: 2,
    title: "Gerenciamento de Eventos Fullstack",
    description:
      "Neste projeto os usuários podem, definir orçamento, escolher serviços como DJ, segurança, decoração e muito mais, tudo de forma simples e intuitiva. ",
    image: "/projects/image2.png",
    tags: [
      "React",
      "Vite",
      "React Router DOM",
      "Axios",
      "React Toastify",
      "Node.js",
      "Express",
      "MongoDB & Mongoose",
      "Cors",
    ],
    demoUrl:
      "https://github.com/JRizzetto/React-JS-basico-ao-avan-ado/tree/main/13_PARTY-TIME",
    githubUrl:
      "https://github.com/JRizzetto/React-JS-basico-ao-avan-ado/tree/main/13_PARTY-TIME",
    linkedin:
      "https://www.linkedin.com/posts/jefferson-rizzetto_tecnologiasusadas-react-nodejs-activity-7323735367679901696-vzAs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-0z_QB32_lL5osxuoguiexZvYzQEMWvcQ",
  },

  {
    id: 3,
    title: "Tela de Login",
    description:
      "Tela de Login com React + Simulação de Backend - Tela de login moderna utilizando tecnologias do ecossistema front-end. O objetivo era ir além do visual e simular uma autenticação real com backend usando o JSON Server.",
    image: "/projects/image3.png",
    tags: ["React", "Vite", "React Icons", "CSS3 ", "JSON Server"],
    demoUrl: "https://tela-de-login-eight-theta.vercel.app/",
    githubUrl:
      "https://github.com/JRizzetto/React-JS-basico-ao-avan-ado/tree/main/6_TELA_DE_LOGIN/tela-login",
    linkedin:
      "https://www.linkedin.com/posts/jefferson-rizzetto_reactjs-vite-frontend-activity-7317909442220515329-v6B3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-0z_QB32_lL5osxuoguiexZvYzQEMWvcQ",
  },

  {
    id: 4,
    title: "Portifolio Fullstack + agentes de IA",
    description:
      "O projeto-portifolio-full-stack é uma aplicação full stack que integra tecnologias populares do mercado para criar uma vitrine digital das habilidades e projetos de um desenvolvedor, a aplicação incorpora agentes de IA inteligentes que têm acesso completo ao currículo, repositórios do GitHub e histórico do profissional.",
    image: "/projects/image4.png",
    tags: [
      "React",
      "Next.js",
      "NestJS",
      "Prisma",
      "Supabase",
      "TailwindCSS",
      "n8n",
    ],
    demoUrl: "https://github.com/JRizzetto/projeto-portifolio-full-stack",
    githubUrl: "https://github.com/JRizzetto/projeto-portifolio-full-stack",
    linkedin:
      "https://www.linkedin.com/posts/jefferson-rizzetto_devfullstack-nextjs-nestjs-activity-7310375517445095425-Fc5B?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-0z_QB32_lL5osxuoguiexZvYzQEMWvcQ",
  },

  {
    id: 5,
    title: "Instagram Clone Page do Naruto",
    description:
      "Recentemente, desenvolvi uma página Front-End inspirada no Instagram e com personagens do Naruto como usuários, trazendo elementos e funcionalidades essenciais da plataforma. O projeto foi feito com HTML, CSS e JavaScript totalamente responsiva.",
    image: "/projects/image5.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://jrizzetto.github.io/insta-clone-ON/",
    githubUrl: "https://github.com/JRizzetto/insta-clone-ON",
    linkedin:
      "https://www.linkedin.com/posts/jefferson-rizzetto_programaaexaeto-codificaaexaeto-frontend-activity-7307780238879375360-6tG2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-0z_QB32_lL5osxuoguiexZvYzQEMWvcQ",
  },

    {
    id: 6,
    title: "YouTube Page Clone",
    description:
      "Desenvolvido com foco em front-end, essa aplicação recria a interface do YouTube utilizando JavaScript, HTML, CSS e API (Application Programming Interface), garantindo uma experiência totalmente responsiva e com diversas funcionalidades inspiradas no YouTube.",
    image: "/projects/image6.png",
    tags: ["HTML", "CSS", "JavaScript", "API"],
    demoUrl: "https://github.com/JRizzetto/clones-page/tree/main/youtube-clone",
    githubUrl: "https://github.com/JRizzetto/clones-page/tree/main/youtube-clone",
    linkedin:
      "https://www.linkedin.com/posts/jefferson-rizzetto_javascript-frontenddevelopment-webdevelopment-activity-7303467028760137728-IH53?utm_source=share&utm_medium=member_desktop&rcm=ACoAAB-0z_QB32_lL5osxuoguiexZvYzQEMWvcQ",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Principais <span className="text-primary">Projetos</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aqui estão os meus projetos desenvolvidos ao longo desses meses. Cada
          projeto foi cuidadosamente criado com atenção, detalhe, performance e
          foco na experiência do usuário.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/40 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-justify">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.linkedin}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/JRizzetto"
          >
            Verifique meu GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
