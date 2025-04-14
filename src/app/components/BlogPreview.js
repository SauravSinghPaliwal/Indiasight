import Link from "next/link";
import { getSortedPostsData } from "../lib/blog";

export default function BlogPreview() {
  const posts = getSortedPostsData().slice(0, 3); // Show latest 3 posts

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold mb-4">📰 Latest Blog Posts</h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h3 className="text-xl font-semibold hover:underline">{post.title}</h3>
              <p className="text-sm text-gray-500">By {post.author} on {post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <Link href="/blog" className="text-blue-600 hover:underline">
          View All Posts →
        </Link>
      </div>
    </section>
  );
}
