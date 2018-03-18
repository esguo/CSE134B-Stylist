import React, { Component } from 'react';
import styles from './style/styles.css';
import { Link } from "react-router-dom";

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
          <div className={styles.project}>
            <h1 className="heading">Projects</h1>
            <ul style={{display:'inline-block', textAlign: 'left'}}>
            <li><Link to="/signedin/create">Create Project</Link></li>
              <li><Link to="/signedin/active">Active</Link></li>
              <li><Link to="/signedin/inactive">Inactive</Link></li>
              <li><Link to="/signedin/completed">Completed</Link></li>
            </ul>
          </div>
          <h2 className="heading"><Link to="/signedin/messages">Messages</Link></h2>
          <h2 className="heading"><Link to="/signedin/messagesStyle">Messages (Stylist)</Link></h2>
          <h2 className="heading"><Link to="/">Sign Out</Link></h2>
        </div>
      </div>
    );
  }
}

export default Nav;
