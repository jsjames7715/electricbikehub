import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { LinksSection } from "@/components/links-section";
import { GalleryCtaSection } from "@/components/gallery-cta-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <LinksSection />
        <GalleryCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
