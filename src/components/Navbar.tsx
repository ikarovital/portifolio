"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";

const navItems = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#sobre", label: "Quem sou" },
  { href: "#contato", label: "Contato" },
] as const;

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mt-4 flex items-center justify-between gap-3 rounded-2xl border border-ink/10 bg-cream/90 px-3 py-3 shadow-sm shadow-ink/5 backdrop-blur-md supports-[backdrop-filter]:bg-cream/75 sm:px-4 sm:py-3.5"
          aria-label="Navegação principal"
        >
          <BrandLogo priority size="sm" className="min-w-0" />

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/80 transition hover:text-mustard"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contato"
            className="shrink-0 rounded-full bg-terracotta px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-terracotta/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/50 sm:px-4"
          >
            Fale comigo
          </a>
        </motion.nav>
      </div>
    </header>
  );
}
