import axios from 'axios';

import { ADD_NEW_POST, LOAD_ALL_POSTS } from '../types/postsTypes';

export const loadAllPosts = (allPosts) => {
  return {
    type: LOAD_ALL_POSTS,
    payload: allPosts
  };
};

export const loadAllPostsQuery = (searchValue) => async (dispatch) => {
  const urlForFetch = searchValue
    ? `http://localhost:3001/api/v3/posts/?query=${searchValue}`
    : `http://localhost:3001/api/v3/posts`;

  //const response = await fetch(urlForFetch);
  const response = await axios.get(`http://localhost:3001/api/v3/posts`, {
    params: {
      query: searchValue
    }
  });

  //const dataFromServer = await response.json();
  const dataFromServer = response.data;
  dispatch(loadAllPosts(dataFromServer));
};

export const addNewPost = (newPost) => {
  return {
    type: ADD_NEW_POST,
    payload: newPost
  };
};

export const addNewPostQuery = (post) => async (dispatch) => {
  /* const response = await fetch('http://localhost:3001/api/v3/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: post
  });
  const dataFromServer = await response.json();
  dispatch(addNewPost(dataFromServer)); */
  const objectFromPost = JSON.parse(post);
  const response = await axios.post(
    'http://localhost:3001/api/v3/posts',
    objectFromPost
  );
  // const dataFromServer = await response.json();
  const dataFromServer = response.data;
  dispatch(addNewPost(dataFromServer));
};
