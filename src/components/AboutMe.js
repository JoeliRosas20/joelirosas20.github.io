import React from 'react'
import Resume from './MyResume.pdf';
import {Link} from 'react-router-dom'

function AboutMe() {
    return (
        <div>
            About Me
            <br></br>
            <a href={Resume} target = "_blank" rel="noopener noreferrer">My Resume</a>
            <br></br>
            <Link to="/">Home</Link>
        </div>
    )
}

export default AboutMe
