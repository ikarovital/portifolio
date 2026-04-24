"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="sobre"
      aria-label="Quem sou"
      className="border-t border-mustard/25 bg-cream py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <motion.article
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mustard">
              Quem sou eu
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Quem sou
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-ink/80 sm:text-[0.95rem]">
              Sou Tày Nascimento, artista criadora visual apaixonada por transformar ideias
              em imagens que comunicam de verdade. Trabalho com marcas, produtos e serviços
              que têm propósito, ajudando a traduzir tudo aquilo que muitas vezes está só no
              sentir… em algo que pode ser visto, entendido e desejado.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-ink/80 sm:text-[0.95rem]">
              Na fotografia, meu olhar vai além da estética. Eu busco revelar a beleza e o
              potencial que cada pessoa já carrega, mesmo quando ela ainda não consegue
              enxergar isso com clareza. Porque, no fundo, não é só sobre fotos, é sobre se
              reconhecer, se valorizar e fortalecer a própria autoestima.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-ink/80 sm:text-[0.95rem]">
              Entre o marketing e a fotografia, encontrei um caminho onde posso unir
              estratégia com sensibilidade. Criar com intenção, com verdade, e com o cuidado
              de quem entende que cada imagem tem o poder de tocar, conectar e transformar.
            </p>

            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-mustard"
            >
              Vamos conversar
              <span className="text-mustard" aria-hidden>
                →
              </span>
            </a>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="rounded-2xl border border-ink/10 bg-sand/80 p-6 shadow-sm"
            aria-label="Destaques"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Stat label="Anos de experiência" value="6+" />
              <Stat label="Ensaios e eventos" value="250+" />
              <Stat label="Edição" value="Lightroom" />
              <Stat label="Entrega" value="Online" />
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-ink/10 bg-cream p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-mustard">
        {label}
      </p>
      <p className="mt-2 text-lg font-semibold text-ink">{value}</p>
    </div>
  );
}
