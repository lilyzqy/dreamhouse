import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';
import { fetchPicture } from '../../actions/picture_actions';
import PicDetail from './pic_detail';

const mapSTPs = (state,ownProps) => ({
  picture: state.entities.pictures[ownProps.match.params.picId],
  users: state.entities.users
});

const mapDTPs = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchPicture: (id) => dispatch(fetchPicture(id))
});

export default withRouter(connect(mapSTPs, mapDTPs)(PicDetail));
