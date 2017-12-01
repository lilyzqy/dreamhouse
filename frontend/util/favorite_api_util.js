export const createFavorite = (pictureId) =>{
  return $.ajax({
    method: 'POST',
    url: `/api/pictures/${pictureId}/favorite`
  });
};

export const deleteFavorite = (pictureId) =>{
  return $.ajax({
    method: 'DELETE',
    url: `/api/pictures/${pictureId}/favorite`
  });
};
