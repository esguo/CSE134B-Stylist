

export default function testReducer(state={init: 'Something', test: []}, action){
  switch (action.type){
    case 'test1':
      console.log("Doing test action 1")
      return [...state, {test1: action.text}];

    case 'test2':
      console.log("Doing test action 2")
      return [...state, {test2: action.text}]

    default:
    return state

  }
}
