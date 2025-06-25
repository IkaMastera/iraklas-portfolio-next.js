"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/library/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-m-28 text-white"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Hi, I’m Irakli — a former full-stack developer turned SRE/DevOps Engineer.
        I started by building front-end interfaces and back-end systems with JavaScript, Laravel, and MySQL.
        But over time, I realized my passion wasn’t just writing code—it was optimizing systems.
        I became obsessed with turning repetitive tasks into reliable, automated pipelines.   
      </p>
      <p className="mb-3">
        Today, I engineer solutions that boost efficiency, reduce human error,
        and let teams focus on what matters: building and shipping faster.
        From test automation to CI/CD workflows, I bridge the gap between
        development and operations with smart, scalable automation.
        I don’t just build—I streamline, stabilize, and scale. If you need someone who
        thinks like a developer but automates like an SRE, I’m ready to deliver impact.
      </p>
    </motion.section>
  );
}
