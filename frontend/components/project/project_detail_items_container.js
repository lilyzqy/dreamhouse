import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPicture, deletePicture } from '../../actions/picture_actions';
import ProjectDetailItems from './project_detail_items';
import { fetchUserProjects } from '../../actions/project_actions';
import { createFavorite, deleteFavorite } from '../../actions/favorite_actions';

const mapSTPs = state => ({
  projects: state.entities.projects,
  pictures: state.entities.pictures,
  currentUser: state.session.currentUser
});
//
const mapDTPs = dispatch => ({
  createFavorite: (id) => dispatch(createFavorite(id)),
  deleteFavorite: (id) => dispatch(deleteFavorite(id)),
  deletePicture: (picId) => dispatch(deletePicture(picId)),
  fetchPicture: (picId) => dispatch(fetchPicture(picId)),
  fetchUserProjects:(id)=>dispatch(fetchUserProjects(id))
});

export default withRouter(connect(mapSTPs, mapDTPs)(ProjectDetailItems));
