import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const workProjects = [
  {
    title: "Cart Page Delivery Messaging — Amazon",
    description:
      "Launched delivery messaging on the Cart Page by designing and developing new APIs, achieving a 1.11% reduction in checkout time. Drove +$170M GCCP, +$377M OPS, +15M paid units, and 10K fewer customer contacts.",
    tags: ["Java", "JavaScript", "AWS", "REST API"],
  },
  {
    title: "Sub-Same Day Delivery CX — Amazon Checkout",
    description:
      "Led design and development of 1-hr and 3-hr Sub-Same Day delivery messaging on Amazon's Checkout Page. Built a unified mobile bottom-sheet experience simplifying delivery scheduling across all fulfillment programs.",
    tags: ["Java", "JavaScript", "Object Oriented Design", "AWS"],
  },
  {
    title: "Delivery Message Experiments — Amazon",
    description:
      "Led design and launch of multiple high-impact A/B experiments: simplified delivery condition messaging (+$77M GCCP), onboarded Subscribe & Save (+$23M GCCP, +1.6M subscriptions), and Multi Offer Display (+$22M GCCP).",
    tags: ["Java", "JavaScript", "Weblab", "Datapath"],
  },
  {
    title: "CX Replay Testing Framework — Amazon",
    description:
      "Designed and developed an automated regression testing framework for all customer-facing changes, ensuring quality across delivery messaging experiences.",
    tags: ["Java", "JavaScript", "AWS Lambda", "DynamoDB", "S3"],
  },
  {
    title: "Next Best Action Recommendation System — Morgan Stanley",
    description:
      "Developed backend REST API services for a recommendation system providing investment options to Financial Advisors. Built Edge NGrams Typeahead with 15ms response times and reduced Solr indexing runtime by 50% for 140M documents.",
    tags: ["Java", "Scala", "Solr", "Hive", "MySQL", "AngularJS"],
    references: [
      { label: "Forbes", url: "https://www.forbes.com/sites/tomdavenport/2020/05/16/the-future-of-work-now-morgan-stanleys-financial-advisors-and-the-next-best-offer-system/", icon: "https://icons.duckduckgo.com/ip3/www.forbes.com.ico" },
      { label: "CNBC", url: "https://www.cnbc.com/2018/11/20/morgan-stanley-launches-new-advisory-technology-platform.html", icon: "https://icons.duckduckgo.com/ip3/www.cnbc.com.ico" },
      { label: "Morgan Stanley", url: "https://www.morganstanley.com/press-releases/key-milestone-in-innovation-journey-with-openai", icon: "https://icons.duckduckgo.com/ip3/www.morganstanley.com.ico" },
      { label: "Emerj", url: "https://emerj.com/artificial-intelligence-at-morgan-stanley-three-use-cases/", icon: "https://icons.duckduckgo.com/ip3/emerj.com.ico" },
    ],
  },
  {
    title: "Word2Vec Search Relevancy — Morgan Stanley",
    description:
      "Developed POC to improve search relevancy using Word2Vec ML algorithm. Demonstrated improved relevancy via an AngularJS dashboard — POC was productionized.",
    tags: ["Python", "Word2Vec", "AngularJS", "ML"],
  },
];

