import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
// import aboutImg1 from "../../dist/images/about-img1.png";
// import aboutImg2 from "../../dist/images/about-img2.png";

// const AboutSection = () => {
//   return (
//     <div className="mt-40 px-4 md:px-10 lg:px-20">
//       <div className="flex justify-between">
//         <div>
//         <div>
//           <h1>About our profiEstate Company</h1>
//         </div>
//         <div className="relative">
//           <img src={aboutImg1} alt="About section image1" className="lg:w-90"/>
//           <img
//             src={aboutImg2}
//             alt="About section image2"
//             className="absolute -bottom-2 -right-28 lg:w-50"
//           />
//         </div>
//       </div>
//       <div>
//         <div>
//             <h1>25</h1>
//             <span>+</span>
//             <p>years of real estate experience</p>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import { FaStar, FaRegHandshake } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const AboutSection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
              About our profiEstate <br /> Company
            </h2>

            {/* Images */}
            <div className="relative mt-10 max-w-md">
              <img
                src="/images/about-img1.png"
                alt="Building"
                className="rounded-xl object-cover w-100"
              />

              <img
                src="/images/about-img2.png"
                alt="House"
                className="absolute bottom-0 -right-14 w-40 md:w-52 rounded-xl shadow-lg border-4 border-white"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-7">
            {/* Experience Card */}
            <div className="border border-[#DDDFE0] rounded-xl p-6 max-w-md">
              <div className="flex justify-between">
                <div className="flex gap-3">
                    <img src="/images/25.png" alt="" className="w-24"/>
                    <img src="/images/+.png" alt="" className=" h-10"/>
                </div>
                <img src="/images/star-icon.png" alt="" className="h-12"/>
              </div>
              <div>
                <p className="text-[#4F575C] mt-4 text-2xl font-semibold">
                  Years of Real Estate Experience
                </p>
              </div>
            </div>

            <div className="-ml-10">
              {/* Description */}
              <p className="text-gray-600 mt-6 max-w-lg leading-relaxed">
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
            <div className="mt-8 space-y-6">
              {/* Item 1 */}
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                  <HiOutlineBadgeCheck className="text-2xl text-gray-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">High Standard</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    Lorem ipsum dolor sit amet consectetur. Malesua vehicula
                    netu urna in elit amet.
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
                    Lorem ipsum dolor sit amet consectetur. Malesua vehicula
                    netu urna in elit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
