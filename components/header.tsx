"use client";

import { useLocale } from "@/components/locale-provider";

export function Header() {
  const { locale, setLocale, t } = useLocale();

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.resume, href: "#resume" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/70 backdrop-blur-xl">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 px-6 py-5 md:gap-4 md:px-8">
        <a
          href="#home"
          className="justify-self-start text-lg font-semibold tracking-tight text-white"
        >
          {t.brand}
        </a>

        <nav
          className="justify-self-center flex max-w-[min(100vw-8rem,42rem)] gap-x-5 gap-y-2 overflow-x-auto text-xs text-zinc-400 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-x-7 sm:text-sm md:max-w-none [&::-webkit-scrollbar]:hidden"
          aria-label={locale === "pt" ? "Navegação principal" : "Main navigation"}
        >
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="justify-self-end flex items-center gap-1.5 text-sm font-medium tabular-nums">
          <button
            type="button"
            onClick={() => setLocale("pt")}
            className={`rounded px-1.5 py-1 transition-colors ${
              locale === "pt"
                ? "text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
            aria-pressed={locale === "pt"}
          >
            PT
          </button>
          <span className="text-zinc-600" aria-hidden>
            |
          </span>
          <button
            type="button"
            onClick={() => setLocale("en")}
            className={`rounded px-1.5 py-1 transition-colors ${
              locale === "en"
                ? "text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
            aria-pressed={locale === "en"}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
