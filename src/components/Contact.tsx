import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contato"
      className="py-24 border-t border-border-subtle bg-grid"
    >
      <Reveal className="mx-auto max-w-5xl px-6 text-center">
        <p className="font-mono text-sm text-accent-mint mb-4">
          $ contato --abrir
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-text-primary mb-5">
          Vamos construir algo juntos?
        </h2>
        <p className="text-text-secondary max-w-md mx-auto mb-8">
          Estou aberto a novas oportunidades como desenvolvedor front-end ou
          full-stack.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          
            <a href="mailto:riandro012@gmail.com"
            className="rounded-lg bg-accent-blue px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-blue-dim hover:-translate-y-0.5"
          >
            riandro012@gmail.com
          </a>
          
            <a href="https://github.com/RiandroDeian"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border-default px-6 py-3 text-sm font-medium text-text-primary transition-all hover:border-accent-blue hover:text-accent-blue hover:-translate-y-0.5">
            GitHub
          </a>
          
           <a  href="https://www.linkedin.com/in/riandro-deian"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border-default px-6 py-3 text-sm font-medium text-text-primary transition-all hover:border-accent-blue hover:text-accent-blue hover:-translate-y-0.5"
          >
            LinkedIn
          </a>
        </div>
      </Reveal>

      <div className="mx-auto max-w-5xl px-6 mt-20 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-text-tertiary">
          riandro.dev — Brasília, DF
        </p>
        <p className="font-mono text-xs text-text-tertiary">
          construído com Next.js + Tailwind CSS
        </p>
      </div>
    </section>
  );
}