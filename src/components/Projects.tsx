import FeaturedCase from "./FeaturedCase";
import ProjectGrid from "./ProjectGrid";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projetos" className="py-24 border-t border-border-subtle">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-[200px_1fr] gap-10">
          <p className="font-mono text-sm text-text-tertiary uppercase tracking-wider">
            Projetos
          </p>
          <div>
            <Reveal>
              <FeaturedCase />
            </Reveal>
            <Reveal delay={120}>
              <ProjectGrid />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}