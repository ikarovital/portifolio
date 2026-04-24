/**
 * Caminho público com prefixo do GitHub Pages (`basePath`, ex. `/portifolio`).
 * No `next dev` o prefixo é vazio.
 */
export function publicAsset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) {
    return `${base}/${path}`.replace(/\/+/g, "/");
  }
  return `${base}${path}`;
}
