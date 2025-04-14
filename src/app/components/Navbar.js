// src/app/components/Navbar.js
"use client";
import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoArea}>
        {/* Replace with your actual logo */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className={styles.logo}
        />
      </div>
      <ul className={styles.menu}>
        <li>Home</li>
        <li>Our Services</li>
        <li>Key highlights</li>
        <li>Contact</li>
      </ul>
      <div className={styles.rightArea}>
        <span className={styles.searchIcon}>🔍</span>
        <Image
          src="/avatar.png"
          alt="User Avatar"
          width={40}
          height={40}
          className={styles.avatar}
        />
      </div>
    </nav>
  );
}