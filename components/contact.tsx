"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/library/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-5">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ir.oboladze@gmail.com">
          ir.oboladze@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (FormData) => {
          const { data, error } = await sendEmail(FormData);

          if (error) {
            alert(error);
            return;
          }

          alert("Email sent successfully!");
        }}
      >
        <input
          placeholder="Your email "
          type="email"
          required
          maxLength={500}
          className="h-14 px-4 rounded-lg borderBlack"
          name="senderEmail"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={500}
          className="h-52 my-3 rounded-lg borderBlack p-4"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
