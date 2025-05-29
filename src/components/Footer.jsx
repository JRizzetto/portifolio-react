import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 gb-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-center items-center text-center">
      <p className="text-sm text-muted-foreground mr-2">
        &copy;{new Date().getFullYear()} Jefferson Rizzetto - Todos os direitos
        reservados
      </p>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp />
      </a>
    </footer>
  );
};
