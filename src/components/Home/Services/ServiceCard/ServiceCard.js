import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ServiceCard = ({ service }) => {
    const { name, icon, des } = service;
    return (
        <div class="card rounded-lg shadow-xl custom-background">
            <div class="card-body">
                <div className='mb-4'>
                    <span className='text-primary text-5xl'>
                        <FontAwesomeIcon icon={icon} />
                    </span>
                </div>
                <h2 class="card-title">{name}</h2>
                <p>{des}</p>

            </div>
        </div>
    );
};

export default ServiceCard;