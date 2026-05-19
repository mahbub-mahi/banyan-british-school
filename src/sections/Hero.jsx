import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="bg-white pt-[130px]">
      <div className="container-custom py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="text-primary md:text-xl font-medium mb-3">
            Welcome to Banyan British School
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Preparing Children for Global Living
          </h1>

          <p className="mt-5 text-gray-600 text-base leading-relaxed">
            Banyan British School is committed to nurturing confident, creative,
            and responsible learners through a modern and supportive educational
            environment.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition">
              Explore More
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-md hover:border-green-700 hover:text-primary transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-gray-300 rounded-xl overflow-hidden h-[320px] md:h-[400px] shadow-xl">
          <Image
            src="/School-1.jpg"
            alt="Banyan British School"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
