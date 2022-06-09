import React from 'react';

const ProjectCard = ({ project }) => {
    const { des, id, img, name, shortDes } = project;
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{shortDes}</p>
                <div class="card-actions justify-end mt-5">
                    <button class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;