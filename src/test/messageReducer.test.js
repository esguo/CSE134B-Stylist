import expect from 'expect';
import messageReducer from '../reducers/messageReducer';
import * as actions from '../actions/projectActions';

describe('Message Reducer', () => {
  it('should send/add message when passed SEND_MSG_SUCCESS', () => {
    // arrange
    const initialState = {
      messages: [
        {
          page: '1',
          message: "hi"
        }
      ]};


      const action = actions.sendMessageSuccess('0', "new!");

      //act
      const newState = messageReducer(initialState, action);

      //assert
      console.log(newState);

      expect(newState.messages.length).toEqual(2);
      expect(newState.messages[0].page).toEqual('1');
      expect(newState.messages[1].page).toEqual('0');
    });


  });
