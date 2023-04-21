import { useEffect } from 'react';

import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { loadAllPostsQuery } from '../../redux/actions/postsAC';
import useDebounce from '../hooks/useDebounce';
import PostItem from '../PostItem/PostItem';

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((store) => store.posts);
  const search = useSelector((store) => store.search);
  const debouncedSearch = useDebounce(search, 1e3);

  useEffect(() => {
    dispatch(loadAllPostsQuery(debouncedSearch));
  }, [debouncedSearch]);

  if (!posts.length) return <div>Posts list is empty</div>;

  return (
    <Grid sx={{ minWidth: 800 }} container spacing={6} justifyContent="center">
      {posts.map((post) => {
        return <PostItem key={post.id} {...post} />;
      })}
    </Grid>
  );
};

export default PostsList;
