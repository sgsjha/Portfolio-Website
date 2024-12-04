import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black-100 text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo Section */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Sarthak Jha</h1>
            <p className="mt-2 text-sm">
              © 2024 Sarthak Jha. All Rights Reserved.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/sarthak.jhaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-200 transition duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:sarthakjhaa11@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-200 transition duration-200"
              >
                <MdMail />
              </a>
              <a
                href="https://www.linkedin.com/in/sarthak-jhaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-200 transition duration-200"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/sgsjha"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-200 transition duration-200"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
