import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    const { des, id, img, name, shortDes, live, technology } = project;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} className="w-full h-60" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{shortDes}</p>
                <div className="mt-5">
                    <div className='mb-4'>
                        {
                            technology.map((tech, index) => <div key={index} class={`badge m-1 ${index%2 === 0 ? "bg-green-800" : "bg-blue-800"} border-0 text-white`}>{tech}</div>)
                        }
                    </div>
                    <div className='flex justify-between'>
                        <a className="btn btn-accent btn-xs font-semibold" href={live} target='_blank'>Live</a>

                        <Link className='btn btn-xs' to={`/project/${id}`}>Details</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;