const fullStackProjects = [
  {
    title: "Real-Time Soccer Dashboard — Live Streaming & System Design",
    description:
      <>A real-time soccer dashboard that <strong>streams live scores from 12 major world leagues via WebSocket</strong> and visualizes the entire backend pipeline in a live <strong>System Design Panel via Server-Sent Events (SSE)</strong>. Features a <strong>dual streaming architecture</strong> — SSE for the observability panel (server→client event stream) and WebSocket for live scores (bidirectional with league subscriptions). Includes an <strong>adaptive polling engine</strong> with data diff pipeline that compares cached vs fresh data and pushes only deltas to subscribed clients. Integrates <strong>3 AI-powered features (Claude Haiku)</strong>: league analysis, news digest, and a panel narrator that explains backend operations in plain English. Built with resilience patterns including per-API circuit breakers, sliding window rate limiters, and cache-aside with TTL-based expiry. <strong>Full-stack Datadog observability</strong>: APM auto-instrumentation (dd-java-agent), custom business metrics via Micrometer + StatsD (circuit breaker state, cache hit/miss ratios, LLM token consumption), structured JSON logging with trace ID correlation, and Real User Monitoring (RUM) linking browser sessions to backend traces. <strong>Deployed on AWS: ECS Fargate (with Datadog Agent sidecar), RDS MySQL, ElastiCache Redis, ALB (3600s idle timeout for SSE/WebSocket), S3 + CloudFront with custom domain.</strong></>,
    tags: ["Java", "Spring Boot", "React", "WebSocket", "SSE", "Redis", "MySQL", "Claude API", "Datadog", "AWS", "Docker"],
    link: "https://github.com/sarthak-jain/RealTimeSoccerDashboard",
    demoLink: "https://realtimesoccer.com",
  },
  {
    title: "MovieFinder — Gen-AI Powered Movie Discovery Engine",
    description:
      <>Full-stack movie discovery engine <strong>powered by Generative AI (Claude API)</strong> and a Neo4j graph database with 10K+ movies, 29K mood edges, and 20K similarity edges. Features <strong>AI-powered natural language search</strong> (e.g., "scary movies for halloween" auto-parsed into mood, genre, and title filters), mood-based discovery across 8 moods, Lucene full-text typeahead, and graph-based similar movie recommendations. Includes a <strong>live System Design Panel that visualizes the entire backend pipeline in real time — cache checks, graph traversals, AI query parsing, circuit breaker states, rate limiting, and ranking — via Server-Sent Events (SSE)</strong>. Production-hardened with circuit breakers, rate limiters, Redis caching with tiered TTLs, and graceful degradation. Deployed on AWS: App Runner (backend), S3 + CloudFront (frontend), Neo4j AuraDB, and Upstash Redis.</>,
    tags: ["Java", "Spring Boot", "Neo4j", "React", "Claude API", "Redis", "AWS", "SSE", "Docker"],
    link: "https://github.com/sarthak-jain/MovieFinderMoodBasedDiscoveryEngine",
    demoLink: "https://findmynextmovie.com",
  },
  {
    title: "BookFinder — Book Recommendation Engine",
    description:
      "Full-stack book recommendation engine built on a Neo4j graph database with 60K books, 129K nodes, and 376K relationships across 4 genres from the Goodreads dataset. Features 4 recommendation strategies (graph traversal, shelf similarity, collaborative filtering, and a weighted hybrid), mood-based discovery with 10 curated moods and a custom mood builder, Lucene-powered full-text search with filters, and interactive graph visualization using vis-network. Deployed with React on GitHub Pages, Spring Boot on Railway, and Neo4j AuraDB.",
    tags: ["Java", "Spring Boot", "Neo4j", "React", "Cypher", "REST API"],
    link: "https://github.com/sarthak-jain/BookFinderApplication",
    demoLink: "https://sarthak-jain.github.io/BookFinderApplication/",
  },
];

const personalProjects = [
  {
    title: "LLM Playground",
    description:
      "Interactive app to experiment with LLM behavior, prompt engineering, and model parameter tuning.",
    tags: ["Python", "LLM", "Prompt Engineering"],
    status: "In Progress",
  },
  {
    title: "Customer Support Chatbot",
    description:
      "AI-powered customer support chatbot using Retrieval-Augmented Generation (RAG) for accurate, context-aware responses.",
    tags: ["Python", "RAG", "LLM", "Vector DB"],
    status: "Upcoming",
  },
  {
    title: "Ask-the-Web Agent",
    description:
      "Perplexity-style agent that searches the web and synthesizes answers using tool calling and LLM reasoning.",
    tags: ["Python", "LLM", "Tool Calling", "Web Search"],
    status: "Upcoming",
  },
  {
    title: "Deep Research Agent",
    description:
      "Research agent combining web search with multi-step reasoning to produce in-depth analysis on any topic.",
    tags: ["Python", "LLM", "Web Search", "Reasoning"],
    status: "Upcoming",
  },
  {
    title: "Multi-Modal Generation Agent",
    description:
      "Agent capable of generating images and videos using multi-modal AI models.",
    tags: ["Python", "LLM", "Image Generation", "Multi-Modal"],
    status: "Upcoming",
  },
];

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          Major/Highlighted Work Projects
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {workProjects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              references={project.references}
            />
          ))}
        </div>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          Personal Projects — Full Stack
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {fullStackProjects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
              demoLink={project.demoLink}
            />
          ))}
        </div>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          Personal Projects — AI/ML
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {personalProjects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              status={project.status}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
