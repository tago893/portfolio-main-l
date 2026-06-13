# Projects Archive

Saved before clearing the projects page. Re-add when ready.

## Featured

### AIOM — Real-Time Infra Monitoring (2025)
- Image: src/assets/aiom.jpg
- Takeaway: Hub-and-agent platform that ingests, stores, and alerts on infrastructure metrics in real time.
- Metrics: 78K LOC; MQTT agent transport; TimescaleDB time-series store.
- Highlights:
  - Custom Go/Python agents stream host + container metrics over MQTT to a central hub.
  - TimescaleDB hypertables back dashboards and alerting with sub-second query latency.
  - Threshold + anomaly alert rules with notification fan-out and silence windows.
- Tech: Python, Go, MQTT, TimescaleDB, PostgreSQL, Docker, React
- GitHub: https://github.com/varunchikkala

### Docx — AI Document Intelligence (2025)
- Image: src/assets/docx.jpg
- Takeaway: Offline-first PWA that turns a pile of PDFs into a chat-and-search interface backed by RAG.
- Metrics: RAG + agentic flows; PWA offline-first; Multi-LLM (Gemini/OpenAI).
- Highlights:
  - Chunking + embedding pipeline with pluggable vector store and reranker.
  - Agentic flows pick between summarize / extract / cite-source tools per query.
  - Service-worker cache keeps recently opened docs and answers usable offline.
- Tech: TypeScript, React, FastAPI, Postgres, pgvector, LangChain, PWA
- GitHub: https://github.com/varunchikkala

## AI & Security

### Automated Vulnerability & Malware Analyzer (2025)
- Image: src/assets/vuln-analyzer.jpg
- Takeaway: Catches the malicious-package class of attacks that pure SAST misses, in seconds per repo.
- Metrics: 4 vuln classes detected; <2s scan per file; JSON CI-ready output.
- Highlights:
  - Detects command injection, path traversal, hardcoded credentials, insecure deserialization.
  - LLM engine flags obfuscation, unauthorized network calls, and data leakage risks.
  - Emits machine-readable JSON with severity, vulnerable snippets, and remediation steps.
- Tech: Python, LangChain, AST, Gemini, JSON
- GitHub: https://github.com/varunchikkala

### MCP DevOps PR Agent (2025, in-progress)
- Image: src/assets/mcp-agent.jpg
- Takeaway: Turns failed CI runs into a reviewed PR comment without a human pulling the logs.
- Metrics: 3 MCP tool servers; ~80% auto-triaged failures; 0 manual log digs.
- Highlights:
  - Custom MCP Repo & CI servers expose diffs, file updates, and Actions logs as LLM tools.
  - Bandit + Flake8 + docstring checks integrated into the review loop.
  - Exponential backoff and staggered execution for reliable automation.
- Tech: Python, FastAPI, MCP, GitHub Actions, Gemini, Bandit
- GitHub: https://github.com/varunchikkala

## Data Engineering & Cloud

### Expense Reconciliation & Data Automation (2025)
- Image: src/assets/expense-recon.jpg
- Takeaway: Live pipeline that reconciles OCR-extracted invoices against federal vendor-payment records.
- Metrics: BigQuery warehouse; OCR + LLM extraction; Redis dedupe cache.
- Highlights:
  - OCR + LLM extraction pulls vendor, amount, date, and line items from receipt/invoice images.
  - Reconciliation engine matches extracted invoices to vendor-payment records and flags mismatches.
  - FastAPI service exposes match results; Redis layer dedupes and caches hot lookups.
- Tech: Python, FastAPI, BigQuery, OCR, LLM, SQL, Redis, Docker
- GitHub: https://github.com/varunchikkala

### Inventory Upload & Anomaly Review Portal (2025)
- Image: src/assets/inventory-aws.jpg
- Takeaway: Event-driven AWS pipeline that ingests inventory uploads and routes anomalies for human review.
- Metrics: S3 + Lambda ingest path; SQS + DLQ retry-safe queue; DynamoDB review state.
- Highlights:
  - S3 PUT triggers Lambda validators; failures land in a DLQ for replay instead of silent drops.
  - Anomalies stored in DynamoDB and surfaced through a reviewer UI with accept/reject actions.
  - IAM-scoped roles and per-tenant prefixes keep upload paths and access tightly isolated.
- Tech: AWS S3, Lambda, SQS, DynamoDB, Python, React, IAM
- GitHub: https://github.com/varunchikkala

## Backend & Systems

### EventSeat — High-Concurrency Reservation Platform (2025)
- Image: src/assets/eventseat.jpg
- Takeaway: Ticket reservation backend that holds seats correctly under load, no double-booking.
- Metrics: Redis TTL seat holds; Idempotent booking API; Postgres tx commit path.
- Highlights:
  - Redis TTL locks reserve seats during checkout and auto-release on timeout.
  - Idempotency keys + retries prevent duplicate bookings on flaky clients and webhook replays.
  - Postgres transactions finalize the commit with row-level locks on seat inventory.
- Tech: Python, FastAPI, PostgreSQL, Redis, Docker
- GitHub: https://github.com/varunchikkala

## Home page carousel snippet (also removed)
- Automated Vulnerability & Malware Analyzer — vulnImg — AI · Security — Python AST-driven SAST with an LLM malware engine emitting structured JSON reports.
- MCP DevOps PR Agent — mcpImg — AI · DevTools — FastAPI webhook + MCP servers that turn GitHub PRs and CI logs into LLM-actionable tools.
- AI Conversational Assistant — ragImg — RAG · Vector Search — 2.8M paper embeddings in Milvus; ingestion cut from 12h to under 4h per batch.
