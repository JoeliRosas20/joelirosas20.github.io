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
        </div>
    )
}

export default HomePage
