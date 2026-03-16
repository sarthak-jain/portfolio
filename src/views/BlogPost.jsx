import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "../themeProvider";
import { getPostBySlug, categories } from "../blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const categoryColors = {
  "ml-ai-transition": { bg: "bg-purple-100", text: "text-purple-800" },
  "system-design": { bg: "bg-green-100", text: "text-green-800" },
};

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? "bg-white" : "bg-gray-900"}`}>
        <div className="text-center">
          <h1 className={darkMode ? "text-2xl font-bold mb-4" : "text-2xl font-bold mb-4 text-white"}>
            Post not found
          </h1>
          <button
            onClick={() => navigate("/blog")}
            className="text-blue-500 hover:text-blue-600 font-medium"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const colors = categoryColors[post.category] || { bg: "bg-gray-100", text: "text-gray-800" };

  return (
    <div className={darkMode ? "bg-white min-h-screen" : "bg-gray-900 min-h-screen"}>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Back link */}
        <button
          onClick={() => navigate("/blog")}
          className="text-blue-500 hover:text-blue-600 mb-8 inline-flex items-center gap-1 text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Posts
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
              {categories.find((c) => c.id === post.category)?.label}
            </span>
            <span className={darkMode ? "text-sm text-gray-400" : "text-sm text-gray-500"}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className={darkMode ? "text-3xl sm:text-4xl font-bold mb-4" : "text-3xl sm:text-4xl font-bold mb-4 text-white"}>
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs px-2 py-0.5 rounded ${
                  darkMode ? "bg-gray-100 text-gray-500" : "bg-gray-800 text-gray-400"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div
          className={`prose max-w-none ${
            darkMode
              ? "prose-gray"
              : "prose-invert prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white prose-a:text-blue-400 prose-li:text-gray-300 prose-td:text-gray-300 prose-th:text-gray-300"
          }`}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={darkMode ? oneLight : oneDark}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    className={`${className || ""} ${
                      darkMode
                        ? "bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm"
                        : "bg-gray-800 text-gray-200 px-1 py-0.5 rounded text-sm"
                    }`}
                    {...props}
                  >
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;