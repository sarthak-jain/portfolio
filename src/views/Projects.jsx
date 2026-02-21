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
    title: "BookFinder — Book Recommendation Engine",
    description:
      "Full-stack book recommendation engine powered by a Neo4j graph database with 60K+ books across 4 genres from the Goodreads dataset. Features hybrid recommendations (graph traversal, shelf similarity, collaborative filtering), mood-based discovery with 10 curated moods and a custom mood builder, full-text search, and interactive graph visualization. Website link coming soon.",
    tags: ["Java", "Spring Boot", "Neo4j", "React", "Cypher", "REST API"],
    link: "https://github.com/sarthak-jain/BookFinderApplication",
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
