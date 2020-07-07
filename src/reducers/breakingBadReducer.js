const initialState = {
  characters: [],
  isLoading: true,
};

const breakingBadReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHARACTERS':
      return {
        ...state,
        isLoading: action.payload.isLoading,
        characters: [...action.payload.characters],
      };
    default:
      return state;
  }
};

export default breakingBadReducer;
