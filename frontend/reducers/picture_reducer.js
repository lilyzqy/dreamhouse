import merge from 'lodash/merge';

import { RECEIVE_PICS, RECEIVE_PIC, REMOVE_PIC } from '../actions/picture_actions';

const pictureReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PICS:
      return merge({},state, action.pictures);
    case RECEIVE_PIC:
      return merge({},state,{[action.picture.id]:action.picture});
    case REMOVE_PIC:
      const newState = merge({},state);
      delete newState[action.picId];
      return newState;
    default:
      return state;
  }
};

export default pictureReducer;
