import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DomeGallery from './DomeGallery';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const projectImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1550439062-609e1531270e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1537432376149-e84978e29832?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=400&fit=crop',
];

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const projectCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        galleryRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      projectCardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, rotateY: 5 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.2,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8fb] via-white to-[#f8f8fb]" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-400/[0.04] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
            Os Nossos{' '}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              Projetos
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light">
            Explore as nossas soluções digitais desenvolvidas com tecnologias de ponta.
            Arraste para navegar na galeria.
          </p>
        </div>

        {/* DomeGallery */}
        <div
          ref={galleryRef}
          className="w-full h-[400px] md:h-[500px] mb-24 opacity-0"
        >
          <DomeGallery
            fit={0.75}
            minRadius={500}
            segments={12}
            dragDampening={2}
            grayscale
            images={projectImages}
          />
        </div>

        {/* Project Details */}
        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              ref={(el) => { projectCardsRef.current[i] = el; }}
              className="group relative rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm overflow-hidden opacity-0 transition-colors duration-300 hover:bg-white hover:border-gray-300 hover:shadow-md"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Video / Image */}
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  {project.video ? (
                    <video
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-violet-100 to-fuchsia-100 flex items-center justify-center">
                      <span className="text-gray-400 text-2xl font-bold">
                        {project.title}
                      </span>
                    </div>
                  )}
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent lg:bg-gradient-to-l" />
                </div>

                {/* Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-violet-600 text-sm font-mono uppercase tracking-widest mb-3">
                    Projeto {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-500 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href={project.liveUrl || '#'}
                    className="inline-flex items-center gap-2 text-violet-600 font-semibold text-sm hover:text-violet-500 transition-colors group/link"
                  >
                    Ver Projeto
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
