"use client";

import { useEffect, useState } from "react";

export default function TopNoticeBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[50px] bg-primary z-50 overflow-hidden flex items-center transition-all duration-300 ${
        hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="whitespace-nowrap animate-marquee text-red-700 font-medium text-sm md:text-base">
        📢 Admission Open for 2026-2027 • Limited Seats Available •{" "}
        <a
          href="#contact"
          className="bg-primary text-blue-600 underline italic px-6 hover:bg-primary-dark transition "
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
