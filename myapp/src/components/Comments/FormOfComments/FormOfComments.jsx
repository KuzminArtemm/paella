import { Button, CardContent, Container } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';

import { commentsACQuery } from '../../../redux/actions/commentsCard';

const FormOfComments = ({ id }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData(e.currentTarget);
    dispatch(
      commentsACQuery({
        comment: data.get('comment'),
        id
      })
    );
    console.log('dataFromForm', data);
  };

  return (
    <Container display="flex" justifyContent="center" alignItems="center">
      <CardContent>
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            width: 500,
            maxWidth: '100%'
          }}
        >
          <TextField
            fullWidth
            label="Comment"
            id="comment"
            name="comment"
            required
          />
          <Button type="submit" variant="text">
            Leave a Comment
          </Button>
        </Box>
      </CardContent>
      <hr />
    </Container>
  );
};

export default FormOfComments;
