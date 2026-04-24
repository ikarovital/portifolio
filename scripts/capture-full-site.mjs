/**
 * Captura o site inteiro em uma única imagem alta (costura de faixas).
 *
 * Uso: npm run capture:full
 * Requisito: em outro terminal, na pasta do projeto, rode `npm run dev`
 *            (site em http://127.0.0.1:3000) OU defina CAPTURE_URL com uma URL pública.
 */
import { chromium } from "playwright";
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const out = join(root, "capturas", "portfolio-site-inteiro.png");
const url = process.env.CAPTURE_URL ?? "http://127.0.0.1:3000";

const VIEW_W = Number(process.env.CAPTURE_WIDTH ?? 1440);
const VIEW_H = Number(process.env.CAPTURE_VIEWPORT_H ?? 900);

function printConnectionHelp() {
  console.error(`
────────────────────────────────────────────────────────────
  Não deu para abrir o site em: ${url}

  O erro costuma ser: servidor Next.js não está rodando.

  Faça assim:
    1) Abra um terminal nesta pasta: ${root}
    2) Rode:  npm run dev
    3) Espere aparecer "Ready" e a URL (ex.: http://localhost:3000)
    4) Em OUTRO terminal, rode de novo:  npm run capture:full

  Se o site estiver em outra porta, use:
    CMD:    set CAPTURE_URL=http://127.0.0.1:3001 && npm run capture:full
    PowerShell:  $env:CAPTURE_URL="http://127.0.0.1:3001"; npm run capture:full
────────────────────────────────────────────────────────────
`);
}

function isConnectionError(msg) {
  return (
    msg.includes("ERR_CONNECTION_REFUSED") ||
    msg.includes("Connection refused") ||
    msg.includes("ENOTFOUND") ||
    msg.includes("net::ERR")
  );
}

async function main() {
  let browser;
  try {
    await mkdir(dirname(out), { recursive: true });

    browser = await chromium.launch();
    const page = await browser.newPage({
      viewport: { width: VIEW_W, height: VIEW_H },
    });

    try {
      await page.goto(url, { waitUntil: "load", timeout: 60_000 });
    } catch (err) {
      const msg = String(err?.message ?? err);
      if (isConnectionError(msg)) {
        printConnectionHelp();
        process.exitCode = 1;
        return;
      }
      throw err;
    }

    await page.evaluate(async () => {
      const delay = (ms) => new Promise((r) => setTimeout(r, ms));
      const h = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      );
      for (let y = 0; y < h; y += 400) {
        window.scrollTo(0, y);
        await delay(40);
      }
      window.scrollTo(0, 0);
      await delay(250);
    });

    const totalH = await page.evaluate(() =>
      Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
      ),
    );

    console.log("Altura total do documento (px):", totalH);

    const stripBuffers = [];
    let scrollY = 0;

    while (scrollY < totalH) {
      await page.evaluate((yy) => window.scrollTo(0, yy), scrollY);
      await page.waitForTimeout(350);
      const png = await page.screenshot({ type: "png" });
      const sliceH = Math.min(VIEW_H, totalH - scrollY);

      const buf =
        sliceH === VIEW_H
          ? png
          : await sharp(png)
              .extract({ left: 0, top: 0, width: VIEW_W, height: sliceH })
              .png()
              .toBuffer();

      stripBuffers.push(buf);
      scrollY += VIEW_H;
    }

    let offsetTop = 0;
    const composite = [];
    for (const buf of stripBuffers) {
      const meta = await sharp(buf).metadata();
      const h = meta.height ?? VIEW_H;
      composite.push({ input: buf, top: offsetTop, left: 0 });
      offsetTop += h;
    }

    await sharp({
      create: {
        width: VIEW_W,
        height: offsetTop,
        channels: 3,
        background: { r: 245, g: 238, b: 230 },
      },
    })
      .composite(composite)
      .png()
      .toFile(out);

    console.log("Captura salva:", out);
    console.log("Dimensões finais (px):", VIEW_W, "×", offsetTop);
  } catch (err) {
    const msg = String(err?.message ?? err);
    if (isConnectionError(msg)) {
      printConnectionHelp();
    } else {
      console.error("Erro ao capturar:", err);
    }
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}

await main();
