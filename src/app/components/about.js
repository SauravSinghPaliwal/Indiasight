"use client";
import styles from "./about.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={styles.featuresContainer}>
      <h2 className={styles.sectionHeading}>About Us</h2>

      {/* First Grid Section */}
      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <h3>Who We Are</h3>
          <p>
          At the heart of cutting-edge AI innovation,
          we are a team led by Saurav Singh, a
          Solution Architect specializing in deep
          learning technologies and NVIDIA's AI
          ecosystem. With a proven track record of
          delivering impactful AI solutions across
          industries, we bring the power of artificial
          intelligence to transform your business.
          </p>
          
        </div>
        <div className={styles.featureItem}>
          <h3>Our Mission</h3>
          <p>
          To empower organizations with scalable,
          efficient, and innovative AI solutions that drive
          business growth, solve complex challenges, and
          create a lasting impact across industries.
          </p>
        </div>
        <div className={styles.featureItem}>
          <h3>Why Choose Us?</h3>
          <p>
          <b>Proven Success:</b> Partnered with
          government and corporate organizations to
          deliver AI systems with measurable results.
          </p>
          <p>
          <b>State-of-the-Art Technology:</b>Deep
          expertise in NVIDIA's hardware and
          software stack, including DGX systems,
          NeMo, and TensorRT.
          </p>
          <p>
          <b>Scalable Solutions:</b>From small-scale
          deployments to nationwide systems, our
          solutions are built to grow with your
          business.
          </p>
          <p>
          <b>Tailored Approach:</b>We understand that no
          two challenges are the same and design AI
          systems customized to your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
