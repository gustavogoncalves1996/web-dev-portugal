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
    <footer className="relative py-16 px-6 border-t border-gray-200">
      <div className="absolute inset-0 bg-white" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">
              WebDev{' '}
              <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                Portugal
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-sm font-light">
              Criamos experiências digitais excepcionais com tecnologias modernas
              e design centrado no utilizador.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-500 font-semibold text-sm uppercase tracking-widest mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Competências', 'Projetos', 'Contacto'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item === 'Início' ? 'home' : item === 'Sobre' ? 'about' : item === 'Competências' ? 'skills' : item === 'Projetos' ? 'portfolio' : 'contact'}`}
                      className="text-gray-400 hover:text-violet-600 transition-colors text-sm font-light"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-500 font-semibold text-sm uppercase tracking-widest mb-4">
              Contacto
            </h4>
            <div className="space-y-2 text-gray-400 text-sm font-light">
              <p>ola.webdevportugal@gmail.com</p>
              <p>+351 925934270</p>
              <p>Lisboa, Portugal</p>
            </div>

            <div className="flex space-x-3 mt-6">
              {/* {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 hover:text-violet-600 hover:border-violet-300 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))} */}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {currentYear} WebDev Portugal. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-gray-400 text-xs">
            <span>Feito com</span>
            <FaHeart className="w-3 h-3 text-red-500/60" />
            <span>em Portugal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
