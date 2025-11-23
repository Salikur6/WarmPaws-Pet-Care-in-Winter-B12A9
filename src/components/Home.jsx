import React from 'react';
import Swiper1 from './Swiper1';
import ServiceCards from './ServiceCards';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className='min-h-screen bg-base-200 p-2'>
            <Swiper1></Swiper1>
            <ServiceCards></ServiceCards>
             <div>
            
         <Link to='/services' className="btn btn-primary mb-10">View All</Link>
        </div>
        </div>
    );
};

export default Home;