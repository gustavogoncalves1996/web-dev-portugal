import React from 'react';
import Terminal from './Terminal';

const Header: React.FC = () => {
  return (
    <header className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            WebDev
            <span className="text-gradient"> Portugal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
            Desenvolvimento Web Moderno & Inovador
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto animate-slide-up">
            Criamos experiências digitais excepcionais com as mais recentes tecnologias,
            focando sempre na performance e experiência do utilizador.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Terminal />
        </div>
        
        <div className="text-center mt-12">
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 mx-auto text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
          <p className="text-sm text-gray-400 mt-2">Explore os nossos projetos</p>
        </div>
      </div>
    </header>
  );
};

export default Header;