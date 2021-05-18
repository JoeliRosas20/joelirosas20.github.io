import React from 'react';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import HomePage from './components/HomePage';
import MyProjects from './components/MyProjects';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

function Site() {
    return (
        <Router>
            <Route path="/" component = {HomePage}/>
            <Link path="/MyProjects">Projects</Link>
            <Route path="/" component = {AboutMe}/>
            <Route path="/" component = {ContactInfo}/>
        </Router>
    )
}

export default Site;
