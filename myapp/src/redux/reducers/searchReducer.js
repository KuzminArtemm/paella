const { SEARCH_INPUT_VALUE } = require('../types/searchTypes');

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case SEARCH_INPUT_VALUE:
      return action.payload;

    default:
      return state;
  }
};

export default searchReducer;
