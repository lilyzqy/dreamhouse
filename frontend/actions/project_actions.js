import * as APIUtil from '../util/project_api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const fetchProjects = () => dispatch => (
  APIUtil.fetchProjects().then(projects => dispatch(receiveProjects(projects)))
);
export const fetchProject = (id) => dispatch => (
  APIUtil.fetchProject(id).then(project => dispatch(receiveProject(project)))
);
export const createProjects = (project) => dispatch => (
  APIUtil.createProjects().then(projects => dispatch(receiveProject(project)))
);
export const deleteProject = (projectId) => dispatch => (
  APIUtil.deleteProject(projectId).then(project => dispatch(removeProject(projectId)))
);


const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId
});
