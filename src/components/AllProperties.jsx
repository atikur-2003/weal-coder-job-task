import React, { useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import AllPropertyCard from "./AllPropertyCard";
import properties from "../data/allProperties.json";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const AllProperties = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef();
  const headingRef = useRef();
  const headingRightTextRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
      },
    });

    tl.from(headingRef.current, {
      opacity: 0,
      x: -50,
      duration: 0.8,
    }).from(headingRightTextRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.8,
    });
  });

  return (
    <div ref={sectionRef} className="px-4 md:px-10 lg:px-28 my-20 overflow-hidden">
      {/* section top */}
      <div className="flex flex-col lg:flex-row justify-between gap-14">
        <div ref={headingRef}>
          <h1 className="text-2xl md:text-4xl font-medium">
            Explore Our All Properties
          </h1>
          <div className="mt-5 space-x-1 md:space-x-3">
            <span className="bg-[#005FA6] text-white px-2 py-1 rounded-md text-xs">
              All Properties
            </span>
            <span className="text-[#223B4D] bg-[#E6EFF6] px-2 py-1 rounded-md text-xs">
              Sale
            </span>
            <span className="text-[#223B4D] bg-[#E6EFF6] px-2 py-1 rounded-md text-xs">
              Buy
            </span>
            <span className="text-[#223B4D] bg-[#E6EFF6] px-2 py-1 rounded-md text-xs">
              Rent
            </span>
            <span className="text-[#223B4D] bg-[#E6EFF6] px-2 py-1 rounded-md text-xs">
              Co-Living
            </span>
          </div>
        </div>

        {/* section to right content */}
        <div ref={headingRightTextRef}>
          <p className="max-w-lg md:max-w-none lg:max-w-lg mx-auto">
            With a commitment to integrity, expertise, and personalized service
            on dynamic world of property transactions.
          </p>
          {/* About More */}
          <button className="mt-4 inline-flex items-center gap-1 text-[#D95D00] font-medium">
            View All Properties
            <BsArrowUpRight className="text-lg bg-[#D95D00] text-white p-1 rounded-full" />
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
        {properties.map((property) => (
          <AllPropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
