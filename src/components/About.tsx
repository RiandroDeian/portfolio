import Image from "next/image";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="sobre" className="py-24 border-t border-border-subtle">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="grid md:grid-cols-[200px_1fr] gap-10">
          <p className="font-mono text-sm text-text-tertiary uppercase tracking-wider">
            Sobre
          </p>
          <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-12 items-start">
            <div className="relative mx-auto md:mx-0 w-[200px] md:w-full max-w-[220px]">
              <div className="rounded-xl border border-border-subtle bg-bg-inset overflow-hidden shadow-xl shadow-black/30">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border-subtle bg-bg-surface-raised">
                  <span className="w-2 h-2 rounded-full bg-[#e24b4a]" />
                  <span className="w-2 h-2 rounded-full bg-[#e0a345]" />
                  <span className="w-2 h-2 rounded-full bg-[#5dcaa5]" />
                  <span className="ml-1.5 font-mono text-[10px] text-text-tertiary truncate">
                    riandro.jpg
                  </span>
                </div>
                <div className="relative aspect-[3/4]">
                  <Image
                    src="/riandro.jpg"
                    alt="Riandro Deian"
                    fill
                    sizes="220px"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <p className="mt-3 text-center md:text-left font-mono text-xs text-text-tertiary">
                Brasília, DF
              </p>
            </div>

            <div className="space-y-5 text-text-secondary text-[17px] leading-relaxed">
              <p>
                Estudo Ciência da Computação na UDF e construo sistemas
                completos desde a primeira linha de código até o deploy em
                produção — sem atalhos no meio do caminho.
              </p>
              <p>
                Meu projeto mais relevante até hoje é a{" "}
                <span className="text-text-primary font-medium">
                  Moncié Esthetique
                </span>
                , uma plataforma de gestão para clínicas com mais de 15
                módulos ativos, usada de verdade no dia a dia de um negócio
                real. Também passei um tempo em uma software house
                trabalhando em um SaaS de agendamento, com monorepo, Docker e
                back-end em NestJS de outro desenvolvedor — experiência que
                me ensinou a construir telas independentes de uma API que
                ainda não existia.
              </p>
              <p>
                Gosto de código que sobrevive ao mundo real: edições
                cirúrgicas em vez de reescritas, decisões justificadas em vez
                de tecnologia por modismo.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}