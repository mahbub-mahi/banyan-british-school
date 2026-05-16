const Faculty = () => {
  return (
    <section className="bg-gray-50">
      <div className="container-custom py-24">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-medium mb-2">Our Faculty</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Experienced & Dedicated Teachers
          </h2>

          <p className="mt-4 text-gray-600">
            Our educators are passionate professionals committed to guiding
            students with care, discipline, and modern teaching methods.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* TEACHER 1 */}
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-900">
              Teacher Name
            </h3>
            <p className="text-sm text-gray-500 mt-1">English Teacher</p>
          </div>

          {/* TEACHER 2 */}
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-900">
              Teacher Name
            </h3>
            <p className="text-sm text-gray-500 mt-1">Math Teacher</p>
          </div>

          {/* TEACHER 3 */}
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-200 mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-900">
              Teacher Name
            </h3>
            <p className="text-sm text-gray-500 mt-1">Science Teacher</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
