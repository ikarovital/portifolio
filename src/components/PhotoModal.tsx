"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/photos";

type Props = {
  isOpen: boolean;
  photo: Photo | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 3;
const ZOOM_STEP = 0.15;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

function defaultPanelSize() {
  if (typeof window === "undefined") return { w: 960, h: 600 };
  const w = Math.round(clamp(window.innerWidth - 48, 320, 1120));
  const h = Math.round(clamp(window.innerHeight * 0.72, 280, 760));
  return { w, h };
}

export function PhotoModal({ isOpen, photo, onClose, onPrev, onNext }: Props) {
  const [panel, setPanel] = useState(defaultPanelSize);
  const [zoom, setZoom] = useState(1);
  const resizeRef = useRef<{
    startX: number;
    startY: number;
    startW: number;
    startH: number;
  } | null>(null);

  useEffect(() => {
    if (!isOpen || !photo) return;
    setPanel(defaultPanelSize());
    setZoom(1);
  }, [isOpen, photo?.id]);

  const onResizeStart = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      resizeRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        startW: panel.w,
        startH: panel.h,
      };
      const onMove = (ev: MouseEvent) => {
        const r = resizeRef.current;
        if (!r) return;
        const maxW = window.innerWidth - 32;
        const maxH = window.innerHeight - 32;
        setPanel({
          w: clamp(r.startW + ev.clientX - r.startX, 320, maxW),
          h: clamp(r.startH + ev.clientY - r.startY, 240, maxH),
        });
      };
      const onUp = () => {
        resizeRef.current = null;
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onUp);
      };
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    },
    [panel.h, panel.w],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        setZoom((z) => clamp(z + ZOOM_STEP, ZOOM_MIN, ZOOM_MAX));
      }
      if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        setZoom((z) => clamp(z - ZOOM_STEP, ZOOM_MIN, ZOOM_MAX));
      }
      if (e.key === "0" && !e.ctrlKey && !e.metaKey) setZoom(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && photo ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/75 p-3 backdrop-blur-sm sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Visualização de foto ampliada"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex max-h-[calc(100vh-24px)] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-2xl border border-mustard/25 bg-cream shadow-2xl shadow-ink/20"
            style={{ width: panel.w, height: panel.h }}
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative min-h-0 flex-1 overflow-auto bg-ink/5">
              <div className="flex min-h-full min-w-full items-center justify-center p-2 sm:p-4">
                <div
                  className="relative transition-[width] duration-150 ease-out"
                  style={{
                    width: `${zoom * 100}%`,
                    maxWidth: zoom <= 1 ? "100%" : undefined,
                    aspectRatio: "16 / 10",
                  }}
                >
                  <Image
                    src={photo.url}
                    alt={photo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 95vw, 1120px"
                    priority
                  />
                </div>
              </div>

              {/* Alça no canto da área da imagem (não cobre a barra de botões) */}
              <button
                type="button"
                aria-label="Redimensionar janela do modal"
                title="Arraste para alterar o tamanho da janela"
                onMouseDown={onResizeStart}
                className="absolute bottom-2 right-2 z-10 flex h-9 w-9 cursor-nwse-resize items-end justify-end rounded-md border border-mustard/50 bg-cream/95 p-1 shadow-sm transition hover:bg-mustard/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/60"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-ink/65"
                  aria-hidden
                >
                  <path d="M22 22H12M22 22V12M22 22L12 12" />
                </svg>
              </button>
            </div>

            <div className="shrink-0 border-t border-mustard/20 bg-sand/95 px-3 py-2.5 sm:px-4">
              <div className="flex flex-wrap items-center justify-between gap-2 gap-y-2">
                <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2">
                  <div className="min-w-0 flex-1 basis-[min(100%,10rem)] sm:basis-[min(100%,14rem)]">
                    <p className="truncate text-sm font-semibold text-ink">
                      {photo.title}
                    </p>
                    <p className="truncate text-xs font-medium text-mustard">
                      {photo.category}
                    </p>
                  </div>
                  <div
                    className="flex items-center gap-0.5 rounded-full border border-ink/12 bg-cream px-0.5 py-0.5 sm:gap-1 sm:px-1"
                    role="group"
                    aria-label="Zoom da imagem"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setZoom((z) => clamp(z - ZOOM_STEP, ZOOM_MIN, ZOOM_MAX))
                      }
                      className="rounded-full px-2 py-1 text-sm font-semibold text-ink transition hover:bg-sand sm:px-2.5"
                      aria-label="Diminuir zoom"
                    >
                      −
                    </button>
                    <span className="min-w-[2.5rem] text-center text-[0.7rem] font-semibold tabular-nums text-ink/80 sm:min-w-[2.75rem] sm:text-xs">
                      {Math.round(zoom * 100)}%
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setZoom((z) => clamp(z + ZOOM_STEP, ZOOM_MIN, ZOOM_MAX))
                      }
                      className="rounded-full px-2 py-1 text-sm font-semibold text-ink transition hover:bg-sand sm:px-2.5"
                      aria-label="Aumentar zoom"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => setZoom(1)}
                      className="rounded-full px-1.5 py-1 text-[0.6rem] font-semibold uppercase tracking-wide text-ink/70 transition hover:bg-sand hover:text-ink sm:px-2 sm:text-[0.65rem]"
                      aria-label="Zoom 100%"
                    >
                      Reset
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={onPrev}
                    className="rounded-full border border-ink/15 bg-cream px-3 py-2 text-xs font-semibold text-ink transition hover:border-mustard/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/50"
                    aria-label="Foto anterior"
                  >
                    Anterior
                  </button>
                  <button
                    type="button"
                    onClick={onNext}
                    className="rounded-full border border-ink/15 bg-cream px-3 py-2 text-xs font-semibold text-ink transition hover:border-mustard/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/50"
                    aria-label="Próxima foto"
                  >
                    Próxima
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-full bg-ink px-3 py-2 text-xs font-semibold text-white transition hover:bg-ink/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/50"
                    aria-label="Fechar modal"
                  >
                    Fechar
                  </button>
                </div>
              </div>
              <p className="mt-1.5 text-[0.65rem] leading-snug text-ink/50">
                Arraste o ícone no canto da foto para redimensionar a janela.{" "}
                <span className="hidden sm:inline">
                  Use + e − no teclado para zoom.
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
