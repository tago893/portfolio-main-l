## Update Portfolio with Resume Content

Your new resume has fresher and more accurate info than the old CV site I built from. I'll sync the portfolio to match and wire up a Resume download button.

### Content updates (replace old CV content)

**Contact (footer + hero)**
- Email: chvarun245@gmail.com
- Location: Seattle, WA
- Phone: kept private (won't render)

**Hero**
- Reposition as "Software engineer with 1+ year of experience" — backend services, data platforms, AI-enabled apps
- Update location chip from Portland → Seattle

**Experience section (NEW — replaces hobby-focused "Trajectory" sidebar)**
- Software Engineer · Live Music Project · Apr 2025–Present (Redis layer, ETL+SendGrid, Django RBAC, KPI metrics)
- Graduate Student Researcher · Portland State · Apr–Aug 2025 (TriMet ETL 350K daily records, NL-to-SQL)
- Software Engineer Intern · Aham Learning · Jan–Jun 2023 (Laravel/Neo4j dashboards, graph course models)

**Education**
- Keep PSU MS CS, add coursework line (Data Engineering, LLMs, DBMS, Cloud Engineering, etc.)
- Keep VIT B.Tech entry

**Projects (replace APIVerse / TriMet / Code Documenter with current ones)**
- *Featured:* Automated Vulnerability & Malware Analyzer (Python, LangChain, AST, Gemini) — SAST + LLM malware scoring
- MCP DevOps PR Agent (FastAPI, MCP, GitHub Actions, Gemini, Bandit)
- AI Conversational Assistant (Python, Azure AI Search, Milvus) — RAG on 2.8M paper embeddings
- Generate 3 new images to replace apiverse/trimet/codedoc assets to match the new project themes; delete the old ones

**Skills (replace old list with categorized chips)**
- Languages: Java, Python, SQL, JavaScript, TypeScript, Bash
- Backend: Spring Boot, Django, FastAPI, Flask, REST, Microservices
- Data & Messaging: Kafka, AWS SQS, GCP Pub/Sub, RabbitMQ
- Databases: PostgreSQL, MySQL, Redis, Elasticsearch, Milvus, MongoDB
- Cloud & DevOps: AWS (EC2/S3/RDS/SQS), GCP Cloud Run, Docker, Kubernetes, GitHub Actions, Jenkins
- Render as grouped sub-sections so the breadth shows

### Resume download
- Upload the PDF via `lovable-assets create --file /mnt/user-uploads/sde_resume_ft.pdf` → save pointer to `src/assets/resume.pdf.asset.json`
- Replace the nav "Connect" button (and add a hero CTA) with **"Resume"** linking to the CDN URL with `download` attribute
- Keep LinkedIn/GitHub/Email in footer

### Blog
- Unchanged (markdown system still works; sample posts stay)
- Update one starter post's bio reference (Portland → Seattle) for consistency

### Files changed
- `src/routes/index.tsx` — rewrite hero, projects, experience timeline, skills, replace asset imports
- `src/components/SiteNav.tsx` — Resume button → CDN url
- `src/components/SiteFooter.tsx` — update email
- `src/assets/resume.pdf.asset.json` — new CDN pointer
- `src/assets/{vuln-analyzer,mcp-agent,rag-assistant}.jpg` — 3 new project images
- Delete old `src/assets/{apiverse,trimet,codedoc}.jpg`
- `src/content/posts/welcome.md` — tiny location tweak

### Out of scope
- I won't put your phone number on the public site (uncommon for portfolios). Tell me if you want it visible.
- LinkedIn URL — your resume doesn't include it; I'll leave the existing placeholder. Send me the URL and I'll wire it.
