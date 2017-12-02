import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';
import { removePic, fetchUserFavoritedPictures } from '../../actions/picture_actions';
import { deleteFavorite } from '../../actions/favorite_actions';
import Favorites from './user_favorites';

const mapSTPs = (state,ownProps) => ({
  pictures: state.entities.pictures,
  currentUser: state.session.currentUser
});

const mapDTPs = dispatch => ({
  deleteFavorite: (picId) => dispatch(deleteFavorite(picId)),
  removePic: (id) => dispatch(removePic(id)),
  fetchUserFavoritedPictures: () => dispatch(fetchUserFavoritedPictures())
});

export default withRouter(connect(mapSTPs, mapDTPs)(Favorites));
