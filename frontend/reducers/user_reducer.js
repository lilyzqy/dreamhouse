import merge from 'lodash/merge';

import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';

const userReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_USER:
      const user = action.user;
      return merge({},state,{[user.id]: user});
    default:
      return state;
  }
};

export default userReducer;
