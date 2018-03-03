import React, { Component } from 'react';
import './style/styles.css';
import { Link } from "react-router-dom";
import { steve } from './photos/steve.jpg'

class Nav extends Component {
  render() {
    return (
      <div>
        <div className="profile">
          <img src={require('./photos/steve.jpg')} alt="My Man Steve" style={{width: '80%'}}/>
        </div>
        <div style={{textAlign: 'center'}}>
          <h3 className="heading"> John Doe </h3>
          <p style={{textAlign: 'center'}}> Edit Profile</p>
          <div className="projects" style={{textAlign: 'center'}}>
            <h1 className="heading">Projects</h1>
            <ul style={{display:'inline-block', textAlign: 'left'}}>
              <li><Link to="/active">Active</Link></li>
              <li><Link to="/inactive">Inactive</Link></li>
              <li><Link to="/completed">Completed</Link></li>
            </ul>
          </div>
          <h2 className="heading"><Link to="/messages">Messages</Link></h2>
          <a href="explore.html"><p className="heading"> Explore </p></a>

        </div>
      </div>
    );
  }
}

export default Nav;
