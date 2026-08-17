import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { DevProjects } from "@/components/DevProjects";
import { DesignProjects } from "@/components/DesignProjects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Footer } from "@/components/Footer";
import { ProjectModal } from "@/components/ProjectModal";
import { ProjectModalProvider } from "@/components/ProjectModalContext";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  return (
    <ProjectModalProvider>
      <ScrollProgress />
      <Nav />
      <Hero />
      <div className="mx-auto max-w-content px-[clamp(20px,5vw,64px)]">
        <About />
        <Skills />
        <Experience />
        <DevProjects />
        <DesignProjects />
        <Education />
        <Certifications />
      </div>
      <Footer />
      <ProjectModal />
    </ProjectModalProvider>
  );
}
