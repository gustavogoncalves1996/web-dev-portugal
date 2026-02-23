import React from 'react';
import { FaHeart/*, FaGithub, FaLinkedin, FaTwitter*/ } from 'react-icons/fa';

const FooterNew: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // const socialLinks = [
  //   { icon: FaGithub, href: '#', label: 'GitHub' },
  //   { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
  //   { icon: FaTwitter, href: '#', label: 'Twitter' },
  // ];

  return (
    <footer className="relative py-16 px-6 border-t border-[#415a77]/20" role="contentinfo">
      <div className="absolute inset-0 bg-[#f5f5f3]" aria-hidden="true" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-[#0d1b2a] mb-3 tracking-tight">
              WebDev{' '}
              <span className="bg-gradient-to-r from-[#415a77] to-[#1b263b] bg-clip-text text-transparent">
                Portugal
              </span>
            </h3>
            <p className="text-[#5c7a99] leading-relaxed text-sm font-light">
              Criamos experiências digitais excepcionais com tecnologias modernas
              e design centrado no utilizador.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Links rápidos">
            <h4 className="text-[#1b263b] font-semibold text-sm uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Competências', 'Projetos', 'Contacto'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item === 'Início' ? 'home' : item === 'Sobre' ? 'about' : item === 'Competências' ? 'skills' : item === 'Projetos' ? 'portfolio' : 'contact'}`}
                      className="text-[#5c7a99] hover:text-[#0d1b2a] transition-colors text-sm font-light focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-[#1b263b] font-semibold text-sm uppercase tracking-widest mb-4">
              Contacto
            </h4>
            <address className="space-y-2 text-[#5c7a99] text-sm font-light not-italic">
              <p>
                <a href="mailto:ola.webdevportugal@gmail.com" className="hover:text-[#0d1b2a] transition-colors focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded">
                  ola.webdevportugal@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:+351925934270" className="hover:text-[#0d1b2a] transition-colors focus-visible:ring-2 focus-visible:ring-[#2563eb] rounded">
                  +351 925934270
                </a>
              </p>
              <p>Lisboa, Portugal</p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#415a77]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#5c7a99] text-xs">
            © {currentYear} WebDev Portugal. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-[#5c7a99] text-xs">
            <span>Feito com</span>
            <FaHeart className="w-3 h-3 text-red-500" aria-label="amor" />
            <span>em Portugal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
