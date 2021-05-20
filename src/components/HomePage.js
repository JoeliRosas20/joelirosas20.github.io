import React from 'react'
import {Link} from "react-router-dom"
import portrait from './MyPortrait.jpg'

function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <br></br>
            <Link to="/projects">Projects</Link>
            <br></br>
            <Link to="/about">About Me</Link>
            <br></br>
            <Link to="/contact">Contact Info</Link>
            <br></br>
            <img src={portrait} className='App-logo' alt="portrait" />
            <br></br>
            Hello, I am Joel Rosas and I am mastering React!
        </div>
    )
}

export default HomePage
