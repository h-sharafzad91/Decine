
# DeCine – Decentralized Film Finance Platform

DeCine is a blockchain-powered platform for decentralized film funding. It features a modern landing page for collecting email signups and is architected to scale into a complete end-to-end film financing platform.

---

## 🌐 Overview

Built as a full-stack TypeScript application, DeCine includes:

- 🔹 **Frontend**: React 18 + Vite + Tailwind + shadcn/ui
- 🔹 **Backend**: Node.js + Express + PostgreSQL (via Drizzle ORM)
- 🔹 **Monorepo Structure**: Client, Server, Shared Types
- 🔹 **CI/CD**: GitHub Actions + GoDaddy Deployment (via SSH)

---

## 🧱 Architecture

### 📦 Frontend

| Feature              | Tool/Framework             |
|----------------------|----------------------------|
| Framework            | React 18 + TypeScript      |
| Build Tool           | Vite                       |
| UI System            | Radix UI + shadcn/ui       |
| Styling              | Tailwind CSS               |
| State Management     | TanStack Query             |
| Form Validation      | React Hook Form + Zod      |
| Routing              | Wouter                     |

### ⚙️ Backend

| Feature              | Tool/Framework             |
|----------------------|----------------------------|
| Runtime              | Node.js + TypeScript       |
| Framework            | Express                    |
| ORM                  | Drizzle ORM                |
| DB                   | PostgreSQL (Neon)          |
| Session Mgmt         | PostgreSQL-backed sessions |
| Logging & Errors     | Centralized + Modular      |

---

## 🗂️ Folder Structure

```

/
├── client/      # React frontend
├── server/      # Express backend
├── shared/      # Shared types and schema
├── migrations/  # DB migrations

````

---

## ✍️ Key Features

- **Email Signup Flow**: Validated by Zod, submitted to a backend API
- **Toast Feedback**: Real-time user feedback on submission
- **Custom Theme Support**: Light/Dark mode with brand colors
- **Accessibility**: WCAG-compliant components using Radix primitives
- **Mobile Responsive**: Optimized for small screens

---

## 🚀 Development Setup

```bash
npm install
npm run dev
````

* Runs Vite dev server with hot reload
* TypeScript + ESLint enforced

---

## 🏗️ Build for Production

```bash
npm run build
```

* Frontend is bundled using Vite
* Backend compiled with `esbuild`

---

## 🔐 Deployment

Deployed automatically via GitHub Actions:

* Trigger: Push to `main` branch
* CI: Installs deps → builds → uploads via SCP to GoDaddy VPS
* Target: `/home/youruser/public_html`

---

## 📦 External Dependencies

### Frontend

* `react-hook-form`, `zod`, `radix-ui`, `lucide-react`
* `date-fns`, `clsx`, `tailwind-merge`, `embla-carousel`

### Backend

* `drizzle-orm`, `express`, `pg`, `connect-pg-simple`
* `tsx`, `esbuild` for efficient builds

---

## 🧠 Scalability Notes

* Backend and frontend are decoupled for future microservices
* Serverless-ready PostgreSQL (Neon)
* Session storage supports multi-instance deployment
* Static assets can be served from CDN

---

## 🔒 Environment

* Use `.env` to define:

  ```
  DATABASE_URL=your-neon-db-url
  SESSION_SECRET=your-secret
  ```

> ⚠️ Don’t commit `.env` — it’s ignored by `.gitignore`.

---

## ✅ Status

🧪 Currently in MVP phase: landing page + email signup live.
🧱 Under development: auth, dashboard, smart contract integration.

---

## 👨‍💻 Authors & Contributions

Maintained by a full-stack blockchain developer.
Designed for future team collaboration (developers, CTO, managers).

---

Let me know if you’d like:

* A full `.gitignore`
* This `README.md` file exported
* A GitHub Action YAML included in the repo structure

I can also auto-generate your `deploy.yml` or push this for you if needed.
