import React from 'react';
import './Review.css';
const Review = () => {
    return (
        <div>
            <div className='mt-20 flex justify-center'>
            <span className=' text-primary font-semibold text-4xl border-b-2 border-primary '>Reviews</span>
            <h1 className='text-2xl '>See What Are The People Saying About Us</h1>
        </div>
            <div
                title='Reviews'
                comment='See What Are The Patients
            Saying About me'
            />

            <div className="flex">
                <div className="comments flex justify-center">
                    This is the best selling site.
                </div>
                <div className="profile">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.pinimg.com/564x/06/13/af/0613af216fe8d297e2e961abfb0d8bf2.jpg" alt='' />
                        </div>
                    </div>

                    {/* <img src='https://i.pinimg.com/originals/47/b1/47/47b147b6d88fea4bcd32344251784b24.jpg' alt="" /> */}
                    <a href="#"></a>
                    <span className='mt-2'>Mr. Bean</span>
                </div>
            </div>

            
        </div>
    );
};

export default Review;