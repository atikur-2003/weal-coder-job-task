import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FeaturedPropertyCard = ({ property }) => {
gsap.registerPlugin(ScrollTrigger);

  const { image, category, title, location, description, price } = property;

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
    <div
      ref={sectionRef}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="relative p-5 ">
        <div className="border-b border-[#D0DBE3] pb-5">
          <span className="absolute -top-3 bg-[#FC3D3D] text-white px-2 py-1 rounded-md text-xs">
            {category}
          </span>
          <div className="flex items-center gap-2 text-sm text-[#4F575C] mt-3">
            <img src="/images/location.png" alt="Location Icon" className="w-5" />
            {location}
          </div>
          <h3 className="text-2xl mt-2 font-semibold text-[#000F1A]">
            {title}
          </h3>

          <p className="text-gray-600 text-sm my-3 leading-relaxed">
            {description}
          </p>

          <span className="text-[#282E33] text-2xl font-semibold">{price}</span>
        </div>

        {/* card bottom feature section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-7 py-5">
          <div className="flex items-center gap-2">
            <img src="/images/bed-icon.png" alt="" />
            <p>5 Beds</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/bath-tub-icon.png" alt="" />
            <p>3 Baths</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/images/tape-icon.png" alt="" />
            <p>2,503 SqFt</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertyCard;
