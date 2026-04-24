# Portfólio — Tayane / Direção criativa

Site em [Next.js](https://nextjs.org/) (App Router) + TypeScript + Tailwind CSS.

Repositório: [github.com/ikarovital/portifolio](https://github.com/ikarovital/portifolio)

## Rodar no computador

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. No terminal também aparece o endereço **Network** (IP da sua máquina).

## Ver no celular (mesma rede Wi‑Fi)

1. No PC, deixe `npm run dev` rodando.
2. Confira no terminal a linha **Network** (ex.: `http://192.168.0.21:3000`).
3. No celular, conectado ao **mesmo Wi‑Fi**, abra esse endereço no navegador.

## Ver no celular (qualquer lugar — link público temporário)

1. Terminal 1: `npm run dev`
2. Terminal 2: `npm run tunnel`
3. O Cloudflare Tunnel imprime uma URL `https://....trycloudflare.com` — use no celular (válida enquanto o processo estiver rodando).

## Publicar na internet (link fixo)

1. Envie o código para o GitHub (veja seção abaixo).
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório `ikarovital/portifolio`.
3. A Vercel gera um endereço `https://seu-projeto.vercel.app` acessível de qualquer lugar.

## Enviar código para o GitHub

```bash
git remote add origin https://github.com/ikarovital/portifolio.git
git branch -M main
git add .
git commit -m "Portfólio Next.js"
git push -u origin main
```

Se o `remote` já existir, use apenas `git push -u origin main`.

## Captura de tela do site inteiro

Com o dev server rodando:

```bash
npm run capture:full
```

Saída em `capturas/portfolio-site-inteiro.png`.
