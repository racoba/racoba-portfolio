export type PortfolioWorkCategory = "websites" | "apps";

export type PortfolioWork = {
  name: string;
  link: string;
  image: string;
  description: string;
  category: PortfolioWorkCategory;
};

export type TimelineStep = {
  title: string;
  description: string;
  year: number;
  icon: "SchoolIcon" | "WorkIcon";
};

const englishStrings = {
  links: {
    linkedin: "https://www.linkedin.com/in/bruno-racobaldo-76a7131b6/",
    instagram: "https://www.instagram.com/brunoracoba/",
    github: "https://github.com/racoba",
  },
  routes: {
    home: "Home",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
  },
  landing: {
    brand: "Bruno Racobaldo",
    nav: {
      resume: "Resume",
      services: "Services",
    },
    resume: {
      sectionTitle: "Resume",
    },
    hero: {
      name: "Bruno Racobaldo",
      role: "Full Stack Developer",
      portraitSrc: "/images/profile.jpg",
      portraitAlt: "Bruno Racobaldo — portrait",
      contactMe: "Contact me",
      viewWork: "View my work",
      resumeCta: "Resume",
      badgePrimary: "React",
      badgeSecondary: "ASP.NET",
      backendDeveloperTitle: "Backend developer",
      frontendDeveloperTitle: "Frontend developer",
      info: [
        {
          label: "Age",
          value: "24",
        },
        {
          label: "Degree",
          value: "Computer Engineering — SENAI CIMATEC",
        },
        {
          label: "City",
          value: "Salvador, BA — Brazil",
        },
        {
          label: "Experience",
          value: "6 years",
        },
        {
          label: "Currently",
          value: "Full Stack Developer @ Fetchly Labs",
        },
      ],
    },
    portfolio: {
      filterAria: "Portfolio filters",
      prev: "Previous projects",
      next: "Next projects",
      filters: {
        all: "All",
        websites: "Websites",
        apps: "Apps",
      },
    },
    services: {
      sectionTitle: "Services",
      speedTitle: "Speed & Optimization",
      speedDesc:
        "Improving load times, SEO, and overall user experience through code and asset optimization.",
      fullStackTitle: "Full-Stack Solutions",
      fullStackDesc:
        "End-to-end development from frontend UI to backend infrastructure and deployment.",
      backendTitle: "Backend Development",
      backendDesc:
        "Developing secure and scalable server-side logic, APIs, and database integration.",
      frontendTitle: "Frontend Development",
      frontendDesc:
        "Building responsive, user-friendly web interfaces using modern frameworks like React or Vue.",
    },
    contact: {
      sectionTitle: "Contact me",
      github: "GitHub",
      linkedIn: "LinkedIn",
      email: "Email",
      instagram: "Instagram",
      phone: "Phone",
    },
  },
  pages: {
    home: {
      myWorks: "Some of my work",
    },
    about: {
      aboutMe: [
        "I'm a passionate and results-driven Software Engineer graduated in Computer Engineering at SENAI CIMATEC. I have solid experience in full-stack development, working primarily with technologies such as React, Next.js, TypeScript, and Node.js.",
        "Throughout my journey, I've taken on roles ranging from Front-End Developer to Technical Director at CIMATEC Jr., where I led development teams and managed real-world projects with clients. I also gained industry experience during my internship at FIEB, focusing on systems integration and IT innovation.",
        "Currently, I work at Fetchly Labs, where I build scalable, high-performance applications and contribute to architectural decisions.",
        "I'm constantly learning, whether through courses on machine learning, exploring advanced front-end architectures, or diving into new frameworks. I'm driven by challenges, teamwork, and the opportunity to create impactful tech solutions.",
      ],
    },
    portfolio: {
      myWorks: "My Works",
      works: [
        {
          name: "Ciclick",
          link: "https://play.google.com/store/apps/details?id=com.ciclik&hl=en_US&gl=US",
          image:
            "https://media.licdn.com/dms/image/sync/v2/D4D27AQFpRrZiePJtJQ/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1711743660348?e=1746558000&v=beta&t=0-qXitZ_sGmdQ1D4eom8_rnrS_8A8Tc0_Mb--1NiTKQ",
          description:
            "Be a sustainable consumer, so you earn discounts and compete for exclusive prizes.",
          category: "apps",
        },
        {
          name: "Necessial",
          link: "https://www.necessial.com.br/",
          image:
            "https://media.licdn.com/dms/image/sync/v2/D4D27AQH8_BswPHZQQA/articleshare-shrink_800/articleshare-shrink_800/0/1726846065587?e=1746561600&v=beta&t=8pyhqt_BW2cx2jRd8-aAAQBqCYsOQCj4VE1M99GbZFA",
          description: "A natural products marketplace.",
          category: "websites",
        },
        {
          name: "Worlds",
          link: "https://tickets.changeworlds.org/",
          image:
            "https://image.typedream.com/cdn-cgi/image/width=3840,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/cc802dd2-55e2-443f-aa8d-e598b108b566/2pkonAnMyK3DYgA2b56g4jjViAF_worlds_website_banner_v2_041224_3840x1500.webp",
          description: "A ticketing platform for events and experiences.",
          category: "websites",
        },
        {
          name: "MovieSense",
          link: "https://movie-sense.vercel.app",
          image: "/images/movie-sense.png",
          description:
            "A movie recommendation algorithm based on user history.",
          category: "websites",
        },
        {
          name: "Carmnet",
          link: "https://www.carmnet.com/",
          image: "/images/carmnet.png",
          description: "A shipment transportation platform.",
          category: "websites",
        },
        {
          name: "Text My Guests",
          link: "https://textmyguests.com/",
          image: "/images/tmg.png",
          description:
            "Keep guests informed with scheduled texts & instant broadcasts. Collect replies, share pictures, and chat one-on-one—all in one place.",
          category: "websites",
        },
        {
          name: "ToDo List",
          link: "https://racobas-to-do-list.vercel.app/",
          image: "/images/todolist.png",
          description:
            "A simple personalized ToDo list to help with my activities.",
          category: "websites",
        },
      ] satisfies PortfolioWork[],
    },
    contact: {
      email: "brunoracobaldo@hotmail.com",
      phone: "+55 71 9 9920-3427",
    },
  },
  components: {
    timeline: {
      steps: [
        {
          title: "SENAI CIMATEC — College",
          description:
            "Started studying Computer Engineering with a focus on software architecture, embedded systems, and innovation.",
          year: 2020,
          icon: "SchoolIcon",
        },
        {
          title: "CIMATEC Jr. (Trainee)",
          description:
            "Joined as a trainee and began developing skills in software development and teamwork.",
          year: 2020,
          icon: "WorkIcon",
        },
        {
          title: "CIMATEC Jr. Coordinator (Front-End Developer)",
          description:
            "Worked as a Front-End Developer, focusing on web/mobile interfaces and project delivery.",
          year: 2021,
          icon: "WorkIcon",
        },
        {
          title: "StartApp ONE — Internship",
          description:
            "Worked as a full stack developer, developing mobile apps and websites.",
          year: 2021,
          icon: "WorkIcon",
        },
        {
          title: "Internship — FIEB",
          description:
            "Internship in IT and Innovation, working with systems integration and support.",
          year: 2023,
          icon: "WorkIcon",
        },
        {
          title: "Fetchly Labs",
          description:
            "Full Stack Developer working with React, TypeScript, and Next.js on various client projects.",
          year: 2024,
          icon: "WorkIcon",
        },
        {
          title: "SENAI CIMATEC — Graduation",
          description: "Graduated from Computer Engineering.",
          year: 2025,
          icon: "SchoolIcon",
        },
      ] satisfies TimelineStep[],
    },
    latestWorkMenu: [
      {
        name: "Worlds",
        link: "https://tickets.changeworlds.org/",
        image:
          "https://image.typedream.com/cdn-cgi/image/width=3840,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/cc802dd2-55e2-443f-aa8d-e598b108b566/2pkonAnMyK3DYgA2b56g4jjViAF_worlds_website_banner_v2_041224_3840x1500.webp",
        description: "A ticketing platform for events and experiences.",
      },
      {
        name: "Ciclick",
        link: "https://play.google.com/store/apps/details?id=com.ciclik&hl=en_US&gl=US",
        image:
          "https://media.licdn.com/dms/image/sync/v2/D4D27AQFpRrZiePJtJQ/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1711743660348?e=1746558000&v=beta&t=0-qXitZ_sGmdQ1D4eom8_rnrS_8A8Tc0_Mb--1NiTKQ",
        description:
          "Be a sustainable consumer, so you earn discounts and compete for exclusive prizes.",
      },
    ],
    bannerSection: {
      frontEnd: "Front-End",
      backEnd: "Back-End",
      frontEndSkills: ["Next.js", "React", "Angular"],
      backEndSkills: ["ASP.NET", "Node.js", "Python"],
    },
  },
};

