import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';
import { fetchUserFavoritedPictures } from '../../actions/picture_actions';
import { deleteFavorite } from '../../actions/favorite_actions';
import Favorites from './user_favorites';

const mapSTPs = (state,ownProps) => ({
  pictures: state.entities.pictures
  // user: state.entities.users[ownProps.match.params.userId]
});

const mapDTPs = dispatch => ({
  deleteFavorite: (picId) => dispatch(deleteFavorite(picId)),
  fetchUserFavoritedPictures: (id) => dispatch(fetchUserFavoritedPictures(id))
});

export default withRouter(connect(mapSTPs, mapDTPs)(Favorites));
