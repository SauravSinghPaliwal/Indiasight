"use client";
import React from "react";
import styles from "./DarkSection.module.css";

export default function DarkSection() {
  return (
    <section className={styles.darkSection}>
      <div className={styles.contentWrapper}>
        <h2>Reach all of your ideal consumers from one location</h2>
        <p>
          Get an early bird in AI marketing development. Keep the same text from
          your site about how you unify consumer data and manage sales in one place.
        </p>
        <button className={styles.ctaButton}>Learn More</button>
      </div>
      <div className={styles.imageWrapper}>
        {/* Replace with an actual <Image> or <img> showing your UI or screenshot */}
        <div className={styles.placeholderImage}>[Screenshot/Graph Here]</div>
      </div>
    </section>
  );
}
