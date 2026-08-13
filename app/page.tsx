import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Achievements } from "@/components/achievements";
import { Experience } from "@/components/experience";
import { ClientProjects } from "@/components/client-projects";
import { PersonalProjects } from "@/components/personal-projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Experience />
        <ClientProjects />
        <PersonalProjects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
