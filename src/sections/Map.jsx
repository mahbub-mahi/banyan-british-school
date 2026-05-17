export default function MapSection() {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="mb-10 text-center">
          <p className="text-primary text-base md:text-xl font-medium mb-2">
            Visit Our Campus
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Find Us on the Map
          </h2>
        </div>

        <div className="w-[80%] m-auto rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.5332414269847!2d91.87783907535096!3d24.90301144355364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750557dc3470b3f%3A0xca5d40f4b430089d!2sBanyan%20British%20School!5e1!3m2!1sen!2sbd!4v1779038175635!5m2!1sen!2sbd"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
