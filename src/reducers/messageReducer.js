import * as types from '../actions/actionTypes'
import initialStateMsg from './initialStateMsg';

export default function messageReducer(state = initialStateMsg, action){
  switch (action.type){
    case types.SEND_MSG_SUCCESS:
      console.log("Sent!");
      var newState = Object.assign({}, state, {messages: [...state.messages, action.message]});
      return newState;

    default:
      return state;
  }
}
