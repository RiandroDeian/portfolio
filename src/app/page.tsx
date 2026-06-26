import Header from "@/components/Header";
import TerminalHero from "@/components/TerminalHero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <TerminalHero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <WhatsAppFloat />
    </>
  );
}