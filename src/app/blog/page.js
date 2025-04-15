"use client";
import Link from "next/link";
import { posts } from "@/posts";
import styles from "./BlogPage.module.css";

export default function BlogPage() {
  const allPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <section
      className={styles.blogSection}
      style={{ backgroundImage: "url('ai-hero.png')" }}
    >
      <div className={styles.header}>
        <h1>✨ Explore All Blogs</h1>
        <p>Discover our latest thoughts on AI, innovation, and real-world applications.</p>
      </div>

      <div className={styles.blogGrid}>
        {allPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.blogCard}>
            {post.image && (
              <img src={post.image} alt={post.title} className={styles.cardImage} />
            )}
            <div className={styles.cardContent}>
              <h2>{post.title}</h2>
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
    </section>
  );
}