import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Apaixonado por Web Developer e criação de tecnologia
            </h3>

            <p className="text-muted-foreground">
              Meu nome é Jefferson Wellington Bonfim Rizzetto, tenho 35 anos e
              uma paixão por tecnologia que me acompanha desde a infância. Desde
              os 10 anos, sempre fui fascinado por computadores, o que
              influenciou minha trajetória profissional. Um dos meus primeiros
              empregos foi na área de montagem e manutenção de computadores, o
              que solidificou ainda mais meu interesse pela área de tecnologia.
            </p>

            <p className="text-muted-foreground">
              Formado em Engenharia Elétrica pela UNIP, atuei como engenheiro e
              responsável técnico por alguns anos, mas em Junho de 2024 decidi
              me reinventar. A busca por uma área alinhada ao que realmente
              gosto me levou à programação, onde encontrei a oportunidade de
              unir criatividade, lógica e inovação. Hoje, sou um desenvolvedor
              front-end iniciante, com experiência em HTML, CSS, JavaScript,
              Git, GitHub e React JS. Tenho um espírito curioso e busco aprender
              constantemente novas linguagens e ferramentas. Meu objetivo é
              expandir e explorar tudo o que a programação pode oferecer
              enquanto contribuo para criar soluções funcionais e centradas no
              usuário. Estou à procura da minha primeira oportunidade na área,
              onde posso trazer minha bagagem de vida, dedicação e vontade de
              aprender para ajudar equipes e projetos a crescerem.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
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
                    Criando sites responsivos e aplicações com frameworks
                    modernos.
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
                    Design interfaces de uso intuitivas e experiência de usuário
                    perfeita
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
                    Gerenciamento de projetos
                  </h4>
                  <p className="text-muted-foreground">
                    Liderando projetos da concepção à conclusão com metodologias
                    ágeis
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
