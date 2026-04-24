import type { NextConfig } from "next";

/** Para GitHub Pages: nome do repositório, ex. `/portifolio` (definido no CI com BASE_PATH) */
const basePath = (process.env.BASE_PATH || "").replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  turbopack: { root: process.cwd() },
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
