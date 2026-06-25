# Firecrawl AI Read-It-Later Library (TanStack Start)

A full-stack "Read-It-Later" content library and bookmark manager built using **TanStack Start**, **Firecrawl**, **Vercel AI SDK**, **Better Auth**, and **Prisma**. It allows users to scrape single or multiple URLs, search and discover web pages on any topic, read clean extracted Markdown content, and automatically generate summaries and tags using LLMs.

---

## 🚀 Features

- **Single URL Import**: Scrape any webpage and extract clean markdown, title, author, and publication date using the Firecrawl Scrape API.
- **Bulk Import**: Scrape multiple URLs simultaneously. Input a website domain to map and filter links to import in batch.
- **Discover**: Perform web searches on any topic directly within the app using Firecrawl's Web Search capability, selecting relevant results to import.
- **AI-Powered Summarization & Tagging**: Automatically generate page summaries and extract key tags using Vercel AI SDK and OpenRouter models.
- **Reader Mode**: Read cleaned-up markdown content directly in a beautiful reader interface, stripped of ads and clutter.
- **Secure Authentication**: Built-in user authentication with Better Auth (signup, login, session management).
- **PostgreSQL Database**: Data persistence using Prisma ORM.

---

## 🛠️ Tech Stack & Dependencies

### Core / Full-stack

- **[TanStack Start](https://tanstack.com/start)** - Full-stack React framework with SSR, routing, and server functions.
- **[TanStack Router](https://tanstack.com/router)** - Type-safe, file-based routing.
- **[React 19](https://react.dev)** & **[Vite](https://vitejs.dev)** - Modern frontend runtime and build tool.

### Web Scraping & AI

- **[Firecrawl SDK](https://firecrawl.dev)** (`firecrawl`) - Advanced web scraping, crawling, and search API optimized for LLMs.
- **[Vercel AI SDK](https://sdk.vercel.ai/docs)** (`ai`, `@ai-sdk/react`) - Standardized interface for integrating AI models.
- **[OpenRouter AI Provider](https://openrouter.ai/)** (`@openrouter/ai-sdk-provider`) - Connects to diverse LLMs (configured with `poolside/laguna-m.1:free` model).

### Database & Authentication

- **[Prisma ORM](https://prisma.io)** (`@prisma/client`, `prisma`) - Type-safe database client and migration tool.
- **[Better Auth](https://www.better-auth.com)** (`better-auth`) - Complete authentication library for TypeScript.
- **PostgreSQL** - Relational database for storing users, sessions, and saved items.

### Styling & UI

- **[Tailwind CSS v4](https://tailwindcss.com)** (`tailwindcss`, `@tailwindcss/vite`) - Modern utility-first styling engine.
- **[Shadcn UI](https://ui.shadcn.com)** (`shadcn`, `radix-ui`) - Premium, accessible component primitives.
- **[Lucide React](https://lucide.dev)** (`lucide-react`) - Vector icons.
- **[Sonner](https://sonner.emilkowal.ski)** (`sonner`) - Toast notifications.

### Forms & Validation

- **[TanStack Form](https://tanstack.com/form)** (`@tanstack/react-form`) - Type-safe form state management.
- **[Zod](https://zod.dev)** (`zod`, `@tanstack/zod-adapter`) - Schema validation.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory (based on `.env.example`):

```env
# Database URL for PostgreSQL
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/app_db?schema=public"

# Better Auth Configuration
BETTER_AUTH_SECRET="your-better-auth-secret"
BETTER_AUTH_URL="http://localhost:3000"

# Firecrawl API Key
FIRECRAWL_API_KEY="your-firecrawl-api-key"

# AI Key (OpenRouter or other AI provider key)
AI_KEY="your-openrouter-api-key"
```

---

## 🚦 Getting Started

### 1. Start the Database

The project includes a `docker-compose.yml` to spin up a PostgreSQL instance.

```bash
docker compose up -d
```

### 2. Install Dependencies

Ensure you have `pnpm` installed, then run:

```bash
pnpm install
```

### 3. Setup the Database

Generate the Prisma Client and sync the database schema:

```bash
# Generate Prisma Client
pnpm db:generate

# Push schema to the database
pnpm db:push
```

If you want to view/manage database records via a graphical interface, you can run:

```bash
pnpm db:studio
```

### 4. Run the Development Server

```bash
pnpm dev
```

The application will be running at [http://localhost:3000](http://localhost:3000).

---

## 📦 Building & Testing

### Production Build

To compile the application for production:

```bash
pnpm build
```

This builds a self-contained Nitro server in the `dist/` directory. You can start it locally with:

```bash
node dist/server/index.mjs
```

### Testing

Run unit and integration tests via Vitest:

```bash
pnpm test
```

### Linting & Formatting

To run linter checks and auto-format code:

```bash
pnpm lint
pnpm format
```
