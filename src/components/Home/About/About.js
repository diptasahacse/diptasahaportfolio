import React, { useState } from 'react';
import dipta from '../../../images/dipta.jpg'
import AboutAchievements from './AboutAchievements/AboutAchievements';
import AboutCertifications from './AboutCertifications/AboutCertifications';
import AboutEducation from './AboutEducation/AboutEducation';
import AboutSkill from './AboutSkill/AboutSkill';

const About = () => {
    const [tabState, setTabState] = useState("")
    return (
        <div id='about-me' className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='flex justify-center'>
                    <img src={dipta} className="lg:max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 className="font-bold text-6xl">About Me</h1>
                    <p className="py-6">Hello, I'm Dipta Saha. From Bangladesh. I'm a React Developer. My sound knowledge in HTML5, CSS3, Git, Javascript, ES6, React.js, Node, Express, Mongodb & other UI frameworks like Bootstrap, Tailwindcss. Build reusable code for future use while optimizing web performance.</p>
                    <div>
                        <div className="tabs">
                            <button onClick={() => { setTabState('skills') }} className={`tab tab-bordered ${tabState === '' || tabState === 'skills' ? "tab-active" : ''}`}>Skills</button>
                            <button onClick={() => { setTabState('achievements') }} className={`tab tab-bordered ${tabState === 'achievements' ? "tab-active" : ''}`}>Achievements</button>
                            <button onClick={() => { setTabState('education') }} className={`tab tab-bordered ${tabState === 'education' ? "tab-active" : ''}`}>Education</button>
                            <button onClick={() => { setTabState('certifications') }} className={`tab tab-bordered ${tabState === 'certifications' ? "tab-active" : ''}`}>Certifications</button>
                        </div>
                        <div>
                            {
                                (tabState === '' || tabState === 'skills') && <AboutSkill></AboutSkill>
                            }
                            {
                                tabState === 'achievements' && <AboutAchievements></AboutAchievements>
                            }
                            {
                                tabState === 'education' && <AboutEducation></AboutEducation>
                            }
                            {
                                tabState === 'certifications' && <AboutCertifications></AboutCertifications>
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;