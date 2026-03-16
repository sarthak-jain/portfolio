const post = {
  slug: "building-bookfinder",
  title: "Building BookFinder: A Graph-Powered Book Recommendation Engine",
  date: "2025-12-01",
  category: "system-design",
  tags: ["Neo4j", "Graph Database", "Spring Boot", "React"],
  excerpt:
    "How I modeled 60K books as a graph in Neo4j with 129K nodes and 376K relationships to power 4 recommendation strategies and mood-based discovery.",
  content: `
BookFinder is a full-stack book recommendation engine built on a Neo4j graph database. It ingests Goodreads data across 4 genres (Young Adult, Comics & Graphic, Mystery/Thriller/Crime, History & Biography) and exposes recommendation algorithms, mood-based discovery, full-text search, and interactive graph visualization.

## The Numbers

| Metric | Value |
|--------|-------|
| Books loaded | ~60,000 (15K per genre) |
| Total graph nodes | ~129,000 |
| Total relationships | ~376,000 |
| Raw dataset size | ~42 GB across 4 genres |
| API endpoints | 22 across 9 categories |
| Recommendation strategies | 4 |
| Curated moods | 10 + custom mood builder |

## Why a Graph Database?

Book recommendations are inherently a graph problem. "Users who liked X also liked Y" is a graph traversal. SIMILAR_TO, SHELVED_AS, and INTERACTED relationships are natural graph edges. Multi-hop traversals (2-hop similarity, collaborative filtering) are O(1) per hop in Neo4j vs expensive JOINs in SQL.

I also used Neo4j's built-in Lucene full-text indexes for search, which eliminated the need for a separate Elasticsearch cluster. Search results can be combined with graph traversals in a single Cypher query.

## Architecture

\`\`\`
Browser (React SPA on GitHub Pages)
        │  HTTPS / REST
        v
Spring Boot API (Railway)
  - BookController, SearchController, RecommendationController
  - GenreController, MoodController, AuthorController, GraphController
        │  Cypher (Bolt Protocol)
        v
Neo4j AuraDB (Cloud)
  Nodes: Book · Author · User · Shelf · Series · Genre
  Rels: WROTE · SIMILAR_TO · SHELVED_AS · INTERACTED · REVIEWED
\`\`\`

## Four Recommendation Strategies

Instead of one algorithm, I built four and let users choose:

1. **Graph Traversal** — follows SIMILAR_TO edges up to 2 hops. Fast and interpretable.
2. **Shelf Similarity** — compares Goodreads shelf overlap between books. If two books share 3+ shelves, they're likely similar in vibe.
3. **Collaborative Filtering** — finds users who rated the source book highly, then surfaces other books those users also rated highly.
4. **Weighted Hybrid** — combines all three with tuned weights (0.4 graph + 0.3 shelf + 0.3 collaborative), normalizes scores, deduplicates, and returns the top results.

The hybrid request flow:

\`\`\`
GET /api/recommendations/similar/{bookId}?strategy=hybrid
  → RecommendationService.hybridRecommendation()
    → Execute 3 Cypher queries in sequence
    → Normalize each strategy's scores
    → Merge: 0.4*graph + 0.3*shelf + 0.3*collab
    → Deduplicate, sort by finalScore DESC, LIMIT 10
  → Return List<RecommendationDTO> with score + strategy label
\`\`\`

## Mood-Based Discovery

10 curated moods (cozy, dark, adventurous, etc.) mapped to combinations of Goodreads shelf names. Goodreads shelves already capture mood and tone ("dark", "feel-good", "suspense") without needing NLP. Books matching more mood-relevant shelves rank higher via multi-shelf overlap scoring.

The custom mood builder lets users combine shelves freely for personalized discovery.

## Design Decisions

**Why 15K books per genre?** High-engagement books have more interactions, reviews, and SIMILAR_TO edges — resulting in a denser, more useful graph. 60K books fits within AuraDB free tier limits (~200K nodes, ~400K relationships).

**Why vis-network for graph visualization?** Excellent physics-based layout out of the box, simpler API than D3.js, and good performance for graphs up to ~500 nodes. Built-in zoom, pan, hover tooltips, and click events.

**Why Neo4j full-text search over Elasticsearch?** Eliminates an additional infrastructure dependency. Supports Lucene query syntax (wildcards, fuzzy matching) and results combine directly with graph traversals in a single Cypher query. For 60K books, this is more than sufficient.

[Check out BookFinder live →](https://sarthak-jain.github.io/BookFinderApplication/)
`,
};

export default post;
