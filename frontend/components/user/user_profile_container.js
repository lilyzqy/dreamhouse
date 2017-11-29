import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUser } from '../../actions/user_actions';
import UserProfile from './user_profile';

const mapSTPs = (state,ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDTPs = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
});

export default withRouter(connect(mapSTPs, mapDTPs)(UserProfile));
