import Navbar from "../components/Navbar";
import Typewriter from "typewriter-effect";
import { HardDriveDownload } from "lucide-react";
import img from "../assets/img-pfp.png";
import { FaFacebookF } from "react-icons/fa";
import login from "../assets/login.png";
import dashboard from "../assets/dashboard.png";
import { FaUniversity } from "react-icons/fa";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import emailjs from "@emailjs/browser";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
  FaCuttlefish,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiMysql,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si";

const Home = () => {
  const skillCategories = [
    { icon: <FaHtml5 />, label: "HTML", color: "text-orange-600" },
    { icon: <FaCss3Alt />, label: "CSS", color: "text-blue-500" },
    { icon: <FaJs />, label: "JavaScript", color: "text-yellow-400" },
    { icon: <FaReact />, label: "ReactJS", color: "text-cyan-400" },
    { icon: <SiTailwindcss />, label: "Tailwind", color: "text-sky-500" },
    { icon: <SiVite />, label: "Vite", color: "text-purple-500" },
    { icon: <FaNodeJs />, label: "NodeJS", color: "text-green-500" },
    { icon: <SiMysql />, label: "MySQL", color: "text-blue-700" },
    { icon: <SiMongodb />, label: "MongoDB", color: "text-green-700" },
    { icon: <FaJava />, label: "Java", color: "text-red-600" },
    { icon: <FaCuttlefish />, label: "C++", color: "text-indigo-500" },
    { icon: <SiAdobephotoshop />, label: "Photoshop", color: "text-blue-800" },
    {
      icon: <SiAdobeillustrator />,
      label: "Illustrator",
      color: "text-orange-400",
    },
  ];

  // EmailJS setup
  const [isSending, setIsSending] = useState(false);
  const [lastSent, setLastSent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check limiter: only allow every 60 seconds
    const now = Date.now();
    if (lastSent && now - lastSent < 60000) {
      alert("Please wait at least 1 minute before sending again.");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setLastSent(Date.now()); // set time after sending
          e.target.reset();
        },
        (error) => {
          console.error("Email error:", error);
          alert("Failed to send message.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div>
      {/* Home Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-indigo-900 dark:to-zinc-900 transition-colors duration-500 transition-ease-in-out overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-pink-600 opacity-30 rounded-full filter blur-3xl dark:hidden animate-pulse"></div>
        <div className="absolute top-40 -right-24 w-72 h-72 bg-blue-500 opacity-30 rounded-full filter blur-3xl dark:hidden animate-pulse delay-100"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-200 opacity-20 rounded-full filter blur-2xl dark:hidden animate-pulse delay-200"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        <Navbar />

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center relative z-10">
          <h1 className="font-bold text-gray-900 dark:text-white text-[25px] sm:text-[30px] md:text-[45px] lg:text-[96px] xl:text-[90px]">
            <Typewriter
              options={{
                strings: [
                  `Hello, I'm <span class='bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent'>Mike Aspa</span>`,
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                pauseFor: 1000,
                html: true,
              }}
            />
          </h1>

          <span className="p-5 font-regular text-gray-700 dark:text-gray-300 text-[13px] sm:text-[17px] md:text-[14px] lg:text-[28px] xl:text-[18px]">
            A Front-End Web Developer based in the <br />
            Philippines, I will help you create your website.
          </span>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="#about"
              className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm sm:text-sm md:text-lg xl:text-md"
            >
              About Me
            </a>
            <a
              href="Mike_Aspa_IT_CV.pdf"
              target="blank"
              className="flex items-center gap-2 bg-violet-600 text-white px-5 py-3 rounded-lg hover:bg-violet-700 transition-colors duration-500 text-sm sm:text-base md:text-lg"
            >
              Download CV
              <HardDriveDownload size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* END OF HOME SECTION */}

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen bg-gradient-to-tr from-yellow-50 to-amber-100 dark:from-indigo-900 dark:to-zinc-900 transition-colors duration-500 ease-in-out flex items-center justify-center px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] m-5 xl:m-12 rounded-md max-w-7xl w-full bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md shadow-xl overflow-hidden">
          {/* Left Content (Wider) */}
          <div className="p-8 sm:p-12 text-gray-800 dark:text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>

            <p className="text-base leading-relaxed">
              My name is <strong>Mike Franz Aspa</strong>, 24 years old from the
              Philippines. I recently graduated from Bestlink College of The
              Philippines with a Bachelor of Science in Information Technology.
              I aspire to become a passionate and skilled Front-End Web
              Developer.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Educational Background
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-base">
                <li>
                  <a href="#" className="hover:underline">
                    Bestlink College of The Philippines — B.S. in Information
                    Technology (2019–2025)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Eclaro Academy — Information Communication Technology
                    (2027–2019)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Image (Full Height) */}
          <div className="relative h-full w-full hidden md:block">
            <img
              src={img}
              alt="Portfolio Preview"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* end of about section */}

      {/* Technologies Section */}
      <section className="p-5 sm:p-5 text-xs sm:text:sm md:text-md xl:text-lg bg-white min-h-60 flex flex-col bg-gradient-to-br from-yellow-50 to-amber-100 dark:from-indigo-900 dark:to-zinc-900 transition-colors duration-500 transition-ease-in-out">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-12">
            Technologies I Use
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-6">
            {skillCategories.map((skillCategories, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/80 dark:bg-gray-800/70 backdrop-blur-md border border-gray-300/30 dark:border-gray-700/40 shadow-sm hover:shadow-md hover:scale-105 transition duration-300"
              >
                <div className={`text-4xl mb-2 ${skillCategories.color}`}>
                  {skillCategories.icon}
                </div>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                  {skillCategories.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end of technologies section */}

      <section
        id="capstone"
        className="py-20 bg-gradient-to-tr from-yellow-50 to-amber-100 dark:from-indigo-900 dark:to-zinc-900 text-gray-900 dark:text-white"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Capstone Project
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Human Resources Management System
              </h3>
              <p className="text-base leading-relaxed">
                A web-based HR management system developed as our final year
                capstone project. It streamlines HR processes such as employee
                records, attendance tracking, onboarding, promotions, and
                predictive analytics.
              </p>

              <div>
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc pl-5">
                  <li>Two Factor Login Verification</li>
                  <li>Face recognition for time-in and time-out</li>
                  <li>
                    Promotion workflow and attrition risk prediction using
                    Tensorflow
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold p-4">Tech Stack:</h4>

                <div className="flex flex-wrap gap-3 px-4">
                  <span className="bg-white shadow-lg px-4 py-2 rounded-full text-black dark:bg-white">
                    MERN Stack (MongoDB, Express, React, Node.js)
                  </span>
                  <span className="bg-white shadow-lg px-4 py-2 rounded-full text-black dark:bg-white">
                    TailwindCSS
                  </span>
                  <span className="bg-white shadow-lg px-4 py-2 rounded-full text-black dark:bg-white">
                    Vite + React
                  </span>
                  <span className="bg-white shadow-lg px-4 py-2 rounded-full text-black dark:bg-white">
                    Tensorflow.js
                  </span>
                </div>
              </div>
            </div>

            {/* Image / Preview */}
            <div className="grid grid-row-1 md:grid-row-2 gap-6 mt-8">
              {/* Login Image */}
              <div className="relative">
                <div className="absolute w-40 h-40 bg-orange-300 rounded-full blur-2xl opacity-30 -top-5 -left-5 z-0"></div>
                <img
                  src={login}
                  alt="Login Page"
                  className="relative z-10 rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
                />
                <p className="text-center mt-2 text-sm text-gray-700 dark:text-gray-300">
                  Login Page
                </p>
              </div>

              {/* Dashboard Image */}
              <div className="relative">
                <div className="absolute w-40 h-40 bg-purple-300 rounded-full blur-2xl opacity-30 -top-5 -right-5 z-0"></div>
                <img
                  src={dashboard}
                  alt="Dashboard"
                  className="relative z-10 rounded-xl shadow-xl hover:scale-105 transition-transform duration-500"
                />
                <p className="text-center mt-2 text-sm text-gray-700 dark:text-gray-300">
                  Dashboard View
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end of capstone project section */}

      {/* Back to Top Button */}
      <section
        id="contact"
        className="mb-3 py-20 bg-gradient-to-tl from-amber-100 to-yellow-50 dark:from-zinc-900 dark:to-zinc-800"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm open to freelance opportunities, collaborations, or just a
              friendly chat. Reach out through the form and I’ll get back to you
              soon.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                  Email
                </h4>
                <p className=" dark:text-blue-400">andyblack6016@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 dark:text-gray-300">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Quezon City, Philippines
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl p-10 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
    </div>
  );
};

export default Home;
