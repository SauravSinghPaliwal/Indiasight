import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";

export default function BlogPage() {
  const posts = getSortedPostsData();

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">📝 Blog</h1>
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
    </section>
  );
}
