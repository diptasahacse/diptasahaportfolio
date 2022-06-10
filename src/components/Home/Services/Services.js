
import React from 'react';
import { faCode, faDatabase, faGlobe } from '@fortawesome/free-solid-svg-icons';
import ServiceCard from './ServiceCard/ServiceCard';
const Services = () => {


    const services = [
        {
            name: "Font End Development",
            icon: faGlobe,
            des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
        },
        {
            name: "Back End Development",
            icon: faDatabase,
            des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
        },
        {
            name: "Full Stack Development",
            icon: faCode,
            des: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered."
        }
    ]



    return (
        <div className='max-w-7xl mx-auto py-12 px-5' id='all-services'>
            <div>
                <h4 className='font-bold text-6xl text-center'>Services</h4>
                <p className='text-center mt-3'>These all are services i provide.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                
                {
                    services.map((service, index) => <ServiceCard key={index} service={service}></ServiceCard>)
                }




            </div>
        </div>
    );
};

export default Services;