import React from 'react'
import Resume from './MyResume.pdf';

function AboutMe() {
    return (
        <div>
            <h1>About Me</h1>
            <a href={Resume} target = "_blank" rel="noopener noreferrer">My Resume</a>
            <br></br>
        </div>
    )
}

export default AboutMe
