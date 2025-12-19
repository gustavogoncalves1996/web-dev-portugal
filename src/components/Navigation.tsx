import React from 'react';
import { FaHome, FaBriefcase, FaCogs, FaUser, FaEnvelope } from 'react-icons/fa';

const Navigation: React.FC = () => {
  const navItems = [
    { id: 'home', icon: FaHome, label: 'Início' },
    { id: 'portfolio', icon: FaBriefcase, label: 'Projetos' },
    { id: 'skills', icon: FaCogs, label: 'Competências' },
    { id: 'about', icon: FaUser, label: 'Sobre' },
    { id: 'contact', icon: FaEnvelope, label: 'Contacto' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {navItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="group relative floating-nav-btn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <item.icon className="w-5 h-5" />
            <span className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;