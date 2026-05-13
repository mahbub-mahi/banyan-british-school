const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container-custom py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-green-700 font-medium mb-3">
            Welcome to Banyan British School
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            A Place Where Learning Meets Excellence
          </h1>

          <p className="mt-5 text-gray-600 text-base leading-relaxed">
            We provide a modern, nurturing, and inspiring environment where
            students grow academically, socially, and emotionally.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 transition">
              Explore More
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-md hover:border-green-700 hover:text-green-700 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-100 rounded-xl h-[320px] md:h-[400px] flex items-center justify-center">
          <p className="text-gray-500">School Image / Banner Here</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
