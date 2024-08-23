import React from "react";

const Banner = ({ image, title, subtitle, link }) => {
  return (
    <div className="container">
      <div className="bg-[#f9f9f9] grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        
        {/* Banner image section */}
        <div>
          <img
            src={image}
            alt=" "
            className="w-[300px] md:max-w-[400px] xl:min-w-[600px] h-full object-cover"
          />
        </div>

        {/* Banner text section */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
          <p className="font-bold text-2xl lg:text-4xl capitalize font-playfair">
            {title}
          </p>
          <p>{subtitle}</p>
          <div className="flex justify-center md:justify-start">
            <button className="primary-btn">Explore more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
