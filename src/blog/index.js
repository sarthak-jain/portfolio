import bookfinderPost from "./posts/building-bookfinder";
import moviefinderPost from "./posts/building-moviefinder";
import soccerPost from "./posts/building-soccer-dashboard";
import mlAiComingSoon from "./posts/ml-ai-coming-soon";

// Add new posts here — they'll automatically appear on the blog
const posts = [bookfinderPost, moviefinderPost, soccerPost, mlAiComingSoon];

// Sort by date descending (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export const categories = [
  {
    id: "all",
    label: "All Posts",
  },
  {
    id: "ml-ai-transition",
    label: "ML/AI Engineering Transition",
  },
  {
    id: "system-design",
    label: "System Design",
  },
];

export const getPostBySlug = (slug) => posts.find((p) => p.slug === slug);

export const getLatestPosts = (count = 3) => posts.slice(0, count);

export const getPostsByCategory = (categoryId) =>
  categoryId === "all" ? posts : posts.filter((p) => p.category === categoryId);

export default posts;