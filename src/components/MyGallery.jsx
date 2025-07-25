import React from "react";
import { useState } from "react";

const figmaDesigns = [
  {
    title: "Airpods Pro",
    description: "A clean and modern web landing page.",
    thumbnail: "/apple.png",
    full: "/apple.png",
  },
  {
    title: "Nike Running",
    description: "A responsive mobile UI for a fitness app.",
    thumbnail: "/here-running.png",
    full: "/here-running.png",
  },
];

export default function MyGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div>
      <section className="p-6 md:p-12  bg-gradient-to-tr from-yellow-50 to-amber-100 dark:from-indigo-900 dark:to-zinc-900 dark:bg-gray-900 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
          Figma Designs
        </h2>

        {/* Cards Grid Centered */}
        {/* Grid container - center the cards */}
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl w-full">
          {figmaDesigns.map((design, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(design.full)}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer w-full sm:w-[300px] md:w-[340px]"
            >
              <img
                src={design.thumbnail}
                alt={design.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {design.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {design.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Full Design"
              className="max-w-full max-h-[90vh] rounded-lg border border-white shadow-xl"
            />
          </div>
        )}
      </section>
    </div>
  );
}
