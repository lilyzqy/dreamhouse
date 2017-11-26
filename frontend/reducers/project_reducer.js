import merge from 'lodash/merge';

import {RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT} from '../actions/project_actions';

const projectReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return merge({}, state, action.projects);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.project.id]: action.project});
    case REMOVE_PROJECT:
       const newState = merge({},state);
       delete newState[action.projectId];
      return newState;
    default:
      return state;
  }
};

export default projectReducer;
