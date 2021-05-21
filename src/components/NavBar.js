import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Projects
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
