import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheck, FaTimes, FaCrown, FaRocket, FaStar } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  cta: string;
  popular?: boolean;
  gradient: string;
  iconBg: string;
}

const plans: Plan[] = [
  {
    name: 'Base',
    icon: FaStar,
    price: '499',
    period: 'projeto',
    description: 'Ideal para pequenos negócios e projetos pessoais que precisam de uma presença online profissional.',
    features: [
      { text: 'Landing Page responsiva', included: true },
      { text: 'Design personalizado', included: true },
      { text: 'Até 3 secções', included: true },
      { text: 'Formulário de contacto', included: true },
      { text: 'Otimização SEO básica', included: true },
      { text: 'Certificado SSL', included: true },
      { text: '1 Revisão de design', included: true },
      { text: 'Painel de administração', included: false },
      { text: 'Integração com APIs', included: false },
      { text: 'Suporte prioritário', included: false },
    ],
    cta: 'Começar Agora',
    gradient: 'from-[#415a77] to-[#5c7a99]',
    iconBg: 'from-[#415a77] to-[#5c7a99]',
  },
  {
    name: 'Empresarial',
    icon: FaRocket,
    price: '1.299',
    period: 'projeto',
    description: 'Perfeito para empresas que necessitam de um website completo e funcional com múltiplas funcionalidades.',
    features: [
      { text: 'Website multi-página', included: true },
      { text: 'Design UX/UI premium', included: true },
      { text: 'Até 10 secções/páginas', included: true },
      { text: 'Formulário de contacto avançado', included: true },
      { text: 'Otimização SEO completa', included: true },
      { text: 'Certificado SSL', included: true },
      { text: '3 Revisões de design', included: true },
      { text: 'Painel de administração', included: true },
      { text: 'Integração com APIs', included: true },
      { text: 'Suporte prioritário', included: false },
    ],
    cta: 'Escolher Plano',
    popular: true,
    gradient: 'from-[#1b263b] to-[#415a77]',
    iconBg: 'from-[#1b263b] to-[#415a77]',
  },
  {
    name: 'Premium',
    icon: FaCrown,
    price: '2.999',
    period: 'projeto',
    description: 'A solução completa para marcas que exigem o melhor. Inclui tudo, desde o desenvolvimento até ao suporte contínuo.',
    features: [
      { text: 'Aplicação Web completa', included: true },
      { text: 'Design UX/UI exclusivo', included: true },
      { text: 'Páginas ilimitadas', included: true },
      { text: 'Sistema de contacto completo', included: true },
      { text: 'SEO avançado + Analytics', included: true },
      { text: 'Certificado SSL', included: true },
      { text: 'Revisões ilimitadas', included: true },
      { text: 'Painel de administração', included: true },
      { text: 'Integração com APIs + BD', included: true },
      { text: 'Suporte prioritário 12 meses', included: true },
    ],
    cta: 'Contactar-nos',
    gradient: 'from-[#0d1b2a] to-[#1b263b]',
    iconBg: 'from-[#0d1b2a] to-[#415a77]',
  },
];

const PricingSection: React.FC = () => {
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

      // Cards stagger with 3D entrance
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          { opacity: 0, y: 80, rotateY: -8, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.15,
          }
        );

        // Animate features list items sequentially
        const features = card.querySelectorAll('.feature-item');
        gsap.fromTo(
          features,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.4,
            ease: 'power2.out',
            stagger: 0.06,
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.15 + 0.4,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative py-16 px-6 lg:px-12 overflow-hidden"
    >
      {/* Light Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e0e1dd] via-[#f5f5f3] to-[#e0e1dd]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#415a77]/5 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20 opacity-0">
          <h2
            id="pricing-heading"
            className="text-5xl md:text-7xl font-black text-[#0d1b2a] leading-tight tracking-tight"
          >
            Os Nossos{' '}
            <span className="bg-gradient-to-r from-[#415a77] to-[#1b263b] bg-clip-text text-transparent">
              Planos
            </span>
          </h2>
          <p className="text-[#5c7a99] text-lg md:text-xl mt-6 max-w-2xl mx-auto font-light">
            Soluções flexíveis para cada fase do seu negócio.
            Escolha o plano que melhor se adapta às suas necessidades.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                ref={(el) => { cardsRef.current[i] = el; }}
                className={`group relative flex flex-col rounded-3xl bg-[#f5f5f3] border shadow-sm opacity-0 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  plan.popular
                    ? 'border-[#415a77]/40 shadow-[0_8px_40px_rgba(65,90,119,0.15)] lg:scale-105'
                    : 'border-[#415a77]/15'
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="px-6 py-2 rounded-full bg-gradient-to-r from-[#415a77] to-[#1b263b] text-[#e0e1dd] text-xs font-bold uppercase tracking-widest shadow-lg">
                      Mais Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className={`p-8 pb-6 rounded-t-3xl ${plan.popular ? 'pt-10' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.iconBg} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 text-[#e0e1dd]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0d1b2a]">{plan.name}</h3>
                      <p className="text-[#5c7a99] text-xs font-medium">Plano {plan.name}</p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-[#5c7a99] text-lg">€</span>
                    <span className="text-5xl font-black text-[#0d1b2a] tracking-tight">{plan.price}</span>
                    <span className="text-[#5c7a99] text-sm font-medium ml-1">/ {plan.period}</span>
                  </div>

                  <p className="text-[#5c7a99] text-sm font-light leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="mx-8 h-px bg-gradient-to-r from-transparent via-[#415a77]/20 to-transparent" aria-hidden="true" />

                {/* Features */}
                <div className="p-8 pt-6 flex-1">
                  <ul className="space-y-3" role="list">
                    {plan.features.map((feature, j) => (
                      <li
                        key={j}
                        className="feature-item flex items-start gap-3 opacity-0"
                      >
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-[#276749]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FaCheck className="w-2.5 h-2.5 text-[#276749]" aria-hidden="true" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-[#c53030]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <FaTimes className="w-2.5 h-2.5 text-[#c53030]/50" aria-hidden="true" />
                          </div>
                        )}
                        <span
                          className={`text-sm ${
                            feature.included
                              ? 'text-[#0d1b2a] font-medium'
                              : 'text-[#5c7a99]/60 line-through'
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="p-8 pt-0">
                  <a
                    href="#contact"
                    className={`group/btn relative w-full flex items-center justify-center py-4 rounded-full font-semibold text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#415a77] to-[#1b263b] text-[#e0e1dd] hover:shadow-[0_0_40px_rgba(65,90,119,0.3)]'
                        : 'bg-[#e0e1dd] border border-[#415a77]/30 text-[#0d1b2a] hover:bg-[#415a77] hover:text-[#e0e1dd] hover:border-transparent'
                    }`}
                    aria-label={`${plan.cta} - Plano ${plan.name} por €${plan.price}`}
                  >
                    <span className="relative z-10">{plan.cta}</span>
                    {plan.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1b263b] to-[#415a77] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
                    )}
                  </a>
                </div>

                {/* Subtle glow for popular plan */}
                {plan.popular && (
                  <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#415a77]/20 to-transparent -z-10 blur-sm" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <div className="text-center mt-16">
          <p className="text-[#5c7a99] text-sm font-light">
            Todos os planos incluem domínio e alojamento no primeiro ano.{' '}
            <a
              href="#contact"
              className="text-[#415a77] font-medium hover:text-[#1b263b] underline underline-offset-4 transition-colors focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
            >
              Precisa de algo personalizado? Fale connosco.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
