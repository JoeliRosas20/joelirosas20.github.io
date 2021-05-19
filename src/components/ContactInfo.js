import React from 'react'
import {Link} from 'react-router-dom'

const onFormSubmit = (event) => {
    alert("Successfully submitted!")
}

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
                    <br></br>
                <label htmlFor="email">Email</label>
                    <input
                    type="text"
                    id="email"/>
                    <br></br>
                <label htmlFor="message">Send me a message!</label>
                    <textarea rows="10" cols="30" id="message"/>
                <br></br>
                <button type="submit" onClick={onFormSubmit}>submit</button>
            </form>
            <Link to="/">Home</Link>
        </div>
    )
}

export default ContactInfo
