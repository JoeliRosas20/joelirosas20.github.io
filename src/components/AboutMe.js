import React from 'react'
import Resume from './MyResume.pdf';

/** 
 * This class shows a paragraph about me and it has a link
 * to download my resume
*/

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
