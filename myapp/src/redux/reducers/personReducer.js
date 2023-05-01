import { PERSON_SIGN_IN, PERSON_SIGN_UP } from '../types/personTypes';

const personReducer = (state = {}, action) => {
  switch (action.type) {
    case PERSON_SIGN_UP:
      return action.payload;

    case PERSON_SIGN_IN:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default personReducer;
