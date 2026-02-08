import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const education = [
  {
    date: "Sep 2014 – May 2016",
    school: "New York University",
    degree: "Master of Science in Computer Science",
    department: "Graduate School of Arts and Sciences - Courant Institute of Mathematical Sciences",
    location: "New York, USA",
    courses: [
      "Fundamental Algorithms",
      "Realtime and Big Data Analytics",
      "Advanced Databases",
      "Production Quality Software",
      "Natural Language Processing",
      "Big Data Science",
    ],
  },
  {
    date: "July 2009 – May 2013",
    school: "Manipal University",
    degree: "Bachelor of Engineering in Information Technology",
    department: "Manipal Institute of Technology",
    location: "Manipal, India",
    courses: [
      "Data Structures",
      "Object Oriented Programming",
      "Data Mining",
      "Distributed Systems",
    ],
  },
];

const Education = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="education"
      className={darkMode ? "pb-20 bg-gray-100" : "pb-20 bg-gray-800"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Education
        </h2>

        <div className="mt-16 relative">
          {/* Vertical timeline line */}
          <div
            className="hidden md:block absolute left-[280px] top-0 bottom-0 w-0.5 bg-blue-500"
          />

          {education.map((edu, index) => (
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
              {/* Left side */}
              <div className="md:w-[280px] flex-shrink-0 md:pr-8 mb-4 md:mb-0 md:text-right relative">
                <p className={darkMode ? "text-sm font-medium text-gray-500" : "text-sm font-medium text-gray-400"}>
                  {edu.date}
                </p>
                <h3 className={darkMode ? "text-lg font-bold text-black mt-1" : "text-lg font-bold text-white mt-1"}>
                  {edu.school}
                </h3>
                <p className={darkMode ? "text-sm text-gray-500 mt-1" : "text-sm text-gray-400 mt-1"}>
                  {edu.location}
                </p>

                {/* Timeline dot */}
                <div className="hidden md:block absolute right-[-8px] top-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />
              </div>

              {/* Right side */}
              <div className="md:pl-10 flex-1">
                <h3 className={darkMode ? "text-xl font-bold text-black" : "text-xl font-bold text-white"}>
                  {edu.degree}
                </h3>
                <p className={darkMode ? "text-sm text-gray-500 mt-1" : "text-sm text-gray-400 mt-1"}>
                  {edu.department}
                </p>
                <p className={darkMode ? "text-sm font-medium text-gray-600 mt-4" : "text-sm font-medium text-gray-300 mt-4"}>
                  Coursework:
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full border border-blue-500 text-blue-500"
                    >
                      {course}
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

export default Education;
