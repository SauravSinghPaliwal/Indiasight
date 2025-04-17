"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <h2 className={styles.sectionHeading}>Contact Us</h2>
      <div className={styles.footerGrid}>
        <div className={styles.contactCard}>
          <p>Email: <a href="mailto:contact@indiansight.com">contact@indiansight.com</a></p>
          <p>Phone: +91 7005873704</p>
        </div>
        <div className={styles.contactCard}>
          <p>Follow Us:</p>
          <div className={styles.socialIcons}>
            <a href="www.linkedin.com/in/sauravsinghpaliwal" target="_blank" rel="noopener noreferrer">
              <img src="linkedin.png" alt="LinkedIn" className={styles.icon} />
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