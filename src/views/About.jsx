import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Software Engineer with 9+ years of experience building large-scale
              distributed systems at Amazon, Morgan Stanley, and S&P Global.
              Skilled in full-stack development with a strong focus on backend
              engineering, API development, performance optimization, and team
              leadership. Passionate about innovation, GenAI-driven tooling and
              operational efficiency. Holds a Master of Science in Computer Science
              from New York University (Courant Institute) and a Bachelor of
              Engineering from Manipal Institute of Technology.
            </p>
          </motion.div>
          <motion.div
          >
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              Technologies and Tools
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              Proficient in Java, JavaScript, Python, AWS, and a range of
              databases and tools. Experienced with GenAI tooling including
              Claude CLI and Amazon Kiro.
            </p>
          </motion.div>
          <motion.div className="flex flex-wrap mt-8 flex flex-wrap justify-start gap-4">
            {techStack.map((el, index) => (
              <motion.div
                initial="hidden"
                whileInView={"visible"}
                variants={{
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      type: "spring",
                    },
                  },
                  hidden: { opacity: 1, y: 80 },
                }}
                className="py-2 px-4 bg-gray-50 mt-4 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
              >
                <img alt="" src={el.link} className="w-12" />
                <h4 className="text-md ml-4">{el.name}</h4>
              </motion.div>
            ))}
          </motion.div>
          <motion.div>
            <h4 className="mt-12 text-3xl font-semibold text-blue-500">
              What I'm Working On
            </h4>
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-gray-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              I'm transitioning into AI Engineering, combining 9+ years of
              backend and full-stack experience with practical AI/ML skills.
              Currently enrolled in the "Become an AI Engineer" cohort by
              ByteByteAI/ByteByteGo, where I'm building 5 hands-on projects
              spanning LLM prompt engineering, RAG-based chatbots, autonomous
              agents, and multi-modal AI — bridging the gap between traditional
              software engineering and modern AI systems.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
