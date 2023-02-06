import React from 'react';
import banner from '../../../Assets/bannerImg.png'
const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} className="rounded-lg lg:w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Used bike for sell</h1>
                    <p className="py-6">Shop and browse through thousands of bikes for sale. All this are second hand. Our marketplace of used bikes for sale offers a safe, secure, and easy experience that is unmatched</p>
                    <button className="btn">Getting Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;