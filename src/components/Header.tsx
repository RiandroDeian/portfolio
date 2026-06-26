"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerClass = (scrolled || menuOpen)
    ? "bg-bg-base/85 backdrop-blur-md border-b border-border-subtle"
    : "bg-transparent border-b border-transparent";

  const mobileNavClass = menuOpen ? "max-h-80" : "max-h-0 border-b-transparent";

  return (
    <header className={"fixed top-0 inset-x-0 z-50 transition-colors duration-300 " + headerClass}>
      <div className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        <a href="#" onClick={() => setMenuOpen(false)} className="font-mono text-sm text-text-primary hover:text-accent-blue transition-colors">riandro<span className="text-accent-mint">.dev</span></a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-text-secondary hover:text-text-primary transition-colors">{item.label}</a>
          ))}
        </nav>

        <a href="#contato" className="hidden md:inline-flex items-center gap-2 rounded-full border border-border-default px-4 py-1.5 text-sm text-text-primary hover:border-accent-blue hover:text-accent-blue transition-colors">
          Disponível
          <span className="w-1.5 h-1.5 rounded-full bg-accent-mint" />
        </a>

        <button type="button" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="md:hidden relative w-9 h-9 flex items-center justify-center text-text-primary">
          <span className="relative w-5 h-4 flex flex-col justify-between">
            <span className={"block h-[1.5px] w-full bg-current transition-transform duration-300 " + (menuOpen ? "translate-y-[7px] rotate-45" : "")} />
            <span className={"block h-[1.5px] w-full bg-current transition-opacity duration-300 " + (menuOpen ? "opacity-0" : "opacity-100")} />
            <span className={"block h-[1.5px] w-full bg-current transition-transform duration-300 " + (menuOpen ? "-translate-y-[7px] -rotate-45" : "")} />
          </span>
        </button>
      </div>

      <div className={"md:hidden overflow-hidden transition-[max-height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-border-subtle " + mobileNavClass}>
        <nav className="flex flex-col px-6 py-4 gap-1">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="py-2.5 text-[15px] text-text-secondary hover:text-text-primary transition-colors">{item.label}</a>
          ))}
          <a href="#contato" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border-default px-4 py-2 text-sm text-text-primary">
            Disponível
            <span className="w-1.5 h-1.5 rounded-full bg-accent-mint" />
          </a>
        </nav>
      </div>
    </header>
  );
}