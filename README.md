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

## Run Locally

```bash
# Clone
git clone https://github.com/varunchikkala/portfolio-main.git
cd portfolio-main

# Install dependencies
bun install

# Start dev server
bun dev
```

The site runs at `http://localhost:3000` by default.

## Build

```bash
bun run build
```

Static assets are emitted to `dist/`. The build is optimized for edge deployment.

## Structure

```
src/
  routes/          # TanStack file-based routes
  components/      # Reusable UI components
  content/posts/   # Markdown blog posts
  lib/             # Utils, data helpers, server functions
  assets/          # Images, resume PDF
```

## Contact

- Email: varunchikkala65@gmail.com
- LinkedIn: [linkedin.com/in/varunchikkala](https://www.linkedin.com/in/varunchikkala)
- GitHub: [github.com/varunchikkala](https://github.com/varunchikkala)

---

Built with care. No templates, no fluff — just the work.
