import gsap from "gsap";
import React, { useState } from "react";
import { useRef } from "react";
import phone from "../../dist/images/phone.png";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";
import { FaXmark } from "react-icons/fa6";
import { IoMenuSharp } from "react-icons/io5";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const textRef = useRef([]);
  const searchRef = useRef(null);
  const [menubar, setMenubar] = useState(false);

  // navbar Links
  const NavLinks = (
    <>
      <li
        onClick={() => setMenubar(!menubar)}
        className="hover:text-orange-400 cursor-pointer"
      >
        Home
      </li>
      <li
        onClick={() => setMenubar(!menubar)}
        className="hover:text-orange-400 cursor-pointer flex items-center gap-1"
      >
        Pages <IoIosArrowDown />
      </li>
      <li
        onClick={() => setMenubar(!menubar)}
        className="hover:text-orange-400 cursor-pointer"
      >
        About
      </li>
      <li
        onClick={() => setMenubar(!menubar)}
        className="hover:text-orange-400 cursor-pointer"
      >
        Services
      </li>
      <li
        onClick={() => setMenubar(!menubar)}
        className="hover:text-orange-400 cursor-pointer"
      >
        Property
      </li>
      <li
        onClick={() => setMenubar(!menubar)}
        className="hover:text-orange-400 cursor-pointer"
      >
        News
      </li>
    </>
  );

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.15,
    }).from(searchRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
    });
  }, []);

  return (
    <section className="relative min-h-162.5 overflow-hidden">
      {/* Background Image right */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/header-bg-img.png')" }}
      />

      {/* left image */}
      <div
        className="hidden lg:block absolute inset-0 h-full bg-cover w-[65%] bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/header-left-layer.png')" }}
      />

      {/* Content Container */}
      <div className="relative z-10 px-4 md:px-10 lg:px-24">
        {/* Navigation Bar */}
        <nav className="container py-6  text-white">
          <div className="flex items-center justify-between">
            <div className="flex gap-12">
              <div className="flex gap-3 items-center">
                {/* menubar for mobile screen */}
                <div className="text-white lg:hidden">
                  {menubar ? (
                    <FaXmark onClick={() => setMenubar(!menubar)} size={25} />
                  ) : (
                    <IoMenuSharp
                      onClick={() => setMenubar(!menubar)}
                      size={25}
                    />
                  )}
                </div>

                {/* logo */}
                <div className="flex items-center gap-3">
                  <img
                    src="/images/logo.png"
                    alt="logo"
                    className="w-36 md:w-42"
                  />
                </div>
              </div>

              {/* desktop navbar */}
              <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
                {NavLinks}
              </ul>
            </div>

            {/* nav right cart and contact */}
            <div className="flex items-center gap-3 md:gap-6">
              <div className="relative">
                <LuShoppingCart size={25} className="" />
                <span className="bg-white w-4 h-4 flex items-center justify-center p-1 rounded-full text-black absolute -right-1 -top-1">
                  0
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-full px-2 md:px-4 py-1 md:py-2">
                <img src={phone} alt="phone logo" />
                <span className="hidden sm:inline text-black">
                  +0231 23 21 23
                </span>
              </div>
            </div>
          </div>

          {/* mobile navbar */}
          {menubar && (
            <div className="lg:hidden mt-2 bg-gray-900/95 backdrop-blur-md border-t rounded-lg border-gray-700/50">
              <div className="flex flex-col px-4 pt-4 pb-7 space-y-4 list-none">
                {NavLinks}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Content */}
        <div className="container mx-auto mt-16 md:mt-28">
          <div ref={textRef}>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Find Your Most <br /> Suitable Property
            </h1>
            <p className="text-white/90 mt-4 text-lg">
              The world of real estate, where you can embark on a journey to{" "}
              <br />
              discover your perfect lifestyle home.
            </p>
          </div>

          {/* Search Bar */}
          <div
            ref={searchRef}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search Properties"
                className="px-8 py-4 rounded-full w-72 md:w-110 ml-2 text-[#787D80] bg-white outline-none"
              />
              <IoIosSearch
                size={20}
                className="absolute left-4 top-5 text-[#787D80]"
              />

              <button className="absolute right-1 md:right-2 top-2 bg-[#D95D00] hover:bg-orange-600 text-white px-4 md:px-6 py-2 rounded-full font-medium transition">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
