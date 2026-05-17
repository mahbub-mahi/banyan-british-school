"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AdmissionPopup() {
  const [showPopup, setShowPopup] = useState(true);

  // Auto close after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 z-10 bg-white text-black w-10 h-10 rounded-full shadow-md hover:scale-105 transition"
        >
          ✕
        </button>

        {/* Notice Image */}
        <div className="relative w-full h-[550px]">
          <Image
            src="/notices/Admission-2.jpeg"
            alt="Admission Notice"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
