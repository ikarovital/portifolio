"use client";

import { motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-mustard/25">
      <div className="bg-ink px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-relaxed text-cream/90">
            Transformando momentos em memórias visuais. Vamos contar sua história com
            elegância e autenticidade.
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-terracotta px-5 py-3 text-xs font-semibold text-white shadow-md transition hover:bg-terracotta/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/50"
          >
            Fale comigo
          </a>
        </div>
      </div>

      <div className="bg-cream px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-2">
              <BrandLogo size="md" />
              <p className="text-xs text-ink/60">
                Fotografia • Retratos, eventos e casamentos
              </p>
            </div>

            <nav
              aria-label="Rodapé"
              className="flex flex-wrap gap-6 text-xs font-semibold text-ink/75"
            >
              <a href="#portfolio" className="transition hover:text-mustard">
                Portfólio
              </a>
              <a href="#sobre" className="transition hover:text-mustard">
                Quem sou
              </a>
              <a href="#contato" className="transition hover:text-mustard">
                Contato
              </a>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="rounded-full border border-ink/12 bg-sand/80 px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-mustard/50"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>

          <hr className="border-mustard/25" />

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-ink/50">
              © {new Date().getFullYear()} Tayane. Todos os direitos reservados.
            </p>
            <a
              href="#topo"
              className="text-xs font-semibold text-ink/70 transition hover:text-mustard"
            >
              Voltar ao topo
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
