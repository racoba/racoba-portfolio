export type Locale = "pt" | "en";

export type PortfolioCategory = "all" | "websites" | "apps";

export type PortfolioWorkCategory = Exclude<PortfolioCategory, "all">;

export type Messages = {
  brand: string;
  nav: {
    home: string;
    about: string;
    resume: string;
    portfolio: string;
    services: string;
    contact: string;
  };
  hero: {
    name: string;
    role: string;
    info: { label: string; value: string }[];
    contactMe: string;
    viewWork: string;
    portraitAlt: string;
    portraitSrc: string;
    backendTitle: string;
    frontendTitle: string;
    backendSkills: { label: string; pct: number }[];
    frontendSkills: { label: string; pct: number }[];
    resumeCta: string;
    badgePrimary: string;
    badgeSecondary: string;
  };
  resume: {
    sectionTitle: string;
    entries: {
      icon: "grad" | "brief";
      title: string;
      body: { text: string; underline?: boolean }[];
    }[];
  };
  portfolio: {
    sectionTitle: string;
    filterLabel: string;
    prevProjects: string;
    nextProjects: string;
    filters: {
      all: string;
      websites: string;
      apps: string;
    };
    works: {
      id: string;
      name: string;
      description: string;
      link: string;
      image: string;
      category: PortfolioWorkCategory;
    }[];
  };
  services: {
    sectionTitle: string;
    speedTitle: string;
    speedDesc: string;
    fullStackTitle: string;
    fullStackDesc: string;
    aiAgentsTitle: string;
    aiAgentsDesc: string;
  };
  contact: {
    sectionTitle: string;
    github: string;
    linkedIn: string;
    email: string;
    instagram: string;
    phone: string;
  };
  links: {
    github: string;
    linkedIn: string;
    instagram: string;
    mailto: string;
    tel: string;
  };
};
