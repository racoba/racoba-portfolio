"use client";

import {
  AppWindow,
  BrainCircuit,
  Code2,
  Database,
  Monitor,
  PenLine,
} from "lucide-react";
import { useLocale } from "@/components/locale-provider";

function SpeedIcon() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/55 to-orange-500/25 blur-xl" />
      <Monitor className="relative z-[1] h-9 w-9 text-white" strokeWidth={1.15} />
      <PenLine className="absolute bottom-2 right-2 z-[2] h-5 w-5 text-white/95" strokeWidth={1.35} />
    </div>
  );
}

function FrontendIcon() {
  return (
    <div className="relative flex h-14 w-14 items-center justify-center">
      <AppWindow className="relative z-[1] h-11 w-11 text-white" strokeWidth={1.15} />
      <Code2 className="absolute bottom-2 right-2 z-[2] h-5 w-5 text-white/95" strokeWidth={1.35} />
    </div>
  );
}

const servicesMeta = [
  {
    key: "speed" as const,
    glow: "from-amber-400/70 to-orange-500/40",
    icon: <SpeedIcon />,
  },
  {
    key: "fullStack" as const,
    glow: "from-lime-400/70 to-emerald-600/35",
    icon: (
      <BrainCircuit className="relative z-[1] h-10 w-10 text-white" strokeWidth={1.2} />
    ),
  },
  {
    key: "backend" as const,
    glow: "from-fuchsia-400/65 to-pink-600/35",
    icon: <Database className="relative z-[1] h-10 w-10 text-white" strokeWidth={1.2} />,
  },
  {
    key: "frontend" as const,
    glow: "from-cyan-400/65 to-teal-600/40",
    icon: <FrontendIcon />,
  },
];

export function ServicesSection({ id }: { id?: string }) {
  const { t } = useLocale();

  const copy = {
    speed: { title: t.services.speedTitle, description: t.services.speedDesc },
    fullStack: {
      title: t.services.fullStackTitle,
      description: t.services.fullStackDesc,
    },
    backend: {
      title: t.services.backendTitle,
      description: t.services.backendDesc,
    },
    frontend: {
      title: t.services.frontendTitle,
      description: t.services.frontendDesc,
    },
  };

  return (
    <section id={id} className="relative px-6 py-20 md:px-8">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        {t.services.sectionTitle}
      </h2>

      <div className="mx-auto mt-14 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {servicesMeta.map((service) => {
          const text = copy[service.key];
          return (
            <article
              key={service.key}
              className="flex flex-col items-center rounded-3xl border border-white/[0.09] bg-[#111114]/80 px-7 py-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur-md"
            >
              <div className="relative mb-8 flex h-24 w-24 items-center justify-center">
                <div
                  className={`pointer-events-none absolute inset-2 rounded-full bg-gradient-to-br ${service.glow} blur-2xl`}
                />
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white">{text.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                {text.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
