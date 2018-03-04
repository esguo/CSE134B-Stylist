import React, { Component } from 'react';
import './style/styles_home.css';
import Nav from './Nav.js';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import InactiveProject from './InactiveProject';
import ActiveProject from './ActiveProject';
import CompletedProject from './CompletedProject';
import Messages from './Messages';
import MessagesStyle from './MessagesStyle';
import CreateProject from './CreateProject';

class Signin extends Component {
  render() {
    return (
      <div className="home">
        <div className="header">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="index.html">Sign-in</a></li>
          </ul>
        </div>
        <div className="home">
          <div className="carousel">
            <div className="img">
              <img src="photos/300x300.png" alt="Placeholder image" />
            </div>
          </div>
          <div className="login">
            <div className="img">
              <img src="photos/300x300.png" alt="Placeholder image" />
            </div>
            <div className="auth" id="forms">
              <form id="forms2">
                <div className="input" id="inputs">
                  <input name="userID" placeholder="Username" type="text" />
                  <input name="pswrd" placeholder="Password" type="text" />
                </div>
                {/*<input type="submit" class ="logBtn" value="Login">*/}
                <p><Link to='/signedin'>Sign In</Link></p>
                <p className="signup" id="form2" onclick="signForm(this)"> Sign up </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
