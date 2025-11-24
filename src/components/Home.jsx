import React from 'react';
import Swiper1 from './Swiper1';
import ServiceCards from './ServiceCards';
import { Link } from 'react-router';
import CareTips from './CareTips'
import ExpertVets from './ExpertVets';

const Home = () => {
    return (
        <div className='min-h-screen bg-base-200 p-2'>
            <Swiper1></Swiper1>
            <ServiceCards></ServiceCards>
            <div>

                <Link to='/services' className="btn btn-primary mb-10">View All</Link>

                <CareTips></CareTips>
                <ExpertVets></ExpertVets>
            </div>
        </div>
    );
};

export default Home;