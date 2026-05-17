const staff = [
  {
    name: "Habibur Rahman Munna",
    role: "Coordinator & Math Teacher",
  },
  {
    name: "Mahbubul Alam Mahi",
    role: "Admin & Physics Teacher",
  },
  {
    name: "Solaiman Hossain Shanto",
    role: "Accountant",
  },
  {
    name: "Janna Akhter",
    role: "Teacher",
  },
  {
    name: "Sharmin Jahan Sonchi",
    role: "Teacher",
  },
  {
    name: "Marwah",
    role: "Teacher",
  },
  {
    name: "Marwah",
    role: "Teacher",
  },
  {
    name: "Tahmina Husen Ema",
    role: "Teacher",
  },
  {
    name: "Mst Shahida Siddika",
    role: "Teacher",
  },
];

const Faculty = () => {
  return (
    <section className="bg-gray-50">
      <div className="container-custom py-24">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary text-base md:text-xl font-medium mb-2">
            Our Faculty
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Experienced & Dedicated Teachers
          </h2>

          <p className="mt-4 text-gray-600">
            Our educators are passionate professionals committed to guiding
            students with care, discipline, and modern teaching methods.
          </p>
        </div>
        <div className="bg-white border w-[60%] md:[40%] mb-5 m-auto rounded-xl p-5 text-center shadow-sm hover:shadow-md transition">
          <div className="w-36 h-36 md:w-40 md:h-40 mx-auto bg-gray-200 rounded-full mb-4"></div>

          <h3 className="font-semibold text-gray-900">Principal</h3>

          <p className="text-sm text-gray-500 mt-1">Md. Niazur Rahman</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {staff.map((person, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-5 text-center shadow-sm hover:shadow-md transition"
            >
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4"></div>

              <h3 className="font-semibold text-gray-900">{person.role}</h3>

              <p className="text-sm text-gray-700 mt-1">{person.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
