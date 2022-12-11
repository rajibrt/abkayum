import React from 'react';
import Hero from '../../Components/Hero/Hero';
import HomeProjects from './HomeProjects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <HomeProjects></HomeProjects>
            <Skills></Skills>
        </div>
    );
};

export default Home;