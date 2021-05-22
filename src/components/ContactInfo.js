
import React, { Component } from 'react'

class ContactInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            userName:" "
        }
    }

    handleChange = (event) =>{
        console.log("Inside this method")
        this.setState({userName: event.target.value});
        console.log("Leaving this method")
    }

    onFormSubmit = (event) => {
        alert(this.state.userName + " Successfully submitted!")
    }

    render() {
        return (
            <div>
                <h1>Contact Info</h1>
                Gmail: joeli.rosas20@gmail.com
                <br></br> 
                <a href="https://www.linkedin.com/in/joel-rosas-50b653170/" target="_blank" rel="noopener noreferrer"> Linkedin</a>
                <form>
                    <label htmlFor="name">Name</label>
                        <input
                        type="text"
                        id="name"
                        onChange = {(event) => this.handleChange(event)}/>
                        <br></br>
                    <label htmlFor="email">Email</label>
                        <input
                        type="text"
                        id="email"/>
                        <br></br>
                    <label htmlFor="message">Send me a message!</label>
                        <textarea rows="10" cols="30" id="message"/>
                    <br></br>
                    <button type="submit" onClick={this.onFormSubmit}>submit</button>
                </form>
            </div>
        )
    }
}

export default ContactInfo
