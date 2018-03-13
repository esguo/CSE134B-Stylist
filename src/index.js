import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import EditProject from './EditProject';


import { createStore } from 'redux'
import testReducer from './reducers/testReducer'
import {addSomething, addSomething2} from './actions/testActions'
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState'

const store = configureStore(initialState);

 ReactDOM.render(
   <Provider store={store}>
      <App />
  </Provider>,document.getElementById('root'));
registerServiceWorker();
