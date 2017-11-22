import { combineReducers } from 'redux';
import sessionReducer from './posts_reducer';

export default combineReducers({
  session: sessionReducer
});
