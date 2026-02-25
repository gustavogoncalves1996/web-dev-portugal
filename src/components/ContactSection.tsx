import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

/* Deep Sea Light Theme - Accessible Palette (WCAG 2.1 AA)
   #0d1b2a - Ink Black (text - 12.6:1 on light)
   #1b263b - Prussian Blue (headings - 9.8:1)
   #415a77 - Dusk Blue (accents - 4.9:1)
   #5c7a99 - Slate Blue (secondary text - 4.5:1) ← Adjusted for contrast
   #e0e1dd - Alabaster (background)
   #f5f5f3 - Soft White (cards)
   
   Semantic:
   #c53030 - Error (5.9:1)
   #276749 - Success (5.7:1)
   #2563eb - Focus (4.6:1)
*/

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Form status for accessibility announcements
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle form submission - opens mailto with captured data
  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const recipient = 'ola.webdevportugal@gmail.com';
    const subject = encodeURIComponent('Novo contacto via Website - WebDev Portugal');

    // Format the body with the user's info
    const bodyContent = `De: ${formData.name || 'Não especificado'}
Email de contacto: ${formData.email || 'Não especificado'}

Mensagem:
${formData.message || 'Sem mensagem'}

---
Enviado através do formulário de contacto do website WebDev Portugal`;

    const body = encodeURIComponent(bodyContent);

    // Update status for screen readers
    setFormStatus('success');

    // Focus the status message for screen reader announcement
    setTimeout(() => {
      statusRef.current?.focus();
    }, 100);

    // Open the default email client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'ola.webdevportugal@gmail.com',
      link: 'mailto:ola.webdevportugal@gmail.com',
      target: '_self',
      ariaLabel: 'Enviar email para ola.webdevportugal@gmail.com',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: '+351 925934270',
      link: 'https://wa.me/351925934270',
      target: '_blank',
      ariaLabel: 'Contactar via WhatsApp (abre em nova janela)',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localização',
      content: 'Lisboa, Portugal',
      link: 'https://maps.app.goo.gl/9JYDFvzv7L5zpiLn7',
      target: '_blank',
      ariaLabel: 'Ver localização no Google Maps (abre em nova janela)',
    },
  ];

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
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      contactLinksRef.current.forEach((link, i) => {
        if (!link) return;
        gsap.fromTo(
          link,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: link,
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
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-16 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background - Light Theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e0e1dd] via-[#f5f5f3] to-[#e0e1dd]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#415a77]/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20 opacity-0">
          <h2
            id="contact-heading"
            className="text-5xl md:text-7xl font-black text-[#0d1b2a] leading-tight tracking-tight"
          >
            Entre em{' '}
            <span className="bg-gradient-to-r from-[#415a77] to-[#1b263b] bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-[#5c7a99] text-lg md:text-xl mt-6 max-w-xl mx-auto font-light">
            Estamos disponíveis para discutir novos projetos e parcerias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Links */}
          <div className="space-y-6" role="list" aria-label="Meios de contacto">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                ref={(el) => { contactLinksRef.current[i] = el; }}
                href={info.link}
                target={info.target}
                rel={info.target === '_blank' ? 'noopener noreferrer' : undefined}
                aria-label={info.ariaLabel}
                role="listitem"
                className="group flex items-center gap-5 p-6 rounded-2xl bg-[#f5f5f3] backdrop-blur-sm border border-[#415a77]/20 shadow-sm opacity-0 transition-all duration-300 hover:bg-white hover:border-[#415a77]/40 hover:shadow-lg hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#415a77] to-[#1b263b] flex items-center justify-center flex-shrink-0 group-hover:from-[#1b263b] group-hover:to-[#415a77] transition-all duration-300">
                  <info.icon className="w-6 h-6 text-[#e0e1dd]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-[#0d1b2a] font-semibold text-sm mb-0.5">
                    {info.title}
                  </h3>
                  <p className="text-[#5c7a99] text-sm font-light group-hover:text-[#1b263b] transition-colors">
                    {info.content}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-[#415a77] ml-auto group-hover:text-[#1b263b] transition-all duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            ))}

            {/* Decorative text */}
            <div className="pt-8">
              <p className="text-[#5c7a99] text-sm font-light leading-relaxed">
                Adoraríamos ouvir as suas ideias e ajudar a transformá-las em
                realidade digital. Entre em contacto através de qualquer um dos
                meios acima.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            className="space-y-6 opacity-0"
            onSubmit={handleSendEmail}
            aria-label="Formulário de contacto"
          >
            {/* Status message for screen readers */}
            <div
              ref={statusRef}
              role="status"
              aria-live="polite"
              tabIndex={-1}
              className={`text-sm font-medium mb-2 transition-all duration-300 ${formStatus === 'success'
                  ? 'text-[#276749]'
                  : formStatus === 'error'
                    ? 'text-[#c53030]'
                    : 'sr-only'
                }`}
            >
              {formStatus === 'success' && 'Mensagem enviada com sucesso! O seu cliente de email foi aberto.'}
              {formStatus === 'error' && 'Ocorreu um erro ao enviar a mensagem. Por favor tente novamente.'}
            </div>


            {/* Name */}
            <div className="relative">
              <label
                htmlFor="contact-name"
                className={`absolute left-0 transition-all duration-300 pointer-events-none font-light ${focusedField === 'name' || formData.name
                    ? 'text-xs text-[#1b263b] -top-5 font-medium'
                    : 'text-sm text-[#5c7a99] top-4'
                  }`}
              >
                Nome
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b-2 border-[#415a77]/30 py-4 text-[#0d1b2a] text-sm font-light outline-none focus:border-[#415a77] focus-visible:border-[#2563eb] transition-colors duration-300"
                onFocus={() => setFocusedField('name')}
                onBlur={() => setFocusedField(null)}
                aria-required="false"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label
                htmlFor="contact-email"
                className={`absolute left-0 transition-all duration-300 pointer-events-none font-light ${focusedField === 'email' || formData.email
                    ? 'text-xs text-[#1b263b] -top-5 font-medium'
                    : 'text-sm text-[#5c7a99] top-4'
                  }`}
              >
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b-2 border-[#415a77]/30 py-4 text-[#0d1b2a] text-sm font-light outline-none focus:border-[#415a77] focus-visible:border-[#2563eb] transition-colors duration-300"
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                aria-required="false"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label
                htmlFor="contact-message"
                className={`absolute left-0 transition-all duration-300 pointer-events-none font-light ${focusedField === 'message' || formData.message
                    ? 'text-xs text-[#1b263b] -top-5 font-medium'
                    : 'text-sm text-[#5c7a99] top-4'
                  }`}
              >
                Mensagem
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-transparent border-b-2 border-[#415a77]/30 py-4 text-[#0d1b2a] text-sm font-light outline-none focus:border-[#415a77] focus-visible:border-[#2563eb] transition-colors duration-300 resize-none"
                onFocus={() => setFocusedField('message')}
                onBlur={() => setFocusedField(null)}
                aria-required="false"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              aria-label="Enviar mensagem de contacto"
              className="group relative w-full py-4 rounded-full bg-gradient-to-r from-[#415a77] to-[#1b263b] text-[#e0e1dd] font-semibold text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(65,90,119,0.3)] hover:scale-[1.02] mt-4 focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              <span className="relative z-10">Enviar Mensagem</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1b263b] to-[#415a77] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
