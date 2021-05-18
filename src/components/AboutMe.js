import React from 'react'
import Resume from './MyResume.pdf';

function AboutMe() {
    return (
        <div>
            About Me
            <br></br>
            <a href={Resume} target = "_blank">My Resume</a>
        </div>
    )
}

export default AboutMe
