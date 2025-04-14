"use client";
import styles from "./highlight.module.css";
import Image from "next/image";

export default function Highlight() {
  return (
    <section className={styles.featuresContainer}>
      <h2 className={styles.sectionHeading}>Key Highlights</h2>

      {/* First Grid Section */}
      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <Image
            src="/highlight1.png"
            alt="Expertise in NVIDIA AI Stack"
            width={70}
            height={70}
            className={styles.featureImage}
          />
          <h3>Expertise in NVIDIA AI Stack</h3>
          <p>
            {"Comprehensive experience across NVIDIA's hardware and software ecosystem, including DGX systems, TensorRT, NeMo, and Mistral models."}
          </p>
          <p>
            {"Proven ability to optimize deep learning workflows for maximum performance."}
          </p>
        </div>
        <div className={styles.featureItem}>
          <Image
            src="/highlight2.png"
            alt="Scalable and Efficient AI Deployments"
            width={70}
            height={70}
            className={styles.featureImage}
          />
          <h3>Scalable and Efficient AI Deployments</h3>
          <p>
            {"Expertise in Docker and Kubernetes for streamlined deployments."}
          </p>
        </div>
        <div className={styles.featureItem}>
          <Image
            src="/highlight3.png"
            alt="Tailored AI Solutions"
            width={70}
            height={70}
            className={styles.featureImage}
          />
          <h3>Tailored AI Solutions</h3>
          <p>
            {"Specialization in building AI models customized to meet the unique needs of industries like government, healthcare, and agriculture."}
          </p>
          <p>
            {"From fraud detection to multilingual ASR, solutions are designed to be impactful and scalable."}
          </p>
        </div>
      </div>

      {/* Spacer for separation between grids */}
      <div className={styles.gridSpacer} />

      {/* Second Grid Section */}
      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <Image
            src="/highlight4.png"
            alt="AI Infrastructure Optimization"
            width={70}
            height={70}
            className={styles.featureImage}
          />
          <h3>AI Infrastructure Optimization</h3>
          <p>
            {"Expertise in Retrieval-Augmented Generation (RAG) pipelines and integration of digital humans for enhanced user experience."}
          </p>
          <p>
            {"Focused on cutting-edge applications of Generative AI for content creation and information retrieval."}
          </p>
        </div>
      </div>
    </section>
  );
}