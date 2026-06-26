import Reveal from "./Reveal";

const CATEGORIES = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn/UI"],
  },
  {
    label: "Backend & Dados",
    items: ["Supabase", "PostgreSQL", "NestJS", "JWT Auth"],
  },
  {
    label: "Infraestrutura",
    items: ["Docker", "Vercel", "Turborepo", "Git"],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 border-t border-border-subtle">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="grid md:grid-cols-[200px_1fr] gap-10">
          <p className="font-mono text-sm text-text-tertiary uppercase tracking-wider">
            Stack
          </p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl">
            {CATEGORIES.map((cat) => (
              <div key={cat.label}>
                <p className="text-text-primary font-medium text-sm mb-3">
                  {cat.label}
                </p>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[13px] text-text-secondary transition-colors hover:text-accent-mint cursor-default"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}