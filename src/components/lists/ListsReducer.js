import { handleActions } from 'redux-actions';
import Immutable from 'immutable';

import {
  RECEIVE_LISTS,
} from './ListsActions';

const listReducer = handleActions({
  [RECEIVE_LISTS]: {
    next (state, action) {
      return state.withMutations(newState => {
          newState
            .setIn(['isLoaded' ], true)
            .setIn(['lists' ], action.payload)
        }
      )
    },
    throw (state) {
      return state.withMutations(newState =>
        newState
          .setIn(['isLoaded' ], false)
      )
    }
  },
}, Immutable.fromJS({
  isLoaded: false,
}));

export default listReducer;
