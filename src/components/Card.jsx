import React from "react";
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

const Card = ({ title, description, tags, link, demoLink, status, references }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
      <div class="p-5">
        <div class="flex items-center justify-between mb-2">
          <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          {status && (
            <span
              class={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ml-2 ${
                status === "In Progress"
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {status}
            </span>
          )}
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {highlightMetrics(description)}
        </p>
        {tags && (
          <div class="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
        {(link || demoLink) && (
          <div class="flex flex-wrap gap-3 mb-3">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
            )}
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Live Demo
              </a>
            )}
          </div>
        )}
        {references && (
          <div class="flex flex-wrap gap-2 mb-3 items-center">
            <span class="text-xs font-semibold text-blue-500">Featured in:</span>
            {references.map((ref, i) => (
              <a
                key={i}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border border-blue-400 text-blue-500 hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <img
                  src={ref.icon}
                  alt=""
                  class="w-3.5 h-3.5 rounded-sm"
                />
                {ref.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
