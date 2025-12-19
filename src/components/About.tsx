import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    {
      icon: FaCode,
      title: 'Código Limpo',
      description: 'Escrevemos código maintível, escalável e bem documentado seguindo as melhores práticas da indústria.'
    },
    {
      icon: FaUsers,
      title: 'Colaboração',
      description: 'Trabalhamos em estreita colaboração com os nossos clientes para garantir que cada projeto supera as expectativas.'
    },
    {
      icon: FaLightbulb,
      title: 'Inovação',
      description: 'Mantemo-nos sempre atualizados com as últimas tecnologias e tendências do desenvolvimento web.'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Otimizamos cada projeto para garantir velocidade, acessibilidade e uma experiência de utilizador excecional.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-max">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-500 ease-in-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre <span className="text-gradient">Nós</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Somos uma equipa apaixonada de desenvolvedores web sediada em Portugal, 
            dedicada a criar <span className="animated-underline">experiências digitais excepcionais</span>. Com anos de experiência 
            no desenvolvimento de <span className="animated-underline">soluções web modernas</span>, combinamos criatividade, 
            tecnologia de ponta e uma abordagem centrada no utilizador para entregar 
            projetos que não só atendem, mas superam as expectativas dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-6 text-center shadow-lg card-hover transition-all duration-500 ease-in-out ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4 transition-all duration-300 ease-in-out group-hover:animate-pulse-subtle group-hover:rotate-6">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;