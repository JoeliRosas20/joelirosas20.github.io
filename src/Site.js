import React from 'react';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import HomePage from './components/HomePage';
import MyProjects from './components/MyProjects';

function Site() {
    return (
        <div>
            <HomePage/>
            <MyProjects/>
            <AboutMe/>
            <ContactInfo/>
        </div>
    )
}

export default Site;
