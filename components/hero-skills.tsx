"use client";

import Image from "next/image";
import { Code2, Database } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { SkillBar } from "@/components/skill-bar";

export function HeroSkills({ id = "home" }: { id?: string }) {
  const { t } = useLocale();

  return (
    <section id={id} className="relative px-6 pb-24 pt-10 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="space-y-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {t.hero.name}{" "}
            <span className="font-semibold text-zinc-400">| {t.hero.role}</span>
          </h1>

          <div
            id="about"
            className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 sm:gap-x-6"
          >
            {t.hero.info.map((row) => (
              <div key={row.label} className="flex items-start gap-3 text-sm">
                <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-white" />
                <p className="min-w-0 leading-relaxed text-zinc-400">
                  <span className="font-medium text-zinc-200">{row.label}:</span>
                  <span className="text-zinc-400"> {row.value}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-600 px-8 py-3 text-sm font-medium text-white shadow-[0_0_40px_-12px_rgba(168,85,247,0.35)] transition hover:bg-zinc-500"
            >
              {t.hero.contactMe}
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-transparent px-8 py-3 text-sm font-medium text-white transition hover:border-white/50 hover:bg-white/5"
            >
              {t.hero.viewWork}
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md justify-center lg:mx-0 lg:justify-end">
          <div className="relative h-[340px] w-[280px] md:h-[400px] md:w-[320px]">
            <div className="absolute -right-6 top-16 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500/90 to-purple-600/80 text-xs font-bold text-white shadow-lg shadow-fuchsia-500/30 animate-float-soft">
              {t.hero.badgePrimary}
            </div>
            <div className="absolute -left-4 bottom-24 flex min-h-[72px] min-w-[72px] max-w-[88px] items-center justify-center rounded-full border border-white/20 bg-sky-600/40 px-2 text-center text-xs font-bold leading-tight text-white backdrop-blur-sm shadow-[0_0_40px_rgba(56,189,248,0.35)] animate-float-soft-delayed sm:text-sm">
              {t.hero.badgeSecondary}
            </div>

            <div
              className="relative h-full w-full overflow-hidden rounded-[63%_37%_54%_46%/55%_48%_52%_45%] border border-white/35 shadow-[0_0_60px_-15px_rgba(139,92,246,0.45)]"
              style={{
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.08), 0 20px 80px -20px rgba(59,130,246,0.35)",
              }}
            >
              <Image
                src={t.hero.portraitSrc}
                alt={t.hero.portraitAlt}
                fill
                className="-scale-x-100 object-cover saturate-[0.85] hue-rotate-[-8deg]"
                sizes="(max-width: 768px) 280px, 320px"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-600/35 via-transparent to-cyan-400/20 mix-blend-soft-light" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl gap-8 md:grid-cols-2">
        <article className="rounded-[28px] border border-white/[0.08] bg-white/[0.05] p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <Database className="h-6 w-6 text-zinc-100" strokeWidth={1.5} />
            <h2 className="text-lg font-semibold">{t.hero.backendTitle}</h2>
          </div>
          <div className="space-y-5">
            {t.hero.backendSkills.map((s) => (
              <SkillBar key={s.label} label={s.label} pct={s.pct} />
            ))}
          </div>
        </article>

        <article className="rounded-[28px] border border-white/[0.08] bg-white/[0.05] p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-3">
            <Code2 className="h-6 w-6 text-zinc-100" strokeWidth={1.5} />
            <h2 className="text-lg font-semibold">{t.hero.frontendTitle}</h2>
          </div>
          <div className="space-y-5">
            {t.hero.frontendSkills.map((s) => (
              <SkillBar key={s.label} label={s.label} pct={s.pct} />
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
