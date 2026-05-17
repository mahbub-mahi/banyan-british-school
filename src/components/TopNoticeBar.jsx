export default function TopNoticeBar() {
  return (
    <div className="w-full h-[40px] bg-primary overflow-hidden flex items-center">
      <div className="whitespace-nowrap animate-marquee text-red-700 font-medium text-sm md:text-base">
        📢 Admission Open for 2026-2027 • Limited Seats Available •{" "}
        <a
          href="#contact"
          className="bg-primary text-blue-600 underline italic px-6 py-3 rounded-lg hover:bg-primary-dark transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
