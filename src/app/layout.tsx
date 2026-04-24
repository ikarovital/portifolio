import type { Metadata } from "next";
import { Allura, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const allura = Allura({
  weight: "400",
  variable: "--font-allura",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tayane — Direção Criativa | Portfólio",
    template: "%s | Tayane",
  },
  description:
    "Fotografia criativa e marketing visual. Casamentos, retratos e eventos com identidade de marca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${openSans.variable} ${allura.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}
