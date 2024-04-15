"use client";
import React from "react";
import { useSectionInView } from "@/library/hooks";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/library/data";
import { useInView } from "react-intersection-observer";
import { useTheme } from "@/context/theme-context";

interface TimelineElementProps {
  item: any; // or use unknown
}

const TimelineElementWrapper: React.FC<TimelineElementProps> = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value based on when you want the element to be considered "in view"
  });
  const { theme } = useTheme();

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #9ca3af"
              : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        visible={inView} // Assuming 'visible' prop controls the visibility
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: theme === "light" ? "white" : "rgba(255,255,255, 0.15)",
          fontSize: "1.5rem",
        }}
      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="!mt-0 font-normal">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
          {item.description}
        </p>
      </VerticalTimelineElement>
    </div>
  );
};

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 max-w-[75rem] scroll-mt-28 text-center leading-8 sm:mb-40 text-[#2f7096]"
    >
      <SectionHeading>
        <>
          <div className="text-white">My Experience</div>
        </>
      </SectionHeading>
      <VerticalTimeline
        lineColor={theme === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.2)"}
      >
        {experiencesData.map((item, index) => (
          <TimelineElementWrapper key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
