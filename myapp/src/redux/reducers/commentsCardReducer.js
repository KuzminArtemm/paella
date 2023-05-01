import { COMMENTS_TYPE } from '../types/commentsCardType';

export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case COMMENTS_TYPE:
      return [...state, action.payload];

    default:
      return state;
  }
};
