import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPicture } from '../../actions/picture_actions';
import PicDetail from './pic_detail';

const mapSTPs = (state,ownProps) => ({
  picture: state.entities.pictures[ownProps.match.params.picId],
  users: state.entities.users
});

const mapDTPs = dispatch => ({
  fetchPicture: (id) => dispatch(fetchPicture(id))
});

export default withRouter(connect(mapSTPs, mapDTPs)(PicDetail));
