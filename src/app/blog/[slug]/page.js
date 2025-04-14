import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "src/posts");
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".json"));
  return files.map((filename) => ({ slug: filename.replace(/\.json$/, "") }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  const metaPath = path.join(process.cwd(), "src/posts", `${slug}.json`);
  const mdxPath = path.join(process.cwd(), "src/posts", `${slug}.mdx`);

  if (!fs.existsSync(metaPath) || !fs.existsSync(mdxPath)) return notFound();

  const meta = JSON.parse(fs.readFileSync(metaPath, "utf8"));
  const mdxSource = fs.readFileSync(mdxPath, "utf8");
  const { content } = await compileMDX({ source: mdxSource });

  return (
    <article className="prose mx-auto p-6">
      <h1>{meta.title}</h1>
      <p className="text-sm text-gray-500">By {meta.author} on {meta.date}</p>
      {content}
    </article>
  );
}