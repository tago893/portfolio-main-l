import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import aiomImg from "@/assets/aiom.jpg";
import eventseatImg from "@/assets/eventseat.jpg";
import vulnImg from "@/assets/vuln-analyzer.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Varun Chikkala" },
      {
        name: "description",
        content:
          "Selected projects: real-time infra monitoring, a high-concurrency reservation backend, and an LLM-powered malware analyzer.",
      },
      { property: "og:title", content: "Projects | Varun Chikkala" },
      {
        property: "og:description",
        content: "Backend, data, and AI projects built by Varun Chikkala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    title: "AIOM: Real-Time Infra Monitoring",
    tag: "Systems · Observability",
    img: aiomImg,
    takeaway:
      "Hub-and-agent platform that ingests, stores, and alerts on infrastructure metrics in real time.",
    metrics: ["78K LOC", "MQTT agent transport", "TimescaleDB time-series"],
    highlights: [
      "Go/Python agents stream host and container metrics over MQTT to a central hub.",
      "TimescaleDB hypertables back dashboards and alerting with sub-second queries.",
      "Threshold and anomaly alert rules with notification fan-out and silence windows.",
    ],
    tech: ["Python", "Go", "MQTT", "TimescaleDB", "Docker", "React"],
  },
  {
    title: "EventSeat: High-Concurrency Reservations",
    tag: "Backend · Concurrency",
    img: eventseatImg,
    takeaway: "Ticket reservation backend that holds seats correctly under load, with no double-booking.",
    metrics: ["Redis TTL seat holds", "Idempotent booking API", "Postgres row locks"],
    highlights: [
      "Redis TTL locks reserve seats during checkout and auto-release on timeout.",
      "Idempotency keys prevent duplicate bookings on flaky clients and replays.",
      "Postgres transactions finalize bookings with row-level locks on inventory.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Vulnerability & Malware Analyzer",
    tag: "AI · Security",
    img: vulnImg,
    takeaway: "Catches the malicious-package attacks that plain static analysis misses, in seconds per repo.",
    metrics: ["4 vuln classes", "<2s per file", "CI-ready JSON"],
    highlights: [
      "Detects command injection, path traversal, hardcoded secrets, and unsafe deserialization.",
      "LLM engine flags obfuscation, unauthorized network calls, and data leakage.",
      "Emits JSON reports with severity, vulnerable snippets, and remediation steps.",
    ],
    tech: ["Python", "LangChain", "AST", "Gemini"],
  },
];

function ProjectsPage() {
  return (
    <div className="bg-background text-zinc-400 font-body antialiased min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1 px-6 pt-40 pb-24">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
            Selected work
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-zinc-100 leading-tight mb-6 text-balance">
            Projects I'm proud of.
          </h1>
          <p className="text-lg max-w-[56ch] text-pretty mb-16">
            Three builds across systems, backend, and AI security.
          </p>

          <div className="space-y-20">
            {projects.map((p, i) => (
              <article key={p.title} className="grid md:grid-cols-2 gap-10 items-center">
                <div className={i % 2 ? "md:order-2" : ""}>
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover rounded-lg ring-1 ring-zinc-800"
                  />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-accent mb-3">{p.tag}</p>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-zinc-100 mb-4">
                    {p.title}
                  </h2>
                  <p className="text-pretty mb-5">{p.takeaway}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.metrics.map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-1 rounded bg-accent/10 ring-1 ring-accent/30 text-xs text-zinc-200"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-5">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="text-sm leading-relaxed pl-4 relative before:content-['-'] before:absolute before:left-0 before:text-zinc-700"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 bg-zinc-900 ring-1 ring-zinc-800 rounded text-[11px] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/varunchikkala"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-accent hover:underline underline-offset-4"
                  >
                    View on GitHub →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
