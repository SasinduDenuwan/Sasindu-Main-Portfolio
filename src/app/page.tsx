import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Background from "../components/Background";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <div className="relative z-10 space-y-32 pb-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
      <Footer className="relative z-10" />
    </main>
  );
}