import { ContactSection } from "@/components/contact-section";
import { Header } from "@/components/header";
import { HeroSkills } from "@/components/hero-skills";
import { PortfolioSection } from "@/components/portfolio-section";
import { ResumeSection } from "@/components/resume-section";
import { ServicesSection } from "@/components/services-section";
import { SiteBackground } from "@/components/site-background";

export default function Home() {
  return (
    <>
      <SiteBackground />
      <Header />
      <main>
        <HeroSkills />
        <ResumeSection id="resume" />
        <PortfolioSection id="portfolio" />
        <ServicesSection id="services" />
        <ContactSection id="contact" />
      </main>
    </>
  );
}
