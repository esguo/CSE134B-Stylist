import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InactiveProject from './InactiveProject';
import ActiveProject from './ActiveProject';
import CompletedProject from './CompletedProject'

class Nav extends Component {
  render() {
    return (
      <div>
      <div className="profile">
      <img src="photos/steve.jpg" alt="My Man Steve" />
      </div>
      <p className="heading"> John Doe </p><p>
      </p><p style={{textAlign: 'center'}}> Edit Profile</p>
      <div className="projects" style={{textAlign: 'center'}}>
      <p className="heading">Projects
      </p><ul style={{display: 'inline-block', textAlign: 'left'}}>

      <li><Link to="/active">Active</Link></li>
      <li><Link to="/inactive">Inactive</Link></li>
      <li><Link to="/completed">Completed</Link></li>

      <Route path="/active" component={ActiveProject} />
      <Route path="/inactive" component={InactiveProject} />
      <Route path="/completed" component={CompletedProject} />
      </ul>
      </div>
      <a href="messages.html"><p className="heading"> Messages </p></a>
      <a href="explore.html"><p className="heading"> Explore </p></a>
      <div style={{textAlign: 'center'}}>
      <ul style={{display: 'inline-block', textAlign: 'left'}}>
      <li><a href="#">Help</a></li>
      <li><a href="#">Support</a></li>
      <li><a href="#">Feedback</a></li>
      <li><a href="#">Contact Us</a></li>
      </ul>
      </div>
      </div>
    );
  }
}

export default Nav;
