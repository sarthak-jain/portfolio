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

const Card = ({ title, description, tags, link, status }) => {
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
      </div>
    </motion.div>
  );
};

export default Card;
