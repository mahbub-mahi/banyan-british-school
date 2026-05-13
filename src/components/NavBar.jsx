import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between py-6">
        <div className="flex items-center">
          <Image
            src="/banyan-name.png"
            alt="Banyan British School"
            width={650}
            height={130}
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-green-700 transition"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-green-700 transition"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-green-700 transition"
          >
            Faculty
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-green-700 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
