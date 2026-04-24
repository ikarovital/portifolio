# Portfólio — Tayane / Direção criativa

Site em [Next.js](https://nextjs.org/) (App Router) + TypeScript + Tailwind CSS.

Repositório: [github.com/ikarovital/portifolio](https://github.com/ikarovital/portifolio)

---

## Publicar no **GitHub Pages** (link `https://…` em qualquer lugar)

O projeto gera um site **estático** (`output: "export"`) e o GitHub Actions envia para o **GitHub Pages** automaticamente a cada push na branch `main`.

### 1. Ativar Pages no repositório

1. No GitHub: abra o repo **portifolio** → **Settings** → **Pages**.
2. Em **Build and deployment** → **Source**, escolha **GitHub Actions** (não “Deploy from a branch”).

### 2. Disparar o deploy

Faça push (o workflow `.github/workflows/deploy-github-pages.yml` já está no repo):

```bash
git push origin main
```

Ou em **Actions** → workflow **Deploy GitHub Pages** → **Run workflow**.

### 3. Endereço do site

Com usuário `ikarovital` e repositório `portifolio`, o endereço fica:

**[https://ikarovital.github.io/portifolio/](https://ikarovital.github.io/portifolio/)**

Se você **renomear o repositório**, a URL muda (`/novo-nome`) e o workflow já usa o nome atual no `basePath` do build.

---

## Rodar no computador (desenvolvimento)

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` (sem prefixo; o prefixo `/portifolio` só entra no build do GitHub Pages).

### Build local igual ao da Pages (opcional)

```powershell
$env:BASE_PATH="/portifolio"; npm run build
```

A pasta `out/` reflete o que sobe para o GitHub Pages.

---

## Outras hospedagens (opcional)

Na [Vercel](https://vercel.com/new) você também pode importar o mesmo repositório; o `output: "export"` é compatível com deploy estático.

---

## Enviar alterações

```bash
git add .
git commit -m "sua mensagem"
git push origin main
```

---

## Captura de tela do site inteiro (local)

Com `npm run dev` rodando:

```bash
npm run capture:full
```

Saída em `capturas/` (pasta ignorada pelo Git).
