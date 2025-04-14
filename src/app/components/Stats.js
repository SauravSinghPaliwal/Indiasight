"use client";
import React from "react";
import styles from "./Stats.module.css";

export default function StatsRow() {
  return (
    <section className={styles.statsContainer}>
      <div className={styles.statItem}>
        <h3>1,500+</h3>
        <p>apps published</p>
      </div>
      <div className={styles.statItem}>
        <h3>6+</h3>
        <p>niches served</p>
      </div>
      <div className={styles.statItem}>
        <h3>20+</h3>
        <p>years of experience</p>
      </div>
    </section>
  );
}
