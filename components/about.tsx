"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const {ref, inView} = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
       setActiveSection("About");
    }
  }, [inView, setActiveSection]);

  

  return (
    <motion.section
    ref = {ref}
    className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-m-28"
    initial = {{ opacity: 0, y: 100 }}
    animate= {{ opacity: 1, y: 0 }}
    transition= {{ delay: 0.175 }}
    id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className="mb-3">
            Greetings! I embarked on an exciting journey in Front-end development, transitioning from my academic background in {" "}
            <span className="font-bold">
                Clinical Psychology
            </span>, after graduating from university. Fueled by my unwavering passion for {" "}
            <span className="font-bold">Front-end development</span>.{" "}
            I embarked on a self-guided learning adventure that eventually led me to 
            the doors of Redberry, where I kickstarted my career
            as a Junior Front-end Developer.{" "}
            My tenure at Redberry was a transformative experience, immersing me in a world of code, creativity,
            and continuous learning. The more I delved into the realms of {" "}
            <span className="font-bold">
                React, Next.js, Node.js, Laravel, Tailwind.CSS
            </span>
            {" "}
            the more my passion for front-end development soared.{" "}
            As a developer, I believe in the power of growth and evolution.
            That's why I've made it a point to expand my
            skills, diving into <span className="font-bold">TypeScript, Ruby,</span> and exploring the wonders of <span className="font-medium">MongoDB.</span>
            I thrive on the challenge of mastering new technologies,
            as I firmly believe that the ability
            to learn is an invaluable skill in our ever-evolving industry.  
        </p>
        <p>
            I am on the lookout for opportunities that allow me to
            contribute to a company's growth and, in turn,
            enhance my journey in <span className="font-bold">Front-End Development.</span>
            Whether it's a <span className="font-bold"> full-time </span> 
            commitment or a <span className="font-bold">part-time</span> collaboration, 
            I am eager to be a part of an inspiring team.
        </p>
    </motion.section>
  )
}
