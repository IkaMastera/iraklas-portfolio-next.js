import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mexicanaImg from "@/public/mexicana.png";
import reformaticImg from "@/public/reformatics.png";
import restaurantImg from "@/public/restaurantapp.png";
import tushetiImg from "@/public/tusheti.png";

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
    title: "Mexicana Website",
    description: "Worked as a Front-End Developer on this project for 3 months",
    tags: ["CSS", "HTML", "Javascript", "Laravel", "Vue.js"],
    imageUrl: mexicanaImg,
  },
  {
    title: "Reformatics",
    description:
      "This was my first project where I learned and used JavaScript for the first time also helped do develop Slider which was really a good learning experience",
    tags: ["JavaScript", "SCSS", "CSS", "HTML"],
    imageUrl: reformaticImg,
  },
  {
    title: "Restaurant App",
    description:
      "My first Angular Application for IT-Step Academy Georgia, It has search functionality, Tags, Add To cart And delete from the cart, also it has custom made star review system",
    tags: ["JavaScript", "Angular", "CSS", "HTML", "TypeScript"],
    imageUrl: restaurantImg,
  },
  {
    title: "Tusheti Camping Website",
    description:
      "A Website landing page for tusheti camping site mobile application Made use of Next.js",
    tags: [
      "JavaScript",
      "Next.js",
      "CSS",
      "HTML",
      "TypeScript",
      "Tailwind.css",
    ],
    imageUrl: tushetiImg,
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
  "Vue.JS",
  "Chat-GPT",
  "Express",
  "Python",
  "DevOps",
] as const;
