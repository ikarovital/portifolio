# Portfólio — Tayane / Direção criativa

Site em [Next.js](https://nextjs.org/) (App Router) + TypeScript + Tailwind CSS.

Repositório: [github.com/ikarovital/portifolio](https://github.com/ikarovital/portifolio)

---

## Publicar na internet (acessar de **qualquer lugar**)

O jeito mais simples para ter um endereço **`https://…`** estável é hospedar na **Vercel** (grátis para projetos pessoais).

### Opção A — Importar pelo site da Vercel

1. Crie uma conta em [vercel.com](https://vercel.com) (pode usar “Continue with GitHub”).
2. Em **Add New… → Project**, escolha o repositório **`ikarovital/portifolio`**.
3. Deixe as opções padrão (framework **Next.js** detectado automaticamente) e clique em **Deploy**.
4. Ao terminar, a Vercel mostra o link, por exemplo **`https://portifolio-xxx.vercel.app`**. Esse link funciona no mundo todo (PC, celular, outra rede).

A cada `git push` na branch principal, você pode ativar **deploy automático** no painel do projeto (integração Git).

### Opção B — Link direto para começar o import

Abra (logado na Vercel):

**[Importar `ikarovital/portifolio` na Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fikarovital%2Fportifolio)**

Se a página pedir, autorize a Vercel a acessar seus repositórios no GitHub.

---

## Rodar só no computador (desenvolvimento)

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

---

## Alternativas (não substituem o deploy)

- **Mesma rede Wi‑Fi:** com `npm run dev`, use o endereço **Network** do terminal no outro aparelho.
- **Link temporário:** `npm run tunnel` (com o dev rodando) gera uma URL `https://….trycloudflare.com` válida só enquanto o processo estiver ativo.

---

## Enviar alterações para o GitHub

```bash
git add .
git commit -m "sua mensagem"
git push origin main
```

Se ainda não configurou o remoto:

```bash
git remote add origin https://github.com/ikarovital/portifolio.git
git branch -M main
git push -u origin main
```

---

## Captura de tela do site inteiro (local)

Com `npm run dev` em um terminal:

```bash
npm run capture:full
```

Saída em `capturas/portfolio-site-inteiro.png` (pasta ignorada pelo Git).
