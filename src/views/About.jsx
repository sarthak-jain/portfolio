import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import sarthakPic from "../assets/sarthakPic.jpeg";
import sarthakPic2 from "../assets/sarthakPic2.jpg";

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
            <div className="flex flex-col items-center mt-4">
              <div className="flex justify-center gap-6 mb-8">
                <img
                  src={sarthakPic}
                  alt="Sarthak Jain"
                  className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
                />
                <img
                  src={sarthakPic2}
                  alt="Sarthak Jain"
                  className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
                />
              </div>
              <p
                className={
                  darkMode
                    ? "text-xl text-justify text-gray-500"
                    : "text-xl text-justify text-white"
                }
              >
                Software Engineer with <strong>9+ years of experience</strong> building large-scale
                distributed systems at <strong>Amazon</strong>, <strong>Morgan Stanley</strong>, and <strong>S&amp;P Global</strong>.
                Skilled in full-stack development with a strong focus on <strong>backend
                engineering</strong>, <strong>API development</strong>, <strong>performance optimization</strong>, and <strong>team
                leadership</strong>. Passionate about innovation, <strong>GenAI-driven tooling</strong> and
                operational efficiency. Holds a <strong>Master of Science in Computer Science</strong> from{" "}
                <strong>New York University</strong> (Courant Institute) and a <strong>Bachelor of
                Engineering</strong> from <strong>Manipal Institute of Technology</strong>.
              </p>
            </div>
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
              Proficient in <strong>Java, JavaScript, Python, AWS</strong>, and a range of
              databases and tools. Experienced with GenAI tooling including{" "}
              <strong>Claude CLI</strong> and <strong>Amazon Kiro</strong>.
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
              I'm transitioning into <strong>AI Engineering</strong>, combining <strong>9+ years</strong> of
              backend and full-stack experience with practical AI/ML skills.
              Currently enrolled in the <strong>"Become an AI Engineer"</strong> cohort by{" "}
              <strong>ByteByteAI/ByteByteGo</strong>, where I'm building <strong>5 hands-on projects</strong>{" "}
              spanning <strong>LLM prompt engineering</strong>, <strong>RAG-based chatbots</strong>, <strong>autonomous
              agents</strong>, and <strong>multi-modal AI</strong> — bridging the gap between traditional
              software engineering and modern AI systems.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
