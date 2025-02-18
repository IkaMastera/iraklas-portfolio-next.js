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
    title: "Ilia State University Bachelor Histroy/Biology",
    location: "Georgia, Tbilisi",
    description:
      "I pursued a major in History and a minor in Biology at Ilia State University, where I delved into the complexities of our past and the intricacies of the natural world.",
    icon: React.createElement(LuGraduationCap),
    date: "2014 - 2019",
  },
  {
    title: "Ilia State University Masters Degree Psychology",
    location: "Georgia, Tbilisi",
    description:
      "Following my undergraduate studies, I advanced to a Master’s degree in Psychology, further exploring the depths of human behavior and mental processes.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Junior Front-End Developer",
    location: "Georgia, Tbilisi",
    description:
      "Just six months into my studies, I swiftly transitioned into the tech field, securing a position as a front-end developer at Redberry.",
    icon: React.createElement(CgWorkAlt),
    date: "2019-2020",
  },
  {
    title: "Junior Back-End Developer",
    location: "Georgia, Tbilisi",
    description:
      "After 1.2 years in front-end development, I pivoted to back-end development at Redberry, expanding my technical expertise.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  {
    title: "Front-End Developer Lecturer",
    location: "Georgia, Tbilisi",
    description:
      "After enriching my expertise with 2.5 years at Redberry, I sought new challenges and opportunities for growth, prompting my transition to a front-end lecturer position at Digital Academy.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Georgia, Tbilisi",
    description:
      "Following my roles as a full-stack developer and a lecturer, I joined UpGaming, where I further honed my skills in JavaScript and TypeScript.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Front-End Developer",
    location: "Georgia, Tbilisi",
    description:
      "After working at UpGaming, I found the commute, emphasis on native JavaScript for casino games, and their direction didn't match my interests. Eager to specialize in React.js, I transitioned to freelancing with an American company, Elgeo Corp, opening a new chapter in my career.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "BTU Masters Degree In Technology",
    location: "Georgia, Tbilisi",
    description:
      "Currently, I'm advancing my education at BTU, renowned as Georgia's premier university for programming. This step is part of my commitment to elevating my skills and becoming the best version of myself in the tech industry.",
    icon: React.createElement(LuGraduationCap),
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
  "PostgreSQL",
  "Laravel",
  "Framer Motion",
  "Vue.JS",
  "Chat-GPT",
  "Java",
  "Spring",
  "Selenium",
  "Appium",
  "Swagger",
  "Postman",
] as const;
