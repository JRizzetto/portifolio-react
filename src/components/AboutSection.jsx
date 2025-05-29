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
              Minha trajetória: da engenharia à criação com tecnologia
            </h3>

            <p className="text-muted-foreground">
              Meu nome é Jefferson Wellington Bonfim Rizzetto, tenho 35 anos e
              sou apaixonado por tecnologia desde a infância. Aos 10 anos, já
              era fascinado por computadores, o que influenciou diretamente
              minha carreira. Um dos meus primeiros empregos foi na montagem e
              manutenção de computadores, consolidando esse interesse. No
              entanto, a vida acabou me levando por outros caminhos.
            </p>

            <p className="text-muted-foreground">
              Sou formado em Engenharia Elétrica pela UNIP e atuei por alguns
              anos como engenheiro e responsável técnico. A maior parte da minha
              trajetória profissional, porém, foi na área comercial, trabalhando
              com vendas para o governo. Em junho de 2024, decidi me reinventar
              e buscar uma área mais alinhada aos meus interesses. Foi assim que
              encontrei a programação — um campo onde pude unir criatividade,
              lógica e inovação.
              <br />
              Hoje sou desenvolvedor front-end iniciante, com experiência em
              HTML, CSS, JavaScript e React JS. Tenho uma mente curiosa e estou
              sempre aprendendo novas tecnologias. Busco minha primeira
              oportunidade na área para aplicar meus conhecimentos, crescer
              profissionalmente e contribuir com projetos focados na criação de
              interfaces bonitas, funcionais e centradas no usuário.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Entre em contato
              </a>

              <a
                href="#contact"
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
                    Gerenciamento de projetos
                  </h4>
                  <p className="text-muted-foreground">
                    Conduzindo projetos do planejamento à entrega, com foco em
                    organização e metodologias ágeis.
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
