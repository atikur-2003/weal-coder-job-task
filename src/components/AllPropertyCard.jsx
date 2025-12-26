import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import locationIcon from "../../dist/images/location.png";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const AllPropertyCard = ({ property }) => {
  gsap.registerPlugin(ScrollTrigger);
  
  const { image, category, title, location, price } = property;

  const sectionRef = useRef();

  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
      },
    });

    tl.from(sectionRef.current, {
      opacity: 0,
      scale: 0.80,
      duration: 0.8,
    });
  });

  return (
    <div ref={sectionRef} className="relative bg-white border border-[#D0DBE3] rounded-xl p-6 flex flex-col md:flex-row gap-6 overflow-visible">
      {/* Image */}
      <div className="md:absolute left-6 -bottom-6 w-44">
        <div className="relative">
          <img
            src={image}
            alt="Property"
            className="rounded-xl object-cover shadow-lg"
          />

          {/* Sale badge */}
          <span className="absolute top-3 left-3 bg-[#FC3D3D] text-white text-xs px-3 py-1 rounded-md">
            {category}
          </span>
        </div>
      </div>

      {/* Spacer for image */}
      <div className="hidden md:block w-40 shrink-0" />

      {/* Content */}
      <div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

        <div className="flex items-center gap-2 text-sm text-[#4F575C] mt-3">
          <img src={locationIcon} alt="Location Icon" className="w-5" />
          {location}
        </div>

        <p className="text-2xl font-semibold text-gray-900 mt-4">{price}</p>

        <hr className="my-4 text-[#D0DBE3]" />

        <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <FaBed />5 beds
          </div>
          <div className="flex items-center gap-2">
            <FaBath />3 baths
          </div>
          <div className="flex items-center gap-2">
            <FaRulerCombined />
            2,503 sqft
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPropertyCard;
