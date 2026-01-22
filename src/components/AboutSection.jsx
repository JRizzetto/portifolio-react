import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Minha trajetória: da engenharia ao desenvolvimento web
            </h3>

            <p className="text-muted-foreground text-justify">
              Meu nome é Jefferson Wellington Bonfim Rizzetto e sou
              desenvolvedor front-end com sólida base em tecnologia e
              experiência prática no desenvolvimento de aplicações web.
            </p>

            <p className="text-muted-foreground text-justify">
              Sou formado em Engenharia Elétrica e iniciei minha trajetória
              profissional atuando com tecnologia e manutenção de computadores.
              Ao longo dos anos, também trabalhei em áreas que exigiram forte
              capacidade analítica com vendas governamentais, comunicação
              comercial e engenharia como responsável técnico.
              <br />
              Em 2024, decidi direcionar minha carreira definitivamente para o
              desenvolvimento de software, unindo lógica, criatividade e
              resolução de problemas. Desde então, venho me especializando em
              HTML, CSS, JavaScript e React, além de desenvolver projetos
              práticos integrando front-end com back-end em Node.js e bancos de
              dados COM MySQL.
              <br />
              <br />
              Atualmente, busco minha primeira oportunidade como desenvolvedor
              front-end, onde possa aplicar meus conhecimentos, evoluir
              tecnicamente e contribuir com produtos bem estruturados,
              performáticos e centrados na experiência do usuário.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Entre em contato
              </a>

              <a
                href="/Desenvolvedor-Web-Jefferson Rizzetto-Dez-25.pdf"
                target="_blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixe meu CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Desenvolvedor Web</h4>
                  <p className="text-muted-foreground">
                    Criando sites responsivos e aplicações modernas com foco em
                    performance e boas práticas.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Ui/UX Design</h4>
                  <p className="text-muted-foreground">
                    Desenvolvendo interfaces intuitivas e experiências que
                    colocam o usuário no centro.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Integração Front-end & Back-end
                  </h4>
                  <p className="text-muted-foreground">
                    Desenvolvimento de aplicações integradas utilizando APIs
                    REST, autenticação, consumo de dados e comunicação com
                    bancos de dados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
