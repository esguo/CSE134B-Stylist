import {combineReducers} from 'redux';
import projectReducer from './projectReducer';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  projectReducer,
  messageReducer
});

export default rootReducer;
