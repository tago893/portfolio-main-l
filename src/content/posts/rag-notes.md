---
title: "Notes on Building RAG Apps — What I'm Learning"
date: "2026-06-04"
excerpt: "A new-grad's working notes on retrieval-augmented generation: the pieces, the gotchas, and the parts I'm still figuring out."
readTime: "6 min read"
tags: ["rag", "llm", "retrieval", "learning"]
---

I'm a new grad about a year into the industry, and most of what I'm working
on right now touches retrieval-augmented generation in some form. This post
is less "here is the right answer" and more "here is the mental model I've
built so far." I'm writing it down partly to teach myself, and partly so the
next person reading the same papers has a shorter on-ramp.

A lot of the framing here lines up with the Anyscale
[guide to building RAG-based LLM apps](https://www.anyscale.com/blog/a-comprehensive-guide-for-building-rag-based-llm-applications-part-1) —
that post is what made several things finally click for me.

## Why RAG at all

LLMs are great at language and bad at facts you didn't train them on. RAG is
the simple workaround: at query time, go fetch the relevant context from a
corpus you control, stuff it into the prompt, and let the model do what it's
good at. You get fresher answers, you get citations, and you don't have to
fine-tune anything to add a new document.

That's the one-line pitch. The interesting part is everything underneath it.

## The pieces, in order

1. **Load** the source documents (PDFs, HTML, Notion exports, code).
2. **Chunk** them into pieces small enough to embed and to fit into a prompt
   alongside the question.
3. **Embed** each chunk into a vector with a model like `bge-large-en` or
   `text-embedding-3-small`.
4. **Index** the vectors in something that can do approximate nearest
   neighbor search (pgvector, Milvus, FAISS, Qdrant).
5. **Retrieve** the top-k chunks for an incoming query.
6. **Generate** an answer by prompting an LLM with the question + the
   retrieved chunks.
7. **Evaluate** whether the answer is actually grounded in the retrieved
   context, and whether the retrieval surfaced the right context in the
   first place.

Every step has its own failure mode. Most of the time when a RAG app feels
bad, the problem is in steps 2, 5, or 7 — not the LLM.

## Where I keep getting bitten

- **Chunking is the silent killer.** Too small and you lose context; too big
  and the embedder truncates and you don't notice. I default to ~500 tokens
  with ~50 token overlap, but for code or tables that's wrong.
- **Top-k is a tuning knob, not a constant.** k=3 looks great in demos and
  misses real questions. k=10 with reranking is usually a better starting
  point than k=20 raw.
- **Hybrid search beats pure vector almost every time.** BM25 catches the
  exact-keyword queries vectors get fuzzy on. Reciprocal rank fusion is the
  easiest way to combine them and the lift is real.
- **Eval is the part nobody wants to do.** Without a small graded eval set
  (even 50 questions), every change feels like an improvement and none of
  them are measurable.

## What I'm reading next

I just started the [ContinualAI course on continual learning](https://course.continualai.org/background/details),
mostly because the "freeze a model and bolt RAG on top" pattern feels like
half the answer. The other half is models that can keep learning from new
data without forgetting what they already knew — which is a different
problem space, and one I want to understand before I have an opinion on it.

I'll write up notes from that course on LinkedIn as I go through it, and
the deeper pieces will land here. If you're working through the same
material, ping me — I'd rather learn it with someone else than alone.

