import React from 'react';
import AboutMe from './components/AboutMe';
import ContactInfo from './components/ContactInfo';
import HomePage from './components/HomePage';
import MyProjects from './components/MyProjects';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom'

function Site() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component = {HomePage}/>
                <Route exact path="/projects" component = {MyProjects}/>
                <Route exact path="/about" component = {AboutMe}/>
                <Route exact path="/contact" component = {ContactInfo}/>
            </Switch>
        </Router>
    )
}

export default Site;
