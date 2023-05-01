import * as React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import CommentsList from './CommentsList/CommentsList';
import FormOfComments from './FormOfComments/FormOfComments';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const Comments = () => {
  const [card, setCard] = React.useState({});
  const { id } = useParams();
  console.log('id', id);
  React.useEffect(() => {
    fetch(`http://localhost:3001/api/v3/posts/${id}`)
      .then((response) => response.json())
      .then((dataFromServer) => setCard(dataFromServer));
  }, []);
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLike = (e) => {
    if (!e.target.style.color) {
      e.target.style.color = 'red';
    } else {
      e.target.style.color = '';
    }
  };

  return (
    <Grid item xs={6}>
      <Card sx={{ minWidth: 280 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          title={card.title}
          subheader={card.id}
        />

        <CardMedia
          component="img"
          height="400"
          image={card.avatar}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon onClick={handleLike} />
            <span style={{ fontSize: 12 }}></span>
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <FormOfComments id={id} />
          <CommentsList id={id} />
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Comments;
