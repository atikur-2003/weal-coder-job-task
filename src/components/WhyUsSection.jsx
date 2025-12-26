import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const WhyUsSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef();
  const headingRef = useRef();
  const headingCardRef = useRef();
  const sectionImgRef = useRef();
  const sectionContentRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
      },
    });

    tl.from(headingRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
    })
      .from(headingCardRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
      })
      .from(sectionImgRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
      })
      .from(sectionContentRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
      });
  });

  return (
    <div ref={sectionRef} className="px-4 md:px-10 lg:px-28 my-16 overflow-hidden">
      {/* section top title */}
      <div ref={headingRef} className="text-center">
        <h1 className="text-3xl md:text-4xl text-[#000F1A] font-medium">
          why choose us!
        </h1>
        <p className="max-w-xl mx-auto text-[#4F575C] mt-5">
          Integrity, expertise, and personalized service, Dom stands as a beacon
          of trust in the dynamic world of property transactions.
        </p>
      </div>

      {/* section top cards */}
      <div
        ref={headingCardRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14"
      >
        {/* card 1 */}
        <div className="flex flex-col items-center justify-center bg-[#E6EFF6] p-7 rounded-lg">
          <img src="/images/quality-icon.png" alt="" className="w-20" />
          <h3 className="text-[#282E33] text-xl font-medium mb-3">
            Exceptional Work Quality
          </h3>
          <p className="text-center text-[#4A4A4A]">
            Serenity Is Multi-Faceted Blockchains Base Energy Retailer For The
            People, Fo Renewable Energy Production.
          </p>
        </div>

        {/* card 2 */}
        <div className="flex flex-col items-center justify-center bg-[#E6EFF6] p-7 rounded-lg">
          <img src="/images/rocket-icon.png" alt="" className="w-20" />
          <h3>Result Oriented Projects</h3>
          <p className="text-center">
            Serenity Is Multi-Faceted Blockchains Base Energy Retailer For The
            People, Fo Renewable Energy Production.
          </p>
        </div>

        {/* card 3 */}
        <div className="flex flex-col items-center justify-center bg-[#E6EFF6] p-7 rounded-lg">
          <img src="/images/support-icon.png" alt="" className="w-20" />
          <h3>After Service Better Support</h3>
          <p className="text-center">
            Serenity Is Multi-Faceted Blockchains Base Energy Retailer For The
            People, Fo Renewable Energy Production.
          </p>
        </div>
      </div>

      {/* section content */}
      <div className="flex flex-col md:flex-row gap-10 lg:gap-28 items-center justify-between">
        <div ref={sectionImgRef} className="md:w-1/2">
          <img src="/images/building.png" alt="building" className="w-120" />
        </div>

        {/* section right content */}
        <div ref={sectionContentRef} className="md:w-1/2">
          <div className="grid grid-cols-2 gap-7 lg:gap-12">
            <div>
              <img src="/images/25+.png" alt="" className="w-20 lg:w-24" />
              <p className="mt-2 text-[#4F575C]">year of experience</p>
            </div>
            <div>
              <img src="/images/75k.png" alt="" className="w-20 lg:w-24" />
              <p className="mt-2 text-[#4F575C]">property collections</p>
            </div>
            <div>
              <img src="/images/20k+.png" alt="" className="w-20 lg:w-24" />
              <p className="mt-2 text-[#4F575C]">satisfied customers</p>
            </div>
            <div>
              <img src="/images/40+.png" alt="" className="w-20 lg:w-24" />
              <p className="mt-2 text-[#4F575C]">Awards Winning</p>
            </div>
          </div>

          {/*Contact Card */}
          <div className="relative w-full py-6 lg:py-12 max-w-md rounded-xl overflow-hidden mt-7">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/support-agent.png')",
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#005FA6] via-[#005FA6]/60 to-[#005FA6]/0" />

            {/* Content */}
            <div className="relative z-10 flex items-center gap-1 p-6">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <FaPhoneAlt className="text-white" />
              </div>

              <p className="text-white text-lg font-semibold tracking-wide">
                +1 264 00 22 11
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
