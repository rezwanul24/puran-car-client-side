import React from "react";
import banner from "../../../Assets/Luxury-Car-Transparent-Images.png";
const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Used Car you can take it</h1>
          <p className="py-6">
            Here are many of cars for sale. Our marketplace of used cars for
            sale easy a safe, cheap
          </p>
          <button className="btn">Getting Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
