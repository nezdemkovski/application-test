import { createAction } from 'redux-actions';
import { api } from '../../api';

export const RECEIVE_DETAILS = 'RECEIVE_DETAILS';
export const UPDATE_COMMENTS_AFTER_ADD = 'UPDATE_COMMENTS_AFTER_ADD';
export const UPDATE_COMMENTS_AFTER_REMOVE = 'UPDATE_COMMENTS_AFTER_REMOVE';

export const receiveDetails = createAction(RECEIVE_DETAILS);
export const updateCommentsAfterAdd = createAction(UPDATE_COMMENTS_AFTER_ADD);
export const updateCommentsAfterRemove = createAction(UPDATE_COMMENTS_AFTER_REMOVE);

export const fetchDetailsFeed = (detailsId) => {
  return (dispatch) => {
    return api.get(detailsId).then(
      (success) => dispatch(receiveDetails(
        success.data,
      )),
      (error) => dispatch(receiveDetails(
        error,
      ))
    );
  };
};

export const addComment = (detailsId, commentBody) => {
  return (dispatch) => {
    const {
      firstName,
      lastName,
      commentText,
    } = commentBody;

    return api.post(`${detailsId}/comments`, {
      text: commentText,
      person: {
        firstName: firstName,
        lastName: lastName,
      }
    }).then(
      (success) => dispatch(updateCommentsAfterAdd(
        success.data,
      )),
      (error) => dispatch(updateCommentsAfterAdd(
        error,
      ))
    );
  };
};

export const removeComment = (detailsId, commentId) => {
  return (dispatch) => {
    return api.delete(`${detailsId}/comments/${commentId}`).then(
      (success) => dispatch(updateCommentsAfterRemove(
        commentId,
      )),
      (error) => dispatch(updateCommentsAfterRemove(
        commentId,
      ))
    );
  };
};
