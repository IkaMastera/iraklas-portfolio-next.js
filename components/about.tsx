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
        Hello, I’m Irakli! My tech journey began with crafting stunning
        front-end interfaces and building robust back-end systems. But as I dug
        deeper, I discovered that my true passion wasn’t just about coding—it
        was about making systems smarter and more efficient.
      </p>
      <p className="mb-3">
        This revelation led me to the dynamic world of automation engineering.
        Leveraging my full-stack experience, I now design and implement
        automated solutions that not only simplify complex processes but also
        empower teams to focus on what truly matters: innovation and growth.
      </p>
      <p>
        Today, I stand as a confident automation engineer who transforms
        challenges into streamlined, efficient systems. I believe that
        automation isn’t just a tool—it’s a mindset that can revolutionize
        workflows and drive progress. If you’re looking for someone who bridges
        traditional development with forward-thinking automation strategies, I’m
        ready to make a real impact.
      </p>
    </motion.section>
  );
}
