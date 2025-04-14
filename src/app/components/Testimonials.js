"use client";
import React from "react";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.testimonialsContainer}>
      <h2>Our Beloved Customer</h2>
      <div className={styles.testimonialGrid}>
        <div className={styles.testimonialCard}>
          <h4>Connie Lane</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={`${styles.testimonialCard} ${styles.highlightCard}`}>
          <h4>Theresa Webb</h4>
          <p>
            This card is highlighted with a different background color, matching
            the reference design.
          </p>
        </div>
        <div className={styles.testimonialCard}>
          <h4>Jerome Bell</h4>
          <p>
            Consectetur adipiscing elit sed do eiusmod tempor incididunt.
          </p>
        </div>
        <div className={styles.testimonialCard}>
          <h4>Darrell Steward</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit sed do eiusmod.
          </p>
        </div>
        <div className={styles.testimonialCard}>
          <h4>Kristin Watson</h4>
          <p>
            Tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.testimonialCard}>
          <h4>Arlene Warren</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
