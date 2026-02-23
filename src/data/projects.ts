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
  // {
  //   id: 2,
  //   title: "CV Builder",
  //   description: "No CVBuilder, tornamos a tua vida mais fácil: precisas de criar o teu currículo de forma fácil, rápida e personalizada? O CVBuilder é a tua solução definitiva. Com uma interface intuitiva, oferecemos templates modernos e profissionais que se adaptam ao teu estilo. Basta preencher os teus dados, escolher o design que mais gostas e voilà — um currículo impressionante pronto para ser partilhado. Seja para candidaturas de emprego, networking ou simplesmente para manteres o teu perfil atualizado, o CVBuilder é a ferramenta que te ajuda a destacar-te no mercado de trabalho. Cria o teu currículo perfeito em minutos e mostra ao mundo o teu potencial com o CVBuilder.",
  //   video: "https://va.media.tumblr.com/tumblr_tawn5jmit41b0v1cc_720.mp4",
  //   technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
  //   liveUrl: "https://cvbuilder.pt/",
  //   githubUrl: "#"
  // },
  {
    id: 3,
    title: "Brasão",
    description: "Restaurante Brasão é um projeto que visa criar uma experiência gastronómica única, combinando a tradição culinária com um ambiente acolhedor e moderno. O restaurante oferece uma variedade de pratos inspirados na cozinha portuguesa, utilizando ingredientes frescos e de alta qualidade. Com um serviço atencioso e uma atmosfera convidativa, o Restaurante Brasão é o local perfeito para desfrutar de uma refeição memorável, seja para um jantar romântico, uma reunião de negócios ou uma celebração em família. Venha descobrir os sabores autênticos e a hospitalidade calorosa do Restaurante Brasão.",
    video: "https://va.media.tumblr.com/tumblr_tax1udCZkf1b0v1cc_720.mp4",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://bras-o-restaurant-pr-6r2a.bolt.host/",
    githubUrl: "#"
  },
  
  {
    id: 4,
    title: "Palazzo Collections",
    description: "No Palazzo Collections, elevamos a venda da sua propriedade a um novo patamar. Somos uma plataforma inovadora que conecta proprietários de imóveis a compradores e investidores, oferecendo uma experiência de venda personalizada e eficiente. Com uma interface intuitiva e ferramentas avançadas de marketing, ajudamos a destacar as suas propriedades no mercado, atraindo o público certo e maximizando o valor da sua venda. Seja para vender um apartamento, uma casa ou um imóvel comercial, o Palazzo Collections é a solução definitiva para transformar a sua experiência de venda imobiliária. Descubra como podemos ajudar a vender a sua propriedade de forma rápida e lucrativa com o Palazzo Collections.",
    video: "https://va.media.tumblr.com/tumblr_tax1wtKLaV1b0v1cc_720.mp4",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://palazzo-collections-pbz9.bolt.host/",
    githubUrl: "#"
  },

];