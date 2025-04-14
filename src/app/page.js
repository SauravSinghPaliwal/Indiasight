"use client";

import { useRef } from "react";
import styles from "./page.module.css";
import FeaturesRow from "./components/FeaturesRow";
import Highlight from "./components/highlight";
import About from "./components/about";
import Footer from "./components/Footer";
import BlogPreview from "./components/BlogPreview";

export default function Home() {
  const servicesRef = useRef(null);
  const highlightsRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const blogRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={styles.mainContainer}>
      {/* Navigation Bar */}
      <nav className={styles.navbar}>
        <div className={styles.brand} onClick={() => scrollToSection(homeRef)}>Indian Sight</div>
        <ul className={styles.menu}>
          <li onClick={() => scrollToSection(homeRef)}>Home</li>
          <li onClick={() => scrollToSection(servicesRef)}>Our Services</li>
          <li onClick={() => scrollToSection(highlightsRef)}>Key Highlights</li>
          <li onClick={() => scrollToSection(blogRef)}>Blog</li>
          <li onClick={() => scrollToSection(aboutRef)}>Contact Us</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className={styles.heroSection}>
        <div className={styles.heroBackground} />
        <div className={styles.heroContent}>
          <h1>
            We craft intelligent solutions, prioritizing accessibility
          </h1>
          <p>
            With over years of expertise, delivering accessible AI solutions
            powered by the latest technologies.
          </p>
          <button className={styles.servicesBtn} onClick={() => scrollToSection(servicesRef)}>
            See Services
          </button>
        </div>
      </section>

      {/* "Our Services" Panel */}
      <section ref={servicesRef} className={styles.servicesPanel}>
        <FeaturesRow />
      </section>

      {/* "Key Highlights" Section */}
      <section ref={highlightsRef} className={styles.highlightsSection}>
        <Highlight />
      </section>

      {/* Blog Section */}
      <section ref={blogRef} className={styles.blogSection}>
        <BlogPreview />
      </section>

      {/* "About" Section */}
      <section ref={aboutRef} className={styles.AboutSection}>
        <About />
      </section>

      <Footer />
    </main>
  );
}
