import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import pictureReducer from './picture_reducer';
import projectReducer from './project_reducer';

export default combineReducers({
  users: userReducer,
  pictures: pictureReducer,
  projects: projectReducer
});
