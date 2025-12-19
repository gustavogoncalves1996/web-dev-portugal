import React from 'react';
import { FaHeart, FaCode, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer className="bg-gray-900 text-white section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              WebDev <span className="text-primary-400">Portugal</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Criamos experiências digitais excepcionais com tecnologias modernas 
              e design centrado no utilizador.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                  Competências
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <p>oola.webdevportugal@gmail.com</p>
              <p>+351 925934270</p>
              <p>Lisboa, Portugal</p>
            </div>
            
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} WebDev Portugal. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>Feito com</span>
            <FaHeart className="w-4 h-4 text-red-500" />
            <span>e</span>
            <FaCode className="w-4 h-4 text-primary-400" />
            <span>em Portugal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;