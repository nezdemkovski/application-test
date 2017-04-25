import { combineReducers } from 'redux-immutable';

import listReducer from './components/lists/ListsReducer';
import detailsReducer from './components/details/DetailsReducer';

const rootReducer = combineReducers({
  listReducer,
  detailsReducer,
});

export default rootReducer;
