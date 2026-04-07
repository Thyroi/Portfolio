# Portfolio

[![CI](https://github.com/Thyroi/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Thyroi/Portfolio/actions/workflows/ci.yml)
[![Vercel](https://img.shields.io/website?url=https%3A%2F%2Fportfolio-blog-ten-sigma.vercel.app&label=vercel&logo=vercel)](https://portfolio-blog-ten-sigma.vercel.app)

A modern developer portfolio and technical blog built with Next.js, TypeScript, Tailwind CSS, MDX, and shadcn/ui, featuring security writeups and an interactive tool notebook system.

## Live Demo

- Production: `https://portfolio-blog-ten-sigma.vercel.app`

## Overview

This project combines three parts in a single application:

- A scrollable single-page developer portfolio
- A technical blog for security writeups
- A notebook system for reusable tooling documentation

Writeups are stored as MDX content and tool references can open an interactive right-side drawer with notebook notes without leaving the current post.

## Features

- Next.js App Router with TypeScript
- Tailwind CSS styling
- shadcn/ui components
- MDX-powered blog and notebook content
- Notebook drawer powered by a Sheet component
- Imported pentesting documentation and writeups
- Driver.js installed for future guided product tours
- Path aliases with `@/`
- Static generation for content routes
- ESLint + Prettier code quality setup
- Husky + lint-staged pre-commit checks
- Vitest + Testing Library test setup
- GitHub Actions CI for format, lint, test, and build

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- MDX
- gray-matter
- next-mdx-remote
- Driver.js

## Quality Tooling

The project includes a lightweight quality gate for local development and CI:

- ESLint with Next.js core web vitals, TypeScript, and React Hooks rules
- Prettier for consistent formatting
- Husky pre-commit hook
- lint-staged for staged TypeScript and JavaScript files
- Vitest with jsdom and Testing Library
- GitHub Actions CI workflow

### Pre-commit behavior

On commit, staged `js`, `jsx`, `ts`, and `tsx` files run:

- `eslint --fix`
- `prettier --write`

## Project Structure

```text
portfolio-blog/
├── app/
│   ├── api/notebook/[tool]/route.ts
│   ├── blog/
│   ├── notebook/
│   ├── layout.tsx
│   ├── page.tsx
│   └── providers.tsx
├── components/
│   ├── blog/
│   ├── landing/
│   ├── layout/
│   ├── notebook/
│   └── ui/
├── config/
│   └── site.ts
├── content/
│   ├── notebooks/
│   └── writeups/
├── lib/
├── public/
├── styles/
└── types/
```

## Content Model

### Writeups

Writeups live under `content/writeups/<slug>/index.mdx`.

Required frontmatter:

```yaml
title: "Post title"
description: "Short summary"
date: "2026-04-07"
tags:
	- writeup
tools:
	- nmap
	- ffuf
```

### Notebooks

Tool notebooks live under `content/notebooks/<tool>.mdx`.

Required frontmatter:

```yaml
title: "Nmap"
description: "Service discovery notes"
category: "Imported Documentation"
tags:
	- notebook
	- nmap
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run ESLint:

```bash
npm run lint
```

Format the repository:

```bash
npm run format
```

Check formatting without writing changes:

```bash
npm run format:check
```

Run tests:

```bash
npm run test -- --run
```

Run tests in watch mode:

```bash
npm run test:watch
```

Build for production:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Available Scripts

- `npm run dev` starts the local Next.js development server
- `npm run build` creates a production build
- `npm run start` runs the built application
- `npm run lint` runs ESLint across the repository
- `npm run format` formats the repository with Prettier
- `npm run format:check` checks formatting without writing changes
- `npm run test` starts Vitest
- `npm run test:watch` starts Vitest in watch mode

## Tool Drawer Integration

Inside MDX writeups you can reference tools with `ToolPill`:

```mdx
<ToolPill tool="nmap" />
<ToolPill tool="burp" label="Burp Suite" />
```

When clicked, the notebook drawer loads the matching tool notes from the notebook content library.

## Customization

Main places to update first:

- `config/site.ts` for profile data, navigation, links, and section content
- `content/writeups/` for your blog posts
- `content/notebooks/` for your tool documentation
- `components/landing/` for landing page sections

## Testing and CI

Vitest is configured with a `jsdom` environment and a shared setup file for Testing Library matchers.

Relevant files:

- `vitest.config.ts`
- `src/tests/setup.ts`
- `tests/components/`

GitHub Actions runs the following checks on pushes to `main` and on pull requests:

- `npm run format:check`
- `npm run lint`
- `npm run test -- --run`
- `npm run build`

## GitHub Repository Setup

Recommended repository name:

- `Portfolio`

Suggested GitHub description:

`A modern developer portfolio and technical blog built with Next.js, TypeScript, Tailwind CSS, MDX, and shadcn/ui, featuring security writeups and an interactive tool notebook system.`

Suggested topics:

- `nextjs`
- `react`
- `typescript`
- `tailwindcss`
- `mdx`
- `shadcn-ui`
- `portfolio`
- `blog`
- `cybersecurity`
- `writeups`

## Deploying on Vercel

This project is ready to deploy on Vercel.

### Option 1: Deploy from the Vercel dashboard

1. Sign in to Vercel.
2. Click `Add New...` -> `Project`.
3. Import the GitHub repository `Thyroi/Portfolio`.
4. Keep the framework preset as `Next.js`.
5. Leave the root directory as the repository root.
6. Leave the build command as `next build`.
7. Leave the output settings as Vercel defaults.
8. Click `Deploy`.

### Option 2: Deploy with the Vercel CLI

Install the CLI:

```bash
npm i -g vercel
```

Deploy from the project root:

```bash
vercel
```

For production deployment:

```bash
vercel --prod
```

### Notes

- No extra environment variables are required for the current version of the app.
- Content is stored locally in the repository, so deployment does not depend on an external CMS.
- Each push to `main` can trigger an automatic Vercel deployment once the repo is connected.
- GitHub Actions CI can fail before deployment if format, lint, test, or build checks break.

## License

This project is currently maintained as a personal portfolio and knowledge base.
