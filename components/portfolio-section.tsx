"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import type { PortfolioCategory } from "@/lib/i18n/types";

const FILTER_ORDER: PortfolioCategory[] = ["all", "websites", "apps"];

export function PortfolioSection({ id }: { id?: string }) {
  const { t } = useLocale();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<PortfolioCategory>("all");

  const filtersInUse = useMemo(() => {
    const withWorks = new Set(
      t.portfolio.works.map((w) => w.category),
    );
    return FILTER_ORDER.filter(
      (key) => key === "all" || withWorks.has(key),
    );
  }, [t.portfolio.works]);

  useEffect(() => {
    if (!filtersInUse.includes(filter)) {
      setFilter("all");
    }
  }, [filter, filtersInUse]);

  const filterLabels: Record<PortfolioCategory, string> = {
    all: t.portfolio.filters.all,
    websites: t.portfolio.filters.websites,
    apps: t.portfolio.filters.apps,
  };

  const visible = useMemo(() => {
    const works = t.portfolio.works;
    if (filter === "all") return works;
    return works.filter((p) => p.category === filter);
  }, [filter, t.portfolio.works]);

  function scroll(dir: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.max(el.clientWidth * 0.85, 280);
    el.scrollBy({ left: dir === "left" ? -delta : delta, behavior: "smooth" });
  }

  return (
    <section id={id} className="relative px-6 py-20 md:px-8">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        {t.portfolio.sectionTitle}
      </h2>

      <nav
        className="mx-auto mt-10 flex w-fit max-w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 px-2 text-sm text-zinc-500 sm:gap-x-6 sm:gap-y-3"
        aria-label={t.portfolio.filterLabel}
      >
        {filtersInUse.map((key) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              className={`relative pb-2 transition-colors ${
                active ? "font-medium text-white" : "hover:text-zinc-300"
              }`}
            >
              {filterLabels[key]}
              {active ? (
                <span className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-8 rounded-full bg-white" />
              ) : null}
            </button>
          );
        })}
      </nav>

      <div className="relative mx-auto mt-14 max-w-6xl">
        <button
          type="button"
          onClick={() => scroll("left")}
          aria-label={t.portfolio.prevProjects}
          className="absolute left-0 top-1/2 z-20 flex -translate-x-1 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#141416]/90 p-2.5 text-white shadow-lg backdrop-blur-md transition hover:bg-[#1c1c20] sm:-translate-x-3 sm:p-3 md:-translate-x-4"
        >
          <ChevronLeft className="h-7 w-7" strokeWidth={1.25} />
        </button>
        <button
          type="button"
          onClick={() => scroll("right")}
          aria-label={t.portfolio.nextProjects}
          className="absolute right-0 top-1/2 z-20 flex translate-x-1 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#141416]/90 p-2.5 text-white shadow-lg backdrop-blur-md transition hover:bg-[#1c1c20] sm:translate-x-3 sm:p-3 md:translate-x-4"
        >
          <ChevronRight className="h-7 w-7" strokeWidth={1.25} />
        </button>

        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:-mx-2 [&::-webkit-scrollbar]:hidden"
        >
          {visible.map((project) => (
            <article
              key={project.id}
              className="min-w-[min(100%,280px)] shrink-0 snap-start sm:min-w-[320px] lg:min-w-[calc(33.333%-16px)]"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
              >
                <div className="overflow-hidden rounded-[22px] border border-white/[0.07] bg-zinc-900/40 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)] transition group-hover:border-white/15">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.image}
                      alt={project.description}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-90" />
                    <p className="absolute bottom-4 left-4 text-sm font-medium text-white drop-shadow">
                      {project.name}
                    </p>
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
