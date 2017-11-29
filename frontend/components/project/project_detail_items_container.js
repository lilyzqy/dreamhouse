import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import {fetchPicture} from '../../actions/picture_actions';
import ProjectDetailItems from './project_detail_items';

const mapSTPs = state => ({
  pictures: state.entities.pictures
});
//
const mapDTPs = dispatch => ({
  fetchPicture: (picId) => dispatch(fetchPicture(picId))
});

export default connect(mapSTPs, mapDTPs)(ProjectDetailItems);
