import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../Assets/notFound.jpg'
import UseTitle from '../../Hook/useTitle';

const NotFound = () => {
    UseTitle('404')
    return (
        <div>
             <div className='flex justify-center items-center min-h-screen'>
            <img style={{width:'30%'}} src={notFound} alt="" />
            <Link to='/' className=' text-decoration-none text-primary fs-3' >Go back to Home page</Link>
        </div>
        </div>
    );
};

export default NotFound;