import Reveal from "./Reveal";

type Project = {
  name: string;
  period: string;
  description: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Moovion · AgendaPro",
    period: "2026",
    description:
      "SaaS de agendamento em monorepo (Turborepo + NestJS). Construí as telas principais com camada de mock própria, desacoplando o front-end da API enquanto o back-end ainda estava em desenvolvimento. Ambiente containerizado com Docker.",
    stack: ["Next.js", "TanStack Query", "Docker", "Turborepo"],
  },
  {
    name: "Rumo à Psico",
    period: "2026",
    description:
      "PWA de estudos para o ENEM, com cronograma de 20 semanas, banco de questões e repetição espaçada. Construído para um usuário real, com decisões de UX guiadas por uso diário, não suposição.",
    stack: ["React", "Tailwind CSS", "Supabase"],
    link: "https://rumo-a-psico.vercel.app",
    linkLabel: "Ver site",
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-5 mt-5">
      {PROJECTS.map((p, i) => (
        <Reveal key={p.name} delay={i * 100}>
          <div className="group rounded-xl border border-border-subtle bg-bg-surface p-7 flex flex-col h-full transition-all duration-300 hover:border-accent-blue/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display text-lg font-medium text-text-primary transition-colors group-hover:text-accent-blue">
                {p.name}
              </h4>
              <span className="font-mono text-xs text-text-tertiary">
                {p.period}
              </span>
            </div>
            <p className="text-text-secondary text-[15px] leading-relaxed mb-5 flex-1">
              {p.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-xs px-2 py-1 rounded-md bg-bg-inset border border-border-subtle text-text-secondary"
                  >
                    {s}
                  </span>
                ))}
              </div>
              {p.link && (
                
                  <a href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-accent-blue hover:text-text-primary transition-colors whitespace-nowrap ml-3"
                >
                  {p.linkLabel} →
                </a>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}