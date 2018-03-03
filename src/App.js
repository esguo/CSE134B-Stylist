import React, { Component } from 'react';
import './style/styles.css';
import Nav from './Nav.js';
import { BrowserRouter as Router, Route} from "react-router-dom";
import InactiveProject from './InactiveProject';
import ActiveProject from './ActiveProject';
import CompletedProject from './CompletedProject';
import Messages from './Messages';
import MessagesStyle from './MessagesStyle';
import CreateProject from './CreateProject';

class App extends Component {
  render() {
    return (
      <body style={{height: '100%'}}>
      <Router>
        <div className="container" style={{height: '100%'}}>
          <div style={{width: '25%', borderStyle:'solid', textAlign:'center'}}>
            <Nav />
          </div>
          <div style={{ width: '75%', padding: '20px', height: '95vh'}}>
            <Route path="/active" component={headingActive} />
            <Route path="/inactive" component={headingInactive} />
            <Route path="/completed" component={headingCompleted} />
            <Route path="/messages" component={headingMessage} />
            <Route path="/messagesStyle" component={headingMessage} />
            <Route path="/create" component={headingCreateProject} />
            <hr />
            <Route path="/active" component={ActiveProject} />
            <Route path="/inactive" component={InactiveProject} />
            <Route path="/completed" component={CompletedProject} />
            <Route path="/messages" component={Messages} />
            <Route path="/messagesStyle" component={MessagesStyle} />
            <Route path="/create" component={CreateProject} />
          </div>
        </div>
      </Router>
    </body>
    );
  }
}

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
