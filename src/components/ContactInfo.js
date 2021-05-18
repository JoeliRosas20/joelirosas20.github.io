import React from 'react'

function ContactInfo() {
    return (
        <div>
            Contact Info
            <br></br>
            Gmail: joeli.rosas20@gmail.com
            <br></br> 
            <a href="https://www.linkedin.com/in/joel-rosas-50b653170/" target="_blank" rel="noopener noreferrer"> Linkedin</a>
            <form>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"/>
            </form>
        </div>
    )
}

export default ContactInfo
