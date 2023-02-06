import React from 'react';
import honda from '../../../Assets/honda.png';
import sujuki from '../../../Assets/suzuki.jpg';
import yamaha from '../../../Assets/yamaha.jpg';
import bajaj from '../../../Assets/bajaj.jpg';
import BrandData from './BrandData';
const BrandCategories = () => {
    const brandCategory=[
        {
            _id:1,
            brandName:'Honda',
            img:honda,
           // amount:4
        },
        {
            _id:2,
            brandName:'Suzuki',
            img:sujuki,
           // amount:2
        },
        {
            _id:3,
            brandName:'Yamaha',
            img:yamaha,
            //amount:4
        },
        {
            _id:4,
            brandName:'Bajaj',
            img:bajaj,
           // amount:2
        },
    ]

    return (
        <div className='mt-10'>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5 w-11/12 lg:w-10/12 mx-auto my-20'>
                {
                    brandCategory.map(brand=><BrandData
                    key={brand.map}
                    brand={brand}
                    ></BrandData>)
                }
            
        </div>
        </div>
    );
};

export default BrandCategories;