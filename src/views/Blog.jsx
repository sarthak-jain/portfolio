import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { getLatestPosts, categories } from "../blog";

const categoryColors = {
  "ml-ai-transition": { bg: "bg-purple-100", text: "text-purple-800" },
  "system-design": { bg: "bg-green-100", text: "text-green-800" },
};

const Blog = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const latestPosts = getLatestPosts(3);

  return (
    <div id="blog" className={darkMode ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          Latest Writing
        </h2>
        <p
          className={
            darkMode
              ? "mt-4 text-center text-gray-500 max-w-2xl mx-auto"
              : "mt-4 text-center text-gray-400 max-w-2xl mx-auto"
          }
        >
          Thoughts on ML/AI engineering, system design, and the transition between worlds.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latestPosts.map((post, i) => {
            const colors = categoryColors[post.category] || {
              bg: "bg-gray-100",
              text: "text-gray-800",
            };
            return (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, type: "spring" }}
                className={`block rounded-lg border p-6 transition-shadow hover:shadow-lg ${
                  darkMode
                    ? "border-gray-200 hover:border-gray-300"
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors.bg} ${colors.text}`}
                  >
                    {categories.find((c) => c.id === post.category)?.label}
                  </span>
                </div>
                <h3
                  className={
                    darkMode
                      ? "text-lg font-bold mb-2"
                      : "text-lg font-bold mb-2 text-white"
                  }
                >
                  {post.title}
                </h3>
                <p
                  className={
                    darkMode
                      ? "text-sm text-gray-500 mb-3"
                      : "text-sm text-gray-400 mb-3"
                  }
                >
                  {post.excerpt}
                </p>
                <span className="text-blue-500 text-sm font-medium">
                  Read more →
                </span>
              </motion.a>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600 transition-colors"
          >
            View All Posts
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;