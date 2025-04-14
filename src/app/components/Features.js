"use client";
import React from "react";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featureCard}>
        <h3>Unlocked Quality</h3>
        <p>
          Keep the same text you already have, but with a fresh new look.
          This might be about how your AI improves marketing.
        </p>
      </div>
      <div className={styles.featureCard}>
        <h3>Protect Storage</h3>
        <p>
          Another feature with the same original text from your site, 
          but styled according to the new design.
        </p>
      </div>
      <div className={styles.featureCard}>
        <h3>Runs Faster</h3>
        <p>
          Showcase how your solution speeds up workflows, 
          again using your original content.
        </p>
      </div>
    </section>
  );
}