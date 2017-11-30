import merge from 'lodash/merge';
import {RECEIVE_PIC} from '../actions/picture_actions';
import {RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT} from '../actions/project_actions';

const projectReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PIC:
      const currentPics = state[action.picture.project_id].project_pics_id;
      const newPic = action.picture.id;
      let newState = { [action.picture.project_id]: {project_pics_id: currentPics.concat(newPic)}};
      return merge({}, state, newState);
    case RECEIVE_PROJECTS:
      return merge({}, action.projects);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.project.id]: action.project});
    case REMOVE_PROJECT:
       newState = merge({},state);
       delete newState[action.projectId];
      return newState;
    default:
      return state;
  }
};

export default projectReducer;
