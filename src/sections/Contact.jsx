const Contact = () => {
  return (
    <section className="bg-gray-50">
      <div className="container-custom py-24 grid md:grid-cols-2 gap-12">
        {/* LEFT INFO */}
        <div>
          <p className="text-green-700 font-medium mb-2">Contact Us</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get In Touch With Us
          </h2>

          <p className="mt-4 text-gray-600">
            We are here to answer your questions about admission, programs, and
            school activities.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Phone:</span> +880 1XXXXXXXXX
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              info@banyanschool.com
            </p>
            <p>
              <span className="font-semibold">Address:</span> School Location
              Here
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 p-3 rounded-md outline-none focus:border-green-600"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-200 p-3 rounded-md outline-none focus:border-green-600"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-200 p-3 rounded-md outline-none focus:border-green-600"
            ></textarea>

            <button className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-800 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
