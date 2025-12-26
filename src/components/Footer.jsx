import React from "react";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#000F1A] text-gray-300 px-4 md:px-10 lg:px-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
        {/* left side */}
        <div className="pt-20">
          <div className="flex flex-col md:flex-row gap-20">
            {/* logo + title */}
            <div className="space-y-7">
              <div className="flex items-center gap-2">
                <img src="/images/logo.png" alt="ProfEstate" className="w-36" />
              </div>

              <div className="mt-4 text-sm text-gray-400 leading-relaxed">
                <p className="text-lg text-white mb-3">Address</p>
                <p className="text-white">
                  Germany – 785 15h Street, Office <br />
                  478 Berlin, De 81566
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-5 ">
                <img src="/images/facebook.png" alt="" />
                <img src="/images/twitter.png" alt="" />
                <img src="/images/linkedIn.png" alt="" />
                <img src="/images/instagram.png" alt="" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Quick Link</h4>

              <div className="grid grid-cols-2 space-x-8 gap-6 text-sm">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Blog",
                  "Contact",
                  "Property",
                  "Team",
                  "F. A. Q.",
                  "Career",
                ].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="hover:text-white transition"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mt-10 lg:mt-32">
            <p className="text-xs text-gray-500 py-6">
              © 2024 Your Real Estate Company. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE – CONTACT FORM */}
        <div className="bg-[#011829] px-5 pt-16 pb-5">
          <h4 className="text-white text-2xl font-medium mb-6">Quick Contact Us</h4>

          <form className="space-y-7">
            <div className=" space-x-5">
              <input
                type="text"
                placeholder="Full Name"
                className="border-b border-white/10 p-3"
              />
              <input
                type="text"
                placeholder="Email / Phone"
                className="border-b border-white/10 p-3"
              />
            </div>

            <div className="border-b border-white/10">
              <input type="text" placeholder="Your Subject" className="p-3" />
            </div>

            <div className="border-b border-white/10">
              <textarea
                rows="3"
                placeholder="Message"
                className="p-3 resize-none"
              />
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition text-sm"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
