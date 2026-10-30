# DeCine — Blockchain-Based Film Finance

DeCine is a film-finance product concept exploring how blockchain infrastructure can make independent film funding more transparent and accessible. This repository contains the public-facing web application and its supporting full-stack TypeScript code.

> **Repository scope:** This is the web application repository. The separate smart-contract implementation is maintained in a private repository and is not included here.

## Product direction

- Present film projects and the DeCine proposition through a responsive web experience.
- Capture prospective-user interest through an email sign-up flow.
- Establish a TypeScript foundation for future product capabilities.

## Technology

| Area | Technologies |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| UI | Tailwind CSS, Radix UI, shadcn/ui |
| Data fetching | TanStack Query |
| Forms and validation | React Hook Form, Zod |
| Backend | Node.js, Express |
| Data layer | Drizzle ORM, PostgreSQL / Neon |
| Build | Vite, esbuild |

## Architecture

The application is organised around three areas:

- **Client** — React application and responsive user interface.
- **Server** — Express API and application services.
- **Shared** — shared schemas and types used across the application.

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Create a local `.env` file with the environment variables required by your setup. Never commit secrets.

Useful scripts:

```bash
npm run dev
npm run check
npm run build
npm run start
```

## Current scope and status

The public repository documents and contains the web application foundation, including the landing-page and email-sign-up experience. It should not be interpreted as a public release of the complete film-finance protocol or as evidence that investment, custody, or on-chain settlement is live.

## Engineering focus

This project demonstrates product-oriented full-stack development: translating a Web3 product concept into a typed frontend/backend application, structuring shared validation, and preparing a maintainable foundation for subsequent integrations.

## Author

Built by [Hossein Sharafzad](https://github.com/h-sharafzad91).
