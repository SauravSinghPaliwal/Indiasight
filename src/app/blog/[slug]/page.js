import { notFound } from "next/navigation";
import { posts } from "@/posts";
import RenderMDX from "@/app/components/RenderMDX";
import styles from "./BlogSlug.module.css";

// Format date safely
function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeris",
    month: "long",
    day: "numeric",
  }).format(new Date(dateStr));
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <section className={styles.blogSlugPage}>
      <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>
          {formatDate(post.date)} · {post.author}
        </p>
        <div className={styles.glass}>
          <RenderMDX slug={slug} />
        </div>
      </div>
    </section>
  );
}