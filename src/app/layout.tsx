import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Riandro Deian — Desenvolvedor Full-Stack",
  description:
    "Desenvolvedor full-stack construindo sistemas SaaS completos: Next.js, TypeScript, Supabase, Docker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

