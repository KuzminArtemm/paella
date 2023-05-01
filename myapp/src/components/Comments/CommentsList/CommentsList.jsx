import { useSelector } from 'react-redux';

import CommentsItem from '../CommentsItem/CommentsItem';

const CommentsList = ({ id }) => {
  let store = useSelector((store) => store.comments);
  console.log(store);
  return (
    <>
      {store.map((comment) => {
        if (comment.id === id) {
          return <CommentsItem key={comment.id} {...comment} />;
        } else {
          return null;
        }
      })}
    </>
  );
};

export default CommentsList;
