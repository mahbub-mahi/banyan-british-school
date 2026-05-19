"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveSection(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-black/70 backdrop-blur-xl border-b border-white/10"
            : "top-[50px] bg-white/10 backdrop-blur-xl border-b border-white/10"
        }`}
      >
        <div className="container-custom flex items-center justify-between py-4 md:py-6">
          {/* LOGO */}

          <div className="relative w-[450px] sm:w-[500px] md:w-[470px] lg:w-[550px] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[90px] mr-2 items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/10">
            <Image
              src="/banyan-name.png"
              alt="Banyan British School"
              fill
              className="object-contain pl-2 pr-4"
              priority
            />
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`font-medium transition ${
                  activeSection === link.id
                    ? "text-[#7DA043]"
                    : "text-white hover:text-[#7DA043]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
        />
      )}

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-[#0b0f19] z-50 border-r border-white/10 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>

          <button onClick={() => setMenuOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        <div className="flex flex-col p-5 gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`text-left py-2 transition ${
                activeSection === link.id
                  ? "text-[#7DA043]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
