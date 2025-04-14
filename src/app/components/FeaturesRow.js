"use client";
import styles from "./FeaturesRow.module.css";
import Image from "next/image";

export default function FeaturesRow() {
  return (
    <section className={styles.featuresContainer}>
      <h2 className={styles.sectionHeading}>Our Services</h2>

      {/* First Grid Section */}
      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <Image
            src="/feature1.png"
            alt="AI Consulting"
            width={70}
            height={70}
            className={styles.featureImage}
          />
          <h3>AI Consulting</h3>
          <p>
            Comprehensive guidance on implementing AI solutions tailored to your
            business needs.
          </p>
          <p>
            Expertise in integrating <b>NVIDIA AI Stack</b> and other
            state-of-the-art technologies.
          </p>
          <p>
            Strategic planning and architecture design for scalable AI
            deployments.
          </p>
        </div>
        <div className={styles.featureItem}>
          <Image
            src="/feature2.png"
            alt="Generative AI Services"
            width={70}
            height={70}
            className={styles.featureImage}
          />
          <h3>Generative AI Services</h3>
          <p>
            <b>Retrieval-Augmented Generation (RAG)</b>: Creation of advanced RAG
            pipelines for applications in legal, educational, and corporate
            sectors.
          </p>
          <p>
            <b>Digital Human Integration</b>: Leveraging Generative AI to create
            lifelike digital assistants for enhanced user interaction.
          </p>
        </div>
        <div className={styles.featureItem}>
          <Image
            src="/feature3.png"
            alt="Deep Learning Solutions"
            width={70}
            height={70}
            className={styles.featureImage}
          />
          <h3>Deep Learning Solutions</h3>
          <p>
            <b>Computer Vision Applications</b> Object detection, people
            tracking, and plant disease detection. Optimization of vision models
            for real-time deployment using TensorRT.
          </p>
          <p>
            <b>Natural Language Processing (NLP)</b> Multilingual ASR
            development and deployment for accessibility. Classification and
            legal document analysis using fine-tuned large language models
            (LLMs).
          </p>
          <p>
            <b>Biomedical AI</b> Specialized solutions for healthcare, including
            brain tumor detection and Biomedical Named Entity Recognition (NER).
          </p>
        </div>
      </div>

      {/* Spacer for separation between grids */}
      <div className={styles.gridSpacer} />

      {/* Second Grid Section */}
      <div className={styles.featuresGrid}>
        <div className={styles.featureItem}>
          <Image
            src="/feature4.png"
            alt="AI Infrastructure Optimization"
            width={70}
            height={70}
            className={styles.featureImage}
          />
          <h3>AI Infrastructure Optimization</h3>
          <p>
            <b>Model Optimization</b>: Speed up AI inference through TensorRT optimization.
            Fine-tuning and deploying large-scale models on NVIDIA DGX systems.
          </p>
          <p>
            <b>Scalable Deployments</b>: Expertise in Kubernetes and Docker for seamless model deployment and management.
          </p>
        </div>
        <div className={styles.featureItem}>
          <Image
            src="/feature5.png"
            alt="Custom AI Solutions"
            width={70}
            height={70}
            className={styles.featureImage}
          />
          <h3>Custom AI Solutions</h3>
          <p>
            Solutions for <b>government</b>, <b>healthcare</b>, and <b>agriculture</b> tailored to
            specific operational challenges.
          </p>
        </div>
        <div className={styles.featureItem}>
          <Image
            src="/feature6.png"
            alt="Support"
            width={70}
            height={70}
            className={styles.featureImage}
          />
          <h3>Support</h3>
          <p>
            Ongoing support for <b>maintaining</b> and <b>scaling</b> AI systems.
          </p>
        </div>
      </div>
    </section>
  );
}
