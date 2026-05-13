const About = () => {
  return (
    <section className="bg-gray-50">
      <div className="container-custom py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="bg-white rounded-xl shadow-sm h-[320px] md:h-[420px] flex items-center justify-center">
          <p className="text-gray-400">School Image / Classroom Photo</p>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-green-700 font-medium mb-3">About Us</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Building Strong Foundations for Future Leaders
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Banyan British School is committed to providing a nurturing and
            disciplined learning environment. We focus on academic excellence,
            character building, and holistic development of every student.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Our experienced faculty and modern teaching approach ensure that
            students are prepared for both academic success and real-world
            challenges.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-2xl font-bold text-green-700">10+</h3>
              <p className="text-gray-600 text-sm">Years of Excellence</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-700">500+</h3>
              <p className="text-gray-600 text-sm">Students</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-700">30+</h3>
              <p className="text-gray-600 text-sm">Qualified Teachers</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-700">95%</h3>
              <p className="text-gray-600 text-sm">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
