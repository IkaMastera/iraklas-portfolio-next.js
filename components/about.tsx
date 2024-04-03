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
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-m-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello! i am Irakli, a passionate technologist currently pursuing Systems
        Management and DevOps at the{" "}
        <span className="font-bold">
          Business and Technology University (BTU) in Tbilisi.
        </span>
        where i am not just following the curriculum but carving my own path in
        the tech landscape. Alongside my studies, i am dedicating myself to
        mastering{" "}
        <span className="font-bold">
          React, Next.js, Node.js, Laravel, Tailwind.CSS
        </span>{" "}
        through rigorous self-study, driven by a deep-seated passion for
        full-stack development. My professional journey started at{" "}
        <span className="font-bold">Redberry</span> where I dabbled in both
        front-end and back-end development, discovering my strengths and areas
        for growth. Teaching at the{" "}
        <span className="font-bold">Digital Academy</span> allowed me to share
        my knowledge and learn from others, enriching my experience. However, it
        was my stint at <span className="font-bold">UpGaming</span> that truly
        tested my resolve, leading me to realize that my future lay beyond
        traditional front-end development roles.
      </p>
      <p>
        To future employers: I am deeply invested in mastering{" "}
        <span className="font-bold">
          React.js, Next.js, Node.js, and Tailwind CSS,
        </span>{" "}
        which represents the forefront of my professional development ambitions.
        This focus is built upon a solid foundation in{" "}
        <span className="">
          JavaScript, HTML, CSS, Tailwind CSS, and Vue.js,
        </span>{" "}
        where I have garnered significant experience. My current studies in
        Systems Management and DevOps at BTU are expanding my perspective on
        development practices, enriching my ability to contribute to
        comprehensive, innovative solutions. My passion for modern development
        technologies, combined with a broad base of experience and ongoing
        education, positions me to effectively tackle challenges and drive
        progress. I am eager to leverage this unique blend of skills and
        knowledge to make a significant impact on your team.
      </p>
    </motion.section>
  );
}
