import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import vulnImg from "@/assets/vuln-analyzer.jpg";
import mcpImg from "@/assets/mcp-agent.jpg";
import ragImg from "@/assets/rag-assistant.jpg";
import apiverseImg from "@/assets/apiverse.jpg";
import trimetImg from "@/assets/trimet.jpg";
import docxImg from "@/assets/docx.jpg";
import aiomImg from "@/assets/aiom.jpg";
import expenseImg from "@/assets/expense-recon.jpg";
import fileHubImg from "@/assets/file-hub.jpg";
import movieImg from "@/assets/movie-booking.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Varun Chikkala" },
      {
        name: "description",
        content:
          "Selected engineering projects across AI & developer tools, data platforms, and web & APIs.",
      },
      { property: "og:title", content: "Projects — Varun Chikkala" },
      {
        property: "og:description",
        content:
          "AI security tooling, RAG systems, transit data pipelines, and API platforms by Varun Chikkala.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Metric = { value: string; label: string };
type Project = {
  title: string;
  image: string;
  blurb: string;
  takeaway: string;
  metrics: Metric[];
  highlights: string[];
  tech: string[];
  href: string;
  year: string;
};

const categories: { id: string; label: string; description: string; projects: Project[] }[] = [
  {
    id: "ai-devtools",
    label: "AI & Developer Tools",
    description: "LLM-powered platforms, agents, and security tooling.",
    projects: [
      {
        title: "Docx — AI Document Intelligence",
        image: docxImg,
        year: "2026",
        takeaway:
          "Notion-style editor meets RAG — fully self-hosted, works with zero network.",
        metrics: [
          { value: "9", label: "service docker stack" },
          { value: "4", label: "LLM providers" },
          { value: "Offline", label: "first PWA" },
        ],
        blurb:
          "Self-hosted knowledge platform pairing a block editor with semantic AI search and an agentic assistant.",
        highlights: [
          "RAG over the user's full corpus with pgvector cosine retrieval and inline source citations.",
          "Multi-provider LLM layer (Claude, GPT-4o, local Ollama) with cloud→offline failover and cost-aware routing.",
          "Agentic assistant unifying Anthropic tool_use and OpenAI function-calling over a typed tool registry.",
        ],
        tech: ["Python", "FastAPI", "pgvector", "Claude", "OpenAI", "Ollama", "React", "PWA", "Docker"],
        href: "https://github.com/tago893",
      },
      {
        title: "Automated Vulnerability & Malware Analyzer",
        image: vulnImg,
        year: "2025",
        takeaway:
          "Catches the malicious-package class of attacks that pure SAST misses, in seconds per repo.",
        metrics: [
          { value: "4", label: "vuln classes detected" },
          { value: "<2s", label: "scan per file" },
          { value: "JSON", label: "CI-ready output" },
        ],
        blurb:
          "A SAST tool that parses Python ASTs and pairs them with an LLM-driven malware scorer.",
        highlights: [
          "Detects command injection, path traversal, hardcoded credentials, and insecure deserialization.",
          "LLM engine flags obfuscation, unauthorized network calls, and data leakage risks.",
          "Emits machine-readable JSON with severity, vulnerable snippets, and remediation steps.",
        ],
        tech: ["Python", "LangChain", "AST", "Gemini", "JSON"],
        href: "https://github.com/tago893",
      },
      {
        title: "MCP DevOps PR Agent",
        image: mcpImg,
        year: "2025",
        takeaway:
          "Turns failed CI runs into a reviewed PR comment without a human pulling the logs.",
        metrics: [
          { value: "3", label: "MCP tool servers" },
          { value: "~80%", label: "auto-triaged failures" },
          { value: "0", label: "manual log digs" },
        ],
        blurb:
          "FastAPI webhook service that analyzes GitHub PRs, failed CI runs, and security findings.",
        highlights: [
          "Custom MCP Repo & CI servers expose diffs, file updates, and Actions logs as LLM tools.",
          "Bandit + Flake8 + docstring checks integrated into the review loop.",
          "Exponential backoff and staggered execution for reliable automation.",
        ],
        tech: ["Python", "FastAPI", "MCP", "GitHub Actions", "Gemini", "Bandit"],
        href: "https://github.com/tago893",
      },
    ],
  },
  {
    id: "data-ml",
    label: "Data & Machine Learning",
    description: "Pipelines, vector retrieval, and analytics on real-world datasets.",
    projects: [
      {
        title: "AI Conversational Assistant",
        image: ragImg,
        year: "2024",
        takeaway:
          "Researchers query 2.8M papers in plain English instead of waiting overnight for a SQL run.",
        metrics: [
          { value: "2.8M", label: "paper embeddings" },
          { value: "12h → <4h", label: "indexing time" },
          { value: "80K", label: "papers per batch" },
        ],
        blurb:
          "Researcher-facing RAG platform indexing 2.8M+ paper embeddings for plain-English queries.",
        highlights: [
          "Chunked ingestion pipeline processed 80K papers per batch, cutting indexing from 12h to <4h.",
          "Compared Azure AI Search semantic retrieval against Milvus vector retrieval.",
          "LLM abstraction across Gemini, OpenAI, and Hugging Face — model calls decoupled from ranking.",
        ],
        tech: ["Python", "Milvus", "Azure AI Search", "Gemini", "OpenAI"],
        href: "https://github.com/tago893/dipr-work",
      },
      {
        title: "Expense Reconciliation & Data Automation",
        image: expenseImg,
        year: "2025",
        takeaway:
          "Matches receipts against public payment records to surface vendor and amount mismatches automatically.",
        metrics: [
          { value: "OCR", label: "invoice extraction" },
          { value: "BigQuery", label: "warehouse" },
          { value: "NL→SQL", label: "audit queries" },
        ],
        blurb:
          "Live reconciliation pipeline ingesting USAspending.gov payments and matching against OCR'd invoices.",
        highlights: [
          "Pulled vendor-payment records into BigQuery and processed Kaggle receipt/invoice images via OCR + LLM extraction.",
          "Flagged vendor, amount, date, and payable mismatches against public payment data.",
          "Enabled SQL and natural-language querying for reporting, exception review, and audit workflows.",
        ],
        tech: ["Python", "FastAPI", "BigQuery", "OCR", "LLM", "SQL", "Redis", "Docker"],
        href: "https://github.com/tago893",
      },
      {
        title: "TriMet GPS Insights",
        image: trimetImg,
        year: "2025",
        takeaway:
          "Turned a noisy GPS firehose into a queryable dataset transit planners can actually use.",
        metrics: [
          { value: "350K", label: "records / day" },
          { value: "NL→SQL", label: "researcher interface" },
          { value: "1", label: "city of coverage" },
        ],
        blurb:
          "ETL pipeline processing 350K+ daily GPS and stop-event records from Portland transit.",
        highlights: [
          "Fixed route IDs, computed vehicle speeds, and organized trip-level records for delay analysis.",
          "NL-to-SQL interface with prompt sanitization for researchers to query in plain English.",
          "MapboxGL clustering and route heatmaps for visual exploration.",
        ],
        tech: ["Python", "PostgreSQL", "Google Cloud", "MapboxGL"],
        href: "https://github.com/sriramnurani1995/MetroMetricsMavericks",
      },
    ],
  },
  {
    id: "infra-platforms",
    label: "Infrastructure & Platforms",
    description: "Real-time systems, telemetry pipelines, and self-hostable platforms.",
    projects: [
      {
        title: "AIOM — Real-Time Infrastructure Monitoring",
        image: aiomImg,
        year: "2026",
        takeaway:
          "Self-hostable monitoring SaaS — no inbound firewall rules required.",
        metrics: [
          { value: "~78K", label: "lines of code" },
          { value: "30s", label: "alert eval cadence" },
          { value: "3 OS", label: "agent distributables" },
        ],
        blurb:
          "Hub + Agent observability platform pushing metrics over MQTT with rule-based alerting and a drag-and-drop dashboard builder.",
        highlights: [
          "Lightweight Python agents push telemetry over MQTT to a central hub with HMAC-SHA256 payload signing.",
          "TimescaleDB hypertables with multi-window aggregation, fanned out to live dashboards over WebSockets.",
          "Celery-driven alerting engine (threshold, service-down, agent-offline, URL-down) with Slack/email/webhook routing.",
        ],
        tech: ["Python", "FastAPI", "MQTT", "TimescaleDB", "Celery", "WebSockets", "React", "Redis", "Docker"],
        href: "https://github.com/tago893",
      },
    ],
  },
  {
    id: "web-apis",
    label: "Web & APIs",
    description: "Backend services and full-stack apps shipped to real users.",
    projects: [
      {
        title: "APIVerse",
        image: apiverseImg,
        year: "2024",
        takeaway:
          "Gave students a safe sandbox to learn real API workflows without leaking production keys.",
        metrics: [
          { value: "25%", label: "faster iteration" },
          { value: "OAuth", label: "key lifecycle" },
          { value: "Vertex AI", label: "live LLM demos" },
        ],
        blurb:
          "Secure API exploration platform for Portland State students to learn real-world API workflows.",
        highlights: [
          "Integrated Gemini LLM endpoints via Vertex AI for live demos.",
          "Automated API key lifecycle management with OAuth.",
          "Improved iteration speed 25% through faster Cloud Run redeploys.",
        ],
        tech: ["Python", "Flask", "FastAPI", "Google Cloud", "Docker", "OAuth"],
        href: "https://github.com/sriramnurani1995/APIverse",
      },
      {
        title: "Abnormal File Hub",
        image: fileHubImg,
        year: "2025",
        takeaway:
          "Dedup-aware file storage that catches duplicate uploads before they hit disk.",
        metrics: [
          { value: "Dedup", label: "by content hash" },
          { value: "REST", label: "clean API" },
        ],
        blurb:
          "Full-stack file management service with content-hash deduplication and a React front-end.",
        highlights: [
          "Backend computes content hashes server-side to skip storing duplicate blobs.",
          "Clean Django REST API consumed by a React UI for upload, listing, and search.",
        ],
        tech: ["Django", "DRF", "React", "PostgreSQL", "Docker"],
        href: "https://github.com/tago893/abnormal-file-hub-main",
      },
      {
        title: "Movie Booking Application",
        image: movieImg,
        year: "2024",
        takeaway:
          "End-to-end ticketing flow with seat selection, holds, and confirmations.",
        metrics: [
          { value: "Seat-map", label: "live state" },
          { value: "Auth", label: "user accounts" },
        ],
        blurb:
          "Full-stack movie ticket booking app covering browsing, seat selection, and checkout.",
        highlights: [
          "Modeled showtimes, seats, and bookings with concurrency-safe hold logic.",
          "Auth-gated checkout flow with booking history per user.",
        ],
        tech: ["Python", "Django", "PostgreSQL", "React"],
        href: "https://github.com/tago893/movie_booking_application",
      },
    ],
  },
];

function ProjectsPage() {
  return (
    <div className="bg-background text-zinc-400 font-body antialiased min-h-screen">
      <SiteNav />

      <main>
        {/* Header */}
        <section className="pt-40 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6">
              Projects
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-semibold text-zinc-100 leading-tight mb-6 text-balance">
              Things I've built.
            </h1>
            <p className="text-lg leading-relaxed max-w-[60ch] text-pretty mb-10">
              A mix of production work, research projects, and side experiments — grouped by what
              they do, not when I shipped them.
            </p>
            <nav className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <a
                  key={c.id}
                  href={`#${c.id}`}
                  className="px-4 py-2 rounded-full bg-zinc-900/60 ring-1 ring-zinc-900 text-sm text-zinc-300 hover:text-zinc-100 hover:ring-accent/40 transition-all"
                >
                  {c.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Categories */}
        <div className="px-6 pb-32">
          <div className="max-w-7xl mx-auto space-y-24">
            {categories.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-24">
                <header className="mb-12 pb-6 border-b border-zinc-900/60">
                  <h2 className="font-display text-3xl font-semibold text-zinc-100 mb-3">
                    {cat.label}
                  </h2>
                  <p className="text-zinc-500 max-w-[60ch] text-pretty">{cat.description}</p>
                </header>

                <div className="grid sm:grid-cols-2 gap-6">
                  {cat.projects.map((p) => (
                    <article
                      key={p.title}
                      className="group rounded-lg ring-1 ring-zinc-900 bg-zinc-950/40 overflow-hidden hover:ring-accent/40 transition-all flex flex-col"
                    >
                      <a href={p.href} target="_blank" rel="noreferrer" className="block">
                        <img
                          src={p.image}
                          alt={`${p.title} preview`}
                          width={1280}
                          height={720}
                          loading="lazy"
                          className="w-full aspect-[16/9] object-cover"
                        />
                      </a>
                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-display text-lg font-semibold text-zinc-100 mb-3">
                          {p.title}
                        </h3>
                        <p className="text-sm italic text-zinc-400 mb-4 text-pretty">
                          {p.takeaway}
                        </p>
                        <p className="text-sm text-zinc-300 mb-4">
                          <span className="font-semibold text-zinc-100">Technologies: </span>
                          <span className="text-zinc-400">{p.tech.join(", ")}</span>
                        </p>
                        <ul className="space-y-1.5 mb-5 list-disc pl-5 marker:text-zinc-600">
                          {p.highlights.slice(0, 2).map((h, i) => (
                            <li key={h} className="text-sm leading-relaxed text-zinc-400">
                              {i === 0 && (
                                <span className="font-semibold text-accent">Impact: </span>
                              )}
                              {h}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center gap-3 mt-auto">
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-accent hover:underline underline-offset-4"
                          >
                            GitHub
                          </a>
                          <a
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium bg-accent text-zinc-100 px-3 py-1.5 rounded ring-1 ring-accent hover:bg-accent/90 transition-all"
                          >
                            Demo
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="py-20 px-6 border-t border-zinc-900/60 bg-zinc-950/40">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-semibold text-zinc-100 mb-2">
                Want the long version?
              </h2>
              <p className="text-zinc-500">Read what I'm thinking about on the blog.</p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/blog"
                className="bg-accent text-zinc-100 px-5 py-2.5 rounded-md ring-1 ring-accent text-sm font-medium hover:bg-accent/90 transition-all"
              >
                Read the blog →
              </Link>
              <Link
                to="/"
                className="bg-zinc-900 text-zinc-300 px-5 py-2.5 rounded-md ring-1 ring-zinc-800 text-sm font-medium hover:text-zinc-100 transition-all"
              >
                Back home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
