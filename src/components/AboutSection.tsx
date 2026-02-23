import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textBlocksRef = useRef<(HTMLElement | null)[]>([]);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);

  const stats = [
    { value: '50+', label: 'Projetos Entregues' },
    { value: '30+', label: 'Clientes Satisfeitos' },
    { value: '5+', label: 'Anos de Experiência' },
    { value: '100%', label: 'Dedicação' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Text blocks stagger
      textBlocksRef.current.forEach((block, i) => {
        if (!block) return;
        gsap.fromTo(
          block,
          { opacity: 0, y: 60, rotateX: 10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.15,
          }
        );
      });

      // Stats animation
      statsRef.current.forEach((stat, i) => {
        if (!stat) return;
        gsap.fromTo(
          stat,
          { opacity: 0, scale: 0.8, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: stat,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.1,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e0e1dd] via-[#f5f5f3] to-[#e0e1dd]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#415a77]/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left column - heading */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2
              id="about-heading"
              ref={headingRef}
              className="text-5xl md:text-7xl font-black text-[#0d1b2a] leading-[0.95] tracking-tight opacity-0"
            >
              Sobre
              <br />
              <span className="bg-gradient-to-r from-[#415a77] to-[#1b263b] bg-clip-text text-transparent">
                Nós
              </span>
            </h2>

            <div className="mt-8 w-20 h-1 bg-gradient-to-r from-[#415a77] to-[#1b263b] rounded-full" aria-hidden="true" />

            {/* Stats grid */}
            <div className="mt-12 grid grid-cols-2 gap-6" role="list" aria-label="Estatísticas">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  ref={(el) => { statsRef.current[i] = el; }}
                  role="listitem"
                  className="p-5 rounded-2xl bg-[#f5f5f3] backdrop-blur-sm border border-[#415a77]/15 shadow-sm opacity-0"
                >
                  <div className="text-3xl font-black bg-gradient-to-r from-[#415a77] to-[#0d1b2a] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[#5c7a99] text-sm mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - text blocks */}
          <div className="lg:col-span-7 space-y-8">
            <article
              ref={(el) => { textBlocksRef.current[0] = el; }}
              className="p-8 rounded-3xl bg-[#f5f5f3] backdrop-blur-sm border border-[#415a77]/15 shadow-sm opacity-0"
            >
              <h3 className="text-xl font-bold text-[#0d1b2a] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#415a77]/20 flex items-center justify-center text-[#415a77] text-sm font-bold" aria-hidden="true">
                  01
                </span>
                A Nossa Missão
              </h3>
              <p className="text-[#5c7a99] leading-relaxed text-lg font-light">
                Somos uma equipa apaixonada de desenvolvedores web sediada em Portugal,
                dedicada a criar experiências digitais excepcionais. Com anos de experiência
                no desenvolvimento de soluções web modernas, combinamos criatividade,
                tecnologia de ponta e uma abordagem centrada no utilizador.
              </p>
            </article>

            <article
              ref={(el) => { textBlocksRef.current[1] = el; }}
              className="p-8 rounded-3xl bg-[#f5f5f3] backdrop-blur-sm border border-[#415a77]/15 shadow-sm opacity-0"
            >
              <h3 className="text-xl font-bold text-[#0d1b2a] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#415a77]/20 flex items-center justify-center text-[#415a77] text-sm font-bold" aria-hidden="true">
                  02
                </span>
                A Nossa Abordagem
              </h3>
              <p className="text-[#5c7a99] leading-relaxed text-lg font-light">
                Cada projeto é uma oportunidade de superar limites. Escrevemos código
                limpo, mantível e escalável, seguindo as melhores práticas da indústria.
                Trabalhamos em estreita colaboração com os nossos clientes para garantir
                que cada detalhe é perfeito.
              </p>
            </article>

            <article
              ref={(el) => { textBlocksRef.current[2] = el; }}
              className="p-8 rounded-3xl bg-[#f5f5f3] backdrop-blur-sm border border-[#415a77]/15 shadow-sm opacity-0"
            >
              <h3 className="text-xl font-bold text-[#0d1b2a] mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-[#415a77]/20 flex items-center justify-center text-[#415a77] text-sm font-bold" aria-hidden="true">
                  03
                </span>
                Inovação Constante
              </h3>
              <p className="text-[#5c7a99] leading-relaxed text-lg font-light">
                Mantemo-nos sempre atualizados com as últimas tecnologias e tendências.
                Otimizamos cada projeto para garantir velocidade, acessibilidade e uma
                experiência de utilizador excecional — porque o detalhe faz a diferença.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
