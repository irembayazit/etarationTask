import axios from 'axios';

const INITIAL_STATE = [];

axios
.get('https://5fc9346b2af77700165ae514.mockapi.io/simpsons')
.then(response => {
  //AsyncStorage.setItem('dataRecord', JSON.stringify(response.data));
  response.data.map((item) => 
    INITIAL_STATE.push(item)
  )
});

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEMS':
      return[...state,action.payload] ;
      break;

    case 'LIST_ITEMS':
      return state ;
      break;
    
    case 'REMOVE_ITEM':
      return state.filter((item) => item.id != action.id);
      break;
      
    case 'ITEM_UP':
      if(state[action.index - 1] != null){
        const up = state[action.index - 1]
        state[action.index - 1] = state[action.index]
        state[action.index] = up
      }
      return [...state];
      break;
    
    case 'ITEM_DOWN':
      if(state[action.index + 1] != null){
        const down = state[action.index + 1]
        state[action.index + 1] = state[action.index]
        state[action.index] = down
      }
      return [...state];
      break;

    default:
      return state;
      break;
  }
};


export default itemReducer;