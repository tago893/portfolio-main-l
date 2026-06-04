---
title: "Lessons from Building APIVerse on Cloud Run"
date: "2026-05-20"
excerpt: "What a graduate API exploration platform taught me about cold starts, key rotation, and shipping fast."
readTime: "6 min read"
tags: ["cloud", "api", "gcp"]
---

APIVerse started as a class project and ended up being the thing I learned the
most from. The pitch was simple: give Portland State students a safe sandbox to
learn how real-world APIs work — auth, rate limiting, versioning — without
needing a credit card or a production account.

## The shape of the system

The frontend is a thin Flask app. The interesting work happens behind it:

- **Cloud Run** for stateless API workers, each isolated per integration
- **Datastore** for API keys, usage logs, and student-owned credentials
- **Vertex AI** for the Gemini-backed endpoints students explore
- **Docker** images built per integration, redeployed independently

The decision to put every integration in its own Cloud Run service was the
single biggest win. Redeploys went from "redeploy the world" to "redeploy one
file." Iteration speed jumped ~25%.

## Three things I'd do differently

1. **Bake key rotation in on day one.** I bolted it on later. Migrating live
   keys is no fun.
2. **Trace before you log.** Cloud Trace would have saved hours of grepping
   structured logs.
3. **Treat the Gemini calls as a separate service boundary.** LLM endpoints
   have wildly different latency and failure modes than CRUD.

## What's next

I'm porting parts of the platform to a new stack for my own use. More on that
in a future post.
