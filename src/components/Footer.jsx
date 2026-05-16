const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-custom py-12 grid md:grid-cols-3 gap-10">
        {/* LEFT */}
        <div>
          <h3 className="text-lg font-semibold text-primary">
            Banyan British School
          </h3>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed">
            A modern learning environment focused on academic excellence,
            discipline, and holistic student development.
          </p>
        </div>

        {/* MIDDLE */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Programs</li>
            <li>Faculty</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>

          <p className="text-sm text-gray-600 pb-1">Phone: +880 1818-603884</p>
          <p className="text-sm text-gray-600 pb-1">
            Whatsapp: +880 1818-603884
          </p>
          <p className="text-sm text-gray-600 pb-1">
            Email: banyanbritishschool@gmail.com
          </p>
          <p className="text-sm text-gray-600 pb-1">
            90 Jhorna, Jhornarpar, Shahi Eidgah Road, Sylhet, Bangladesh
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="container-custom py-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Banyan British School. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
