import { combineReducers } from 'redux';

import { commentsReducer } from './commentsCardReducer';
import personReducer from './personReducer';
import postsReducer from './postsReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  search: searchReducer,
  person: personReducer,
  comments: commentsReducer
});

export default rootReducer;
