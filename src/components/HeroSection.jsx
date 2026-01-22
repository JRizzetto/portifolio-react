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
            src="/projects/minha-foto-img-2.png"
            alt="Minha-foto"
            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto max-w-full md:max-w-xs lg:max-w-none max-h-110 object-contain mt-12"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-0.5">
            <span className="opacity-0 animate-fade-in">Olá, Eu sou </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Jefferson
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
              Rizzetto
            </span>
          </h1>
          <h2 className="text-1xl md:text-2xl">
            Desenvolvedor Front-end com experiência em aplicações Full Stack
          </h2>

          {/* Versão reduzida: visível só em telas menores que 640px */}
          <p className="text-base text-muted-foreground mx-auto block sm:hidden">
            Desenvolvedor focado em criar interfaces modernas, funcionais e bem
            estruturadas, utilizando React e JavaScript.
          </p>

          {/* Versão completa: visível a partir de 640px */}
          <p className="text-lg md:text-xl text-muted-foreground mx-auto hidden sm:block">
            Tenho experiência prática no desenvolvimento de aplicações front-end
            integradas a APIs, além de projetos full stack com Node.js e MySQL,
            sempre buscando código limpo, boa experiência do usuário e soluções
            reais.
          </p>

          <div className="opacity-0 animate-fade-in-delay-4 flex flex-col items-center">
            <a href="#projects" className="cosmic-button m-1">
              Veja meus trabalhos
            </a>
            <a href="#contact" className="cosmic-button m-1">
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-0">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
