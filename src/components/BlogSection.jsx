import React, { useRef } from "react";
import blogs from "../data/blogData.json";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BlogSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRef = useRef();
  const headingRef = useRef();
  const sectionLeftRef = useRef();
  const sectionRightRef = useRef();

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
      .from(sectionLeftRef.current, {
        opacity: 0,
        x: -50,
        duration: 0.8,
      })
      .from(sectionRightRef.current, {
        opacity: 0,
        x: 50,
        duration: 0.8,
      });
  });

  return (
    <section ref={sectionRef} className="py-10 md:py-16 px-4 md:px-10 lg:px-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div ref={headingRef} className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Latest from Our Blog
          </h2>
          <p className="mt-3 max-w-lg mx-auto text-gray-500 text-sm">
            Stay informed with our expert insights and tips domok stands as a
            beacon the dynamic world of property transactions.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 flex flex-col-reverse lg:flex-row justify-between gap-16">
          {/* LEFT BLOG LIST */}
          <div ref={sectionLeftRef} className="space-y-10">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col md:flex-row md:items-center gap-4"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full md:w-36 rounded-lg object-cover"
                />

                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <img
                      src={blog.author_img}
                      className="w-5 h-5 rounded-full"
                      alt=""
                    />
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.category}</span>
                    <span>•</span>
                    <span>{blog.date}</span>
                  </div>

                  <h4 className="mt-2 font-medium leading-snug hover:text-blue-600 transition">
                    {blog.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT FEATURED BLOG */}
          <div ref={sectionRightRef}>
            <img
              src="/images/blog-img4.png"
              alt="blog image"
              className="rounded-xl w-full md:w-[70%] lg:w-[90%] object-cover"
            />

            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <img
                src="/images/blog-profile-icon.png"
                className="w-6 h-6 rounded-full"
                alt="profile icon"
              />
              <span>Emily</span>
              <span>•</span>
              <span>Apartment</span>
              <span>•</span>
              <span>Feb 02, 2024</span>
            </div>

            <h3 className="mt-3 text-xl font-semibold">
              Importance of Build quality of modern Real Estate.
            </h3>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button className="px-8 py-3 border border-[#005FA6] text-[#005FA6] rounded-full hover:bg-[#005FA6] hover:text-white transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