const portugueseStrings = {
  links: {
    linkedin: "https://www.linkedin.com/in/bruno-racobaldo-76a7131b6/",
    instagram: "https://www.instagram.com/brunoracoba/",
    github: "https://github.com/racoba",
  },
  routes: {
    home: "Início",
    portfolio: "Portfólio",
    about: "Sobre",
    contact: "Contato",
  },
  landing: {
    brand: "Bruno Racobaldo",
    nav: {
      resume: "Currículo",
      services: "Serviços",
    },
    resume: {
      sectionTitle: "Currículo",
    },
    hero: {
      name: "Bruno Racobaldo",
      role: "Desenvolvedor Full Stack",
      portraitSrc: "/images/profile.jpg",
      portraitAlt: "Bruno Racobaldo — retrato",
      contactMe: "Fale comigo",
      viewWork: "Ver meu trabalho",
      resumeCta: "Currículo",
      badgePrimary: "React",
      badgeSecondary: "ASP.NET",
      backendDeveloperTitle: "Desenvolvedor backend",
      frontendDeveloperTitle: "Desenvolvedor frontend",
      info: [
        {
          label: "Idade",
          value: "24 anos",
        },
        {
          label: "Formação",
          value: "Engenharia da Computação — SENAI CIMATEC",
        },
        {
          label: "Cidade",
          value: "Salvador, BA — Brasil",
        },
        {
          label: "Experiência",
          value: "6 anos",
        },
        {
          label: "Atualmente",
          value: "Desenvolvedor Full Stack na Fetchly Labs",
        },
      ],
    },
    portfolio: {
      filterAria: "Filtros do portfólio",
      prev: "Projetos anteriores",
      next: "Próximos projetos",
      filters: {
        all: "Todos",
        websites: "Sites",
        apps: "Apps",
      },
    },
    services: {
      sectionTitle: "Serviços",
      speedTitle: "Velocidade e otimização",
      speedDesc:
        "Melhorar tempos de carregamento, SEO e experiência do usuário por meio de otimização de código e assets.",
      fullStackTitle: "Soluções full stack",
      fullStackDesc:
        "Desenvolvimento ponta a ponta da UI ao backend, infraestrutura e deploy.",
      backendTitle: "Desenvolvimento backend",
      backendDesc:
        "Lógica server-side segura e escalável, APIs e integração com bases de dados.",
      frontendTitle: "Desenvolvimento frontend",
      frontendDesc:
        "Interfaces web responsivas e agradáveis com frameworks modernos como React ou Vue.",
    },
    contact: {
      sectionTitle: "Fale comigo",
      github: "GitHub",
      linkedIn: "LinkedIn",
      email: "E-mail",
      instagram: "Instagram",
      phone: "Telefone",
    },
  },
  pages: {
    home: {
      myWorks: "Alguns dos meus trabalhos",
    },
    about: {
      aboutMe: [
        "Sou um engenheiro de software apaixonado e orientado a resultados, formado em Engenharia da Computação pelo SENAI CIMATEC. Tenho sólida experiência em desenvolvimento full-stack, trabalhando principalmente com tecnologias como React, Next.js, TypeScript e Node.js.",
        "Durante minha jornada, assumi papéis desde Desenvolvedor Front-End até Diretor Técnico na CIMATEC Jr., onde liderei equipes de desenvolvimento e gerenciei projetos reais com clientes. Também adquiri experiência na indústria durante meu estágio na FIEB, com foco em integração de sistemas e inovação em TI.",
        "Atualmente, trabalho na Fetchly Labs, onde construo aplicações escaláveis e de alto desempenho, além de contribuir para decisões arquiteturais.",
        "Estou em constante aprendizado, seja por meio de cursos sobre machine learning, explorando arquiteturas front-end avançadas ou mergulhando em novos frameworks. Sou movido por desafios, trabalho em equipe e pela oportunidade de criar soluções tecnológicas impactantes.",
      ],
    },
    portfolio: {
      myWorks: "Meus Trabalhos",
      works: [
        {
          name: "Ciclick",
          link: "https://play.google.com/store/apps/details?id=com.ciclik&hl=pt_BR&gl=BR",
          image:
            "https://media.licdn.com/dms/image/sync/v2/D4D27AQFpRrZiePJtJQ/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1711743660348?e=1746558000&v=beta&t=0-qXitZ_sGmdQ1D4eom8_rnrS_8A8Tc0_Mb--1NiTKQ",
          description:
            "Seja um consumidor sustentável, ganhe descontos e concorra a prêmios exclusivos.",
          category: "apps",
        },
        {
          name: "Necessial",
          link: "https://www.necessial.com.br/",
          image:
            "https://media.licdn.com/dms/image/sync/v2/D4D27AQH8_BswPHZQQA/articleshare-shrink_800/articleshare-shrink_800/0/1726846065587?e=1746561600&v=beta&t=8pyhqt_BW2cx2jRd8-aAAQBqCYsOQCj4VE1M99GbZFA",
          description: "Um marketplace de produtos naturais.",
          category: "websites",
        },
        {
          name: "Worlds",
          link: "https://tickets.changeworlds.org/",
          image:
            "https://image.typedream.com/cdn-cgi/image/width=3840,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/cc802dd2-55e2-443f-aa8d-e598b108b566/2pkonAnMyK3DYgA2b56g4jjViAF_worlds_website_banner_v2_041224_3840x1500.webp",
          description:
            "Uma plataforma de ingressos para eventos e experiências.",
          category: "websites",
        },
        {
          name: "MovieSense",
          link: "https://movie-sense.vercel.app",
          image: "/images/movie-sense.png",
          description:
            "Um algoritmo de recomendação de filmes baseado no histórico do usuário.",
          category: "websites",
        },
        {
          name: "Carmnet",
          link: "https://www.carmnet.com/",
          image: "/images/carmnet.png",
          description: "Uma plataforma de transporte de cargas.",
          category: "websites",
        },
        {
          name: "Text My Guests",
          link: "https://textmyguests.com/",
          image: "/images/tmg.png",
          description:
            "Mantenha os convidados informados com SMS agendados e transmissões instantâneas.",
          category: "websites",
        },
        {
          name: "ToDo List",
          link: "https://racobas-to-do-list.vercel.app/",
          image: "/images/todolist.png",
          description:
            "Uma lista de tarefas simples e personalizada para ajudar nas minhas atividades.",
          category: "websites",
        },
      ] satisfies PortfolioWork[],
    },
    contact: {
      email: "brunoracobaldo@hotmail.com",
      phone: "+55 71 9 9920-3427",
    },
  },
  components: {
    timeline: {
      steps: [
        {
          title: "SENAI CIMATEC — Faculdade",
          description:
            "Comecei Engenharia da Computação com foco em arquitetura de software, sistemas embarcados e inovação.",
          year: 2020,
          icon: "SchoolIcon",
        },
        {
          title: "CIMATEC Jr. (Trainee)",
          description:
            "Entrei como trainee e desenvolvi habilidades em desenvolvimento de software e trabalho em equipe.",
          year: 2020,
          icon: "WorkIcon",
        },
        {
          title: "Coordenador na CIMATEC Jr. (Front-End)",
          description:
            "Atuei como desenvolvedor front-end, com foco em interfaces web/mobile e entrega de projetos.",
          year: 2021,
          icon: "WorkIcon",
        },
        {
          title: "StartApp ONE — Estágio",
          description:
            "Desenvolvedor full stack em aplicativos mobile e sites.",
          year: 2021,
          icon: "WorkIcon",
        },
        {
          title: "Estágio — FIEB",
          description:
            "Estágio em TI e Inovação, atuando com integração de sistemas e suporte.",
          year: 2023,
          icon: "WorkIcon",
        },
        {
          title: "Fetchly Labs",
          description:
            "Desenvolvedor full stack com React, TypeScript e Next.js em projetos com clientes.",
          year: 2024,
          icon: "WorkIcon",
        },
        {
          title: "SENAI CIMATEC — Formatura",
          description: "Conclusão da graduação em Engenharia da Computação.",
          year: 2025,
          icon: "SchoolIcon",
        },
      ] satisfies TimelineStep[],
    },
    latestWorkMenu: [
      {
        name: "Worlds",
        link: "https://tickets.changeworlds.org/",
        image:
          "https://image.typedream.com/cdn-cgi/image/width=3840,format=auto,fit=scale-down,quality=100/https://api.typedream.com/v0/document/public/cc802dd2-55e2-443f-aa8d-e598b108b566/2pkonAnMyK3DYgA2b56g4jjViAF_worlds_website_banner_v2_041224_3840x1500.webp",
        description:
          "Uma plataforma de ingressos para eventos e experiências.",
      },
      {
        name: "Ciclick",
        link: "https://play.google.com/store/apps/details?id=com.ciclik&hl=pt_BR&gl=BR",
        image:
          "https://media.licdn.com/dms/image/sync/v2/D4D27AQFpRrZiePJtJQ/articleshare-shrink_1280_800/articleshare-shrink_1280_800/0/1711743660348?e=1746558000&v=beta&t=0-qXitZ_sGmdQ1D4eom8_rnrS_8A8Tc0_Mb--1NiTKQ",
        description:
          "Seja um consumidor sustentável, ganhe descontos e concorra a prêmios exclusivos.",
      },
    ],
    bannerSection: {
      frontEnd: "Front-End",
      backEnd: "Back-End",
      frontEndSkills: ["Next.js", "React", "Angular"],
      backEndSkills: ["ASP.NET", "Node.js", "Python"],
    },
  },
};

export const siteStrings = {
  en: englishStrings,
  pt: portugueseStrings,
};

export type SiteLocale = keyof typeof siteStrings;

export default englishStrings;
