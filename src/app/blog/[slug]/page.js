import { getPostBySlug } from "@/lib/blog";
import { remark } from "remark";
import html from "remark-html";

export default async function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  const processedContent = await remark().use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <article className="p-6 prose max-w-3xl mx-auto">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">By {post.author} on {post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
