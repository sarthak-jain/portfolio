const post = {
  slug: "building-soccer-dashboard",
  title: "Building a Real-Time Soccer Dashboard: Dual Streaming, Observability, and AWS Production Deployment",
  date: "2026-03-01",
  category: "system-design",
  tags: ["WebSocket", "SSE", "Datadog", "AWS ECS", "Spring Boot", "Redis"],
  excerpt:
    "A deep dive into the architecture of a live soccer dashboard — dual streaming protocols, adaptive polling with data diffs, full-stack Datadog observability, and production deployment on AWS ECS Fargate.",
  content: `
The Real-Time Soccer Dashboard streams live scores from 12 major world leagues via WebSocket and visualizes the entire backend pipeline in a live System Design Panel via SSE. It's deployed to production on AWS with full-stack Datadog observability.

## Architecture

\`\`\`
Users (Browser)
  │ HTTPS
  v
AWS CloudFront (CDN)
  /* → S3 (React + Vite frontend)
  /api/* → ALB (backend)
  /ws/* → ALB (WebSocket upgrade)
  │
  v
AWS ECS Fargate (Spring Boot, Java 21, 512 CPU / 1GB)
  + Datadog Agent sidecar
  │          │           │
  v          v           v
ElastiCache  RDS MySQL   External APIs
Redis 7      (auth,      Football-Data.org (10 req/min)
(cache)      favorites)  GNews (100/day)
                         Claude Haiku (insights, narrator)
\`\`\`

## Why Two Streaming Protocols?

| | SSE (System Design Panel) | WebSocket (Live Scores) |
|---|---|---|
| **Direction** | Server → Client only | Bidirectional |
| **Use case** | Append-only event stream | Subscribe/unsubscribe to leagues |
| **Reconnect** | Built-in (EventSource auto-reconnects) | Manual (exponential backoff) |
| **Client messages** | Not needed | \`{"action":"subscribe","leagues":["PL"]}\` |

WebSocket for live scores because clients send subscription messages (subscribe to Premier League, unsubscribe from La Liga). SSE for the panel because it's strictly server→client and auto-reconnects through proxies. ALB idle timeout is set to 3600s to support long-lived connections.

## Three Data Streams

**Stream 1: Live Score Push (WebSocket, continuous)**

\`\`\`
Football-Data.org → HTTP poll (30s) → PollingScheduler
  → DataDiffEngine (compare cached vs fresh)
  → Extract only changes (scores, events, status)
  → WebSocketBroadcaster (fan-out to subscribed clients only)
\`\`\`

Clients watching only La Liga don't receive Premier League updates. If a client's WebSocket buffer fills (slow client), messages are dropped — live scores are ephemeral and the next cycle sends the latest state.

**Stream 2: System Design Panel (SSE, continuous)**

Every backend operation — API calls, cache reads, auth checks, LLM inference — emits a WorkflowStep event. The frontend groups them by traceId and renders collapsible traces. This is a meta-stream: it traces operations from both Stream 1 (polling cycles) and Stream 3 (AI analysis).

**Stream 3: AI Analysis Pipeline (request-triggered, cached)**

Claude Haiku generates league analysis, news digests, and panel narration. Computed once per league, cached for 1 hour. This converts an expensive LLM call into an amortized cost shared across all users.

## Adaptive Polling

| Condition | Interval | Reason |
|-----------|----------|--------|
| Live matches + clients connected | 30s | Active viewing |
| No live matches + clients connected | 5min | Check for newly started matches |
| No clients connected | Skip entirely | Save API quota |

## Caching Strategy (Cache-Aside)

| Key Pattern | TTL | Reason |
|---|---|---|
| \`standings:{code}\` | 5 min | Standings change infrequently during matches |
| \`fixtures:{code}\` | 1 hr | Fixture schedules rarely change |
| \`live:scores:all\` | 30s | Matches polling interval |
| \`insight:{code}\` | 1 hr | AI analysis doesn't need real-time refresh |
| \`news:soccer\` | 15 min | News articles update moderately |

Why cache-aside over write-through? Write-through couples every API response to a cache write, adding latency. Cache-aside is simpler and fits the pattern: reads are frequent, writes happen on cache miss or polling cycles. Cache failures are non-fatal — the system falls through to the external API.

## Full-Stack Datadog Observability

This was my first end-to-end observability setup:

- **APM:** dd-java-agent auto-instrumentation for distributed tracing across all Spring Boot services
- **Custom Metrics:** Micrometer + StatsD → Datadog Agent. Gauges for circuit breaker state, cache hit/miss ratios, WebSocket session count, LLM token consumption
- **Structured Logging:** logstash-logback-encoder producing JSON logs with \`dd.trace_id\` and \`dd.span_id\` for log-to-trace correlation
- **Real User Monitoring (RUM):** Browser sessions linked to backend traces — click a slow page load in RUM and trace it to a specific Redis cache miss

The Datadog Agent runs as a sidecar container in the same ECS task definition.

## Resilience Patterns

- **Per-API circuit breakers** — each external API (Football-Data, GNews, Claude) has its own circuit breaker. One API failing doesn't cascade.
- **Sliding window rate limiters** — 10 requests/min for Football-Data (matching their free tier limit).
- **Graceful degradation** — circuit breaker OPEN returns stale cached data. AI features fail silently; core scores always work.

## Key Design Decisions

**Why ECS Fargate over App Runner?** More control over networking — VPC, security groups, and fine-grained rules between ALB, backend, RDS, and Redis. App Runner is simpler but doesn't offer the same network isolation.

**Why MySQL over a NoSQL option?** User and favorites data is relational (foreign keys, unique constraints). Redis handles the ephemeral cache layer.

**Why not Kafka?** Overkill for a single-instance system. The WebSocket broadcaster handles fan-out directly. Kafka is documented as the production upgrade path for horizontal scaling.

[Check out the live dashboard →](https://realtimesoccer.com)
`,
};

export default post;
