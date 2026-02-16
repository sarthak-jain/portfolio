import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";

const Blog = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="blog"
      className={darkMode ? "bg-white" : "bg-gray-900"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Sarthak's Blogs
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring" }}
          className="mt-12 flex flex-col items-center"
        >
          <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-1.5 rounded-full">
            Work in Progress
          </span>
          <p
            className={
              darkMode
                ? "mt-6 text-xl text-center text-gray-500 max-w-2xl"
                : "mt-6 text-xl text-center text-gray-300 max-w-2xl"
            }
          >
            Coming soon — stay tuned for articles on AI engineering, system
            design, and software development.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
