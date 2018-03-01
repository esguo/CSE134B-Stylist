import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";

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
      </ul>
      </div>
      <a href="messages.html"><p className="heading"> Messages </p></a>
      <a href="explore.html"><p className="heading"> Explore </p></a>
      <div style={{textAlign: 'center'}}>
      </div>
      </div>
    );
  }
}

export default Nav;
