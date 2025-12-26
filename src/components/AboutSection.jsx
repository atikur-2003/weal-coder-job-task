import React,{useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsArrowUpRight } from "react-icons/bs";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useGSAP } from "@gsap/react";

const AboutSection = () => {
  
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef();
  const headingRef = useRef();
  const imgRef = useRef();
  const rightCardRef = useRef();
  const rightDescRef = useRef();
  const featureRefs = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 90%",
      },
    });

    tl.from(headingRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
    })
      .from(
        imgRef.current,
        {
          opacity: 0,
          scale: 0.80,
          duration: 0.8,
        },
      )
      .from(
        rightCardRef.current,
        {
          opacity: 0,
          x: 50,
          duration: 0.6,
        },
      )
      .from(
        rightDescRef.current,
        {
          opacity: 0,
          x: 50,
          duration: 0.6,
        },
      )
      .from(
        featureRefs.current,
        {
          opacity: 0,
          y: 50,
          duration: 0.8,
        },
      );
  });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white mt-0 lg:mt-24 pt-16 lg:pt-24 px-4 md:px-10 lg:px-24"
    >
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        {/* LEFT SIDE */}
        <div>
          <h2
            ref={headingRef}
            className="text-2xl md:text-4xl font-semibold text-gray-900 leading-snug"
          >
            About our profiEstate <br /> Company
          </h2>

          {/* Images */}
          <div ref={imgRef} className="relative mt-10 max-w-md">
            <img
              
              src="/images/about-img1.png"
              alt="Building"
              className="rounded-xl object-cover w-50 md:w-100"
            />

            <img
              src="/images/about-img2.png"
              alt="House"
              className="absolute bottom-0 right-6 md:-right-16 w-28 md:w-52 rounded-xl shadow-lg border-4 border-white"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-10">
          {/* Experience Card */}
          <div ref={rightCardRef} className="border border-[#DDDFE0] rounded-xl p-6 max-w-md">
            <div  className="flex justify-between">
              <div className="flex gap-3">
                <img src="/images/25.png" alt="" className="w-16 md:w-24" />
                <img src="/images/+.png" alt="" className=" h-10" />
              </div>
              <img src="/images/star-icon.png" alt="" className="h-12" />
            </div>
            <div>
              <p className="text-[#4F575C] mt-4 text-xl md:text-2xl font-semibold">
                Years of Real Estate Experience
              </p>
            </div>
          </div>

          <div ref={rightDescRef} className="lg:-ml-10">
            {/* Description */}
            <p  className="text-gray-600 mt-6 max-w-lg leading-relaxed">
              Our agency takes a collaborative approach, working closely with
              you understand your business how to grow up, craft personalized
              marketing solutions that align with vision, stay update with
              latest trends.
            </p>

            {/* About More */}
            <button className="mt-4 inline-flex items-center gap-1 text-[#D95D00] font-medium">
              About More
              <BsArrowUpRight className="text-lg bg-[#D95D00] text-white p-1 rounded-full" />
            </button>
          </div>

          {/* Features */}
          <div ref={featureRefs} className="mt-10 space-y-8">
            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <HiOutlineBadgeCheck className="text-2xl text-gray-800" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">High Standard</h4>
                <p className="text-gray-600 text-sm mt-1">
                  Lorem ipsum dolor sit amet consectetur. Malesua vehicula netu
                  urna in elit amet.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                <FaRegHandshake className="text-2xl text-gray-800" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Ease of Communication
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  Lorem ipsum dolor sit amet consectetur. Malesua vehicula netu
                  urna in elit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
