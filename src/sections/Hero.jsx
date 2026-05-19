import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-[130px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/School-1.jpg"
          alt="Banyan British School"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/60"></div>

      {/* Content */}
      <div className="relative z-10 container-custom min-h-[calc(100vh-130px)] flex items-center">
        <div className="max-w-2xl">
          <p className="text-primary md:text-xl font-medium mb-3">
            Welcome to Banyan British School
          </p>

          <h1 className="text-2xl md:text-4xl lg:text=5xl font-bold text-white leading-tight">
            Preparing Children for Global Living
          </h1>

          <p className="mt-6 text-gray-200 text-base md:text-lg leading-relaxed">
            Banyan British School is committed to nurturing confident, creative,
            and responsible learners through a modern and supportive educational
            environment.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="bg-primary text-white px-7 py-3 rounded-xl hover:scale-105 transition">
              Explore More
            </button>

            <a
              href="#contact"
              className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-7 py-3 rounded-xl hover:bg-white/20 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
