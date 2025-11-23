import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Card = ({ d }) => {
    console.log(d)
    return (
        <div className="bg-base-100 rounded-2xl shadow-md p-6 md:p-8 mb-8 border border-base-300 card">

            <figure className='h-[300px]'>
                <img className='h-full w-full object-cover'
                    src={d?.image}
                    alt={d?.serviceName} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{d?.serviceName}</h2>


                <div className='flex gap-2'>
                    <p className='text-base font-semibold italic'>Price: {d?.price} USD</p>
                    <p className='text-base font-semibold italic flex items-center gap-1 '>Rating: {d?.rating} <FaStar className='text-yellow-500' />
                    </p>
                </div>
                <div className="card-actions justify-center mt-3">
                    <Link to='/serviceDetails' className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Card;