import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaReact, FaNodeJs,
  FaGitAlt, FaDocker, FaAws,
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
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'from-cyan-300 to-cyan-500', category: 'Frontend', level: 95 },
  { name: 'Node.js', icon: FaNodeJs, color: 'from-green-400 to-emerald-600', category: 'Backend', level: 90 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'from-blue-300 to-indigo-500', category: 'Backend', level: 88 },
  { name: 'MongoDB', icon: SiMongodb, color: 'from-green-400 to-green-600', category: 'Backend', level: 82 },
  { name: 'Git', icon: FaGitAlt, color: 'from-orange-400 to-red-500', category: 'Ferramentas', level: 92 },
  { name: 'Docker', icon: FaDocker, color: 'from-blue-400 to-cyan-500', category: 'Ferramentas', level: 85 },
  { name: 'AWS', icon: FaAws, color: 'from-orange-300 to-yellow-500', category: 'Ferramentas', level: 78 },
  { name: 'UI/UX', icon: MdDesignServices, color: 'from-fuchsia-400 to-pink-500', category: 'Design', level: 85 },
];

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const autoAnimationRef = useRef<gsap.core.Timeline | null>(null);
  const isInViewRef = useRef(false);

  // Animate a single card (highlight effect)
  const animateCard = useCallback((card: HTMLDivElement | null, isActive: boolean) => {
    if (!card) return;
    
    gsap.to(card, {
      scale: isActive ? 1.08 : 1,
      y: isActive ? -12 : 0,
      boxShadow: isActive 
        ? '0 20px 40px rgba(65, 90, 119, 0.2), 0 0 60px rgba(65, 90, 119, 0.1)' 
        : '0 1px 3px rgba(0,0,0,0.1)',
      duration: 0.5,
      ease: 'power2.out',
    });
    
    gsap.to(card.querySelector('.skill-icon'), {
      rotate: isActive ? 15 : 0,
      scale: isActive ? 1.3 : 1,
      duration: 0.5,
      ease: 'back.out(1.7)',
    });
    
    gsap.to(card.querySelector('.skill-bar-fill'), {
      scaleX: isActive ? 1 : 0.3,
      duration: 0.8,
      ease: 'power2.out',
    });

    gsap.to(card.querySelector('.skill-glow'), {
      opacity: isActive ? 0.15 : 0,
      duration: 0.5,
    });
  }, []);

  // Start sequential auto-animation
  const startAutoAnimation = useCallback(() => {
    if (autoAnimationRef.current) {
      autoAnimationRef.current.kill();
    }

    const tl = gsap.timeline({ repeat: -1 });
    
    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      
      // Activate this card
      tl.call(() => animateCard(card, true), [], i * 0.8);
      
      // Deactivate after delay
      tl.call(() => animateCard(card, false), [], i * 0.8 + 0.6);
    });

    // Add a pause at the end before repeating
    tl.to({}, { duration: 1 });
    
    autoAnimationRef.current = tl;
  }, [animateCard]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
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

      // Cards entrance animation with stagger
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.8, rotateY: -15 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            ease: 'back.out(1.2)',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.08,
          }
        );
      });

      // Start auto-animation when section comes into view
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 60%',
        end: 'bottom 20%',
        onEnter: () => {
          isInViewRef.current = true;
          setTimeout(() => startAutoAnimation(), 1000); // Delay to let entrance animation finish
        },
        onLeave: () => {
          isInViewRef.current = false;
          if (autoAnimationRef.current) {
            autoAnimationRef.current.pause();
          }
        },
        onEnterBack: () => {
          isInViewRef.current = true;
          if (autoAnimationRef.current) {
            autoAnimationRef.current.play();
          }
        },
        onLeaveBack: () => {
          isInViewRef.current = false;
          if (autoAnimationRef.current) {
            autoAnimationRef.current.pause();
          }
        },
      });
    }, sectionRef);

    return () => {
      if (autoAnimationRef.current) {
        autoAnimationRef.current.kill();
      }
      ctx.revert();
    };
  }, [startAutoAnimation]);

  // Hover handlers (pause auto-animation on hover)
  const handleMouseEnter = (card: HTMLDivElement | null) => {
    if (!card) return;
    if (autoAnimationRef.current) {
      autoAnimationRef.current.pause();
    }
    animateCard(card, true);
  };

  const handleMouseLeave = (card: HTMLDivElement | null) => {
    if (!card) return;
    animateCard(card, false);
    if (autoAnimationRef.current && isInViewRef.current) {
      autoAnimationRef.current.play();
    }
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      aria-labelledby="skills-heading"
      className="relative py-16 px-6 lg:px-12 overflow-hidden"
    >
      {/* Light Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e0e1dd] via-[#f5f5f3] to-[#e0e1dd]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#415a77]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1b263b]/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20 opacity-0">
          <h2 id="skills-heading" className="text-5xl md:text-7xl font-black text-[#0d1b2a] leading-tight tracking-tight">
            As Nossas{' '}
            <span className="bg-gradient-to-r from-[#415a77] to-[#1b263b] bg-clip-text text-transparent">
              Competências
            </span>
          </h2>
          <p className="text-[#5c7a99] text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light">
            Dominamos uma vasta gama de tecnologias modernas para criar soluções
            completas e eficientes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5" role="list" aria-label="Lista de competências">
          {allSkills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                ref={(el) => { cardsRef.current[i] = el; }}
                onMouseEnter={() => handleMouseEnter(cardsRef.current[i])}
                onMouseLeave={() => handleMouseLeave(cardsRef.current[i])}
                role="listitem"
                className="group relative p-6 rounded-2xl bg-[#f5f5f3] backdrop-blur-sm border border-[#415a77]/15 shadow-sm cursor-pointer opacity-0 transition-colors duration-300"
                tabIndex={0}
                aria-label={`${skill.name} - ${skill.category} - ${skill.level}% de domínio`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Glow effect */}
                <div 
                  className={`skill-glow absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 pointer-events-none`} 
                  aria-hidden="true" 
                />
                
                {/* Icon */}
                <div className="skill-icon mb-4 relative z-10" aria-hidden="true">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-3 flex items-center justify-center shadow-lg`}>
                    <Icon className="w-full h-full text-white" />
                  </div>
                </div>

                {/* Name & Category */}
                <h3 className="text-[#0d1b2a] font-bold text-base mb-1 relative z-10">{skill.name}</h3>
                <p className="text-[#5c7a99] text-xs font-medium mb-4 relative z-10">{skill.category}</p>

                {/* Skill level bar */}
                <div className="w-full h-1.5 rounded-full bg-[#e0e1dd] overflow-hidden relative z-10" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
                  <div
                    className={`skill-bar-fill h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{ width: `${skill.level}%`, transform: 'scaleX(0.3)', transformOrigin: 'left' }}
                  />
                </div>
                <p className="text-[#5c7a99]/70 text-xs mt-2 font-mono relative z-10">{skill.level}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
