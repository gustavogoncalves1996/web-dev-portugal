import React, { useState } from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {/* Janela do Projeto */}
      <div className="relative bg-gray-900 p-4">
        {/* Barra superior da janela */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="text-gray-400 text-xs font-mono">
            {project.title.toLowerCase().replace(/\s+/g, '-')}.webdevpt.com
          </div>
          <div className="w-16"></div>
        </div>

        {/* Conteúdo da janela */}
        <div className="bg-white rounded-lg overflow-hidden">
          <div className={`w-full ${!imageLoaded && !videoLoaded ? 'animate-pulse bg-gray-200 aspect-video' : ''}`}>
            {project.video ? (
              <video
                className={`w-full h-auto object-contain ${
                  videoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoadedData={handleVideoLoad}
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={project.video} type="video/mp4" />
                O seu navegador não suporta vídeos HTML5.
              </video>
            ) : project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full object-cover aspect-video ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setImageLoaded(true)}
              />
            ) : (
              <div className="w-full aspect-video bg-gradient-to-br from-primary-400 to-purple-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{project.title}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Informações do Projeto */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tecnologias */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
            Tecnologias Utilizadas
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;