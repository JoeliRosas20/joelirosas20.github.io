import React from 'react'
import {Link} from "react-router-dom"

function HomePage() {
    return (
        <div>
            Home:
            <br></br>
            <Link to="/projects">Projects</Link>
        </div>
    )
}

export default HomePage
