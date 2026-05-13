const Programs = () => {
  return (
    <section className="bg-white">
      <div className="container-custom py-24">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-green-700 font-medium mb-2">Our Programs</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Academic Programs We Offer
          </h2>

          <p className="mt-4 text-gray-600">
            We provide structured education across different early learning and
            school levels to ensure every child gets the right foundation.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* CARD 1 */}
          <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">Playgroup</h3>
            <p className="mt-3 text-gray-600 text-sm">
              A gentle introduction to learning through play, creativity, and
              social interaction.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">Nursery</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Focus on early cognitive development, language skills, and
              structured learning habits.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900">Primary</h3>
            <p className="mt-3 text-gray-600 text-sm">
              Strong academic foundation with emphasis on English, Math,
              Science, and discipline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
