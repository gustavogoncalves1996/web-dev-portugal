import React from 'react';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Portfolio: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-max">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Os Nossos <span className="text-gradient">Projetos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada projeto é apresentado numa janela individual para melhor visualização. 
            Explore as nossas soluções digitais desenvolvidas com tecnologias de ponta.
          </p>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.3}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Chamada para ação */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Tem um projeto em mente?
            </h3>
            <p className="text-gray-600 mb-6">
              Adoraríamos ajudar a transformar a sua ideia numa realidade digital.
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Fale Connosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;