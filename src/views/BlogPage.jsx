import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import posts, { categories } from "../blog";

const categoryColors = {
  "ml-ai-transition": { bg: "bg-purple-100", text: "text-purple-800" },
  "system-design": { bg: "bg-green-100", text: "text-green-800" },
};

const BlogPage = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? posts
      : posts.filter((p) => p.category === activeTab);

  return (
    <div className={darkMode ? "bg-white min-h-screen" : "bg-gray-900 min-h-screen"}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Back link */}
        <button
          onClick={() => navigate("/")}
          className="text-blue-500 hover:text-blue-600 mb-8 inline-flex items-center gap-1 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Portfolio
        </button>

        <h1
          className={
            darkMode
              ? "text-4xl font-bold mb-2"
              : "text-4xl font-bold mb-2 text-white"
          }
        >
          Blog
        </h1>
        <p className={darkMode ? "text-gray-500 mb-8" : "text-gray-400 mb-8"}>
          Writing about ML/AI engineering, system design, and the journey in between.
        </p>

        {/* Tabbed navigation */}
        <div className={`border-b mb-8 ${darkMode ? "border-gray-200" : "border-gray-700"}`}>
          <nav className="flex gap-0 -mb-px">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === cat.id
                    ? "border-blue-500 text-blue-500"
                    : darkMode
                    ? "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-500"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Post list */}
        <div className="space-y-6">
          {filtered.map((post, i) => {
            const colors = categoryColors[post.category] || {
              bg: "bg-gray-100",
              text: "text-gray-800",
            };
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  if (!post.isPlaceholder) navigate(`/blog/${post.slug}`);
                }}
                className={`rounded-lg border p-6 transition-shadow ${
                  post.isPlaceholder ? "opacity-70" : "cursor-pointer hover:shadow-lg"
                } ${
                  darkMode
                    ? "border-gray-200 hover:border-gray-300"
                    : "border-gray-700 hover:border-gray-600"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors.bg} ${colors.text}`}
                  >
                    {categories.find((c) => c.id === post.category)?.label}
                  </span>
                  {post.isPlaceholder && (
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-yellow-100 text-yellow-800">
                      Coming Soon
                    </span>
                  )}
                  <span
                    className={
                      darkMode ? "text-sm text-gray-400" : "text-sm text-gray-500"
                    }
                  >
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <h2
                  className={
                    darkMode
                      ? "text-xl font-bold mb-2 text-gray-900"
                      : "text-xl font-bold mb-2 text-white"
                  }
                >
                  {post.title}
                </h2>
                <p
                  className={
                    darkMode ? "text-gray-500 text-sm" : "text-gray-400 text-sm"
                  }
                >
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded ${
                        darkMode
                          ? "bg-gray-100 text-gray-500"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className={darkMode ? "text-gray-400 text-center mt-12" : "text-gray-500 text-center mt-12"}>
            No posts in this category yet. Stay tuned!
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;