import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProjectDes = ({proDes}) => {
    return (
        <div className='flex'>
            <span className='text-primary mr-2'>
                <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <p>{proDes}</p>

        </div>
    );
};

export default ProjectDes;