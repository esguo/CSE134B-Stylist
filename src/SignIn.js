import React, { Component } from 'react';
import './style/styles_home.css';
import {Link} from "react-router-dom";

class Signin extends Component {
  render() {
    return (
      <div className="home">
        <div className="header">
          <ul>
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact Us</a></li>
            <li><a href="index.html">Sign-in</a></li>
          </ul>
        </div>
        <div className="home">
          <div className="carousel">
            <div className="img">
              <img src="photos/300x300.png" alt="Placeholder" />
            </div>
          </div>
          <div className="login">
            <div className="img">
              <img src="photos/300x300.png" alt="Placeholder" />
            </div>
            <div className="auth" id="forms">
              <form id="forms2">
                <div className="input" id="inputs">
                  <input name="userID" placeholder="Username" type="text" />
                  <input name="pswrd" placeholder="Password" type="text" />
                </div>
                <p><Link to='/signedin'>Sign In</Link></p>
                <p className="signup" id="form2" onClick="signForm(this)"> Sign up </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
