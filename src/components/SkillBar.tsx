import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, 
  FaGitAlt, FaDocker, FaAws, FaFigma 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb 
} from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { Skill } from '../data/skills';

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  FaReact,
  SiTypescript,
  FaVuejs,
  FaAngular,
  SiTailwindcss,
  FaNodeJs,
  FaPython,
  SiPostgresql,
  SiMongodb,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaFigma,
  MdDesignServices,
};

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, skill.level, delay]);

  const IconComponent = iconMap[skill.icon];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'text-blue-500';
      case 'backend':
        return 'text-green-500';
      case 'tools':
        return 'text-purple-500';
      case 'design':
        return 'text-pink-500';
      default:
        return 'text-gray-500';
    }
  };

  const getProgressColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'bg-blue-500';
      case 'backend':
        return 'bg-green-500';
      case 'tools':
        return 'bg-purple-500';
      case 'design':
        return 'bg-pink-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div ref={ref} className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          {IconComponent && (
            <IconComponent className={`w-5 h-5 ${getCategoryColor(skill.category)}`} />
          )}
          <span className="font-medium text-gray-900">{skill.name}</span>
        </div>
        <span className="text-sm font-semibold text-gray-600">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressColor(skill.category)}`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;