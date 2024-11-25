import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import HeroSection from '@/components/HeroSection';
import ProjectSection from '@/components/ProjectSection/ProjectSection';
import SkilsSection from '@/components/Skills/SkilsSection';
import { NavbarComponents } from '@/components/elements/Navbar/NavbarComponents';

export default function Home() {
  return (
    <main>
      <NavbarComponents />
      <HeroSection />
      <div className="space-y-56">
        <AboutSection />
        <ProjectSection />
        <SkilsSection />
        <ContactSection />
      </div>
    </main>
  );
}
