import React from "react";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import properties from "../data/featuredProperties.json";

const FeaturedProperties = () => {
  return (
    <section className="py-16 lg:py-24 px-4 md:px-7 lg:px-14">
      <div className="bg-[#E6EFF6] rounded-xl lg:px-10 py-16">
        <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-10 flex justify-between items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#000F1A]">
            Featured Properties
          </h2>
          <p className="text-[#4F575C] mt-3">
            Explore our curated selection of top listings. solutions that <br /> align update with latest trends.
          </p>
          </div>
          <div>
            <button className="text-[#005FA6] font-semibold border border-[#005FA6] px-4 py-2 rounded-full hover:bg-[#005FA6] hover:text-white transition duration-300">All Featured Property</button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {properties.map((property) => (
            <FeaturedPropertyCard
              key={property.id}
              property={property}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
