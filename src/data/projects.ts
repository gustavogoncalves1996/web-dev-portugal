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
    title: "King Booker",
    description: "No King Booker, a tua gestão de empresa fica muito mais fácil: precisas de uma solução completa para gerir a tua empresa de forma eficiente e organizada? O King Booker é a tua resposta definitiva. Com uma interface intuitiva, oferecemos ferramentas poderosas para gerir os teus clientes e otimizar as tuas operações diárias. Seja para pequenas empresas ou startups em crescimento, o King Booker é a ferramenta que te permite focar no que realmente importa: fazer crescer o teu negócio. Simplifica a gestão da tua empresa com o King Booker e alcança o sucesso que mereces.",
    video: "https://va.media.tumblr.com/tumblr_tawnjcWSSY1b0v1cc_720.mp4",
    technologies: ["React", "TypeScript", "Node.js"],
    liveUrl: "https://kingbooker.pt/",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "CV Builder",
    description: "No CVBuilder, tornamos a tua vida mais fácil: precisas de criar o teu currículo de forma fácil, rápida e personalizada? O CVBuilder é a tua solução definitiva. Com uma interface intuitiva, oferecemos templates modernos e profissionais que se adaptam ao teu estilo. Basta preencher os teus dados, escolher o design que mais gostas e voilà — um currículo impressionante pronto para ser partilhado. Seja para candidaturas de emprego, networking ou simplesmente para manteres o teu perfil atualizado, o CVBuilder é a ferramenta que te ajuda a destacar-te no mercado de trabalho. Cria o teu currículo perfeito em minutos e mostra ao mundo o teu potencial com o CVBuilder.",
    video: "https://va.media.tumblr.com/tumblr_tawn5jmit41b0v1cc_720.mp4",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://cvbuilder.pt/",
    githubUrl: "#"
  },
  
];