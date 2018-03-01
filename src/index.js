import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Project from './Project';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(  <Project haha={123} type = {"ap"} projectID = {1234} projectName = {"New Hair"}
  budget = {50} endDate={"2/28/2018"} progressUrl={"something"} stylist={"Jason"} associate={"Eddie"}/>, document.getElementById('root'));
registerServiceWorker();
