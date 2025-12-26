import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { PiQuotesThin } from "react-icons/pi";

const Testimonials = () => {

   gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef();
  const headingRef = useRef();
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
      y: 50,
      duration: 0.8,
    })
    .from(sectionImgRef.current, {
      opacity: 0,
      scale: 0.80,
      duration: 0.8,
    })
    .from(sectionContentRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.8,
    })
  });

  return (
    <section ref={sectionRef} className="bg-[#E6EFF6] py-20 overflow-hidden px-4 md:px-10 lg:px-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            What People Saying Us?
          </h2>
          <p className="text-gray-600 mt-3">
            Whether you’re buying, selling, or investing, let us be your trusted
            partner. Contact us now to get started!
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGES */}

          <div ref={sectionImgRef} className="relative md:mt-10 max-w-md">
            <div className="flex gap-7">
              <img
                src="/images/testimonial-img1.png"
                alt="Building"
                className="rounded-xl object-cover w-50 md:w-80"
              />
              <img
                src="/images/message-icon.png"
                alt=""
                className="hidden md:block h-16 mt-28"
              />
            </div>

            <img
              src="/images/testimonial-img2.png"
              alt="House"
              className="absolute bottom-0 right-7 w-28 md:w-48 rounded-xl shadow-lg border-4 border-white"
            />
          </div>

          {/* RIGHT TEXT */}
          <div ref={sectionContentRef} className="relative">
            <PiQuotesThin className="absolute text-[260px] text-[#005FA6]/5 md:-top-10 md:right-36 lg:right-20 z-0" />

            {/* CONTENT */}
            <div className="relative z-10 bg-transparent max-w-xl">
              <h3 className="text-xl font-semibold text-gray-900">
                “Best Quality Services”
              </h3>

              <p className="text-gray-600 mt-4 leading-relaxed">
                Easy to use, intuitive and fluid interface, support always
                willing to problems that may appear. A countdown timer can make
                your visitors engage discount contribute to the purchasing
                process.
              </p>

              {/* User */}
              <div className="flex flex-col md:flex-row justify-between  gap-4 mt-6">
                <div className="flex items-center gap-5">
                  <img
                    src="/images/user-profile.png"
                    className="w-12 h-12 rounded-full object-cover"
                    alt="user"
                  />
                  <div>
                    <p className="font-medium text-gray-900">Nancy Betty</p>
                    <p className="text-sm text-gray-500">Property Owner</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mt-4 text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex gap-3 mt-6">
                <button className="w-10 h-10 text-[#005FA6] rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                  <HiArrowLeft />
                </button>
                <button className="w-10 h-10 text-[#005FA6] rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                  <HiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
