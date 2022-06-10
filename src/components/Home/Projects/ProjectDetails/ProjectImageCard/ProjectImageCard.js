import React from 'react';

const ProjectImageCard = ({img}) => {
    return (
        <div className='border-8 rounded-xl'>
            <img src={img} className="w-full h-full"/>
            
        </div>
    );
};

export default ProjectImageCard;