import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mexicanaImg from "@/public/mexicana.png";
import reformaticImg from "@/public/reformatics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Junior Front-End Developer",
    location: "Georgia, Tbilisi",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Junior Back-End Developer",
    location: "Georgia, Tbilisi",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Front-End Developer",
    location: "Georgia, Tbilisi",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
   
  {
    title: "Front-End Developer UpGaming",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: mexicanaImg,
  },
  {
    title: "Junior Back-End Developer Redberry",
    description:
      "As an innovative Junior Back-End Developer, I've been pivotal in architecting and optimizing server-side logic for various projects, This experience has sharpened my backend skills and provided a comprehensive understanding of end-to-end development, making me a versatile developer capable of tackling complex challenges.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: reformaticImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Pixi.JS",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Nova",
  "Express",
  "PostgreSQL",
  "Laravel",
  "Framer Motion",
  "Angular"
] as const;