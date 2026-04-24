"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setStatus("idle");
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Contato enviado:", form);
    setStatus("sent");
    setForm(initialState);
  }

  return (
    <section
      id="contato"
      aria-label="Seção de contato"
      className="border-t border-mustard/25 bg-sand py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mustard">
              Contato
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Vamos criar algo incrível?
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/75">
              Conte sobre seu projeto. Respondo com disponibilidade e orçamento.
            </p>

            <div className="mt-6 space-y-0 rounded-2xl border border-ink/10 bg-cream p-5 shadow-sm">
              <InfoRow label="E-mail" value="contato@seudominio.com" />
              <hr className="my-3 border-mustard/25" />
              <InfoRow label="Cidade" value="São Paulo, Brasil" />
              <hr className="my-3 border-mustard/25" />
              <InfoRow label="Atendimento" value="Casamentos • Retratos • Eventos" />
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-ink/10 bg-cream p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Nome"
                name="name"
                value={form.name}
                onChange={(v) => onChange("name", v)}
                placeholder="Seu nome"
                autoComplete="name"
              />
              <Field
                label="E-mail"
                name="email"
                value={form.email}
                onChange={(v) => onChange("email", v)}
                placeholder="voce@exemplo.com"
                type="email"
                autoComplete="email"
              />
            </div>

            <div className="mt-4">
              <label className="text-xs font-semibold text-ink/80" htmlFor="msg">
                Mensagem
              </label>
              <textarea
                id="msg"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => onChange("message", e.target.value)}
                placeholder="Data, local, estilo, referências..."
                className="mt-2 w-full resize-none rounded-xl border border-ink/12 bg-sand/50 px-3 py-2 text-sm text-ink placeholder:text-ink/40 outline-none transition focus:border-mustard/50 focus:ring-2 focus:ring-mustard/20"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-ink/60">
                {status === "sent" ? "Mensagem enviada! (simulação)" : "\u00a0"}
              </p>
              <button
                type="submit"
                className="rounded-full bg-terracotta px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-terracotta/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-mustard/50"
              >
                Enviar mensagem
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-xs font-semibold text-ink/65">{label}</span>
      <span className="text-right text-xs text-ink">{value}</span>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-ink/80" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-ink/12 bg-sand/50 px-3 py-2 text-sm text-ink placeholder:text-ink/40 outline-none transition focus:border-mustard/50 focus:ring-2 focus:ring-mustard/20"
      />
    </div>
  );
}
