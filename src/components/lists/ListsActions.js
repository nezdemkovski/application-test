import { createAction } from 'redux-actions';
import { api } from '../../api';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const receiveLists = createAction(RECEIVE_LISTS);

export const fetchLists = () => {
  return (dispatch) => {
    return api.get('').then(
      (success) => dispatch(receiveLists(
        success.data,
      )),
      (error) => dispatch(receiveLists(
        error,
      ))
    );
  };
};
