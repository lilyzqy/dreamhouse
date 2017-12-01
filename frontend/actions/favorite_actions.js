import * as APIUtil from '../util/favorite_api_util';

import { receivePic, removePic } from './picture_actions';

export const createFavorite = (id) => dispatch =>(
  APIUtil.createFavorite(id).then(picture => dispatch(receivePic(picture)))
);

export const deleteFavorite = (id) => dispatch => (
  APIUtil.deleteFavorite(id).then(picture => dispatch(removePic(picture.id)))
);
