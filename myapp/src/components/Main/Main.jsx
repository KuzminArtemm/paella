import { Grid } from '@mui/material';

import PostsList from '../PostsList/PostsList';

const Main = () => {
  return (
    <Grid container spacing={0} justifyContent="center">
      <PostsList />
    </Grid>
  );
};
export default Main;
