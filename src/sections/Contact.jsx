const Contact = () => {
  return (
    <section className="bg-gray-50">
      <div className="container-custom py-24 grid md:grid-cols-2 gap-12">
        {/* LEFT INFO */}
        <div>
          <p className="text-primary font-medium mb-2">Contact Us</p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get In Touch With Us
          </h2>

          <p className="mt-4 text-gray-600">
            We are here to answer your questions about admission, programs, and
            school activities.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">
            <p>
              <span className="font-semibold">Phone:</span> +880 1818-603884
            </p>
            <p>
              <span className="font-semibold">Whatsapp:</span> +880 1818-603884
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              banyanbritishschool@gmail.com
            </p>
            <p>
              <span className="font-semibold">Address:</span> 90 Jhorna,
              Jhornarpar, Shahi Eidgah Road, Sylhet, Bangladesh
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

            <button className="w-full bg-primary  text-white py-3 rounded-md hover:bg-primary-dark transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
