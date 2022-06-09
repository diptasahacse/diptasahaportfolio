import React from 'react';

const Hero = () => {
    return (
        <div class="hero min-h-screen place-items-start" style={{ backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)' }} >
            <div class="hero-overlay bg-opacity-60"></div>

            <div class=" w-full h-full">
                <div className='max-w-7xl mx-auto h-full  flex items-center'>
                    <div className=' '>
                        <h1 className='font-bold text-6xl text-white'>Hello, I’m <span className='text-primary'>Dipta Saha</span></h1>
                        <h3 className='font-bold text-3xl mt-4 text-white'>A Web Developer</h3>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Hero;