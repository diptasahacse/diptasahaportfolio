import React, { useState } from 'react';
import {
  useParams,
} from "react-router-dom";
import useProject from '../../../../hooks/useProject';
import ProjectDes from './ProjectDes/ProjectDes';
import ProjectImageCard from './ProjectImageCard/ProjectImageCard';


const ProjectDetails = () => {
  const { projectId } = useParams();

  const { projectDetails } = useProject(projectId)
  console.log(projectDetails)
  return (
    <div className='max-w-7xl mx-auto py-12 px-5'>
      <div className='mb-10'>
        <h4 className='font-bold text-6xl text-center'>Project Details</h4>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
          <img className='rounded-xl w-full' src={projectDetails?.img} />
        </div>
        <div>
          <h2 className='text-2xl font-semibold text-primary'>Project Name: <span className='text-gray-600 text-xl'>{projectDetails?.name}</span> </h2>
          <p className='mt-3'>{projectDetails?.shortDes}</p>
          <div className='mt-5'>
            <h4 className='text-2xl font-semibold text-primary'>Description</h4>
            <div className='mt-1 mb-5'>
              {
                projectDetails?.des.map((proDes, index) => <ProjectDes proDes={proDes} key={index}></ProjectDes>)
              }
            </div>
            <h4 className='text-2xl font-semibold text-primary'>Technology</h4>
            <div className='mt-1 mb-5'>
              {
                projectDetails?.technology.map((tech, index) => <div key={index} class={`badge m-1 ${index % 2 === 0 ? "bg-green-800" : "bg-blue-800"} border-0 text-white`}>{tech}</div>)
              }
            </div>

          </div>
        </div>

      </div>

      <div className='mt-20'>
        <h4 className='text-3xl  font-semibold text-primary'>Project Image</h4>
        <div className='mt-5 mb-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {
              projectDetails?.imgArray.map((img, index) => <ProjectImageCard key={index} img={img} ></ProjectImageCard>)
            }
          </div>
        </div>


      </div>

    </div>
  );
};

export default ProjectDetails;