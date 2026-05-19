"use client";
import { MessageCircle, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Programs", id: "programs" },
    { name: "Leadership", id: "leadership" },
    { name: "Faculty", id: "faculty" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0b0f19] to-[#070a12] text-gray-300 border-t border-white/10">
      <div className="container-custom py-14 flex flex-col gap-12 md:grid md:grid-cols-3">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white">
              Banyan British School
            </h3>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              A modern learning environment focused on academic excellence,
              discipline, and holistic student development.
            </p>
          </div>

          {/* SOCIAL ROW */}
          <div className="flex items-center gap-4">
            {/*  <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <Facebook size={18} />
            </a> */}

            {/*  <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <YoutubeIcon size={18} />
            </a> */}

            <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <MessageCircle size={18} />
            </a>

            <a
              href="mailto:banyanbritishschool@gmail.com"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* MIDDLE */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-5 uppercase tracking-wider">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-gray-400 hover:text-white transition inline-block group"
                >
                  {link.name}
                  <span className="block h-[1px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-blue-500 mt-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-semibold text-white mb-2 uppercase tracking-wider">
            Contact
          </h4>

          {[
            "📞 +880 1818-603884",
            "💬 WhatsApp: +880 1818-603884",
            "✉️ banyanbritishschool@gmail.com",
            "📍 90 Jhorna, Jhornarpar, Shahi Eidgah Road, Sylhet, Bangladesh",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 hover:bg-white/10 transition text-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Banyan British School. All rights
            reserved.
          </p>

          <p className="text-gray-600">Built for modern education</p>
        </div>
      </div>

      {/* BACK TO TOP */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </footer>
  );
};

export default Footer;
