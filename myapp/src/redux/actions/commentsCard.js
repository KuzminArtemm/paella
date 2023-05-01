import axiosInstanse from '../../components/config/axios';
import { COMMENTS_TYPE } from '../types/commentsCardType';

export const commentsAC = (comment) => {
  return {
    type: COMMENTS_TYPE,
    payload: comment
  };
};

export const commentsACQuery =
  ({ id, comment }) =>
  async (dispatch) => {
    const response = await axiosInstanse.post('comment', {
      id,
      comment
    });
    const dataFromServer = response.data;
    console.log('dataFromServer', dataFromServer);
    if (dataFromServer) {
      dispatch(
        commentsAC({
          ...dataFromServer,
          commentId: dataFromServer.commentId
        })
      );
    }
  };
