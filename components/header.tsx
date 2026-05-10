"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/locale-provider";

export function Header() {
  const { locale, setLocale, t } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.resume, href: "#resume" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    if (!mobileOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const navAria =
    locale === "pt" ? "Navegação principal" : "Main navigation";
  const openMenuLabel = locale === "pt" ? "Abrir menu" : "Open menu";
  const closeMenuLabel = locale === "pt" ? "Fechar menu" : "Close menu";
  const langLabel = locale === "pt" ? "Idioma" : "Language";

  return (
    <header className="sticky top-0 z-50">
      {/* Blur only on the bar — backdrop-filter on an ancestor breaks position:fixed for the drawer */}
      <div className="border-b border-white/[0.06] bg-[#0a0a0a]/70 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        {/* Mobile */}
        <div className="flex items-center justify-between gap-3 py-4 md:hidden">
          <a
            href="#home"
            className="min-w-0 flex-1 text-base font-semibold leading-snug tracking-tight text-white"
          >
            {t.brand}
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="shrink-0 rounded-lg p-2 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
            aria-expanded={mobileOpen}
            aria-controls="mobile-drawer"
            aria-label={openMenuLabel}
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} aria-hidden />
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 py-5 md:grid md:gap-4">
          <a
            href="#home"
            className="justify-self-start text-lg font-semibold tracking-tight text-white"
          >
            {t.brand}
          </a>

          <nav
            className="justify-self-center flex gap-x-7 text-sm text-zinc-400"
            aria-label={navAria}
          >
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-white"
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
      </div>
      </div>

      {/* Mobile drawer — sibling of blurred bar so fixed inset-0 covers the viewport */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-[100] md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          role="button"
          tabIndex={-1}
          className={`absolute inset-0 bg-black/75 transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={!mobileOpen}
          aria-label={closeMenuLabel}
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setMobileOpen(false);
            }
          }}
        />

        <aside
          className={`absolute top-0 right-0 flex h-full w-[min(88vw,300px)] flex-col border-l border-white/[0.08] bg-[#101012] shadow-[20px_0_80px_-20px_rgba(0,0,0,0.9)] transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
              aria-label={closeMenuLabel}
            >
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4"
            aria-label={navAria}
          >
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                tabIndex={mobileOpen ? 0 : -1}
                className="rounded-xl px-4 py-3.5 text-base text-zinc-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="border-t border-white/[0.08] px-5 py-5">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
              {langLabel}
            </p>
            <div className="flex items-center gap-2 text-base font-medium tabular-nums">
              <button
                type="button"
                tabIndex={mobileOpen ? 0 : -1}
                onClick={() => setLocale("pt")}
                className={`rounded-lg px-4 py-2 transition-colors ${
                  locale === "pt"
                    ? "bg-white/15 text-white"
                    : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
                }`}
                aria-pressed={locale === "pt"}
              >
                PT
              </button>
              <button
                type="button"
                tabIndex={mobileOpen ? 0 : -1}
                onClick={() => setLocale("en")}
                className={`rounded-lg px-4 py-2 transition-colors ${
                  locale === "en"
                    ? "bg-white/15 text-white"
                    : "text-zinc-500 hover:bg-white/5 hover:text-zinc-300"
                }`}
                aria-pressed={locale === "en"}
              >
                EN
              </button>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}
