const MODULES = [
  "Prontuário com timeline e PDF",
  "CRM em Kanban com drag-and-drop",
  "Agenda com bloqueio de horários",
  "Financeiro e comissões com metas",
  "Controle de estoque por ambiente",
  "Integração com WhatsApp",
];

const STACK = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "Tailwind CSS",
  "JWT auth",
  "Vercel",
];

export default function FeaturedCase() {
  return (
    <div
      id="moncie"
      className="rounded-2xl border border-border-default bg-bg-surface overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-black/30">
      <div className="grid md:grid-cols-[1fr_1px_1fr]">
        <div className="p-8 md:p-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-xs uppercase tracking-wider text-accent-mint">
              Case principal
            </span>
            <span className="w-1 h-1 rounded-full bg-border-default" />
            <span className="font-mono text-xs text-text-tertiary">
              Em produção
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-medium text-text-primary mb-3">
            Moncié Esthetique
          </h3>
          <p className="text-text-secondary leading-relaxed mb-6">
            Sistema de gestão construído do zero para uma clínica de
            estética. Mais de 15 módulos administrativos rodando em
            produção — não é um protótipo, é uma ferramenta que uma equipe
            real usa todos os dias.
          </p>

          <div className="space-y-4 mb-6">
            <div>
              <p className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-2">
                O desafio
              </p>
              <p className="text-text-secondary text-[15px] leading-relaxed">
                Em um arquivo com 700 linhas, uma reescrita completa cortou o
                conteúdo para 300 — a solução foi adotar edições cirúrgicas
                em vez de reescrever páginas inteiras, preservando toda a
                lógica já validada em produção.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/RiandroDeian/clinica-estetica"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-text-primary transition-colors"
          >
            Ver repositório
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div
          className="hidden md:block bg-border-subtle"
          aria-hidden="true"
        />

        <div className="p-8 md:p-10 bg-bg-surface-raised md:bg-transparent">
          <p className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-3">
            Módulos entregues
          </p>
          <ul className="space-y-2.5 mb-7">
            {MODULES.map((m) => (
              <li
                key={m}
                className="flex items-start gap-2.5 text-[15px] text-text-secondary"
              >
                <span className="mt-2 w-1 h-1 rounded-full bg-accent-mint shrink-0" />
                {m}
              </li>
            ))}
          </ul>

          <p className="font-mono text-xs text-text-tertiary uppercase tracking-wider mb-3">
            Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {STACK.map((s) => (
              <span
                key={s}
                className="font-mono text-xs px-2.5 py-1 rounded-md bg-bg-inset border border-border-subtle text-text-secondary"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
