export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  icon: string;
}

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: 'frontend', icon: 'FaReact' },
  { name: "TypeScript", level: 90, category: 'frontend', icon: 'SiTypescript' },
  { name: "Vue.js", level: 85, category: 'frontend', icon: 'FaVuejs' },
  { name: "Angular", level: 80, category: 'frontend', icon: 'FaAngular' },
  { name: "Tailwind CSS", level: 95, category: 'frontend', icon: 'SiTailwindcss' },
  
  // Backend
  { name: "Node.js", level: 90, category: 'backend', icon: 'FaNodeJs' },
  { name: "Python", level: 85, category: 'backend', icon: 'FaPython' },
  { name: "PostgreSQL", level: 88, category: 'backend', icon: 'SiPostgresql' },
  { name: "MongoDB", level: 82, category: 'backend', icon: 'SiMongodb' },
  
  // Tools
  { name: "Git", level: 92, category: 'tools', icon: 'FaGitAlt' },
  { name: "Docker", level: 85, category: 'tools', icon: 'FaDocker' },
  { name: "AWS", level: 78, category: 'tools', icon: 'FaAws' },
  
  // Design
  { name: "Figma", level: 88, category: 'design', icon: 'FaFigma' },
  { name: "UI/UX Design", level: 85, category: 'design', icon: 'MdDesignServices' }
];