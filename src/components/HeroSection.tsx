import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import GridMotion from './GridMotion';

const gridItems = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1550439062-609e1531270e?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1537432376149-e84978e29832?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
  '',
];

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.3'
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      className="relative w-full h-screen overflow-hidden bg-[#e0e1dd]"
      aria-labelledby="hero-heading"
    >
      {/* GridMotion Background — fills entire viewport with no gaps */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <GridMotion items={gridItems} gradientColor="#e0e1dd" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Glassmorphism Card - Light Theme */}
          <div className="p-8 md:p-12 rounded-3xl bg-[#f5f5f3]/90 backdrop-blur-2xl border border-[#415a77]/20 shadow-[0_8px_64px_rgba(13,27,42,0.1)]">
            <h1
              id="hero-heading"
              ref={titleRef}
              className="text-5xl sm:text-6xl md:text-8xl font-black text-[#0d1b2a] mb-6 leading-[0.95] tracking-tight opacity-0"
            >
              WebDev
              <br />
              <span className="bg-gradient-to-r from-[#415a77] via-[#1b263b] to-[#0d1b2a] bg-clip-text text-transparent">
                Portugal
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-[#5c7a99] font-light mb-4 tracking-wide opacity-0"
            >
              Desenvolvimento Web Moderno & Inovador
            </p>

            <p
              ref={descRef}
              className="text-base md:text-lg text-[#5c7a99]/80 max-w-2xl mx-auto leading-relaxed font-light opacity-0"
            >
              Criamos experiências digitais excepcionais com as mais recentes
              tecnologias, focando sempre na performance e experiência do
              utilizador.
            </p>
          </div>

          {/* CTA - Light Theme */}
          <div ref={ctaRef} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
            <a
              href="#portfolio"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-[#415a77] to-[#1b263b] text-[#e0e1dd] font-semibold text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(65,90,119,0.4)] hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              <span className="relative z-10">Ver Projetos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1b263b] to-[#415a77] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-[#f5f5f3]/90 backdrop-blur-sm border border-[#415a77]/40 text-[#0d1b2a] font-semibold text-sm tracking-wider uppercase shadow-lg hover:bg-white hover:border-[#415a77] hover:shadow-xl hover:scale-105 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              Contactar
            </a>
          </div>

          {/* Scroll indicator - Light Theme */}
          <div className="mt-16 animate-bounce" aria-hidden="true">
            <div className="w-6 h-10 mx-auto rounded-full border-2 border-[#415a77] flex justify-center pt-2">
              <div className="w-1 h-3 rounded-full bg-[#1b263b] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
