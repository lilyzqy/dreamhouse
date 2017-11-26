export const fetchUserProjects = (userId) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/users/${userId}/projects`
  });
};

export const fetchProject = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/projects/${id}`
  });
};

export const createProject = (project) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/projects',
    data: {project}
  });
};

export const deleteProject = (projectId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/projects/${projectId}`
  });
};
