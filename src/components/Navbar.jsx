import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { FaDownload } from "react-icons/fa";
import { HardDriveDownload } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  //dark mode toggle function
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDark = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.theme = "light";
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.theme = "dark";
      setIsDark(true);
    }
  };

  return (
    <nav className="w-full transition-colors duration-500 transition-ease-in-out">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex logo justify-start font-bold text-black text-2xl dark:text-white"> 
          <h1> {"</>"} MIKE</h1>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base text-gray-800 dark:text-gray-100 font-medium">
          <li>
            <a className="relative group inline-block px-1 pt-2 font-semibold">
              Home
              <span className="absolute rounded left-0 -bottom-0.5 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="relative group inline-block px-1 pt-2 font-semibold"
            >
              About
              <span className="absolute rounded left-0 -bottom-0.5 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#capstone"
              className="relative group inline-block px-1 pt-2 font-semibold"
            >
              Projects
              <span className="absolute rounded left-0 -bottom-0.5 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="flex items-center gap-2 pt-2">
            <label
              htmlFor="darkModeSwitch"
              className="relative inline-flex items-center cursor-pointer"
            >
              <input
                id="darkModeSwitch"
                type="checkbox"
                className="sr-only peer"
                checked={isDark}
                onChange={toggleDark}
              />
              <div className="w-11 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-300"></div>
              <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-transform duration-300 transform peer-checked:translate-x-full flex items-center justify-center text-xs">
                {isDark ? (
                  <Moon className="text-blue-700" size={12} />
                ) : (
                  <Sun className="text-yellow-500" size={12} />
                )}
              </div>
            </label>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-gray-800 dark:text-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-2 text-gray-800 dark:text-gray-100 font-medium">
            <li>
              <a
                href="#home"
                onClick={toggleMenu}
                className="hover:text-blue-500 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={toggleMenu}
                className="hover:text-blue-500 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={toggleMenu}
                className="hover:text-blue-500 transition"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={toggleMenu}
                className="hover:text-blue-500 transition"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
