import React from "react";
import { FaInstagram, FaLinkedinIn, FaGithub, FaTelegram } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ayushthapak6503/" target="_blank" title="Instagram" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ayush-thapak-b58a721ab/" target="_blank" title="LinkedIn" rel="noopener noreferrer">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://github.com/AyushThapak" target="_blank" title="GitHub" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://t.me/Ayush_Thapak" target="_blank" title="Telegram" rel="noopener noreferrer">
                <FaTelegram size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center"></div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
