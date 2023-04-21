import * as React from 'react';

import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';

import { addNewPostQuery } from '../../redux/actions/postsAC';

export default function StateTextFields() {
  const [id, setId] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [avatar, setAvatar] = React.useState('');
  const dispatch = useDispatch();
  const submitHandler = () => {
    let preparedPostQuery = {
      id,
      title,
      avatar
    };
    console.log('>>>>>>>>>>', preparedPostQuery);
    dispatch(addNewPostQuery(JSON.stringify(preparedPostQuery)));
    setId('');
    setTitle('');
    setAvatar('');
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <CardContent>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            '& > :not(style)': { m: 1, width: '25ch' }
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-controlled"
            label="id"
            value={id}
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
          <TextField
            id="outlined-controlled"
            label="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <TextField
            id="outlined-controlled"
            label="avatar"
            value={avatar}
            onChange={(event) => {
              setAvatar(event.target.value);
            }}
          />
          <Button onClick={submitHandler} variant="text">
            Create a Post
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
