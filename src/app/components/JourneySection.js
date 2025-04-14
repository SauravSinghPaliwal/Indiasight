"use client";
import React from "react";
import styles from "./JourneySection.module.css";

export default function JourneySection() {
  return (
    <section className={styles.journeyContainer}>
      <h2>Join us to begin your journey</h2>
      <div className={styles.floatingAvatars}>
        {/* Add real images or placeholders for floating avatars */}
        <div className={styles.avatarItem}>
          <img src="/avatar1.jpg" alt="User 1" />
          <span>85 ★ Eleanor Pena</span>
        </div>
        <div className={styles.avatarItem}>
          <img src="/avatar2.jpg" alt="User 2" />
          <span>79 ★ Marvin Black</span>
        </div>
        {/* Add more as needed */}
      </div>
    </section>
  );
}
