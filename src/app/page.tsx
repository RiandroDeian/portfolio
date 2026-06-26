import Header from "@/components/Header";
import TerminalHero from "@/components/TerminalHero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

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
    </>
  );
}
