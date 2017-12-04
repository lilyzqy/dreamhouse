import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';
import { fetchPicture } from '../../actions/picture_actions';
import { fetchProject } from '../../actions/project_actions';
import { deleteFavorite, createFavorite } from '../../actions/favorite_actions';
import PicDetail from './pic_detail';

const mapSTPs = (state,ownProps) => ({
  currentUser: state.session.currentUser,
  picture: state.entities.pictures[ownProps.match.params.picId],
  users: state.entities.users,
  projects: state.entities.projects
});

const mapDTPs = dispatch => ({
  deleteFavorite: (picId) => dispatch(deleteFavorite(picId)),
  createFavorite: (picId) => dispatch(createFavorite(picId)),
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchPicture: (id) => dispatch(fetchPicture(id)),
  fetchProject: (id) => dispatch(fetchProject(id))
});

export default withRouter(connect(mapSTPs, mapDTPs)(PicDetail));
