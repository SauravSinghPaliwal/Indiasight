import meta from "@/posts/llm-tutorial.json";
import LLMPost from "@/posts/llm-tutorial.mdx";

export default function BlogSection() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">📰 Latest Blog Post</h2>
      <article className="prose max-w-3xl mx-auto">
        <h3>{meta.title}</h3>
        <p className="text-sm text-gray-500">By {meta.author} on {meta.date}</p>
        <LLMPost />
      </article>
    </section>
  );
}
