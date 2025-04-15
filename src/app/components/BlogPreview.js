"use client";
import Link from "next/link";
import { posts } from "@/posts";
import styles from "./BlogPreview.module.css";

export default function BlogPreview() {
  const latestPosts = posts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section
      className={styles.blogPreviewSection}
      style={{ backgroundImage: "url('/images/bg/blog-preview-bg.jpg')" }}
    >
      <div className={styles.previewHeader}>
        <h2>📰 Latest Blogs</h2>
        <p>Explore what we’re writing about this week.</p>
      </div>

      <div className={styles.blogGrid}>
        {latestPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.blogCard}>
            {post.image && (
              <img src={post.image} alt={post.title} className={styles.cardImage} />
            )}
            <div className={styles.cardContent}>
              <h3>{post.title}</h3>
              <p className={styles.meta}>
                {new Date(post.date).toLocaleDateString()} · {post.author}
              </p>
              <p className={styles.excerpt}>
                {post.excerpt || "Click to read more..."}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.viewAllContainer}>
        <Link href="/blog" className={styles.viewAllButton}>
          View All Blogs →
        </Link>
      </div>
    </section>
  );
}
