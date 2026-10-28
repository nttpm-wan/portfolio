"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="top" className="portfolio-cover">
      <div className="portfolio-cover__main">
        <motion.div
          className="portfolio-cover__copy"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="portfolio-cover__student">Computer<br />Engineering<br />student</p>
          <h1 className="portfolio-cover__name">
            <span>Nathapoom</span>
            <span>Wangsatang</span>
          </h1>
          <p className="portfolio-cover__description">
            I enjoy collaborating with teams to build and test connected software, from full-stack apps and embedded IoT devices to AI-powered systems.
          </p>
          <div className="portfolio-cover__actions">
            <a className="portfolio-cover__primary" href="#work">
              View my work <span aria-hidden="true">↗</span>
            </a>
            <a className="portfolio-cover__secondary" href="#contact">
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </motion.div>
        <motion.figure
          className="portfolio-cover__portrait"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Image
            src="/images/hero-portrait.png"
            alt="Nathapoom Wangsatang"
            fill
            priority
            loading="eager"
            sizes="(max-width: 700px) 100vw, 65vw"
            className="portfolio-cover__photo"
          />
          <div className="portfolio-cover__index" aria-hidden="true"><span>01</span><i /></div>
          <figcaption>
            <span>Turn ideas<br />into<br />real things</span>
          </figcaption>
        </motion.figure>
      </div>
      <div className="portfolio-cover__details">
        <div><span>01</span><p>Full-stack<br />developer</p></div>
        <div><span>02</span><p>QA &amp; tester</p></div>
        <div><span>03</span><p>IoT &amp; embedded<br />systems</p></div>
        <div><span>04</span><p>AI engineering</p></div>
        <a href="#about" aria-label="Scroll to About">Scroll<br />down <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}
