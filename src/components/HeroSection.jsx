import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="flex justify-center items-center">
          <img
            src="/projects/minha-foto-img.png"
            alt="Minha-foto"
            className="w-1/2 max-w-full sm:w-auto  mt-50px"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Olá, Eu sou </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Jefferson{" "}
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
              {" "}
              Rizzetto
            </span>
          </h1>

          {/* Versão reduzida: visível só em telas menores que 640px */}
          <p className="text-base text-muted-foreground mx-auto block sm:hidden">
            Bem-vindo ao meu portfólio pessoal, onde compartilho um pouco sobre
            mim, minhas habilidades e projetos.
          </p>

          {/* Versão completa: visível a partir de 640px */}
          <p className="text-lg md:text-xl text-muted-foreground mx-auto hidden sm:block">
            Bem-vindo ao meu portfólio pessoal, onde compartilho um pouco sobre
            mim, minhas habilidades e projetos. Estou me especializando em
            desenvolvimento front-end, com foco na criação de interfaces
            modernas, funcionais e bem estruturadas.
          </p>
          
          <div className="opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Veja meus trabalhos
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
