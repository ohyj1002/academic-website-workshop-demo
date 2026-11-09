# Yoo Jung (Erika) Oh — Academic Website

A frontend-only, four-page academic personal website using the creator's uploaded biography, portrait, research paper, figure, and CV.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

_Populate as you build — short repo map plus pointers to the source-of-truth file for DB schema, API contracts, theme files, etc._

## Architecture decisions

_Populate as you build — non-obvious choices a reader couldn't infer from the code (3-5 bullets)._

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences
- First version is frontend only: no backend features, database, API integration, admin login, or working contact form.
- Only About (homepage), Research, CV, and Contact pages in the first version.
- Uploaded materials are authoritative. Never invent biography, professional links, citations, research results, or methods.
- The creator approved featuring the uploaded review under its published title, “Artificial Intelligence Chatbots as Relational Agents: A Systematic Review of Human–AI Chatbot Relationships,” instead of the initially requested study title.
- Preserve original uploaded sources and figure content. Reproduce the original figure caption exactly.
- Use deep green (#18453B), off-white, charcoal, subtle accents, generous whitespace, and minimal effects; inspiration from MSU must not imply this is an official university site.

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
