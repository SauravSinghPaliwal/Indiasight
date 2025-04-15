import { notFound } from "next/navigation";
import { posts } from "@/posts";
import RenderMDX from "@/app/components/RenderMDX"; // use relative path if alias fails

export default async function BlogPost({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="prose max-w-3xl mx-auto p-6">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">By {post.author} on {post.date}</p>
      <RenderMDX slug={slug} />
    </main>
  );
}