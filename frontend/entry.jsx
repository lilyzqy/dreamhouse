import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';

import {fetchUserProjects, fetchProject, deleteProject, createProject} from './util/project_api_util';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  window.fetchProject = fetchProject;
  window.deleteProject = deleteProject;
  window.createProject = createProject;
  window.fetchUserProjects = fetchUserProjects;

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.dispatch = store.dispatch;
  window.getState = store.getState;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
