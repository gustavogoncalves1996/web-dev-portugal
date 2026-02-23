import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import FooterNew from './components/FooterNew';
import NavigationNew from './components/NavigationNew';

function App() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle anchor clicks for Lenis
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.slice(1);
        if (id) {
          const el = document.getElementById(id);
          if (el) {
            lenis.scrollTo(el, { offset: 0 });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      lenis.destroy();
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {/* Skip link for keyboard navigation - WCAG 2.4.1 */}
      <a href="#main-content" className="skip-link">
        Saltar para o conteúdo principal
      </a>
      
      <div className="bg-[#e0e1dd] text-[#0d1b2a] min-h-screen selection:bg-[#415a77]/25 selection:text-[#0d1b2a]">
        <NavigationNew />
        <main id="main-content" role="main">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <FooterNew />
      </div>
    </>
  );
}

export default App;