---
title: "Why I Moved 2.8M Embeddings off pgvector onto Milvus"
date: "2026-06-02"
excerpt: "A retrieval bottleneck, two real benchmarks, and the recall/latency tradeoff that finally settled the decision."
readTime: "5 min read"
tags: ["search", "retrieval", "vector-db", "rag"]
---

The RAG assistant started on pgvector because it was already there — Postgres
was the system of record, and one extension is cheaper than a new service. That
worked great until the corpus crossed roughly a million chunks. Then p95
retrieval latency drifted from ~80ms into the 600–900ms range, and the
"chat with your docs" UX stopped feeling like chat.

This is the short version of how I decided to move, what I measured, and what
I'd do differently.

## The setup

- **Corpus:** 2.8M chunks, ~512 tokens each, `bge-large-en-v1.5` (1024-dim)
- **Query load:** ~12 QPS steady, bursts to ~40 QPS
- **Hardware:** single 8 vCPU / 32 GB box for both systems, same dataset, same queries
- **Baseline:** pgvector 0.7 with HNSW (`m=16`, `ef_construction=64`), `ef_search=40`
- **Candidate:** Milvus 2.4, HNSW (`M=16`, `efConstruction=200`), `ef=64`

I pulled a 5k-query eval set from real user logs and graded with a labeled
top-20 from an exhaustive (flat) search as ground truth.

## What the numbers actually said

| Metric              | pgvector (HNSW) | Milvus (HNSW) |
| ------------------- | --------------- | ------------- |
| Recall@10           | 0.91            | 0.96          |
| p50 latency         | 180 ms          | 28 ms         |
| p95 latency         | 740 ms          | 61 ms         |
| Index build time    | 47 min          | 9 min         |
| RAM at steady state | 11 GB           | 6.4 GB        |

The latency gap was bigger than I expected. The recall gap was smaller than the
internet had led me to believe. The real win was tail latency — pgvector's p95
was the thing users actually felt.

## Why pgvector struggled here

Two things, mostly:

1. **HNSW inside Postgres still pays the MVCC/visibility tax** on every
   query. At 2.8M rows that adds up.
2. **`ef_search` is global per session**, so tuning for recall hurt every
   query, not just the hard ones. Milvus lets me set `ef` per request and
   raise it only for the long-tail queries that need it.

## What I'd tell past-me

- **Don't move for recall, move for p95.** If pgvector's tail latency fits
  your UX budget, the operational simplicity of one database is worth a lot.
  My cutover point was "p95 > 500ms on the happy path."
- **Benchmark with your real query distribution.** Synthetic ANN benchmarks
  (SIFT-1M, GIST-1M) told me almost nothing useful. The 5k replayed queries
  told me everything.
- **Ground truth matters more than the index.** Half the early "bad
  retrieval" reports were actually chunking bugs — 1800-token chunks getting
  silently truncated by the embedder. Fix the pipeline before you blame the index.
- **Hybrid beats pure vector, every time.** Adding BM25 + reciprocal rank
  fusion on top of Milvus moved recall@10 from 0.96 to 0.985 with no
  measurable latency cost. This is the single highest-ROI change in the project.

## What's next

I'm rewriting the ingestion + indexing path in Rust as a learning project —
mostly to get my hands on the HNSW internals (M, efConstruction, neighbor
selection heuristics) rather than treat the index as a black box. If that ends
up faster than the Milvus pipeline on the same hardware, it'll show up here
with another set of numbers.
