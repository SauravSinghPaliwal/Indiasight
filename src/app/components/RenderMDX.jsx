"use client";
import { useEffect, useState } from "react";

// Manually map slugs to imports
const mdxModules = {
  "llm-tutorial": () => import("../../posts/llm-tutorial.mdx"),
  // Add more posts here
};

export default function RenderMDX({ slug }) {
  const [MDXContent, setMDXContent] = useState(null);

  useEffect(() => {
    if (mdxModules[slug]) {
      mdxModules[slug]().then((mod) => {
        setMDXContent(() => mod.default);
      });
    }
  }, [slug]);

  if (!MDXContent) return <p>Loading...</p>;

  return <MDXContent />;
}
