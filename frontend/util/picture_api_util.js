export const fetchPictures = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/pictures'
  });
};

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
    url: `/api/projects/${projectId}/pictures`,
    data: {picture}
  });
};

export const fetchUserFavoritedPictures = () => {
  return $.ajax({
    method: 'GET',
    url:'/api/pictures/current_user_favorited_pictures'
  });
};
