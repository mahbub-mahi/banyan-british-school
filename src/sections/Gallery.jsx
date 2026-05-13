const Gallery = () => {
  return (
    <section className="bg-white">
      <div className="container-custom py-24">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-green-700 font-medium mb-2">Our Gallery</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Life at Banyan British School
          </h2>

          <p className="mt-4 text-gray-600">
            A glimpse into our classrooms, events, activities, and joyful
            learning environment.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 h-40 md:h-56 rounded-lg"></div>
          <div className="bg-gray-100 h-40 md:h-56 rounded-lg"></div>
          <div className="bg-gray-100 h-40 md:h-56 rounded-lg"></div>
          <div className="bg-gray-100 h-40 md:h-56 rounded-lg"></div>
          <div className="bg-gray-100 h-40 md:h-56 rounded-lg"></div>
          <div className="bg-gray-100 h-40 md:h-56 rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
