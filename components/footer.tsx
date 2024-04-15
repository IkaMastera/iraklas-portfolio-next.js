import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-[#706b33]">
      <small className="mb-2 text-xs block">
        &copy; 2030 Irakli. All Rights Reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (Router & Server Actions), TypeScript, TailWind CSS,
        Framer Motion, React Email & Resend
      </p>
    </footer>
  );
}
