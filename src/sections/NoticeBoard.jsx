"use client";

import { useState } from "react";
import Image from "next/image";

const notices = [
  {
    title: "Admission Open for 2026",
    date: "June-July 2026",
    image: "/notices/Admission-1.jpeg",
  },
  {
    title: "Open Art Competition on 12 May",
    date: "12 May 2026",
    image: "/notices/notice-ArtC.jpeg",
  },
  {
    title: "Pohela Boishakh 1433 - The Bengali New Year",
    date: "14 April 2026",
    image: "/notices/notice-PB.jpeg",
  },
];

export default function NoticeBoard() {
  const [selectedNotice, setSelectedNotice] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-primary text-base md:text-xl font-medium mb-2">
            Latest Updates
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Notice Board
          </h2>
        </div>

        {/* Notices */}
        <div className="space-y-4">
          {notices.map((notice, index) => (
            <button
              key={index}
              onClick={() => setSelectedNotice(notice)}
              className="w-full text-left bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-gray-900">{notice.title}</h3>

                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {notice.date}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedNotice(null)}
              className="absolute top-4 right-4 bg-white text-black w-10 h-10 rounded-full shadow-md z-10"
            >
              ✕
            </button>

            {/* Image */}
            <div className="relative w-full h-[500px]">
              <Image
                src={selectedNotice.image}
                alt={selectedNotice.title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
