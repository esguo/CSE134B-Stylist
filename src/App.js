import React, { Component } from 'react';
import './style/styles.css';
import Nav from './Nav.js';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {InactiveProject} from './InactiveProject';
import ActiveProject from './ActiveProject';
import {CompletedProject} from './CompletedProject';
import Messages from './Messages';
import MessagesStyle from './MessagesStyle';
import CreateProject from './CreateProject';
import Signin from './SignIn';

class App extends Component {
  render() {
    return (
      <body style={{height: '100%'}}>
        <Router>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route path="/signedin" component={PostSign} />
          </Switch>
        </Router>
      </body>
    );
  }
}

const PostSign = () => (
  <div className="container" style={{height: '100%'}}>
    <div style={{width: '25%', borderStyle:'solid', textAlign:'center'}}>
      <Nav />
    </div>
    <div style={{width: '75%', padding: '20px'}}>
      <div style={{height: '10%'}}>
        <Route path="/signedin/active" component={headingActive} />
        <Route path="/signedin/inactive" component={headingInactive} />
        <Route path="/signedin/completed" component={headingCompleted} />
        <Route path="/signedin/messages" component={headingMessage} />
        <Route path="/signedin/messagesStyle" component={headingMessage} />
        <Route path="/signedin/create" component={headingCreateProject} />
        <hr />
      </div>
      <div style={{height:'90%'}}>
        <Route path="/signedin/active" component={ActiveProject} />
        <Route path="/signedin/inactive" component={InactiveProject} />
        <Route path="/signedin/completed" component={CompletedProject} />
        <Route path="/signedin/messages" component={Messages} />
        <Route path="/signedin/messagesStyle" component={MessagesStyle} />
        <Route path="/signedin/create" component={CreateProject} />
      </div>
    </div>
  </div>
);

const headingActive = () => (
  <h1>Active Projects</h1>
);
const headingInactive = () => (
  <h1>Inactive Projects</h1>
);
const headingCompleted = () => (
  <h1>Completed Projects</h1>
);
const headingCreateProject = () => (
  <h1>Create Project</h1>
);
const headingMessage = () => (
  <h1>Messages</h1>
);

export default App;
