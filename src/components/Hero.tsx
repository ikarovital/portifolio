"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";

export function Hero() {
  return (
    <section
      id="topo"
      aria-label="Seção inicial"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-cream lg:flex-row lg:min-h-[95svh]"
    >
      <div className="relative min-h-[42vh] w-full lg:min-h-0 lg:w-1/2">
        <Image
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=2400&q=80"
          alt="Imagem de destaque do portfólio"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-cream/50" />
      </div>

      <div className="relative flex w-full flex-1 flex-col justify-center px-4 pb-14 pt-24 sm:px-8 lg:w-1/2 lg:py-20 lg:pl-10 lg:pr-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto w-full max-w-xl"
        >
          <div className="h-px w-12 bg-mustard" aria-hidden />
          <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-mustard">
            Fotografia criativa &amp; marketing visual
          </p>

          <div className="mt-6">
            <BrandLogo size="lg" />
          </div>

          <h1 className="mt-5 text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl lg:text-4xl">
            Histórias reais em imagens
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">
            Portfólio elegante para destacar seu trabalho e captar clientes. Ensaios,
            eventos e casamentos com estética natural e alinhada à sua marca.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-semibold text-white transition hover:bg-ink/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/60"
            >
              Ver Portfólio
              <span className="text-white/90" aria-hidden>
                →
              </span>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-terracotta/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/40"
            >
              Fale comigo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
