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
    video: "https://pujivxokzibqgazuzroq.supabase.co/storage/v1/object/sign/cfpressure/video%201%20favorflow.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZDBkMTM4NC02ODYxLTQ1OWQtYmJkMS1jMWQwOGIxZjRjYjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJjZnByZXNzdXJlL3ZpZGVvIDEgZmF2b3JmbG93Lm1wNCIsImlhdCI6MTc1MTI4Njc2OSwiZXhwIjoxODE0MzU4NzY5fQ.Olym3eeYskkLNPUfnbvsZ8sa5vzte836g1QAK6jiSwc",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "#",
    githubUrl: "#"
  },
 {
  id: 2,
  title: "CFPressure",
  description: "CFPressure, a limpeza é arte e o detalhe é lei. Esquece os serviços básicos — oferecemos uma experiência moderna, eficiente e minuciosa, com um toque futurista que transforma qualquer espaço. Usamos tecnologia de ponta, produtos premium e um olhar clínico para o brilho perfeito. Da tua casa ao teu escritório, tudo reluz como novo. Se procuras limpeza com precisão, elegância e resultados que impressionam, estás no sítio certo. CFPressure: porque o futuro brilha nos detalhes.",
  video: "https://pujivxokzibqgazuzroq.supabase.co/storage/v1/object/sign/cfpressure/cfpressure%20video%201.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xZDBkMTM4NC02ODYxLTQ1OWQtYmJkMS1jMWQwOGIxZjRjYjgiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJjZnByZXNzdXJlL2NmcHJlc3N1cmUgdmlkZW8gMS5tcDQiLCJpYXQiOjE3NTEyODY3MjEsImV4cCI6MTgxNDM1ODcyMX0.-hEIaFZ5FgXfD9b-3nTNHVLPE1Mf3MXNCH0YjgPdXDE",
  technologies: ["React", "TypeScript", "Node.js"],
  liveUrl: "#", 
  githubUrl: "#"
} 
];