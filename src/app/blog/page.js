// app/blog/page.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "src/posts");

export default function BlogPage() {
  const files = fs.readdirSync(postsDirectory);
  const postSlugs = files.filter((f) => f.endsWith(".json"));

  const posts = postSlugs.map((filename) => {
    const slug = filename.replace(/\.json$/, "");
    const filePath = path.join(postsDirectory, filename);
    const meta = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return { slug, ...meta };
  });

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">📚 All Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-semibold hover:underline">{post.title}</h2>
              <p className="text-sm text-gray-500">By {post.author} on {post.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}