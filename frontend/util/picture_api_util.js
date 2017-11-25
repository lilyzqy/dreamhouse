export const fetchPicture = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pictures/${id}`
  });
};

export const deletePicture = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/pictures/${id}`
  });
};

export const createPicture = (projectId, picture) => {
  return $.ajax({
    method: 'POST',
    url: `/api/project/${projectId}/pictures`,
    data: {picture}
  });
};
