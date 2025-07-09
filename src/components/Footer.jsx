import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-white text-black p-5 dark:bg-gray-800 dark:text-gray-200 ">
      <aside>
        
        <p className="font-bold">Mike Aspa</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-2 -mt-5">
          <a href="https://www.facebook.com/mike.aspa.2024/" target="blank" className=" text-xl">
            <FaFacebook />
          </a>
          <a className="text-xl" href="https://www.instagram.com/aspamaykie/" target="blank">
            <FaInstagram />
          </a>
          <a className="text-xl" href="https://github.com/DevMike27" target="blank">
            <FaGithub />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
