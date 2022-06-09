import React from 'react';

const ProjectCard = ({ project }) => {
    const { des, id, img, name, shortDes, live } = project;
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} className="w-full h-60" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{shortDes}</p>
                <div class="mt-5">
                    <div className='flex justify-between'>
                        <a class="btn btn-primary btn-sm" href={live} target='_blank'>Live</a>
                        <button disabled class="btn btn-primary btn-sm">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;