import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  RECEIVE_DETAILS,
  UPDATE_COMMENTS_AFTER_ADD,
  UPDATE_COMMENTS_AFTER_REMOVE,
} from './DetailsActions';

const detailsReducer = handleActions({
  [RECEIVE_DETAILS]: {
    next (state, action) {
      return state.withMutations(newState => {
          newState
            .setIn([ 'isLoaded' ], true)
            .setIn([ 'details' ], action.payload)
            .setIn([ 'comments' ], action.payload.comments)
        }
      )
    },
    throw (state) {
      return state.withMutations(newState =>
        newState
          .setIn([ 'isLoaded' ], false)
      )
    }
  },
  [UPDATE_COMMENTS_AFTER_ADD]: {
    next (state, action) {
      return state.withMutations(newState =>
        newState
          .setIn(['comments' ], action.payload)
      )
    },
    throw (state) {
      return state;
    }
  },
  [UPDATE_COMMENTS_AFTER_REMOVE]: {
    next (state, action) {
      const comments = [].concat(state.get('comments'));

      const index = comments.map(function(e) {
        return e._id;
      }).indexOf(action.payload);

      if (index > -1) {
        comments.splice(index, 1);
      }

      return state.withMutations(newState =>
        newState
          .setIn(['comments' ], comments)
      )
    },
    throw (state) {
      return state;
    }
  },
}, Immutable.fromJS({
  isLoaded: false,
}));

export default detailsReducer;
