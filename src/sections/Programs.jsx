const programs = [
  {
    title: "Early Years (Pre-School)",
    subtitle: "Foundation Stage",
    description:
      "A nurturing environment where children begin their learning journey through play-based and activity-driven learning.",
    levels: [
      "Play Group – Early social and motor skill development",
      "Nursery – Basic learning through interactive activities",
      "Reception – Preparing for formal schooling",
    ],
  },
  {
    title: "Primary Education",
    subtitle: "Key Stage 1 – 2",
    description:
      "Focuses on building strong foundations in literacy, numeracy, creativity, and personal development.",
    levels: [
      "Class 1 – 2 – Basic reading, writing, and numeracy skills",
      "Class 3 – 4 – Concept development and structured learning",
      "Class 5 – 6 – Preparation for secondary education",
    ],
  },
  {
    title: "Lower Secondary",
    subtitle: "Key Stage 3",
    description:
      "Students begin subject specialization while strengthening analytical and critical thinking skills.",
    levels: [
      "Class 7 – Transition to secondary learning",
      "Class 8 – Subject-based deeper understanding",
      "Class 9 – Preparation for O-Level pathway",
    ],
  },
  {
    title: "IGCSE / O-Level",
    subtitle: "Key Stage 4",
    description:
      "Focused academic preparation for internationally recognized O-Level qualifications.",
    levels: [
      "Class 10 – Core subject strengthening",
      "Class 11 – Final O-Level examination preparation",
    ],
  },
];

const Programs = () => {
  return (
    <section className="bg-gray-100">
      <div className="container-custom py-24">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-base md:text-xl font-medium mb-2">
            Our Programs
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Academic Programs We Offer
          </h2>

          <p className="mt-4 text-gray-600">
            We provide structured education across different early learning and
            school levels to ensure every child gets the right foundation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {program.title}
              </h3>

              <p className="text-sm text-gray-500 mb-2">{program.subtitle}</p>

              {/* NEW DESCRIPTION */}
              <p className="text-sm text-gray-600 mb-4">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {program.levels.map((level, i) => (
                  <span
                    key={i}
                    className="text-sm bg-gray-200 px-3 p-2 rounded-xl text-gray-900"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* GRID */}
      </div>
    </section>
  );
};

export default Programs;
