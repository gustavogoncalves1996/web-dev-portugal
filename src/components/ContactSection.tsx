import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'ola.webdevportugal@gmail.com',
      link: 'mailto:ola.webdevportugal@gmail.com',
      target: '_self',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      content: '+351 925934270',
      link: 'https://wa.me/351925934270',
      target: '_blank',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localização',
      content: 'Lisboa, Portugal',
      link: 'https://maps.app.goo.gl/9JYDFvzv7L5zpiLn7',
      target: '_blank',
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
      className="relative py-32 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8fb] via-white to-[#f8f8fb]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-400/[0.06] rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-20 opacity-0">
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight tracking-tight">
            Entre em{' '}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mt-6 max-w-xl mx-auto font-light">
            Estamos disponíveis para discutir novos projetos e parcerias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Links */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                ref={(el) => { contactLinksRef.current[i] = el; }}
                href={info.link}
                target={info.target}
                rel={info.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-5 p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm opacity-0 transition-all duration-300 hover:bg-white hover:border-gray-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 flex items-center justify-center flex-shrink-0 group-hover:from-violet-200 group-hover:to-fuchsia-200 transition-all duration-300">
                  <info.icon className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-semibold text-sm mb-0.5">
                    {info.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-light group-hover:text-gray-600 transition-colors">
                    {info.content}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-300 ml-auto group-hover:text-violet-600 transition-all duration-300 group-hover:translate-x-1"
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
            ))}

            {/* Decorative text */}
            <div className="pt-8">
              <p className="text-gray-300 text-sm font-light leading-relaxed">
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
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Name */}
            <div className="relative">
              <label
                className={`absolute left-0 transition-all duration-300 pointer-events-none font-light ${
                  focusedField === 'name'
                    ? 'text-xs text-violet-600 -top-5'
                    : 'text-sm text-gray-400 top-4'
                }`}
              >
                Nome
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-200 py-4 text-gray-900 text-sm font-light outline-none focus:border-violet-500 transition-colors duration-300"
                onFocus={() => setFocusedField('name')}
                onBlur={(e) =>
                  !e.target.value && setFocusedField(null)
                }
              />
            </div>

            {/* Email */}
            <div className="relative">
              <label
                className={`absolute left-0 transition-all duration-300 pointer-events-none font-light ${
                  focusedField === 'email'
                    ? 'text-xs text-violet-600 -top-5'
                    : 'text-sm text-gray-400 top-4'
                }`}
              >
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-gray-200 py-4 text-gray-900 text-sm font-light outline-none focus:border-violet-500 transition-colors duration-300"
                onFocus={() => setFocusedField('email')}
                onBlur={(e) =>
                  !e.target.value && setFocusedField(null)
                }
              />
            </div>

            {/* Message */}
            <div className="relative">
              <label
                className={`absolute left-0 transition-all duration-300 pointer-events-none font-light ${
                  focusedField === 'message'
                    ? 'text-xs text-violet-600 -top-5'
                    : 'text-sm text-gray-400 top-4'
                }`}
              >
                Mensagem
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-gray-200 py-4 text-gray-900 text-sm font-light outline-none focus:border-violet-500 transition-colors duration-300 resize-none"
                onFocus={() => setFocusedField('message')}
                onBlur={(e) =>
                  !e.target.value && setFocusedField(null)
                }
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group relative w-full py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold text-sm tracking-wider uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] hover:scale-[1.02] mt-4"
            >
              <span className="relative z-10">Enviar Mensagem</span>
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
