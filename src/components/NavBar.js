import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <NavLink to = "/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About Me
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
