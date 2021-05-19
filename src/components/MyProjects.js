import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';

function MyProjects() {
    return (
        <div>
            Welcome to Projects
            <br></br>
            <Link to="/SpaceGame">Space Game</Link>
            <br></br>
            <Link to="/ClothesApp">Clothes App</Link>
            <br></br>
            <Link to="/">Home</Link>
        </div>
    )
}

export default MyProjects
