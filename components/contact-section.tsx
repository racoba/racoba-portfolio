"use client";

import type { ReactElement } from "react";
import type { LucideIcon } from "lucide-react";
import { Mail, Phone } from "lucide-react";
import { useLocale } from "@/components/locale-provider";

function IconGitHub({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.75-.85a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </svg>
  );
}

type BrandIconProps = { className?: string };

type ContactItem =
  | {
      kind: "brand";
      labelKey: "github" | "linkedIn" | "instagram";
      href: string;
      Icon: (p: BrandIconProps) => ReactElement;
    }
  | { kind: "lucide"; labelKey: "email" | "phone"; href: string; Icon: LucideIcon };

export function ContactSection({ id }: { id?: string }) {
  const { t } = useLocale();

  const items: ContactItem[] = [
    { labelKey: "github", href: t.links.github, kind: "brand", Icon: IconGitHub },
    {
      labelKey: "linkedIn",
      href: t.links.linkedIn,
      kind: "brand",
      Icon: IconLinkedIn,
    },
    {
      labelKey: "instagram",
      href: t.links.instagram,
      kind: "brand",
      Icon: IconInstagram,
    },
    { labelKey: "email", href: t.links.mailto, kind: "lucide", Icon: Mail },
    { labelKey: "phone", href: t.links.tel, kind: "lucide", Icon: Phone },
  ];

  const labels = {
    github: t.contact.github,
    linkedIn: t.contact.linkedIn,
    instagram: t.contact.instagram,
    email: t.contact.email,
    phone: t.contact.phone,
  };

  return (
    <section id={id} className="relative px-6 pb-28 pt-10 md:px-8">
      <h2 className="text-center text-3xl font-bold md:text-4xl">
        {t.contact.sectionTitle}
      </h2>

      <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-6 md:gap-10">
        {items.map((item) => {
          const label = labels[item.labelKey];
          return (
            <a
              key={item.labelKey}
              href={item.href}
              aria-label={label}
              className="flex h-[68px] w-[68px] items-center justify-center rounded-full border border-white/25 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:border-white/45 hover:bg-white/[0.1]"
            >
              {item.kind === "brand" ? (
                <item.Icon className="h-7 w-7" />
              ) : (
                <item.Icon className="h-7 w-7" strokeWidth={1.25} />
              )}
            </a>
          );
        })}
      </div>
    </section>
  );
}
