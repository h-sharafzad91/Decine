# DeCine — Blockchain-Based Film Finance

DeCine explores a Web3 model for film financing: film projects, investor participation, transparent funding activity, and community-oriented governance.

This repository contains the DeCine web application. The project is being developed as a broader product rather than presented as a finished, audited investment platform.

## Product direction

- Discover film projects and review project information.
- Connect a Web3 wallet to interact with the application.
- Follow funding activity and investment-related information.
- Support a producer workflow for proposing and managing projects.
- Explore governance and project administration concepts.

> **Project status:** Work in progress. Features and integrations may vary by branch and environment. Do not treat this repository as evidence that a live investment service or production-ready financial product is available.

## Application architecture

The application is organized as a TypeScript full-stack codebase:

| Layer | Technologies |
|---|---|
| Frontend | React 18, TypeScript, Vite |
| UI | Tailwind CSS, Radix UI, shadcn/ui |
| Data and forms | TanStack Query, React Hook Form, Zod |
| Backend | Node.js, Express, TypeScript |
| Database | PostgreSQL, Drizzle ORM |
| Web3 integration | wagmi, ethers.js, RainbowKit |

The repository also contains shared application types/schema and database migration assets.

## Repository layout

```text
client/       Frontend application
server/       Backend API and application services
shared/       Shared schemas and types
migrations/   Database migrations
```

## Local development

Requirements:
- Node.js 18+
- PostgreSQL
- A Web3 wallet and RPC credentials for blockchain-dependent workflows

Install dependencies:

```bash
npm install
```

Configure the environment variables required by the application in a local `.env` file. Never commit credentials, private keys, or production secrets.

Start the development environment:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Check the package scripts and environment configuration in the current branch for the exact commands and required variables.

## Engineering focus

The main engineering challenges explored by this project include:
- Connecting conventional full-stack application workflows with wallet-based interactions.
- Modeling project and investment-related data.
- Keeping shared validation and types consistent across frontend and backend.
- Designing an extensible architecture for future contract and governance integrations.

## Security and limitations

This repository should be reviewed together with its current code and configuration before use. A README feature description is not a security guarantee. Smart contracts and financial workflows require independent testing, threat modelling, and audit before any real-value use.

## Maintainer

Built and maintained by **Hossein Sharafzad**.

For technical discussion, open a GitHub issue with a reproducible description.