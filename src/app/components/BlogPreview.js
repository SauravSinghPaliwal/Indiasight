import Link from "next/link";
import { posts } from "@/posts";

export default function BlogPreview() {
  // Show latest 3 posts
  const latestPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">📰 Latest Blog Posts</h2>
      {latestPosts.map((post) => (
        <div key={post.slug} className="mb-4">
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-lg font-semibold hover:underline">{post.title}</h3>
            <p className="text-sm text-gray-500">
              By {post.author} on {post.date}
            </p>
          </Link>
        </div>
      ))}
      <div className="mt-4">
        <Link href="/blog" className="text-blue-600 hover:underline">
          View All Posts →
        </Link>
      </div>
    </section>
  );
}
