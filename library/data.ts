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
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer at a company called Redberry.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2020",
  },
  {
    title: "Junior Back-End Developer",
    location: "Georgia, Tbilisi",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Front-End Developer Lecturer",
    location: "Georgia, Tbilisi",
    description:
      "After 2 and a half years at Redberry I decided to get my skills to the next level at new companies and started to work as a front-end lecturer in digital academy for 1 month",
    icon: React.createElement(FaReact),
    date: "2023 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Georgia, Tbilisi",
    description:
      "After my experiences as a lecturer and a full-stack developer at redberry i got offered a job at a company called UpGaming where i got more hang of languages like javascript and typescript",
    icon: React.createElement(FaReact),
    date: "2023 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Georgia, Tbilisi",
    description:
      "Unfortunately UpGamings office was too far away from my house and that distance + the native language of javascript and making casino games wasnt my passion and i decided to shift my whole career to become a masterfull React.js developer and i started to work as a freelancer at an american company called Elgeo Corp",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "BTU Masters Degree In Technology",
    location: "Georgia, Tbilisi",
    description:
      "Right now I am Studying at university called BTU which is the best university for programming in Georgia I decided to study and get my skills to the next level to become the version of me that i've allways wanted",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
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
