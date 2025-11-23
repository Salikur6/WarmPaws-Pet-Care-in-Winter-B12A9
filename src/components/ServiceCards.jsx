import { Link } from 'react-router';
import Card from './Card';
import useFetch from './useFetch';

const ServiceCards = () => {
    const {data, loading, error} = useFetch('/services.json')
    console.log(data)
    return (
       <div>
        <h2 className='text-3xl font-bold py-8'><span className='text-warning'>Premium</span> Pet Care</h2>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>

        {data.map(d =>
            <Card d={d}></Card>
        )}
           
        </div>
       
       </div>
    );
};

export default ServiceCards;