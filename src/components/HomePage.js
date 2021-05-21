import React from 'react'
import portrait from './MyPortrait.jpg'

function HomePage() {
    return (
        <div>
            <h1>Home</h1>
            <img src={portrait} className='App-logo' alt="portrait" />
            <br></br>
            Hello, I am Joel Rosas and I am mastering React!
        </div>
    )
}

export default HomePage
