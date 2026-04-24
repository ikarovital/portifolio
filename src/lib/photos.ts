export type PhotoCategory =
  | "Casamento"
  | "Retrato"
  | "Eventos"
  | "Editorial"
  | "Lifestyle";

export type Photo = {
  id: string;
  url: string;
  title: string;
  category: PhotoCategory;
  alt: string;
};

// Mock local: imagens remotas (Unsplash) para facilitar rodar o projeto sem assets binários.
export const PHOTOS: Photo[] = [
  {
    id: "p1",
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1800&q=80",
    title: "Cerimônia ao entardecer",
    category: "Casamento",
    alt: "Casal em cerimônia ao entardecer",
  },
  {
    id: "p2",
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1800&q=80&sat=-20",
    title: "Detalhes do vestido",
    category: "Casamento",
    alt: "Detalhe do vestido de noiva",
  },
  {
    id: "p3",
    url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1800&q=80",
    title: "Retrato com luz natural",
    category: "Retrato",
    alt: "Retrato com luz natural",
  },
  {
    id: "p4",
    url: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1800&q=80",
    title: "Retrato editorial",
    category: "Editorial",
    alt: "Retrato editorial em estúdio",
  },
  {
    id: "p5",
    url: "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=1800&q=80",
    title: "Backstage do evento",
    category: "Eventos",
    alt: "Pessoa se preparando em backstage de evento",
  },
  {
    id: "p6",
    url: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1800&q=80",
    title: "Vibração de palco",
    category: "Eventos",
    alt: "Luzes e público em show",
  },
  {
    id: "p7",
    url: "https://images.unsplash.com/photo-1520975922284-9e0ce82759f5?auto=format&fit=crop&w=1800&q=80",
    title: "Lifestyle urbano",
    category: "Lifestyle",
    alt: "Pessoa caminhando em cenário urbano",
  },
  {
    id: "p8",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=80",
    title: "Minimalismo e textura",
    category: "Editorial",
    alt: "Composição minimalista com textura",
  },
  {
    id: "p9",
    url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1800&q=80",
    title: "Retrato em movimento",
    category: "Retrato",
    alt: "Retrato em movimento com fundo desfocado",
  },
];

export const CATEGORIES: Array<PhotoCategory> = [
  "Casamento",
  "Retrato",
  "Eventos",
  "Editorial",
  "Lifestyle",
];

