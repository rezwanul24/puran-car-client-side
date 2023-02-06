import React from "react";
import "./Review.css";
const Review = () => {
  return (
    <div>
      <div className="mt-20 flex justify-center">
        <span className=" text-primary font-semibold text-4xl border-b-2 border-primary ">
          Reviews
        </span>
        <h1 className="text-2xl ">See What Are The People Saying About Us</h1>
      </div>
      <div
        title="Reviews"
        comment="See What Are The Patients
            Saying About me"
      />

      <div className="flex">
        <div className="comments flex justify-center">
          This is the best car selling market.
        </div>

        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Puran Car</h1>
            <p className="py-6">
              Puran car is best market place for buy used car as low price good
              quality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
