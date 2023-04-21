import { ADD_NEW_POST, LOAD_ALL_POSTS } from '../types/postsTypes';

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_POSTS:
      return action.payload;

    case ADD_NEW_POST:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default postsReducer;
