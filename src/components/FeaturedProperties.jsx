import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import properties from "../data/featuredProperties.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FeaturedProperties = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef();
  const headingRef = useRef();
  const headingBtnRef = useRef();
  

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
    }).from(headingBtnRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.8,
    })
  });

  return (
    <section ref={sectionRef} className="pt-16 lg:pt-24 px-4 md:px-7 lg:px-14 overflow-hidden">
      <div className="bg-[#E6EFF6] rounded-xl md:px-5 lg:px-10 py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-10 flex flex-col md:flex-row justify-between md:items-center gap-5">
            <div ref={headingRef}>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#000F1A]">
                Featured Properties
              </h2>
              <p className="text-[#4F575C] mt-3">
                Explore our curated selection of top listings. solutions that{" "}
                <br /> align update with latest trends.
              </p>
            </div>
            <div ref={headingBtnRef}>
              <button className="text-[#005FA6] font-semibold border border-[#005FA6] px-4 py-2 rounded-full hover:bg-[#005FA6] hover:text-white transition duration-300">
                All Featured Property
              </button>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {properties.map((property) => (
              <FeaturedPropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
