import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Hero from './Hero/Hero';
import Projects from './Projects/Projects';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Services></Services>
            <Contact></Contact>

        </div>
    );
};

export default Home;