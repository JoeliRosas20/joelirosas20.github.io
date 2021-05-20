import React from 'react'
import {Link} from 'react-router-dom';

function MyProjects() {
    return (
        <div>
            <h1>Welcome to Projects</h1>
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
