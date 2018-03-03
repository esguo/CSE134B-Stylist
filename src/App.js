import React, { Component } from 'react';
import './style/styles.css';
import Nav from './Nav.js';
import { BrowserRouter as Router, Route} from "react-router-dom";
import InactiveProject from './InactiveProject';
import ActiveProject from './ActiveProject';
import CompletedProject from './CompletedProject'

class App extends Component {
  render() {
    return (
      <Router>
        <div class="container" style={{height: '100%'}}>
          <div style={{width: '25%', borderStyle:'solid', textAlign:'center'}}>
            <Nav />
          </div>
          <div style={{ width: '75%', padding: '20px'}}>
            <Route path="/active" component={headingActive} />
            <Route path="/inactive" component={headingInactive} />
            <Route path="/completed" component={headingCompleted} />
            <Route path="/messages" component={headingMessage} />
            <hr />
            <Route path="/active" component={ActiveProject} />
            <Route path="/inactive" component={InactiveProject} />
            <Route path="/completed" component={CompletedProject} />
          </div>
        </div>
      </Router>
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
const headingMessage = () => (
  <h1>Messages</h1>
);

export default App;
