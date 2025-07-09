import React from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { useState, useEffect } from "react";

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      // Show button when near bottom (within 300px)
      if (scrollY + windowHeight >= bodyHeight - 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-blue-600 text-white shadow-lg transition-all duration-500 ease-in-out hover:bg-blue-700
        ${
          showButton
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
        >
          <MdOutlineKeyboardArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
