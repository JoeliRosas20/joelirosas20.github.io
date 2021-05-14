import React from 'react';
import Home from '.components/Home';
import AboutMe from '.components/AboutMe';
import Projects from '.components/Projects';
import Contact from '.components/Contact';

function Site() {
    return (
        <div>
            <Home/>
            <AboutMe/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Site;
