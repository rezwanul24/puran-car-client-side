import React from "react";
import honda from "../../../Assets/honda-logo.png";
import BMW from "../../../Assets/bmw-logo.png";
import Toyota from "../../../Assets/toyota-logo.png";
import Tesla from "../../../Assets/tesla-logo.png";
import BrandData from "./BrandData";
const BrandCategories = () => {
  const brandCategory = [
    {
      _id: 1,
      brandName: "Honda",
      img: honda,
      // amount:4
    },
    {
      _id: 2,
      brandName: "BMW",
      img: BMW,
      // amount:2
    },
    {
      _id: 3,
      brandName: "Toyota",
      img: Toyota,
      //amount:4
    },
    {
      _id: 4,
      brandName: "Tesla",
      img: Tesla,
      // amount:2
    },
  ];

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 w-11/12 lg:w-10/12 mx-auto my-20">
        {brandCategory.map(brand => (
          <BrandData key={brand.map} brand={brand}></BrandData>
        ))}
      </div>
    </div>
  );
};

export default BrandCategories;
