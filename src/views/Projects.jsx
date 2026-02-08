import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const projects = [
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
  },
  {
    title: "Word2Vec Search Relevancy — Morgan Stanley",
    description:
      "Developed POC to improve search relevancy using Word2Vec ML algorithm. Demonstrated improved relevancy via an AngularJS dashboard — POC was productionized.",
    tags: ["Python", "Word2Vec", "AngularJS", "ML"],
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
          What I Built
        </h4>
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
