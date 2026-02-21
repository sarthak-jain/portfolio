import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const highlightMetrics = (text) => {
  if (typeof text !== "string") return text;
  const pattern = /(\+?\$[\d,.]+[MBKT]*|\d+(?:\.\d+)?%|\+?\d+(?:\.\d+)?[MBKT]\+?|\d+ms\b)/;
  const parts = text.split(pattern);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
};

const timeline = [
  {
    type: "work",
    date: "June 2019 – Present",
    organization: "Amazon.com Services Inc",
    location: "New York, NY, USA",
    title: "Software Development Engineer II",
    description:
      "Designed and developed large-scale, low-latency backend services, REST APIs, and frontend components that power delivery messaging for 200M+ global users on Amazon\u2019s retail websites, leveraging internal GenAI tools (Amazon Q/Kiro) to accelerate implementation. Led end-to-end full-stack feature delivery and A/B experiments while improving operational excellence through monitoring, production troubleshooting, high-availability optimizations, CI/CD automation, and clear documentation of key architectural decisions.",
    sections: [
      {
        header: "Checkout Delivery Message Platform Team",
        bullets: [
          "Led design and development of 1\u2011hr and 3\u2011hr Sub\u2011Same Day delivery messaging CX on Amazon\u2019s Checkout Page.",
          "Spearheaded design and development of a unified mobile bottom-sheet experience that simplifies delivery scheduling across all fulfillment programs on the Checkout Page.",
          "Modernized Checkout delivery option CX by converting legacy radio buttons to container\u2011style layouts and simplifying Sub\u2011Same Day scheduling through a radio button experience, enhancing accessibility (a11y\u2011compliance), usability and customer interaction rates.",
        ],
      },
      {
        header: "Pre-Checkout Delivery Message Platform Team",
        bullets: [
          "Launched delivery messaging on the Cart Page by designing and developing new APIs, achieving a 1.11% reduction in checkout time and driving major business impact: +$170M Gross Customer Contribution Profit (GCCP), +$377M Operating Profit Savings (OPS), +15M paid units, and 10K fewer customer contacts.",
          {
            text: "Led design, implementation and launch of multiple high-impact Weblab based experiments to enhance delivery messaging customer experience across Amazon\u2019s Retail Websites. [Java, JavaScript, Datapath]",
            subBullets: [
              "Simplified delivery condition messaging (+$77M GCCP, +$372M OPS, 141K fewer customer contacts resulting in 7K fewer concessions)",
              "Onboarded Subscribe and Save delivery messages to Unified Delivery Messaging framework (+$23M Annualized GCCP and +1.6M WW Annualized SnS subscriptions)",
              "Onboarded Multi Offer Display collapsed delivery message to Unified Delivery Messaging framework (+$22M Annualized GCCP)",
              "Integrated Prime badge and delivery messaging into Prime Exclusive Deals on Detail Page and Search Page",
              "Added Prime Upsell CX for Non-Prime and Unrecognized customers on Detail Page and Search Page",
            ],
          },
          "Designed and developed CX Replay Testing framework automating regression testing for all customer-facing changes. [Java, JavaScript, AWS \u2013 Lambda, EC2, ECS, Fargate, S3, DynamoDB]",
          "Drove Operational Excellence initiatives across SDX organization for 1.5 years, establishing Away Team metrics monitoring and reporting processes as well as prediction band metrics and automated alarms.",
          "Autonomously designed, built and delivered workflows for updating Prime badge and delivery messaging information when quantity is changed on Detail Page of Amazon\u2019s Retail Websites for any product. [Java, JavaScript, Perl]",
          "Mentored cross-functional peers (SDEs, TPMs, PMs) on design reviews, domain knowledge, debugging techniques and service ownership best practices.",
        ],
      },
    ],
    tags: ["Java", "JavaScript", "Object Oriented Design", "AWS"],
  },
  {
    type: "work",
    date: "Aug 2016 – Apr 2019",
    organization: "Morgan Stanley",
    location: "New York, NY, USA",
    title: "Technology Associate",
    bullets: [
      {
        text: "Developed backend REST API services for recommendation system (Next Best Action) providing investment options to Financial Advisors.",
        subBullets: [
          "Developed Edge NGrams Typeahead and Search functionality with phrase matching and response times of 15ms",
          "Enabled near real time recommendation of options by transforming batch processing to Spark processing framework",
          "Reduced Solr indexing process runtime by 50% for 140 million documents and optimized API query response times",
          "Handled additional responsibility of Level 3 Support lead: managed a team of 3, coordinated with multiple teams and resolved any issues escalated by L2 across all components",
        ],
        references: [
          { label: "Forbes", url: "https://www.forbes.com/sites/tomdavenport/2020/05/16/the-future-of-work-now-morgan-stanleys-financial-advisors-and-the-next-best-offer-system/", icon: "https://icons.duckduckgo.com/ip3/www.forbes.com.ico" },
          { label: "CNBC", url: "https://www.cnbc.com/2018/11/20/morgan-stanley-launches-new-advisory-technology-platform.html", icon: "https://icons.duckduckgo.com/ip3/www.cnbc.com.ico" },
          { label: "Morgan Stanley", url: "https://www.morganstanley.com/press-releases/key-milestone-in-innovation-journey-with-openai", icon: "https://icons.duckduckgo.com/ip3/www.morganstanley.com.ico" },
          { label: "Emerj", url: "https://emerj.com/artificial-intelligence-at-morgan-stanley-three-use-cases/", icon: "https://icons.duckduckgo.com/ip3/emerj.com.ico" },
        ],
      },
      "Developed POC to improve search relevancy using Word2Vec ML algorithm. Demonstrated Word2Vec query pipeline improved relevancy using AngularJS UI dashboard, hence POC was productionized.",
      "Transformed Spark SQL/Scala code to optimized Hive Script reducing the run time by 50%.",
      "Completed the coding intensive Technology Analyst program which included Java, Scala, C++, and SQL, etc.",
      "Developed feed monitoring dashboard using Java, Spring Framework, REST API, HTML, Vis.JS and AngularJS.",
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
    title: "Master of Science in Computer and Information Sciences",
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
                {item.description && (
                  <p
                    className={
                      darkMode
                        ? "text-gray-600 text-sm leading-relaxed mt-3"
                        : "text-gray-300 text-sm leading-relaxed mt-3"
                    }
                  >
                    {highlightMetrics(item.description)}
                  </p>
                )}
                {item.sections &&
                  item.sections.map((section, si) => (
                    <div key={si} className="mt-5">
                      <h4
                        className={
                          darkMode
                            ? "text-md font-semibold text-gray-800"
                            : "text-md font-semibold text-gray-200"
                        }
                      >
                        {section.header}
                      </h4>
                      <ul className="mt-2 space-y-2 list-disc list-outside pl-5">
                        {section.bullets.map((bullet, bi) => {
                          const text = typeof bullet === "string" ? bullet : bullet.text;
                          const subBullets = typeof bullet === "object" ? bullet.subBullets : null;
                          return (
                            <li
                              key={bi}
                              className={
                                darkMode
                                  ? "text-gray-600 text-sm leading-relaxed"
                                  : "text-gray-300 text-sm leading-relaxed"
                              }
                            >
                              {highlightMetrics(text)}
                              {subBullets && (
                                <ul className="mt-1 space-y-1 list-[circle] list-outside pl-5">
                                  {subBullets.map((sub, sbi) => (
                                    <li
                                      key={sbi}
                                      className={
                                        darkMode
                                          ? "text-gray-600 text-sm leading-relaxed"
                                          : "text-gray-300 text-sm leading-relaxed"
                                      }
                                    >
                                      {highlightMetrics(sub)}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                {item.bullets && (
                  <ul className="mt-4 space-y-2 list-disc list-outside pl-5">
                    {item.bullets.map((bullet, i) => {
                      const text = typeof bullet === "string" ? bullet : bullet.text;
                      const subBullets = typeof bullet === "object" ? bullet.subBullets : null;
                      const references = typeof bullet === "object" ? bullet.references : null;
                      return (
                        <li
                          key={i}
                          className={
                            darkMode
                              ? "text-gray-600 text-sm leading-relaxed"
                              : "text-gray-300 text-sm leading-relaxed"
                          }
                        >
                          {highlightMetrics(text)}
                          {subBullets && (
                            <ul className="mt-1 space-y-1 list-[circle] list-outside pl-5">
                              {subBullets.map((sub, sbi) => (
                                <li
                                  key={sbi}
                                  className={
                                    darkMode
                                      ? "text-gray-600 text-sm leading-relaxed"
                                      : "text-gray-300 text-sm leading-relaxed"
                                  }
                                >
                                  {highlightMetrics(sub)}
                                </li>
                              ))}
                            </ul>
                          )}
                          {references && (
                            <div className="mt-2 flex flex-wrap gap-2 items-center">
                              <span className="text-xs font-semibold text-blue-500">Featured in:</span>
                              {references.map((ref, ri) => (
                                <a
                                  key={ri}
                                  href={ref.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border border-blue-400 text-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                                >
                                  <img
                                    src={ref.icon}
                                    alt=""
                                    className="w-3.5 h-3.5 rounded-sm"
                                  />
                                  {ref.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </li>
                      );
                    })}
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
