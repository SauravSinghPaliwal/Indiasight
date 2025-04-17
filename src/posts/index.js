export const posts = [
    {
      slug: "llm-tutorial",
      title: "Intro to LLMs",
      author: "Saurav Singh",
      date: "2025-04-14",
      image: "llm.png",
      excerpt: "Intro to large language models and how they're transforming AI.",
      component: () => import("./llm-tutorial.mdx"), // ✅ MUST be a function
    },
    {
      slug: "llm",
      title: "Intro to LLMs",
      author: "Saurav Singh",
      date: "2025-04-14",
      image: "llm1.png",
      excerpt: "Intro to large language models and how they're transforming AI.",
      component: () => import("./tutorial.mdx"), // ✅ MUST be a function
    },
  ];