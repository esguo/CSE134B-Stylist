

export default function testReducer(state = {test1: [], test2: []}, action){
  switch (action.type){
    case 'test1':
      console.log("Doing test action 1")
      return [...state, {t1: action.text}];

    case 'test2':
      console.log("Doing test action 2")
      return [...state, {t2: action.text}]

  }
}
