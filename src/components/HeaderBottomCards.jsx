import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const HeaderBottomCards = () => {
  gsap.registerPlugin(ScrollTrigger);

  const cardsRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
      },
    });
    tl.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.7,
    });
  });

  return (
    <div
      ref={cardsRef}
      className="grid grid-cols-1 lg:grid-cols-3 gap-7 px-4 md:px-10 lg:px-24 mt-14 lg:mt-0 lg:absolute -bottom-48 w-full"
    >
      <div className="bg-white shadow-md py-5 rounded-xl flex flex-col items-center">
        <div>
          <img src="/images/header-bottom1.png" alt="" />
        </div>
        <div className="text-center mt-3">
          <h3 className="text-2xl text-[#282E33] font-semibold mb-2">
            property for buy
          </h3>
          <p className="text-[#4F575C]">1500+ variety of property available</p>
        </div>
      </div>
      <div className="bg-white shadow-md py-5  rounded-xl flex flex-col items-center">
        <div>
          <img src="/images/header-bottom2.png" alt="" />
        </div>
        <div className="text-center">
          <h3 className="text-2xl text-[#282E33] font-semibold mb-2">
            property for Rent
          </h3>
          <p className="text-[#4F575C]">1500+ variety of property available</p>
        </div>
      </div>
      <div className="bg-white shadow-md py-5  rounded-xl flex flex-col items-center">
        <div>
          <img src="/images/header-bottom3.png" alt="" />
        </div>
        <div className="text-center">
          <h3 className="text-2xl text-[#282E33] font-semibold mb-2">
            property for Sale
          </h3>
          <p className="text-[#4F575C]">1500+ variety of property available</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottomCards;
