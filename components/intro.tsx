"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/library/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-2 max-w-[50rem] text-center sm:mb-0 scroll-mt-48 text-white"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profile-img/photo.jpeg"
              alt="Irakli Portrait"
              width={192}
              height={192}
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover
                border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute text-3xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl
       font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I am Irakli Oboladze</span>, a {"  "}
        <span className="font-bold">
          DevOps & Automation Engineer transitioning from 3+ years in full-stack development.
        </span>{" "}
        <span className="italic">
          I specialize in building resilient systems and automating workflows
        </span>{" "}
        <span className="font-bold underline">
          using Python, Bash, Docker, Linux, Git, and CI/CD pipelines.
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4
      text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-[#659DBD] text-white px-7 py-3 
         flex items-center gap-2 rounded-full
         outline-none focus:scale-110 hover:scale-110 hover:bg-[#2f7096] active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white text-[#8D8741] px-7 py-3 flex items-center gap-2 rounded-full 
        outline-none focus:scale-110 hover:scale-110
        active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/IraklaEngineerCV.pdf"
          download={true}
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 flex items-center text-[#659DBD] gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]
        active:scale-105 transition cursor-pointer borderBlack hover:text-[#2f7096] dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/ikamastera/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-[#659DBD] flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15]
        active:scale-105 hover:text-[#2f7096] transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/IkaMastera"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
