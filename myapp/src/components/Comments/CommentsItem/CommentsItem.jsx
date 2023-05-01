import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CommentsItem({ id, comment, commentId }) {
  console.log('CommentsItem', id, comment, commentId);
  return (
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {id}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {comment}
      </Typography>
    </CardContent>
  );
}

export default CommentsItem;
