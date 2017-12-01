import merge from 'lodash/merge';
import {RECEIVE_PIC} from '../actions/picture_actions';
import {RECEIVE_PROJECTS, RECEIVE_PROJECT, REMOVE_PROJECT} from '../actions/project_actions';

const projectReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PIC:
      let currentPics;
      let newPic;
      let newState;
      if(state[action.picture.project_id]){
        currentPics = state[action.picture.project_id].project_pics_id;
        newPic = action.picture.id;
        if(currentPics.includes(newPic)){
          return state;
        }
        newState = { [action.picture.project_id]: {project_pics_id: currentPics.concat(newPic)}};
        return merge({}, state, newState);
      }
      return state;
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
