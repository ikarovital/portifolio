"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { Photo, PhotoCategory } from "@/lib/photos";
import { CATEGORIES } from "@/lib/photos";
import { PhotoModal } from "@/components/PhotoModal";

type Props = {
  photos: Photo[];
};

type Filter = "Todas" | PhotoCategory;

export function Gallery({ photos }: Props) {
  const [filter, setFilter] = useState<Filter>("Todas");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "Todas") return photos;
    return photos.filter((p) => p.category === filter);
  }, [filter, photos]);

  const activeIndex = useMemo(() => {
    if (!activeId) return -1;
    return filtered.findIndex((p) => p.id === activeId);
  }, [activeId, filtered]);

  const activePhoto = activeIndex >= 0 ? filtered[activeIndex] : null;
  const isOpen = Boolean(activePhoto);

  function openById(id: string) {
    setActiveId(id);
  }

  function close() {
    setActiveId(null);
  }

  function prev() {
    if (filtered.length === 0) return;
    const idx = activeIndex >= 0 ? activeIndex : 0;
    const nextIndex = (idx - 1 + filtered.length) % filtered.length;
    setActiveId(filtered[nextIndex]?.id ?? null);
  }

  function next() {
    if (filtered.length === 0) return;
    const idx = activeIndex >= 0 ? activeIndex : 0;
    const nextIndex = (idx + 1) % filtered.length;
    setActiveId(filtered[nextIndex]?.id ?? null);
  }

  return (
    <section
      id="portfolio"
      aria-label="Seção de portfólio"
      className="border-t border-mustard/25 bg-sand py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mustard">
              Trabalhos
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Portfólio
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/70">
              Seleção recente. Clique para ampliar e navegar entre as imagens.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterButton
              isActive={filter === "Todas"}
              onClick={() => setFilter("Todas")}
            >
              Todas
            </FilterButton>
            {CATEGORIES.map((cat) => (
              <FilterButton
                key={cat}
                isActive={filter === cat}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </FilterButton>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((photo, i) => (
            <motion.button
              key={photo.id}
              type="button"
              onClick={() => openById(photo.id)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.2) }}
              className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/50"
              aria-label={`Abrir foto: ${photo.title}`}
            >
              <div className="relative overflow-hidden rounded-xl border border-ink/10 bg-cream shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 will-change-transform group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/20" />
                </div>
              </div>
              <div className="mt-2.5 px-0.5">
                <p className="text-sm font-semibold text-ink">{photo.title}</p>
                <p className="text-xs font-medium text-mustard">{photo.category}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <PhotoModal
        isOpen={isOpen}
        photo={activePhoto}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}

function FilterButton({
  isActive,
  onClick,
  children,
}: {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-3 py-1.5 text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/50",
        isActive
          ? "bg-ink text-cream"
          : "border border-ink/12 bg-cream text-ink/80 hover:border-mustard/40 hover:bg-cream",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
