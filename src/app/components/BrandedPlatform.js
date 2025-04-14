"use client";
import React from "react";
import styles from "./BrandedPlatform.module.css";

export default function BrandedPlatform() {
  return (
    <section className={styles.platformContainer}>
      <div className={styles.textArea}>
        <h2>Your Branded Platform</h2>
        <p>
          Get your own branded community website and mobile app to bring your
          ideas to life. Provide a personalized space for your audience.
        </p>
        <button className={styles.ctaButton}>Book A Demo!</button>
      </div>
      <div className={styles.imageArea}>
        {/* Replace with a real image or screenshot */}
        <div className={styles.placeholderImage}>
          <p>[Platform Screenshot Here]</p>
        </div>
      </div>
    </section>
  );
}
