import {combineReducers} from 'redux';
import projectReducer from './projectReducer';
import messageReducer from './messageReducer';

const rootReducer = combineReducers({
  projectReducer,
  messageReducer
});

//const rootReducer = messageReducer
export default rootReducer;
