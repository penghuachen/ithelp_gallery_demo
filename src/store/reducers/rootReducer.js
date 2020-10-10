const initialState = {
  list: []
};

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_UNSPLASH_API': 
      return {
        ...state,
        list: action.payload
      }
    default:
      return state;
  }
};