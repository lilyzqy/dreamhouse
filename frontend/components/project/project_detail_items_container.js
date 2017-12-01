import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import { fetchPicture, deletePicture } from '../../actions/picture_actions';
import ProjectDetailItems from './project_detail_items';

const mapSTPs = state => ({
  pictures: state.entities.pictures
});
//
const mapDTPs = dispatch => ({
  deletePicture: (picId) => dispatch(deletePicture(picId)),
  fetchPicture: (picId) => dispatch(fetchPicture(picId))
});

export default connect(mapSTPs, mapDTPs)(ProjectDetailItems);
