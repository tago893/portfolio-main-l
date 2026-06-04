import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import vulnImg from "@/assets/vuln-analyzer.jpg";
import mcpImg from "@/assets/mcp-agent.jpg";
import ragImg from "@/assets/rag-assistant.jpg";
import apiverseImg from "@/assets/apiverse.jpg";
import trimetImg from "@/assets/trimet.jpg";
import codedocImg from "@/assets/codedoc.jpg";

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
    description: "LLM-powered tooling for security, code review, and developer productivity.",
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
          "A SAST tool that parses Python ASTs and pairs them with an LLM-driven malware scorer.",
        highlights: [
          "Detects command injection, path traversal, hardcoded credentials, and insecure deserialization.",
          "LLM engine flags obfuscation, unauthorized network calls, and data leakage risks.",
          "Emits machine-readable JSON with severity, vulnerable snippets, and remediation steps.",
        ],
        tech: ["Python", "LangChain", "AST", "Gemini", "JSON"],
        href: "https://github.com/varunchikkala",
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
        href: "https://github.com/varunchikkala",
      },
      {
        title: "Code Documenter",
        image: codedocImg,
        year: "2024",
        takeaway:
          "Makes legacy repos readable on day one instead of week three.",
        metrics: [
          { value: "2", label: "languages supported" },
          { value: "AST", label: "grounded output" },
        ],
        blurb:
          "LLM-driven documentation generator for legacy Python and TypeScript repositories.",
        highlights: [
          "Cuts onboarding time by surfacing intent for undocumented modules.",
          "Walks ASTs to anchor LLM output to real symbols, not hallucinations.",
        ],
        tech: ["Python", "LLMs", "AST parsing"],
        href: "https://github.com/sriramnurani1995",
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
        href: "https://github.com/varunchikkala",
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
        href: "https://github.com/AashrithaKondaveetii/DE_Project_Pipeline_Pioneers",
      },
    ],
  },
  {
    id: "web-apis",
    label: "Web & APIs",
    description: "Backend services and educational platforms shipped to real users.",
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
        href: "https://github.com/sriramnurani1995/APIverse/tree/main",
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
                      className="group rounded-lg ring-1 ring-zinc-900 bg-zinc-950/40 p-5 hover:ring-accent/40 transition-all flex flex-col"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noreferrer"
                          className="shrink-0"
                        >
                          <img
                            src={p.image}
                            alt={`${p.title} preview`}
                            width={640}
                            height={480}
                            loading="lazy"
                            className="size-16 object-cover rounded-md ring-1 ring-zinc-900"
                          />
                        </a>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-medium text-zinc-600 uppercase tracking-[0.18em] mb-1">
                            {p.year}
                          </p>
                          <h3 className="font-display text-base font-semibold text-zinc-100 leading-snug text-balance">
                            {p.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed text-zinc-300 mb-4 text-pretty">
                        {p.takeaway}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 bg-zinc-900 ring-1 ring-zinc-800 rounded text-[10px] text-zinc-400"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <details className="mt-auto group/details">
                        <summary className="cursor-pointer text-[11px] uppercase tracking-[0.18em] text-zinc-500 hover:text-zinc-300 transition-colors list-none flex items-center gap-2">
                          <span className="transition-transform group-open/details:rotate-90">›</span>
                          More detail
                        </summary>
                        <p className="text-xs leading-relaxed text-zinc-400 mt-3">{p.blurb}</p>
                        <ul className="space-y-1.5 mt-2">
                          {p.highlights.map((h) => (
                            <li
                              key={h}
                              className="text-xs leading-relaxed text-zinc-400 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-zinc-700"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                        <dl className="grid grid-cols-3 gap-2 mt-3">
                          {p.metrics.map((m) => (
                            <div
                              key={m.label}
                              className="rounded bg-zinc-900/60 ring-1 ring-zinc-900 px-2 py-2"
                            >
                              <dt className="text-[9px] uppercase tracking-[0.14em] text-zinc-500 mb-0.5">
                                {m.label}
                              </dt>
                              <dd className="font-display text-sm font-semibold text-zinc-100 leading-none">
                                {m.value}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </details>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-accent transition-colors mt-3"
                      >
                        GitHub
                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                      </a>
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
