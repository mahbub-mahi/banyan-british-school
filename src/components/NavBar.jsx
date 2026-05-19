"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "Leadership", id: "leadership" },
    { name: "Faculty", id: "faculty" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => document.getElementById(link.id));

      sections.forEach((section) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "top-0 bg-white/90 backdrop-blur-md shadow-sm"
          : "top-[50px] bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between py-6">
        <div className="flex items-center">
          <Image
            src="/banyan-name.png"
            alt="Banyan British School"
            width={550}
            height={120}
          />
        </div>

        {/* Desktop Menu */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition font-medium ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
