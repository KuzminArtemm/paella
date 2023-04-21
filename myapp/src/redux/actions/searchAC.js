import { SEARCH_INPUT_VALUE } from '../types/searchTypes';

export const setSearchValue = (value) => {
  return {
    type: SEARCH_INPUT_VALUE,
    payload: value
  };
};
