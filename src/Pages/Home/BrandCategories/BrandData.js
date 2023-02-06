import React from 'react';
import { Link } from 'react-router-dom';

const BrandData = ({ brand }) => {
    const { brandName, img, amount } = brand;
    return (
        <div className="card  bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-[200px] w-[200px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{brandName}</h2>
                {/* <p>{amount} {amount?.length>1?'products':'product'} available</p> */}
                <div className="card-actions">
                    <Link to={`/category/${brandName}`} className="btn">See Products</Link>
                </div>
            </div>
        </div>

    );
};

export default BrandData;