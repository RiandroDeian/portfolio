"use client";

import { useEffect, useState } from "react";

type Line = {
  prompt: string;
  output: string[];
  delay?: number;
};

const LINES: Line[] = [
  { prompt: "whoami", output: ["riandro-deian-ferreira-dias"] },
  {
    prompt: "cat role.txt",
    output: ["Desenvolvedor Full-Stack"],
  },
  {
    prompt: "cat stack.json",
    output: [
      "{ frontend: [Next.js, React, TS],",
      "  backend: [Supabase, NestJS],",
      "  infra: [Docker, Vercel] }",
    ],
  },
  {
    prompt: "./status --current",
    output: ["building systems SaaS reais em produção_"],
  },
];

export default function TerminalHero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedPrompt, setTypedPrompt] = useState("");
  const [showOutput, setShowOutput] = useState<boolean[]>([]);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let timeoutId: ReturnType<typeof setTimeout>;

    const typeNextChar = () => {
      if (lineIndex >= LINES.length) return;
      const currentLine = LINES[lineIndex];

      if (charIndex <= currentLine.prompt.length) {
        setTypedPrompt(currentLine.prompt.slice(0, charIndex));
        charIndex++;
        timeoutId = setTimeout(typeNextChar, 35);
      } else {
        setShowOutput((prev) => {
          const next = [...prev];
          next[lineIndex] = true;
          return next;
        });
        setVisibleLines(lineIndex + 1);
        lineIndex++;
        charIndex = 0;
        timeoutId = setTimeout(typeNextChar, 420);
      }
    };

    timeoutId = setTimeout(typeNextChar, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative bg-grid overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[480px] h-[480px] rounded-full opacity-[0.08] blur-3xl"
        style={{ background: "var(--accent-blue)" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "var(--accent-violet)" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div className="animate-fade-up">
          <p className="font-mono text-sm text-accent-mint mb-4">
            $ disponível para novas oportunidades
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium leading-[1.1] text-text-primary text-glow-blue">
            Construo sistemas
            <br />
            que vão para{" "}
            <span className="text-accent-blue">produção</span>.
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-md">
            Desenvolvedor full-stack focado em transformar problemas reais em
            software que funciona — do banco de dados à interface.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            
              <a href="#projetos"
              className="rounded-lg bg-accent-blue px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-blue-dim transition-colors"
            >
              Ver projetos
            </a>
            
              <a href="#contato"
              className="rounded-lg border border-border-default px-5 py-2.5 text-sm font-medium text-text-primary hover:border-accent-blue hover:text-accent-blue transition-colors">
              Falar comigo
            </a>
          </div>
        </div>

        <div
          className="rounded-xl border border-border-subtle bg-bg-inset shadow-2xl shadow-black/40 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border-subtle bg-bg-surface-raised rounded-t-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e24b4a]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#e0a345]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#5dcaa5]" />
            <span className="ml-2 font-mono text-xs text-text-tertiary">
              riandro@dev: ~/portfolio
            </span>
          </div>
          <div className="p-4 md:p-5 font-mono text-[12px] md:text-[13px] leading-relaxed min-h-[220px] overflow-x-auto">
            {LINES.slice(0, visibleLines + 1).map((line, i) => (
              <div key={i} className="mb-3">
                <div className="flex gap-2">
                  <span className="text-accent-mint">➜</span>
                  <span className="text-text-secondary whitespace-pre">
                    {i < visibleLines ? line.prompt : typedPrompt}
                    {i === visibleLines && <span className="caret">▌</span>}
                  </span>
                </div>
                {showOutput[i] &&
                  line.output.map((out, j) => (
                    <div key={j} className="text-text-primary pl-5 mt-1 whitespace-pre">
                      {out}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}