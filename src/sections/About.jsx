import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-gray-100">
      <div className="container-custom py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="bg-white overflow-hidden rounded-xl shadow-lg h-[320px] md:h-[420px] flex items-center justify-center">
          <Image
            src="/School-2.jpg"
            alt="Banyan British School"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-primary text-base md:text-xl font-medium mb-3">
            About Us
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Building Strong Foundations for Future Leaders
          </h2>

          <p className="mt-5 text-gray-600 text-sm md:text-lg leading-relaxed">
            At Banyan British School, we are dedicated to nurturing young minds
            in a caring, inclusive, and inspiring environment. Our goal is to
            help every child grow with confidence, creativity, and strong values
            while preparing them for the challenges of a rapidly changing global
            world. Through engaging learning experiences and close collaboration
            with parents, we encourage students to become active learners,
            critical thinkers, and responsible global citizens.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our experienced faculty and modern teaching approach ensure that
            students are prepared for both academic success and real-world
            challenges.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-primary">10+</h3>
              <p className="text-gray-600 text-sm">Years of Excellence</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">15+</h3>
              <p className="text-gray-600 text-sm">Qualified Teachers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
