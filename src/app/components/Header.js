// import Link from 'next/link';
// import styles from './Header.module.css';

// export default function Header() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Link href="/">ailo</Link>
//       </div>
//       <nav className={styles.nav}>
//         <ul>
//           <li>
//             <Link href="/products">Products</Link>
//           </li>
//           <li>
//             <Link href="/pricing">Pricing</Link>
//           </li>
//           <li>
//             <Link href="/community">Community</Link>
//           </li>
//           <li>
//             <Link href="/blog">Blog</Link>
//           </li>
//         </ul>
//       </nav>
//       <button className={styles.getStartedBtn}>Get started</button>
//     </header>
//   );
// }
// app/components/Header.jsx
// app/components/Header.jsx
// src/app/components/Header.js
"use client";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>INDIAN SIGHT</div>
      <nav className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>Our Services</li>
          <li>Key Highlights</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}