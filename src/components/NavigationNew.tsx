import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Home, User, Zap, Briefcase, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Início', icon: Home },
  { id: 'about', label: 'Sobre', icon: User },
  { id: 'skills', label: 'Competências', icon: Zap },
  { id: 'portfolio', label: 'Projetos', icon: Briefcase },
  { id: 'contact', label: 'Contacto', icon: Mail },
];

const NavigationNew: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show nav after scroll
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);

    // Observe sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        duration: 0.4,
        ease: 'power2.out',
        pointerEvents: isVisible ? 'auto' : 'none',
      });
    }
  }, [isVisible]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 opacity-0"
    >
      <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-white/80 backdrop-blur-2xl border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`relative px-3 py-2 md:px-4 rounded-full text-xs font-medium tracking-wide transition-all duration-300 ${
              activeSection === item.id
                ? 'text-white'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {activeSection === item.id && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/80 to-fuchsia-600/80" />
            )}
            <span className="relative z-10 flex items-center justify-center">
              {/* Icon on mobile, text on desktop */}
              <item.icon className="w-4 h-4 md:hidden" />
              <span className="hidden md:inline">{item.label}</span>
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationNew;
