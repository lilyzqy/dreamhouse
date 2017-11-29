import { CLEAR_ERROR } from '../actions/error_actions';
import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const sessionErrorReducer = (state=[],action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERROR:
      return [];
    default:
      return state;
  }
};

export default sessionErrorReducer;
