import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython,
  FaGitAlt, FaDocker, FaAws, FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb,
} from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  category: string;
  level: number;
}

const allSkills: SkillItem[] = [
  { name: 'React', icon: FaReact, color: 'from-cyan-400 to-blue-500', category: 'Frontend', level: 95 },
  { name: 'TypeScript', icon: SiTypescript, color: 'from-blue-400 to-blue-600', category: 'Frontend', level: 90 },
  { name: 'Vue.js', icon: FaVuejs, color: 'from-emerald-400 to-green-500', category: 'Frontend', level: 85 },
  { name: 'Angular', icon: FaAngular, color: 'from-red-400 to-red-600', category: 'Frontend', level: 80 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-cyan-300 to-cyan-500', category: 'Frontend', level: 95 },
  { name: 'Node.js', icon: FaNodeJs, color: 'from-green-400 to-emerald-600', category: 'Backend', level: 90 },
  { name: 'Python', icon: FaPython, color: 'from-yellow-400 to-blue-500', category: 'Backend', level: 85 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'from-blue-300 to-indigo-500', category: 'Backend', level: 88 },
  { name: 'MongoDB', icon: SiMongodb, color: 'from-green-400 to-green-600', category: 'Backend', level: 82 },
  { name: 'Git', icon: FaGitAlt, color: 'from-orange-400 to-red-500', category: 'Ferramentas', level: 92 },
  { name: 'Docker', icon: FaDocker, color: 'from-blue-400 to-cyan-500', category: 'Ferramentas', level: 85 },
  { name: 'AWS', icon: FaAws, color: 'from-orange-300 to-yellow-500', category: 'Ferramentas', level: 78 },
  { name: 'Figma', icon: FaFigma, color: 'from-pink-400 to-violet-500', category: 'Design', level: 88 },
  { name: 'UI/UX', icon: MdDesignServices, color: 'from-fuchsia-400 to-pink-500', category: 'Design', level: 85 },
];

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
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

      // Bento cards stagger
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.06,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (card: HTMLDivElement | null) => {
    if (!card) return;
    gsap.to(card, {
      scale: 1.05,
      y: -8,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(card.querySelector('.skill-icon'), {
      rotate: 10,
      scale: 1.2,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(card.querySelector('.skill-bar-fill'), {
      scaleX: 1,
      duration: 0.8,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (card: HTMLDivElement | null) => {
    if (!card) return;
    gsap.to(card, {
      scale: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    });
    gsap.to(card.querySelector('.skill-icon'), {
      rotate: 0,
      scale: 1,
      duration: 0.4,
      ease: 'power2.out',
    });
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8fb] via-[#f2f2f8] to-[#f8f8fb]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-400/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-400/[0.04] rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20 opacity-0">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
            As Nossas{' '}
            <span className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              Competências
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light">
            Dominamos uma vasta gama de tecnologias modernas para criar soluções
            completas e eficientes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {allSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                ref={(el) => { cardsRef.current[i] = el; }}
                onMouseEnter={() => handleMouseEnter(cardsRef.current[i])}
                onMouseLeave={() => handleMouseLeave(cardsRef.current[i])}
                className="group relative p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm cursor-pointer opacity-0 transition-colors duration-300 hover:bg-white hover:border-gray-300 hover:shadow-md"
              >
                {/* Icon */}
                <div className="skill-icon mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-2.5 flex items-center justify-center shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Name & Category */}
                <h3 className="text-gray-900 font-semibold text-sm mb-1">{skill.name}</h3>
                <p className="text-gray-400 text-xs font-medium mb-3">{skill.category}</p>

                {/* Skill level bar */}
                <div className="w-full h-1 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className={`skill-bar-fill h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%`, transform: 'scaleX(0.3)', transformOrigin: 'left' }}
                  />
                </div>
                <p className="text-gray-300 text-[10px] mt-1.5 font-mono">{skill.level}%</p>

                {/* Glow on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 pointer-events-none`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
