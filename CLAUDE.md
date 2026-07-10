# CLAUDE.md

Contexto do projeto para o Claude Code. Leia antes de fazer alterações.

## Visão geral

Portfólio pessoal de **Fellipe Toledo**, uma Single Page Application (SPA)
em **Angular 21** (client-side puro, **sem SSR**), estilizada com
**Tailwind CSS v4**. Publicado na **Vercel** com deploy automático a cada
push na branch `main`.

## Stack

- **Angular 21** com componentes standalone e o builder
  `@angular/build:application`.
- **TypeScript** (`~5.9`).
- **Tailwind CSS v4** via `@tailwindcss/postcss` (config em `.postcssrc.json`).
- **Vitest** para testes unitários.
- Gerenciador de pacotes: **npm** (`npm@11`).

## Comandos

```bash
npm install       # instala dependências
npm start         # ng serve — dev server em http://localhost:4200
npm run build     # build de produção -> dist/portfolio-page/browser
npm test          # roda os testes (Vitest)
```

## Estrutura

- `src/main.ts` — bootstrap da aplicação (`bootstrapApplication`).
- `src/app/app.config.ts` — providers globais (router, error listeners).
- `src/app/app.routes.ts` — rotas da aplicação.
- `src/app/app.ts` / `app.html` / `app.css` — componente raiz.
- `public/` — assets estáticos (favicon etc.), copiados para o build.

## Deploy (Vercel)

- Configuração em `vercel.json`:
  - `outputDirectory`: `dist/portfolio-page/browser` (o builder novo do
    Angular gera nessa subpasta `browser/` — **não** em `dist/portfolio-page`).
  - `rewrites`: tudo cai em `/index.html` para as rotas SPA funcionarem no F5.
- Todo push em `main` dispara um deploy de produção automático.
- URL principal: https://fellipetoledo.vercel.app

## Convenções e cuidados

- **Sem SSR.** O projeto é 100% client-side. Não reintroduzir
  `@angular/ssr`, `provideClientHydration` ou arquivos `*.server.ts` sem
  antes adicionar as dependências e a configuração de servidor no
  `angular.json` — senão o build quebra na Vercel.
- Mensagens de commit em português, no padrão Conventional Commits
  (`fix:`, `feat:`, `chore:` ...).
- Antes de commitar mudanças que afetam o build, rode `npm run build`
  localmente para garantir que passa.
