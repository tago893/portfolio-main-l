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

This site deploys automatically to **Vercel** via GitHub Actions on every push to `main`.

### Setup (one-time)

1. **Create a Vercel account** and import your GitHub repo at [vercel.com/new](https://vercel.com/new)
2. **Get your Vercel token**:  
   Go to Vercel Dashboard → Settings → Tokens → Create new token
3. **Add the token to GitHub secrets**:  
   Repo Settings → Secrets and variables → Actions → New repository secret  
   Name: `VERCEL_TOKEN`  
   Value: your token from step 2
4. **Push to `main`** — the workflow in `.github/workflows/deploy.yml` will build and deploy automatically

### Manual Deploy

If you want to deploy manually from your local machine:

```bash
# Install Vercel CLI
bun add -g vercel

# Login and link project (one-time)
vercel login
vercel link

# Deploy
NITRO_PRESET=vercel vercel --prod
```

---

Built with care. No templates, no fluff — just the work.
