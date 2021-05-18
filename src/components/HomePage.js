import React from 'react'
import {Link} from "react-router-dom"

function HomePage() {
    return (
        <div>
            Home:
            <br></br>
            <Link to="/projects">Projects</Link>
            <br></br>
            <Link to="/about">About Me</Link>
            <br></br>
            <Link to="/contact">Contact Info</Link>
            <br></br>
            <img src="Portrait.jpg" className="App-logo" alt="portrait" />
            <br></br>
            Hello, I am Joel Rosas and I am mastering React!
        </div>
    )
}

export default HomePage
