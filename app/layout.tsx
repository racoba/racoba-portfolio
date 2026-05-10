import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LocaleProvider } from "@/components/locale-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bruno Racobaldo — Full Stack Developer",
  description:
    "Portfolio — Bruno Racobaldo: full-stack development with React, Next.js, TypeScript, and Node.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-[#0a0a0a] text-white"
        suppressHydrationWarning
      >
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
