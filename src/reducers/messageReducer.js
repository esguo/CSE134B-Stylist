import * as types from '../actions/actionTypes'
import initialStateMsg from './initialStateMsg';

export default function messageReducer(state = initialStateMsg, action){
  switch (action.type){
    case types.SEND_MSG_SUCCESS:
      console.log("Sent!");
      var key = state.messages.length
      var newState = Object.assign({}, state, {messages: [...state.messages, {key: key, page:action.page, msg:action.message}]});
      return newState;

    default:
      return state;
  }
}
