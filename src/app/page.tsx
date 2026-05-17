import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <main className="flex flex-col gap-24">
      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />
      <Footer />
    </main>
  );
}