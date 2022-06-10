import React, { useEffect, useState } from 'react';
import useProjects from '../../../hooks/useProjects';
import ProjectCard from './ProjectCard/ProjectCard';

const Projects = () => {

    const [allProjects] = useProjects()
    return (
        <div className='max-w-7xl mx-auto py-12 px-5'>

            <div>
                <h4 className='font-bold text-6xl text-center'>My Latest Project</h4>
                <p className='text-center mt-3'>These all are my leatest projects</p>
            </div>

            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4'>

                {
                    allProjects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }

            </div>

        </div>
    );
};

export default Projects;