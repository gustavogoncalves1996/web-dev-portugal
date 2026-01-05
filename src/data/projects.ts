export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Favor-Flow",
    description: "No FavorFlow, tornamos a tua vida mais fácil: precisas que te vão buscar um vestido à loja? Entregar um presente a alguém? Ir buscar um documento, montar um móvel ou tratar de uma tarefa que não tens tempo? Pede literalmente o que quiseres — nós tratamos disso por ti. É como ter um assistente pessoal sempre disponível, pronto para realizar qualquer favor físico ou entrega personalizada, de forma rápida, segura e profissional. Tu pedes. Nós fazemos. Simples assim.",
    video: "https://va.media.tumblr.com/tumblr_t88v3hXzDq1rhxfd8_720.mp4",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
 {
  id: 2,
  title: "CFPressure",
  description: "CFPressure, a limpeza é arte e o detalhe é lei. Esquece os serviços básicos — oferecemos uma experiência moderna, eficiente e minuciosa, com um toque futurista que transforma qualquer espaço. Usamos tecnologia de ponta, produtos premium e um olhar clínico para o brilho perfeito. Da tua casa ao teu escritório, tudo reluz como novo. Se procuras limpeza com precisão, elegância e resultados que impressionam, estás no sítio certo. CFPressure: porque o futuro brilha nos detalhes.",
  video: "https://va.media.tumblr.com/tumblr_t88u3gwWFt1rhxfd8_720.mp4",
  technologies: ["React", "TypeScript", "Node.js"],
  liveUrl: "#", 
  githubUrl: "#"
} 
];