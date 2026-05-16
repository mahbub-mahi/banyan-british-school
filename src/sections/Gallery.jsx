import Image from "next/image";

const galleryImages = [
  "/Life-1.jpg",
  "/Life-2.jpg",
  "/Life-3.jpg",
  "/Life-4.jpg",
  "/Life-5.jpg",
  "/Life-6.jpg",
];

const Gallery = () => {
  return (
    <section className="bg-white">
      <div className="container-custom py-24">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-medium mb-2">Our Gallery</p>

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
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="h-40 md:h-56 rounded-xl overflow-hidden shadow-sm"
            >
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                width={500}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
