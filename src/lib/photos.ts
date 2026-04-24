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

/** Imagens em `public/photos/` — servidas em `/photos/nome-do-arquivo` */
const IMG = "/photos/hero-portfolio.jpeg";

export const PHOTOS: Photo[] = [
  {
    id: "p1",
    url: IMG,
    title: "Cerimônia ao entardecer",
    category: "Casamento",
    alt: "Casal em cerimônia ao entardecer",
  },
  {
    id: "p2",
    url: IMG,
    title: "Detalhes do vestido",
    category: "Casamento",
    alt: "Detalhe do vestido de noiva",
  },
  {
    id: "p3",
    url: IMG,
    title: "Retrato com luz natural",
    category: "Retrato",
    alt: "Retrato com luz natural",
  },
  {
    id: "p4",
    url: IMG,
    title: "Retrato editorial",
    category: "Editorial",
    alt: "Retrato editorial em estúdio",
  },
  {
    id: "p5",
    url: IMG,
    title: "Backstage do evento",
    category: "Eventos",
    alt: "Pessoa se preparando em backstage de evento",
  },
  {
    id: "p6",
    url: IMG,
    title: "Vibração de palco",
    category: "Eventos",
    alt: "Luzes e público em show",
  },
  {
    id: "p7",
    url: IMG,
    title: "Lifestyle urbano",
    category: "Lifestyle",
    alt: "Pessoa caminhando em cenário urbano",
  },
  {
    id: "p8",
    url: IMG,
    title: "Minimalismo e textura",
    category: "Editorial",
    alt: "Composição minimalista com textura",
  },
  {
    id: "p9",
    url: IMG,
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
