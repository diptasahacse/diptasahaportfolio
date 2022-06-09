import React from 'react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Project 1",
            img: 'https://i.ibb.co/VYhh93J/banner.jpg'
        }
    ]
    return (
        <div className='max-w-7xl mx-auto py-10'>

            <div>
                <h4 className='font-bold text-6xl text-center'>My Latest Project</h4>
                <p className='text-center mt-3'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            </div>

            <div className='mt-5'>

            </div>
            
        </div>
    );
};

export default Projects;