"use client";
import React from "react";
import styles from "./ConnectSection.module.css";

export default function ConnectSection() {
  return (
    <section className={styles.connectContainer}>
      <h2>Let’s connect!</h2>
      <p>
        Let’s learn about each other and ultimately create a long-term, 
        win-win relationship.
      </p>
      <div className={styles.ellipseWrapper}>
        <button className={styles.demoButton}>Book FREE Demo!</button>
        <div className={styles.profileCard}>
          <img
            src="/path/to/avatar.jpg"
            alt="User Avatar"
            className={styles.avatar}
          />
          <h4>Founder & CEO</h4>
        </div>
      </div>
    </section>
  );
}
