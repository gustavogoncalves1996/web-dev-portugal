import React from 'react';
import { useInView } from 'react-intersection-observer';
import SkillBar from './SkillBar';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    design: skills.filter(skill => skill.category === 'design'),
  };

  const categoryTitles = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Ferramentas',
    design: 'Design',
  };

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-max">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            As Nossas <span className="text-gradient">Competências</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dominamos uma vasta gama de tecnologias modernas para criar soluções 
            completas e eficientes, desde o frontend até ao backend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(categories).map(([category, categorySkills], categoryIndex) => (
            <div
              key={category}
              className={`bg-gray-50 rounded-xl p-6 transition-all duration-1000 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
              {categorySkills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  delay={categoryIndex * 200 + skillIndex * 100}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;