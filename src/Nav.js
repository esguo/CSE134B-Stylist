import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
          <li><a href="active_project.html">Active</a></li>
          <li><a href="inactive_project.html">Inactive</a></li>
          <li><a href="completed_project.html">Completed</a></li>
          <li><a href="create_project.html">Create New</a></li>
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
