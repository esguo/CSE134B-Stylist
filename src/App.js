import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import { BrowserRouter as Router, Route} from "react-router-dom";
import InactiveProject from './InactiveProject';
import ActiveProject from './ActiveProject';
import CompletedProject from './CompletedProject'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div style={{flex:'25%', borderStyle:'solid', textAlign:'center', float: 'left'}}>
            <Nav />
          </div>
          <div style={{ flex:'75%'}}>
            <Route path="/active" component={headingActive} />
            <Route path="/inactive" component={headingInactive} />
            <Route path="/completed" component={headingCompleted} />
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

export default App;
