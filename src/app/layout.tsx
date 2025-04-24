import type { Metadata } from "next";
import "./globals.css";
import { ClientNavbarWrapper } from "@/components/Navbar/wrapper";

export const metadata: Metadata = {
  title: "Racoba Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] ">
        <ClientNavbarWrapper />
          {children}
      </body>
    </html>
  );
}
