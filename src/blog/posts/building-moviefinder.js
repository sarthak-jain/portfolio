const post = {
  slug: "building-moviefinder",
  title: "Building MovieFinder: Gen-AI Meets Graph-Based Movie Discovery",
  date: "2026-01-15",
  category: "system-design",
  tags: ["Claude API", "Neo4j", "Spring Boot", "SSE", "Redis"],
  excerpt:
    "Combining a Neo4j graph (10K+ movies, 29K mood edges) with Claude AI for natural language search, plus a live system design panel via SSE.",
  content: `
MovieFinder is a mood-based movie discovery engine. Users select a mood (cozy, dark, mind-bending, adrenaline, etc.) or type a natural language query, and the system returns movies ranked by mood relevance. Every search is accompanied by a live System Design Panel that visualizes the entire backend pipeline as it happens.

## Architecture

\`\`\`
React SPA (S3 + CloudFront)
  │ HTTPS (REST + SSE)
  v
Spring Boot 3.2 (AWS App Runner, Java 21)
  │                │               │
  v                v               v
Neo4j 5         Redis 7         Claude API
(AuraDB)       (Upstash)        (Haiku)
10K+ movies    Tiered TTLs     NL query parsing
29K mood edges  5min-7day
20K similarity
\`\`\`

## AI-Powered Natural Language Search

The standout feature is AI-powered search. Type *"scary movies for halloween"* and Claude parses it into structured filters:

\`\`\`
Input:  "scary movies for halloween"
Claude: { mood: "dark", genres: ["Horror"], searchTerms: [] }
\`\`\`

This feeds into 8 different Cypher query variants depending on which combination of mood, genre, and search terms the AI extracts. The AI handles ambiguity; the graph handles accuracy.

## The Live System Design Panel

As a request flows through the system, you can watch each step in real time via Server-Sent Events (SSE):

- Cache check (Redis HIT or MISS)
- Graph traversal (Cypher execution)
- AI query parsing (Claude API call + tokens used)
- Circuit breaker state (CLOSED / OPEN / HALF_OPEN)
- Rate limiter status
- Result ranking computation

SSE was the right choice because the panel is strictly server→client — the client only observes, it doesn't send data back. SSE auto-reconnects via the browser's EventSource API and works through standard HTTP proxies.

## Data Model

\`\`\`
(:Movie)-[:HAS_GENRE]->(:Genre)
(:Movie)-[:MATCHES_MOOD {score: 0.0..1.0}]->(:Mood)
(:Movie)-[:SIMILAR_TO {score: 0.0..1.0}]->(:Movie)
\`\`\`

Mood scores are computed algorithmically: genre-weighted vector summation with a popularity bonus. Each genre maps to a mood weight vector (e.g., "Action" → {adrenaline: 0.9, dark: 0.2}). Scores are summed across genres, normalized, and clamped to [0, 1] with a minimum threshold of 0.25. This produces 2-4 mood edges per movie.

## Resilience Patterns

- **Circuit breakers** — 5 consecutive failures → OPEN state → 30s timeout → HALF_OPEN → 1 success → CLOSED. TMDb failures return movies without posters (graceful degradation).
- **Rate limiters** — fixed-window, 40 requests per 10 seconds (matching TMDb's limit).
- **Redis caching** — tiered TTLs: 5 min for search results, 24h for movie details, 7 days for poster URLs, 1h for AI parse results.
- **Graceful degradation** — all cache operations wrapped in try/catch. Cache failures are non-fatal — the system falls through to the graph DB.

## Key Challenge: Cross-Region Latency

Initially, App Runner ran in us-east-2 while Neo4j AuraDB was in us-west-2. Database queries took ~300ms. After co-locating both in us-west-2, queries dropped to ~30ms — a 10x improvement. Lesson: always co-locate your compute and data.

## Bulk Ingestion Pipeline

Small seed data (30 movies) loads synchronously on startup for instant usability. Bulk ingestion runs asynchronously via admin API: TMDb Discover API → batch writes of 500 movies → algorithmic mood scoring → SIMILAR_TO edges computed in batches of 200 (AuraDB has a 278MB per-transaction memory limit).

[Try MovieFinder →](https://findmynextmovie.com)
`,
};

export default post;