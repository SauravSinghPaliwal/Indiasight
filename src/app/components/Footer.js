"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <h2 className={styles.sectionHeading}>Contact Us</h2>
      <div className={styles.footerGrid}>
        <div className={styles.contactCard}>
          <p>Email: <a href="mailto:contact@indiansight.com">contact@indiansight.com</a></p>
          <p>Phone: +91 98765 43210</p>
        </div>
        <div className={styles.contactCard}>
          <p>Follow Us:</p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" className={styles.icon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" className={styles.icon} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>{"© 2025 Indian Sight. All rights reserved."}</p>
      </div>
    </footer>
  );
}