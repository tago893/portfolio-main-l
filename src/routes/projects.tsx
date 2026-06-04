import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import aiomImg from "@/assets/aiom.jpg";
import docxImg from "@/assets/docx.jpg";
import vulnImg from "@/assets/vuln-analyzer.jpg";
import expenseImg from "@/assets/expense-recon.jpg";
import inventoryImg from "@/assets/inventory-aws.jpg";
import eventseatImg from "@/assets/eventseat.jpg";
import mcpImg from "@/assets/mcp-agent.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Varun Chikkala" },
      {
        name: "description",
        content:
          "Selected engineering projects across infra monitoring, AI document intelligence, data engineering, AWS, and backend systems.",
      },
      { property: "og:title", content: "Projects — Varun Chikkala" },
      {
        property: "og:description",
        content:
          "Real-time monitoring, RAG document intelligence, security AI, AWS event-driven systems, and high-concurrency backends.",
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
  github: string;
  demo?: string;
  year: string;
  status?: "shipped" | "in-progress";
};

const categories: { id: string; label: string; description: string; projects: Project[] }[] = [
  {
    id: "featured",
    label: "Featured",
    description: "The two flagship builds — biggest scope, deepest systems work.",
    projects: [
      {
        title: "AIOM — Real-Time Infra Monitoring",
        image: aiomImg,
        year: "2025",
        takeaway:
          "Hub-and-agent platform that ingests, stores, and alerts on infrastructure metrics in real time.",
        metrics: [
          { value: "78K", label: "lines of code" },
          { value: "MQTT", label: "agent transport" },
          { value: "TimescaleDB", label: "time-series store" },
        ],
        blurb:
          "Self-hosted infra observability stack with custom agents, MQTT pipeline, and time-series storage.",
        highlights: [
          "Custom Go/Python agents stream host + container metrics over MQTT to a central hub.",
          "TimescaleDB hypertables back dashboards and alerting with sub-second query latency.",
          "Threshold + anomaly alert rules with notification fan-out and silence windows.",
        ],
        tech: ["Python", "Go", "MQTT", "TimescaleDB", "PostgreSQL", "Docker", "React"],
        github: "https://github.com/varunchikkala",
      },
      {
        title: "Docx — AI Document Intelligence",
        image: docxImg,
        year: "2025",
        takeaway:
          "Offline-first PWA that turns a pile of PDFs into a chat-and-search interface backed by RAG.",
        metrics: [
          { value: "RAG", label: "+ agentic flows" },
          { value: "PWA", label: "offline-first" },
          { value: "Multi-LLM", label: "Gemini / OpenAI" },
        ],
        blurb:
          "Document Q&A and summarization app with vector search, agentic tools, and offline sync.",
        highlights: [
          "Chunking + embedding pipeline with pluggable vector store and reranker.",
          "Agentic flows pick between summarize / extract / cite-source tools per query.",
          "Service-worker cache keeps recently opened docs and answers usable offline.",
        ],
        tech: ["TypeScript", "React", "FastAPI", "Postgres", "pgvector", "LangChain", "PWA"],
        github: "https://github.com/varunchikkala",
      },
    ],
  },
  {
    id: "ai-security",
    label: "AI & Security",
    description: "LLM-driven tooling for code security and developer workflows.",
    projects: [
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
          "SAST tool that parses Python ASTs and pairs them with an LLM-driven malware scorer.",
        highlights: [
          "Detects command injection, path traversal, hardcoded credentials, insecure deserialization.",
          "LLM engine flags obfuscation, unauthorized network calls, and data leakage risks.",
          "Emits machine-readable JSON with severity, vulnerable snippets, and remediation steps.",
        ],
        tech: ["Python", "LangChain", "AST", "Gemini", "JSON"],
        github: "https://github.com/varunchikkala",
      },
      {
        title: "MCP DevOps PR Agent",
        image: mcpImg,
        year: "2025",
        status: "in-progress",
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
        github: "https://github.com/varunchikkala",
      },
    ],
  },
  {
    id: "data-cloud",
    label: "Data Engineering & Cloud",
    description: "Pipelines, AWS event-driven systems, and OCR + LLM extraction at scale.",
    projects: [
      {
        title: "Expense Reconciliation & Data Automation",
        image: expenseImg,
        year: "2025",
        takeaway:
          "Live pipeline that reconciles OCR-extracted invoices against federal vendor-payment records.",
        metrics: [
          { value: "BigQuery", label: "warehouse" },
          { value: "OCR + LLM", label: "extraction" },
          { value: "Redis", label: "dedupe cache" },
        ],
        blurb:
          "Ingests USAspending.gov vendor payments into BigQuery and matches them against parsed receipts.",
        highlights: [
          "OCR + LLM extraction pulls vendor, amount, date, and line items from receipt/invoice images.",
          "Reconciliation engine matches extracted invoices to vendor-payment records and flags mismatches.",
          "FastAPI service exposes match results; Redis layer dedupes and caches hot lookups.",
        ],
        tech: ["Python", "FastAPI", "BigQuery", "OCR", "LLM", "SQL", "Redis", "Docker"],
        github: "https://github.com/varunchikkala",
      },
      {
        title: "Inventory Upload & Anomaly Review Portal",
        image: inventoryImg,
        year: "2025",
        takeaway:
          "Event-driven AWS pipeline that ingests inventory uploads and routes anomalies for human review.",
        metrics: [
          { value: "S3 + Lambda", label: "ingest path" },
          { value: "SQS + DLQ", label: "retry-safe queue" },
          { value: "DynamoDB", label: "review state" },
        ],
        blurb:
          "S3 → Lambda → SQS pipeline that validates inventory uploads and surfaces anomalies via a review portal.",
        highlights: [
          "S3 PUT triggers Lambda validators; failures land in a DLQ for replay instead of silent drops.",
          "Anomalies stored in DynamoDB and surfaced through a reviewer UI with accept/reject actions.",
          "IAM-scoped roles and per-tenant prefixes keep upload paths and access tightly isolated.",
        ],
        tech: ["AWS S3", "Lambda", "SQS", "DynamoDB", "Python", "React", "IAM"],
        github: "https://github.com/varunchikkala",
      },
    ],
  },
  {
    id: "backend-systems",
    label: "Backend & Systems",
    description: "High-concurrency services with real correctness guarantees.",
    projects: [
      {
        title: "EventSeat — High-Concurrency Reservation Platform",
        image: eventseatImg,
        year: "2025",
        takeaway:
          "Ticket reservation backend that holds seats correctly under load — no double-booking.",
        metrics: [
          { value: "Redis TTL", label: "seat holds" },
          { value: "Idempotent", label: "booking API" },
          { value: "Postgres tx", label: "commit path" },
        ],
        blurb:
          "Seat-hold and booking system using Redis TTL locks plus PostgreSQL transactions for safe commits.",
        highlights: [
          "Redis TTL locks reserve seats during checkout and auto-release on timeout.",
          "Idempotency keys + retries prevent duplicate bookings on flaky clients and webhook replays.",
          "Postgres transactions finalize the commit with row-level locks on seat inventory.",
        ],
        tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
        github: "https://github.com/varunchikkala",
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
                      <a href={p.github} target="_blank" rel="noreferrer" className="block">
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
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h3 className="font-display text-lg font-semibold text-zinc-100">
                            {p.title}
                          </h3>
                          {p.status === "in-progress" && (
                            <span className="shrink-0 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/10 text-accent ring-1 ring-accent/30">
                              In progress
                            </span>
                          )}
                        </div>
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
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm font-medium text-accent hover:underline underline-offset-4"
                          >
                            GitHub
                          </a>
                          {p.demo && (
                            <a
                              href={p.demo}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm font-medium bg-accent text-zinc-100 px-3 py-1.5 rounded ring-1 ring-accent hover:bg-accent/90 transition-all"
                            >
                              Demo
                            </a>
                          )}
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
