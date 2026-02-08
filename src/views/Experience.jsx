import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const timeline = [
  {
    type: "work",
    date: "June 2019 – Present",
    organization: "Amazon.com Services Inc",
    location: "New York, NY, USA",
    title: "Software Development Engineer II",
    bullets: [
      "Led design and development of 1-hr and 3-hr Sub-Same Day delivery messaging CX on Amazon's Checkout Page.",
      "Spearheaded a unified mobile bottom-sheet experience simplifying delivery scheduling across all fulfillment programs on Checkout.",
      "Launched delivery messaging on the Cart Page — drove +$170M GCCP, +$377M OPS, +15M paid units, and 10K fewer customer contacts.",
      "Led multiple high-impact Weblab A/B experiments: simplified delivery messaging (+$77M GCCP), Subscribe & Save onboarding (+$23M GCCP, +1.6M subscriptions), Multi Offer Display (+$22M GCCP).",
      "Designed and developed CX Replay Testing framework automating regression testing for all customer-facing changes.",
      "Drove Operational Excellence initiatives across SDX organization for 1.5 years.",
      "Mentored cross-functional peers (SDEs, TPMs, PMs) on design reviews, debugging techniques and service ownership.",
    ],
    tags: ["Java", "JavaScript", "AWS", "REST API", "DynamoDB", "S3", "Lambda", "CI/CD", "A/B Testing"],
  },
  {
    type: "work",
    date: "Aug 2016 – Apr 2019",
    organization: "Morgan Stanley",
    location: "New York, NY, USA",
    title: "Technology Associate",
    bullets: [
      "Developed backend REST API services for Next Best Action recommendation system providing investment options to Financial Advisors.",
      "Built Edge NGrams Typeahead and Search with phrase matching and 15ms response times.",
      "Reduced Solr indexing runtime by 50% for 140 million documents and optimized API query response times.",
      "Developed POC using Word2Vec ML algorithm to improve search relevancy — POC was productionized.",
      "Transformed Spark SQL/Scala code to optimized Hive Script reducing runtime by 50%.",
      "Managed Level 3 Support: led a team of 3, coordinated with multiple teams to resolve escalated issues.",
    ],
    tags: ["Java", "Scala", "Solr", "Hive", "MySQL", "AngularJS", "REST API", "Word2Vec"],
  },
  {
    type: "work",
    date: "Jun 2015 – Dec 2015",
    organization: "S&P Global Market Intelligence",
    location: "New York, NY, USA",
    title: "Credit Solutions Architecture Intern",
    bullets: [
      "Designed and developed a web application to visualize and analyze relational databases in detailed graph format using Agile methodology.",
      "Built query interface for properties and relationships between nodes and edges with time series visualization.",
    ],
    tags: ["Java", "Neo4j", "Cypher", "MySQL", "JavaScript", "AngularJS", "Vis.JS"],
  },
  {
    type: "education",
    date: "Sep 2014 – May 2016",
    organization: "New York University",
    location: "New York, USA",
    title: "Master of Science in Computer Science",
    subtitle: "Courant Institute of Mathematical Sciences",
    tags: ["Fundamental Algorithms", "Big Data Analytics", "Advanced Databases", "Production Quality Software", "NLP", "Big Data Science"],
  },

  {
    type: "education",
    date: "July 2009 – May 2013",
    organization: "Manipal University",
    location: "Manipal, India",
    title: "Bachelor of Engineering in Information Technology",
    subtitle: "Manipal Institute of Technology",
    tags: ["Data Structures", "Object Oriented Programming", "Data Mining", "Distributed Systems"],
  },
];

const Experience = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="experience"
      className={darkMode ? "pb-20 bg-white" : "pb-20 bg-gray-900"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Experience & Education
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-500">
          Things that shaped me
        </h4>

        <div className="mt-12 relative">
          {/* Vertical timeline line */}
          <div
            className="hidden md:block absolute left-[280px] top-0 bottom-0 w-0.5 bg-blue-500"
          />

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
                hidden: { opacity: 0, y: 40 },
              }}
              className="mb-16 flex flex-col md:flex-row"
            >
              {/* Left side - date & organization */}
              <div className="md:w-[280px] flex-shrink-0 md:pr-8 mb-4 md:mb-0 md:text-right relative">
                <p className={darkMode ? "text-sm font-medium text-gray-500" : "text-sm font-medium text-gray-400"}>
                  {item.date}
                </p>
                <h3 className={darkMode ? "text-lg font-bold text-black mt-1" : "text-lg font-bold text-white mt-1"}>
                  {item.organization}
                </h3>
                <p className={darkMode ? "text-sm text-gray-500 mt-1" : "text-sm text-gray-400 mt-1"}>
                  {item.location}
                </p>
                <span
                  className={
                    item.type === "work"
                      ? "inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-600"
                      : "inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded bg-green-100 text-green-600"
                  }
                >
                  {item.type === "work" ? "Work" : "Education"}
                </span>

                {/* Timeline dot */}
                <div
                  className={
                    item.type === "work"
                      ? "hidden md:block absolute right-[-8px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"
                      : "hidden md:block absolute right-[-8px] top-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
                  }
                />
              </div>

              {/* Right side - details */}
              <div className="md:pl-10 flex-1">
                <h3 className={darkMode ? "text-xl font-bold text-black" : "text-xl font-bold text-white"}>
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className={darkMode ? "text-sm text-gray-500 mt-1" : "text-sm text-gray-400 mt-1"}>
                    {item.subtitle}
                  </p>
                )}
                {item.bullets && (
                  <ul className="mt-4 space-y-2">
                    {item.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className={
                          darkMode
                            ? "text-gray-600 text-sm leading-relaxed"
                            : "text-gray-300 text-sm leading-relaxed"
                        }
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={
                        item.type === "work"
                          ? "text-xs font-medium px-3 py-1 rounded-full border border-blue-500 text-blue-500"
                          : "text-xs font-medium px-3 py-1 rounded-full border border-green-500 text-green-500"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
