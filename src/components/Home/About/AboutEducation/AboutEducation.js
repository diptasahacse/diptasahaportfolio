import React from 'react';

const AboutEducation = () => {
    return (
        <div className='p-3'>
            <div className='mb-5'>
                <div className='flex justify-between'>
                    <h3 className='font-bold text-xl items-center'>B.Tech in Computer Science and Engineering</h3>
                    <span>2018 - 2022</span>
                </div>
                <div>
                    <span className='italic text-xs'>LOVELY PROFESSIONAL UNIVERSITY (PUNJAB, INDIA)</span>
                </div>
            </div>
            <div className='mb-2'>
                <div className='flex justify-between'>
                    <h3 className='font-bold text-xl items-center'>Diploma in Computer Engineering</h3>
                    <span>2010 - 2014</span>
                </div>
                <div>
                    <span className='italic text-xs'>KHANJAHAN ALI COLLEGE OF SCIENCE AND TECHNOLOGY (KHULNA, BANGLADESH)</span>
                </div>
            </div>
        </div>
    );
};

export default AboutEducation;