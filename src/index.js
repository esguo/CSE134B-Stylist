import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Project from './Project';
import registerServiceWorker from './registerServiceWorker';
import InactiveProject from './InactiveProject';
import ActiveProject from './ActiveProject';

ReactDOM.render(  <ActiveProject />, document.getElementById('root'));
registerServiceWorker();
