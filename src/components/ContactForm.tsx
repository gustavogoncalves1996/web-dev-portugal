import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactForm: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'ola.webdevportugal@gmail.com',
      link: 'mailto:ola.webdevportugal@gmail.com',
      animation: 'group-hover:animate-bounce'
    },
    {
      icon: FaPhone,
      title: 'Telefone',
      content: '+351 925934270',
      link: 'tel:+351925934270',
      animation: 'group-hover:animate-pulse group-hover:rotate-12'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localização',
      content: 'Lisboa, Portugal',
      link: '#',
      animation: 'group-hover:animate-ping'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Entre em <span className="text-gradient">Contacto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos sempre disponíveis para discutir novos projetos, 
            parcerias ou simplesmente para uma conversa sobre tecnologia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div 
            className={`transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Vamos Conversar
              </h3>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed text-center max-w-2xl mx-auto">
                Tem um projeto em mente? Adoraríamos ouvir as suas ideias e ajudar 
                a transformá-las em realidade digital. Entre em contacto através de 
                qualquer um dos meios abaixo.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index}
                    className={`group text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 0.2}s` }}
                  >
                    <div className={`w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ease-in-out group-hover:scale-110 ${info.animation}`}>
                      <info.icon className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h4>
                    <a 
                      href={info.link}
                      className="text-gray-600 hover:text-primary-600 transition-colors text-xs break-all"
                    >
                      {info.content}
                    </a>
                  </div>
                ))}
              </div>

              {/* Additional CTA */}
              <div className="text-center mt-12">
                <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-primary-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  <span className="text-lg font-semibold">Pronto para começar o seu projeto?</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;