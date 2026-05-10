"use client";

import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

type IconKind = "grad" | "brief";

function TimelineIcon({ kind }: { kind: IconKind }) {
  const cls =
    "flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md";
  if (kind === "grad") {
    return (
      <div className={cls}>
        <GraduationCap className="h-8 w-8" strokeWidth={1.35} />
      </div>
    );
  }
  return (
    <div className={cls}>
      <BriefcaseBusiness className="h-8 w-8" strokeWidth={1.35} />
    </div>
  );
}

export function ResumeSection({ id }: { id?: string }) {
  const { t } = useLocale();
  const entries = t.resume.entries;

  return (
    <section id={id} className="relative px-6 py-10 md:px-8">
      <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">
        {t.resume.sectionTitle}
      </h2>

      <div className="relative mx-auto max-w-3xl pl-2 md:pl-4">
        <div
          aria-hidden
          className="absolute left-[13px] top-2 bottom-6 w-px md:left-[15px]"
        >
          <div className="absolute top-0 left-0 h-[38%] w-full bg-white" />
          <div className="absolute top-[38%] left-0 bottom-0 w-full bg-zinc-700/75" />
        </div>

        <ul className="relative space-y-14">
          {entries.map((item, index) => (
            <li key={`resume-${index}`} className="relative">
              <span
                className={`absolute left-[10px] top-10 z-10 h-3 w-3 rounded-full border border-white/25 md:left-[12px] md:top-11 ${
                  index === 0 ? "bg-white" : "bg-zinc-600"
                }`}
              />
              <div className="flex flex-col gap-5 pl-10 sm:flex-row sm:items-start sm:gap-8 md:pl-12">
                <TimelineIcon kind={item.icon} />
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-[15px]">
                    {item.body.map((segment, i) =>
                      segment.underline ? (
                        <span
                          key={`seg-${index}-${i}`}
                          className="underline decoration-white/40 underline-offset-4"
                        >
                          {segment.text}
                        </span>
                      ) : (
                        <span key={`seg-${index}-${i}`}>{segment.text}</span>
                      ),
                    )}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
