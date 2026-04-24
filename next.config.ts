import type { NextConfig } from "next";

/** Para GitHub Pages: nome do repositório, ex. `/portifolio` (definido no CI com BASE_PATH) */
const basePath = (process.env.BASE_PATH || "").replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: { root: process.cwd() },
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  /** Usado em `publicAsset()` para imagens em `public/` (Image src, PHOTOS.url) */
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    /** Next.js 16: restringe quais caminhos locais o `next/image` aceita */
    localPatterns: [
      { pathname: `${basePath}/photos/**`, search: "" },
      { pathname: `${basePath}/logo-marca.png`, search: "" },
    ],
  },
};

export default nextConfig;
