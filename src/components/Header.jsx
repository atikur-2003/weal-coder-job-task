// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import React from "react";
import { useRef } from "react";
import logo from "../../dist/images/navLogo.png";
import phone from "../../dist/images/phone.png";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { LuShoppingCart } from "react-icons/lu";

const Header = () => {
  const containerRef = useRef();
  const textRef = useRef();
  const cardsRef = useRef();

  //   useGSAP(
  //     () => {
  //       // Fade in and slide up main text
  //       gsap.fromTo(
  //         textRef.current,
  //         { opacity: 0, y: 50 },
  //         { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
  //       );

  //       // Stagger cards from bottom
  //       gsap.fromTo(
  //         cardsRef.current.children,
  //         { opacity: 0, y: 30 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.8,
  //           stagger: 0.2,
  //           delay: 0.5,
  //           ease: "power2.out",
  //         }
  //       );
  //     },
  //     { scope: containerRef }
  //   );

  return (
    <section
      ref={containerRef}
      className="relative min-h-162.5 overflow-hidden"
    >
      {/* Background Image right */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/header-bg-img.png')" }}
      />

      {/* left image */}
      <div
        className="absolute inset-0 h-full bg-cover w-[65%] bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/header-left-layer.png')" }}
      />

      {/* Content Container */}
      <div className="relative z-10 px-4 md:px-10 lg:px-20">
        {/* Navigation Bar */}
        <nav className="container py-6 flex items-center justify-between text-white">
          <div className="flex gap-12">
            <div className="flex items-center gap-3">
              <img src={logo} alt="logo" className="w-40" />
            </div>

            <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <li className="hover:text-orange-400 cursor-pointer">Home</li>
              <li className="hover:text-orange-400 cursor-pointer flex items-center gap-1">Pages <IoIosArrowDown/></li>
              <li className="hover:text-orange-400 cursor-pointer">About</li>
              <li className="hover:text-orange-400 cursor-pointer">Services</li>
              <li className="hover:text-orange-400 cursor-pointer">Property</li>
              <li className="hover:text-orange-400 cursor-pointer">News</li>
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative">
              <LuShoppingCart size={25} className="" />
              <span className="bg-white w-4 h-4 flex items-center justify-center p-1 rounded-full text-black absolute -right-1 -top-1">0</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2">
              <img src={phone} alt="phone logo" />
              <span className="hidden sm:inline text-black">+0231 23 21 23</span>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div 
        className="container mx-auto mt-16 md:mt-28" 
        ref={textRef}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Find Your Most <br /> Suitable Property
          </h1>
          <p className="text-white/90 mt-4 text-lg">
            The world of real estate, where you can embark on a journey to{" "}
            <br />
            discover your perfect lifestyle home.
          </p>

          {/* Search Bar */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Properties"
                className="px-8 py-4 rounded-full w-110 ml-2 text-[#787D80] bg-white outline-none"
              />
              <IoIosSearch
                size={20}
                className="absolute left-4 top-5 text-[#787D80]"
              />

              <button className="absolute right-2 top-2 bg-[#D95D00] hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition">
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
