// "use client";
// import styles from "./Hero.module.css";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section className={styles.heroContainer}>
//       {/* Left text content */}
//       <div className={styles.leftContent}>
//         <h1>We craft intelligent solutions, prioritizing accessibility</h1>
//         <p>
//         With over years of expertise, delivering
//         accessible AI solutions powered by the
//         latest technologies.
//         </p>
//         <div className={styles.ctaRow}>
//           <button className={styles.joinBtn}>See Services</button>
//         </div>
//       </div>

//       {/* Right robot image */}
//       <div className={styles.rightContent}>
//         <Image
//           src="/shot 3.png"
//           alt="Robot Illustration"
//           width={400}
//           height={400}
//           className={styles.robotImage}
//           priority
//         />
//       </div>
//     </section>
//   );
// }
// app/components/HeroSection.jsx
// import Link from 'next/link';
// import Image from 'next/image';
// import styles from './Hero.module.css';

// export default function HeroSection() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.container}>
//         <div className={styles.imageContainer}>
//           <Image 
//             src="/robot-graphic.svg" 
//             alt="Concentric design" 
//             width={500} 
//             height={500} 
//             className={styles.image}
//           />
//         </div>
//         <div className={styles.content}>
//           <h1 className={styles.title}>
//             We craft intelligent solutions, prioritizing accessibility
//           </h1>
//           <p className={styles.description}>
//             With over years of expertise, delivering accessible AI solutions powered by the latest technologies.
//           </p>
//           <Link href="/services">
//             <button className={styles.button}>See Services</button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
// src/app/components/Hero.js
"use client";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      {/* Left geometric shape */}
      <div className={styles.leftShape}>
        {/* Optionally place an inline SVG or background image here */}
      </div>

      {/* Right text content */}
      <div className={styles.rightContent}>
        <h1>We craft intelligent solutions, prioritizing accessibility</h1>
        <p>
          With over years of expertise, delivering accessible AI solutions
          powered by the latest technologies.
        </p>
        <button className={styles.servicesBtn}>See Services</button>
      </div>
    </section>
  );
}