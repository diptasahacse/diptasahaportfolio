import React from 'react';
import banner from '../../../images/banner.jpg'
const Hero = () => {
    return (
        <div className="hero min-h-screen place-items-start" style={{ backgroundImage: `url(${banner})` }} >
            <div className="hero-overlay bg-opacity-95"></div>

            <div className=" w-full h-full">
                <div className='max-w-7xl mx-auto px-3 h-full  flex items-center'>
                    <div className=' '>
                        <h1 className='font-bold text-7xl lg:text-8xl text-white'>Hello, I’m <span className='gradient-text-custom'>Dipta Saha</span></h1>
                        <h3 className='font-bold text-3xl mt-4 text-white'>A Web Developer</h3>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Hero;