import type { Locale, Messages } from "@/lib/i18n/types";
import { siteStrings } from "@/resources/strings";

function slugId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function mapTimelineIcon(icon: string): "grad" | "brief" {
  return icon === "SchoolIcon" ? "grad" : "brief";
}

function skillBars(labels: string[]): { label: string; pct: number }[] {
  const base = 96;
  return labels.map((label, i) => ({
    label,
    pct: Math.max(70, base - i * 7),
  }));
}

export function buildMessages(locale: Locale): Messages {
  const s = siteStrings[locale];
  const contact = s.pages.contact;

  const works = s.pages.portfolio.works.map((w) => ({
    id: slugId(w.name),
    name: w.name,
    description: w.description,
    link: w.link,
    image: w.image,
    category: w.category,
  }));

  const entries = s.components.timeline.steps.map((step) => ({
    icon: mapTimelineIcon(step.icon),
    title: `${step.title} · ${step.year}`,
    body: [{ text: step.description }] as {
      text: string;
      underline?: boolean;
    }[],
  }));

  return {
    brand: s.landing.brand,
    nav: {
      home: s.routes.home,
      about: s.routes.about,
      resume: s.landing.nav.resume,
      portfolio: s.routes.portfolio,
      services: s.landing.nav.services,
      contact: s.routes.contact,
    },
    hero: {
      name: s.landing.hero.name,
      role: s.landing.hero.role,
      info: s.landing.hero.info,
      contactMe: s.landing.hero.contactMe,
      viewWork: s.landing.hero.viewWork,
      portraitAlt: s.landing.hero.portraitAlt,
      portraitSrc: s.landing.hero.portraitSrc,
      backendTitle: s.landing.hero.backendDeveloperTitle,
      frontendTitle: s.landing.hero.frontendDeveloperTitle,
      backendSkills: skillBars(s.components.bannerSection.backEndSkills),
      frontendSkills: skillBars(s.components.bannerSection.frontEndSkills),
      resumeCta: s.landing.hero.resumeCta,
      badgePrimary: s.landing.hero.badgePrimary,
      badgeSecondary: s.landing.hero.badgeSecondary,
    },
    resume: {
      sectionTitle: s.landing.resume.sectionTitle,
      entries,
    },
    portfolio: {
      sectionTitle: s.pages.portfolio.myWorks,
      filterLabel: s.landing.portfolio.filterAria,
      prevProjects: s.landing.portfolio.prev,
      nextProjects: s.landing.portfolio.next,
      filters: s.landing.portfolio.filters,
      works,
    },
    services: {
      sectionTitle: s.landing.services.sectionTitle,
      speedTitle: s.landing.services.speedTitle,
      speedDesc: s.landing.services.speedDesc,
      fullStackTitle: s.landing.services.fullStackTitle,
      fullStackDesc: s.landing.services.fullStackDesc,
      aiAgentsTitle: s.landing.services.aiAgentsTitle,
      aiAgentsDesc: s.landing.services.aiAgentsDesc,
    },
    contact: {
      sectionTitle: s.landing.contact.sectionTitle,
      github: s.landing.contact.github,
      linkedIn: s.landing.contact.linkedIn,
      email: s.landing.contact.email,
      instagram: s.landing.contact.instagram,
      phone: s.landing.contact.phone,
    },
    links: {
      github: s.links.github,
      linkedIn: s.links.linkedin,
      instagram: s.links.instagram,
      mailto: `mailto:${contact.email}`,
      tel: `tel:${contact.phone.replace(/[\s-]/g, "")}`,
    },
  };
}
