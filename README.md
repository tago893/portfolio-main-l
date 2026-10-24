# Varun Chikkala | Portfolio

> Personal site and engineering portfolio — built with TanStack Start, React 19, and Tailwind CSS.

## About

I'm a backend engineer based in Hayward, CA, with an MS in Computer Science from Portland State University. I work on search, retrieval, and AI systems — from RAG pipelines over millions of papers to real-time infrastructure monitoring and event-driven backends.

This repo powers my personal portfolio at [varunchikkala.dev](https://varunchikkala.dev).

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | TanStack Start (v1) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui + Radix UI primitives |
| Icons | Lucide React |
| Content | Markdown (gray-matter + react-markdown) |
| Build Tool | Vite 7 |

## Featured Projects

| Project | What it is | Stack |
|---------|-----------|-------|
| **AIOM** | Real-time infrastructure monitoring with custom agents, MQTT transport, and TimescaleDB | Python, Go, MQTT, TimescaleDB, Docker |
| **Docx** | AI document intelligence with RAG, multi-provider LLM layer, and vector search | Python, FastAPI, PostgreSQL, Milvus |
| **Vuln Analyzer** | LLM-powered security vulnerability classifier with 94% accuracy | Python, FastAPI, OpenAI |
| **EventSeat** | High-concurrency seat booking with Redis holds and idempotency | Python, FastAPI, Redis, Docker |
| **MCP Agent** | Model Context Protocol agent with GitHub tools and agentic workflows | Python, FastAPI, MCP |



## Deployment

The site deploys to **GitHub Pages** automatically through GitHub Actions
(`.github/workflows/deploy-pages.yml`) on every push to `main`.

One-time setup in the GitHub repo: **Settings → Pages → Build and deployment →
Source: GitHub Actions**.

Notes:

- The repo is served at `https://<owner>.github.io/portfolio-main-l/`, so the
  workflow builds with `VITE_BASE_PATH=/portfolio-main-l/`. If the repository
  name changes, update `BASE_PATH` in the workflow to match.
- The build produces a static SPA (`dist/client`), so no server runs on
  Pages; all pages render in the browser. Lovable's published URL is
  unaffected and keeps server rendering.

---

Built with care. No templates, no fluff — just the work.
