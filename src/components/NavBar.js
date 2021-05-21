import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <div>
                Joel's Resume Page
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
                    <li>
                        <NavLink to="/contact">
                            Contact Info
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
