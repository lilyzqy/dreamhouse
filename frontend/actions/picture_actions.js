import * as APIUtil from '../util/picture_api_util';

export const RECEIVE_PICS = 'RECEIVE_PICS';
export const RECEIVE_PIC = 'RECEIVE_PIC';
export const REMOVE_PIC = 'REMOVE_PIC';

const receivePics = pictures => ({
  type: RECEIVE_PICS,
  pictures
});

const receivePic = picture => ({
  type: RECEIVE_PIC,
  picture
});

const removePic = picId =>({
  type: REMOVE_PIC,
  picId
});

export const fetchPictures = () => dispatch =>(
  APIUtil.fetchPictures().then(pictures => dispatch(receivePics(pictures)))
);

export const fetchPicture = id => dispatch =>(
  APIUtil.fetchPicture(id).then(picture => dispatch(receivePic(picture)))
);

export const createPicture = (projectId, formPicture) => dispatch =>(
  APIUtil.createPicture(projectId, formPicture).then(picture => dispatch(receivePic(picture)))
);

export const deletePicture = id => dispatch =>(
  APIUtil.deletePicture(id).then(picture => dispatch(removePic(id)))
);
