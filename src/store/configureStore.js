import {createStore, applyMiddleware} from 'redux';
// import rootReducer from '../reducers/rootReducer';
import projectReducer from '../reducers/projectReducer'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    projectReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
