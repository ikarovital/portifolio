"use client";

import { motion } from "framer-motion";

type Props = {
  phoneE164: string;
  message?: string;
};

export function WhatsAppFloat({ phoneE164, message }: Props) {
  const href = useWhatsAppLink(phoneE164, message);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-terracotta px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-ink/15 transition hover:bg-terracotta/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/50"
    >
      <span className="inline-flex h-2 w-2 rounded-full bg-white/80" />
      WhatsApp
    </motion.a>
  );
}

function useWhatsAppLink(phoneE164: string, message?: string) {
  const base = `https://wa.me/${phoneE164.replace(/[^\d]/g, "")}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
