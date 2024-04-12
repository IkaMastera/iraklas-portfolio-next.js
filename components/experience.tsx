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

interface TimelineElementProps {
  item: any; // or use unknown
}

const TimelineElementWrapper: React.FC<TimelineElementProps> = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value based on when you want the element to be considered "in view"
  });

  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        contentStyle={{
          background: "#f3f4f6",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight: "0.4rem solid #9ca3af",
        }}
        visible={inView} // Assuming 'visible' prop controls the visibility
        date={item.date}
        icon={item.icon}
        iconStyle={{
          background: "white",
          fontSize: "1.5rem",
        }}
      >
        <h3 className="font-semibold capitalize">{item.title}</h3>
        <p className="!mt-0 font-normal">{item.location}</p>
        <p className="!mt-1 !font-normal text-gray-700">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 max-w-[75rem] scroll-mt-28 text-center leading-8 sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <TimelineElementWrapper key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
