import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

const ContactSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef();
  const headingRef = useRef();

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
    });
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-105 overflow-hidden mb-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-105">
        {/* LEFT BLUE PANEL */}
        <div className="pl-4 md:pl-10 lg:pl-28 bg-[#00508C]">
          {/* circles */}
          <div className="absolute -left-20 top-36 w-36 h-36 border border-white/5 rounded-full z-10" />
          <div className="absolute -left-32 top-20 w-64 h-64 border border-white/5 rounded-full z-10" />
          <div className="absolute -left-48 top-5 w-96 h-96 border border-white/5 rounded-full z-10" />
          <div className="absolute -left-56 -top-7 w-120 h-120 border border-white/5 rounded-full z-10" />

          {/* content */}
          <div
            ref={headingRef}
            className="relative space-y-5 py-20 z-10 max-w-lg"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Start Your Real-Estate <br /> Journey Here
            </h2>

            <p className="mt-4 text-white/80">
              Call or text today, we are here to help can make your visitors
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button className="bg-[#D95D00] text-white px-6 py-3 rounded-full">
                Let’s Talk Us
              </button>
              <div className="flex items-center gap-2 text-white">
                <img src="/images/phone2.png" alt="phone image" />
                <p>+0231 23 21 23</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE PANEL */}
        <div
          className="bg-cover bg-center min-h-75 lg:min-h-full"
          style={{
            backgroundImage: "url('/images/cta-img.png')",
          }}
        />
      </div>
      {/* blue angled layer  */}
      <div
        className="hidden lg:block absolute top-0 left-0 w-[58%] h-full bg-[#00508C] text-white px-8 py-16"
        style={{
          clipPath: "polygon(0 0, 100% 0, 90% 100%, 0% 100%)",
        }}
      ></div>
    </section>
  );
};

export default ContactSection;
