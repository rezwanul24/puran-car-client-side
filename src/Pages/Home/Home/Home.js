import React from 'react';
import UseTitle from '../../../Hook/useTitle';
import AdvertisedItems from '../AdvertisedItems/AdvertisedItems';
import Banner from '../Banner/Banner';
import BrandCategories from '../BrandCategories/BrandCategories';
import Review from '../Review/Review';

const Home = () => {
    UseTitle('Home');
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <AdvertisedItems></AdvertisedItems>
            <BrandCategories></BrandCategories>
            <Review></Review>
        </div>
    );
};

export default Home;