import React from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { PiQuotesThin } from "react-icons/pi";

const Testimonials = () => {
  return (
    <section className="bg-[#E6EFF6] py-20 overflow-hidden px-4 md:px-10 lg:px-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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

          <div className="relative mt-10 max-w-md">
            <div className="flex gap-7">
              <img
                src="/images/testimonial-img1.png"
                alt="Building"
                className="rounded-xl object-cover w-80"
              />
              <img src="/images/message-icon.png" alt="" className="h-16 mt-28"/>
            </div>

            <img
              src="/images/testimonial-img2.png"
              alt="House"
              className="absolute bottom-0 right-7 w-20 md:w-48 rounded-xl shadow-lg border-4 border-white"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="relative">
            {/* BIG QUOTE BACKGROUND */}
            <PiQuotesThin className="absolute text-[260px] text-[#005FA6]/5 -top-14 right-16 z-0" />

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
              <div className="flex justify-between items-center gap-4 mt-6">
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
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
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
